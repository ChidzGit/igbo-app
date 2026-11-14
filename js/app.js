/* Mmụta Igbo — a small Duolingo-style trainer. No build step, no server: open index.html. */
(function () {
  "use strict";

  const C = window.CURRICULUM;
  const STORE_KEY = "mmuta-igbo-v1";
  const app = document.getElementById("app");
  const SRS_DAYS = [0, 1, 2, 4, 7, 14];
  const DAILY_LEN = 10;

  /* ───────────── helpers ───────────── */
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (a, n) => shuffle(a).slice(0, n);
  const today = () => dayKey(new Date());
  function dayKey(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function addDays(key, n) { const [y, m, d] = key.split("-").map(Number); const dt = new Date(y, m - 1, d); dt.setDate(dt.getDate() + n); return dayKey(dt); }
  // Toast duration comes from the dur-toast design token (falls back to 2200ms).
  const durBase = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--dur-base")) || 250;
  const toastMs = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--dur-toast")) || 2200;
  function toast(msg) { const t = document.createElement("div"); t.className = "mi-toast text-body"; t.setAttribute("role", "status"); t.textContent = msg; document.body.appendChild(t); setTimeout(() => t.remove(), toastMs()); }

  /* Interface icons: inline SVG, 24×24, 2px round stroke, currentColor (design system v2). */
  const svg = (inner, cls) => `<svg class="mi-icon${cls ? " " + cls : ""}" viewBox="0 0 24 24" aria-hidden="true">${inner}</svg>`;
  const ICON = {
    speaker: svg('<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/><path d="M19 6a8.5 8.5 0 0 1 0 12"/>'),
    close: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
    back: svg('<path d="M15 5l-7 7 7 7"/>'),
    check: svg('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
    lock: svg('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),
    mic: svg('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/>'),
    stop: svg('<rect x="7" y="7" width="10" height="10" rx="2"/>', "mi-icon--fill"),
    flame: svg('<path d="M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-5 1-8.5z"/>'),
    star: svg('<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>'),
    search: svg('<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>'),
    trophy: svg('<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4"/><path d="M12 13v4M8 20h8"/>'),
    test: svg('<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 3h6v3H9z"/><path d="M9 14l2 2 4-4"/>'),
    dumbbell: svg('<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11"/>'),
    chat: svg('<path d="M4 5h11a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9l-4 3.5V14a2 2 0 0 1-1-1.7V7a2 2 0 0 1 1-2z"/><path d="M19 9h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1v3l-3-3h-5"/>'),
    book: svg('<path d="M4 19V5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2z"/><path d="M8 7h8"/>')
  };
  const flagHtml = (full) => `<span class="mi-flag text-label" title="Waiting for a native speaker to confirm"${full ? "" : ' aria-label="Being checked"'}>⚑${full ? " being checked" : ""}</span>`;
  // Last 7 days as a streak row: a day counts when any XP was earned on it.
  function weekRow() {
    const names = ["S", "M", "T", "W", "T", "F", "S"], t = today();
    let html = "";
    for (let i = 6; i >= 0; i--) {
      const d = addDays(t, -i), [y, m, dd] = d.split("-").map(Number), on = (S.xpByDay[d] || 0) > 0;
      html += `<div class="mi-week-day${on ? " is-on" : ""}${i === 0 ? " is-today" : ""}"><span class="mi-week-dot">${on ? ICON.flame : ""}</span><span class="text-caption">${names[new Date(y, m - 1, dd).getDay()]}</span></div>`;
    }
    return `<div class="mi-week" role="img" aria-label="Active days this week">${html}</div>`;
  }

  // Answer normalising: tone marks are always ignored; dots (ị ọ ụ ṅ) count, but a
  // dot-less answer is accepted with a warning.
  const TONES = /[̀́̂̄̌]/g;
  const DOTS = /[̣̇]/g;
  function strictKey(s) { return String(s).normalize("NFD").replace(TONES, "").toLowerCase().replace(/[^\p{L}̣̇]/gu, "").normalize("NFC"); }
  function looseKey(s) { return strictKey(s).normalize("NFD").replace(DOTS, ""); }
  const listenUrl = (w) => "https://nkowaokwu.com/search?word=" + encodeURIComponent(String(w).replace(/[?!.,…]/g, "").trim());

  /* ───────────── native-speaker audio (Lingua Libre via Commons + Nkọwa okwu dataset, data/audio.js) ───────────── */
  const AUDIO = (window.AUDIO && typeof window.AUDIO === "object") ? window.AUDIO : {};
  // Exact lookup (tone marks kept, NFC) first; the tone-stripped key is only a fallback.
  // Family recordings (source "parent") always win. Items with noAudioFallback (tone pairs)
  // never borrow another tone's clip: no sound is better than the wrong sound.
  const nfc = (s) => String(s).normalize("NFC");
  const audioExact = {}, audioByKey = {};
  Object.keys(AUDIO).forEach((k) => { if (AUDIO[k] && AUDIO[k].file) audioExact[nfc(k)] = AUDIO[k]; });
  Object.keys(AUDIO).forEach((k) => { const a = AUDIO[k]; if (a && a.source !== "parent") audioByKey[strictKey(k)] = a; });
  Object.keys(AUDIO).forEach((k) => { const a = AUDIO[k]; if (a && a.source === "parent") audioByKey[strictKey(k)] = a; });
  function audioFor(it) {
    if (!it) return null;
    const words = [it.ig, ...(it.alt || [])];
    for (const w of words) { const a = audioExact[nfc(w)]; if (a && a.source === "parent") return a; }
    for (const w of words) { const a = audioExact[nfc(w)]; if (a) return a; }
    if (it.noAudioFallback) return null;
    for (const w of words) { const a = audioByKey[strictKey(w)]; if (a && a.file) return a; }
    return null;
  }
  // One shared, never-attached Audio element (no native controls bar). Every 🔊 press
  // stops whatever is playing, rewinds to 0 and calls play() synchronously inside the
  // click handler, which is what iOS Safari needs to allow playback.
  let player = null, playingBtn = null, playToken = 0;
  function clearPlaying() { if (playingBtn) playingBtn.classList.remove("is-playing"); playingBtn = null; }
  function getPlayer() {
    if (player) return player;
    player = new Audio();
    player.preload = "auto";
    player.controls = false;
    player.setAttribute("playsinline", "");
    player.setAttribute("webkit-playsinline", "");
    player.addEventListener("ended", clearPlaying);
    player.addEventListener("error", clearPlaying);
    return player;
  }
  function stopAudio() { if (player) { try { player.pause(); } catch (e) {} } clearPlaying(); }
  function playClip(file, btn) {
    const p = getPlayer();
    try { p.pause(); } catch (e) {}
    clearPlaying();
    const url = new URL(file, document.baseURI).href;
    if (p.src !== url) { p.src = url; try { p.load(); } catch (e) {} }
    else { try { p.currentTime = 0; } catch (e) { /* metadata not loaded yet: starts at 0 anyway */ } }
    const token = ++playToken;
    playingBtn = btn || null;
    if (btn) btn.classList.add("is-playing");
    let pr;
    try { pr = p.play(); } catch (e) { clearPlaying(); return; }
    // Autoplay blocked / offline & not cached: just drop the playing state.
    if (pr && pr.catch) pr.catch(() => { if (token === playToken) clearPlaying(); });
  }
  // 🔊 control: plays in-app when we have a clip, otherwise links to Nkọwa okwu.
  // SpeakerButton (44px). badge=true adds the "native speaker" Badge after in-app clips.
  function speakerBtn(it, badge) {
    const a = audioFor(it);
    if (a) return `<button type="button" class="mi-speaker" data-audio="${esc(a.file)}" title="Play native speaker audio" aria-label="Play ${esc(it.ig)}">${ICON.speaker}</button>${badge ? `<span class="mi-badge mi-badge--native text-label" title="Recorded by a native speaker">native speaker</span>` : ""}`;
    return `<a class="mi-speaker mi-speaker--link" href="${listenUrl(it.ig)}" target="_blank" rel="noopener" title="Hear it on Nkọwa okwu" aria-label="Hear ${esc(it.ig)} on Nkọwa okwu (opens a new tab)">${ICON.speaker}</a>`;
  }
  function listenBtn(it) { return speakerBtn(it, true); }
  // WordRow: Igbo + flag, English (· section), optional strength meter, speaker.
  function wordRow(it, sub, strength) {
    const side = (strength === undefined ? "" : `<span class="mi-strength" title="Strength ${strength}/5" aria-label="Strength ${strength} of 5">${[1, 2, 3, 4, 5].map((n) => `<i class="${n <= strength ? "is-on" : ""}"></i>`).join("")}</span>`) + speakerBtn(it, false);
    return `<div class="mi-word-row"><div class="mi-word-row-main"><p class="mi-word-row-ig mi-ig text-option">${esc(it.ig)}${it.unsure ? " " + flagHtml(false) : ""}</p><p class="mi-word-row-en text-caption">${esc(sub)}</p></div><div class="mi-word-row-side">${side}</div></div>`;
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest && e.target.closest("button[data-audio]");
    if (b) { e.preventDefault(); e.stopPropagation(); playClip(b.dataset.audio, b); }
  }, true);

  /* ───────────── catalogue ───────────── */
  const allLessons = [];
  const itemIndex = {}; // key -> {item, lesson, section}
  C.sections.forEach((sec) => sec.lessons.forEach((les, li) => {
    allLessons.push({ sec, les, li });
    les.items.forEach((it) => {
      it._key = les.id + "|" + it.ig;
      Object.defineProperty(it, "_ctx", { value: { les, sec }, enumerable: false });
      itemIndex[it._key] = { item: it, lesson: les, section: sec };
    });
  }));
  const findLesson = (id) => allLessons.find((x) => x.les.id === id);

  /* ───────────── state ───────────── */
  const defaults = () => ({ xp: 0, streak: 0, lastActive: null, completed: {}, levels: {}, nodes: {}, words: {}, daily: {}, xpByDay: {}, goal: 30, seenVersion: null, speakOn: true, speakAuto: true, autoAudio: true });
  let S;
  try { S = Object.assign(defaults(), JSON.parse(localStorage.getItem(STORE_KEY) || "{}")); } catch (e) { S = defaults(); }

  /* ───────────── levels (work packages A/B): data-driven, 3 levels per skill now, 5 later ─────────────
     Switch to 5 levels: set `levelsPerSkill: 5` in data/curriculum.js (or change LEVELS_PER_SKILL below).
     Progress is stored per level KEY (not index), so S.levels survives a change from 3 to 5:
       S.levels[lessonId] = { r: { meet: {acc, best, n, date}, build: {...}, recap: {...} }, carry: [itemKey, ...], migrated?: true }
     S.completed[lessonId] keeps its old meaning ("node complete", gates the next lesson) and is never removed. */
  const LEVELS_PER_SKILL = Math.max(1, Math.min(5, Math.round(+C.levelsPerSkill) || 3));
  // Level template table: all 5 Duolingo-style levels. With 3 levels we use meet / build / recap.
  const LEVEL_DEFS = {
    meet:    { name: "Meet",    xp: 10, recipe: "Inline NEW WORD items, then recognition (meaning, sentence bank), small fill-ins, 1 match; ends with 2 HARD en->ig items" },
    practise:{ name: "Practise", xp: 10, recipe: "Second group of new words inline, recognition + bank + fill-in, 1 match; 2 HARD" },
    build:   { name: "Build",   xp: 10, recipe: "Gap-fills, longer sentences (bank up to 8 tiles), typing, 1 match; 2 HARD typed" },
    produce: { name: "Produce", xp: 10, recipe: "Mostly gap-fill + typing + bank, only a few meaning items; 3 HARD typed (decoys grammar-confusable)" },
    recap:   { name: "Recap",   xp: 20, recipe: "Banner 'Try the hardest exercises', typed / gap-fill / bank only, previous mistakes, no matching, no gear-change card" }
  };
  const LEVEL_SETS = { 1: ["recap"], 2: ["meet", "recap"], 3: ["meet", "build", "recap"], 4: ["meet", "practise", "build", "recap"], 5: ["meet", "practise", "build", "produce", "recap"] };
  // levelsFor(lesson): ordered level keys for a skill node (letters lessons: one level; D/H hook: path nodes read this).
  function levelsFor(les) { return (les.type === "letters" || les.levels === 1) ? ["recap"] : LEVEL_SETS[Math.min(5, Math.max(1, +les.levels || LEVELS_PER_SKILL))].slice(); }
  function levelRec(id) { if (!S.levels) S.levels = {}; return S.levels[id] || (S.levels[id] = { r: {}, carry: [] }); }
  function nodeProgress(les) {
    const keys = levelsFor(les), r = (S.levels && S.levels[les.id] && S.levels[les.id].r) || {};
    const done = keys.filter((k) => r[k]).length;
    return { keys, done, total: keys.length, next: keys.find((k) => !r[k]) || null, complete: done === keys.length };
  }
  // Migration (idempotent): an old completed lesson => every level done. Never touches S.completed.
  function migrateState() {
    if (!S.levels || typeof S.levels !== "object") S.levels = {};
    if (!S.nodes || typeof S.nodes !== "object") S.nodes = {}; // optional path nodes: practice "pr:<unit>:<n>", unit review "ur:<unit>", dialogues "dlg-..." -> { n, best, date, passed? }
    Object.keys(S.completed || {}).forEach((id) => {
      const rec = S.levels[id];
      if (rec && rec.r) return;
      const c = S.completed[id] || {};
      const r = {}; Object.keys(LEVEL_DEFS).forEach((k) => { r[k] = { acc: c.best || 0, best: c.best || 0, n: c.times || 1, date: c.date || null, migrated: true }; });
      S.levels[id] = { r, carry: [], migrated: true };
    });
  }
  migrateState();
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { /* storage blocked: progress lives for this tab only */ } }
  function liveStreak() { if (!S.lastActive) return 0; return (S.lastActive === today() || S.lastActive === addDays(today(), -1)) ? S.streak : 0; }
  function markActive() {
    const t = today();
    if (S.lastActive === t) return;
    S.streak = S.lastActive === addDays(t, -1) ? S.streak + 1 : 1;
    S.lastActive = t;
  }
  function addXp(n) { S.xp += n; S.xpByDay[today()] = (S.xpByDay[today()] || 0) + n; }
  function grade(key, ok) {
    const w = S.words[key] || { s: 0, seen: 0, wrong: 0 };
    w.seen++; w.last = today();
    if (ok) w.s = Math.min(5, w.s + 1); else { w.s = Math.max(0, w.s - 2); w.wrong++; }
    w.due = addDays(today(), ok ? SRS_DAYS[w.s] : 0);
    S.words[key] = w;
  }
  function refreshStats() {
    document.getElementById("stat-streak").textContent = liveStreak();
    document.getElementById("stat-xp").textContent = S.xp;
  }

  function lessonUnlocked(sec, li) { return li === 0 || !!S.completed[sec.lessons[li - 1].id]; }
  // Item groups introduced by a skill: A in the first level, B in the second (lessons of up to 5 items: all in A).
  function groupsFor(les) { const n = les.items.length, k = n <= 5 ? n : Math.ceil(n / 2); return { A: les.items.slice(0, k), B: les.items.slice(k) }; }
  // Words join the daily test once their level is done (A after level 1, B after level 2, all when the node is complete).
  function learnedOf(les) {
    if (S.completed[les.id]) return les.items;
    const keys = levelsFor(les), r = (S.levels[les.id] && S.levels[les.id].r) || {}, g = groupsFor(les);
    return [...(r[keys[0]] ? g.A : []), ...(keys[1] && r[keys[1]] ? g.B : [])];
  }
  function learnedItems() { return allLessons.flatMap((x) => learnedOf(x.les).map((it) => ({ it, x }))); }

  /* ───────────── exercise builders ───────────── */
  function poolFor(sec) { return sec.lessons.flatMap((l) => l.items); }
  /* Plausible wrong answers. Candidates are always real curriculum items/tokens, ranked by
     how easy they are to confuse with the answer; we pick n at random from the best ~6. */
  const ALL_ITEMS = () => Object.values(itemIndex).map((v) => v.item);
  // Plain form for comparing: no tones, no dots, no punctuation, lower case, single spaces.
  const plain = (s) => String(s).normalize("NFD").replace(TONES, "").replace(DOTS, "").toLowerCase().replace(/[^\p{L}\s]/gu, "").replace(/\s+/g, " ").trim();
  // Text as shown, ignoring only case/punctuation/spacing ("Ọ dị mma" == "Ọ dị mma.").
  const shown = (s) => String(s).normalize("NFC").toLowerCase().replace(/[^\p{L}\p{N}\p{M}\s]/gu, "").replace(/\s+/g, " ").trim();
  // English meanings: "goodbye / see you; (formal)" -> parts {goodbye, see you}. Used so that two items that
  // mean the same thing are never offered as right-vs-wrong, and either is accepted when typing.
  const enNorm = (s) => String(s).toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
  const enPartsCache = new Map();
  function enParts(en) {
    let r = enPartsCache.get(en);
    if (!r) {
      const base = String(en).replace(/\([^)]*\)/g, " ");
      r = base.split(/[\/;]/).map(enNorm).filter(Boolean);
      if (!r.length) r = [enNorm(en)];
      enPartsCache.set(en, r);
    }
    return r;
  }
  const enKey = (en) => enParts(en).slice().sort().join("|");
  const enOverlap = (a, b) => { const pb = enParts(b.en); return enParts(a.en).some((x) => pb.includes(x)); };
  let enKeyIndex = null;
  function sameEnItems(it) {
    if (!enKeyIndex) { enKeyIndex = new Map(); ALL_ITEMS().forEach((p) => { if (p._ctx.les.type === "letters") return; const k = enKey(p.en); if (!enKeyIndex.has(k)) enKeyIndex.set(k, []); enKeyIndex.get(k).push(p); }); }
    return enKeyIndex.get(enKey(it.en)) || [it];
  }
  // Split on a separator outside parentheses.
  function splitTop(s, sep) { const out = []; let d = 0, cur = ""; for (const ch of String(s)) { if (ch === "(") d++; else if (ch === ")") d = Math.max(0, d - 1); if (ch === sep && !d) { out.push(cur); cur = ""; } else cur += ch; } out.push(cur); return out.map((x) => x.trim()); }
  // English prompt for en->ig exercises: first meaning big, the rest small as a hint.
  function enPromptHtml(en) {
    const parts = splitTop(en, "/");
    if (parts.length < 2 || parts.some((x) => !/\p{L}/u.test(x))) return `<span class="text-word">${esc(en)}</span>`;
    return `<span class="text-word">${esc(parts[0])}</span><span class="mi-prompt-alt text-caption mi-muted">also: ${esc(parts.slice(1).join(" / "))}</span>`;
  }
  const wordCount = (s) => String(s).trim().split(/\s+/).filter(Boolean).length;
  const cleanTok = (t) => String(t).normalize("NFC").toLowerCase().replace(/[.,!?;:…"“”]+$/u, "").replace(/^["“”]+/u, "");
  function editSim(a, b) {
    if (!a.length || !b.length) return 0;
    let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
    for (let i = 1; i <= a.length; i++) {
      const cur = [i];
      for (let j = 1; j <= b.length; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return 1 - prev[b.length] / Math.max(a.length, b.length);
  }
  // Letters that learners mix up (dotted twins, digraph families, near sounds).
  const CONFUSABLE = [["i", "ị"], ["o", "ọ"], ["u", "ụ"], ["n", "ṅ", "ny", "nw", "m"], ["g", "gb", "gh", "gw"], ["k", "kp", "kw"],
    ["s", "sh"], ["ch", "j"], ["a", "e"], ["b", "gb", "p"], ["p", "kp"], ["w", "gw", "kw", "nw"], ["y", "ny"], ["h", "gh"], ["d", "t"], ["f", "v"], ["r", "l"], ["s", "z"]];
  const confusable = (a, b) => { a = a.toLowerCase(); b = b.toLowerCase(); return CONFUSABLE.some((g) => g.includes(a) && g.includes(b)); };
  // How alike two Igbo strings look/sound (0 … ~10).
  function igSim(a, b) {
    const pa = plain(a), pb = plain(b);
    let s = 4 * editSim(pa.replace(/ /g, ""), pb.replace(/ /g, ""));
    if (pa === pb) s += 4; // dotted/undotted or tone twins (isi / ịsị, àkwá / ákwà)
    const wa = String(a).split(/\s+/).map(strictKey).filter(Boolean), wb = String(b).split(/\s+/).map(strictKey).filter(Boolean);
    const setB = new Set(wb), shared = [...new Set(wa)].filter((w) => setB.has(w)).length;
    s += 3 * shared / Math.max(1, Math.max(new Set(wa).size, setB.size)); // shared words ("Ana m eri nri" / "Ana m aga ahịa")
    if (wa.length === wb.length) {
      s += 0.7;
      if (wa.length > 1 && wa.filter((w, k) => w === wb[k]).length === wa.length - 1) s += 1.5; // same frame, one word swapped
    }
    let pre = 0; while (pre < Math.min(pa.length, pb.length, 4) && pa[pre] === pb[pre]) pre++;
    s += 0.3 * pre;
    s += 0.8 * (1 - Math.abs(pa.length - pb.length) / Math.max(pa.length, pb.length, 1));
    return s;
  }
  const numOf = (it) => { const m = /^\s*([\d,]+)/.exec(it.en); return m ? +m[1].replace(/,/g, "") : null; };
  function kindOf(it) {
    const c = it._ctx;
    if (c && c.les.type === "letters") return "letter";
    if (numOf(it) !== null) return "number";
    return c ? c.sec.id : "";
  }
  // Random pick without replacement that favours the best-ranked candidates.
  function pickRanked(list, n) {
    const pool = list.map((x, r) => ({ x, w: 1 / (r + 1.5) })), out = [];
    while (out.length < n && pool.length) {
      let t = Math.random() * pool.reduce((a, b) => a + b.w, 0), k = 0;
      while (k < pool.length - 1 && (t -= pool[k].w) > 0) k++;
      out.push(pool.splice(k, 1)[0].x);
    }
    return out;
  }
  function distract(item, field, n) {
    // Never offer a distractor that shares the Igbo OR English text with the answer
    // (e.g. "Ọ dị mma" appears in two lessons with slightly different glosses), nor one
    // that is an accepted alternative answer, nor two options with the same text.
    const answers = new Set([item.ig, ...(item.alt || [])].map(shown));
    const ctx = item._ctx || {}, kind = kindOf(item), isLetter = kind === "letter", num = numOf(item);
    const scored = [];
    for (const p of ALL_ITEMS()) {
      if (p === item || shown(p.ig) === shown(item.ig) || shown(p.en) === shown(item.en)) continue;
      if ([p.ig, ...(p.alt || [])].some((a) => answers.has(shown(a)))) continue;
      if (!isLetter && enOverlap(item, p)) continue; // same English meaning = also a right answer
      const pk = kindOf(p), pc = p._ctx || {};
      if (isLetter !== (pk === "letter")) continue; // letters only against letters
      let s = 0;
      if (pc.les === ctx.les) s += 2; else if (pc.sec === ctx.sec) s += 1;
      if (pk === kind) s += 2;
      if (isLetter && confusable(p.ig, item.ig)) s += 8;
      if (field === "ig") s += 1.2 * igSim(item.ig, p.ig);
      else {
        s += 0.4 * igSim(item.ig, p.ig);
        s += 2 * editSim(plain(item.en), plain(p.en)) + 1.5 * (1 - Math.abs(item.en.length - p.en.length) / Math.max(item.en.length, p.en.length));
        if (item.en.split(/\s+/).length === p.en.split(/\s+/).length) s += 0.5;
      }
      const pn = numOf(p);
      if (num !== null && pn !== null) s += 3 / (1 + Math.abs(Math.log((pn + 1) / (num + 1))) * 3); // neighbouring numbers
      scored.push({ p, s: s + Math.random() * 0.8 });
    }
    scored.sort((a, b) => b.s - a.s);
    const top = [], seen = new Set([shown(item[field])]);
    for (const { p } of scored) { const k = shown(p[field]); if (seen.has(k)) continue; seen.add(k); top.push(p); if (top.length >= Math.max(6, n)) break; }
    return pickRanked(top, n);
  }
  // Word-bank decoys: real tokens from the curriculum that look like the sentence's own words.
  const tokenCtx = (() => {
    const m = new Map(); // token -> {les:Set, sec:Set}
    ALL_ITEMS().filter((it) => it._ctx.les.type !== "letters").forEach((it) => it.ig.split(/\s+/).forEach((t) => {
      t = cleanTok(t);
      if (!t || t.includes("…")) return;
      if (!m.has(t)) m.set(t, { les: new Set(), sec: new Set() });
      m.get(t).les.add(it._ctx.les); m.get(t).sec.add(it._ctx.sec);
    }));
    return m;
  })();
  function bankDecoys(item, tokens, n) {
    const own = new Set(tokens.map(shown)), ownPlain = new Set(tokens.map(plain)), ctx = item._ctx;
    const scored = [];
    for (const [t, c] of tokenCtx) {
      // never a dot/tone twin of a real tile (i/ị, o/ọ, n/ṅ, or same letters ignoring tones)
      if (own.has(shown(t)) || !shown(t) || ownPlain.has(plain(t))) continue;
      let best = 0;
      for (const w of tokens) {
        let s = 4 * editSim(plain(w), plain(t));
        if (plain(w).slice(0, 2) === plain(t).slice(0, 2)) s += 0.5;
        best = Math.max(best, s);
      }
      if (c.les.has(ctx.les)) best += 2; else if (c.sec.has(ctx.sec)) best += 1;
      scored.push({ t, s: best + Math.random() * 0.8 });
    }
    scored.sort((a, b) => b.s - a.s);
    const top = [], seen = new Set();
    for (const { t } of scored) { const k = plain(t); if (seen.has(k)) continue; seen.add(k); top.push(t); if (top.length >= 6) break; }
    return pickRanked(top, n);
  }
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) window.__mmutaDebug = { distract, bankDecoys, items: ALL_ITEMS, get R() { return R; }, get S() { return S; }, buildLevel: (id, k) => { const x = findLesson(id); return buildLevel(x.sec, x.les, k); }, findLesson, startLevel: (id, k) => startLevel(findLesson(id), k) };
  function mk(type, item, sec, les) { return { type, item, pool: poolFor(sec), lesson: les, letters: les.type === "letters" }; }
  const CAP = 15; // exercises in a fresh lesson, before re-queued mistakes
  const letterWord = (it) => { const w = String(it.ex || "").split(/\s+[—–-]\s+/)[0].trim(); return plain(w).startsWith(plain(it.ig)) ? w : ""; }; // only real example words that start with the letter
  const primaryType = (les) => les.type === "letters" ? "mc-lhear" : "mc-ig2en";
  // One extra exercise type per item (never two of the same kind): sentences of 3-8 words get a bank OR a
  // multiple-choice, typing only for answers of up to 6 words, longer ones rely on "choose the meaning".
  function extraTypes(item, les) {
    if (les.type === "letters") return letterWord(item) ? ["mc-lword"] : [];
    const n = wordCount(item.ig), blank = item.ig.includes("…");
    if (n > 8) return [];
    const t = ["mc-en2ig"];
    if (n <= 6) t.push("type");
    return n >= 2 && !blank ? ["bank", "mc-en2ig"] : t;
  }
  function typePicker() {
    let speak = 0;
    return (it, les, withPrimary) => {
      const pool = [...(withPrimary ? [primaryType(les)] : []), ...extraTypes(it, les)];
      if (S.speakOn && les.type !== "letters" && !speak && Math.random() < 0.25) { speak++; return "speak"; }
      return pick(pool.length ? pool : [primaryType(les)], 1)[0];
    };
  }
  // Match sets never hold two items with the same English meaning.
  function matchSet(items, max) {
    const out = [];
    for (const it of shuffle(items)) { if (out.length >= max) break; if (!out.some((o) => enOverlap(o, it) || shown(o.ig) === shown(it.ig))) out.push(it); }
    return out;
  }
  function buildLesson(sec, les, opts) {
    const items = les.items, letters = les.type === "letters";
    const repeat = !!S.completed[les.id] || !!(opts && (opts.quiz || opts.repeat));
    const prim = primaryType(les), q = [];
    // Listen & read lessons (long sentences, proverbs): card + "what does it mean?" only, no typing or word banks.
    if (les.lessonMode === "read") {
      items.forEach((it) => { if (!repeat) q.push(mk("intro", it, sec, les)); });
      shuffle(items).forEach((it) => q.push(mk("mc-ig2en", it, sec, les)));
      return q;
    }
    const matchEx = () => { const m = matchSet(items, 5); return m.length >= 2 ? { type: "match", items: m, lesson: les } : null; };
    if (!repeat) {
      // New = not met before in another lesson (keys are per lesson, so compare the Igbo text).
      const met = new Set();
      Object.values(itemIndex).forEach((v) => { if (v.lesson !== les && S.words[v.item._key]) met.add(shown(v.item.ig)); });
      const m = matchEx();
      const intros = items.filter((it) => !met.has(shown(it.ig)));
      const primSlots = Math.max(0, CAP - intros.length - (m ? 1 : 0));
      const gets = new Set(shuffle(items).slice(0, primSlots));
      items.forEach((it) => { if (!met.has(shown(it.ig))) q.push(mk("intro", it, sec, les)); if (gets.has(it)) q.push(mk(prim, it, sec, les)); });
      if (m) q.push(m);
      const pickT = typePicker(), spare = CAP - q.length;
      shuffle(items.filter((it) => extraTypes(it, les).length)).slice(0, Math.max(0, spare)).forEach((it) => q.push(mk(pickT(it, les, false), it, sec, les)));
    } else {
      const m = matchEx(); if (m) q.push(m);
      const pickT = typePicker();
      shuffle(items).concat(pick(items, 3)).slice(0, letters ? 12 : 11).forEach((it, k) => q.push(mk(letters && k % 2 ? "mc-lword" : pickT(it, les, true), it, sec, les)));
    }
    return q.map((e) => e.type === "mc-lword" && !letterWord(e.item) ? Object.assign(e, { type: "mc-lhear" }) : e);
  }

  /* ───────────── level builder (WP B) ───────────── */
  // Exercise instruction texts (fixed catalogue). TODO(G): the types marked "G" are registered here but built/rendered by the next pass via EXT.
  const INSTR = {
    "new-word": "Select the correct meaning", "mc-ig2en": "Select the correct meaning", "mc-en2ig": "Select the correct Igbo",
    "bank": "Translate this sentence", "type": "Write this in Igbo", "match": "Tap the pairs", "speak": "Speak this sentence",
    "fill-blank": "Fill in the blank",
    /* G: */ "bank-en": "Write this in English", "listen-tap": "Tap what you hear", "listen-mc": "What did you hear?", "type-blank": "Type the missing word",
    "pattern": "Select the missing word", "reply": "Complete the chat", "tf": "True or false?", "next-line": "What comes next?"
  };
  // Extension registry for new exercise types (G/I): EXT[type] = { render(ex) -> {body, foot?}, bind(ex) }. Call submit(ok, solution) to grade.
  const EXT = {};
  window.__mmutaExt = EXT; // hook for G/I
  const typeOpts = (it) => { const n = wordCount(it.ig), b = it.ig.includes("…"); return { bank: n >= 2 && n <= 8 && !b, type: n <= 6 && !b, "fill-blank": n >= 3 && n <= 8 && !b }; };
  const isMcType = (t) => t.startsWith("mc") || t === "new-word" || t === "fill-blank";

  /* ───────────── new exercise types (WP G): listen-mc, listen-tap, bank-en, pattern — all registered in EXT ───────────── */
  const hasAudio = (it) => !!audioFor(it);
  const igToks = (it) => it.ig.split(/\s+/).map(cleanTok).filter(Boolean);
  const notLetters = (it) => it._ctx && it._ctx.les.type !== "letters" && it._ctx.les.lessonMode !== "read";
  // Audio-only types are only ever scheduled for items that have a clip (never a silent speaker).
  const okListenMc = (it) => notLetters(it) && hasAudio(it) && !it.ig.includes("…") && wordCount(it.ig) <= 8;
  const okListenTap = (it) => { const n = igToks(it).length; return notLetters(it) && hasAudio(it) && !it.ig.includes("…") && n >= 2 && n <= 7; };
  // English tiles for an Igbo sentence: first meaning, lower-case, no punctuation, 2-6 words.
  const enRaw = (it) => String(it.en).replace(/\([^)]*\)/g, " ").split(/[\/;]/)[0].replace(/\s+/g, " ").trim();
  const enToks = (it) => enRaw(it).split(" ").map((t) => t.toLowerCase().replace(/[.,!?;:…"“”]+$/u, "").replace(/^["“”]+/u, "")).filter(Boolean);
  const EN_WORD = /^[a-z][a-z'’-]*$/;
  const okBankEn = (it) => { const t = enToks(it); return notLetters(it) && !it.ig.includes("…") && t.length >= 2 && t.length <= 6 && t.every((w) => EN_WORD.test(w)); };
  let enWordPool = null;
  function enDecoys(it, toks, n) {
    if (!enWordPool) { enWordPool = new Map(); ALL_ITEMS().filter(notLetters).forEach((p) => enToks(p).forEach((w) => { if (!EN_WORD.test(w) || w.length < 2) return; if (!enWordPool.has(w)) enWordPool.set(w, new Set()); enWordPool.get(w).add(p._ctx.sec); })); }
    const own = new Set(toks), same = [], other = [];
    for (const [w, secs] of enWordPool) { if (own.has(w)) continue; (secs.has(it._ctx.sec) ? same : other).push(w); }
    return shuffle(same).slice(0, n).concat(shuffle(other)).slice(0, n);
  }
  // NEW PATTERN: three sentences of the same lesson that share their first two or last two words.
  // Two become examples, the third is the blank. Returns null when the lesson has no such trio (then no pattern exercise).
  function findPattern(les) {
    if (les.type === "letters" || les.lessonMode === "read") return null;
    const groups = new Map();
    les.items.forEach((it) => {
      if (it.ig.includes("…")) return;
      const raw = it.ig.split(/\s+/), c = raw.map(cleanTok);
      if (raw.length < 3 || raw.length > 6 || c.some((w) => !w)) return;
      [["s", c.slice(0, 2)], ["e", c.slice(-2)]].forEach(([side, fr]) => {
        const k = side + "|" + fr.join(" ");
        if (!groups.has(k)) groups.set(k, { side, frame: fr, list: [] });
        groups.get(k).list.push({ it, raw, c });
      });
    });
    const ok = [...groups.values()].filter((g) => new Set(g.list.map((x) => shown(x.it.ig))).size >= 3);
    if (!ok.length) return null;
    const g = shuffle(ok).sort((a, b) => b.list.length - a.list.length)[0], list = shuffle(g.list);
    const tgt = list[0], exs = list.slice(1, 3);
    const idxs = tgt.c.map((w, k) => k).filter((k) => g.side === "s" ? k >= 2 : k < tgt.c.length - 2);
    return { side: g.side, frame: g.frame, target: tgt.it, examples: exs.map((x) => x.it), blankIdx: pick(idxs, 1)[0] };
  }
  const hlSentence = (it, side) => { const t = it.ig.split(/\s+/); return t.map((w, k) => (side === "s" ? k < 2 : k >= t.length - 2) ? `<mark class="mi-hl">${esc(w)}</mark>` : esc(w)).join(" "); };

  // Shared bits for the new types.
  const listenOnly = (it) => { const a = audioFor(it); return `<button type="button" class="mi-speaker mi-speaker--big" data-audio="${esc(a.file)}" title="Play the audio" aria-label="Play the audio">${ICON.speaker}</button>`; };
  const checkBtn = (btn) => btn("check", "Check").replace(">Check", " disabled>Check");
  const skipListen = '<button class="mi-btn mi-btn--secondary mi-btn--block text-button mi-mt-2" id="skip-listen" type="button">Can\'t listen now</button>';
  function bindSkipListen(ex, to) {
    const b = document.getElementById("skip-listen"); if (!b) return;
    // No penalty: the same item comes back as a text exercise.
    b.onclick = () => { const o = typeOpts(ex.item); R.queue[R.i] = Object.assign({}, ex, { type: to === "bank" && !o.bank ? "mc-ig2en" : to }); renderStep(); };
  }
  function bankMarkup(c, label, promptHtml, tokens, decoys, cls) {
    R.state.tokens = tokens; R.state.built = []; R.state.tiles = shuffle([...tokens, ...decoys]);
    return `${c.head(label)}<div class="mi-prompt-word">${promptHtml}</div>
      <div class="mi-bank-answer${cls}" id="built" aria-label="Your answer"></div>
      <div class="mi-bank${cls}">${R.state.tiles.map((t, k) => `<button class="mi-tile text-option" data-t="${k}">${esc(t)}</button>`).join("")}</div>`;
  }
  const mcMarkup = (opts, ig) => `<div class="mi-choices">${opts.map((o, k) => `<button class="mi-choice text-option" data-v="${esc(o)}"><span class="mi-choice-key text-caption" aria-hidden="true">${k + 1}</span><span class="mi-choice-text${ig ? " mi-ig" : ""}">${esc(o)}</span></button>`).join("")}</div>`;
  function bindMc() {
    const check = document.getElementById("check");
    app.querySelectorAll(".mi-choice").forEach((b) => b.onclick = () => {
      if (R.state.answered) return;
      app.querySelectorAll(".mi-choice").forEach((x) => x.classList.remove("is-selected"));
      b.classList.add("is-selected"); R.state.value = b.dataset.v; check.disabled = false;
    });
    check.onclick = () => submit(R.state.value === R.state.correct, R.state.solution);
  }
  function bindBank(isRight, solution) {
    const check = document.getElementById("check"), built = document.getElementById("built");
    const redraw = () => {
      built.innerHTML = R.state.built.map((k, n) => `<button class="mi-tile text-option" data-n="${n}">${esc(R.state.tiles[k])}</button>`).join("");
      app.querySelectorAll(".mi-bank .mi-tile").forEach((b) => { const used = R.state.built.includes(+b.dataset.t); b.classList.toggle("is-used", used); b.disabled = used; b.setAttribute("aria-hidden", used ? "true" : "false"); });
      built.querySelectorAll(".mi-tile").forEach((b) => b.onclick = () => { if (R.state.answered) return; R.state.built.splice(+b.dataset.n, 1); redraw(); });
      check.disabled = !R.state.built.length;
    };
    app.querySelectorAll(".mi-bank .mi-tile").forEach((b) => b.onclick = () => { if (R.state.answered || b.classList.contains("is-used")) return; R.state.built.push(+b.dataset.t); redraw(); });
    check.onclick = () => submit(isRight(R.state.built.map((k) => R.state.tiles[k]).join(" ")), solution);
  }
  const igRight = (it) => (b) => [it.ig, ...(it.alt || [])].some((a) => shown(a) === shown(b));

  EXT["listen-mc"] = {
    render(ex, c) {
      const it = ex.item, opts = shuffle([it, ...distract(it, "ig", 5).filter((p) => plain(p.ig) !== plain(it.ig)).slice(0, 2)]).map((o) => o.ig);
      R.state.correct = it.ig; R.state.solution = it.ig;
      return { body: `${c.head(INSTR["listen-mc"])}<div class="mi-prompt-word mi-listen">${listenOnly(it)}</div>${mcMarkup(opts, true)}`, foot: checkBtn(c.btn) + skipListen };
    },
    bind(ex) { bindMc(); bindSkipListen(ex, "mc-ig2en"); }
  };
  EXT["listen-tap"] = {
    render(ex, c) {
      const it = ex.item, toks = igToks(it);
      return { body: bankMarkup(c, INSTR["listen-tap"], `<span class="mi-listen">${listenOnly(it)}</span>`, toks, bankDecoys(it, toks, Math.max(1, Math.min(2, 8 - toks.length))), " mi-ig"), foot: checkBtn(c.btn) + skipListen };
    },
    bind(ex) { bindBank(igRight(ex.item), ex.item.ig); bindSkipListen(ex, "bank"); }
  };
  EXT["bank-en"] = {
    render(ex, c) {
      const it = ex.item, toks = enToks(it);
      R.state.enSolution = toks.join(" ");
      return { body: bankMarkup(c, INSTR["bank-en"], `<span class="text-word mi-ig">${esc(it.ig)}</span>${speakerBtn(it, false)}${it.unsure ? flagHtml(true) : ""}`, toks, enDecoys(it, toks, Math.max(1, Math.min(2, 8 - toks.length))), ""), foot: checkBtn(c.btn) };
    },
    bind(ex) { const it = ex.item; bindBank((b) => sameEnItems(it).concat(it).some((p) => enParts(p.en).includes(enNorm(b))), R.state.enSolution); }
  };
  EXT.pattern = {
    render(ex, c) {
      const p = ex.pat, it = ex.item, toks = it.ig.split(/\s+/), k = p.blankIdx, ans = cleanTok(toks[k]);
      const opts = shuffle([ans, ...bankDecoys(it, toks.map(cleanTok), 2)]);
      R.state.correct = ans; R.state.solution = it.ig;
      const exHtml = p.examples.map((e) => `<div class="mi-pat-ex"><p class="mi-ig text-word">${hlSentence(e, p.side)}${e.unsure ? " " + flagHtml(false) : ""}</p><p class="text-caption mi-muted">${esc(e.en)}</p></div>`).join("");
      return { body: `${c.head(INSTR.pattern)}<div class="mi-pat" role="group" aria-label="Two examples of the pattern">${exHtml}</div>
        <div class="mi-prompt-word">${enPromptHtml(it.en)}</div>
        <p class="mi-fill mi-ig text-word">${toks.map((t, j) => j === k ? '<span class="mi-blank" aria-label="blank">&nbsp;</span>' : esc(t)).join(" ")}</p>${mcMarkup(opts, true)}`, foot: checkBtn(c.btn) };
    },
    bind() { bindMc(); }
  };
  // Swap some planned exercises for the new types (same items, so counts stay at <= 12 + HARD). Never twice for one exercise.
  function applyExtras(body, key, les, mkx) {
    const plan = key === "meet" || key === "practise" ? { lmc: 1, ben: 1 } : key === "build" ? { ltap: 1, lmc: 1, ben: 1, pat: 1 } : key === "recap" ? { ltap: 2 } : { ltap: 1, ben: 1 };
    const conv = (n, to, ok, from) => { let c = 0; from.forEach((src) => body.forEach((e) => { if (c < n && e.type === src && !e.hard && !e.prev && !e.xconv && e.item && ok(e.item)) { e.type = to; e.xconv = true; c++; } })); };
    if (plan.pat) {
      const pt = findPattern(les);
      if (pt) { const ex = Object.assign(mkx("pattern", pt.target), { pat: pt, xconv: true }), at = body.findIndex((e) => (e.type === "fill-blank" || e.type === "bank") && !e.hard && !e.xconv && !e.prev); if (at >= 0) body[at] = ex; else if (body.length < 12) body.push(ex); }
    }
    if (plan.ltap) conv(plan.ltap, "listen-tap", okListenTap, ["bank", "fill-blank", "type"]);
    if (plan.lmc) conv(plan.lmc, "listen-mc", okListenMc, ["mc-ig2en", "mc-en2ig", "fill-blank"]);
    if (plan.ben) conv(plan.ben, "bank-en", okBankEn, ["mc-ig2en", "bank"]);
    return body;
  }
  // Never 3 of the same type in a row, never the same item twice in a row.
  function smooth(list) {
    const rest = list.slice(), out = [];
    const ok = (a) => { const p = out[out.length - 1], pp = out[out.length - 2]; return !((a.item && p && p.item === a.item) || (pp && a.type === p.type && p.type === pp.type)); };
    while (rest.length) {
      // earliest allowed exercise, but a type that is running out of partners goes first (so no run of 3 is stranded at the end)
      const cnt = {}; rest.forEach((e) => { cnt[e.type] = (cnt[e.type] || 0) + 1; });
      let k = -1, best = -1; rest.forEach((e, n) => { if (ok(e) && (cnt[e.type] > best + 0 && (best < 0 || cnt[e.type] > best + 1))) { k = n; best = cnt[e.type]; } });
      if (k < 0) k = Math.max(0, rest.findIndex(ok));
      out.push(rest.splice(k, 1)[0]);
    }
    return out;
  }
  // A different exercise type for the same item (mistake re-asks).
  function altType(ex) {
    const it = ex.item, les = it._ctx.les;
    if (les.type === "letters") return ex.type === "mc-lhear" && letterWord(it) ? "mc-lword" : "mc-lhear";
    const o = typeOpts(it), same = ex.type === "new-word" ? "mc-ig2en" : ex.type;
    const c = ["mc-ig2en", "mc-en2ig", "bank", "type", "fill-blank"].filter((t) => t !== same && (t.startsWith("mc") || o[t]));
    return c.length ? pick(c, 1)[0] : same;
  }
  const metBefore = (les) => { const met = new Set(); Object.values(itemIndex).forEach((v) => { if (v.lesson !== les && S.words[v.item._key]) met.add(shown(v.item.ig)); }); return met; };
  function buildLevel(sec, les, key) {
    const keys = levelsFor(les), idx = Math.max(0, keys.indexOf(key)), g = groupsFor(les), items = les.items;
    const single = keys.length === 1;
    const newGroup = single ? items : idx === 0 ? g.A : idx === 1 ? g.B : [];
    const focus = idx === 0 ? (single ? items : g.A) : items;
    const rec = S.levels[les.id] || {};
    const carry = idx > 0 ? (rec.carry || []).map((k) => itemIndex[k] && itemIndex[k].item).filter((it) => it && it._ctx.les === les).slice(0, 3) : [];
    if (les.type === "letters") return buildLesson(sec, les);
    const met = metBefore(les);
    const mkx = (type, it, extra) => Object.assign(mk(type, it, sec, les), extra || {});
    // Listen & read lessons: card + meaning, per level (new cards for this level's group, then meaning questions).
    if (les.lessonMode === "read") {
      const q = newGroup.map((it) => mkx("intro", it));
      shuffle(focus).forEach((it) => q.push(mkx("mc-ig2en", it)));
      carry.forEach((it) => q.push(mkx("mc-ig2en", it, { prev: true })));
      return smooth(q).slice(0, 15);
    }
    const used = new Map(), norm = [];
    const take = (it, prefs) => { const o = typeOpts(it), u = used.get(it) || new Set(); const c = prefs.filter((t) => t.startsWith("mc") || o[t]); const t = c.find((x) => !u.has(x)) || c[0] || "mc-en2ig"; u.add(t); used.set(it, u); return mkx(t, it); };
    // One pass over (up to 5 of) the items; prefs is one preference list, or a list of lists rotated per item for variety.
    const pass = (list, prefs, max) => shuffle(list).slice(0, max || 5).forEach((it, k) => norm.push(take(it, (Array.isArray(prefs[0]) ? prefs[k % prefs.length] : prefs).concat("mc-en2ig"))));
    const matchEx = () => { const m = matchSet(focus, 5); if (m.length >= 2) norm.push({ type: "match", items: m, lesson: les }); };
    newGroup.forEach((it) => { if (met.has(shown(it.ig))) norm.push(take(it, ["mc-ig2en"])); else { norm.push(mkx("new-word", it)); (used.get(it) || used.set(it, new Set()).get(it)).add("new-word"); } });
    if (key === "meet" || key === "practise") {
      pass(focus, [["bank"], ["fill-blank", "bank"]], 6); matchEx(); shuffle(focus).forEach((it, k) => norm.push(take(it, k % 2 ? ["fill-blank", "mc-ig2en", "mc-en2ig"] : ["mc-ig2en", "mc-en2ig", "fill-blank"])));
    } else if (key === "build") {
      pass(focus, [["fill-blank", "bank"], ["bank", "fill-blank"], ["type", "bank"], ["bank", "type"]]); matchEx(); pass(focus, [["type", "fill-blank", "bank"], ["bank", "type"], ["fill-blank", "type"]]);
    } else if (key === "produce") {
      pass(focus, [["type", "bank"], ["fill-blank", "type"], ["bank", "type"]]); pass(focus, [["type", "fill-blank"], ["bank", "fill-blank"]]);
    } else { // recap: typed / gap-fill / bank only, no matching
      pass(focus, [["type", "bank"], ["bank", "type"], ["fill-blank", "type"]]); pass(focus, [["bank", "type"], ["type", "fill-blank"], ["fill-blank", "bank"]]);
    }
    // HARD: en->ig. Meet/Practise: sentence bank (else typing); later levels: typing (else bank).
    const nHard = key === "meet" || key === "practise" || key === "build" ? 2 : 3, early = key === "meet" || key === "practise";
    const hard = [];
    for (const it of shuffle(focus)) {
      if (hard.length >= nHard) break;
      const o = typeOpts(it), t = early ? (o.bank ? "bank" : o.type ? "type" : null) : (o.type ? "type" : o.bank ? "bank" : null);
      if (t) hard.push(mkx(t, it, { hard: true }));
    }
    const room = 12 - carry.length;
    let body = norm.slice(0, Math.max(0, room));
    if (S.speakOn && key !== "meet" && Math.random() < 0.25) { const c = body.filter((e) => e.item && e.type !== "new-word" && audioFor(e.item)); if (c.length) pick(c, 1)[0].type = "speak"; }
    body = smooth(applyExtras(body, key, les, mkx));
    carry.forEach((it) => body.push(mkx(it.ig.includes("…") || !typeOpts(it).bank ? "mc-ig2en" : "bank", it, { prev: true })));
    const out = body.slice();
    const lastItem = body.length ? body[body.length - 1].item : null;
    if (hard.length > 1 && hard[0].item === lastItem) hard.push(hard.shift());
    if (key === "recap") { out.unshift({ type: "card", text: "Try the hardest exercises from this level!" }); hard.forEach((h) => out.push(h)); }
    else if (hard.length) { out.push({ type: "card", text: "Let's make this a bit harder!" }); hard.forEach((h) => out.push(h)); }
    return out;
  }
  // Mini-lesson of just the missed items: two different exercises each, shuffled.
  function buildPractice(missed) {
    const q = [];
    missed.forEach((it) => {
      const les = it._ctx.les, sec = it._ctx.sec, ex = extraTypes(it, les);
      q.push(mk(primaryType(les), it, sec, les));
      if (ex.length) q.push(mk(pick(ex, 1)[0], it, sec, les));
    });
    return shuffle(q).slice(0, 14);
  }
  function buildReview(n, weakOnly) {
    let pool = learnedItems();
    if (!pool.length) return [];
    const t = today();
    const score = ({ it }) => { const w = S.words[it._key]; if (!w) return -1; return (w.due <= t ? 0 : 10) + w.s + Math.random() * 2; };
    if (weakOnly) pool = pool.filter(({ it }) => (S.words[it._key]?.s ?? 0) <= 2);
    const chosen = pool.slice().sort((a, b) => score(a) - score(b)).slice(0, n);
    while (chosen.length < n && pool.length) chosen.push(pool[Math.floor(Math.random() * pool.length)]);
    const pickT = typePicker();
    return shuffle(chosen).map(({ it, x }) => mk(pickT(it, x.les, true), it, x.sec, x.les));
  }

  /* ───────────── runner ───────────── */
  let R = null; // current run
  function startRun(opts) {
    if (!opts.queue.length) { toast("Finish a lesson first to unlock this!"); return; }
    R = Object.assign({ i: 0, correct: 0, wrong: 0, answered: 0, shownMe: 0, failed: [], reviewDone: false, carryOk: new Set(), start: Date.now(), firstTry: {}, missed: new Map(), maxPct: 0 }, opts);
    if (R.level) R.carryIn = new Set(((S.levels[R.lessonId] || {}).carry) || []);
    document.body.classList.add("in-lesson");
    renderStep();
  }
  function quitRun() {
    if (R && R.i > 0 && !confirm("Quit? Your progress in this lesson will be lost.")) return;
    R = null; document.body.classList.remove("in-lesson"); go("home");
  }
  // Never goes backwards when a mistake is re-queued and the total grows.
  function progressPct() { R.maxPct = Math.max(R.maxPct || 0, Math.round((R.i / R.queue.length) * 100)); return R.maxPct; }
  // "n/N" over the planned exercises only (cards and review items are not counted), plus "+k" while in the review items.
  function countText() {
    let base = 0, pos = 0, ext = 0;
    R.queue.forEach((q, k) => { if (q.type === "card" || q.noCount) return; if (q.extra) { if (k <= R.i) ext++; } else { base++; if (k <= R.i) pos++; } });
    return Math.max(1, pos) + "/" + base + (ext ? " +" + ext : "");
  }
  const levelName = (key) => (LEVEL_DEFS[key] || {}).name || key;

  function renderStep() {
    let ex = R.queue[R.i];
    if (!ex && !R.reviewDone && R.mode !== "daily" && R.mode !== "dialogue" && R.failed.length) {
      // "Let's review what you missed!" then the failed exercises again as PREVIOUS MISTAKE (max 3).
      R.reviewDone = true;
      R.queue.push({ type: "card", text: "Let's review what you missed!" });
      R.failed.slice(0, 3).forEach((f) => R.queue.push(Object.assign({}, f, { reviewEx: true, extra: true, answeredOnce: false, hard: false })));
      ex = R.queue[R.i];
    }
    if (!ex) return finishRun();
    R.state = { answered: false };
    const flag = (it) => it && it.unsure ? flagHtml(true) : "";
    const listen = (it) => listenBtn(it);
    const btn = (id, label, extra) => `<button class="mi-btn mi-btn--block text-button${extra ? " " + extra : ""}" id="${id}">${label}</button>`;
    let body = "", foot = btn("check", "Check").replace(">Check", " disabled>Check");
    const badges = [];
    if (ex.type === "new-word" && !ex.reviewEx && !ex.prev) badges.push(["new", "New word"]);
    if (ex.type === "pattern" && !ex.reviewEx) badges.push(["new", "New pattern"]);
    if (ex.hard) badges.push(["hard", "Hard"]);
    if (ex.prev || ex.reviewEx) badges.push(["prev", "Previous mistake"]);
    const head = (label) => (badges.length ? `<div class="mi-ex-meta">${badges.map(([c, t]) => `<span class="mi-badge mi-badge--${c} text-label">${t}</span>`).join("")}</div>` : "") + `<p class="mi-prompt text-title">${label}</p>`;
    const choiceHtml = (opts, cls) => `<div class="mi-choices">${opts.map((o, k) => `<button class="mi-choice text-option" data-v="${esc(o.v)}"><span class="mi-choice-key text-caption" aria-hidden="true">${k + 1}</span><span class="mi-choice-text${o.ig ? " mi-ig" : ""}">${esc(o.v)}</span></button>`).join("")}</div>`;

    if (EXT[ex.type]) {
      const r = EXT[ex.type].render(ex, { head, btn, esc, listen });
      body = r.body; if (r.foot) foot = r.foot;
    } else if (ex.type === "card") {
      body = `<div class="mi-card mi-intro mi-gear"><p class="text-title">${esc(ex.text)}</p></div>`;
      foot = btn("next", "Continue");
    } else if (ex.type === "intro") {
      const it = ex.item;
      body = `<div class="mi-card mi-intro">
        <span class="mi-badge mi-badge--new text-label">New ${ex.letters ? "letter" : "word"}</span>
        <div class="mi-intro-word"><span class="mi-ig text-word">${esc(it.ig)}</span>${listen(it)}</div>
        <p class="mi-intro-gloss text-gloss mi-muted">${esc(it.en)}${flag(it)}</p>
        ${it.ex ? `<div class="mi-inset text-gloss">Example: <span class="mi-ig mi-ig-em">${esc(it.ex)}</span></div>` : ""}
        ${it.note ? `<div class="mi-inset text-gloss"><b>Tip:</b> ${esc(it.note)}</div>` : ""}
      </div>`;
      foot = btn("next", "Got it");
    } else if (ex.type === "mc-lhear" || ex.type === "mc-lword") {
      // Letters, audio first: nothing in the prompt or options gives the letter away.
      const it = ex.item, hear = ex.type === "mc-lhear";
      let correct, opts, prompt, label;
      if (hear) {
        correct = it.ig; opts = shuffle([it, ...distract(it, "ig", 3)]).map((o) => o.ig);
        if (audioFor(it)) { label = "Which letter do you hear?"; prompt = listen(it); }
        else { label = "Which letter sounds like this?"; prompt = `<span class="text-gloss">${esc(String(it.en).replace(/^[a-z]+ '[^']*' — /, ""))}</span>`; }
      } else {
        const w = letterWord(it); correct = w; label = "Which word starts with this letter?";
        const L = plain(it.ig), bad = ALL_ITEMS().filter((p) => p !== it && p._ctx.les.type === "letters").map(letterWord).filter((x) => x && !plain(x).startsWith(L) && x !== w);
        opts = shuffle([w, ...pick([...new Set(bad)], 3)]);
        prompt = `<span class="text-word mi-ig">${esc(it.ig)}</span>`;
      }
      R.state.correct = correct; R.state.solution = correct;
      body = `${head(label)}
        <div class="mi-prompt-word">${prompt}</div>
        <div class="mi-choices">${opts.map((o, k) => `<button class="mi-choice text-option" data-v="${esc(o)}"><span class="mi-choice-key text-caption" aria-hidden="true">${k + 1}</span><span class="mi-choice-text mi-ig">${esc(o)}</span></button>`).join("")}</div>`;
    } else if (ex.type === "fill-blank") {
      const it = ex.item, toks = it.ig.split(/\s+/);
      const cand = toks.map((t, k) => k).filter((k) => cleanTok(toks[k]) && !toks[k].includes("…"));
      if (ex.blankIdx === undefined) ex.blankIdx = pick(cand, 1)[0];
      const k = ex.blankIdx, ans = cleanTok(toks[k]);
      const opts = shuffle([ans, ...bankDecoys(it, toks.map(cleanTok), 2)]);
      R.state.correct = ans; R.state.solution = it.ig;
      body = `${head(INSTR["fill-blank"])}<div class="mi-prompt-word">${enPromptHtml(it.en)}</div>
        <p class="mi-fill mi-ig text-word">${toks.map((t, j) => j === k ? '<span class="mi-blank" aria-label="blank">&nbsp;</span>' : esc(t)).join(" ")}</p>
        ${choiceHtml(opts.map((v) => ({ v, ig: true })))}`;
    } else if (ex.type === "mc-ig2en" || ex.type === "mc-en2ig" || ex.type === "new-word") {
      const it = ex.item, toEn = ex.type !== "mc-en2ig";
      const field = toEn ? "en" : "ig";
      const opts = shuffle([it, ...distract(it, field, ex.type === "new-word" ? 2 : 3)]);
      R.state.correct = it[field];
      const label = ex.letters ? (toEn ? "What sound does this letter make?" : "Which letter is this?") : INSTR[ex.type];
      if (ex.type === "new-word") foot = btn("check", "Check").replace(">Check", " disabled>Check") + `<button class="mi-btn mi-btn--secondary mi-btn--block text-button mi-mt-2" id="showme" type="button">Show me</button>`;
      body = `${head(label)}
        <div class="mi-prompt-word">${toEn ? `<span class="text-word mi-ig">${esc(it.ig)}</span>` + listen(it) + flag(it) : enPromptHtml(it.en)}</div>
        <div class="mi-choices">${opts.map((o, k) => `<button class="mi-choice text-option" data-v="${esc(o[field])}"><span class="mi-choice-key text-caption" aria-hidden="true">${k + 1}</span><span class="mi-choice-text${toEn ? "" : " mi-ig"}">${esc(o[field])}</span></button>`).join("")}</div>`;
    } else if (ex.type === "type") {
      const it = ex.item;
      body = `${head(INSTR.type)}
        <div class="mi-prompt-word">${enPromptHtml(it.en)}</div>
        <textarea class="mi-input mi-ig text-option" id="answer" placeholder="Type in Igbo…" aria-label="Your answer in Igbo" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea>
        <div class="mi-keys" aria-label="Igbo letters">${["ị", "ọ", "ụ", "ṅ", "Ị", "Ọ", "Ụ", "'"].map((k) => `<button class="mi-key mi-ig text-option" data-k="${k}" aria-label="Insert ${k}">${k}</button>`).join("")}</div>
        <p class="mi-input-hint text-caption mi-muted">Tone marks are optional. Dots under ị ọ ụ do matter!</p>`;
    } else if (ex.type === "bank") {
      const it = ex.item;
      const tokens = it.ig.split(/\s+/).map(cleanTok).filter(Boolean); // lower-case, no final punctuation: no capital giveaway
      R.state.tokens = tokens; R.state.built = [];
      R.state.tiles = shuffle([...tokens, ...bankDecoys(it, tokens, Math.max(0, Math.min(2, 8 - tokens.length)))]); // 3-8 tiles, 1-2 decoys
      body = `${head(INSTR.bank)}
        <div class="mi-prompt-word">${enPromptHtml(it.en)}</div>
        <div class="mi-bank-answer mi-ig" id="built" aria-label="Your sentence"></div>
        <div class="mi-bank mi-ig">${R.state.tiles.map((t, k) => `<button class="mi-tile text-option" data-t="${k}">${esc(t)}</button>`).join("")}</div>`;
    } else if (ex.type === "speak") {
      const it = ex.item;
      body = `${head(INSTR.speak)}
        <div class="mi-card mi-intro">
          <div class="mi-intro-word"><span class="mi-ig text-word">${esc(it.ig)}</span>${listen(it)}</div>
          <p class="mi-intro-gloss text-gloss mi-muted">${esc(it.en)}${flag(it)}</p>
          <p class="mi-hint text-caption mi-muted mi-mt-3">Hear a native speaker first, then record yourself.</p>
        </div>
        <div class="mi-speak-area"><button class="mi-mic" id="mic" aria-label="Record">${ICON.mic}</button>
          <p class="text-caption mi-muted" id="mic-status" role="status">Tap the mic, say the phrase, tap again to stop.</p></div>
        <div class="mi-speak-result" id="speak-result"></div>`;
      foot = `<button class="mi-btn mi-btn--secondary mi-btn--block text-button" id="skip-speak">Can't speak now</button>`;
    } else if (ex.type === "match") {
      R.state.left = shuffle(ex.items); R.state.right = shuffle(ex.items); R.state.done = 0; R.state.mistakes = 0;
      body = `${head(INSTR.match)}
        <div class="mi-match">
          <div class="mi-choices">${R.state.left.map((it) => `<button class="mi-choice mi-ig text-option" data-side="l" data-key="${esc(it._key)}">${esc(it.ig)}</button>`).join("")}</div>
          <div class="mi-choices">${R.state.right.map((it) => `<button class="mi-choice text-option" data-side="r" data-key="${esc(it._key)}">${esc(ex.lesson.type === "letters" ? it.en.split(" — ")[1] || it.en : it.en)}</button>`).join("")}</div>
        </div>`;
      foot = btn("check", "Continue").replace(">Continue", " disabled>Continue");
    }

    const pct = progressPct();
    app.innerHTML = `<div class="mi-runner">
      <div class="mi-runner-top"><button class="mi-close" id="quit" aria-label="Quit lesson">${ICON.close}</button><div class="mi-pbar" role="progressbar" aria-label="Lesson progress" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct}%"></i></div><span class="mi-count text-caption">${countText()}</span></div>
      ${R.level ? `<p class="mi-level-pip text-caption mi-muted">Level ${R.levelIdx + 1} of ${R.levelTotal} · ${esc(levelName(R.level))}</p>` : R.pip ? `<p class="mi-level-pip text-caption mi-muted">${esc(R.pip)}</p>` : ""}
      <div class="mi-runner-body">${body}</div>
      <div class="mi-sheet" id="foot">${foot}</div>
    </div>`;
    stopAudio();
    bindStep(ex);
    // "Hear it first": auto-play once on new-word cards and speaking prompts.
    if (S.autoAudio && (ex.type === "intro" || ex.type === "new-word" || ex.type === "speak" || ex.type === "mc-lhear" || ex.type === "listen-mc" || ex.type === "listen-tap")) {
      const a = audioFor(ex.item), btn = app.querySelector(".mi-runner-body button[data-audio]");
      if (a) setTimeout(() => { if (R && R.queue[R.i] === ex && !R.state.answered) playClip(a.file, btn); }, durBase());
    }
  }

  function bindStep(ex) {
    document.getElementById("quit").onclick = quitRun;
    const check = document.getElementById("check");
    const next = document.getElementById("next");
    if (next) { next.onclick = () => { R.i++; renderStep(); }; next.focus(); return; }

    if (EXT[ex.type]) { EXT[ex.type].bind(ex, { submit }); return; }
    if (isMcType(ex.type)) {
      app.querySelectorAll(".mi-choice").forEach((b) => b.onclick = () => {
        if (R.state.answered) return;
        app.querySelectorAll(".mi-choice").forEach((x) => x.classList.remove("is-selected"));
        b.classList.add("is-selected"); R.state.value = b.dataset.v; check.disabled = false;
      });
      check.onclick = () => submit(R.state.value === R.state.correct, R.state.solution || ex.item[ex.type === "mc-en2ig" ? "ig" : "en"]);
      const sm = document.getElementById("showme");
      if (sm) sm.onclick = () => showMe(ex); // NEW WORD hint: reveals the answer, counts as seen, not an error
    }
    if (ex.type === "type") {
      const ta = document.getElementById("answer");
      ta.focus();
      ta.oninput = () => { check.disabled = !ta.value.trim(); };
      ta.onkeydown = (e) => { if (e.key === "Enter") { e.preventDefault(); if (!check.disabled) check.click(); } };
      app.querySelectorAll(".mi-key").forEach((b) => b.onclick = () => {
        const s = ta.selectionStart, e = ta.selectionEnd;
        ta.value = ta.value.slice(0, s) + b.dataset.k + ta.value.slice(e);
        ta.selectionStart = ta.selectionEnd = s + b.dataset.k.length; ta.focus(); ta.oninput();
      });
      check.onclick = () => {
        // any item with exactly the same English meaning is also right (goodbye: Ka ọ dị / Ka ọmesịa)
        const answers = sameEnItems(ex.item).flatMap((p) => [p.ig, ...(p.alt || [])]).concat(ex.item.ig, ex.item.alt || []);
        const v = ta.value;
        const strict = answers.some((a) => strictKey(a) === strictKey(v));
        const loose = !strict && answers.some((a) => looseKey(a) === looseKey(v));
        ta.disabled = true;
        ta.classList.add(strict || loose ? "is-correct" : "is-wrong");
        submit(strict || loose, ex.item.ig, loose ? "Almost! Watch the dots: " : null);
      };
    }
    if (ex.type === "bank") {
      bindBank((b) => {
        // any word order/answer that matches the item, its alternatives or an item with the same English is right
        const built = shown(b), answers = sameEnItems(ex.item).flatMap((p) => [p.ig, ...(p.alt || [])]).concat(ex.item.ig, ex.item.alt || []);
        return answers.some((a) => shown(a) === built);
      }, ex.item.ig);
    }
    if (ex.type === "speak") bindSpeak(ex);
    if (ex.type === "match") {
      let sel = null;
      app.querySelectorAll(".mi-match .mi-choice").forEach((b) => b.onclick = () => {
        if (b.classList.contains("is-matched")) return;
        if (!sel || sel.dataset.side === b.dataset.side) {
          if (sel) sel.classList.remove("is-selected");
          sel = b; b.classList.add("is-selected"); return;
        }
        const ok = sel.dataset.key === b.dataset.key;
        const pair = [sel, b]; sel = null;
        pair.forEach((x) => { x.classList.remove("is-selected"); x.classList.add(ok ? "is-correct" : "is-wrong"); });
        grade(pair[0].dataset.key, ok); if (!ok) { grade(pair[1].dataset.key, false); R.state.mistakes++; pair.forEach((x) => { const v = itemIndex[x.dataset.key]; if (v) R.missed.set(v.item._key, v.item); }); }
        setTimeout(() => {
          pair.forEach((x) => { x.classList.remove("is-correct", "is-wrong"); if (ok) { x.classList.add("is-matched"); x.disabled = true; } });
          if (ok && ++R.state.done === ex.items.length) { check.disabled = false; check.focus(); }
        }, ok ? durBase() : 2 * durBase());
      });
      check.onclick = () => { R.answered++; if (R.state.mistakes === 0) R.correct++; else R.wrong++; R.i++; renderStep(); };
    }
  }

  /* ── speaking ──
     1. Records you (MediaRecorder) so you can play yourself back next to a native speaker.
     2. If the browser offers speech recognition for Igbo (ig-NG), it also auto-checks what it heard.
        Igbo support in browsers is patchy, so when it's unavailable you grade yourself. */
  function similarity(a, b) {
    a = looseKey(a); b = looseKey(b);
    if (!a.length || !b.length) return 0;
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return 1 - d[a.length][b.length] / Math.max(a.length, b.length);
  }
  function bindSpeak(ex) {
    const mic = document.getElementById("mic"), status = document.getElementById("mic-status"), out = document.getElementById("speak-result");
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    let rec = null, recog = null, chunks = [], heard = [], recording = false, stream = null, autoFailed = !SR || !S.speakAuto;
    document.getElementById("skip-speak").onclick = () => {
      // Like Duolingo: skip speaking for the rest of this session.
      R.queue = R.queue.filter((q, k) => k <= R.i || q.type !== "speak");
      R.i++; renderStep();
    };
    const selfGrade = (note, prefix) => {
      out.innerHTML = `${note ? `<p class="text-caption mi-center">${note}</p>` : ""}${prefix || ""}
        <p class="text-gloss mi-center">Compare with the native speaker. How did you do?</p>
        <div class="mi-btnrow"><button class="mi-btn mi-btn--secondary text-button" id="sg-no">Needs practice</button><button class="mi-btn text-button" id="sg-yes">I said it well</button></div>`;
      document.getElementById("sg-yes").onclick = () => submit(true, ex.item.ig);
      document.getElementById("sg-no").onclick = () => submit(false, ex.item.ig);
    };
    const finish = () => {
      recording = false; mic.classList.remove("is-recording"); mic.innerHTML = ICON.mic; mic.setAttribute("aria-label", "Record");
      if (stream) stream.getTracks().forEach((t) => t.stop());
      // Original / You: two SpeakerButtons instead of a native <audio controls> bar.
      const own = chunks.length ? URL.createObjectURL(new Blob(chunks, { type: rec.mimeType })) : "";
      const playback = own ? `<div class="mi-playback">
          <div class="mi-playback-item">${speakerBtn(ex.item, false)}<span class="text-caption mi-muted">Original</span></div>
          <div class="mi-playback-item"><button type="button" class="mi-speaker" data-audio="${esc(own)}" aria-label="Play your recording">${ICON.speaker}</button><span class="text-caption mi-muted">You</span></div>
        </div>` : "";
      if (!autoFailed && heard.length) {
        const best = heard.map((h) => ({ h, s: similarity(h, ex.item.ig) })).sort((a, b) => b.s - a.s)[0];
        status.textContent = "";
        out.innerHTML = `${playback}<p class="text-gloss mi-center">We heard: <span class="mi-ig mi-ig-em">${esc(best.h)}</span> (${Math.round(best.s * 100)}% match)</p>`;
        if (best.s >= 0.75) return submit(true, ex.item.ig);
        out.innerHTML += `<div class="mi-btnrow"><button class="mi-btn mi-btn--secondary text-button" id="again">Try again</button><button class="mi-btn mi-btn--secondary text-button" id="self">Grade myself</button></div>`;
        document.getElementById("again").onclick = () => { out.innerHTML = ""; heard = []; chunks = []; status.textContent = "Tap the mic and try again."; };
        document.getElementById("self").onclick = () => selfGrade("", playback);
        return;
      }
      status.textContent = "";
      selfGrade(playback ? "Play yourself back:" : "", playback);
    };
    mic.onclick = async () => {
      if (R.state.answered) return;
      if (recording) { try { rec && rec.state !== "inactive" && rec.stop(); } catch (e) {} try { recog && recog.stop(); } catch (e) {} if (!rec) finish(); return; }
      chunks = []; heard = []; out.innerHTML = ""; stopAudio();
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        rec = new MediaRecorder(stream);
        rec.ondataavailable = (e) => e.data.size && chunks.push(e.data);
        rec.onstop = () => setTimeout(finish, autoFailed ? 0 : 400);
        rec.start();
      } catch (e) {
        rec = null;
        status.textContent = "";
        return selfGrade("Microphone isn't available here (check the browser's mic permission). Say it out loud anyway!");
      }
      if (!autoFailed) {
        try {
          recog = new SR(); recog.lang = "ig-NG"; recog.maxAlternatives = 5; recog.interimResults = false;
          recog.onresult = (e) => { for (const r of e.results) for (const alt of r) heard.push(alt.transcript); };
          recog.onerror = (e) => { if (["language-not-supported", "not-allowed", "service-not-allowed", "network"].includes(e.error)) { autoFailed = true; S.speakAuto = false; save(); } };
          recog.onend = () => { if (recording && rec && rec.state !== "inactive") rec.stop(); };
          recog.start();
        } catch (e) { autoFailed = true; }
      }
      recording = true; mic.classList.add("is-recording"); mic.innerHTML = ICON.stop; mic.setAttribute("aria-label", "Stop recording"); status.textContent = "Recording… tap stop when you've finished.";
      setTimeout(() => { if (recording && rec && rec.state !== "inactive") { try { recog && recog.stop(); } catch (e) {} rec.stop(); } }, 8000);
    };
  }

  function shortTip(t) { t = String(t).trim(); if (t.length <= 150) return t; const cut = t.slice(0, 150), k = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("; ")); return k > 60 ? cut.slice(0, k + 1) : cut.replace(/\s+\S*$/, "") + "…"; }
  function submit(ok, solution, almost) {
    if (R.state.answered) return;
    R.state.answered = true;
    const ex = R.queue[R.i];
    const firstAttempt = !ex.answeredOnce;
    ex.answeredOnce = true;
    R.answered++;
    if (ok) R.correct++; else R.wrong++;
    grade(ex.item._key, ok);
    if (ok && ex.prev) R.carryOk.add(ex.item._key);
    // Mistakes (not in the daily test, which is scored once): re-asked 4-6 exercises later as a DIFFERENT type,
    // then again at the end of the level as PREVIOUS MISTAKE (see renderStep), and carried to the next level.
    if (!ok && R.mode !== "daily" && R.mode !== "dialogue" && firstAttempt && !ex.reviewEx && !ex.extra) {
      if (!R.failed.some((f) => f.item === ex.item)) R.failed.push(ex);
      const at = Math.min(R.queue.length, R.i + 1 + 4 + Math.floor(Math.random() * 3));
      R.queue.splice(at, 0, { type: altType(ex), item: ex.item, pool: ex.pool, lesson: ex.lesson, letters: ex.letters, reask: true, extra: true });
    }
    if (!ok) R.missed.set(ex.item._key, ex.item);
    if (R.mode === "daily") R.firstTry[R.i] = ok;

    app.querySelectorAll(".mi-choices .mi-choice").forEach((b) => {
      b.disabled = true;
      const right = b.dataset.v === R.state.correct, picked = b.classList.contains("is-selected");
      if (right || picked) {
        b.classList.remove("is-selected");
        b.classList.add(right ? "is-correct" : "is-wrong");
        b.insertAdjacentHTML("beforeend", `<span class="mi-choice-mark">${right ? ICON.check : ICON.close}</span><span class="sr-only">${right ? "correct answer" : "your answer, wrong"}</span>`);
      }
    });
    const foot = document.getElementById("foot");
    foot.className = "mi-sheet " + (ok ? "mi-sheet--correct" : "mi-sheet--wrong");
    foot.setAttribute("role", "status");
    const praise = pick(["Ọ dị mma! (Good!)", "Jisie ike! (Well done!)", "Ezigbo! (Excellent!)", "Correct!"], 1)[0];
    const msg = ok ? (almost ? almost.replace(/[:\s]+$/, "") : praise) : "Not quite.";
    const showSol = !ok || almost;
    const it = ex.item, isNew = ex.type === "new-word";
    // Answer line: the Igbo in mi-ig 600 with a replay speaker; when right, "X means Y".
    const sol = showSol ? `Correct answer: <span class="${solution === it.ig ? "mi-ig " : ""}mi-ig-em">${esc(solution)}</span>`
      : `<span class="mi-ig mi-ig-em">${esc(it.ig)}</span> means ${esc(it.en)}`;
    foot.innerHTML = `<p class="mi-sheet-head text-heading"><span class="mi-sheet-mark">${ok ? ICON.check : ICON.close}</span>${esc(msg)}</p>
      <div class="mi-sheet-sol text-body"><span>${sol}</span>${speakerBtn(it, false)}</div>
      ${isNew && it.ex ? `<p class="mi-sheet-note text-caption">Example: <span class="mi-ig mi-ig-em">${esc(it.ex)}</span></p>` : ""}
      ${isNew && it.note ? `<p class="mi-sheet-note mi-sheet-tip text-caption"><b>Tip:</b> ${esc(it.note)}</p>` : ""}
      ${!ok && !isNew && (it.note || (ex.lesson && ex.lesson.tip)) ? `<p class="mi-sheet-note mi-sheet-tip text-caption"><b>Tip:</b> ${esc(shortTip(it.note || ex.lesson.tip))}</p>` : ""}
      ${it.unsure ? `<p class="mi-sheet-note text-caption">${flagHtml(true)} Still being checked with a native speaker.</p>` : ""}
      <button class="mi-btn mi-btn--block text-button${ok ? "" : " mi-btn--danger"}" id="cont">Continue</button>`;
    const cont = document.getElementById("cont");
    cont.focus();
    cont.onclick = () => { R.i++; renderStep(); };
    save();
  }

  function showMe(ex) {
    if (R.state.answered) return;
    R.state.answered = true; R.shownMe++;
    app.querySelectorAll(".mi-choices .mi-choice").forEach((b) => {
      b.disabled = true;
      if (b.dataset.v === R.state.correct) { b.classList.add("is-correct"); b.insertAdjacentHTML("beforeend", `<span class="mi-choice-mark">${ICON.check}</span>`); }
    });
    const it = ex.item, foot = document.getElementById("foot");
    foot.className = "mi-sheet"; foot.setAttribute("role", "status");
    foot.innerHTML = `<div class="mi-sheet-sol text-body"><span><span class="mi-ig mi-ig-em">${esc(it.ig)}</span> means ${esc(it.en)}</span>${speakerBtn(it, false)}</div>
      ${it.ex ? `<p class="mi-sheet-note text-caption">Example: <span class="mi-ig mi-ig-em">${esc(it.ex)}</span></p>` : ""}
      ${it.note ? `<p class="mi-sheet-note mi-sheet-tip text-caption"><b>Tip:</b> ${esc(it.note)}</p>` : ""}
      <button class="mi-btn mi-btn--block text-button" id="cont">Continue</button>`;
    const cont = document.getElementById("cont"); cont.focus(); cont.onclick = () => { R.i++; renderStep(); };
  }

  function finishRun() {
    const r = R; R = null;
    document.body.classList.remove("in-lesson");
    const scored = r.answered || 1;
    const acc = Math.round((r.correct / scored) * 100);
    let xp = 0, title = "Lesson complete!", extra = "", unlocked = "", levelLine = "", nextKey = null, nextX = null;
    const perfect = r.wrong === 0 && r.answered > 0;
    if (r.mode === "lesson" && r.level) {
      // Level result: stored per level KEY so it survives a switch from 3 to 5 levels per skill.
      const fx = findLesson(r.lessonId), les = fx.les, keys = levelsFor(les), rec = levelRec(les.id);
      const firstLvl = !rec.r[r.level] || rec.r[r.level].migrated, isLast = r.level === keys[keys.length - 1], old = rec.r[r.level] || {};
      xp = firstLvl ? (LEVEL_DEFS[r.level] || {}).xp || 10 : 5;
      rec.r[r.level] = { acc, best: Math.max(acc, old.best || 0), n: (old.n || 0) + 1, date: today() };
      // carry: this level's misses + earlier carried items not yet answered right (max 6)
      const mine = [...r.missed.keys()].filter((k) => itemIndex[k] && itemIndex[k].lesson === les);
      rec.carry = [...new Set([...mine, ...[...(r.carryIn || [])].filter((k) => !r.carryOk.has(k))])].slice(0, 6);
      const prog = nodeProgress(les);
      if (prog.complete) {
        const first = !S.completed[les.id], nx = fx.sec.lessons[fx.li + 1];
        if (first && nx) unlocked = nx.title;
        const prev = S.completed[les.id] || { times: 0, best: 0 };
        S.completed[les.id] = { times: prev.times + (isLast ? 1 : 0), best: Math.max(prev.best, acc), date: today() };
        if (first) extra = "New words added to your daily test.";
      }
      title = perfect ? "Perfect lesson!" : "Level " + (keys.indexOf(r.level) + 1) + " complete!";
      levelLine = prog.complete ? "All " + prog.total + " levels complete" : "Level " + prog.done + " of " + prog.total + " complete";
      nextKey = prog.next; nextX = fx;
    } else if (r.mode === "lesson") {
      const first = !S.completed[r.lessonId];
      const fx = findLesson(r.lessonId), nx = fx && fx.sec.lessons[fx.li + 1];
      if (first && nx) unlocked = nx.title;
      xp = first ? 15 : 8;
      const prev = S.completed[r.lessonId] || { times: 0, best: 0 };
      S.completed[r.lessonId] = { times: prev.times + 1, best: Math.max(prev.best, acc), date: today() };
      if (first) extra = "New words added to your daily test.";
    } else if (r.mode === "node" || r.mode === "dialogue") {
      // Optional nodes: practice, unit review, story. XP + word strength (grade() ran per answer); never gate anything.
      const nd = r.node, prev = S.nodes[nd.id] || { n: 0, best: 0 };
      const rec = { n: prev.n + 1, best: Math.max(prev.best || 0, acc), date: today() };
      if (nd.kind === "review") {
        const passed = acc >= 70; rec.passed = !!prev.passed || passed;
        xp = passed ? (prev.passed ? 10 : 20) : 8; title = passed ? "Unit review passed!" : "Almost there!";
        extra = passed ? "Pass mark (70%) reached." : "Pass mark is 70%. Try again whenever you like. It never blocks the next unit.";
      } else if (nd.kind === "dialogue") {
        xp = prev.n ? 5 : 15; title = "Story complete!"; extra = r.answered ? `${r.correct} of ${r.answered} questions right.` : "";
      } else { xp = prev.n ? 5 : 10; title = "Practice done!"; extra = "Your weakest words got extra attention."; }
      S.nodes[nd.id] = rec;
    } else if (r.mode === "daily") {
      const right = Object.values(r.firstTry).filter(Boolean).length;
      const total = Object.keys(r.firstTry).length;
      xp = 10 + right;
      title = "Daily test done!";
      const prev = S.daily[today()];
      if (!prev || right > prev.score) S.daily[today()] = { score: right, total };
      extra = `You scored ${right} / ${total}.`;
    } else { xp = 5; title = "Practice done!"; }
    addXp(xp); markActive(); save(); refreshStats();
    const secs = Math.max(1, Math.round((Date.now() - r.start) / 1000));
    const time = `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;
    // Title follows the outcome; the ochre trophy disc is the same for every outcome.
    if (r.mode === "lesson" && !r.level && acc < 90) title = acc >= 60 ? "Good effort!" : "Keep going!";
    else if (r.level && perfect) title = "Perfect lesson!";
    else if (r.level && acc < 60) title = "Level done — keep going!";
    const cheer = perfect ? "No mistakes at all. Ezigbo ọrụ!" : acc >= 90 ? "Ezigbo ọrụ — great work." : acc >= 60 ? "Jisie ike — keep it up." : "Mistakes come back for practice. Ị ga-eme ya!";
    // Key-word recap: the lesson's items, or every word met in a daily/practice round.
    const seen = new Set(), words = [];
    const les = r.mode === "lesson" ? findLesson(r.lessonId) : null;
    (les ? les.les.items : r.queue.flatMap((q) => q.item ? [q.item] : (q.items || []))).forEach((it) => { if (!seen.has(it._key)) { seen.add(it._key); words.push(it); } });
    const streak = liveStreak(), missed = [...r.missed.values()];
    app.innerHTML = `<div class="mi-results">
      <span class="mi-results-mark" aria-hidden="true">${ICON.trophy}</span>
      <h1 class="text-title">${title}</h1>
      <p class="text-gloss mi-muted">${esc(cheer)}${extra ? " " + esc(extra) : ""}</p>
      <div class="mi-stat-tiles">
        <div class="mi-stat-tile mi-stat-tile--xp"><b class="text-heading">+${xp}</b><span class="text-caption mi-muted">XP</span></div>
        <div class="mi-stat-tile mi-stat-tile--acc"><b class="text-heading">${acc}%</b><span class="text-caption mi-muted">Accuracy</span></div>
        <div class="mi-stat-tile"><b class="text-heading">${time}</b><span class="text-caption mi-muted">Time</span></div>
      </div>
      ${levelLine ? `<div class="mi-level-prog" role="img" aria-label="${esc(levelLine)}"><span class="mi-level-dots">${nodeProgress(nextX.les).keys.map((k) => `<i class="${(S.levels[nextX.les.id].r[k]) ? "is-on" : ""}"></i>`).join("")}</span><span class="text-option">${esc(levelLine)}</span></div>` : ""}
      <p class="mi-stat text-option">${ICON.flame}${streak}-day streak</p>
      ${weekRow()}
      ${unlocked ? `<p class="mi-unlocked text-body"><b>Next lesson unlocked:</b> ${esc(unlocked)}</p>` : ""}
      ${nextKey ? `<button class="mi-btn mi-btn--block text-button" id="next-level">Next: Level ${nodeProgress(nextX.les).keys.indexOf(nextKey) + 1} · ${esc(levelName(nextKey))}</button>` : ""}
      <button class="mi-btn ${nextKey ? "mi-btn--secondary " : ""}mi-btn--block text-button" id="done">${nextKey ? "Back to the path" : "Continue"}</button>
      ${missed.length ? `<div class="mi-card mi-card--rows"><h2 class="text-heading">Words to review</h2>${missed.map((it) => wordRow(it, it.en)).join("")}<button class="mi-btn mi-btn--secondary mi-btn--block text-button mi-mt-3" id="practise-missed">Practise these</button></div>` : ""}
      ${words.length ? `<div class="mi-card mi-card--rows"><h2 class="text-heading">Words from this ${r.mode === "lesson" ? "lesson" : "round"}</h2>${words.map((it) => wordRow(it, it.en)).join("")}</div>` : ""}
    </div>`;
    const nl = document.getElementById("next-level");
    if (nl) { nl.onclick = () => startLevel(nextX, nextKey); nl.focus(); } else document.getElementById("done").focus();
    document.getElementById("done").onclick = () => go(r.mode === "daily" ? "daily" : "home");
    const pm = document.getElementById("practise-missed");
    if (pm) pm.onclick = () => startRun({ mode: "practice", queue: buildPractice(missed) });
  }

  function startLevel(x, key) {
    const keys = levelsFor(x.les);
    startRun({ mode: "lesson", lessonId: x.les.id, level: key, levelIdx: keys.indexOf(key), levelTotal: keys.length, queue: buildLevel(x.sec, x.les, key) });
  }

  /* ───────────── path nodes (WP D/H/I): skill, dialogue, practice, unit review ─────────────
     Unit rhythm: skills in order; a Dialogue after the 2nd skill (when DIALOGUES has one for the unit); a Practice after every
     2 skills (and after a lone skill); Unit Review last. Practice, Dialogue and Review are OPTIONAL: they never gate the next skill.
     Progress: skills keep S.completed + S.levels; the others live in S.nodes[id] = { n, best, date, passed? }. */
  const DLG = () => (window.DIALOGUES && typeof window.DIALOGUES === "object") ? window.DIALOGUES : {};
  const dialoguesFor = (unitId) => (Array.isArray(DLG()[unitId]) ? DLG()[unitId] : []).filter((d) => d && d.id && Array.isArray(d.lines) && d.lines.length);
  const guideFor = (unitId) => (window.GUIDES && typeof window.GUIDES === "object" && window.GUIDES[unitId]) || null;
  const secVar = (sec) => `--section: var(--section-${sec.id === "intro" ? "introductions" : sec.id}, ${esc(sec.color || "#157a43")})`;
  function unitNodes(sec) {
    const L = sec.lessons, dl = dialoguesFor(sec.id), nodes = [];
    let pr = 0;
    L.forEach((les, li) => {
      nodes.push({ kind: "skill", id: les.id, les, li, sec });
      dl.forEach((d, k) => { if (li === Math.min(1 + 2 * k, L.length - 1)) nodes.push({ kind: "dialogue", id: d.id, d, after: les, sec }); });
      if (li % 2 === 1 || (L.length === 1)) nodes.push({ kind: "practice", id: "pr:" + sec.id + ":" + (++pr), upto: li + 1, after: les, sec });
    });
    nodes.push({ kind: "review", id: "ur:" + sec.id, sec });
    return nodes;
  }
  function nodeState(n) {
    const rec = S.nodes[n.id];
    if (n.kind === "skill") {
      const prev = n.sec.lessons[n.li - 1];
      return { done: !!S.completed[n.id], locked: !lessonUnlocked(n.sec, n.li), why: prev ? `Finish “${prev.title}” first to unlock this lesson.` : "" };
    }
    if (n.kind === "review") {
      const open = n.sec.lessons.every((l) => S.completed[l.id]);
      return { done: !!(rec && rec.passed), locked: !open, why: "Complete every lesson in this unit to unlock the review." };
    }
    return { done: !!rec, locked: !S.completed[n.after.id], why: `Finish “${n.after.title}” to unlock this ${n.kind === "dialogue" ? "story" : "practice"}.` };
  }

  // Practice / Unit review queues: only words already learned, weakest and most-missed first.
  const wOf = (it) => { const w = S.words[it._key], carry = ((S.levels[it._ctx.les.id] || {}).carry) || []; let x = w ? 6 - w.s : 4; if (w && w.due && w.due <= today()) x += 2; if (carry.includes(it._key)) x += 4; return Math.max(1, x); };
  function wsample(items, n) {
    const out = []; let pool = items.slice();
    while (out.length < n && items.length) {
      if (!pool.length) pool = items.slice();
      const ws = pool.map(wOf); let t = Math.random() * ws.reduce((a, b) => a + b, 0), k = 0;
      while (k < pool.length - 1 && (t -= ws[k]) > 0) k++;
      out.push(pool.splice(k, 1)[0]);
    }
    return out;
  }
  const typeFits = (t, it) => t === "listen-tap" ? okListenTap(it) : t === "listen-mc" ? okListenMc(it) : t === "bank-en" ? okBankEn(it) : t.startsWith("mc") ? true : !!typeOpts(it)[t];
  function nodeQueue(sec, kind, lessons) {
    const pool = lessons.filter((l) => l.type !== "letters").flatMap((l) => learnedOf(l));
    if (!pool.length) return [];
    const review = kind === "review", used = new Map(), q = [];
    const mkx = (type, it, extra) => Object.assign(mk(type, it, sec, it._ctx.les), extra || {});
    const pickType = (it, hardLean) => {
      const s = (S.words[it._key] || {}).s || 0;
      const prefs = hardLean ? ["type", "bank", "listen-tap", "fill-blank", "bank-en", "mc-en2ig"]
        : s <= 2 ? ["mc-ig2en", "mc-en2ig", "fill-blank", "bank", "listen-mc", "bank-en"] : ["bank", "fill-blank", "listen-mc", "type", "listen-tap", "mc-en2ig", "bank-en"];
      const u = used.get(it) || new Set(), c = prefs.filter((t) => typeFits(t, it)), fresh = c.filter((t) => !u.has(t));
      const t = fresh.length ? pick(fresh.slice(0, 3), 1)[0] : (c[0] || "mc-ig2en");
      u.add(t); used.set(it, u); return t;
    };
    if (!review) { const m = matchSet(pool, 4); if (m.length >= 3) q.push({ type: "match", items: m, lesson: m[0]._ctx.les }); }
    const n = review ? 15 : 11, chosen = wsample(pool, n);
    chosen.forEach((it, k) => { const hard = review && k >= n - 4; q.push(mkx(pickType(it, review), it, hard ? { hard: true } : null)); });
    return smooth(q);
  }
  function startNode(n) {
    if (n.kind === "dialogue") return startDialogue(n);
    const lessons = n.kind === "practice" ? n.sec.lessons.slice(0, n.upto) : n.sec.lessons;
    startRun({ mode: "node", node: { kind: n.kind, id: n.id, unitId: n.sec.id }, pip: (n.kind === "review" ? "Unit review" : "Practice") + " · " + n.sec.title, queue: nodeQueue(n.sec, n.kind, lessons) });
  }

  /* ── Dialogue node (WP I): lines appear one by one, questions are interleaved, no penalty ── */
  let igByText = null;
  function itemForIg(ig, unitId) {
    if (!igByText) { igByText = new Map(); ALL_ITEMS().filter(notLetters).forEach((it) => { const k = shown(it.ig); if (!igByText.has(k)) igByText.set(k, []); igByText.get(k).push(it); }); }
    const list = igByText.get(shown(ig)) || [];
    return list.find((it) => it._ctx.sec.id === unitId && hasAudio(it)) || list.find((it) => it._ctx.sec.id === unitId) || list.find(hasAudio) || list[0] || null;
  }
  function startDialogue(n) {
    const d = n.d, unitId = n.sec.id, lines = d.lines.map((l) => Object.assign({}, l, { item: itemForIg(l.ig, unitId) }));
    const qs = (d.questions || []).map((q) => {
      const m = /"([^"]+)"/.exec(q.prompt || ""); let a = m ? lines.findIndex((l) => shown(l.ig) === shown(m[1])) : -1; if (a < 0) a = lines.length - 1;
      const item = q.type === "next-line" ? (itemForIg(q.answer, unitId) || lines[a].item) : lines[a].item;
      return { q, a, item };
    }).filter((x) => x.item && x.q.options && x.q.options.includes(x.q.answer));
    const queue = [{ type: "dlg-title", d, noCount: true }];
    lines.forEach((l, i) => { queue.push({ type: "dlg-line", d, lines, idx: i, item: l.item, noCount: true }); qs.forEach((x) => { if (x.a === i) queue.push({ type: "dlg-q", d, lines, upto: i, q: x.q, item: x.item }); }); });
    startRun({ mode: "dialogue", node: { kind: "dialogue", id: d.id, unitId }, pip: "Story · " + d.title, queue });
  }
  function dlgTranscript(ex, upto, reveal) {
    const d = ex.d, from = reveal ? 0 : Math.max(0, upto - 2);
    return `<div class="mi-dlg" role="list">${ex.lines.slice(from, upto + 1).map((l, k) => {
      const now = reveal && from + k === upto, role = (d.roles && d.roles[l.who]) || l.who, a = l.item && audioFor(l.item) ? speakerBtn(l.item, false) : "";
      const inner = `<span class="mi-dlg-who text-caption">${esc(role)}</span><span class="mi-ig text-option">${esc(l.ig)}${l.item && l.item.unsure ? " " + flagHtml(false) : ""}</span><span class="mi-dlg-en text-caption" hidden>${esc(l.en)}</span>`;
      return `<div class="mi-dlg-row mi-dlg-row--${l.who === "B" ? "b" : "a"}${now ? " is-now" : ""}" role="listitem">${reveal ? `<button type="button" class="mi-dlg-bub" aria-expanded="false" aria-label="${esc(role)}: ${esc(l.ig)}. Tap to show the English">${inner}</button>` : `<div class="mi-dlg-bub">${inner}</div>`}${a}</div>`;
    }).join("")}</div>`;
  }
  function bindDlgReveal() {
    app.querySelectorAll("button.mi-dlg-bub").forEach((b) => b.onclick = () => { const en = b.querySelector(".mi-dlg-en"), open = en.hidden; en.hidden = !open; b.setAttribute("aria-expanded", open ? "true" : "false"); });
  }
  const dnextBtn = (label) => `<button class="mi-btn mi-btn--block text-button" id="dnext">${label}</button>`;
  function bindDnext() { const b = document.getElementById("dnext"); b.onclick = () => { R.i++; renderStep(); }; b.focus(); }
  EXT["dlg-title"] = {
    render(ex) {
      const d = ex.d, roles = d.roles ? Object.keys(d.roles).map((k) => `<li><b>${esc(k)}</b> ${esc(d.roles[k])}</li>`).join("") : "";
      return { body: `<div class="mi-card mi-intro"><span class="mi-badge mi-badge--new text-label">Story</span><h1 class="text-title mi-mt-2">${esc(d.title)}</h1>
        ${d.setting ? `<p class="text-gloss mi-muted">${esc(d.setting)}</p>` : ""}${roles ? `<ul class="mi-dlg-roles text-caption">${roles}</ul>` : ""}
        <p class="text-caption mi-muted mi-mt-3">Tap a line to see the English. No lives are lost in a story.</p>
        ${d.flag ? `<div class="mi-inset text-gloss mi-dlg-flag" role="note">${flagHtml(false)} Some lines are still being checked with a native speaker.</div>` : ""}</div>`, foot: dnextBtn("Start") };
    },
    bind() { bindDnext(); }
  };
  EXT["dlg-line"] = {
    render(ex) { return { body: `${dlgTranscript(ex, ex.idx, true)}<p class="text-caption mi-muted mi-center mi-mt-3">Line ${ex.idx + 1} of ${ex.lines.length}</p>`, foot: dnextBtn("Continue") }; },
    bind(ex) {
      bindDnext(); bindDlgReveal();
      const a = ex.item && audioFor(ex.item), btn = app.querySelector(".mi-dlg-row.is-now [data-audio]");
      if (a && S.autoAudio) setTimeout(() => { if (R && R.queue[R.i] === ex) playClip(a.file, btn); }, durBase());
    }
  };
  EXT["dlg-q"] = {
    render(ex, c) {
      const q = ex.q; R.state.correct = q.answer; R.state.solution = q.answer;
      return { body: `${dlgTranscript(ex, ex.upto, false)}${c.head(esc(q.prompt))}${mcMarkup(q.options, q.type === "next-line")}`, foot: checkBtn(c.btn) };
    },
    bind() { bindMc(); }
  };

  /* ───────────── bottom sheet for a path node (like Duolingo's node popover) ───────────── */
  let sheetEl = null, sheetTrigger = null;
  function closeSheet(noFocus) {
    if (!sheetEl) return;
    sheetEl.remove(); sheetEl = null;
    const t = sheetTrigger; sheetTrigger = null;
    if (!noFocus && t && document.contains(t)) t.focus();
  }
  function openSheet(n, trigger) {
    closeSheet(true);
    const st = nodeState(n), sec = n.sec, rec = S.nodes[n.id], guide = `<button class="mi-btn mi-btn--secondary mi-btn--block text-button mi-mt-2" id="pop-guide">${ICON.book}Guidebook</button>`;
    let kind = "", title = "", meta = "", btns = "";
    const best = rec ? `<p class="text-caption mi-muted">Best: ${rec.best}% · done ${rec.n}×</p>` : "";
    if (n.kind === "skill") {
      const np = nodeProgress(n.les);
      kind = "Lesson · " + sec.title; title = n.les.title;
      if (st.locked) meta = `<p class="text-gloss">${esc(st.why)}</p>`;
      else {
        meta = `<p class="text-gloss"><b>${np.complete ? "All " + np.total + " levels complete" : "Level " + Math.min(np.done + 1, np.total) + " of " + np.total + (np.next ? " · " + esc(levelName(np.next)) : "")}</b></p>
          <div class="mi-level-prog"><span class="mi-level-dots">${np.keys.map((k) => `<i class="${S.levels[n.les.id] && S.levels[n.les.id].r[k] ? "is-on" : ""}"></i>`).join("")}</span><span class="text-caption mi-muted">${n.les.items.length} ${n.les.type === "letters" ? "letters" : "words & phrases"}</span></div>`;
        btns = `<button class="mi-btn mi-btn--block text-button" id="pop-go">${np.next ? (np.done ? "Continue" : "Start") : "Practise"}</button>`;
        if (np.keys.length > 1 && np.done) btns += `<div class="mi-btnrow mi-mt-2">${np.keys.map((k, i) => (S.levels[n.les.id] && S.levels[n.les.id].r[k]) ? `<button class="mi-btn mi-btn--secondary mi-btn--small text-button" data-lv="${k}" aria-label="Replay level ${i + 1}, ${esc(levelName(k))}">Level ${i + 1}</button>` : "").join("")}</div>`;
        btns += `<button class="mi-link text-button" id="pop-words">See the words</button>`;
      }
    } else if (n.kind === "practice") {
      kind = "Practice · optional"; title = "Practice: " + sec.title;
      meta = st.locked ? `<p class="text-gloss">${esc(st.why)}</p>` : `<p class="text-gloss">About 12 questions mixing what you have learned so far in this unit, weakest words first. You can skip it any time.</p>${best}`;
      if (!st.locked) btns = `<button class="mi-btn mi-btn--block text-button" id="pop-go">${rec ? "Practise again" : "Start"}</button>`;
    } else if (n.kind === "review") {
      kind = "Unit review · optional"; title = "Unit review: " + sec.title;
      meta = st.locked ? `<p class="text-gloss">${esc(st.why)}</p>` : `<p class="text-gloss">15 harder questions across the whole unit. Pass mark 70%. It never blocks the next unit.</p>${best}`;
      if (!st.locked) btns = `<button class="mi-btn mi-btn--block text-button" id="pop-go">${rec ? "Try again" : "Start"}</button>`;
    } else {
      kind = "Story"; title = n.d.title;
      meta = st.locked ? `<p class="text-gloss">${esc(st.why)}</p>` : `<p class="text-gloss">${esc(n.d.setting || "A short conversation.")}</p><p class="text-caption mi-muted">${n.d.lines.length} lines · ${(n.d.questions || []).length} questions</p>${n.d.flag ? `<p class="text-caption">${flagHtml(false)} Some lines are still being checked.</p>` : ""}${best}`;
      if (!st.locked) btns = `<button class="mi-btn mi-btn--block text-button" id="pop-go">${rec ? "Read again" : "Start"}</button>`;
    }
    const el = document.createElement("div");
    el.className = "mi-pop";
    el.innerHTML = `<div class="mi-pop-scrim" data-close></div><div class="mi-pop-card" role="dialog" aria-modal="true" aria-labelledby="pop-t" style="${secVar(sec)}">
      <button class="mi-close mi-pop-x" data-close aria-label="Close">${ICON.close}</button>
      <p class="text-label mi-pop-kind">${esc(kind)}</p><h2 class="text-title" id="pop-t">${esc(title)}</h2>${meta}${btns}${guide}</div>`;
    document.body.appendChild(el);
    sheetEl = el; sheetTrigger = trigger || null;
    el.querySelectorAll("[data-close]").forEach((b) => b.onclick = () => closeSheet());
    const q = (id) => document.getElementById(id);
    if (q("pop-guide")) q("pop-guide").onclick = () => { closeSheet(true); openGuide(sec.id); };
    if (q("pop-go")) q("pop-go").onclick = () => {
      closeSheet(true);
      if (n.kind === "skill") { const np = nodeProgress(n.les), x = findLesson(n.id); if (np.next) startLevel(x, np.next); else startRun({ mode: "lesson", lessonId: n.les.id, queue: buildLesson(sec, n.les, { repeat: true }) }); }
      else startNode(n);
    };
    if (q("pop-words")) q("pop-words").onclick = () => { closeSheet(true); lessonIntro(findLesson(n.id)); };
    el.querySelectorAll("[data-lv]").forEach((b) => b.onclick = () => { closeSheet(true); startLevel(findLesson(n.id), b.dataset.lv); });
    (q("pop-go") || q("pop-guide")).focus();
  }
  document.addEventListener("keydown", (e) => {
    if (!sheetEl) return;
    if (e.key === "Escape") { e.preventDefault(); closeSheet(); return; }
    if (e.key === "Tab") { // keep focus inside the open sheet
      const f = [...sheetEl.querySelectorAll("button, a[href]")].filter((b) => !b.disabled && b.offsetParent !== null);
      if (!f.length) return;
      const a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } else if (!sheetEl.contains(document.activeElement)) { e.preventDefault(); a.focus(); }
    }
  });

  /* ───────────── Guidebook (WP E): goal, 5 key phrases, tips; falls back to the unit's own tips and items ───────────── */
  let keepHomeY = null;
  function openGuide(unitId) { keepHomeY = window.scrollY; go("guide-" + unitId); }
  function guideData(sec) {
    const G = guideFor(sec.id);
    if (G && Array.isArray(G.keyPhrases) && G.keyPhrases.length) return { goal: G.goal || sec.description, phrases: G.keyPhrases.slice(0, 5), tips: Array.isArray(G.tips) ? G.tips : [], built: false };
    // fallback: one phrase per lesson (spread), then fill from the first lesson; tips from the lessons' own tips
    const ls = sec.lessons.filter((l) => l.type !== "letters"), picked = [];
    ls.forEach((l) => { const it = l.items.find((x) => wordCount(x.ig) >= 2 && !x.unsure) || l.items.find((x) => !x.unsure) || l.items[0]; if (it && !picked.includes(it)) picked.push(it); });
    ls.forEach((l) => l.items.forEach((it) => { if (picked.length < 5 && !picked.includes(it)) picked.push(it); }));
    return {
      goal: sec.description, built: true,
      phrases: picked.slice(0, 5).map((it) => ({ ig: it.ig, en: it.en, note: it.note, flag: !!it.unsure })),
      tips: ls.filter((l) => l.tip).slice(0, 3).map((l) => ({ title: l.title, body: l.tip, ex: l.items.slice(0, 2).map((it) => ({ ig: it.ig, en: it.en })) }))
    };
  }
  function viewGuide(unitId) {
    const sec = C.sections.find((s) => s.id === unitId && !s.reference);
    if (!sec) { go("home"); return; }
    const g = guideData(sec), exRow = (e) => `<div class="mi-word-row"><div class="mi-word-row-main"><p class="mi-word-row-ig mi-ig text-option">${esc(e.ig)}</p><p class="mi-word-row-en text-caption">${esc(e.en)}</p></div><div class="mi-word-row-side">${speakerBtn({ ig: e.ig }, false)}</div></div>`;
    app.innerHTML = `<button class="mi-link text-button" id="back">${ICON.back}Back to the path</button>
      <section style="${secVar(sec)}"><div class="mi-unit-banner mi-unit-banner--guide"><div class="mi-unit-banner-main">
        <p class="text-label mi-unit-kicker">Guidebook · ${esc(sec.title)}</p><h1 class="text-title">${esc(g.goal)}</h1>${sec.igTitle ? `<p class="mi-ig text-gloss">${esc(sec.igTitle)}</p>` : ""}</div></div></section>
      <div class="mi-card mi-card--rows"><h2 class="text-heading">${ICON.star}Key phrases</h2>
        ${g.phrases.map((p) => `<div class="mi-word-row mi-kp"><div class="mi-word-row-main"><p class="mi-word-row-ig mi-ig text-word">${esc(p.ig)}${p.flag ? " " + flagHtml(false) : ""}</p><p class="mi-word-row-en text-gloss">${esc(p.en)}</p>${p.note ? `<p class="text-caption mi-muted">${esc(p.note)}</p>` : ""}</div><div class="mi-word-row-side">${speakerBtn({ ig: p.ig }, false)}</div></div>`).join("")}
        ${g.phrases.some((p) => p.flag) ? `<p class="text-caption mi-muted mi-mt-3">${flagHtml(false)} marks phrases still being checked with a native speaker.</p>` : ""}</div>
      ${g.tips.map((t) => `<div class="mi-card"><h2 class="text-heading">${ICON.book}${esc(t.title)}</h2><p class="text-body">${esc(t.body)}</p>${(t.ex || []).length ? `<div class="mi-card--rows">${t.ex.map(exRow).join("")}</div>` : ""}</div>`).join("")}
      <div class="mi-card mi-card--rows"><details><summary>Words in this unit</summary>${sec.lessons.filter((l) => l.type !== "letters").map((l) => `<h3 class="text-label mi-muted">${esc(l.title)}</h3>${l.items.map((it) => wordRow(it, it.en)).join("")}`).join("")}</details></div>
      <button class="mi-btn mi-btn--block text-button mi-mt-3" id="back2">Back to the path</button>`;
    const back = () => go("home");
    document.getElementById("back").onclick = back; document.getElementById("back2").onclick = back;
  }

  /* ───────────── screens ───────────── */
  const icons = { alphabet: "🔤", greetings: "👋", intro: "🙋", numbers: "🔢", family: "👪", food: "🍲", body: "🖐️", colours: "🎨", time: "📅", verbs: "🏃", everyday: "💬" };

  function viewHome() {
    const xpToday = S.xpByDay[today()] || 0;
    const dailyDone = S.daily[today()];
    const hasLearned = learnedItems().length > 0;
    let html = "";
    if (S.seenVersion !== C.version) {
      html += `<div class="mi-card mi-card--notice"><div class="mi-notice-head"><p class="text-heading">Curriculum v${esc(C.version)} <span class="text-caption mi-muted">updated ${esc(C.updated)}</span></p>
        <button class="mi-link text-button" id="seen">Dismiss</button></div>
        ${C.changelog && C.changelog.length ? `<ul class="mi-list text-gloss">${C.changelog[0].changes.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>` : ""}</div>`;
    }
    const goalPct = Math.min(100, (xpToday / S.goal) * 100);
    html += `<div class="mi-daily"><span class="mi-daily-mark" aria-hidden="true">${dailyDone ? ICON.check : ICON.test}</span><div class="mi-daily-body">
      <h2 class="text-heading">${dailyDone ? "Daily test complete" : "Today's test"}</h2>
      <p class="text-gloss">${dailyDone ? `Score: ${dailyDone.score}/${dailyDone.total}. Come back tomorrow!` : hasLearned ? `${DAILY_LEN} quick questions on words you've learned.` : "Finish your first lesson to unlock it."}</p>
      <p class="text-caption">Daily goal: ${xpToday}/${S.goal} XP</p>
      <div class="mi-daily-foot"><div class="mi-pbar mi-pbar--goal" role="progressbar" aria-label="Daily XP goal" aria-valuenow="${Math.round(goalPct)}" aria-valuemin="0" aria-valuemax="100"><i style="width:${goalPct}%"></i></div>
      ${!dailyDone && hasLearned ? `<button class="mi-btn mi-btn--gold mi-btn--small text-button" id="daily-go">Start</button>` : ""}</div>
    </div></div>`;

    let foundCurrent = false;
    const NODES = {};
    const nodeIcon = { dialogue: ICON.chat, practice: ICON.dumbbell, review: ICON.trophy };
    const renderSec = (sec, si, unitNo) => {
      const done = sec.lessons.filter((l) => S.completed[l.id]).length, nodes = unitNodes(sec), G = guideFor(sec.id);
      if (si) html += `<div class="mi-uli" aria-hidden="true"></div>`;
      html += `<section class="mi-section" style="${secVar(sec)}" aria-label="Unit ${unitNo}: ${esc(sec.title)}"><div class="mi-unit-banner"><div class="mi-unit-banner-main">
        <p class="text-label mi-unit-kicker"><span aria-hidden="true">${icons[sec.id] || "📘"}</span> Unit ${unitNo} · ${esc(sec.title)}</p>
        <h2 class="text-heading">${esc((G && G.goal) || sec.description)}</h2><p class="mi-ig text-gloss">${esc(sec.igTitle)}</p>
        <div class="mi-section-meta"><div class="mi-pbar mi-pbar--section" aria-hidden="true"><i style="width:${(done / sec.lessons.length) * 100}%"></i></div><span class="text-caption">${done}/${sec.lessons.length} lessons</span></div></div>
        <button class="mi-btn mi-btn--small mi-unit-guide text-button" data-guide="${esc(sec.id)}" aria-label="Guidebook for unit ${unitNo}: ${esc(sec.title)}">${ICON.book}Guidebook</button>
      </div><div class="mi-path">`;
      nodes.forEach((n, k) => {
        NODES[n.id] = n;
        const st = nodeState(n);
        let cls = "mi-node--" + n.kind + (st.done ? " is-done" : st.locked ? " is-locked" : "");
        if (n.kind === "skill" && !st.locked && !st.done && !foundCurrent) { cls += " is-current"; foundCurrent = true; }
        const label = n.kind === "skill" ? n.les.title : n.kind === "practice" ? "Practice" : n.kind === "review" ? "Unit review" : n.d.title;
        const typeTxt = { skill: "Lesson", practice: "Practice, optional", review: "Unit review, optional", dialogue: "Story" }[n.kind];
        let lvTxt = "", ring = "", pill = "", icon;
        if (n.kind === "skill") {
          const np = nodeProgress(n.les), seg = 100 / np.total;
          icon = icons[sec.id] || "📘";
          if (!st.locked) {
            lvTxt = `, level ${np.done} of ${np.total}`;
            ring = `<svg class="mi-ring" viewBox="0 0 44 44" aria-hidden="true">${np.keys.map((kk, m) => `<circle cx="22" cy="22" r="20" pathLength="100" class="${m < np.done ? "is-on" : ""}" stroke-dasharray="${(seg - 4).toFixed(2)} ${(100 - seg + 4).toFixed(2)}" stroke-dashoffset="${(-m * seg - 2).toFixed(2)}"/>`).join("")}</svg>`;
            if (!np.complete) pill = `<span class="mi-node-lv text-caption">${np.done}/${np.total}</span>`;
          }
        } else icon = nodeIcon[n.kind];
        const state = st.done ? ", done" : st.locked ? ", locked" : cls.includes("current") ? ", up next" : "";
        html += `<button class="mi-node ${cls}" style="--shift:${[0, -1, 0, 1][k % 4]}" data-node="${esc(n.id)}" aria-haspopup="dialog" aria-label="${esc(typeTxt + ": " + label)}${state}${lvTxt}"${cls.includes("current") ? " aria-current='step'" : ""}>
          <span class="mi-node-bubble" aria-hidden="true">${ring}${st.locked ? ICON.lock : icon}${pill}</span>
          <span class="mi-node-label text-caption" aria-hidden="true">${esc(label)}</span></button>`;
      });
      html += `</div></section>`;
    };
    const stages = Array.isArray(C.stages) ? C.stages : [];
    const secById = {}; C.sections.forEach((s) => { secById[s.id] = s; });
    const placed = new Set();
    let si = 0;
    stages.forEach((st) => {
      const secs = (st.units || []).map((id) => secById[id]).filter(Boolean);
      secs.forEach((s) => placed.add(s.id));
      if (!secs.length) return;
      const tot = secs.reduce((n, s) => n + s.lessons.length, 0);
      const dn = secs.reduce((n, s) => n + s.lessons.filter((l) => S.completed[l.id]).length, 0);
      html += `<div class="mi-stage"><h2 class="mi-stage-title text-title"><span class="mi-stage-label text-label">Section ${st.number} · ${esc(st.cefr)}</span> ${esc(st.title)}</h2>
        <p class="text-gloss">${esc(st.focus)}</p><p class="text-caption mi-muted">${dn}/${tot} lessons in this section</p></div>`;
      secs.forEach((s, k) => renderSec(s, si++, k + 1));
    });
    const rest = C.sections.filter((s) => !placed.has(s.id) && !s.reference);
    if (rest.length) {
      if (stages.length) html += `<div class="mi-stage"><h2 class="mi-stage-title text-title">More topics</h2></div>`;
      rest.forEach((s, k) => renderSec(s, si++, k + 1));
    }
    const empty = stages.filter((st) => !(st.units || []).some((id) => secById[id]));
    if (empty.length) {
      const n = empty[0];
      html += `<div class="mi-card mi-stage-next"><h2 class="text-heading"><span class="text-label">Coming next</span> Section ${n.number} · ${esc(n.cefr)} — ${esc(n.title)}</h2>
        <p class="text-gloss">${esc(n.focus)} New units arrive with the morning updates.</p>${empty.length > 1 ? (() => { const r = empty.slice(1), a = r[0], z = r[r.length - 1]; return `<p class="text-caption">Then ${r.length > 1 ? `Sections ${a.number}–${z.number}` : `Section ${a.number}`} (${esc(a.cefr === z.cefr ? a.cefr : a.cefr + "–" + z.cefr)})</p>`; })() : ""}</div>`;
    }
    html += `<p class="text-caption mi-muted mi-center mi-mt-8">Tip: every section's first lesson is open — jump into any topic you like.</p>`;
    app.innerHTML = html;

    const seen = document.getElementById("seen");
    if (seen) seen.onclick = () => { S.seenVersion = C.version; save(); viewHome(); };
    const dg = document.getElementById("daily-go");
    if (dg) dg.onclick = startDaily;
    app.querySelectorAll(".mi-node").forEach((b) => b.onclick = () => openSheet(NODES[b.dataset.node], b));
    app.querySelectorAll("[data-guide]").forEach((b) => b.onclick = () => openGuide(b.dataset.guide));
    const cur = app.querySelector(".mi-node.is-current");
    if (cur && window.scrollY === 0 && Object.keys(S.completed).length) cur.scrollIntoView({ block: "center" });
  }

  function lessonIntro(x) {
    const { sec, les } = x;
    const rec = S.completed[les.id];
    app.innerHTML = `<button class="mi-link text-button" id="back">${ICON.back}Back</button>
      <div class="mi-card"><p class="text-label mi-muted">${esc(sec.title)} · <span class="mi-ig">${esc(sec.igTitle)}</span></p>
      <h1 class="text-title">${esc(les.title)}</h1>
      ${les.tip ? `<div class="mi-inset text-gloss"><b>Tip:</b> ${esc(les.tip)}</div>` : ""}
      <p class="text-caption mi-muted mi-mt-3">${les.items.length} ${les.type === "letters" ? "letters" : "words & phrases"}${rec ? ` · completed ${rec.times}× · best ${rec.best}%` : ""}</p>
      <p class="text-caption mi-muted mi-mt-2">Levels: ${nodeProgress(les).keys.map((k) => levelName(k) + (S.levels[les.id] && S.levels[les.id].r[k] ? " ✓" : "")).join(" · ")}</p>
      <button class="mi-btn mi-btn--block text-button" id="start">${rec ? "Practise" : "Start lesson"}</button>
      ${nodeProgress(les).keys.length > 1 ? `<div class="mi-btnrow mi-mt-3">${nodeProgress(les).keys.map((k, n) => `<button class="mi-btn mi-btn--secondary mi-btn--small text-button" data-lv="${k}">Level ${n + 1}</button>`).join("")}</div>` : ""}</div>
      <div class="mi-card mi-card--rows"><h2 class="text-heading">In this lesson</h2>${les.items.map((it) => wordRow(it, it.en)).join("")}</div>`;
    document.getElementById("back").onclick = () => go("home");
    document.getElementById("start").onclick = () => startRun({ mode: "lesson", lessonId: les.id, queue: buildLesson(sec, les, { repeat: true }) });
    app.querySelectorAll("[data-lv]").forEach((b) => b.onclick = () => startLevel(x, b.dataset.lv));
  }

  function startDaily() { startRun({ mode: "daily", queue: buildReview(DAILY_LEN) }); }

  // BarChart: one column per entry; label under each bar, value in the title.
  function barChart(entries, label) {
    return `<div class="mi-chart" role="img" aria-label="${esc(label)}">${entries.map(({ pct, title, tick }) => `<div class="mi-chart-col" title="${esc(title)}"><div class="mi-chart-bar${pct > 0 ? "" : " is-empty"}" style="height:${pct}%"></div><span class="text-caption">${esc(tick)}</span></div>`).join("")}</div>`;
  }

  function viewDaily() {
    const hist = Object.entries(S.daily).sort().slice(-14);
    const dailyDone = S.daily[today()];
    const learnedN = learnedItems().length;
    const due = learnedItems().filter(({ it }) => (S.words[it._key]?.due || "0") <= today()).length;
    app.innerHTML = `<h1 class="text-title">Daily test</h1>
      <div class="mi-card"><p class="text-body">${DAILY_LEN} questions picked from words you've learned. Words you get wrong come back sooner; words you know well come back less often (spaced repetition).</p>
      <p class="text-caption mi-muted">${learnedN} words learned · ${due} due for review today</p>
      ${dailyDone ? `<p class="text-body">Today's score: <b>${dailyDone.score}/${dailyDone.total}</b>. You can retake it — your best score counts.</p>` : ""}
      <button class="mi-btn mi-btn--block text-button" id="go" ${learnedN ? "" : "disabled"}>${dailyDone ? "Retake today's test" : "Start today's test"}</button>
      ${learnedN ? "" : `<p class="text-caption mi-muted mi-mt-2">Complete your first lesson to unlock the daily test.</p>`}</div>
      <div class="mi-card"><h2 class="text-heading">${ICON.flame.replace('class="mi-icon"', 'class="mi-icon mi-icon--streak"')}${liveStreak()}-day streak</h2>${weekRow()}</div>
      <div class="mi-card"><h2 class="text-heading">Practise weak words</h2><p class="text-caption mi-muted">A short round on the words you miss most.</p>
      <button class="mi-btn mi-btn--secondary mi-btn--block text-button" id="weak" ${learnedN ? "" : "disabled"}>Practise</button></div>
      <div class="mi-card"><h2 class="text-heading">Last 14 tests</h2>${hist.length ? barChart(hist.map(([d, v]) => ({ pct: (v.score / (v.total || 1)) * 100, title: `${d}: ${v.score}/${v.total}`, tick: d.slice(8) })), "Daily test scores, last 14 tests") : `<p class="text-body mi-muted">No tests yet.</p>`}</div>`;
    document.getElementById("go").onclick = startDaily;
    document.getElementById("weak").onclick = () => { const q = buildReview(8, true); startRun({ mode: "practice", queue: q.length ? q : buildReview(8) }); };
  }

  let wordFilter = "all", wordQuery = "";
  function viewWords() {
    const learnedSet = new Set(learnedItems().map((x) => x.it._key));
    const rows = [];
    C.sections.filter((sec) => !sec.reference).forEach((sec) => sec.lessons.forEach((les) => les.items.forEach((it) => rows.push({ it, sec, les }))));
    const filtered = rows.filter(({ it, les }) => {
      if (wordFilter === "learned" && !learnedSet.has(it._key)) return false;
      if (wordFilter === "weak" && !(learnedSet.has(it._key) && (S.words[it._key]?.s ?? 0) <= 2)) return false;
      if (wordFilter === "unsure" && !it.unsure) return false;
      if (wordQuery) { const q = looseKey(wordQuery); return looseKey(it.ig).includes(q) || it.en.toLowerCase().includes(wordQuery.toLowerCase()); }
      return true;
    });
    const nLearned = rows.filter(({ it }) => learnedSet.has(it._key)).length;
    const nWeak = rows.filter(({ it, les }) => learnedSet.has(it._key) && (S.words[it._key]?.s ?? 0) <= 2).length;
    const nUnsure = rows.filter(({ it }) => it.unsure).length;
    const chip = (id, label) => `<button class="mi-chip text-caption" aria-pressed="${wordFilter === id}" data-f="${id}">${label}</button>`;
    app.innerHTML = `<h1 class="text-title">Words</h1>
      <div class="mi-stat-tiles">
        <div class="mi-stat-tile mi-stat-tile--acc"><b class="text-heading">${nLearned}</b><span class="text-caption mi-muted">Learned</span></div>
        <div class="mi-stat-tile"><b class="text-heading">${nWeak}</b><span class="text-caption mi-muted">Weak</span></div>
        <div class="mi-stat-tile mi-stat-tile--flag"><b class="text-heading">${nUnsure}</b><span class="text-caption mi-muted">⚑ Being checked</span></div>
      </div>
      <div class="mi-words-tools">
        <div class="mi-search-wrap">${ICON.search}<input class="mi-search mi-ig text-body" type="search" id="q" placeholder="Search Igbo or English…" aria-label="Search words" value="${esc(wordQuery)}" autocomplete="off" spellcheck="false"></div>
        <div class="mi-chips" role="group" aria-label="Filter words">${chip("all", "All")}${chip("learned", "Learned")}${chip("weak", "Weak")}${chip("unsure", "⚑ Being checked")}</div>
        <p class="text-caption mi-muted">${filtered.length} items · green speaker plays a native speaker here, grey opens Nkọwa okwu</p>
      </div>
      <div class="mi-card mi-card--rows">${filtered.map(({ it, sec }) => wordRow(it, `${it.en} · ${sec.title}`, S.words[it._key]?.s ?? 0)).join("") || '<p class="text-body mi-muted">Nothing here yet.</p>'}</div>`;
    const q = document.getElementById("q");
    q.oninput = () => { wordQuery = q.value; const pos = q.selectionStart; viewWords(); const n = document.getElementById("q"); n.focus(); n.setSelectionRange(pos, pos); };
    app.querySelectorAll(".mi-chip").forEach((b) => b.onclick = () => { wordFilter = b.dataset.f; viewWords(); const n = app.querySelector(`.mi-chip[data-f="${wordFilter}"]`); if (n) n.focus(); });
  }

  function viewMore() {
    const days = []; for (let i = 13; i >= 0; i--) days.push(addDays(today(), -i));
    const max = Math.max(S.goal, ...days.map((d) => S.xpByDay[d] || 0));
    const learned = learnedItems().length, total = Object.keys(itemIndex).length;
    const unsure = Object.values(itemIndex).filter((v) => v.item.unsure).length;
    const clips = Object.entries(AUDIO).sort((a, b) => a[0].localeCompare(b[0]));
    app.innerHTML = `<h1 class="text-title">More</h1>
      <div class="mi-card"><h2 class="text-heading">Your progress</h2>
        <p class="text-body">${S.xp} XP · ${liveStreak()}-day streak · ${Object.keys(S.completed).length}/${allLessons.length} lessons · ${learned}/${total} words</p>
        ${barChart(days.map((d) => ({ pct: ((S.xpByDay[d] || 0) / max) * 100, title: `${d}: ${S.xpByDay[d] || 0} XP`, tick: d.slice(8) })), "XP earned per day, last 14 days")}
        <div class="mi-field"><label class="text-body" for="goal">Daily XP goal</label>
          <span class="mi-select-wrap"><select class="mi-select text-body" id="goal">${[10, 20, 30, 50, 80].map((g) => `<option value="${g}" ${g === S.goal ? "selected" : ""}>${g} XP</option>`).join("")}</select></span></div>
      </div>
      <div class="mi-card"><h2 class="text-heading">${ICON.mic}Speaking</h2>
        <label class="mi-toggle text-body">Include speaking exercises in lessons and the daily test<input type="checkbox" role="switch" id="speak-on" ${S.speakOn ? "checked" : ""}></label>
        <p class="text-caption mi-muted">You'll record yourself, play it back, and compare with a native speaker. ${S.speakAuto ? "If your browser can recognise Igbo speech, it also checks you automatically." : "Automatic checking isn't available in this browser, so you grade yourself."}</p>
        ${S.speakAuto ? "" : `<button class="mi-link text-button" id="speak-retry">Try automatic checking again</button>`}</div>
      <div class="mi-card"><h2 class="text-heading">${ICON.speaker}Sound</h2>
        <label class="mi-toggle text-body">Sound effects / auto-play audio<input type="checkbox" role="switch" id="auto-audio" ${S.autoAudio ? "checked" : ""}></label>
        <p class="text-caption mi-muted">Plays the native-speaker recording automatically on new words and speaking exercises ("hear it first"). You can always tap the speaker to play it yourself.
        ${Object.values(itemIndex).filter((v) => audioFor(v.item)).length} of ${total} words have in-app audio; the rest link to Nkọwa okwu.</p></div>
      <div class="mi-card"><h2 class="text-heading">About the curriculum</h2>
        <p class="text-body">Version <b>${esc(C.version)}</b>, updated ${esc(C.updated)}. ${allLessons.length} lessons across ${C.sections.length} sections.</p>
        <p class="text-gloss">${flagHtml(false)} <b>${unsure}</b> words/phrases are flagged as <i>being checked</i> with a native speaker — see <code>QUESTIONS-FOR-PARENT.md</code>. They're still taught, but double-check them.</p>
        <p class="text-gloss">Standard Igbo is used (based on the Owerri/Umuahia dialects). Your family's dialect may differ — that's normal!</p>
        ${C.changelog ? `<details><summary>What's new</summary><div>${C.changelog.slice(0, 5).map((c) => `<h3 class="text-label mi-muted">${esc(c.date)} · v${esc(c.version)}</h3><ul class="mi-list text-gloss">${c.changes.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`).join("")}</div></details>` : ""}
      </div>
      <div class="mi-card"><h2 class="text-heading">Free sources used</h2><ul class="mi-list text-gloss">${C.sources.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a> — <span class="mi-muted">${esc(s.note)}</span></li>`).join("")}</ul></div>
      <div class="mi-card" id="audio-credits"><h2 class="text-heading">Audio credits</h2>
        <p class="text-gloss">Native-speaker recordings come from <a href="https://lingualibre.org" target="_blank" rel="noopener">Lingua Libre</a>, a Wikimedia project where volunteers record words in their language, via <a href="https://commons.wikimedia.org/wiki/Category:Lingua_Libre_pronunciation-ibo" target="_blank" rel="noopener">Wikimedia Commons</a>. Each clip is free to reuse under the licence shown. Daalụ to every speaker!</p>
        <p class="text-gloss">More recordings come from the <a href="https://huggingface.co/datasets/nkowaokwu/ibo-dict" target="_blank" rel="noopener">Nkọwa okwu / IgboAPI dataset</a> by Nkọwa okwu and the IgboAPI contributors, used under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>. Clips were selected to match the words in this app and renamed (a few were converted to MP3).</p>
        ${clips.length ? `<details><summary>${clips.length} clips by ${new Set(clips.map(([, a]) => a.author)).size} speaker(s) / source(s) — show all</summary>
        <ul class="mi-list text-caption mi-credits">${clips.map(([w, a]) => `<li><b class="mi-ig">${esc(w)}</b> — ${esc(a.author)} · ${esc(a.license)} · <a href="${esc(a.source)}" target="_blank" rel="noopener">${/huggingface\.co/.test(a.source || "") ? "Nkọwa okwu dataset" : /wikimedia\.org/.test(a.source || "") ? "Wikimedia Commons" : "source"}</a></li>`).join("")}</ul></details>` : `<p class="text-caption mi-muted">No audio files loaded.</p>`}</div>
      <div class="mi-card"><h2 class="text-heading">Install on your phone</h2>
        ${isStandalone() ? `<p class="text-gloss">You're using the installed app. It works offline too.</p>`
          : installPrompt ? `<p class="text-gloss">Add Mmụta Igbo to your home screen — it opens like an app and works offline.</p><p><button class="mi-btn mi-btn--small text-button" id="install">Install app</button></p>`
          : `<ul class="mi-list text-gloss"><li><b>iPhone/iPad:</b> open this page in Safari → tap Share → <i>Add to Home Screen</i>.</li><li><b>Android:</b> in Chrome tap ⋮ → <i>Install app</i> (or <i>Add to Home screen</i>).</li></ul>`}
        <p class="text-caption mi-muted mi-mt-3">Progress is saved separately on each device/browser. Use <b>Export</b> / <b>Import</b> below to move it.</p></div>
      <div class="mi-card mi-backup"><h2 class="text-heading">Backup</h2><p class="text-caption mi-muted">Progress is saved in this browser only. Export a backup to move it to another device.</p>
        <div class="mi-btnrow">
          <button class="mi-btn mi-btn--secondary mi-btn--small text-button" id="export">Export</button>
          <button class="mi-btn mi-btn--secondary mi-btn--small text-button" id="import">Import</button>
        </div>
        <button class="mi-btn mi-btn--danger mi-btn--small mi-btn--block text-button" id="reset">Reset everything</button>
        <input type="file" id="file" accept="application/json" hidden></div>`;
    document.getElementById("goal").onchange = (e) => { S.goal = +e.target.value; save(); toast("Goal saved"); };
    document.getElementById("speak-on").onchange = (e) => { S.speakOn = e.target.checked; save(); toast(S.speakOn ? "Speaking on" : "Speaking off"); };
    document.getElementById("auto-audio").onchange = (e) => { S.autoAudio = e.target.checked; save(); toast(S.autoAudio ? "Auto-play on" : "Auto-play off"); };
    const sr = document.getElementById("speak-retry"); if (sr) sr.onclick = () => { S.speakAuto = true; save(); viewMore(); };
    const ib = document.getElementById("install");
    if (ib) ib.onclick = async () => {
      const p = installPrompt; installPrompt = null;
      try { p.prompt(); const r = await p.userChoice; if (r && r.outcome === "accepted") toast("Installing…"); } catch (e) { /* prompt unavailable */ }
      viewMore();
    };
    document.getElementById("export").onclick = () => {
      const blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `mmuta-igbo-progress-${today()}.json`; a.click();
    };
    const file = document.getElementById("file");
    document.getElementById("import").onclick = () => file.click();
    file.onchange = async () => {
      try { const data = JSON.parse(await file.files[0].text()); S = Object.assign(defaults(), data); migrateState(); save(); refreshStats(); toast("Progress imported"); viewMore(); }
      catch (e) { toast("That file isn't a valid backup"); }
    };
    document.getElementById("reset").onclick = () => { if (confirm("Delete ALL progress? This cannot be undone.")) { S = defaults(); save(); refreshStats(); go("home"); } };
  }

  /* ───────────── installable app (PWA) ───────────── */
  let installPrompt = null;
  function isStandalone() { return (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true; }
  window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); installPrompt = e; if (location.hash === "#more" && !R) viewMore(); });
  window.addEventListener("appinstalled", () => { installPrompt = null; toast("App installed"); });
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => { navigator.serviceWorker.register("sw.js").catch(() => { /* offline support unavailable */ }); });
  }

  /* ───────────── Letters tab (reference section: the alphabet) ───────────── */
  function viewLetters() {
    const sec = C.sections.find((s) => s.reference && s.id === "alphabet") || C.sections.find((s) => s.reference);
    if (!sec) { app.innerHTML = `<h1 class="text-title">Letters</h1><p class="text-body mi-muted">No letters yet.</p>`; return; }
    const les = (id) => sec.lessons.find((l) => l.id === id);
    const groups = [
      { title: "Vowels", ids: ["alpha-vowels"] },
      { title: "Consonants", ids: ["alpha-consonants-1", "alpha-consonants-2"] },
      { title: "Double letters & ṅ", ids: ["alpha-digraphs"] }
    ];
    const tile = (it) => {
      const parts = String(it.ex || "").split(/\s+[—–-]\s+/);
      const word = parts[0], meaning = parts.slice(1).join(" — ");
      const a = audioFor(it);
      const body = `<span class="mi-letter-big mi-ig" aria-hidden="true">${esc(it.ig)}</span>
        <span class="mi-letter-ex mi-ig text-caption">${esc(word)}</span>${meaning ? `<span class="mi-letter-mean text-caption mi-muted">${esc(meaning)}</span>` : ""}
        <span class="mi-letter-say text-caption mi-muted">${esc(String(it.en).replace(/^(vowel|letter) '[^']*' — /, ""))}</span>`;
      const label = `${it.ig}${word ? ", " + word : ""}${meaning ? ", " + meaning : ""}`;
      if (a) return `<button type="button" class="mi-letter" data-audio="${esc(a.file)}" aria-label="Play ${esc(label)}">${body}</button>`;
      return `<div class="mi-letter mi-letter--quiet">${body}<a class="mi-link text-caption" href="${listenUrl(it.ig)}" target="_blank" rel="noopener" aria-label="Hear ${esc(it.ig)} on Nkọwa okwu (opens a new tab)">Nkọwa okwu</a></div>`;
    };
    let html = `<h1 class="text-title">Letters</h1>
      <p class="text-gloss">Igbo has 36 letters: 8 vowels and 28 consonants, 9 of them double letters. Tap a letter to hear it.</p>`;
    groups.forEach((g, gi) => {
      const ls = g.ids.map(les).filter(Boolean);
      if (!ls.length) return;
      html += `<section class="mi-letters-group" aria-labelledby="lg-${gi}"><h2 class="text-heading" id="lg-${gi}">${esc(g.title)}</h2>
        <div class="mi-letter-grid">${ls.flatMap((l) => l.items).map(tile).join("")}</div>
        <div class="mi-letters-practise">${ls.map((l) => `<button type="button" class="mi-btn mi-btn--secondary text-button" data-practise="${l.id}">Practise${ls.length > 1 ? " " + esc(l.title.replace(/^The /, "")) : ""}</button>`).join("")}</div></section>`;
    });
    app.innerHTML = html;
    app.querySelectorAll("[data-practise]").forEach((b) => b.onclick = () => { stopAudio(); const x = findLesson(b.dataset.practise); if (x) startRun({ mode: "lesson", lessonId: x.les.id, queue: buildLesson(x.sec, x.les, { quiz: true }) }); });
  }

  /* ───────────── router ───────────── */
  const views = { home: viewHome, daily: viewDaily, words: viewWords, letters: viewLetters, more: viewMore };
  let curView = null;
  function go(name) {
    if (R) return;
    closeSheet(true);
    curView = name;
    if (location.hash.slice(1) !== name) location.hash = name;
    const nav = /^guide-/.test(name) ? "home" : name;
    document.querySelectorAll(".mi-tab").forEach((b) => { if (b.dataset.nav === nav) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current"); });
    const y = name === "home" ? keepHomeY : null;
    keepHomeY = null;
    window.scrollTo(0, 0);
    const g = /^guide-(.+)$/.exec(name);
    if (g) viewGuide(g[1]); else (views[name] || viewHome)();
    if (y !== null) window.scrollTo(0, y); // coming back from a Guidebook: same place on the path
    refreshStats();
  }
  window.addEventListener("hashchange", () => { const h = location.hash.slice(1); if (!R && h && h !== curView) go(h); });
  document.querySelectorAll("[data-nav]").forEach((b) => b.onclick = () => go(b.dataset.nav));
  document.addEventListener("keydown", (e) => {
    if (!R) return;
    if (e.key === "Escape") return quitRun();
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "textarea" || tag === "input") return;
    if (/^[1-4]$/.test(e.key)) { const b = app.querySelectorAll(".mi-choices .mi-choice")[+e.key - 1]; if (b && !R.queue[R.i].type.startsWith("match")) b.click(); }
    if (e.key === "Enter") { const b = document.getElementById("cont") || document.getElementById("next") || document.getElementById("dnext") || document.getElementById("check"); if (b && !b.disabled && e.target !== b) { e.preventDefault(); b.click(); } }
  });
  if (window.__mmutaDebug) Object.assign(window.__mmutaDebug, { findPattern, unitNodes, nodeQueue, startNode, nodeState, okListenTap, okListenMc, okBankEn, enToks, igToks, dialoguesFor, guideData });
  go((location.hash || "#home").slice(1));
})();
