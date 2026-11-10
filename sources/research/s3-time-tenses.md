# Section 3 (A1) research: clock time, past tense, future tense

Research only. No app files were edited. Standard Igbo (Ọnwụ orthography) spelling is used where a source gives it. Old-spelling sources (igboguide.org) are shown as written and flagged.

Status key for Nkọwa okwu (NKO): ✅ exact = headword and example found on nkowaokwu.com, ⚠ = partly confirmed or from another source, ❌ = not found on NKO, – = not checked.

## Source ids

| id | source | how checked |
|---|---|---|
| NKO | Nkọwa okwu, https://nkowaokwu.com/search?word=<word> | built-in browser, get_page_text |
| IGC | igboguide.org conversations, https://www.igboguide.org/HT-igboconversation.htm (local: sources/web-pages/igboguide-org-ht-igboconversation-htm.md) | local file + WebFetch. Old orthography (ö, ï, ọ written as o) |
| WV | Wikivoyage Igbo phrasebook, https://en.wikivoyage.org/wiki/Igbo_phrasebook (local: sources/web-pages/en-wikivoyage-org-wiki-igbo-phrasebook.md) | local file |
| WP | Wikipedia, Igbo language, https://en.wikipedia.org/wiki/Igbo_language (local copy) | local file |
| IGS | igbostudy.com, "Learn Igbo Verbs", https://www.igbostudy.com/blog/learn-igbo-verbs | WebFetch |
| LAT | Latinum Institute, Lesson 8, https://latinum.substack.com/p/lesson-8-igbo-a-latinum-institute | WebFetch |
| IF | igbofocus (2019 archive), http://www.igbofocus.co.uk/html/learn-igbo-2.html (local: sources/web-pages/web-archive-org-web-2019-http-www-igbofocus-co-uk-html-learn-igbo-2-html.md) | local file |
| MOF | igbo.mofeko.com, "Time phrases in Igbo", https://igbo.mofeko.com/time.html | search snippet only, page not fetched |
| SNIP-TT | Search snippet, time-telling sources (e.g. https://www.igbovillagesquare.com/2021/01/time-in-igbo-elekere-oclock.html) | snippet only, not fetched |
| AJOL | Ògbahù tense/negation paper, https://www.ajol.info/index.php/ujah/article/download/142672/132405/0 | search snippet only |
| BLOCKED | Harvard ELIAS Units 9 (telling time) and 15 (future), https://elias.fas.harvard.edu/languages/igbo/beginning/9/telling-time and .../15/making-plans-future | DNS failure (ENOTFOUND) in WebFetch and browser. Not read |
| BLOCKED | Polyglot Club grammar, https://polyglotclub.com/wiki/Language/Igbo/Grammar/Tenses | HTTP 403. Not read |

## Existing app content (checked for duplicates)

- `time-days`: taa, echi, ụnyaahụ, ugbu a, oge, ụbọchị. Do not repeat these as new words.
- `time-parts`: ụtụtụ, ehihie, mgbede, abalị, izu, ọnwa, afọ. Do not repeat.
- `time-market`: market days and ahịa. Do not repeat.
- `verb-commands`: bịa, gaa, rie, and others. `verb-sentences` uses the present progressive ("Ana m aga ahịa", "Ana m eri nri"). These are NOT future and should not be reused as future examples.
- `curriculum.js` already has two future examples (lines 645–646): "Anyị ga-ala ụlọ na Dizemba" and "Ha ga-abịa echi". Use other examples in the new lesson.

---

## Topic 1: Clock time

| ig | en | type | sources | NKO check | notes |
|---|---|---|---|---|---|
| elekere | clock; hour (o'clock) | word | NKO ("clock", noun); WV ("Hour: elekere") | ✅ clock (noun). Hour sense from WV only | Used for "o'clock". Borrowed from English "clock" |
| nkeji | minute | word | NKO sense 2 "minute" | ✅ exact | Also "fold" and "division" (NKO) |
| ọkara | half | word | NKO ("half"); IGC | ✅ exact | Used in "half past" |
| awa | hour (per brief) | word | none | ❌ NKO "awa" returns only ùfóchí (dawn) | Brief lists it, not confirmed. Use elekere |
| ụtụtụ | morning | word | NKO ✅; WV | ✅ exact | Already in `time-parts` |
| ehihie | afternoon (noon to evening) | word | NKO ✅ | ✅ exact | Already in `time-parts` |
| mgbede | evening (about 4–7 pm per NKO) | word | NKO ✅ | ✅ exact | Already in `time-parts`. NKO gives the 4–7 pm range |
| abalị | night | word | NKO ✅ | ✅ exact | Already in `time-parts` |
| anyasị | night (sunset to sunrise) | word | NKO ✅ | ✅ exact | Dialect variant of abalị, NKO-listed |
| ùfóchí | dawn | word | NKO ✅ | ✅ exact | Optional extra |
| Olee ihe elekere nö? | What time is it? | sentence | IGC ("Olee ihe elekere nö?") | ⚠ parts ✅ (elekere). Full sentence not on NKO | Old spelling. Standard rewrite "Ọ bụ elekere ole?" is the brief's form, not in IGC. Flag to parent |
| Ö nö elekere otu. | It is one o'clock. | sentence | IGC | ⚠ "elekere" ✅, "otu" not checked here | Old spelling |
| Ugbua nö n'elekere anö. | Now, it is four o'clock. | sentence | IGC | ⚠ | "anö" = four (old spelling of anọ). Number not checked on NKO |
| n'elekere anö | at four o'clock | phrase | IGC ("n'elekere anö") | ⚠ | "n'" = na (at/in). Pattern "at + o'clock" |
| Aga m abïa na ojiri ökara gafee elekere anö. | I will come at half past four. | sentence | IGC | ⚠ "Aga m + verb" ✅ NKO example pattern. "gafee" ❌ (NKO: "Sorry, we don't have 'gafee'") | Key half-past model sentence |
| ojiri ọkara gafee elekere … | half past … (pattern) | phrase | IGC; SNIP-TT (says "Elekere na ọkara") | ⚠ | "ojiri" in IGC. Not checked on NKO |
| gafee | past / after (time) | word | IGC (in "gafee elekere") | ❌ not on NKO | Spelling varies: "gafere" in another snippet. Parent to confirm |
| Ọ bụ elekere isii na ọkara. | It is half past five. | sentence | SNIP-TT only | – | Not fetched. Not confirmed |
| O ji nkeji iri gafee elekere itoolu. | It is 9:10 (minutes past nine). | sentence | SNIP-TT only | – | Shows minute-first then gafee. Not fetched. Not confirmed |
| Gịnị na akụ n'elekere dị n'imụlọ? | What time is it on the clock in the room? | sentence | NKO example (elekere entry) | ✅ exact NKO example | Good real-usage sentence |
| élékéré ìsî nà ụ̀tụ́tụ̀ | six o'clock in the morning | phrase | WV | ⚠ | WV spelling with tone marks. Tones optional |
| élékéré ìtôlú nà ụtụtụ | nine o'clock AM | phrase | WV | ⚠ | Same pattern as above |
| élékéré abụọ nàbọ | two o'clock PM | phrase | WV | ⚠ | "nàbọ" = afternoon marker per WV |
| ụtụtụ ọma | good morning | phrase | app already has it (time-parts tip) | – | Do not repeat as new |
| Anaghị m ahụ ụzọ | (I do not see the way) | sentence | – | – | Skip. Not in sources for this topic |
| ịga ngwa | (to go quickly) | phrase | – | – | Skip. Not sourced |
| Ana m agbasa n'elekere anọ. | I will be dismissing at four o'clock. | sentence | IGC | ⚠ | "Ana m agbasa" is present/future mix. Parent to confirm the tense |
| O rụlụ. | It is time. | sentence | IGC | ⚠ | Old spelling for "Ọ rụrụ" |
| Ọ bụ oge ị ga-aga? | (It is time for you to go?) | sentence | – | – | Skip. Not sourced |
| Ka e mesịa, ka ọ dị oge ọzọ. | Good-bye, till next time. | phrase | IGC | ⚠ | Old spelling |
| Aga m ama ụzọ gaa n'ụlọ m echi. | I am going early to my house tomorrow. | sentence | IGC; also in `s1-travel-places.md` | ⚠ "ama" NKO = sign/evidence, not "early" | Best source for "early" but not confirmed |
| ama ụzọ | early | phrase | IGC (pattern only) | ❌ "ama" is sign/evidence on NKO | Not confirmed as "early". Parent check |
| igba uzo | early | word | MOF snippet only | – | Spelling conflicts with "ụzọ". Not fetched |
| ị gbụ oge | (to be late) | phrase | MOF snippet only | – | Not fetched. Lowest confidence. Do not teach until confirmed |
| Ọ dara mgbe | (he/she was late) | phrase | – | – | Not in any source. Do not use |

Lesson sketch (for the parent to decide, not added to the app): elekere, nkeji, ọkara, the time-of-day words already in the app, and the model sentences from IGC and NKO. Leave "I'm late" and "early" out until they are confirmed.

## Topic 2: Past tense

### How it is formed (grammar)

- **Past suffix -rV**: the verb root takes a suffix -r plus a copy of the root's last vowel. The -rV suffix copies the previous vowel (WP, "where V copies the previous vowel"). Example: je → jere, ga → gara. Source: WP; IGS ("root + r + last vowel"); IF.
- **Caution**: WP says the applicative suffix has the same form as the past suffix, and the two should not be confused. AJOL (search snippet) says some linguists argue -rV marks factative aspect rather than tense. Flag to parent.
- **Completed/perfect**: IGC uses "-ela"/"-ara" forms for recent or completed actions ("eriela", "abïara", "gawara"). These look like perfect aspect, not simple past. Do not teach them as plain past without a parent check.
- **Some verbs take -bu** (IGS): ịnọ → nọbu. Not needed for this lesson.
- **Negative past**: root + ghị (IGS: "Root + ghị"; AJOL: negative drops -rV and takes -ghị). So erighị and gaghị follow this pattern. Problem: gaghị is also the negative future (see topic 3). IGS treats "M gaghị ahịa" as past negative, and "M gaghị aga ahịa" as future negative. Erighị is NOT found on NKO, and no source gives it. Flag.

### Items

| ig | en | type | sources | NKO check | notes |
|---|---|---|---|---|---|
| gara | went (past of gaa) | verb | IGS ("M gara ahịa" = I went to the market); IGC ("gara") | ✅ NKO "gá" sense 3 "past; pass with time"; NKO flags "verb tense matches" | Core past form for "go" |
| gawara | went (past, perfect-like) | verb | IGC ("Ha gawara ụlọ ọgwụ" = They went to the hospital) | ⚠ not on NKO as a headword | Old spelling. Use gara in the lesson |
| jere | went (past of je) | verb | IGS ("M jere ahịa" = I went to the market); LAT ("M jere ebe ahụ ụnyaahụ" = I went to that place yesterday) | ⚠ je ✅ NKO ("go; move from one location to another"). jere not shown on NKO | Two dialect or style options for "went". Parent to confirm which is standard |
| riri | ate / eaten (past of ri) | verb | WP rule (-rV copies vowel). No example found | ⚠ ri ✅ NKO ("consume; eat"). riri not on NKO | Rule-based only. Do not teach as confirmed |
| bịara | came (past of bịa) | verb | IGC ("Abïara m ïlü ölü" = I have come to work) | ⚠ bịa ✅ NKO ("come"). NKO "bịara" is a DIFFERENT entry (compress) | Homograph conflict on NKO. Parent check |
| nyere | gave (past of nye) | verb | WP example "nye-re" (applicative) | – | Shows the suffix shape. Not checked on NKO |
| eriela | have eaten (perfect) | verb | IGC ("Anyï eriela nrï ütütü" = We have eaten breakfast) | ⚠ eri/ri ✅ NKO | Perfect, not simple past. Teach later |
| chefuru | forgot | verb | LAT ("ma m chefuru akwụkwọ m") | – | Not checked on NKO |
| erighị | did not eat (negative past) | verb | none. Pattern from IGS/AJOL only | ❌ NKO: "Sorry, we don't have 'erighị'" | Brief's example. Not confirmed |
| gaghị | did not go (negative past); also negative future | verb | IGS ("M gaghị ahịa" = I didn't go to the market) | ❌ NKO: "Sorry, we don't have 'gaghị'" | Same form as future negative. Parent check |
| ahịa | market | noun | NKO ✅ (market; trade; store) | ✅ exact | Also in `time-market` |
| ụnyaahụ | yesterday | word | app `time-days` | – | Already in app. Do not repeat |
| ụlọ ọgwụ | hospital | noun | IGC ("ọgwụ" in "ụlọ ọgwụ") | – | Not checked on NKO |
| Ụlọ oriri / ụlọ ọgwụ | hotel / hospital (different words) | – | WV, IGC | – | Keep apart in lessons |

### Example sentences (past)

| # | ig | en | sources | status |
|---|---|---|---|---|
| 1 | M riri nri. | I ate food. | constructed from WP rule + NKO "ri" | ⚠ constructed. Parent check |
| 2 | M gara ahịa. | I went to the market. | IGS ✅ exact | ✅ source. "gara" ✅ NKO, "ahịa" ✅ NKO |
| 3 | Ọ gara ahịa. | She went to the market. | constructed from IGS pattern | ⚠ constructed |
| 4 | M jere ebe ahụ ụnyaahụ. | I went to that place yesterday. | LAT ✅ exact | ✅ source. "jere" not on NKO |
| 5 | Anyị bịara ụnyaahụ. | We came yesterday. | constructed from IGC "Abïara m" | ⚠ constructed. "bịara" conflicts on NKO |
| 6 | Ha gawara ụlọ ọgwụ. | They went to the hospital. | IGC ✅ exact (old spelling) | ✅ source. Old spelling |
| 7 | Anyị eriela nri ụtụtụ. | We have eaten breakfast. | IGC ✅ exact (old spelling "Anyï eriela nrï ütütü") | ✅ source. Perfect, not simple past |
| 8 | M gaghị ahịa. | I did not go to the market. | IGS ✅ exact pattern | ⚠ conflicts with future negative |
| 9 | Erighị m nri. | I did not eat food. | none. pattern only | ❌ not confirmed. Brief's example |
| 10 | Anyị gara ụlọ akwụkwọ. | We went to school. | constructed from IGS "M gara ahịa" | ⚠ constructed |

## Topic 3: Future tense

### How it is formed (grammar)

- **Future marker ga-**: ga + verb, joined with a hyphen (ga-abịa, ga-eri). Subject goes before ga. Sources: NKO (ga = "auxiliary part of a future verb; will"); LAT ("M + ga- + verb"); IGS ("[ga-] + e/a + root", e.g. Ije → je → eje → ga-eje).
- **Aga m + verb**: a form with "aga" written separately. NKO shows "Aga m ewetara gị…" and "Aga m apịa…" as example sentences, and IGC has "Aga m abïa". So "Aga m" is attested in examples. The bare word "aga" is NOT a headword on NKO (NKO returned "ètù" only). Flag to parent: which spelling to teach, "aga m" or "ga m"?
- **Negative future**: gaghị + aga, or ga- becomes gaghị (IGS: "M gaghị aga ahịa" = I will not go). Source: IGS.
- **Vowel harmony**: the root's vowel changes after ga- (IGS: je → eje). Other sources agree the verb takes an e- or a- prefix after ga-.
- **Tomorrow/next week**: echi (tomorrow, NKO ✅), izu nabịa (next week, WV, unverified), afọ nabịa (next year, WV, unverified).

### Items

| ig | en | type | sources | NKO check | notes |
|---|---|---|---|---|---|
| ga | will (future marker) | particle | NKO ✅ ("auxiliary part of a future verb; will"); LAT; IGS | ✅ exact | Joined to verb with hyphen (ga-) |
| ga-abịa | will come | verb form | NKO bịa example "Ha ga-abịa echi" | ✅ exact | Already in app as a sentence |
| ga-eri | will eat | verb form | NKO riri example "Ha ga-eri nri ma e mechaa" | ✅ exact | |
| ga-aga | will go | verb form | IGS ("M ga-aga ahịa"); LAT ("M ga-aga ụlọ akwụkwọ") | ⚠ gaa/aga not a NKO headword | Source-confirmed pattern |
| aga m | I will / I am going to | particle + subject | NKO examples ("Aga m ewetara gị…", "Aga m apịa…"); IGC ("Aga m abïa…") | ⚠ "aga" headword ❌, but "Aga m" ✅ in NKO sentences | Spelling choice for parent |
| ga-eje | will go (je form) | verb form | IGS ("Ị ga-eje ahịa" = you will go to the market) | ⚠ je ✅ NKO | |
| ga-ahụ | will see | verb form | NKO example "Anyị ga-ahụ echi" (We will see tomorrow) | ✅ exact | |
| gaghị | will not / did not | particle | IGS ("M gaghị aga ahịa") | ❌ NKO | Negative future. Also negative past (see topic 2) |
| gaghị aga | will not go | phrase | IGS | ❌ not on NKO | Parent check |
| echi | tomorrow | word | NKO ✅ | ✅ exact | Already in `time-days` |
| izu nabịa | next week | phrase | WV ("izù nabia") | ⚠ | Not checked on NKO |
| afọ nabịa | next year | phrase | WV ("afọ n'abịa abịa") | ⚠ | WV spelling uses "n'abịa abịa" |
| ọdịnihu | future (noun) | noun | WV ("future: ọdịnihu") | – | Not checked on NKO |
| ụtụtụ | morning | noun | NKO ✅ | ✅ exact | Already in app |
| mgbede | evening | noun | NKO ✅ | ✅ exact | Already in app |
| anyasị | night | noun | NKO ✅ | ✅ exact | |

### Example sentences (future)

| # | ig | en | sources | status |
|---|---|---|---|---|
| 1 | Ha ga-eri nri ma e mechaa. | They will eat later. | NKO ✅ exact | ✅ |
| 2 | Ha ga-abịa echi. | They will come tomorrow. | NKO ✅ exact (already in app) | ✅ |
| 3 | Anyị ga-ahụ echi. | We will see tomorrow. | NKO ✅ exact | ✅ |
| 4 | Ị ga-enye m ego m taa. | You will give me my money today. | NKO ✅ exact | ✅ |
| 5 | A ga m abịa na uhuluchi. | I will come in the evening. | NKO ✅ exact (mgbede entry, dialect spelling "uhuluchi") | ✅ dialect spelling. Standard form may be "mgbede" |
| 6 | Aga m ewetara gị akwa ahụ n'ụtụtụ. | I will bring you that cloth in the morning. | NKO ✅ exact | ✅ |
| 7 | M gaghị aga ahịa. | I will not go to the market. | IGS ✅ exact pattern | ⚠ source only, not NKO |
| 8 | M ga-eri nri. / Aga m eri nri. | I will eat food. | pattern from NKO and LAT, no exact sentence | ⚠ constructed. The brief's "Aga m eri nri" is NOT in any source |
| 9 | M ga-abịa echi n'ụtụtụ. | I will come tomorrow morning. | LAT ✅ exact | ✅ source |
| 10 | M ga-eri ji n'anyasị. | I will eat yam in the evening. | LAT ✅ exact | ✅ source. "ji" (yam) not checked |
| 11 | Olee oge ị ga-abịa? | When will you come? | IGC ✅ exact (old spelling "Olee oge ï ga-abia?") | ✅ source |
| 12 | Nnụ kụ mmiri ga-ezo. | A lot of rain will fall. | IGC ✅ exact (old spelling "Nnuku mmiri ga-ezo") | ✅ source |

## Mini-dialogue (clock time and past/future, 6 lines)

A: Olee ihe elekere nö? — What time is it? [IGC, old spelling]
B: Ö nö elekere otu. — It is one o'clock. [IGC]
A: Olee oge ị ga-abịa? — When will you come? [IGC]
B: Aga m abịa na ojiri ọkara gafee elekere anọ. — I will come at half past four. [IGC, standardized "ọkara"; "gafee" not on NKO]
A: Ị gara ahịa taa? — Did you go to the market today? [constructed from NKO "gara" and "ahịa"; ⚠]
B: M gaghị ahịa. — I did not go to the market. [IGS pattern; ⚠ conflicts with future negative]

## Culture notes

- Igbo time is usually given relative to the day period (ụtụtụ, ehihie, mgbede, abalị), so "four o'clock" alone can be ambiguous. Add the day word (IGC: "n'elekere anọ", with the day period given in WV).
- Most people say "half past" with ọkara and "gafee" (past). Sources differ on the exact phrasing, so learners should listen before copying.
- Market days (Eke, Orie, Afọ, Nkwọ) are often used in place of dates in everyday speech (IF). They are in the app already.
- "Early" and "late" have no confirmed phrase yet. Do not teach a sentence until a native speaker or a dictionary with examples confirms it.

## Doubts for the parent

1. **Hour word**: the brief's "awa" is not on NKO (it returned ùfóchí). Teach "elekere" for hour and clock. Is "awa" used by speakers, and in which area?
2. **Past of bịa**: IGC uses "bịara" as "have come", but NKO lists "bịara" as a different word (compress). Is "bịara" the past of "come" in standard Igbo?
3. **Negative past**: is "erighị" correct for "did not eat" (as in "erighị m")? It is NOT on NKO. Is the negative past root + ghị (IGS), and how is it told apart from the negative future gaghị?
4. **Future spelling**: "Aga m eri nri" (brief) is not in any source. Should the lesson teach "M ga-eri nri", "Aga m eri nri", or both? NKO has "Aga m ewetara gị…", so "Aga m + verb" is attested in examples.
5. **Riri**: is riri the simple past of ri (eat)? Only the rule supports it, and NKO does not show the past.
6. **Early / late**: is "ama ụzọ" the standard phrase for "early"? NKO has "ama" only as sign/evidence. "Ị gbụ oge" for "late" is from a snippet only.
7. **Half past and minutes**: "gafee" is missing on NKO. Is the pattern "O ji nkeji X gafee elekere Y" standard? The sources give different spellings (gafee/gafere).
8. **Tone and orthography**: IGC uses old spelling (ö, ï, ọ written o). WV uses tone marks. The app uses standard dots. Confirm the target spelling for the lesson.
9. **Dialect**: the Nkọwa example for "evening" uses "uhuluchi", a variant spelling. Which dialect should the course follow (Central/Standard vs Owerri/Onitsha)?

## Pages for the user to save (not fetched)

- Harvard ELIAS Unit 9 (telling time) and Unit 15 (future), blocked from this environment. A browser or local copy would confirm the time and future patterns.
- Polyglot Club Igbo tenses page, which returned HTTP 403. Save a copy if the user can open it.

## Sources used

- Nkọwa okwu entries checked: elekere, nkeji, awa, ọkara, ehihie, mgbede, abalị, anyasị, ụtụtụ, ùfóchí, gara, ga, ri, bịa, bịara, erighị, gaghị, aga, ahịa, ama, dara, echi, je (https://nkowaokwu.com/search?word=<word>).
- https://www.igboguide.org/HT-igboconversation.htm (local copy also in sources/web-pages)
- https://en.wikivoyage.org/wiki/Igbo_phrasebook (local copy also in sources/web-pages)
- https://en.wikipedia.org/wiki/Igbo_language (local copy also in sources/web-pages)
- https://www.igbostudy.com/blog/learn-igbo-verbs (WebFetch)
- https://latinum.substack.com/p/lesson-8-igbo-a-latinum-institute (WebFetch)
- http://www.igbofocus.co.uk/html/learn-igbo-2.html (local archive copy)
- https://igbo.mofeko.com/time.html (search snippet only)
- https://www.ajol.info/index.php/ujah/article/download/142672/132405/0 (search snippet only)
- https://www.igbovillagesquare.com/2021/01/time-in-igbo-elekere-oclock.html (search snippet only)
- Blocked: Harvard ELIAS (DNS failure), Polyglot Club (HTTP 403).
