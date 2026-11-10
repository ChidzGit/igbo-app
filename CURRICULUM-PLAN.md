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
| 1 | Intro | Essential phrases and simple grammar | Alphabet · Greetings · Introducing Yourself · Family · Eating Out · At the Market · At School · Getting Around |
| 2 | A1 | Words, phrases and grammar for basic interactions | Food & Drink · Numbers · Colours · Action Words · Asking Questions · Where Is It? · My Day · At Home · Jobs · Animals · Clothes · Describing Things · Opinions & Advice · Countries & Peoples · Linking Words |
| 3 | A1 | Foundational sentences for basic conversations | Time & Days · The Body · Everyday Phrases · Telling the Time · The Past · The Future · Feelings · Describing People · Chatting with Friends · Cities & Towns · Nature · Sports, Music & Stories · Igboland |
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
| Introduce yourself | `intro-name`, `intro-pronouns`, `intro-age`, `intro-learning`, `intro-speak-to-me`, `intro-from` (2026-11-10) | ✅ |
| Greet people | `greet-hello`, `greet-times`, `greet-polite`, `greet-thanks`, `greet-welcome` (2026-11-10) | ✅ |
| Introduce family members | `fam-core`, `fam-extended`, `fam-sentences`, `fam-more` (2026-11-10) | ✅ |
| Order a drink / request to the waiter | `eat-order`, `eat-table`, `eat-pay`, `eat-buka` (unit `eatingout`; 2026-11-10) | ✅ |
| Talk about the price | `mkt-money`, `mkt-haggle`, `mkt-talk` (unit `market`; 2026-11-10) | ✅ |
| Communicate at school | `sch-things`, `sch-verbs`, `sch-talk` (unit `school`; 2026-11-10) | ✅ |
| Communicate when travelling | `trv-go`, `trv-where`, `trv-talk` (unit `travel`; 2026-11-10) | ✅ |
| Talk about places | `every-places` (Section 3), plus hospital / office / "Where is the market?" in `trv-where` (2026-11-10) | 🟡 church (ụka vs ụlọ ụka) and village (obodo vs ogbe) wait for the parent |

## Section 2 · A1
| Vietnamese unit | Igbo coverage | Status |
|---|---|---|
| Talk about food / restaurants | `food-basics`, `food-more`, `food-phrases` | ✅ |
| Identify numbers | `num-*` (6 lessons) | ✅ |
| Describe colours | `col-basic` (6 of 9 items ⚑ waiting for parent check) | 🟡 |
| Use the present tense / common verbs / describe actions | `verb-commands`, `verb-more`, `verb-sentences` | ✅ |
| Describe your family | `fam-sentences` | ✅ |
| Make basic questions | `every-questions` (Section 3), `q-words` (unit `questions`; 2026-11-10) | 🟡 thin: "why" and "because" still unconfirmed |
| Say where things are | `where-places`, `where-talk` (unit `whereis`; 2026-11-10) | ✅ |
| Tell your routine | `day-morning`, `day-work` (unit `routine`; 2026-11-10) | 🟡 no confirmed word for "sleep", "wake up", "cook" |
| Identify household goods | `home-rooms`, `home-things` (unit `home`; 2026-11-10) | 🟡 window and key ⚑; bathroom, TV, bed, lamp missing |
| Talk about occupations | `job-words`, `job-talk` (unit `jobs`; 2026-11-10) | 🟡 mostly ⚑; driver, tailor, police, engineer missing |
| Describe animals | `ani-farm`, `ani-wild`, `ani-talk` (unit `animals`; 2026-11-10) | ✅ |
| Discuss clothing | `clo-wear`, `clo-talk` (unit `clothes`; 2026-11-10) | 🟡 trousers ⚑; shirt, socks, coat missing |
| Make basic statements, describe qualities and characteristics (adjectives) | `des-size`, `des-quality` (unit `describe`; 2026-11-10) | ✅ ("hot" still missing) |
| Express opinions | `op-think` (unit `opinions`; 2026-11-10) | ✅ |
| Talk about nationalities | `ppl-words`, `ppl-talk` (unit `peoples`; 2026-11-10) | 🟡 Ghana, Africa, Britain not confirmed |
| Use conjunctions / adverbs | `link-words`, `link-talk` (unit `linking`; 2026-11-10) | 🟡 "because", "or", "always" missing |
| Advise your friends | `op-advice` (unit `opinions`; 2026-11-10) | 🟡 "Don't!" (Emela?) unconfirmed |

