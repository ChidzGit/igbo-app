# Curriculum plan: CEFR alignment

Mmụta Igbo is arranged like Duolingo's CEFR-aligned courses: numbered **Sections**, each made of **Units**, each made of **Lessons**.

## Which course we copy, and why
Sources: [duolingodata.com](https://www.duolingodata.com/) (data from Jul 2025, read 10 Nov 2026), compared in `sources/web-pages/duolingo-course-comparison.md`.

- **Sections 1–4 follow Vietnamese** ([course page](https://www.duolingodata.com/dat/vifen75v2.html)): Intro, A1, A1, A2, with 75 units in total.
  - Of the small courses, Vietnamese matched our existing topics best (17 of 69 units in Sections 1–3).
  - It is a **tonal** language, like Igbo.
  - Greek and Hebrew have the same 4-section shape and matched slightly fewer topics.
  - Swahili has only 3 sections (Intro, A1, A1), so it was too short.
- **Sections 5–8 follow the big courses** (Spanish, [course page](https://www.duolingodata.com/dat/esfen991v2.html)): B1, B1, B2, B2. This is the long-term roadmap. No small course goes beyond A2.

| Section | CEFR | Focus (Duolingo's wording) | Igbo units |
|---|---|---|---|
| 1 | Intro | Essential phrases and simple grammar | Alphabet · Greetings · Introducing Yourself · Family |
| 2 | A1 | Words, phrases and grammar for basic interactions | Food & Drink · Numbers · Colours · Action Words |
| 3 | A1 | Foundational sentences for basic conversations | Time & Days · The Body · Everyday Phrases |
| 4 | A2 | Sentences about everyday topics | (coming soon) |
| 5 | B1 | Sentences about a wider variety of topics | (later) |
| 6 | B1 | More complex ideas in conversation | (later) |
| 7 | B2 | Abstract feelings and opinions | (later) |
| 8 | B2 | Converse confidently, even on specialised topics | (later) |

**How it maps into the app:** a "Unit" is an existing topic group (`sections[]` in `data/curriculum.js`), and the new `stages[]` holds the 8 Sections. Lesson ids never change, so progress is safe.

Status key: ✅ covered · 🟡 partly covered · ❌ gap (the number is its priority within the section). The morning routine fills gaps top-down.

---

## Section 1 · Intro
| Vietnamese unit | Igbo coverage | Status |
|---|---|---|
| (Igbo-specific) Letters, dots and tones | `alpha-*` (5 lessons) | ✅ |
| Introduce yourself | `intro-name`, `intro-pronouns`, `intro-age`, `intro-learning` | ✅ |
| Greet people | `greet-hello`, `greet-times`, `greet-polite`, `greet-thanks` | ✅ |
| Introduce family members | `fam-core`, `fam-extended` | ✅ |
| Order a drink / request to the waiter | `food-phrases` (Section 2) | 🟡 1: "Biko, nye m mmiri", ordering at a buka |
| Talk about the price | none | ❌ 2: "Ego ole?", money and haggling at the market |
| Communicate at school | none | ❌ 3 |
| Communicate when travelling | none | ❌ 4 |
| Talk about places | `every-places` (Section 3) | 🟡 |

## Section 2 · A1
| Vietnamese unit | Igbo coverage | Status |
|---|---|---|
| Talk about food / restaurants | `food-basics`, `food-more`, `food-phrases` | ✅ |
| Identify numbers | `num-*` (6 lessons) | ✅ |
| Describe colours | `col-basic` (6 of 9 items ⚑ waiting for parent check) | 🟡 |
| Use the present tense / common verbs / describe actions | `verb-commands`, `verb-more`, `verb-sentences` | ✅ |
| Describe your family | `fam-sentences` | ✅ |
| Make basic questions | `every-questions` (Section 3) | 🟡 1: who/what/where/when/why/how as a grammar unit |
| Say where things are | none | ❌ 2: in/on/under/near (n'ime, n'elu, n'okpuru) |
| Tell your routine | none | ❌ 3: wake, wash, eat, go to work |
| Identify household goods | none | ❌ 4 |
| Talk about occupations | none | ❌ 5 |
| Describe animals | none | ❌ 6 |
| Discuss clothing | none | ❌ 7 |
| Make basic statements, describe qualities and characteristics (adjectives) | none | ❌ 8: big/small/good/bad/new/old |
| Express opinions | none | ❌ 9: "Echere m na…" |
| Talk about nationalities | none | ❌ 10: Nigeria, Igbo/Yoruba/Hausa, England |
| Use conjunctions / adverbs | none | ❌ 11–12 (na, ma, mana, kama) |
| Advise your friends | none | ❌ 13 |

## Section 3 · A1
| Vietnamese unit | Igbo coverage | Status |
|---|---|---|
| Discuss the time | `time-days`, `time-parts`, `time-market` | 🟡 1: clock time ("Ọ bụ elekere ole?") |
| Identify body parts | `body-head`, `body-limbs` | ✅ |
| Health | `body-health`, `every-help` | ✅ |
| Use common phrases | `every-heart`, `every-celebrate` | ✅ |
| Describe location | `every-places` | 🟡 |
| Introduce the past tense | none | ❌ 2: -rV suffix (Eriri m nri) |
| Use basic verbs (future) | none | ❌ 3: ga- (Aga m eri nri) |
| Express feelings | none | ❌ 4: happy/sad/angry/tired (obi ụtọ, iwe) |
| Describe yourself / people around you | none | ❌ 5 |
| Chat with your friends / talk with coworkers | none | ❌ 6–7 |
| Describe cities | none | ❌ 8: Enugu, Onitsha, Owerri, Lagos |
| Describe nature / wild animals | none | ❌ 9–10 |
| Discuss sports | none | ❌ 11 |
| Talk about the arts | none | ❌ 12: music, dance, masquerade (mmanwụ) |
| Express surprise | none | ❌ 13 ("Chei!", "Haa!") |
| Discuss Igboland (in place of "Discuss Vietnam") | none | ❌ 14: towns, rivers, Ọjị (kola) |
| Politics, science, economy, astronomy, current events | none | ❌ 15–19 (lowest priority) |

## Section 4 · A2 (coming soon)
| Vietnamese unit | Igbo idea | Status |
|---|---|---|
| Use idioms | **Ilu (proverbs)**, central to Igbo speech | ❌ 1 |
| Express opinions | agree/disagree, "I think" | ❌ 2 |
| Discuss morality | omenala (custom), respect for elders | ❌ 3 (parent check) |
| Discuss the supernatural | chi, ancestors, folktales (akụkọ ifo) | ❌ 4 (handle with care, parent check) |
| Use advanced vocabulary | review of all units | ❌ 5 |
| Talk about the army | (skip; replace with "Talk about history") | ❌ 6 |

## Sections 5–8 · B1–B2 (later)
These come after Section 4 has content. They will follow the big courses' themes: wider topics, stories and news, and abstract opinions. Before starting them, re-check duolingodata.com for a course that lists Section 5–8 unit titles.

---

## Rules for filling gaps (morning routine)
1. Take the **highest-priority ❌ or 🟡 in the lowest section** first: finish Section 1, then 2, then 3, then 4.
2. Add each new unit as a new `sections[]` entry with a new id, and put that id in the right stage's `units` list. Never reuse or rename lesson ids.
3. Verify words on Nkọwa okwu. Mark anything unsure `unsure: true` and add a row to `QUESTIONS-FOR-PARENT.md`.
4. When a gap is filled, change its status here to ✅ and add the date.
5. Moving a lesson to a better unit is allowed, because progress is keyed on lesson id. Note it in the changelog.

## Log
- 2026-11-10: Plan written. Swahili was rejected (only 3 sections). The plan follows Vietnamese for Sections 1–4 and the big courses for 5–8. The 11 existing units are grouped into Sections 1–3.
