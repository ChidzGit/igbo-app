"""Fill audio gaps from the Nkọwa okwu / IgboAPI dataset on Hugging Face.

Run from the project folder (after tools/fetch_audio.py):
    python -I tools/fetch_audio_igboapi.py            # download + merge
    python -I tools/fetch_audio_igboapi.py --dry-run  # only show matches

Dataset: https://huggingface.co/datasets/nkowaokwu/ibo-dict  (CC BY 4.0, gated:
accept the terms on Hugging Face and log in once with `hf auth login`).
Paper: arXiv 2405.00997.

What it does
  1. Downloads the single metadata file ibo-dict.json (word / example / dialect
     records pointing at audio/archive-*/<id>.mp3|webm). NOT the whole dataset.
  2. For every curriculum item that has no entry in data/audio.js yet, looks for
     an exact match of `ig` or any `alt` (same normalising as fetch_audio.py:
     case, tone marks stripped, dots ị ọ ụ ṅ kept, ?!… removed):
       headword recording  >  example sentence  >  dialect-form recording.
     A headword / dialect match must also share a word with the item's English
     meaning (so 'oji' = black is not given the clip for 'ojì' = iron staff);
     homographs are resolved the same way. Otherwise the item is skipped.
     .mp3 is preferred (plays on iOS); .webm is converted with ffmpeg if
     installed, otherwise skipped.
  3. Downloads only the matched clips (hf_hub_download) and copies them into
     audio/ as <readable-slug>-<hash>-nko.mp3.
  4. Never overwrites an entry with source "parent" (family recordings, see tools/add_parent_audio.py).
     MERGES new entries into data/audio.js; never changes or deletes entries or
     files that came from other sources. Re-runnable: existing entries are kept.
"""
import argparse
import importlib.util
import os
import re
import shutil
import subprocess
import sys
import json

HERE = os.path.dirname(os.path.abspath(__file__))
_spec = importlib.util.spec_from_file_location("fetch_audio", os.path.join(HERE, "fetch_audio.py"))
fa = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(fa)  # reuse norm(), slug(), load/write of data/audio.js

REPO = "nkowaokwu/ibo-dict"
SOURCE = "https://huggingface.co/datasets/nkowaokwu/ibo-dict"
AUTHOR = "Nkọwa okwu / IgboAPI contributors"
LICENSE = "CC BY 4.0"
STOP = {"a", "an", "the", "to", "of", "is", "it", "be", "and", "or", "in", "on", "for", "used", "word",
        "like", "also", "with", "as", "at", "that", "this", "one", "person", "especially", "traditional"}


def strict_key(s):
    """Same as strictKey() in js/app.js: only letters + dots, tones stripped."""
    return re.sub(r"\s", "", fa.norm(s)).replace("'", "")


def tone_key(s):
    """Lower-case with tone marks kept (to prefer an exact-tone match)."""
    import unicodedata
    s = unicodedata.normalize("NFD", s.lower())
    return unicodedata.normalize("NFC", "".join(c for c in s if c.isalnum() or unicodedata.combining(c)))


def words_of(s):
    return {w for w in re.findall(r"[a-z]+", (s or "").lower()) if w not in STOP and len(w) > 1}


def read_items():
    src = open(fa.CURRICULUM, encoding="utf-8").read()
    items = []
    for line in src.splitlines():
        m = re.search(r'\{\s*ig:\s*"([^"]+)"', line)
        if not m:
            continue
        en = re.search(r'\ben:\s*"((?:[^"\\]|\\.)*)"', line)
        a = re.search(r"alt:\s*\[([^\]]*)\]", line)
        items.append({"ig": m.group(1), "en": en.group(1) if en else "",
                      "alt": re.findall(r'"([^"]+)"', a.group(1)) if a else []})
    return items


def build_index(records):
    """norm(text) -> list of candidates {rank, path, text, meaning}."""
    idx = {}

    def add(text, path, rank, meaning):
        if text and path:
            idx.setdefault(fa.norm(text), []).append(
                {"rank": rank, "path": path, "text": text, "meaning": meaning or ""})

    for r in records:
        add(r.get("word"), r.get("pronunciation"), 0, r.get("definitions"))
        for ex in r.get("examples") or []:
            add(ex.get("igbo"), ex.get("pronunciation"), 1, ex.get("english"))
        for d in r.get("dialects") or []:
            add(d.get("word"), d.get("pronunciation"), 2, r.get("definitions"))
    return idx


