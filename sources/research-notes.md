# Research notes (what Claude used to build the app)

## 2026-11-10: initial build

### Web searches (summaries of results)
- **Free courses:** the Peace Corps Igbo course (Welmers 1964, ERIC ED233567, 12 lessons) and the FSI Igbo Basic Course are public domain. IgboStudy offers a free 1-hour beginner course. Harvard ELIAS has a free Beginning Igbo course (units on greetings, family "Unit 8 Ezi na ụlọ ndị Igbo", days/weeks/months "Unit 11"). Udemy, AmazingTalker, Linguashop and Selar are paid, so not used.
- **Alphabet:** 36 letters (Ọnwụ orthography, 1961/62): 8 vowels, 28 consonants, no C (except in "ch"), Q or X. Dot below on ị ọ ụ, dot above on ṅ. Standard written Igbo is based on the Owerri/Umuahia dialects.
- **Numbers:** otu, abụọ, atọ, anọ, ise, isii, asaa, asatọ, itoolu/iteghete, iri. 11–19 = iri na X. Tens = iri X. 100 narị, 1000 puku, 1,000,000 nde. Spellings vary between sites.
- **Greetings:** Ndewo, Kedu, Kedu ka ị mere?, Ọ dị mma, Daalụ, Ee/Mba, Ka ọ dị, Ka ọ dị ruo echi, Ụtụtụ ọma, Mgbede ọma, Nnọọ. Sources disagree on some meanings, and greetings vary by community.
- **Calendar:** 4 market days, Eke, Orie, Afọ, Nkwọ (an izu = 4 days). 7 izu = 1 month (28 days), 13 months a year. Time words: taa (today), echi (tomorrow), ụnyaahụ (yesterday).
- **Dictionary/audio:** Nkọwa okwu (nkowaokwu.com) is built on the open-source IgboAPI: words, example sentences, native-speaker audio, dialect variants. Free. The API needs a (free) key.

### Checked on nkowaokwu.com
| Searched | Result |
|---|---|
| ndewo | Standard Igbo **ndeewo**: hello / greetings / well done |
| nine | **itolu / itoolu** (e.g. "iri abụọ na itoolu" = 29) |
| blue | **anụnụanụnụ** (written as one word) |
| grandfather | **nnannukwu** or **nnaochie / nnoochie** (grandmother: nnennukwu) |
| yesterday | **ụnyaahụ** (variant ụnyahụ) |
| bread | **achịcha** = biscuit / cake / bread. **eberebe** = sliced cassava snack |
| hundred | **narị** (pl. narịga). Example: "nyem nari naịra abụọ" = give me two hundred naira (so the number goes before naịra here: compare question D3) |

### Pages saved as text (see `web-pages/`)
Saved 12 pages. Blocked or unavailable:
- omniglot.com, polyglotclub.com: bot-check page, so **you need to save these** (see `sources/README.md`)
- columbia.edu Igbo index: 403 for automated readers, so **you need to save this**
- elias.fas.harvard.edu: did not resolve from Claude's tools, so **you need to save these**
- ilc.igbonet.com, igbofocus.co.uk: dead sites, so saved from the Internet Archive instead
- YouTube channels (UCbK07IrSaWaMuHymjkXALwQ, LearnIgbo): video, not text. Listed in RESOURCES.md for listening practice.

## 2026-11-10: pages you saved (inbox → converted/)
- **Omniglot: Useful phrases in Igbo** (`converted/useful-phrases-in-igbo.md`). Corrections by native speakers (Nkiruka Obi, Ann Okuefuna, Charles Njoku, Ijeoma Akubue, Yvonne Chioma Mbanefo). Key notes:
  - No traditional afternoon/evening greetings: Ndeewo / Daalụ are used all day. Ụtụtụ ọma, Mgbede ọma etc. are modern literal translations.
  - Good morning: Ị bọọla chi?. Good night: Ka chi foo (reply: Ka ọ bọọ). Goodbye: Ka ọmesịa, Ka ọ dị, Ya gazie.
  - Thank you: Ị meela / Daalụ. Reply: Nsogbu adịghị. Sorry: Ndo, Gbaghara m (forgive me).
  - Many dialect pairs shown (e.g. aha/afa, ihe/ịfe, asụ obere/obele, -ghị/-rọ negatives such as Amaghị m / Amarọ m).
- **Omniglot: Igbo numbers** (`converted/numbers-in-igbo-n-g-g.md`), Imo-state school numbers. Corrections by Yvonne Chioma Mbanefo.
  - 0 oroghoro. 9 itoolu / iteghete / itenanị. 20 iri abụọ (decimal) or ọgụ (base-20). 400 nnụ (base-20). 1,000 otu puku. 1,000,000 otu nde. 1 billion otu ijeri.
  - Ordinals: nke + number. First = nke mbụ / nke izizi.
  - Further free links from that page: ezinaulo.com/igbo-lessons/vocabulary/numbers/ and teachyourselfigbo.com/counting-of-numbers.php
- "igbo.htm", "igbo 1.htm" and "igbo 2.htm" were all the numbers page, so there are 2 unique pages in total.