## Section 3 · A1
| Vietnamese unit | Igbo coverage | Status |
|---|---|---|
| Discuss the time | `time-days`, `time-parts`, `time-market`, `clk-words`, `clk-talk` (unit `clock`; 2026-11-10) | 🟡 "Ọ bụ elekere ole?", early/late unconfirmed |
| Identify body parts | `body-head`, `body-limbs` | ✅ |
| Health | `body-health`, `every-help` | ✅ |
| Use common phrases | `every-heart`, `every-celebrate` | ✅ |
| Describe location | `every-places`, `where-*` (Section 2) | 🟡 |
| Introduce the past tense | `past-form`, `past-talk` (unit `past`; 2026-11-10) | 🟡 most lines ⚑; negative past unconfirmed |
| Use basic verbs (future) | `fut-form`, `fut-talk` (unit `future`; 2026-11-10) | ✅ |
| Express feelings | `feel-words`, `feel-talk` (unit `feelings`; 2026-11-10) | 🟡 bored, excited missing |
| Describe yourself / people around you | `pers-words`, `pers-talk` (unit `people`; 2026-11-10) | 🟡 kind, clever, fat, slim missing |
| Chat with your friends / talk with coworkers | `chat-talk` (unit `chat`; 2026-11-10) | 🟡 |
| Describe cities | `city-words`, `city-talk` (unit `cities`; 2026-11-10) | 🟡 city names kept in English spelling |
| Describe nature / wild animals | `nat-world`, `nat-talk`, `ani-wild` (units `nature`, `animals`; 2026-11-10) | ✅ (rain, forest still missing) |
| Discuss sports | `art-words`, `art-talk` (unit `arts`; 2026-11-10) | 🟡 football, wrestling, swimming only |
| Talk about the arts | `art-words`, `art-talk` (unit `arts`; 2026-11-10) | 🟡 music, story; masquerade is in `igl-culture` |
| Express surprise | `chat-wow` (unit `chat`; 2026-11-10) | 🟡 Haa! / Ewo! unconfirmed |
| Discuss Igboland (in place of "Discuss Vietnam") | `igl-culture` (unit `igboland`; 2026-11-10) | 🟡 one lesson: kola, new yam, masquerade, king |
| Politics, science, economy, astronomy, current events | none | ❌ 15–19 (lowest priority) |

## Section 4 · A2
| Vietnamese unit | Igbo idea | Status |
|---|---|---|
| Use idioms | **Ilu (proverbs)**, central to Igbo speech | 🟡 (2026-11-10) unit `ilu`, 3 lessons, 22 items, 13 proverbs; 9 of them marked ⚑ (single source) |
| Express opinions | agree/disagree, "I think" | ✅ (2026-11-10) unit `discuss`, 3 lessons (agree, "more than" karịa, best/nearest); many sentences are patterns, so ⚑ |
| Discuss morality | omenala (custom), respect for elders | ✅ (2026-11-10) unit `omenala`, 3 lessons; parent check N18–N23 |
| Discuss the supernatural | chi, ancestors, folktales (akụkọ ifo) | ✅ (2026-11-10) unit `beliefs`, 3 lessons; neutral wording, parent check N28–N33 |
| Use advanced vocabulary | review of all units | ❌ skipped: the Daily test already reviews, so a review unit would only duplicate items |
| Talk about the army | (skip; replace with "Talk about history") | 🟡 (2026-11-10) folded into `beliefs` as the lesson `bel-past` (7 items, mostly ⚑); too thin for its own unit |

Vietnamese Section 4 has only 6 units, so the A2 section is filled out with standard **CEFR A2 themes** as well: past experiences, plans and invitations, the doctor, the weather, cooking, comparisons and life events. The planned units (built 10 Nov 2026, v1.6.0):

| Unit id | Title | Covers | Status |
|---|---|---|---|
| `ilu` | Proverbs (Ilu) | 20–30 well-known proverbs with meaning and when to use them | ✅ 3 lessons (2026-11-10) |
| `discuss` | Discussing & Comparing | agree/disagree, because, "more than" (karịa), best, same/different | ✅ 3 lessons (2026-11-10) |
| `omenala` | Custom & Respect | greeting elders, titles (Nze, Ọzọ, Eze), kola etiquette, good manners | ✅ 3 lessons (2026-11-10) |
| `ceremonies` | Life Events | wedding (igba nkwu), naming, funeral, Christmas homecoming | ✅ 3 lessons (2026-11-10) |
| `beliefs` | Chi, Ancestors & Folktales | chi, ndichie, akụkọ ifo, tortoise (mbe) tales (parent check) | ✅ 3 lessons (2026-11-10) |
| `history` | Igbo History | history, ancestors, Nri, Igbo-Ukwu, old and new times | 🟡 folded into `beliefs` (2026-11-10) |
| `weather` | Weather & Seasons | rain, sun, dry season, harmattan, hot/cold | ✅ 2 lessons (2026-11-10) |
| `cooking` | Cooking | Igbo dishes (ofe onugbu, egusi, akpụ, ji), cooking verbs, a recipe | ✅ 2 lessons (no recipe and no verbs for fry/stir/pound: no source) (2026-11-10) |
| `doctor` | At the Doctor | symptoms, medicine, "where does it hurt?" | ✅ 2 lessons (2026-11-10) |
| `plans` | Plans, Invitations & Calls | let's…, will you come?, call me, the phone | ✅ 3 lessons (incl. weekdays) (2026-11-10) |
| `review4` | Section 4 Review | "advanced vocabulary": mixed sentences from the section | ❌ skipped (2026-11-10) |