def choose(item, idx, can_webm):
    """Return (candidate, reason) for the best clip, or (None, reason)."""
    en_words = words_of(item["en"])
    rejected = []
    for w in [item["ig"]] + item["alt"]:
        found = idx.get(fa.norm(w), [])
        if not can_webm:
            found = [c for c in found if c["path"].endswith(".mp3")]
        for rank in (0, 1, 2):
            cands = [c for c in found if c["rank"] == rank]
            if not cands:
                continue
            for c in cands:
                c["overlap"] = len(en_words & words_of(c["meaning"]))
                c["tone"] = tone_key(c["text"]) == tone_key(w)
            if rank != 1:  # a single word: its meaning must match the item's
                best = max(c["overlap"] for c in cands)
                if best == 0:
                    rejected += [f'{c["text"]} = {c["meaning"][:40]}' for c in cands]
                    continue
                cands = [c for c in cands if c["overlap"] == best]
            cands.sort(key=lambda c: (-c["overlap"], not c["tone"], not c["path"].endswith(".mp3"), c["path"]))
            return cands[0], ["headword", "example", "dialect form"][rank]
    if rejected:
        return None, "meaning differs: " + "; ".join(sorted(set(rejected)))
    return None, "no match"


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    from huggingface_hub import hf_hub_download

    ffmpeg = shutil.which("ffmpeg")
    meta_path = hf_hub_download(REPO, "ibo-dict.json", repo_type="dataset")
    records = json.load(open(meta_path, encoding="utf-8"))
    idx = build_index(records)

    audio = fa.load_audio_js()
    have = {strict_key(k) for k in audio}
    items = read_items()
    missing = [it for it in items if not any(strict_key(w) in have for w in [it["ig"]] + it["alt"])]

    new, unmatched, ambiguous, webm_skipped = {}, [], [], []
    for it in missing:
        c, why = choose(it, idx, can_webm=bool(ffmpeg))
        if not c:
            if why.startswith("meaning"):
                ambiguous.append(f'{it["ig"]} ({why})')
            elif ffmpeg is None and choose(it, idx, can_webm=True)[0]:
                webm_skipped.append(it["ig"])
            else:
                unmatched.append(it["ig"])
            continue
        print(f'  {it["ig"]!r:32} <- {why}: {c["text"]!r}  [{c["path"]}]  ({c["meaning"][:50]})')
        name = fa.slug(fa.norm(it["ig"])) + "-nko.mp3"
        dest = os.path.join(fa.AUDIO_DIR, name)
        if not args.dry_run and (not os.path.exists(dest) or os.path.getsize(dest) == 0):
            src = hf_hub_download(REPO, c["path"], repo_type="dataset")
            if c["path"].endswith(".mp3"):
                shutil.copyfile(src, dest)
            else:
                subprocess.run([ffmpeg, "-loglevel", "error", "-y", "-i", src, "-vn", "-ac", "1",
                                "-ar", "44100", "-b:a", "64k", dest], check=True)
        new[it["ig"]] = {"file": "audio/" + name, "author": AUTHOR, "license": LICENSE, "source": SOURCE}

    if not args.dry_run and new:
        merged = dict(audio)
        for k, v in new.items():
            merged.setdefault(k, v)
        fa.write_audio_js(merged)

    size = sum(os.path.getsize(os.path.join(fa.AUDIO_DIR, os.path.basename(v["file"]))) for v in new.values()) \
        if not args.dry_run else 0
    covered = len(items) - len(missing) + sum(1 for it in missing if it["ig"] in new)
    print(f"\nItems: {len(items)}  already had audio: {len(items) - len(missing)}  "
          f"new from IgboAPI{' (dry run)' if args.dry_run else ''}: {len(new)}  added {size / 1048576:.2f} MB  covered now: {covered}")
    if ambiguous:
        print("Skipped, meaning differs:", " | ".join(ambiguous))
    if webm_skipped:
        print("Skipped, only .webm and no ffmpeg:", ", ".join(webm_skipped))
    if unmatched:
        print("Still unmatched:", ", ".join(unmatched))


if __name__ == "__main__":
    main()
