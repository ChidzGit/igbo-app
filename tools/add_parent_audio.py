"""Add family recordings from audio/parent/ to data/audio.js.

Run from the project folder:
    python -I tools/add_parent_audio.py            # add / refresh parent recordings
    python -I tools/add_parent_audio.py --dry-run  # only show what would happen

Each recording is matched to the EXACT `ig` text of a curriculum item (tone marks
and dots count; only Unicode NFC/NFD form and letter case are ignored). The match
is made from the file name ("àkwá.m4a" -> àkwá) or from audio/parent/list.csv
(columns: file,ig). Files that match nothing are listed, never guessed.
Entries are written with author "Family recording", licence "Shared by the family
for this app", source "parent". The app always prefers parent entries over other
clips for the same item, and the fetch_audio*.py tools never overwrite them.
"""
import argparse
import csv
import importlib.util
import os
import re
import sys
import unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
_spec = importlib.util.spec_from_file_location("fetch_audio", os.path.join(HERE, "fetch_audio.py"))
fa = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(fa)

PARENT_DIR = os.path.join(fa.AUDIO_DIR, "parent")
EXTS = {".mp3", ".m4a", ".wav", ".ogg"}


def nfc(s):
    return unicodedata.normalize("NFC", s).strip()


def exact_key(s):
    return nfc(s).casefold()


def curriculum_igs():
    """All curriculum `ig` strings (first spelling of each, NFC)."""
    src = open(fa.CURRICULUM, encoding="utf-8").read()
    igs = {}
    for m in re.finditer(r'\{\s*ig:\s*"((?:[^"\\]|\\.)*)"', src):
        igs.setdefault(exact_key(m.group(1)), nfc(m.group(1)))
    return igs


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()
    os.makedirs(PARENT_DIR, exist_ok=True)
    igs = curriculum_igs()

    mapping = {}  # file name -> ig text wanted
    csv_path = os.path.join(PARENT_DIR, "list.csv")
    if os.path.exists(csv_path):
        with open(csv_path, encoding="utf-8-sig", newline="") as f:
            for row in csv.DictReader(f):
                if row.get("file") and row.get("ig"):
                    mapping[nfc(row["file"])] = row["ig"]

    files = sorted(f for f in os.listdir(PARENT_DIR) if os.path.splitext(f)[1].lower() in EXTS)
    audio = fa.load_audio_js()
    added, unmatched = {}, []
    for f in files:
        wanted = mapping.get(nfc(f)) or os.path.splitext(nfc(f))[0]
        ig = igs.get(exact_key(wanted))
        if not ig:
            unmatched.append(f"{f}  (looked for {wanted!r})")
            continue
        added[ig] = {"file": "audio/parent/" + f, "author": "Family recording",
                     "license": "Shared by the family for this app", "source": "parent"}
        print(f"  {f}  ->  {ig}")

    for f in sorted(mapping):
        if f not in files:
            unmatched.append(f"{f}  (listed in list.csv but no such file)")

    if not args.dry_run:
        # drop parent entries whose file was removed, then add/refresh the current ones
        audio = {k: v for k, v in audio.items() if v.get("source") != "parent" or os.path.exists(os.path.join(fa.ROOT, v["file"]))}
        audio.update(added)
        fa.write_audio_js(audio)
    print(f"\nParent recordings matched: {len(added)}{' (dry run)' if args.dry_run else ''}")
    if unmatched:
        print("NOT matched (fix the file name or list.csv; nothing was guessed):")
        for u in unmatched:
            print("  -", u)


if __name__ == "__main__":
    main()
