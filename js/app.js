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
  const audioByKey = {};
  Object.keys(AUDIO).forEach((k) => { audioByKey[strictKey(k)] = AUDIO[k]; });
  function audioFor(it) {
    if (!it) return null;
    for (const w of [it.ig, ...(it.alt || [])]) { const a = AUDIO[w] || audioByKey[strictKey(w)]; if (a && a.file) return a; }
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
  const defaults = () => ({ xp: 0, streak: 0, lastActive: null, completed: {}, words: {}, daily: {}, xpByDay: {}, goal: 30, seenVersion: null, speakOn: true, speakAuto: true, autoAudio: true });
  let S;
  try { S = Object.assign(defaults(), JSON.parse(localStorage.getItem(STORE_KEY) || "{}")); } catch (e) { S = defaults(); }
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
  function learnedItems() { return allLessons.filter((x) => S.completed[x.les.id]).flatMap((x) => x.les.items.map((it) => ({ it, x }))); }

  /* ───────────── exercise builders ───────────── */
  function poolFor(sec) { return sec.lessons.flatMap((l) => l.items); }
  /* Plausible wrong answers. Candidates are always real curriculum items/tokens, ranked by
     how easy they are to confuse with the answer; we pick n at random from the best ~6. */
  const ALL_ITEMS = () => Object.values(itemIndex).map((v) => v.item);
  // Plain form for comparing: no tones, no dots, no punctuation, lower case, single spaces.
  const plain = (s) => String(s).normalize("NFD").replace(TONES, "").replace(DOTS, "").toLowerCase().replace(/[^\p{L}\s]/gu, "").replace(/\s+/g, " ").trim();
  // Text as shown, ignoring only case/punctuation/spacing ("Ọ dị mma" == "Ọ dị mma.").
  const shown = (s) => String(s).normalize("NFC").toLowerCase().replace(/[^\p{L}\p{N}\p{M}\s]/gu, "").replace(/\s+/g, " ").trim();
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
      if (answers.has(shown(p.ig)) || [p.ig, ...(p.alt || [])].some((a) => shown(a) === shown(item.ig))) continue;
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
      if (!t || t.includes("…")) return;
      if (!m.has(t)) m.set(t, { les: new Set(), sec: new Set() });
      m.get(t).les.add(it._ctx.les); m.get(t).sec.add(it._ctx.sec);
    }));
    return m;
  })();
  function bankDecoys(item, tokens, n) {
    const own = new Set(tokens.map(shown)), ctx = item._ctx;
    const scored = [];
    for (const [t, c] of tokenCtx) {
      if (own.has(shown(t)) || !shown(t)) continue;
      let best = 0;
      for (const w of tokens) {
        let s = 4 * editSim(plain(w), plain(t));
        if (plain(w) === plain(t)) s += 5; // dotted/undotted twin that exists in the curriculum
        if (plain(w).slice(0, 2) === plain(t).slice(0, 2)) s += 0.5;
        best = Math.max(best, s);
      }
      if (c.les.has(ctx.les)) best += 2; else if (c.sec.has(ctx.sec)) best += 1;
      scored.push({ t, s: best + Math.random() * 0.8 });
    }
    scored.sort((a, b) => b.s - a.s);
    const top = [], seen = new Set();
    for (const { t } of scored) { const k = shown(t); if (seen.has(k)) continue; seen.add(k); top.push(t); if (top.length >= 6) break; }
    return pickRanked(top, n);
  }
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) window.__mmutaDebug = { distract, bankDecoys, items: ALL_ITEMS };
  function mk(type, item, sec, les) { return { type, item, pool: poolFor(sec), lesson: les, letters: les.type === "letters" }; }
  function reviewTypes(item, les) {
    const t = ["mc-en2ig"];
    if (les.type !== "letters") t.push("type");
    if (S.speakOn) t.push("speak");
    if (item.ig.split(/\s+/).length >= 3 && !item.ig.includes("…")) t.push("bank", "bank");
    return t;
  }
  function buildLesson(sec, les) {
    const items = les.items;
    const repeat = !!S.completed[les.id];
    const q = [];
    if (!repeat) {
      items.forEach((it) => { q.push(mk("intro", it, sec, les)); q.push(mk("mc-ig2en", it, sec, les)); });
      q.push({ type: "match", items: pick(items, Math.min(5, items.length)), lesson: les });
      if (S.speakOn) pick(items, 2).forEach((it) => q.push(mk("speak", it, sec, les)));
      pick(items, Math.ceil(items.length / 2)).forEach((it) => q.push(mk(pick(reviewTypes(it, les), 1)[0], it, sec, les)));
    } else {
      q.push({ type: "match", items: pick(items, Math.min(5, items.length)), lesson: les });
      shuffle(items).concat(pick(items, 3)).slice(0, 11).forEach((it) => q.push(mk(pick(["mc-ig2en", ...reviewTypes(it, les)], 1)[0], it, sec, les)));
    }
    return q;
  }
  function buildReview(n, weakOnly) {
    let pool = learnedItems();
    if (!pool.length) return [];
    const t = today();
    const score = ({ it }) => { const w = S.words[it._key]; if (!w) return -1; return (w.due <= t ? 0 : 10) + w.s + Math.random() * 2; };
    if (weakOnly) pool = pool.filter(({ it }) => (S.words[it._key]?.s ?? 0) <= 2);
    const chosen = pool.slice().sort((a, b) => score(a) - score(b)).slice(0, n);
    while (chosen.length < n && pool.length) chosen.push(pool[Math.floor(Math.random() * pool.length)]);
    return shuffle(chosen).map(({ it, x }) => mk(pick(["mc-ig2en", ...reviewTypes(it, x.les)], 1)[0], it, x.sec, x.les));
  }

  /* ───────────── runner ───────────── */
  let R = null; // current run
  function startRun(opts) {
    if (!opts.queue.length) { toast("Finish a lesson first to unlock this!"); return; }
    R = Object.assign({ i: 0, correct: 0, wrong: 0, answered: 0, retried: new Set(), start: Date.now(), firstTry: {} }, opts);
    R.total = R.queue.length;
    document.body.classList.add("in-lesson");
    renderStep();
  }
  function quitRun() {
    if (R && R.i > 0 && !confirm("Quit? Your progress in this lesson will be lost.")) return;
    R = null; document.body.classList.remove("in-lesson"); go("home");
  }
  function progressPct() { return Math.round((R.i / R.queue.length) * 100); }

  function renderStep() {
    const ex = R.queue[R.i];
    if (!ex) return finishRun();
    R.state = { answered: false };
    const flag = (it) => it && it.unsure ? flagHtml(true) : "";
    const listen = (it) => listenBtn(it);
    const btn = (id, label, extra) => `<button class="mi-btn mi-btn--block text-button${extra ? " " + extra : ""}" id="${id}">${label}</button>`;
    let body = "", foot = btn("check", "Check").replace(">Check", " disabled>Check");

    if (ex.type === "intro") {
      const it = ex.item;
      body = `<div class="mi-card mi-intro">
        <span class="mi-badge mi-badge--new text-label">New ${ex.letters ? "letter" : "word"}</span>
        <div class="mi-intro-word"><span class="mi-ig text-word">${esc(it.ig)}</span>${listen(it)}</div>
        <p class="mi-intro-gloss text-gloss mi-muted">${esc(it.en)}${flag(it)}</p>
        ${it.ex ? `<div class="mi-inset text-gloss">Example: <span class="mi-ig mi-ig-em">${esc(it.ex)}</span></div>` : ""}
        ${it.note ? `<div class="mi-inset text-gloss"><b>Tip:</b> ${esc(it.note)}</div>` : ""}
      </div>`;
      foot = btn("next", "Got it");
    } else if (ex.type === "mc-ig2en" || ex.type === "mc-en2ig") {
      const it = ex.item, toEn = ex.type === "mc-ig2en";
      const field = toEn ? "en" : "ig";
      const opts = shuffle([it, ...distract(it, field, 3)]);
      R.state.correct = it[field];
      const label = toEn ? (ex.letters ? "What sound does this letter make?" : "What does this mean?") : (ex.letters ? "Which letter is this?" : "How do you say this in Igbo?");
      body = `<p class="mi-prompt text-title">${label}</p>
        <div class="mi-prompt-word"><span class="text-word${toEn ? " mi-ig" : ""}">${esc(toEn ? it.ig : it.en)}</span>${toEn ? listen(it) + flag(it) : ""}</div>
        <div class="mi-choices">${opts.map((o, k) => `<button class="mi-choice text-option" data-v="${esc(o[field])}"><span class="mi-choice-key text-caption" aria-hidden="true">${k + 1}</span><span class="mi-choice-text${toEn ? "" : " mi-ig"}">${esc(o[field])}</span></button>`).join("")}</div>`;
    } else if (ex.type === "type") {
      const it = ex.item;
      body = `<p class="mi-prompt text-title">Write this in Igbo</p>
        <div class="mi-prompt-word"><span class="text-word">${esc(it.en)}</span></div>
        <textarea class="mi-input mi-ig text-option" id="answer" placeholder="Type in Igbo…" aria-label="Your answer in Igbo" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea>
        <div class="mi-keys" aria-label="Igbo letters">${["ị", "ọ", "ụ", "ṅ", "Ị", "Ọ", "Ụ", "'"].map((k) => `<button class="mi-key mi-ig text-option" data-k="${k}" aria-label="Insert ${k}">${k}</button>`).join("")}</div>
        <p class="mi-input-hint text-caption mi-muted">Tone marks are optional. Dots under ị ọ ụ do matter!</p>`;
    } else if (ex.type === "bank") {
      const it = ex.item;
      const tokens = it.ig.split(/\s+/);
      R.state.tokens = tokens; R.state.built = [];
      R.state.tiles = shuffle([...tokens, ...bankDecoys(it, tokens, 3)]);
      body = `<p class="mi-prompt text-title">Build this sentence in Igbo</p>
        <div class="mi-prompt-word"><span class="text-word">${esc(it.en)}</span></div>
        <div class="mi-bank-answer mi-ig" id="built" aria-label="Your sentence"></div>
        <div class="mi-bank mi-ig">${R.state.tiles.map((t, k) => `<button class="mi-tile text-option" data-t="${k}">${esc(t)}</button>`).join("")}</div>`;
    } else if (ex.type === "speak") {
      const it = ex.item;
      body = `<p class="mi-prompt text-title">Say this out loud</p>
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
      body = `<p class="mi-prompt text-title">Tap the matching pairs</p>
        <div class="mi-match">
          <div class="mi-choices">${R.state.left.map((it) => `<button class="mi-choice mi-ig text-option" data-side="l" data-key="${esc(it._key)}">${esc(it.ig)}</button>`).join("")}</div>
          <div class="mi-choices">${R.state.right.map((it) => `<button class="mi-choice text-option" data-side="r" data-key="${esc(it._key)}">${esc(ex.lesson.type === "letters" ? it.en.split(" — ")[1] || it.en : it.en)}</button>`).join("")}</div>
        </div>`;
      foot = btn("check", "Continue").replace(">Continue", " disabled>Continue");
    }

    const pct = progressPct();
    app.innerHTML = `<div class="mi-runner">
      <div class="mi-runner-top"><button class="mi-close" id="quit" aria-label="Quit lesson">${ICON.close}</button><div class="mi-pbar" role="progressbar" aria-label="Lesson progress" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct}%"></i></div><span class="mi-count text-caption">${R.i + 1}/${R.queue.length}</span></div>
      <div class="mi-runner-body">${body}</div>
      <div class="mi-sheet" id="foot">${foot}</div>
    </div>`;
    stopAudio();
    bindStep(ex);
    // "Hear it first": auto-play once on new-word cards and speaking prompts.
    if (S.autoAudio && (ex.type === "intro" || ex.type === "speak")) {
      const a = audioFor(ex.item), btn = app.querySelector(".mi-runner-body button[data-audio]");
      if (a) setTimeout(() => { if (R && R.queue[R.i] === ex && !R.state.answered) playClip(a.file, btn); }, durBase());
    }
  }

  function bindStep(ex) {
    document.getElementById("quit").onclick = quitRun;
    const check = document.getElementById("check");
    const next = document.getElementById("next");
    if (next) { next.onclick = () => { R.i++; renderStep(); }; next.focus(); return; }

    if (ex.type.startsWith("mc")) {
      app.querySelectorAll(".mi-choice").forEach((b) => b.onclick = () => {
        if (R.state.answered) return;
        app.querySelectorAll(".mi-choice").forEach((x) => x.classList.remove("is-selected"));
        b.classList.add("is-selected"); R.state.value = b.dataset.v; check.disabled = false;
      });
      check.onclick = () => submit(R.state.value === R.state.correct, ex.item[ex.type === "mc-ig2en" ? "en" : "ig"]);
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
        const answers = [ex.item.ig, ...(ex.item.alt || [])];
        const v = ta.value;
        const strict = answers.some((a) => strictKey(a) === strictKey(v));
        const loose = !strict && answers.some((a) => looseKey(a) === looseKey(v));
        ta.disabled = true;
        ta.classList.add(strict || loose ? "is-correct" : "is-wrong");
        submit(strict || loose, ex.item.ig, loose ? "Almost! Watch the dots: " : null);
      };
    }
    if (ex.type === "bank") {
      const built = document.getElementById("built");
      const redraw = () => {
        built.innerHTML = R.state.built.map((k, n) => `<button class="mi-tile text-option" data-n="${n}">${esc(R.state.tiles[k])}</button>`).join("");
        app.querySelectorAll(".mi-bank .mi-tile").forEach((b) => { const used = R.state.built.includes(+b.dataset.t); b.classList.toggle("is-used", used); b.disabled = used; b.setAttribute("aria-hidden", used ? "true" : "false"); });
        built.querySelectorAll(".mi-tile").forEach((b) => b.onclick = () => { if (R.state.answered) return; R.state.built.splice(+b.dataset.n, 1); redraw(); });
        check.disabled = !R.state.built.length;
      };
      app.querySelectorAll(".mi-bank .mi-tile").forEach((b) => b.onclick = () => { if (R.state.answered || b.classList.contains("is-used")) return; R.state.built.push(+b.dataset.t); redraw(); });
      check.onclick = () => submit(R.state.built.map((k) => R.state.tiles[k]).join(" ") === R.state.tokens.join(" "), ex.item.ig);
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
        grade(pair[0].dataset.key, ok); if (!ok) { grade(pair[1].dataset.key, false); R.state.mistakes++; }
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

  function submit(ok, solution, almost) {
    if (R.state.answered) return;
    R.state.answered = true;
    const ex = R.queue[R.i];
    const firstAttempt = !R.retried.has(R.i);
    R.answered++;
    if (ok) R.correct++; else R.wrong++;
    grade(ex.item._key, ok);
    // Mistakes come back at the end of a lesson (not in the daily test, which is scored once).
    if (!ok && R.mode !== "daily" && firstAttempt) { R.queue.push(ex); R.retried.add(R.queue.length - 1); }
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
    const it = ex.item;
    // Answer line: the Igbo in mi-ig 600 with a replay speaker; when right, "X means Y".
    const sol = showSol ? `Correct answer: <span class="${solution === it.ig ? "mi-ig " : ""}mi-ig-em">${esc(solution)}</span>`
      : `<span class="mi-ig mi-ig-em">${esc(it.ig)}</span> means ${esc(it.en)}`;
    foot.innerHTML = `<p class="mi-sheet-head text-heading"><span class="mi-sheet-mark">${ok ? ICON.check : ICON.close}</span>${esc(msg)}</p>
      <div class="mi-sheet-sol text-body"><span>${sol}</span>${speakerBtn(it, false)}</div>
      ${it.unsure ? `<p class="mi-sheet-note text-caption">${flagHtml(true)} Still being checked with a native speaker.</p>` : ""}
      <button class="mi-btn mi-btn--block text-button${ok ? "" : " mi-btn--danger"}" id="cont">Continue</button>`;
    const cont = document.getElementById("cont");
    cont.focus();
    cont.onclick = () => { R.i++; renderStep(); };
    save();
  }

  function finishRun() {
    const r = R; R = null;
    document.body.classList.remove("in-lesson");
    const scored = r.answered || 1;
    const acc = Math.round((r.correct / scored) * 100);
    let xp = 0, title = "Lesson complete!", extra = "";
    if (r.mode === "lesson") {
      const first = !S.completed[r.lessonId];
      xp = first ? 15 : 8;
      const prev = S.completed[r.lessonId] || { times: 0, best: 0 };
      S.completed[r.lessonId] = { times: prev.times + 1, best: Math.max(prev.best, acc), date: today() };
      if (first) extra = "New words added to your daily test.";
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
    if (r.mode === "lesson" && acc < 90) title = acc >= 60 ? "Good effort!" : "Keep going!";
    const cheer = acc >= 90 ? "Ezigbo ọrụ — great work." : acc >= 60 ? "Jisie ike — keep it up." : "Mistakes come back for practice. Ị ga-eme ya!";
    // Key-word recap: the lesson's items, or every word met in a daily/practice round.
    const seen = new Set(), words = [];
    const les = r.mode === "lesson" ? findLesson(r.lessonId) : null;
    (les ? les.les.items : r.queue.flatMap((q) => q.item ? [q.item] : (q.items || []))).forEach((it) => { if (!seen.has(it._key)) { seen.add(it._key); words.push(it); } });
    const streak = liveStreak();
    app.innerHTML = `<div class="mi-results">
      <span class="mi-results-mark" aria-hidden="true">${ICON.trophy}</span>
      <h1 class="text-title">${title}</h1>
      <p class="text-gloss mi-muted">${esc(cheer)}${extra ? " " + esc(extra) : ""}</p>
      <div class="mi-stat-tiles">
        <div class="mi-stat-tile mi-stat-tile--xp"><b class="text-heading">+${xp}</b><span class="text-caption mi-muted">XP</span></div>
        <div class="mi-stat-tile mi-stat-tile--acc"><b class="text-heading">${acc}%</b><span class="text-caption mi-muted">Accuracy</span></div>
        <div class="mi-stat-tile"><b class="text-heading">${time}</b><span class="text-caption mi-muted">Time</span></div>
      </div>
      <p class="mi-stat text-option">${ICON.flame}${streak}-day streak</p>
      ${weekRow()}
      <button class="mi-btn mi-btn--block text-button" id="done">Continue</button>
      ${words.length ? `<div class="mi-card mi-card--rows"><h2 class="text-heading">Words from this ${r.mode === "lesson" ? "lesson" : "round"}</h2>${words.map((it) => wordRow(it, it.en)).join("")}</div>` : ""}
    </div>`;
    document.getElementById("done").focus();
    document.getElementById("done").onclick = () => go(r.mode === "daily" ? "daily" : "home");
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
    const renderSec = (sec, si) => {
      const done = sec.lessons.filter((l) => S.completed[l.id]).length;
      const tok = sec.id === "intro" ? "introductions" : sec.id; // section id → section-* colour token
      if (si) html += `<div class="mi-uli" aria-hidden="true"></div>`;
      html += `<section class="mi-section" style="--section: var(--section-${tok}, ${esc(sec.color)})"><div class="mi-section-head">
        <h2 class="text-heading"><span aria-hidden="true">${icons[sec.id] || "📘"}</span> ${esc(sec.title)}</h2><p class="mi-ig text-gloss">${esc(sec.igTitle)}</p>
        <p class="text-gloss">${esc(sec.description)}</p>
        <div class="mi-section-meta"><div class="mi-pbar mi-pbar--section" aria-hidden="true"><i style="width:${(done / sec.lessons.length) * 100}%"></i></div><span class="text-caption">${done}/${sec.lessons.length} lessons</span></div>
      </div><div class="mi-path">`;
      sec.lessons.forEach((les, li) => {
        const unlocked = lessonUnlocked(sec, li);
        const isDone = !!S.completed[les.id];
        let cls = isDone ? "is-done" : unlocked ? "" : "is-locked";
        if (unlocked && !isDone && !foundCurrent) { cls += " is-current"; foundCurrent = true; }
        const state = isDone ? ", done" : unlocked ? (cls.includes("current") ? ", up next" : "") : ", locked";
        html += `<button class="mi-node ${cls}" data-lesson="${les.id}" aria-label="${esc(les.title)}${state}" ${unlocked ? "" : "aria-disabled='true'"}${cls.includes("current") ? " aria-current='step'" : ""}>
          <span class="mi-node-bubble" aria-hidden="true">${unlocked ? (icons[sec.id] || "📘") : ICON.lock}</span>
          <span class="mi-node-label text-caption" aria-hidden="true">${esc(les.title)}</span></button>`;
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
      secs.forEach((s) => renderSec(s, si++));
    });
    const rest = C.sections.filter((s) => !placed.has(s.id));
    if (rest.length) {
      if (stages.length) html += `<div class="mi-stage"><h2 class="mi-stage-title text-title">More topics</h2></div>`;
      rest.forEach((s) => renderSec(s, si++));
    }
    const empty = stages.filter((st) => !(st.units || []).some((id) => secById[id]));
    if (empty.length) {
      const n = empty[0];
      html += `<div class="mi-card mi-stage-next"><h2 class="text-heading"><span class="text-label">Coming next</span> Section ${n.number} · ${esc(n.cefr)} — ${esc(n.title)}</h2>
        <p class="text-gloss">${esc(n.focus)} New units arrive with the morning updates.</p>${empty.length > 1 ? `<p class="text-caption">Then Sections ${empty[1].number}–${empty[empty.length - 1].number}: ${esc(empty[1].cefr)}–${esc(empty[empty.length - 1].cefr)}</p>` : ""}</div>`;
    }
    html += `<p class="text-caption mi-muted mi-center mi-mt-8">Tip: every section's first lesson is open — jump into any topic you like.</p>`;
    app.innerHTML = html;

    const seen = document.getElementById("seen");
    if (seen) seen.onclick = () => { S.seenVersion = C.version; save(); viewHome(); };
    const dg = document.getElementById("daily-go");
    if (dg) dg.onclick = startDaily;
    app.querySelectorAll(".mi-node").forEach((b) => b.onclick = () => {
      const x = findLesson(b.dataset.lesson);
      if (!lessonUnlocked(x.sec, x.li)) { toast("Finish the lesson before this one to unlock it"); return; }
      lessonIntro(x);
    });
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
      <button class="mi-btn mi-btn--block text-button" id="start">${rec ? "Practise again" : "Start lesson"}</button></div>
      <div class="mi-card mi-card--rows"><h2 class="text-heading">In this lesson</h2>${les.items.map((it) => wordRow(it, it.en)).join("")}</div>`;
    document.getElementById("back").onclick = () => go("home");
    document.getElementById("start").onclick = () => startRun({ mode: "lesson", lessonId: les.id, queue: buildLesson(sec, les) });
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
    const rows = [];
    C.sections.forEach((sec) => sec.lessons.forEach((les) => les.items.forEach((it) => rows.push({ it, sec, les }))));
    const filtered = rows.filter(({ it, les }) => {
      if (wordFilter === "learned" && !S.completed[les.id]) return false;
      if (wordFilter === "weak" && !(S.completed[les.id] && (S.words[it._key]?.s ?? 0) <= 2)) return false;
      if (wordFilter === "unsure" && !it.unsure) return false;
      if (wordQuery) { const q = looseKey(wordQuery); return looseKey(it.ig).includes(q) || it.en.toLowerCase().includes(wordQuery.toLowerCase()); }
      return true;
    });
    const nLearned = rows.filter(({ les }) => S.completed[les.id]).length;
    const nWeak = rows.filter(({ it, les }) => S.completed[les.id] && (S.words[it._key]?.s ?? 0) <= 2).length;
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
      try { const data = JSON.parse(await file.files[0].text()); S = Object.assign(defaults(), data); save(); refreshStats(); toast("Progress imported"); viewMore(); }
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

  /* ───────────── router ───────────── */
  const views = { home: viewHome, daily: viewDaily, words: viewWords, more: viewMore };
  function go(name) {
    if (R) return;
    location.hash = name;
    document.querySelectorAll(".mi-tab").forEach((b) => { if (b.dataset.nav === name) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current"); });
    (views[name] || viewHome)();
    refreshStats();
    window.scrollTo(0, 0);
  }
  document.querySelectorAll("[data-nav]").forEach((b) => b.onclick = () => go(b.dataset.nav));
  document.addEventListener("keydown", (e) => {
    if (!R) return;
    if (e.key === "Escape") return quitRun();
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "textarea" || tag === "input") return;
    if (/^[1-4]$/.test(e.key)) { const b = app.querySelectorAll(".mi-choices .mi-choice")[+e.key - 1]; if (b && !R.queue[R.i].type.startsWith("match")) b.click(); }
    if (e.key === "Enter") { const b = document.getElementById("cont") || document.getElementById("next") || document.getElementById("check"); if (b && !b.disabled && e.target !== b) { e.preventDefault(); b.click(); } }
  });
  go((location.hash || "#home").slice(1));
})();