## Section 5 · B1: "Form sentences about a wider variety of topics" (built 10 Nov 2026)
Themes come from the big courses' Section 5 (Spanish, French and Japanese; see `sources/web-pages/duolingo-section5-themes.md`). Only the themes all three share are used, and topics Sections 1–4 already cover are skipped. B1 means longer sentences, linked ideas and talking about experiences.

| Unit id | Title | Covers | Status |
|---|---|---|---|
| `memories` | Memories | childhood, "when I was young", have you ever / never (-bu / -beghị), past experiences | ✅ 2 lessons (2026-11-10): the "have ever" form is missing (no source) |
| `hopes` | Hopes & Dreams | want to become, hope, dream, plans for the future | ✅ 2 lessons (2026-11-10) |
| `career` | Work & Business | job, office, boss, salary, business and trading, interview | ✅ 2 lessons (2026-11-10): no word for salary, interview, boss, apprentice |
| `exams` | Studies & Exams | exam, pass/fail, university, degree, studying hard | ✅ 2 lessons (2026-11-10): no word for pass, fail, result, degree |
| `injuries` | Accidents & Injuries | fall, cut, break, bleed, accident, first aid, "be careful" | ✅ 2 lessons (2026-11-10): no word for cut, bleed, swollen, first aid |
| `relations` | Friends & Relationships | friendship, love, marriage, argue, forgive, trust | ✅ 2 lessons (2026-11-10) |
| `chores` | Housework | sweep, wash, fetch water, tidy, cook, help at home | ✅ 2 lessons (2026-11-10): no word for iron, tidy, rubbish |
| `directions` | Giving Directions | left/right, straight on, junction, turn, cross, far/near | ✅ 2 lessons (2026-11-10): no word for bridge, roundabout, opposite |
| `media` | News, Media & Film | news, radio, TV, film/Nollywood, newspaper, music | ✅ 1 lesson (thin; no word for newspaper, actor, singer) (2026-11-10) |
| `tech` | Technology | computer, internet, charge, message, photo, social media | ✅ 1 lesson (thin; no word for charger, battery, password, video) (2026-11-10) |
| `community` | Community & Environment | community, meeting, help, environment, rubbish, trees, clean | ✅ 3 lessons (2026-11-10): no word for flood |

## Sections 6–8 · B1–B2 (later)
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
- 2026-11-10: Section 1 filled (v1.3.0). Four new units (`eatingout`, `market`, `school`, `travel`; 13 lessons) and three new lessons in existing units (`greet-welcome`, `intro-from`, `fam-more`). 115 new items, 36 marked unsure; parent questions are in section K of QUESTIONS-FOR-PARENT.md. Weather was skipped on purpose (planned for a later section). Many items rest on one source, so Section 1 is a first draft until the parent answers.
- 2026-11-10: Sections 2 and 3 filled (v1.4.0). 21 new units (11 in Section 2, 10 in Section 3), 41 lessons, 298 new items, 104 marked unsure; parent questions are in sections L and M of QUESTIONS-FOR-PARENT.md. Politics, science, economy, astronomy and current events were skipped on purpose. Some topics were thin (Asking Questions, Igboland: one lesson each).
- 2026-11-10: Section 4 filled (v1.5.0). 9 new units (`ilu`, `discuss`, `omenala`, `ceremonies`, `beliefs`, `weather`, `cooking`, `doctor`, `plans`), 24 lessons, 181 new items, 78 marked unsure; parent questions are in section N of QUESTIONS-FOR-PARENT.md. `history` was folded into `beliefs` (too thin) and `review4` was skipped (the Daily test already reviews). Weekdays were added to `plans`. Four old items with "…" were turned into real examples. Left out: cooking verbs (fry, stir, pound, cut), a recipe, thunder/lightning, history of war and independence, and homecoming phrases (no Igbo source).
- 2026-11-10: Section 5 filled (v1.6.0). 11 new units (`memories`, `hopes`, `career`, `exams`, `injuries`, `relations`, `chores`, `directions`, `media`, `tech`, `community`), 21 lessons, 157 new items, 80 marked unsure; parent questions are in section O of QUESTIONS-FOR-PARENT.md (O1–O51). `media` and `tech` are one lesson each (thin). Many core words (pass/fail, cut, bleed, rubbish, charger, password...) had no source and were left out.
