# Mmụta Igbo: lesson structure and layout spec (Duolingo method, our look)

Status: DRAFT for the user, 2026-11-14. Scope: structure and layout only. Igbo content corrections come later from the parent, so nothing here may depend on content being final.
Sources: `sources/web-pages/duolingo-pt/notes.md` (playthrough of Portuguese Section 1, still being appended), `design-research.md`, `REVIEW-2026-11-13.md`, and our code (`js/app.js`, `data/curriculum.js`, `css/style.css`).
We copy the METHOD (path rhythm, levels, inline word introduction, inductive grammar, guidebook, recycling). We do NOT copy look, branding, mascot, gems, leagues, or content.

Naming used below: data `stages` = user-facing **Section**; data `sections` = **Unit**; `lessons` = **skill node** (the thing the learner taps). Keep the data field names; change only the UI wording and add new optional fields.

---

## 1. Side by side

| Area | Duolingo (observed) | Mmụta Igbo now | Gap |
|---|---|---|---|
| Path layout | One vertical path. Section header, Unit banner (title + Guidebook button), nodes in a zig-zag. Owl on current node, "START" bubble. | Section header (stage), per-unit coloured header with progress bar, straight column of round nodes (`.mi-node`), one per lesson. | No Guidebook button; no node types; no zig-zag; no per-node progress ring. |
| Units | 6 in Section 1, each themed ("Order at a cafe") with 5 key phrases + tips. | 55 units across Sections 1-6; each has title, description, 1-6 lessons. | Maps well. Unit goal sentence missing. |
| Node types | Lesson (star, 5 levels), Story, Radio (audio only), Chest, Practice, Unit Review. Fixed rhythm, strictly sequential. | One type: lesson. Sequential inside a unit (`lessonUnlocked`); first lesson of each unit always open. | No story, no listening-only, no practice node, no unit review. |
| Levels | Each skill node = 5 levels (same star, ring fills). L1-4 +10 XP; L5 = recap challenge +20 XP. | One lesson = one pass of up to 15 questions (`CAP = 15`) plus intro cards; "done" is binary (`S.completed[id]`). | No levels, no recap level, nothing gets harder over time (review problem #8). |
| Lesson length | ~12 normal + 3 HARD = 15-16 items, 4-6 min. | 13-26 questions, median 21, for 4-9 items (review problem #2). | Too long and repetitive; no easy-to-hard shape. |
| Exercise types | Translate (bank both directions), typed translate, select meaning, match pairs, listen-and-tap, speak, complete-the-chat, select-missing-word, fill-in-blank, type-missing-word. | `intro`, `mc-ig2en`, `mc-en2ig`, `bank`, `type`, `match`, `speak`; letters-only `mc-lhear`/`mc-lword`. | Missing: listen-and-tap, fill-in-blank, NEW PATTERN, dialogue reply, listening-only mc, true/false. |
| Instruction wording | Short imperatives per type ("Tap what you hear", "Select the matching pairs", "Complete the chat"). | Question-style prompts ("What does this mean?", "How do you say this in Igbo?", "Write this in Igbo"). | Inconsistent; replace with a fixed catalogue (2.4). |
| New-word introduction | Inline: the new word is a normal translate item with a NEW WORD badge and the word highlighted. Never a teaching screen. 3-6 reps per word per level. | Separate `intro` card per unmet word ("New word", Got it), then questions. 4-9 intro cards eat the lesson. | Biggest structural difference. See 2.5. |
| Grammar | Inductive. NEW PATTERN: two highlighted examples, then a third with a blank and 2 tiles. Rules only in the Guidebook. | Per-lesson `tip` shown on the lesson page and on wrong answers. No pattern exercise. | No pattern exercise; tips are not collected anywhere permanent. |
| Guidebook | Per unit: exactly 5 key phrases (with English) + 1-4 tips with a small table and 1-2 examples. | None. `tip` per lesson, `note` and `ex` per item. | Add per-unit Guidebook, auto-built from existing fields (2.2). |
| Mistakes | Red "Correct solution" panel. Same item re-asked reworded later in the lesson; "Let's review the exercise you missed!" with PREVIOUS MISTAKE at the end; missed items injected into the next level-5 recap. | Wrong item is pushed once to the end of the queue (`R.queue.push`); "Not quite." + answer + tip. Results list missed words with "Practise these". | Missing: reworded re-ask, PREVIOUS MISTAKE label, carry into next level/practice. |
| Hearts | 5 hearts, lost on wrong answers; "can't listen/speak now" skips without penalty. | None. Speak items can be switched off in settings. | Recommend no hearts (2.6). Keep the skip buttons. |
| Recap / review | Level-5 recap per node; Practice nodes (no new words); Unit Review trophy; spaced repetition behind the scenes. | Daily test (`buildReview`, SRS via `S.words[key].due/s`, `SRS_DAYS`) and repeat-lesson mode (11 questions). | SRS is good. No path-level practice or review nodes. |
| Stories | Tap-to-reveal dialogue, English narrator lines, audio per line, 5-6 questions between lines. No hearts lost. | None. A few dialogue-like lessons ("Haggling dialogue", a journey conversation) are plain item lists. | Add a Dialogue node type (2.7). |
| Listening | "Tap what you hear" with turtle slow button; audio-only Radio; can't-listen-now skip. | Audio on 63% of items (55% in Sections 1 and 5). `mc-lhear` is letters only. No audio-only question for words. | Add listen-and-tap and audio-only mc, gated on audio existing (2.4). |
| Results screens | Per level: praise + XP; "N in a row" interstitials; "Perfect lesson!" XP + accuracy; streak screen. | One results screen: XP, accuracy, time, streak, week row, next lesson unlocked, missed words, all words. | Already richer on word recap. Add level-ring advance and unit-complete moment. |
| Guidebook access | Button on the unit banner (and lesson start popup). | Tip visible only after tapping a lesson (`lessonIntro`) and on wrong answers. | Guidebook button on unit banner and node sheet. |

What we already do better and must not lose: dotted-vowel typing keys, "X means Y" feedback with replay speaker, word recap on results, SRS daily test, the ⚑ flags.

---

## 2. Proposed structure

### 2.1 Path: Section -> Unit -> nodes

Section header ("Section 3 · A1 · Basic conversations") -> Unit banner -> nodes. Learners see only "Section" and "Unit".

**Node types** (each its own icon and shape on the path):

| Node | Icon | What it is | Levels | Items per level |
|---|---|---|---|---|
| Skill (lesson) | star | New words/patterns. The existing lesson. | 3 (2 for lessons of 4 items or fewer; see 2.3) | 12 + up to 3 HARD |
| Dialogue | speech bubbles | Mini conversation, tap to reveal, 3-5 questions (2.7). | 1 | 6-10 lines + 4 questions |
| Practice | dumbbell | No new words. Mixed recap of the unit so far, weakest first (reuses `buildReview` scoped to the unit). | 1, repeatable | 12 |
| Unit review | trophy | Whole-unit check, typed and listening heavy, pass mark 70%. | 1 | 15 |

We do not copy Duolingo's Radio or chests. A Dialogue can later get an "audio only" mode (open question 5).

**Fixed rhythm per unit**, by number of skill lessons N (every unit has at least a Skill and a Review):
- N = 1: Skill, Practice, Review.
- N = 2: Skill, Skill, Practice, Review.
- N = 3-4: Skill, Skill, (Dialogue, if the unit has one), Skill, Practice, (Skill), Review.
- N >= 5: as above with a second Practice mid-unit.
Rule of thumb: a Practice after every two Skills; a Dialogue right after the skill that teaches its sentences; Review last. Nodes unlock sequentially inside a unit; the first node of every unit stays open (keeps the "jump into any topic" tip). Unit and Section order stay as in `stages`.

### 2.2 Unit banner and Guidebook

Unit banner (above the nodes): unit colour band, title, `igTitle`, one-line goal, "node 3 of 7", and a **Guidebook** button (book icon, 44 px minimum).

Guidebook screen (new view, `go("guide", unitId)`):
1. **Key phrases**: exactly 5, each Igbo + replay speaker + English. Auto-pick: one per lesson spread across the unit, prefer items with audio and multi-word sentences, skip `unsure` items unless nothing else exists (⚑ shown if used). Overridable.
2. **Tips**: 1-3. Auto-built from each lesson's `tip` (first sentences via `shortTip`) plus any item `note`. Overridable.
3. Optional small table (singular/plural, tense forms): hand-written only.
4. Link "Words in this unit" (the existing `wordRow` list moves here from `lessonIntro`).

Data (all optional; a unit works without it), added to a unit (data `section`):
```js
guide: {
  goal: "You can greet people and ask how they are.",       // banner line
  phrases: ["greet-hello:0", "greet-welcome:2"],            // lessonId:itemIndex, max 5, overrides auto-pick
  tips: [{ title: "Ndewo vs Kedụ", body: "...", table: [["Ndewo","respectful"],["Kedụ","casual"]], ex: ["Ndewo!","Kedụ?"] }]
}
```
The Guidebook is also reachable from the node sheet ("Guidebook" secondary button). Parent corrections later touch only item and `guide` text, not code.

### 2.3 Mapping existing lessons onto skill nodes and levels (no progress lost)

Principle: **the lesson id is the node id**. `S.completed[lessonId]` keeps meaning "node fully complete". Per-level progress is added next to it, never replacing it.

Data model (no curriculum.js edit needed for the base version; levels are generated from `les.items`):
```js
S.levels = { "<lessonId>": { done: 0..L, best: {1:95,2:80}, carry: ["<itemKey>"], last: "2026-11-14" } }  // new, optional
S.completed["<lessonId>"]   // unchanged shape {times,best,date}; set when done === L
```
- `L` (levels per node): 3 by default; 2 if the lesson has 4 items or fewer; `les.levels` may override. (Duolingo uses 5; see open question 2.)
- Level generation is a pure function `buildLevel(sec, les, n)` replacing the body of `buildLesson`. Items are split so a level introduces 3-5 new words (Duolingo: 5 to 7 at most): lessons of up to 5 items introduce all in L1; larger lessons introduce the first half in L1 and the rest in L2.
  - **L1 "Meet"** (recognition): each new item first appears as an inline NEW WORD exercise (2.5), then mc, word bank, one match, up to 2 listening if audio exists. Ends with 2 HARD items (English -> Igbo bank).
  - **L2 "Build"** (phrases and sentences): bank, fill-in-blank, NEW PATTERN if the lesson defines one, listen-and-tap, one typed item, then 2 HARD typed.
  - **L3 "Recap"** (last level): all items, no NEW WORD badges, mostly production (type, bank, listening), earlier mistakes injected as PREVIOUS MISTAKE, 3 HARD.
  - Each level: 12 normal + up to 3 HARD = 15 maximum (today's `CAP`), 4-6 minutes.
- Completion: finishing level `done+1` increments `S.levels[id].done`. On the last level write `S.completed[id]` exactly as `finishRun` does now, so the Words tab, daily test (`learnedItems()`), SRS and "learned" filters keep working untouched.
- **Migration** (once, in the state loader, idempotent): for every lesson id where `S.completed[id]` is set, set `S.levels[id] = { done: L, best: {}, migrated: true }`. Never delete or rewrite `S.completed`. Retired ids keep counting (already true). Export/import: `S.levels` is just another key; old exports import fine (missing = 0 levels done). Learners who only had a lesson partly done lose nothing (there was no partial state).
- Optional: words join the daily test after Level 1 instead of after the whole node (`learnedItems()` reads `S.levels[id].done >= 1 || S.completed[id]`).
- Replays: tapping a completed node offers "Practise" (smaller XP), a recap-style level (existing `repeat` branch). It does not reset `S.levels`.
- `lessonMode: "read"` lessons: one level, existing builder branch. `type: "letters"` lessons stay in the Letters tab and are not changed.

### 2.4 Exercise catalogue (English UI, fixed instruction text)

"Have" = exists in `renderStep`; "New" = to build. Audio-required types are scheduled only for items where `audioFor(it)` exists (37% of items have none, so never show a silent speaker).

| Type id | Instruction text (exact) | Have/New | Audio | Appears | Rules |
|---|---|---|---|---|---|
| `new-word` (inline) | badge "New word" + "What does this mean?" | New (replaces `intro`) | autoplay if present | L1, L2 | 3 options; learner may tap "Show me" to reveal (counts as seen, not an error). Igbo in `mi-ig` with speaker. |
| `mc-ig2en` | "What does this mean?" | Have | optional | all | 3-4 options; no two options with the same meaning (`enOverlap`). |
| `mc-en2ig` | "How do you say this in Igbo?" | Have | optional | L2, L3 | as above. |
| `bank` Igbo -> English | "Tap what this means" | New direction | optional | L1, L2 | 3-6 English tiles. |
| `bank` English -> Igbo | "Translate this sentence" | Have | optional | L1-L3, HARD | 3-8 tiles including 1-2 decoys (cap 8; longer sentences become mc only). All tiles lower-case (removes the capital giveaway), no punctuation tiles, no dotted-twin decoys (i/ị) outside typing, accept `alt` orders. |
| `type` | "Write this in Igbo" | Have | no | L2 (1), L3 (2-3), HARD | Answer up to 6 words. Dotted-vowel key row stays. Accept all `alt` and every item sharing the English meaning (review fix #1). Dots/tones ignored = "almost". |
| `type-blank` | "Type the missing word" | New | optional | L2, L3, Practice | English prompt + Igbo sentence with one blank; one-word answer; key row shown. |
| `fill-blank` | "Fill in the blank" | New | optional | L2, Practice | Sentence with a blank, 2-4 options, decoys from the same unit and word class (`kindOf`). |
| `pattern` | "Select the missing word" + NEW PATTERN badge | New | optional | L2 only, only where the lesson defines `pattern` (2.8) | Two highlighted example sentences, then a third with a blank + 2 tiles. At most 2 per level. |
| `listen-tap` | "Tap what you hear" | New | required | L2 (1), L3 (2) | Audio only, no text prompt; 4-8 Igbo tiles, 2 decoys; slow replay if a slow clip exists, else a normal replay; after the answer show "Meaning: ...". Button "Can't listen now" swaps the item for a text `bank`, no penalty. |
| `listen-mc` | "What did you hear?" | New | required | L1 (1), L2 | Audio only, 3 English options. Replaces `mc-lhear` for words (letters keep theirs). |
| `match` | "Select the matching pairs" | Have | optional | L1 (1), L2 (1), Practice | 3-5 pairs; no two with the same English (`matchSet`). |
| `speak` | "Speak this sentence" | Have | required | L2, L3, max 1 per level | Keep the 25% rule and the "Can't speak now" skip. Off when `S.speakOn` is false. |
| `reply` | "Complete the chat" | New | optional | Dialogue node, L3, Practice | Speaker line + 2 reply choices (one clearly unrelated). Built from dialogue lines (2.7). |
| `tf` | "True or false?" | New | no | Dialogue node | English statement about the dialogue. |
| `next-line` | "What comes next?" | New | optional | Dialogue node | 3 options. |

"Select the correct image" and any picture-based type are NOT possible: the app has no images and we have no illustration budget. Do not plan for them.

Wording rules: imperative, 5 words or fewer, sentence case. Keep our rotating Igbo praise ("Ọ dị mma! (Good!)"). Wrong answer: "Correct answer: X", underline the differing word when only one differs. Counter bug (review #7): show "n of N" with fixed N and a separate "+ review" count.

Scheduling inside a level:
- Never more than 2 consecutive items of the same type; never the same item twice in a row.
- Order easy to hard: recognition (mc, match, listen-mc) -> bank -> fill, pattern, listen-tap -> typed. Then a one-line card "Let's make this a bit harder" and the HARD items.
- Each new word gets 3 or more appearances in its level: NEW WORD -> bank -> match -> listening -> HARD.

### 2.5 New words: inline badge or intro cards (recommendation: inline)

Duolingo's normal exercises have no pictures either; they teach by highlight plus repetition. We have no images, so the first contact must be audio plus text. Options: (a) keep `intro` cards (explicit, but 4-9 extra screens push lessons past 20 questions); (b) inline NEW WORD exercise.
**Recommendation: (b).** The first exposure of each new item is a NEW WORD multiple choice: Igbo + speaker autoplay, 3 options, plus "Show me" that reveals the answer without counting an error. After answering, the feedback sheet shows `ex` and `note` (the content of today's intro inset). This removes the "Got it" screens, shortens lessons, and still gives a zero-risk first contact. Keep the old `intro` card for letters lessons and `lessonMode: "read"`. A single constant (`INLINE_NEW`) can switch back; both paths stay in code.

### 2.6 Mistakes, hearts, results

- Wrong answer: red sheet "Correct answer: ..." + item `note` and `ex`, as now.
- Recycling (new): (1) re-ask the item later in the same level as a DIFFERENT type, 4-6 items later; (2) at the end a card "Let's review what you missed!" then the failed exercises with a PREVIOUS MISTAKE badge (max 3); (3) missed keys saved to `S.levels[id].carry` and injected as PREVIOUS MISTAKE into the node's last level and the next Practice node; (4) `grade()` (SRS) still marks them weak, unchanged.
- **Hearts: recommend NO hearts.** They are Duolingo's monetisation lever and would punish learners hitting ⚑ items; our review's top complaint is unfairness. The existing "mistakes come back" loop does the teaching job. Optional later: a gentle "3 misses, take a quick review first" prompt, off by default.
- Skips: "Can't listen now" and "Can't speak now" swap the item for a text version, no penalty.
- Results screen (per level): praise + XP (+10 per level, +20 last level) · accuracy · time · "Level 2 of 3" ring advancing · streak and week row · "Words to review" (existing) · "Next node unlocked" · if last level, a unit/node complete line. Practice and Review end the same way. Keep trophy disc and stat tiles. Skip "N in a row" interstitials (noise); a small in-header streak counter is enough.

### 2.7 Dialogues

- Node "Dialogue": 6-10 lines, tap to reveal each next bubble (A left, B right), Igbo line with speaker, English shown on tap, narrator lines in muted English. Title card with the unit theme. After lines 3, 5 and 7: one question each (`tf`, `next-line`, `reply`), then a final `match` of 4 pairs. No penalty; +15 XP.
- Data, new optional unit field:
```js
dialogues: [{ id: "greet-d1", title: "Meeting someone", after: "greet-welcome",
  lines: [{ who: "A", ig: "Ndewo!", en: "Hello!" }, { who: "B", ig: "Ndewo! Kedụ?", en: "Hello! How are you?" }, { narr: "They shake hands." }] }]
```
  `after` = the lesson id it follows; it unlocks when that lesson is complete and records `S.completed["greet-d1"]`.
- Building from existing material: many units already hold question/answer sentence pairs (e.g. "Haggling dialogue", the journey conversation, `q-words`, `eat-order`). Step 1: a tool script drafts candidates by pairing consecutive items in a lesson where one English ends in "?"; step 2: the user or parent picks and orders them. Every dialogue line must use only words already taught (reuse the review's "word taught later" check). Lines without audio are marked "text only".
- Placement: after the skill node that teaches its sentences; start with at most 1 per unit, only where 6 or more usable lines exist.

### 2.8 Grammar patterns

Optional lesson field: `pattern: { examples: ["Ana m aga.", "Ana m eri nri."], blank: "Ana m ...", options: ["Ana m", "Ị na"] }`. Absent = no pattern exercise. We do NOT auto-detect patterns (grammar correctness waits for the parent). Pattern text also feeds the Guidebook tip. Candidate lessons (the content team decides): I am / you are (Section 1), "Ana m ..." progressive, clock, past, future.

### 2.9 Layout (keep our tokens: `--section-*`, `--space-*`, `--radius-*`, `--tap-min`, `.text-*`, `.mi-*`)

Home path:
- Section header: current `.mi-stage` plus a thin progress bar and "x of y nodes".
- Unit banner `.mi-unit-banner`: full-width rounded band using `--section: var(--section-<id>)` and `--on-section` text; title, igTitle, goal, progress, right-aligned Guidebook button (`.mi-btn--small`, book icon). Replaces `.mi-section-head`.
- Nodes: round buttons 64-72 px in a gentle zig-zag (CSS only: `nth-child` sets a `--shift` custom property cycling left/centre/right/centre), with a connector line behind. Shapes: skill = circle + star; dialogue = rounded square + bubbles; practice = dashed circle + dumbbell; unit review = wider trophy shape. Label under each (`.text-caption`, 2 lines max).
- States: locked (grey, lock icon), unlocked, current (pulse + "Start" bubble, keep `aria-current="step"`), done (check, unit-colour fill). **Level ring** around skill nodes: L segments (SVG or conic-gradient), completed segments filled.
- Tapping a node opens a bottom sheet (not a new page): title, "Level 2 of 3", item count, XP, [Start] and [Guidebook]. This replaces the full-page `lessonIntro`.
- No chests or gems. The end of a unit gets a small "Unit complete" banner instead.

Lesson screen: same skeleton (X, progress bar, counter, content, sticky feedback sheet). Changes: badges NEW WORD / NEW PATTERN / HARD / PREVIOUS MISTAKE (reuse `.mi-badge`, token colours), the instruction line as `.text-label` above the prompt, a "Level 2 of 3" pip in the header, and a one-line gear-change card before HARD. Dark mode and the `in-lesson` body class unchanged.

---

## 3. Implementation plan (work packages)

Each package leaves the app working. Baseline check after every package: open app, finish one lesson, run the daily test, export and re-import progress.

| WP | Title | Files | Effort | Risk | Parallel? |
|---|---|---|---|---|---|
| A | State + migration: `S.levels`, `levelsFor(lesson)`, `learnedItems()` reads it, idempotent migration, export/import | `js/app.js` (state block near `defaults()`, `learnedItems`) | S | Low; must never touch `S.completed` | First; B, F, H depend on it |
| B | Level builder `buildLevel(sec, les, n)` (L1/L2/L3 ladders, HARD, inline NEW WORD flag, cap 15, max 2 same type in a row); keep old `buildLesson` behind a flag until verified | `js/app.js` (build block, `buildLesson`) | L | Medium: affects every lesson | After A |
| C | Exercise catalogue part 1: instruction wording, tile rules (3-8, lower-case, no dotted decoys), typing <= 6 words, accept same-English answers, counter fix, inline new-word card | `js/app.js` (`renderStep`, `bindStep`, `distract`, `bankDecoys`), `css/style.css` (badges) | M | Medium | Parallel with D and E after A |
| D | Path layout: unit banner, node shapes and zig-zag, level ring, node bottom sheet, states | `js/app.js` (`viewHome`, `lessonIntro`), `css/style.css`, `index.html` only if a sheet container is needed | M | Low-Medium (visual; test 375 px and dark) | Parallel with C, E, F (stub ring data if A not merged) |
| E | Guidebook: optional `guide` data, auto-builder, `viewGuide`, route in `go()`, buttons on banner and sheet | `js/app.js` (new view), `data/curriculum.js` (header comment + `guide` demo on 1-2 units), `css/style.css` | M | Low | Parallel with C, D, F |
| F | Mistakes + results: PREVIOUS MISTAKE flow, `S.levels[id].carry`, level-aware results, unit-complete line | `js/app.js` (`submit`, `finishRun`) | M | Medium (touches SRS `grade`; keep that call unchanged) | After A and B; parallel with D, E |
| G | New exercise types: `fill-blank`, `type-blank`, `listen-tap`, `listen-mc`, `bank` IG->EN, `pattern` (+ data field), `reply`/`tf`/`next-line` | `js/app.js` (`renderStep`, `bindStep`), `css/style.css` | L | Medium; audio-gated | After B and C; sub-types independent |
| H | Practice and Unit-review nodes plus the rhythm generator (2.1); `S.completed` keys `pr:<unit>:<n>` and `ur:<unit>`; unit-scoped `buildReview` | `js/app.js` (`viewHome`, `buildReview`), `css/style.css` | M | Medium: lesson counters ("done/total") must handle the new nodes | After A and D |
| I | Dialogue node: `dialogues` data field, reveal view, questions, 1-2 sample dialogues from existing items | `js/app.js`, `data/curriculum.js`, `css/style.css` | M | Low-Medium; needs content picks | After G and H |
| J | QA + docs: rerun the question audit, word-bank sizes, level counts, 375 px screenshots (5 max), changelog entry, README, service-worker cache bump | `tools/*`, `README.md`, `data/curriculum.js` changelog, `sw.js` | S-M | Low | Last |

Parallel groups after A: {C, D, E} use different functions or files and can run concurrently; F after B; G after B+C; H after D. `js/app.js` is a single shared file, so concurrent agents need function-level ownership and one integrator merge (or serialise C -> G).

Test checks, every package:
1. Fresh profile and a profile with 30 lessons completed both load; completed lessons still show done and their words stay in the daily test.
2. A 4-item lesson, a 9-item lesson and a `lessonMode: "read"` lesson each play through all levels.
3. Rerun the audit: no word bank over 8 tiles, no typed answer over 6 words, no two options with the same meaning.
4. Service-worker cache version bumped so the installed PWA updates.
5. 375 px and dark-mode screenshots of home, lesson, results.

---

## 4. Open questions for the user

1. **Hearts**: none (recommended), or an optional soft limit?
2. **Levels per node**: 3 (recommended; our lessons have only 4-9 items) or Duolingo's 5?
3. **New words**: inline NEW WORD exercise (recommended) or keep the intro cards?
4. **Practice and Unit Review**: optional (recommended; only Skill and Dialogue gate the unit) or mandatory to unlock the next unit?
5. **Audio gaps**: listening types run only on items with audio (63% overall, 55% in Sections 1 and 5). Accept light listening there for now, or record Section 1 first?

---
## Decisions (user, 14 Nov 2026)
- **Hearts: none.** Mistakes are recycled (re-asked as a different type → "Previous mistake" at the end → carried into the next level and Practice) but never block.
- **Levels: 3 per skill now (L1 Meet, L2 Build, L3 Recap), but the level system must be data-driven so it can switch to 5 later**: a single setting (e.g. `CURRICULUM.levelsPerSkill = 3`) plus a level template table that already defines all 5 Duolingo-style levels (L1 Meet, L2 Practise, L3 Build, L4 Produce/HARD, L5 Recap); with 3, use Meet / Build / Recap. Stored progress (`S.levels`) must survive a later change from 3 to 5 (e.g. store per-level results by level key, and treat "all levels done" relative to the current setting).
- **New words: inline NEW WORD** exercises (badge + audio + "Show me" hint) — no separate intro cards.
- **Practice and Unit Review nodes: optional** — shown on the path, give XP/strength, never gate the next unit.

## Content files: guides and dialogues (added 14 Nov 2026)

Two optional data files, built only from existing `ig`/`en` items in `data/curriculum.js` (no new Igbo). The app must work without them; check `window.GUIDES` / `window.DIALOGUES` exist before use.

Load with plain script tags AFTER `data/curriculum.js` (and add both to the `sw.js` cache list): `<script src="data/guides.js"></script>` and `<script src="data/dialogues.js"></script>`.

```js
window.GUIDES = { <unitId>: { goal: "one-line can-do goal",
  keyPhrases: [ { ig, en, note?, flag? } x5 ],            // flag:true = item is unsure (show the flag)
  tips: [ { title, body, ex: [ { ig, en } ] } x1-4 ] } };  // ex = 1-3 existing items
window.DIALOGUES = { <unitId>: [ { id: "dlg-<unitId>-1", title, setting, roles: { A, B },  // role names for "who" questions
  lines: [ { who: "A"|"B", ig, en } x4-7 ],
  questions: [ { type: "meaning"|"next-line"|"who", prompt, answer, options: [..] } x3-4 ],  // answer is one of options
  flag?: true } ] };                                      // flag:true = at least one line uses an unsure item
```
Keys are `unitId` = data `section.id` (non-reference units only). Lines use exact `ig` strings, so audio (`AUDIO[ig]`) and word progress link as usual. "meaning" and "who" options are already shuffled; "next-line" answers are Igbo lines. Distractors are auto-picked from nearby units, so a parent review should glance at the question options.

Counts: GUIDES 60 units (all non-reference units, 5 key phrases each, 33 key phrases flagged unsure). DIALOGUES 44 units, 44 dialogues, 31 flagged. No dialogue for: colours, home, time, body, past, people, nature, igboland, cooking, ceremonies, beliefs, ilu, tech, media, polite, fabrics (too few connected sentences). Files are generated by a script from curated line lists; edit the output files directly for parent corrections.

---
## Implemented (A, B, C, F + inline NEW WORD), 14 Nov 2026
- **State**: `S.levels[lessonId] = { r: { <levelKey>: {acc,best,n,date} }, carry: [itemKey], migrated? }`. Keyed by level KEY (meet/practise/build/produce/recap), so progress survives 3 -> 5. `migrateState()` (idempotent, also after import) gives every completed lesson all five keys; `S.completed` untouched and still gates unlocking. Words join the daily test per level (`learnedOf`).
- **Switch to 5 levels**: `levelsPerSkill: 5` in `data/curriculum.js` (currently 3). Tables `LEVEL_DEFS` / `LEVEL_SETS` in `js/app.js`; recipes per key in `buildLevel`. A completed lesson with new unfinished keys stays complete but shows e.g. 3/5 and offers the missing levels.
- **Builder**: `levelsFor(les)`, `nodeProgress(les)`, `groupsFor(les)` (A introduced in level 1, B in level 2), `buildLevel(sec, les, key)` (<=12 + <=3 HARD, cards not counted), `startLevel(x, key)`. Letters lessons / Letters tab / "Practise" replay still use the old `buildLesson`.
- **Exercises**: `INSTR` text catalogue, `new-word` (badge, autoplay, "Show me"), `fill-blank` (implemented), bank 3-8 tiles with 1-2 decoys, bank accepts same-English/alt answers. Mistakes: re-asked 4-6 later as a different type (`altType`), then "Let's review what you missed!" + PREVIOUS MISTAKE (max 3), carried via `carry` into the next level. Recap opens with "Try the hardest exercises" and has no match; other levels have a "make it harder" card. Results: level progress dots, "Next: Level n" button, "Perfect lesson!" variant, +10 XP per level, +20 last (5 on repeat).
- **Hooks for D/E/G/H/I**: `nodeProgress(les)` and the TODO(D) ring/pill in `viewHome`; node tap calls `startLevel` or `lessonIntro` (replace with the bottom sheet); `EXT[type] = {render(ex,ctx), bind(ex,{submit})}` registry (also `window.__mmutaExt`) plus pre-registered instruction strings in `INSTR` (listen-tap, listen-mc, type-blank, pattern, reply, tf, next-line, bank-en); `isMcType`, `typeOpts`, `altType` list the type sets to extend; `levelRec(id).carry` for Practice nodes (H); level `key` and `R.level` for Review/Practice results; `smooth()` for scheduling; dialogue nodes can reuse `startRun` + `finishRun` (mode other than "lesson").

---
## Implemented (D, E, G, H, I), 14 Nov 2026
- **D Path**: per unit a banner (`.mi-unit-banner`: "Unit n", GUIDES goal as title, igTitle, lesson progress, Guidebook button) and a zig-zag column (`--shift` set per node). `unitNodes(sec)` builds the rhythm: skills in order, Dialogue after the 2nd skill (if `DIALOGUES[unit]`), Practice after every 2 skills (and after a lone skill), Unit Review last. `nodeState(n)` gives done/locked/why. Only skills gate (unchanged `lessonUnlocked`); Practice, Dialogue and Review are optional. Tapping any node opens a bottom sheet (`openSheet`: Start/Continue/Practise, per-level replay chips, Guidebook, "See the words"; locked nodes say how to unlock; focus trap, Escape, scrim). Node shapes: skill = circle + level ring + "2/3"; dialogue = rounded square; practice = dashed small circle; review = wide ochre trophy.
- **E Guidebook**: route `#guide-<unitId>` (`viewGuide`, `openGuide`; hashchange supported; scroll position on the path is restored on return). `guideData(sec)` uses `GUIDES[unit]` (goal, 5 key phrases with speaker and flag, tips with examples) or falls back to the unit's lesson tips + 5 items. "Words in this unit" is a collapsible list.
- **G Exercise types** (all in `EXT`): `listen-mc` (audio only, choose the Igbo text, 3 options, no dot twins), `listen-tap` (audio only, 2-7 word sentences, 1-2 decoys, 3-8 tiles), `bank-en` (Igbo prompt, English tiles, accepts any same-English answer), `pattern` (NEW PATTERN: 2 highlighted examples sharing first/last 2 words, blank in a 3rd sentence; `findPattern(les)`). Audio types only for items with a clip; "Can't listen now" swaps to a text exercise without penalty. `applyExtras()` converts planned exercises per level: Meet/Practise 1 listen-mc + 1 bank-en; Build 1 pattern (at most once per skill, Build only) + 1 listen-tap + 1 listen-mc + 1 bank-en; Recap 2 listen-tap; Produce 1 + 1. Shared helpers `bindBank`, `bindMc`, `bankMarkup`, `mcMarkup`. Only 6 of 147 lessons contain a pattern trio, so NEW PATTERN is rare until lessons get a hand-written `pattern` field (not built).
- **H Practice / Unit Review**: `nodeQueue(sec, kind, lessons)`: weighted sample (`wOf`: low strength, due, carried mistakes) of learned items; Practice = 1 match + 11 exercises (recognition-leaning), Review = 15 exercises, typing/bank/listen-tap first, last 4 marked HARD. Stored in `S.nodes[id] = {n, best, date, passed?}` (new, defaults to `{}`; import-safe). XP: practice 10 / 5, review 20 passed / 10 / 8, story 15 / 5. Review is "done" at >= 70%.
- **I Dialogue**: `startDialogue` -> run mode `dialogue` with steps `dlg-title`, `dlg-line` (bubbles A left / B right, tap a bubble for the English, speaker only when the line has audio, autoplay), `dlg-q` (DIALOGUES questions as mc, placed right after the line they quote; next-line questions come before the answer line appears). No re-ask/review loop, no penalty; flagged dialogues show "Some lines are still being checked".
- Also: fixed `fill-blank` splitting on the letter "s" (`/s+/` -> `/\s+/`); cache `v10`; `guides.js`/`dialogues.js` precached and network-first; run header shows `R.pip` for node runs; debug hook (localhost only) exposes `findPattern`, `unitNodes`, `nodeQueue`, `startNode`.
