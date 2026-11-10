/*
  Igbo curriculum data — Mmụta Igbo
  ---------------------------------
  Edit THIS file to add or change content. The app builds all exercises from it.

  Item fields:
    ig      Igbo (Standard Igbo spelling with dots: ị ọ ụ ṅ. Tone marks optional.)
    en      English meaning
    alt     (optional) other accepted Igbo answers when typing
    note    (optional) pronunciation / usage tip shown when the word is introduced
    ex      (optional) example word or sentence
    unsure  (optional) true = needs checking with a native speaker
            (also listed in QUESTIONS-FOR-PARENT.md). Shown in the app with a ⚑ flag.
    src     (optional) id of the source in `sources` below

  Stages: see `stages` below; each lists the section ids (units) it contains.

  Lesson fields: id (never change once published, progress is stored by id),
  title, tip, items, type ("letters" = no typing exercises).
*/
window.CURRICULUM = {
  version: "1.6.0",
  updated: "2026-11-10",

  // Newest first. Shown in the app under More → "What's new".
  changelog: [
    { version: "1.6.0", date: "2026-11-10", changes: [
      "Section 5 (B1) is now open: 11 new units, 21 lessons and 157 new words, phrases and sentences.",
      "New units: Memories, Hopes & Dreams, Work & Business, Studies & Exams, Accidents & Injuries, Friends & Relationships, Housework, Giving Directions, News, Media & Film, Technology, and Community & Environment.",
      "B1 means longer sentences, so most lessons are full sentences. They explain 'when I was a child' (mgbe m bụ nwata), 'used to' (-karị), 'if' (ọ bụrụ na) and 'I want to become' (achọrọ m ịghọ).",
      "80 of the 157 are marked ⚑ because only one source had them, or we built the sentence from a pattern. They are on the list for a native speaker (section O of QUESTIONS-FOR-PARENT.md).",
      "Left out on purpose because nothing confirmed them: pass and fail (an exam), degree, result, cut, bleed, swollen, first aid, iron, rubbish, bridge, charger, battery, password, video, actor and singer."
    ] },
    { version: "1.5.0", date: "2026-11-10", changes: [
      "Section 4 (A2) is now open: 9 new units, 24 lessons and 181 new words, phrases and sentences.",
      "New units: Proverbs (Ilu), Discussing & Comparing, Custom & Respect, Life Events, Chi, Ancestors & Folktales (with a little Igbo history), Weather & Seasons, Cooking, At the Doctor, and Plans, Invitations & Calls.",
      "The proverbs come with a word-for-word meaning and when to use them. Comparing is explained with karịa (more than) and kacha (the most). The days of the week (Mọnde, Tuuzde, Fraịde, Satọde) are new.",
      "78 of the 181 are marked ⚑ because only one source had them, or we built the sentence from a pattern. They are on the list for a native speaker (section N of QUESTIONS-FOR-PARENT.md).",
      "Four older items that had '…' in them now use a real example (for example 'Aha m bụ Ada'), so they work in the typing and word-bank exercises.",
      "Left out on purpose: words nobody could confirm (for example fry, stir, pound and cut), a recipe, and the Section 4 review unit, because the Daily test already reviews."
    ] },
    { version: "1.4.0", date: "2026-11-10", changes: [
      "Sections 2 and 3 grow: 21 new units and 41 new lessons, with 298 new words and phrases.",
      "Section 2 (A1) adds 11 units: Asking Questions, Where Is It?, My Day, At Home, Jobs, Animals, Clothes, Describing Things, Opinions & Advice, Countries & Peoples and Linking Words.",
      "Section 3 (A1) adds 10 units: Telling the Time, The Past, The Future, Feelings, Describing People, Chatting with Friends (with surprise words like Hei! and Chai!), Cities & Towns, Nature, Sports, Music & Stories and Igboland.",
      "The past and future units explain the patterns (-rV ending, ga-) with sentences from the dictionary; the describing units explain that adjectives come after the noun.",
      "104 of the 298 are marked ⚑ because only one source had them or we built the sentence from a pattern. They are on the list for a native speaker to check (sections L and M of QUESTIONS-FOR-PARENT.md).",
      "Left out on purpose: politics, science, economy and current events, plus words nobody could confirm (for example the word for \"Don't!\", a trouser word, and several job names)."
    ] },
    { version: "1.3.0", date: "2026-11-10", changes: [
      "Section 1 grows: 4 new units, Eating Out, At the Market, At School and Getting Around, with 13 new lessons.",
      "3 new lessons in older units: welcomes and 'and you?' (Greetings), where you're from and where you live (Introducing Yourself), and husband, wife and in-laws (Family).",
      "115 new words and phrases. Many come from real dictionary examples (Nkọwa okwu) or from two sources that agree.",
      "36 of them are marked ⚑ because only one source had them. They are on the list for a native speaker to check.",
      "Small fix: 'Where are you from?' now uses the dotted ị, like the rest of the course."
    ] },
    { version: "1.2.0", date: "2026-11-10", changes: [
      "The course is now arranged into numbered Sections with CEFR levels (Intro, A1, A2, B1, B2), like Duolingo.",
      "Sections 1–3 hold everything so far; Section 4 (A2) is next, and Sections 5–8 are the long-term goal.",
      "Your progress is kept — no lessons were changed or removed."
    ] },
    { version: "1.1.0", date: "2026-11-10", changes: [
      "Checked everything against the Omniglot pages you saved (phrases + numbers, with corrections by native speakers).",
      "Fixed: zero is 'oroghoro' (efu also accepted); 'see you later' is 'Ka ọmesịa'; 'Kedụ' is spelled with a dot.",
      "Learned: Ụtụtụ ọma / Mgbede ọma are modern translations. Traditionally 'Ndeewo' or 'Daalụ' is the greeting all day, and 'Ị bọọla chi?' in the morning.",
      "Confirmed & un-flagged: Ị bọọla chi, Ka chi foo, nke mbụ, 'please speak slowly', 'I speak a little Igbo', 'how do you say…', 'I'm from…'.",
      "6 new lessons: Tones (àkwá / ákwà…), Thanks & good wishes, Speak to me in Igbo!, First/second & big numbers, Help & emergencies, Celebrations.",
      "New: speaking exercises 🎤. Record yourself and compare with a native speaker."
    ] },
    { version: "1.0.0", date: "2026-11-10", changes: [
      "First release: 11 sections, 35 lessons (alphabet, greetings, introductions, numbers, family, food, body, colours, time, verbs, everyday phrases).",
      "Checked against Nkọwa okwu dictionary: 9 (itolu), 100 (narị), blue (anụnụanụnụ), grandparents (nna ochie / nne ochie), yesterday (ụnyaahụ), bread (achịcha).",
      "Words still waiting for a native speaker are marked ⚑ — see QUESTIONS-FOR-PARENT.md."
    ] }
  ],

  sources: [
    { id: "wiki-alpha", name: "Wikipedia: Igbo alphabet (Ọnwụ orthography)", url: "https://en.wikipedia.org/wiki/Igbo_alphabet", note: "36 letters, IPA values. Free." },
    { id: "nkowaokwu", name: "Nkọwa okwu / IgboAPI dictionary", url: "https://nkowaokwu.com", note: "Free online Igbo–English dictionary with native-speaker audio and dialect variants. Best place to HEAR words." },
    { id: "elias", name: "Harvard ELIAS — Beginning Igbo", url: "https://elias.fas.harvard.edu/languages/igbo/beginning", note: "Free university course: greetings, family, days/weeks/months, grammar notes." },
    { id: "peace-corps", name: "Peace Corps Igbo (Welmers, 1964) — ERIC ED233567", url: "https://eric.ed.gov/?id=ED233567", note: "Free public-domain 12-lesson course. Older spelling in places." },
    { id: "fsi", name: "FSI Igbo Basic Course (public domain)", url: "https://www.fsi-language-courses.org/fsi-igbo-language-course/", note: "US government course, free. Older orthography." },
    { id: "igbostudy", name: "IgboStudy — free beginner course & blog", url: "https://www.igbostudy.com", note: "Free 1-hour beginner audio/video course and articles." },
    { id: "wiki-cal", name: "Wikipedia: Igbo calendar", url: "https://en.wikipedia.org/wiki/Igbo_calendar", note: "Market days Eke, Orie, Afọ, Nkwọ." },
    { id: "omniglot", name: "Omniglot: Igbo numbers & phrases", url: "https://www.omniglot.com/language/phrases/igbo.php", note: "Free phrase & number lists (open in a normal browser)." },
    { id: "wikivoyage", name: "Wikivoyage: Igbo phrasebook", url: "https://en.wikivoyage.org/wiki/Igbo_phrasebook", note: "Free travel phrasebook (CC BY-SA). Spelling and tones are inconsistent, so only used with a second source or a dictionary check." },
    { id: "igboguide", name: "Igboguide.org: Igbo conversations", url: "https://www.igboguide.org/HT-igboconversation.htm", note: "Free sample conversations (market, school, travel). Older spelling." },
    { id: "ilanguages", name: "ilanguages.org: Igbo phrases", url: "https://www.ilanguages.org/igbo_phrases.php", note: "Free phrase list." },
    { id: "igbofocus", name: "IgboFocus: Learn Igbo 2 (archived)", url: "https://web.archive.org/web/2019/http://www.igbofocus.co.uk/html/learn_igbo_2.html", note: "Free lessons including price talk. Saved from the Internet Archive." },
    { id: "igbolearn", name: "IgboLearn blog: Igbo phrases for visiting Nigeria", url: "https://blog.igbolearn.com/igbo-phrases-visiting-nigeria/", note: "Free blog article with shopping and travel phrases." },
    { id: "nzukomba", name: "Nzukomba: 20 Igbo phrases for shopping", url: "https://nzukomba.com/culture/the-20-best-phrases-in-igbo-language-for-shopping/", note: "Free blog article. Single source, so used carefully." },
    { id: "languagesandnumbers", name: "Languages and Numbers: Counting in Igbo", url: "https://www.languagesandnumbers.com/how-to-count-in-igbo/en/ibo/", note: "Number-building rules." },
    { id: "ezinaulo", name: "Ezinaulo: Igbo vocabulary lessons", url: "https://ezinaulo.com/igbo-lessons/", note: "Free community word lists (prepositions, house, animals, nature). Word lists only, so used with a second source." },
    { id: "bu200", name: "Boston University 200-word Igbo: clothing", url: "https://www.bu.edu/200word/igbo/clothing/", note: "Free university word table. Used only as a second opinion." },
    { id: "latinum", name: "Latinum Institute: Igbo lesson 8 (verbs, past and future)", url: "https://latinum.substack.com/p/lesson-8-igbo-a-latinum-institute", note: "Free lesson. Single source for some tense examples, so they are marked ⚑." },
    { id: "ucla1981", name: "UCLA Phonetics Archive: Igbo conversation (1981)", url: "http://archive.phonetics.ucla.edu/Language/IBO/ibo_conversation_1981_01.html", note: "Word list with recordings; used for a pattern only." },
    { id: "nkenne", name: "NKENNE: The importance of kola nut in Igbo rituals", url: "https://www.nkenne.com/blog/the-importance-of-kola-nut-in-igbo-rituals", note: "Blog. Single source for the kola phrases, so they are marked ⚑." },
    { id: "ifont", name: "ifont blog: Igbo proverb #6", url: "https://ifont.blogspot.com/2011/12/proverb-6.html", note: "Blog post on the kite-and-eagle proverb with its meaning." },
    { id: "zikoko", name: "Zikoko: 15 Igbo proverbs and their meanings", url: "https://www.zikoko.com/life/15-igbo-proverbs-and-their-meanings/", note: "Free article. Its Igbo has no dots, so we added them; proverbs only from here are marked ⚑." },
    { id: "legit", name: "Legit.ng: Igbo proverbs and their meaning", url: "https://www.legit.ng/1087216-igbo-proverbs-meaning.html", note: "Free article. Some entries are garbled, so only clear ones are used and marked ⚑." },
    { id: "meigen", name: "Meigen School: 25 Igbo proverbs", url: "https://meigen-school.pages.dev/en/proverbs/igbo-proverbs/", note: "Low-reliability list. Anything only from here is marked ⚑." },
    { id: "wiki-odinani", name: "Wikipedia: Odinani", url: "https://en.wikipedia.org/wiki/Odinani", note: "Overview of traditional Igbo belief. Used for background and a few words, marked ⚑." },
    { id: "wiki-nri", name: "Wikipedia: Kingdom of Nri", url: "https://en.wikipedia.org/wiki/Kingdom_of_Nri", note: "History of Nri and Igbo-Ukwu. Facts only; the Igbo sentences are ours, marked ⚑." },
    { id: "wiki-mbeku", name: "Wikipedia: Mbeku (tortoise tales)", url: "https://en.wikipedia.org/wiki/Mbeku", note: "Summary of tortoise folktales. The Igbo sentences are ours, marked ⚑." },
    { id: "wiki-marriage", name: "Wikipedia: Traditional marriage in Igbo culture", url: "https://en.wikipedia.org/wiki/Traditional_marriage_in_Igbo_culture", note: "Stage names of a traditional wedding." },
    { id: "nollysenti", name: "Nollysenti: Igbo film review dataset", url: "https://huggingface.co/datasets/Davlan/nollysenti/blob/main/ig/train.tsv", note: "Real Igbo film reviews. Used only for 'ihe nkiri' (film); single source, so marked ⚑." },
    { id: "igstyle", name: "Igbo style guide (community, GitHub)", url: "https://www.github.com/bobreyes/styleguides/blob/master/docs/ig/README.md", note: "Technology terms such as ịntanetị. Not an official body, so marked ⚑." },
    { id: "usefulphrases", name: "Useful phrases in Igbo (saved page)", url: "sources/converted/useful-phrases-in-igbo.md", note: "A saved phrase list. Single source, so marked ⚑." },
    { id: "umuigbo", name: "umuigbo.com: Child naming ceremony in Igbo culture", url: "https://umuigbo.com/child-naming-ceremony-in-igbo-culture/igbo-culture", note: "Describes the naming ceremony; single source, so marked ⚑." }
  ],

  // Stages (shown as numbered Sections on the Learn screen, with CEFR level).
  // Every section id appears in exactly one stage's `units`. When you add a new
  // unit (section), also add its id to a stage's `units`. Empty stages show as "coming next".
  stages: [
    { id: "s1", number: 1, cefr: "Intro", title: "Essential phrases", focus: "Start with essential phrases and simple grammar.", units: ["alphabet","greetings","intro","family","eatingout","market","school","travel"] },
    { id: "s2", number: 2, cefr: "A1", title: "Basic interactions", focus: "Words, phrases and grammar for basic interactions.", units: ["food","numbers","colours","verbs","questions","whereis","routine","home","jobs","animals","clothes","describe","opinions","peoples","linking"] },
    { id: "s3", number: 3, cefr: "A1", title: "Basic conversations", focus: "Foundational sentences for basic conversations.", units: ["time","body","everyday","clock","past","future","feelings","people","chat","cities","nature","arts","igboland"] },
    { id: "s4", number: 4, cefr: "A2", title: "Everyday topics", focus: "Use sentences in conversations about everyday topics.", units: ["ilu","discuss","omenala","ceremonies","beliefs","weather","cooking","doctor","plans"] },
    { id: "s5", number: 5, cefr: "B1", title: "Wider topics", focus: "Form sentences about a wider variety of topics.", units: ["memories","hopes","career","exams","injuries","relations","chores","directions","media","tech","community"] },
    { id: "s6", number: 6, cefr: "B1", title: "Complex ideas", focus: "Communicate more complex ideas in conversations.", units: [] },
    { id: "s7", number: 7, cefr: "B2", title: "Feelings & opinions", focus: "Talk about abstract feelings and opinions.", units: [] },
    { id: "s8", number: 8, cefr: "B2", title: "Confident conversation", focus: "Converse confidently, even about specialised topics.", units: [] }
  ],

  sections: [
    /* ───────────────────────── 1. ALPHABET ───────────────────────── */
    {
      id: "alphabet",
      title: "The Alphabet",
      igTitle: "Mkpụrụ Edemede (Abịdịị)",
      color: "#157a43",
      description: "36 letters: 8 vowels and 28 consonants, including 9 double-letters (digraphs).",
      lessons: [
        {
          id: "alpha-vowels",
          title: "The 8 vowels",
          type: "letters",
          tip: "Igbo has 8 vowels. The dotted ones (ị ọ ụ) are 'open' versions of i, o, u. The dot changes the meaning of the word, so never skip it!",
          items: [
            { ig: "a", en: "vowel 'a' — like the a in 'father'", ex: "ala — land, ground", src: "wiki-alpha" },
            { ig: "e", en: "vowel 'e' — like the e in 'bed' (or 'ay' without the glide)", ex: "ego — money", src: "wiki-alpha" },
            { ig: "i", en: "vowel 'i' — like the ee in 'see'", ex: "isi — head", src: "wiki-alpha" },
            { ig: "ị", en: "vowel 'ị' — like the i in 'sit'", ex: "ịnyịnya — horse", src: "wiki-alpha" },
            { ig: "o", en: "vowel 'o' — like the o in 'go' (no glide)", ex: "oji — kola nut", src: "wiki-alpha" },
            { ig: "ọ", en: "vowel 'ọ' — like the o in 'hot' / aw in 'law'", ex: "ọkụ — fire", src: "wiki-alpha" },
            { ig: "u", en: "vowel 'u' — like the oo in 'food'", ex: "ugo — eagle", src: "wiki-alpha" },
            { ig: "ụ", en: "vowel 'ụ' — like the u in 'put' / oo in 'book'", ex: "ụlọ — house", src: "wiki-alpha" }
          ]
        },
        {
          id: "alpha-consonants-1",
          title: "Simple consonants (b–n)",
          type: "letters",
          tip: "Most single consonants sound close to English. Igbo has no C (only in 'ch'), Q or X.",
          items: [
            { ig: "b", en: "consonant 'b' — as in 'bed'", ex: "bịa — come!", src: "wiki-alpha" },
            { ig: "d", en: "consonant 'd' — as in 'dog'", ex: "di — husband", src: "wiki-alpha" },
            { ig: "f", en: "consonant 'f' — as in 'fan'", ex: "efere — plate", src: "wiki-alpha" },
            { ig: "g", en: "consonant 'g' — hard g as in 'go'", ex: "gaa — go!", src: "wiki-alpha" },
            { ig: "h", en: "consonant 'h' — a breathy h as in 'hat'", ex: "hụ — see", src: "wiki-alpha" },
            { ig: "j", en: "consonant 'j' — as in 'jam'", ex: "ji — yam", src: "wiki-alpha" },
            { ig: "k", en: "consonant 'k' — as in 'kite'", ex: "akụkọ — story", src: "wiki-alpha" },
            { ig: "l", en: "consonant 'l' — as in 'lip'", ex: "ala — land", src: "wiki-alpha" },
            { ig: "m", en: "consonant 'm' — as in 'map'", ex: "mmiri — water", src: "wiki-alpha" },
            { ig: "n", en: "consonant 'n' — as in 'net'", ex: "nne — mother", src: "wiki-alpha" }
          ]
        },
        {
          id: "alpha-consonants-2",
          title: "Simple consonants (p–z)",
          type: "letters",
          tip: "R is a light tap of the tongue (like the tt in American 'butter'). Y is always the y in 'yes'.",
          items: [
            { ig: "p", en: "consonant 'p' — as in 'pen'", ex: "pụọ — go out!", src: "wiki-alpha" },
            { ig: "r", en: "consonant 'r' — a light tapped r", ex: "rie — eat!", src: "wiki-alpha" },
            { ig: "s", en: "consonant 's' — as in 'sun'", ex: "ose — pepper", src: "wiki-alpha" },
            { ig: "t", en: "consonant 't' — as in 'top'", ex: "taa — today", src: "wiki-alpha" },
            { ig: "v", en: "consonant 'v' — as in 'van'", ex: "vụọ — carry!", unsure: true, src: "wiki-alpha" },
            { ig: "w", en: "consonant 'w' — as in 'wet'", ex: "weta — bring!", src: "wiki-alpha" },
            { ig: "y", en: "consonant 'y' — as in 'yes'", ex: "ya — him / her / it", src: "wiki-alpha" },
            { ig: "z", en: "consonant 'z' — as in 'zoo'", ex: "zụta — buy!", src: "wiki-alpha" }
          ]
        },
        {
          id: "alpha-digraphs",
          title: "Double letters & ṅ",
          type: "letters",
          tip: "These 'double letters' count as ONE letter each in Igbo. gb and kp are made by closing your lips and the back of your tongue at the same time — ask a native speaker to model them, or listen on nkowaokwu.com.",
          items: [
            { ig: "ch", en: "letter 'ch' — as in 'church'", ex: "chi — personal spirit; day", src: "wiki-alpha" },
            { ig: "gb", en: "letter 'gb' — g and b said together at once", ex: "egbe — kite (bird); gun", src: "wiki-alpha" },
            { ig: "gh", en: "letter 'gh' — a soft, gargled g (like Spanish 'lago')", ex: "ghọta — understand", src: "wiki-alpha" },
            { ig: "gw", en: "letter 'gw' — like 'gu' in 'Guam'", ex: "gwa — tell", src: "wiki-alpha" },
            { ig: "kp", en: "letter 'kp' — k and p said together at once", ex: "akpa — bag", src: "wiki-alpha" },
            { ig: "kw", en: "letter 'kw' — like 'qu' in 'quick'", ex: "akwụkwọ — book, paper", src: "wiki-alpha" },
            { ig: "nw", en: "letter 'nw' — n and w blended together", ex: "nwa — child", src: "wiki-alpha" },
            { ig: "ny", en: "letter 'ny' — like 'ny' in 'canyon'", ex: "nye — give", src: "wiki-alpha" },
            { ig: "sh", en: "letter 'sh' — as in 'ship'", ex: "(rare letter; used in some dialect words)", unsure: true, src: "wiki-alpha" },
            { ig: "ṅ", en: "letter 'ṅ' — the 'ng' sound in 'sing'", ex: "ṅụọ — drink!", src: "wiki-alpha" }
          ]
        },
        {
          id: "alpha-tones",
          title: "Tones: same letters, new word",
          tip: "Igbo is a tonal language: pitch changes meaning. Writers sometimes mark tones: grave accent (à) = low tone, acute accent (á) = high tone. Most everyday writing leaves them out, and you never need to type them in this app. Listen on Nkọwa okwu to hear the difference!",
          items: [
            { ig: "àkwá", en: "egg", note: "low-high", unsure: true, src: "omniglot" },
            { ig: "ákwá", en: "crying / weeping", note: "high-high", unsure: true, src: "omniglot" },
            { ig: "ákwà", en: "cloth / fabric", note: "high-low", unsure: true, src: "omniglot" },
            { ig: "àkwà", en: "bed (also bridge)", note: "low-low", unsure: true, src: "omniglot" },
            { ig: "ézé", en: "tooth", note: "Compare èzè = king", unsure: true, src: "omniglot" },
            { ig: "èzè", en: "king", unsure: true, src: "omniglot" }
          ]
        }
      ]
    },

    /* ───────────────────────── 2. GREETINGS ───────────────────────── */
    {
      id: "greetings",
      title: "Greetings",
      igTitle: "Ekele",
      color: "#0b6fa4",
      description: "Say hello, thank you, please, sorry and goodbye.",
      lessons: [
        {
          id: "greet-hello",
          title: "Hello & how are you",
          tip: "'Ndeewo' (or 'Ndewo') is the traditional hello for any time of day — morning, afternoon or evening. 'Kedụ' is casual — great with friends.",
          items: [
            { ig: "Ndewo", en: "Hello (respectful)", alt: ["Ndeewo"], note: "Dictionary spelling is 'ndeewo'; 'ndewo' is the common everyday spelling.", src: "nkowaokwu" },
            { ig: "Kedụ", en: "Hi / How are you? (casual)", alt: ["Kedu"], src: "omniglot" },
            { ig: "Kedụ ka ị mere?", en: "How are you doing?", alt: ["Kedu ka ị mere?", "Kedu ka i mere?", "Kedụ ka ọ dị?"], src: "omniglot" },
            { ig: "Ọ dị mma", en: "It is fine / I'm fine", src: "elias" },
            { ig: "Adị m mma", en: "I am fine", alt: ["Ọ dị m mma", "A dị mụ mma"], src: "omniglot" },
            { ig: "Daalụ", en: "Thank you", alt: ["Dalụ"], note: "Also used as a greeting during the day.", src: "elias" },
            { ig: "Nnọọ", en: "Welcome", note: "Said to someone arriving. Often 'Nnọọ!' when a guest comes in.", src: "elias" }
          ]
        },
        {
          id: "greet-times",
          title: "Morning, evening, night",
          tip: "The traditional morning greeting is 'Ị bọọla chi?' (Did your day dawn well?). 'Ụtụtụ ọma', 'Mgbede ọma' etc. are modern word-for-word translations of English. People understand them, but during the day 'Ndeewo' or 'Daalụ' is the traditional greeting.",
          items: [
            { ig: "Ụtụtụ ọma", en: "Good morning", src: "elias" },
            { ig: "Ị bọọla chi?", en: "Good morning (lit. 'did your day dawn?')", alt: ["I bọọla chi?", "Ị saala chi?"], src: "omniglot" },
            { ig: "Ehihie ọma", en: "Good afternoon (modern)", note: "Traditionally people just say 'Ndeewo' in the afternoon." },
            { ig: "Mgbede ọma", en: "Good evening (modern)", note: "Traditionally people just say 'Ndeewo' in the evening.", src: "elias" },
            { ig: "Ka chi foo", en: "Good night (lit. 'till dawn')", alt: ["Ka chi fo"], note: "The reply is 'Ka ọ bọọ'.", src: "omniglot" },
            { ig: "Ka ọ dị", en: "Goodbye", src: "elias" },
            { ig: "Ka ọmesịa", en: "See you later / Goodbye", alt: ["Ka ọ mesịa", "Ka emesịa"], src: "omniglot" },
            { ig: "Ka ọ dị echi", en: "See you tomorrow", alt: ["Ka ọ dị, ruo echi"], src: "elias" }
          ]
        },
        {
          id: "greet-polite",
          title: "Polite words",
          tip: "'Ndo' is used for 'sorry' — both 'I apologise' and 'sorry that happened to you'.",
          items: [
            { ig: "Ee", en: "Yes" },
            { ig: "Mba", en: "No" },
            { ig: "Biko", en: "Please" },
            { ig: "Ndo", en: "Sorry" },
            { ig: "Daalụ nke ukwuu", en: "Thank you very much", unsure: true },
            { ig: "Ọ dị mma", en: "Okay / It's good" },
            { ig: "Chineke gọzie gị", en: "God bless you" },
            { ig: "Ka Chineke nọnyere gị", en: "May God be with you", unsure: true }
          ]
        },
        {
          id: "greet-thanks",
          title: "Thanks & good wishes",
          tip: "There are two ways to say thank you: 'Daalụ' and 'Ị meela' (lit. 'you have done well'). The reply is 'Nsogbu adịghị': no problem.",
          items: [
            { ig: "Ị meela", en: "Thank you (lit. 'you have done well')", alt: ["I meela"], src: "omniglot" },
            { ig: "Nsogbu adịghị", en: "No problem / You're welcome", alt: ["Nsogbu adịghi"], src: "omniglot" },
            { ig: "Nwee chi ọma", en: "Good luck! (lit. 'have a good chi')", src: "omniglot" },
            { ig: "Ya gaziere gị", en: "Good luck / May it go well for you", src: "omniglot" },
            { ig: "Ijeọma", en: "Have a good journey!", alt: ["Ije ọma"], src: "omniglot" },
            { ig: "Rie nke ọma", en: "Enjoy your meal!", src: "omniglot" },
            { ig: "Gbakee ngwa ngwa", en: "Get well soon", src: "omniglot" },
            { ig: "Ị nwaka!", en: "Well done! / Congratulations!", alt: ["I nwaka"], src: "omniglot" }
          ]
        },
        {
          id: "greet-welcome",
          title: "Welcome & and you?",
          tip: "Welcome a guest with 'Nnọọ!' and invite them in with 'Bata!'. Reply to 'how are you' with 'Adị m mma' and then turn it around: 'And you?'.",
          items: [
            { ig: "Bata n'ime ụlọ", en: "Come into the house", alt: ["Bata", "Bata n'ime ụlọ!"], note: "The dictionary example is 'Bata n'ime ụlọ! Nnọọ!' (Come into the house! Welcome!).", src: "nkowaokwu" },
            { ig: "Nnọọ n'ime obodo anyị", en: "Welcome to our village", alt: ["Nnọọ n'obodo anyị"], note: "From a conversation on igboguide.org.", src: "igboguide" },
            { ig: "Ndewo, kedụ ka ị mere?", en: "Hello, how are you?", alt: ["Ndeewo, kedụ ka ị mere?", "Ndewo, kedu ka ị mere?"], src: "omniglot" },
            { ig: "Adị m mma, daalụ", en: "I'm fine, thank you", alt: ["Ọ dị m mma, daalụ", "Adi m mma, daalụ"], src: "omniglot" },
            { ig: "Ị dịkwa mma?", en: "Are you well too?", alt: ["I dịkwa mma?"], unsure: true, src: "ilanguages" },
            { ig: "G'ịnwa kwanụ?", en: "And you?", alt: ["Gịnwa kwanụ?", "G'inwa kwanu?", "Gị kwanụ?", "Gi kwanu?"], unsure: true, src: "ilanguages" },
            { ig: "Ya gaziere gị taa", en: "Have a nice day", note: "'taa' = today. Compare 'Ya gaziere gị' (good luck).", src: "omniglot" }
          ]
        }
      ]
    },

    /* ───────────────────────── 3. INTRODUCTIONS ───────────────────────── */
    {
      id: "intro",
      title: "Introducing Yourself",
      igTitle: "Ịkọwa Onwe Gị",
      color: "#6d4bc4",
      description: "Your name, where you're from, and the words for I, you, we, they.",
      lessons: [
        {
          id: "intro-pronouns",
          title: "I, you, we, they",
          tip: "Igbo pronouns change a little depending on where they sit in the sentence. 'm' = I/me, 'ị/i' = you (subject), 'gị' = you (object/your).",
          items: [
            { ig: "m", en: "I / me / my", note: "e.g. 'Aha m' = my name", alt: ["mụ"] },
            { ig: "gị", en: "you / your (one person)", note: "Subject form is 'ị' or 'i': 'Ị bịala' = you have come." },
            { ig: "ya", en: "him / her / it / his", note: "Subject form is 'ọ' or 'o': 'Ọ bịara' = he/she came. Igbo has no he/she difference!" },
            { ig: "anyị", en: "we / us / our" },
            { ig: "unu", en: "you (plural) / your (plural)" },
            { ig: "ha", en: "they / them / their" }
          ]
        },
        {
          id: "intro-name",
          title: "What's your name?",
          tip: "'bụ' means 'is/am/are'. 'Aha m bụ Ada' = My name is Ada.",
          items: [
            { ig: "aha", en: "name" },
            { ig: "Kedụ aha gị?", en: "What is your name?", alt: ["Kedu aha gị?", "Kedụ afa gị?"], src: "omniglot" },
            { ig: "Aha m bụ Ada", en: "My name is Ada", alt: ["Aha m bu Ada"], note: "Swap 'Ada' for your own name.", src: "elias" },
            { ig: "Ebee ka ị si?", en: "Where are you from?", alt: ["Ebee ka i si?", "Onye ebee ka ị bụ?"], src: "elias" },
            { ig: "E si m England", en: "I am from England", alt: ["Esi m England"], note: "Or 'A bụ m onye England': I am a person of England.", src: "omniglot" },
            { ig: "A bụ m onye Igbo", en: "I am Igbo (an Igbo person)" },
            { ig: "Ọ dị m ụtọ ịhụ gị", en: "Nice to meet you", note: "Igbo speakers often just say 'Nnọọ' (welcome) or 'Daalụ' here.", unsure: true }
          ]
        },
        {
          id: "intro-learning",
          title: "I'm learning Igbo",
          tip: "These phrases are your survival kit when talking to native speakers!",
          items: [
            { ig: "Ana m amụ Igbo", en: "I am learning Igbo" },
            { ig: "Ị na-asụ Igbo?", en: "Do you speak Igbo?", alt: ["I na-asụ Igbo?"] },
            { ig: "Ana m asụ ntakịrị Igbo", en: "I speak a little Igbo", alt: ["A na m asụ ntakịrị Igbo", "A na m asụ obele Igbo", "Ana m asụ obere Igbo"], src: "omniglot" },
            { ig: "Aghọtaghị m", en: "I don't understand" },
            { ig: "Aghọtara m", en: "I understand" },
            { ig: "Biko kwuo ya ọzọ", en: "Please say it again", alt: ["Biko kwuo ihe ahụ ọzọ"], src: "omniglot" },
            { ig: "Biko jiri nwayọ kwuo okwu", en: "Please speak slowly", alt: ["Biko jiri nwayọọ kwuo okwu", "Biko jiri nwayọọ kwuo"], src: "omniglot" },
            { ig: "Gịnị ka a na-akpọ 'water' n'Igbo?", en: "How do you say 'water' in Igbo? (lit. what is 'water' called)", alt: ["Kedụ ka e si ekwu 'water' n'asụsụ Igbo?"], note: "Swap 'water' for any English word.", src: "omniglot" }
          ]
        },
        {
          id: "intro-age",
          title: "Age & people",
          tip: "'onye' means 'person'. 'nwoke' = man, 'nwaanyị' = woman.",
          items: [
            { ig: "onye", en: "person" },
            { ig: "nwoke", en: "man / male" },
            { ig: "nwaanyị", en: "woman / female", alt: ["nwanyị"] },
            { ig: "enyi", en: "friend", note: "Careful — 'enyi' also means elephant! Tone tells them apart." },
            { ig: "Afọ ole ka ị dị?", en: "How old are you?", unsure: true },
            { ig: "Adị m afọ iri abụọ", en: "I am twenty years old", unsure: true }
          ]
        },
        {
          id: "intro-speak-to-me",
          title: "Speak to me in Igbo!",
          tip: "Ask people to help you practise: 'Sụọrọ m Igbo' = speak Igbo to me.",
          items: [
            { ig: "Sụọrọ m Igbo", en: "Speak Igbo to me", alt: ["Gwa m okwu n'Igbo"], src: "omniglot" },
            { ig: "Ị na-asụ Bekee?", en: "Do you speak English?", alt: ["I na-asụ Bekee?"], src: "omniglot" },
            { ig: "Amaghị m", en: "I don't know", src: "omniglot" },
            { ig: "Biko detuo ya", en: "Please write it down", src: "omniglot" },
            { ig: "Biko chere", en: "Excuse me (to get attention; lit. 'please wait')", src: "omniglot" },
            { ig: "Gbaghara m", en: "Forgive me / Pardon me", src: "omniglot" },
            { ig: "Anya ịị", en: "Long time no see!", note: "Ask your parent how your family says it!", unsure: true, src: "omniglot" }
          ]
        },
        {
          id: "intro-from",
          title: "Where are you from?",
          tip: "Answer 'Kedụ ebe ị si?' with 'E si m …' (I come from …) or say what kind of person you are: 'A bụ m onye …'.",
          items: [
            { ig: "Kedụ ebe ị si?", en: "Which place do you come from?", alt: ["Kedu ebe ị si?", "Olee ebe ị si?", "Olee ebe i si?"], src: "ilanguages" },
            { ig: "E si m Naịjirịa", en: "I am from Nigeria", alt: ["Esi m Naịjirịa", "E si m Naịjịrịa", "E si m Nigeria"], unsure: true, src: "ilanguages" },
            { ig: "Kedụ ebe ị bi?", en: "Where do you live?", alt: ["Kedu ebe ị bi?", "Olee ebe ị bi?", "Olee ebe i bi?"], src: "ilanguages" },
            { ig: "Ebi m n'Enugu", en: "I live in Enugu", alt: ["Ebi m na Enugu", "Ebi m n'Enugụ"], note: "Swap in any place: 'Ebi m na London'. Some writers use 'na' instead of n'.", unsure: true, src: "igboguide" },
            { ig: "A bụ m onye Naịjirịa", en: "I am Nigerian", alt: ["A bụ m onye Naịjịrịa", "Abụ m onye Naịjirịa"], note: "Same pattern as 'A bụ m onye Igbo'.", unsure: true, src: "ilanguages" },
            { ig: "A bụ m onye Britain", en: "I am British", alt: ["Abụ m onye Britain", "A bụ m onye Briten"], unsure: true, src: "ilanguages" },
            { ig: "Ana m asụ Bekee", en: "I speak English", alt: ["A na m asụ Bekee"], src: "wikivoyage" },
            { ig: "Ọ bụ onye Igbo", en: "He / she is an Igbo person", alt: ["O bụ onye Igbo"], note: "'ọ' is the subject word for he / she / it (the app's 'ya' is the object form). Igbo has no he/she difference.", src: "wikivoyage" }
          ]
        }
      ]
    },

    /* ───────────────────────── 5. FAMILY ───────────────────────── */
    {
      id: "family",
      title: "Family",
      igTitle: "Ezinaụlọ",
      color: "#a8336f",
      description: "Mum, dad, brothers, sisters, grandparents — and talking about them.",
      lessons: [
        {
          id: "fam-core",
          title: "Mum, dad & siblings",
          tip: "'nwanne' means sibling (literally 'child of mother'). Add nwoke (male) or nwaanyị (female) to say brother or sister.",
          items: [
            { ig: "nne", en: "mother", src: "elias" },
            { ig: "nna", en: "father", src: "elias" },
            { ig: "nwanne", en: "sibling (brother or sister)", src: "elias" },
            { ig: "nwanne nwoke", en: "brother", src: "elias" },
            { ig: "nwanne nwaanyị", en: "sister", alt: ["nwanne nwanyị"], src: "elias" },
            { ig: "nwa", en: "child", src: "elias" },
            { ig: "ụmụaka", en: "children" },
            { ig: "ezinaụlọ", en: "family (household)", src: "elias" }
          ]
        },
        {
          id: "fam-extended",
          title: "Grandparents & more",
          tip: "Igbo has no single words for cousin, uncle or aunt — you describe the relationship, e.g. 'nwanne nna m' (my father's sibling).",
          items: [
            { ig: "nne ochie", en: "grandmother", alt: ["nneochie", "nnennukwu", "nne nne"], note: "Also 'nnennukwu'. Ask your family which one they use!", src: "nkowaokwu" },
            { ig: "nna ochie", en: "grandfather", alt: ["nnaochie", "nnoochie", "nnannukwu", "nna nna"], note: "Also 'nnannukwu'. Ask your family which one they use!", src: "nkowaokwu" },
            { ig: "di", en: "husband" },
            { ig: "nwunye", en: "wife" },
            { ig: "nwa nwoke", en: "son / boy" },
            { ig: "nwa nwaanyị", en: "daughter / girl", alt: ["nwa nwanyị"] },
            { ig: "nwanne nna m", en: "my father's sibling (uncle/aunt)", src: "elias" },
            { ig: "ụmụnna", en: "extended family / kindred", src: "elias" }
          ]
        },
        {
          id: "fam-sentences",
          title: "Talking about family",
          tip: "'Nke a bụ…' = 'This is…'. 'Enwere m…' = 'I have…'.",
          items: [
            { ig: "Nke a bụ nne m", en: "This is my mother" },
            { ig: "Nke a bụ nna m", en: "This is my father" },
            { ig: "Enwere m nwanne nwoke abụọ", en: "I have two brothers", unsure: true },
            { ig: "Ole ụmụnne ị nwere?", en: "How many siblings do you have?", unsure: true },
            { ig: "Ahụrụ m nne m n'anya", en: "I love my mother" }
          ]
        },
        {
          id: "fam-more",
          title: "Husband, wife & in-laws",
          tip: "Add 'm' (my) after a family word: 'di m' = my husband, 'nwunye m' = my wife. Words for uncle, aunt and in-laws came from one phrasebook only, so they are flagged.",
          items: [
            { ig: "Nke a bụ di m", en: "This is my husband" },
            { ig: "Nke a bụ nwunye m", en: "This is my wife" },
            { ig: "nne m na nna m", en: "my mother and my father", alt: ["nne na nna m"] },
            { ig: "okene", en: "cousin", alt: ["okenē"], note: "Dictionary entry: child of an aunt or uncle. Another book says 'nwa nwanne nna m'.", unsure: true, src: "nkowaokwu" },
            { ig: "dede", en: "uncle", alt: ["dêdè", "dẹdẹ"], unsure: true, src: "wikivoyage" },
            { ig: "anti", en: "aunt", alt: ["aunty", "àntí"], note: "Borrowed from English 'aunty'; very common in Nigeria.", unsure: true, src: "wikivoyage" },
            { ig: "nne di", en: "mother-in-law (husband's mother)", alt: ["nne nwunye"], unsure: true, src: "wikivoyage" },
            { ig: "nna di", en: "father-in-law (husband's father)", alt: ["nna nwunye"], unsure: true, src: "wikivoyage" },
            { ig: "nwa nwa", en: "grandchild", unsure: true, src: "wikivoyage" }
          ]
        }
      ]
    },

    /* ───────────────────────── EATING OUT (Section 1) ───────────────────────── */
    {
      id: "eatingout",
      title: "Eating Out",
      igTitle: "Iri Nri",
      color: "#0f7a72",
      description: "Order at a buka, ask what's on offer, say it's tasty, and pay.",
      lessons: [
        {
          id: "eat-order",
          title: "Ordering food & drink",
          tip: "Start with 'Biko' (please). The pattern is 'Nye m …' (give me …) or 'Achọrọ m …' (I want …).",
          items: [
            { ig: "Biko, nye m mmiri", en: "Please give me water", alt: ["Nye m mmiri, biko", "Nye m mmiri"], src: "igboguide" },
            { ig: "Nye m ofe", en: "Give me soup", alt: ["Biko, nye m ofe"], src: "igboguide" },
            { ig: "Achọrọ m ọkụkọ", en: "I want chicken", alt: ["Achọrọ m ofe ọkụkọ"], note: "Same pattern as 'Achọrọ m mmiri'.", src: "wikivoyage" },
            { ig: "Ị nwere mmiri?", en: "Do you have water?", alt: ["I nwere mmiri?", "Unu nwere mmiri?", "Unu enwere mmiri?"], note: "To more than one person (or a shop) say 'Unu nwere …?'.", src: "igboguide" },
            { ig: "Kedụ mmanya ị chọrọ?", en: "What drink do you want?", alt: ["Kedu mmanya ị chọrọ?"], src: "nkowaokwu" },
            { ig: "Ị chọrọ anụ?", en: "Do you want meat?", alt: ["I chọrọ anụ?"], src: "igboguide" }
          ]
        },
        {
          id: "eat-table",
          title: "Plates, cups & meals",
          tip: "'Nri' (food) joins with the time of day to name the meals: nri ụtụtụ = morning food = breakfast.",
          items: [
            { ig: "efere", en: "plate / dish", alt: ["èfèrè"], note: "Dictionary: a shallow dish food is eaten from.", src: "nkowaokwu" },
            { ig: "iko", en: "cup", note: "Watch the tone: 'ìko' (cup) is not 'íkó'.", src: "nkowaokwu" },
            { ig: "ngaji", en: "spoon", src: "nkowaokwu" },
            { ig: "nri ụtụtụ", en: "breakfast", unsure: true, src: "wikivoyage" },
            { ig: "nri ehihie", en: "lunch", unsure: true, src: "wikivoyage" },
            { ig: "nri abalị", en: "dinner / supper", unsure: true, src: "wikivoyage" },
            { ig: "mmanya nkwụ", en: "palm wine", alt: ["mmanya ngwọ"], note: "A fresh drink tapped from the oil-palm tree.", unsure: true, src: "wikivoyage" }
          ]
        },
        {
          id: "eat-pay",
          title: "Tasty! Now pay",
          tip: "To say food tastes good, use 'dị ụtọ' (is sweet / tasty). When you pay, 'ụgwọ' is the bill or fee.",
          items: [
            { ig: "Nri a dị ụtọ", en: "This food is tasty", alt: ["Nri a dị ụtọ nke ukwuu"], note: "This is the exact example in the Nkọwa okwu dictionary.", src: "nkowaokwu" },
            { ig: "Ọ dị ụtọ", en: "It's tasty (it was tasty)", alt: ["O di ụtọ"], src: "wikivoyage" },
            { ig: "ụgwọ", en: "bill / fee / payment", note: "Also means a debt.", src: "nkowaokwu" },
            { ig: "Ego ole ka m ji gị?", en: "How much do I owe you?", alt: ["Ego ole ka m ji gi?"], unsure: true, src: "igboguide" },
            { ig: "Ka m kwụọ ego", en: "Let me pay", alt: ["Ka m kwụọ ụgwọ", "Ka m kwụa ego"], note: "'kwụọ' = pay.", unsure: true, src: "igboguide" },
            { ig: "Were ego", en: "Take the money", alt: ["Were ego ahụ"], src: "igboguide" }
          ]
        },
        {
          id: "eat-buka",
          title: "At the buka",
          tip: "A 'buka' is a simple local restaurant. Seller and customer lines, one after another.",
          items: [
            { ig: "Ị chọrọ mmiri?", en: "Do you want water?", alt: ["I chọrọ mmiri?"] },
            { ig: "Ee, achọrọ m anụ", en: "Yes, I want meat", alt: ["Ee, achọrọ m anụ."] },
            { ig: "Mba, achọrọ m ofe", en: "No, I want soup", src: "igboguide" },
            { ig: "Ofe a dị ụtọ", en: "This soup is tasty", alt: ["Ofe a tọrọ ụtọ"], src: "igboguide" },
            { ig: "Daalụ. Ego ole ka m ji gị?", en: "Thank you. How much do I owe you?", alt: ["Daalụ, ego ole ka m ji gị?"], unsure: true, src: "igboguide" },
            { ig: "Were ego. Rie nke ọma", en: "Take the money. Enjoy your meal.", alt: ["Were ego, rie nke ọma"] }
          ]
        }
      ]
    },

    /* ───────────────────────── AT THE MARKET (Section 1) ───────────────────────── */
    {
      id: "market",
      title: "At the Market",
      igTitle: "N'Ahịa",
      color: "#9a5f00",
      description: "Naira, \"how much?\", too expensive, reduce it, and buying and selling.",
      lessons: [
        {
          id: "mkt-money",
          title: "Money & prices",
          tip: "'Ego' is money and 'naịra' is the naira. Hundreds are 'narị' + number and thousands are 'puku' + number: narị ise = 500.",
          items: [
            { ig: "naịra", en: "naira (Nigerian money)", alt: ["naira"], src: "nkowaokwu" },
            { ig: "ọnụ ahịa", en: "price", alt: ["ọnụahịa"], note: "Just 'ọnụ' can also mean price (and mouth).", src: "nzukomba" },
            { ig: "Naịra ole bụ ihe a?", en: "How many naira is this?", alt: ["Naira ole bụ ihe a?"], note: "Exact example sentence in the Nkọwa okwu dictionary.", src: "nkowaokwu" },
            { ig: "ire", en: "to sell", alt: ["ịre", "re"], note: "Seller's line: 'Anyị na-ere …' (we are selling …).", src: "nkowaokwu" },
            { ig: "Achọrọ m ịzụta ji", en: "I want to buy yam", alt: ["Achọrọ m ịzụ ji"], note: "Swap 'ji' for anything: ofe, azụ, ose …", unsure: true, src: "wikivoyage" },
            { ig: "onye ahịa", en: "seller / trader", note: "Literally 'market person'. Not the word for customer.", unsure: true, src: "nzukomba" },
            { ig: "narị ise", en: "500 (five hundred)", src: "omniglot" },
            { ig: "narị anọ", en: "400 (four hundred)", note: "The old count calls 400 'nnụ'.", src: "omniglot" },
            { ig: "puku atọ", en: "3,000 (three thousand)", src: "omniglot" }
          ]
        },
        {
          id: "mkt-haggle",
          title: "Too expensive!",
          tip: "Bargaining is part of market life. 'oke' means too much / very, so 'Ọ dị oke ọnụ' = it is too expensive.",
          items: [
            { ig: "Ọ dị oke ọnụ", en: "It is too expensive", alt: ["Ọ dị oke ọnụ ahịa", "Nke ahụ dị oke ọnụ"], src: "igbolearn" },
            { ig: "Ọ dị ọnụ", en: "The price is high", alt: ["O di ọnụ"], src: "igbofocus" },
            { ig: "oke", en: "too much / very big", note: "Dictionary: 'a lot; too much'.", src: "nkowaokwu" },
            { ig: "Biko, belata ọnụ ya", en: "Please reduce the price", alt: ["Belata ọnụ ya", "Belata ego"], unsure: true, src: "igbolearn" },
            { ig: "ọnụ ala", en: "cheap (lit. low price)", alt: ["ọnụ ani"], unsure: true, src: "wikivoyage" },
            { ig: "Enweghị m ego", en: "I don't have money", unsure: true, src: "wikivoyage" }
          ]
        },
        {
          id: "mkt-talk",
          title: "Haggling dialogue",
          tip: "A whole bargain, one line at a time: ask, say it is too much, ask for a reduction, agree, thank.",
          items: [
            { ig: "Ị nwere ji?", en: "Do you have yam?", alt: ["I nwere ji?"] },
            { ig: "Naịra narị ise", en: "Five hundred naira", alt: ["Naịra narị ise.", "Narị ise naịra"], note: "Sources disagree whether the number goes before or after 'naịra'.", unsure: true },
            { ig: "Ọ dị oke ọnụ. Biko, belata ọnụ ya", en: "It's too expensive. Please reduce the price.", alt: ["Ọ dị oke ọnụ, biko belata ọnụ ya"], unsure: true, src: "igbolearn" },
            { ig: "Ọ dị mma, naịra narị anọ", en: "Okay, four hundred naira", alt: ["Ọ dị mma. Naịra narị anọ"], unsure: true },
            { ig: "Ọ dị mma. Achọrọ m ya", en: "Fine. I want it. (I'll take it)", alt: ["Ọ dị mma, achọrọ m ya"], note: "No source confirms an exact 'I'll take it', so 'I want it' is used.", src: "igbolearn" },
            { ig: "Daalụ. Aga m abịa echi", en: "Thank you. I will come tomorrow.", alt: ["Daalụ, aga m abịa echi", "Daalụ. A ga m abịa echi"], src: "nkowaokwu" }
          ]
        }
      ]
    },

    /* ───────────────────────── AT SCHOOL (Section 1) ───────────────────────── */
    {
      id: "school",
      title: "At School",
      igTitle: "N'Ụlọ Akwụkwọ",
      color: "#4b4fc4",
      description: "Teacher, student, book, questions, and what you do in class.",
      lessons: [
        {
          id: "sch-things",
          title: "School words",
          tip: "'Akwụkwọ' means book, paper and also school. 'Ụlọ akwụkwọ' = school (house of books). Teacher = 'onye nkụzi' (the person who teaches).",
          items: [
            { ig: "akwụkwọ", en: "book / paper", note: "Also leaf, and (for short) school or education.", src: "nkowaokwu" },
            { ig: "onyenkụzi", en: "teacher", alt: ["onye nkụzi", "onye nkuzi"], src: "nkowaokwu" },
            { ig: "nwa akwụkwọ", en: "student / pupil", alt: ["nwata akwụkwọ"], note: "Literally 'child of the book'.", src: "wikivoyage" },
            { ig: "nkụzi", en: "teaching", alt: ["nkuzi"], src: "nkowaokwu" },
            { ig: "ajụjụ", en: "question", src: "nkowaokwu" },
            { ig: "mmụta", en: "learning / knowledge", alt: ["mmuta"], src: "nkowaokwu" },
            { ig: "pensụl", en: "pencil", alt: ["pensul"], note: "Borrowed from English 'pencil'.", unsure: true, src: "elias" }
          ]
        },
        {
          id: "sch-verbs",
          title: "Things you do in class",
          tip: "These are the bare verbs. In sentences they gain endings, like 'ịgụ' (to read) and 'zara' (answered).",
          items: [
            { ig: "gụ", en: "to read / to study", alt: ["ịgụ", "gụọ"], src: "nkowaokwu" },
            { ig: "de", en: "to write", alt: ["ide", "dee"], src: "nkowaokwu" },
            { ig: "kụzi", en: "to teach", alt: ["kụzie", "ịkụzi"], src: "nkowaokwu" },
            { ig: "jụ", en: "to ask", alt: ["ịjụ"], note: "'jụrụ' = asked.", src: "nkowaokwu" },
            { ig: "za", en: "to answer", alt: ["ịza"], note: "'zara' = answered.", src: "nkowaokwu" },
            { ig: "Gịnị pụtara ahịa?", en: "What does 'ahịa' mean?", note: "'pụtara' = means. Swap 'ahịa' for any word.", unsure: true, src: "nkowaokwu" }
          ]
        },
        {
          id: "sch-talk",
          title: "In the classroom",
          tip: "Most of these are real example sentences from the Nkọwa okwu dictionary, so you can also hear them there.",
          items: [
            { ig: "Abụ m nwa akwụkwọ", en: "I am a student", alt: ["A bụ m nwa akwụkwọ", "A bụ m nwata akwụkwọ"], src: "ilanguages" },
            { ig: "Abụ m onyenkụzi", en: "I am a teacher", alt: ["A bụ m onyenkụzi"], src: "nkowaokwu" },
            { ig: "Ana m aga ụlọ akwụkwọ", en: "I am going to school", alt: ["A na m aga ụlọ akwụkwọ"] },
            { ig: "Ike jụrụ m ajụjụ", en: "Ike asked me a question", src: "nkowaokwu" },
            { ig: "Ọ zara ajụjụ niile", en: "She answered all the questions", alt: ["O zara ajụjụ niile"], src: "nkowaokwu" },
            { ig: "O dere ya n'akwụkwọ", en: "She wrote it on paper", alt: ["Ọ dere ya n'akwụkwọ"], src: "nkowaokwu" },
            { ig: "A ga m agụ akwụkwọ ahụ taata", en: "I will read that book today", alt: ["A ga m agụ akwụkwọ ahụ taa", "Aga m agụ akwụkwọ ahụ taa"], src: "nkowaokwu" },
            { ig: "Ọ na-akụzi n'ọtaakara", en: "She teaches in a nursery school", alt: ["O na-akụzi n'ọtaakara"], note: "'ọtaakara' = nursery school.", src: "nkowaokwu" }
          ]
        }
      ]
    },

    /* ───────────────────────── GETTING AROUND (Section 1) ───────────────────────── */
    {
      id: "travel",
      title: "Getting Around",
      igTitle: "Njem",
      color: "#157a43",
      description: "Travel, vehicles, where are you going, near and far, going home.",
      lessons: [
        {
          id: "trv-go",
          title: "Travel & transport",
          tip: "'Njem' is a trip you make; 'ụgbọ' means vehicle, so 'ụgbọ elu' (vehicle of the sky) is a plane. People also say 'moto' for a car.",
          items: [
            { ig: "njem", en: "journey / trip", src: "nkowaokwu" },
            { ig: "ije", en: "journey / walk", note: "The root of 'Ijeọma' (safe journey).", src: "nkowaokwu" },
            { ig: "ụgbọala", en: "car / road vehicle", alt: ["ụgbọ ala"], note: "One book also uses it for bus.", src: "nkowaokwu" },
            { ig: "moto", en: "car (borrowed from 'motor')", alt: ["motò", "mótò"], src: "nkowaokwu" },
            { ig: "ụgbọ elu", en: "aeroplane", alt: ["ụgbọelu"], unsure: true, src: "wikivoyage" },
            { ig: "ọdụ ụgbọala", en: "motor park (where vehicles wait)", alt: ["ọdụ ụgbọ ala"], unsure: true, src: "wikivoyage" },
            { ig: "Akụdo mere njem ụnyaahụ", en: "Akudo travelled yesterday", src: "nkowaokwu" },
            { ig: "Ana m aga ọrụ", en: "I am going to work", alt: ["Ana m aga ọlụ", "A na m aga ọrụ"], unsure: true, src: "igboguide" }
          ]
        },
        {
          id: "trv-where",
          title: "Near, far & stop here",
          tip: "'Ebe' is place or where. Ask 'Ọ dị nso?' (is it near?) and tell the driver 'Kwụsị ebe a' (stop here).",
          items: [
            { ig: "ebe", en: "place / where", alt: ["ebee"], src: "nkowaokwu" },
            { ig: "nso", en: "near / close", src: "nkowaokwu" },
            { ig: "Ọ dị nso?", en: "Is it near?", alt: ["O dị nso?"], src: "igboguide" },
            { ig: "Ọ dị anya?", en: "Is it far?", alt: ["O dị anya?"], note: "'dị anya' = far (lit. 'is eye-distance').", unsure: true, src: "wikivoyage" },
            { ig: "Ebee ka ahịa dị?", en: "Where is the market?", alt: ["Ebee ka ahịa dị"], src: "igbolearn" },
            { ig: "Kwụsị ebe a", en: "Stop here", alt: ["Kwụsị ebe a!"], unsure: true, src: "wikivoyage" },
            { ig: "Ebe a dị mma", en: "Here is fine", src: "wikivoyage" },
            { ig: "ụlọ ọgwụ", en: "hospital", alt: ["ụlọ ahụ ike"], note: "Literally 'medicine house'.", src: "igboguide" },
            { ig: "ụlọ ọrụ", en: "office", alt: ["ụlọ ọlụ"], note: "Literally 'work house'.", src: "igboguide" }
          ]
        },
        {
          id: "trv-talk",
          title: "Going places",
          tip: "A little journey conversation. 'Aga m …' and 'A ga m …' both mean 'I will …'.",
          items: [
            { ig: "Olee ebe ị na-aga?", en: "Where are you going?", alt: ["Kedụ ebe ị na-aga?", "Olee ebe i na-aga?"], src: "igboguide" },
            { ig: "Ana m ala ụlọ", en: "I'm going home", alt: ["Ana m ala n'ụlọ"], note: "'ala ụlọ' = return home.", unsure: true, src: "igboguide" },
            { ig: "E-e, ọ dị ezigbo nso", en: "Yes, it is very near", alt: ["Ee, ọ dị ezigbo nso"], src: "igboguide" },
            { ig: "Biko, buga m ebe ahụ", en: "Please take me there", alt: ["Buga m ebe ahụ"], unsure: true, src: "igboguide" },
            { ig: "Anyị ga-ala ụlọ na Dizemba", en: "We will go home in December", src: "nkowaokwu" },
            { ig: "Ha ga-abịa echi", en: "They will come tomorrow", src: "nkowaokwu" }
          ]
        }
      ]
    },

    /* ───────────────────────── 6. FOOD ───────────────────────── */
    {
      id: "food",
      title: "Food & Drink",
      igTitle: "Nri na Ihe Ọṅụṅụ",
      color: "#b5482a",
      description: "Yam, soup, rice, water — and how to say you're hungry.",
      lessons: [
        {
          id: "food-basics",
          title: "Everyday food",
          tip: "Watch 'akwa' — depending on tone it means egg, cloth, crying or bed!",
          items: [
            { ig: "nri", en: "food" },
            { ig: "mmiri", en: "water (also rain)" },
            { ig: "ji", en: "yam" },
            { ig: "ofe", en: "soup / stew" },
            { ig: "osikapa", en: "rice" },
            { ig: "anụ", en: "meat (also animal)" },
            { ig: "azụ", en: "fish (also back of the body)" },
            { ig: "ọkụkọ", en: "chicken" },
            { ig: "akwa", en: "egg", note: "Tone-dependent word: also means cloth, crying, bed.", unsure: true }
          ]
        },
        {
          id: "food-more",
          title: "Kitchen & market",
          tip: "Many Igbo food words are borrowed and adapted, e.g. 'achịcha' for bread.",
          items: [
            { ig: "achịcha", en: "bread / cake / biscuit", src: "nkowaokwu" },
            { ig: "ose", en: "pepper" },
            { ig: "nnu", en: "salt" },
            { ig: "mmanụ", en: "oil" },
            { ig: "oroma", en: "orange (fruit)" },
            { ig: "ugu", en: "fluted pumpkin leaf" },
            { ig: "okwuru", en: "okra", alt: ["ọkwụrụ"], unsure: true },
            { ig: "mmanya", en: "wine / alcoholic drink" }
          ]
        },
        {
          id: "food-phrases",
          title: "I'm hungry!",
          tip: "Literally 'Agụụ na-agụ m' = 'hunger is hungering me'. Igbo describes feelings as things that happen TO you.",
          items: [
            { ig: "Agụụ na-agụ m", en: "I am hungry" },
            { ig: "Akpịrị na-akpọ m nkụ", en: "I am thirsty", unsure: true },
            { ig: "Achọrọ m mmiri", en: "I want water" },
            { ig: "Achọrọ m iri nri", en: "I want to eat food", unsure: true },
            { ig: "Nri a tọrọ ụtọ", en: "This food is delicious" },
            { ig: "Bịa rie nri", en: "Come and eat" },
            { ig: "Afọ ejuola m", en: "I am full", unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── 4. NUMBERS ───────────────────────── */
    {
      id: "numbers",
      title: "Numbers",
      igTitle: "Ọnụọgụgụ",
      color: "#9a5f00",
      description: "Count from 1 to a million. Igbo numbers are built like Lego: ten-and-one, ten-two (20)…",
      lessons: [
        {
          id: "num-1-5",
          title: "1 – 5",
          tip: "otu, abụọ, atọ, anọ, ise — say them out loud every morning!",
          items: [
            { ig: "otu", en: "1 (one)", src: "languagesandnumbers" },
            { ig: "abụọ", en: "2 (two)", src: "languagesandnumbers" },
            { ig: "atọ", en: "3 (three)", src: "languagesandnumbers" },
            { ig: "anọ", en: "4 (four)", src: "languagesandnumbers" },
            { ig: "ise", en: "5 (five)", src: "languagesandnumbers" }
          ]
        },
        {
          id: "num-6-10",
          title: "6 – 10",
          tip: "9 has several forms: 'itoolu', 'iteghete' and 'itenanị'. All are used in different areas.",
          items: [
            { ig: "isii", en: "6 (six)", src: "languagesandnumbers" },
            { ig: "asaa", en: "7 (seven)", src: "languagesandnumbers" },
            { ig: "asatọ", en: "8 (eight)", alt: ["asato"], src: "languagesandnumbers" },
            { ig: "itoolu", en: "9 (nine)", alt: ["itolu", "iteghete", "itenanị"], note: "Standard Igbo: itolu / itoolu. 'iteghete' is another regional form.", src: "nkowaokwu" },
            { ig: "iri", en: "10 (ten)", src: "languagesandnumbers" },
            { ig: "oroghoro", en: "0 (zero)", alt: ["efu"], note: "Omniglot (Imo-state school numbers) gives 'oroghoro'; some people say 'efu'.", src: "omniglot" }
          ]
        },
        {
          id: "num-11-19",
          title: "11 – 19",
          tip: "11–19 = iri na + number. 'na' means 'and'. So 13 = iri na atọ (ten and three).",
          items: [
            { ig: "iri na otu", en: "11 (eleven)", src: "languagesandnumbers" },
            { ig: "iri na abụọ", en: "12 (twelve)", src: "languagesandnumbers" },
            { ig: "iri na atọ", en: "13 (thirteen)" },
            { ig: "iri na anọ", en: "14 (fourteen)" },
            { ig: "iri na ise", en: "15 (fifteen)" },
            { ig: "iri na isii", en: "16 (sixteen)" },
            { ig: "iri na asaa", en: "17 (seventeen)" },
            { ig: "iri na asatọ", en: "18 (eighteen)" },
            { ig: "iri na itoolu", en: "19 (nineteen)", alt: ["iri na iteghete"] }
          ]
        },
        {
          id: "num-tens",
          title: "20, 30 … 100+",
          tip: "Tens = iri + number: 20 = iri abụọ ('ten two'). 25 = iri abụọ na ise. Older counting uses 'ọgụ' (a score of 20).",
          items: [
            { ig: "iri abụọ", en: "20 (twenty)", note: "Traditional form: 'ọgụ'.", src: "languagesandnumbers" },
            { ig: "iri atọ", en: "30 (thirty)" },
            { ig: "iri anọ", en: "40 (forty)" },
            { ig: "iri ise", en: "50 (fifty)" },
            { ig: "iri abụọ na ise", en: "25 (twenty-five)" },
            { ig: "narị", en: "100 (one hundred)", alt: ["otu narị", "nnarị"], src: "nkowaokwu" },
            { ig: "puku", en: "1,000 (one thousand)", alt: ["otu puku"], src: "languagesandnumbers" },
            { ig: "nde", en: "1,000,000 (one million)", alt: ["otu nde"], src: "languagesandnumbers" }
          ]
        },
        {
          id: "num-using",
          title: "Using numbers",
          tip: "In Igbo the number comes AFTER the noun: 'ụmụaka atọ' = three children (children three).",
          items: [
            { ig: "ole", en: "how many / how much" },
            { ig: "Ego ole?", en: "How much (money)?", alt: ["Ọ bụ ego ole?", "Ego ole ka ihe a bụ?"], src: "omniglot" },
            { ig: "ụmụaka atọ", en: "three children" },
            { ig: "nke mbụ", en: "first", alt: ["nke izizi"], src: "omniglot" },
            { ig: "nke abụọ", en: "second" },
            { ig: "naịra iri ise", en: "fifty naira", unsure: true }
          ]
        },
        {
          id: "num-ordinals",
          title: "First, second & big numbers",
          tip: "Ordinals = 'nke' + number: nke atọ = third. Exception: first = 'nke mbụ'. Big numbers: narị (100), puku (1,000), nde (million), ijeri (billion).",
          items: [
            { ig: "nke atọ", en: "third", src: "omniglot" },
            { ig: "nke iri", en: "tenth", src: "omniglot" },
            { ig: "otu narị na otu", en: "101 (one hundred and one)", src: "omniglot" },
            { ig: "narị abụọ", en: "200 (two hundred)", src: "omniglot" },
            { ig: "puku abụọ", en: "2,000 (two thousand)", src: "omniglot" },
            { ig: "puku iri", en: "10,000 (ten thousand)", src: "omniglot" },
            { ig: "otu ijeri", en: "1,000,000,000 (one billion)", src: "omniglot" },
            { ig: "ọgụ", en: "20 (traditional base-20 count)", note: "Igbo traditionally counted in twenties (vigesimal). 400 = nnụ.", src: "omniglot" },
            { ig: "nnụ", en: "400 (traditional: twenty twenties)", src: "omniglot" }
          ]
        }
      ]
    },

    /* ───────────────────────── 8. COLOURS ───────────────────────── */
    {
      id: "colours",
      title: "Colours",
      igTitle: "Agba",
      color: "#4b4fc4",
      description: "Traditional Igbo colour words are often linked to things in nature.",
      lessons: [
        {
          id: "col-basic",
          title: "Basic colours",
          tip: "Several colours are named after things: 'akwụkwọ ndụ' (green) = 'living leaf'; 'ntụ ntụ' (grey) = 'ash-ash'.",
          items: [
            { ig: "agba", en: "colour", unsure: true },
            { ig: "ọcha", en: "white" },
            { ig: "oji", en: "black", note: "Also kola nut — tone differs." },
            { ig: "uhie", en: "red", alt: ["ọbara ọbara"], unsure: true },
            { ig: "odo", en: "yellow", alt: ["odo odo"], unsure: true },
            { ig: "akwụkwọ ndụ", en: "green", unsure: true },
            { ig: "anụnụanụnụ", en: "blue", alt: ["anụnụ anụnụ"], src: "nkowaokwu" },
            { ig: "aja aja", en: "brown (lit. 'sand-sand')", unsure: true },
            { ig: "ntụ ntụ", en: "grey (lit. 'ash-ash')", unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── 10. VERBS ───────────────────────── */
    {
      id: "verbs",
      title: "Action Words",
      igTitle: "Ngwaa",
      color: "#4f6b1c",
      description: "Come, go, eat, drink — commands and 'I am …-ing' sentences.",
      lessons: [
        {
          id: "verb-commands",
          title: "Commands",
          tip: "Igbo commands often add a vowel that matches the verb: ri → rie (eat!), ga → gaa (go!). This is vowel harmony.",
          items: [
            { ig: "bịa", en: "come!" },
            { ig: "gaa", en: "go!" },
            { ig: "rie", en: "eat!" },
            { ig: "ṅụọ", en: "drink!" },
            { ig: "nọdụ ala", en: "sit down!" },
            { ig: "bilie", en: "get up! / stand up!" },
            { ig: "lee", en: "look!", unsure: true },
            { ig: "chere", en: "wait!" }
          ]
        },
        {
          id: "verb-more",
          title: "More verbs",
          tip: "These are command forms — the easiest way to learn a verb.",
          items: [
            { ig: "gụọ", en: "read! / count!" },
            { ig: "dee", en: "write!" },
            { ig: "kwuo", en: "say! / speak!" },
            { ig: "nye", en: "give!", alt: ["nye m"] },
            { ig: "were", en: "take!" },
            { ig: "zụta", en: "buy!" },
            { ig: "mee", en: "do! / make!" },
            { ig: "kpọọ", en: "call!" }
          ]
        },
        {
          id: "verb-sentences",
          title: "I am …-ing",
          tip: "'Ana m…' = 'I am …-ing'. 'Ọ na-…' = 'He/she is …-ing'. The verb gets an 'a-' or 'e-' in front (vowel harmony again!).",
          items: [
            { ig: "Ana m eri nri", en: "I am eating food" },
            { ig: "Ana m aga ahịa", en: "I am going to the market" },
            { ig: "Ọ na-aga ụlọ akwụkwọ", en: "He/she is going to school" },
            { ig: "Ana m agụ akwụkwọ", en: "I am reading a book / I am studying" },
            { ig: "Achọrọ m ịga ụlọ", en: "I want to go home" },
            { ig: "Gịnị ka ị na-eme?", en: "What are you doing?", alt: ["Gịnị ka i na-eme?"] }
          ]
        }
      ]
    },

    /* ───────────────────────── ASKING QUESTIONS (Section 2) ───────────────────────── */
    {
      id: "questions",
      title: "Asking Questions",
      igTitle: "Ịjụ Ajụjụ",
      color: "#0b6fa4",
      description: "Who, what and when: the question words and a few ready-made questions.",
      lessons: [
        {
          id: "q-words",
          title: "Who, what and when",
          tip: "A question can be just a statement said with a rising voice, as in 'Ị bụ onye Igbo?'. Question words (onye who, gịnị what, olee … which/when) usually sit near the front.",
          items: [
            { ig: "Onye ka ị bụ?", en: "Who are you?", alt: ["I bụ onye?","Onye bụ gị?"], unsure: true, src: "wikivoyage" },
            { ig: "Gịnị bụ ihe a?", en: "What is this thing?", alt: ["Gịnị bụ ihe a"], note: "Answer: 'Ihe a bụ …' (This is …).", unsure: true, src: "ilanguages" },
            { ig: "Gịnị ka ị chọrọ?", en: "What do you want?", alt: ["Gịnị ka ị na-achọ?"], unsure: true },
            { ig: "Olee oge ị ga-abịa?", en: "When will you come?", alt: ["Olee oge ị ga-abịa","Olee mgbe ị ga-abịa?"], note: "Literally 'which time will you come?'. The answer starts with 'Aga m abịa …'.", src: "igboguide" },
            { ig: "Ị bụ onye Igbo?", en: "Are you Igbo?", alt: ["I bụ onye Igbo?"], note: "Say it with a rising voice. Yes: 'Ee, a bụ m onye Igbo.'", unsure: true },
            { ig: "Ole ihe ị nwere?", en: "How many things do you have?", note: "'ole' = how many / how much (you met it in Numbers).", unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── WHERE IS IT? (Section 2) ───────────────────────── */
    {
      id: "whereis",
      title: "Where Is It?",
      igTitle: "Ebee Ka Ọ Dị?",
      color: "#b0213f",
      description: "In, on, under, beside and behind, and how to say where things are.",
      lessons: [
        {
          id: "where-places",
          title: "In, on, under, beside",
          tip: "These little place words start with n' (in/at). Put them before a noun: n'elu ụlọ = on top of the house.",
          items: [
            { ig: "n'ime", en: "in / inside", alt: ["ime"], note: "Dictionary example: Akụnna nọ n'ime ụlọ (Akunna is inside the house).", src: "nkowaokwu" },
            { ig: "n'elu", en: "on / on top of / up", alt: ["elu"], note: "Some lists also give 'n'enu'.", src: "nkowaokwu" },
            { ig: "n'okpuru", en: "under / beneath", alt: ["okpuru"], src: "nkowaokwu" },
            { ig: "n'akụkụ", en: "beside / at the side of", alt: ["akụkụ"], src: "nkowaokwu" },
            { ig: "n'etiti", en: "between / in the middle", alt: ["etiti"], src: "nkowaokwu" },
            { ig: "n'azụ", en: "behind / at the back", alt: ["azụ"], note: "Tone matters: àzụ (back) is not azụ (fish).", src: "nkowaokwu" },
            { ig: "n'ihu", en: "in front of / ahead", alt: ["ihu"], note: "'ihu' also means face.", src: "ezinaulo" },
            { ig: "ebe a", en: "here", alt: ["ebea"], note: "'ebe' (place) + 'a' (this).", src: "wikivoyage" },
            { ig: "ebe ahụ", en: "there", alt: ["ebe ahu"], note: "'ebe' (place) + 'ahụ' (that).", src: "igboguide" }
          ]
        },
        {
          id: "where-talk",
          title: "Where is it?",
          tip: "To say where something is, use 'nọ' (is at) or 'dị' (is located) plus a place word. The dictionary examples use 'nọ'.",
          items: [
            { ig: "Olee ebe ọ dị?", en: "Where is it? (lit. which place is it at?)", alt: ["Ebee ka ọ dị?","Olee ebe o di?"], src: "igboguide" },
            { ig: "Akụnna nọ n'ime ụlọ", en: "Akunna is inside the house", alt: ["Akụnna nọ n'ime ụlọ."], src: "nkowaokwu" },
            { ig: "Bọọlụ unu nọ n'okpuru ụgbọala", en: "Your ball is under the car", alt: ["Bọọlụ unu nọ n'okpuru ụgbọala."], note: "'bọọlụ' = ball.", src: "nkowaokwu" },
            { ig: "Akpa m nọ n'elu ochenkwago", en: "My bag is on the table", alt: ["Akpa m nọ n'elu ochenkwago."], note: "'akpa' = bag, 'ochenkwago' = table (both come back in At Home).", src: "nkowaokwu" },
            { ig: "Gaa n'ihu", en: "Go straight ahead", alt: ["Gaa n'iru"], unsure: true, src: "wikivoyage" },
            { ig: "Olee ebe akpa ahụ dị?", en: "Where is the bag?", unsure: true },
            { ig: "Ọ nọ n'ime ụlọ", en: "It is in the house", alt: ["Ọ dị n'ime ụlọ"], unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── MY DAY (Section 2) ───────────────────────── */
    {
      id: "routine",
      title: "My Day",
      color: "#157a43",
      description: "Get up, wash, dress, eat, go to work and come home.",
      lessons: [
        {
          id: "day-morning",
          title: "Getting up and getting ready",
          tip: "'Ana m …' means 'I am …-ing' and is the everyday way to say what you do. Add n'ụtụtụ (in the morning) for time.",
          items: [
            { ig: "Ana m abilie n'ụtụtụ", en: "I get up in the morning", alt: ["Ana m abilie n'ụtụtụ."], unsure: true },
            { ig: "Ana m asa ahụ", en: "I am having a bath / shower", alt: ["Ana m asa ahụ."], note: "'sa ahụ' = wash the body. This is the dictionary example.", src: "nkowaokwu" },
            { ig: "Ana m asa eze", en: "I am brushing my teeth (lit. washing teeth)", alt: ["Ana m asa ezé"], unsure: true },
            { ig: "uwe", en: "clothes / dress", note: "Tone: ùwé (clothes).", src: "nkowaokwu" },
            { ig: "Yiri uwe gị ọsọọsọ", en: "Put on your clothes quickly", alt: ["Yiri uwe gị ọsọọsọ.","Ngwa, yiri uwe gị ọsọọsọ"], note: "'yi' = put on / wear. Dictionary example.", src: "nkowaokwu" },
            { ig: "Anyị na-eri nri", en: "We are eating (food)", alt: ["Anyị na-eri nri."], note: "Dictionary example. The verb is 'ri' (eat); the command is 'rie'.", src: "nkowaokwu" },
            { ig: "Anyị eriela nri ụtụtụ", en: "We have had breakfast", alt: ["Anyị eriela nri ụtụtụ."], unsure: true, src: "igboguide" }
          ]
        },
        {
          id: "day-work",
          title: "Work and coming home",
          tip: "'ọrụ' is work or a job. 'mgbe' means when, and it joins two parts of a sentence.",
          items: [
            { ig: "ọrụ", en: "work / job", src: "nkowaokwu" },
            { ig: "Ọrụ ahụ amasịghị m", en: "I did not like that job", alt: ["Ọrụ ahụ amasịghị m."], note: "Dictionary example. 'amasịghị m' = I did not like it.", src: "nkowaokwu" },
            { ig: "lọta", en: "return / come back (home)", note: "Dictionary example: Anyị hụrụ ya mgbe anyị na-alọta.", src: "nkowaokwu" },
            { ig: "mgbe", en: "when / at the time that", src: "nkowaokwu" },
            { ig: "Anyị hụrụ ya mgbe anyị na-alọta", en: "We saw him / her when we were coming back", alt: ["Anyị hụrụ ya mgbe anyị na-alọta."], note: "'hụrụ' = saw.", src: "nkowaokwu" },
            { ig: "Mgbakọ na-amasị m mgbe m bụ nwaakwụkwọ", en: "I liked maths when I was a student", alt: ["Mgbakọ na-amasị m mgbe m bụ nwa akwụkwọ."], note: "'na-amasị m' = I like it.", src: "nkowaokwu" },
            { ig: "Ana m aga ọrụ n'ụtụtụ", en: "I go to work in the morning", alt: ["Ana m aga ọrụ n'ụtụtụ."], unsure: true },
            { ig: "Achọrọ m idina ala", en: "I want to lie down", alt: ["Achọrọ m idina ala."], note: "'dina ala' = lie down (the dictionary has no clear word for 'sleep').", src: "nkowaokwu" },
            { ig: "Olee oge ị na-alọta ụlọ?", en: "What time do you come home?", unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── AT HOME (Section 2) ───────────────────────── */
    {
      id: "home",
      title: "At Home",
      igTitle: "N'Ụlọ",
      color: "#9a5f00",
      description: "Rooms, furniture and things around the house.",
      lessons: [
        {
          id: "home-rooms",
          title: "Rooms and furniture",
          tip: "'ụlọ' means both house and home. A room inside is 'imụlọ'.",
          items: [
            { ig: "imụlọ", en: "room / bedroom", alt: ["ime ụlọ"], note: "Some lists write it as two words, 'ime ụlọ'.", src: "nkowaokwu" },
            { ig: "usekwu", en: "kitchen", note: "Tone: ùsékwú.", src: "nkowaokwu" },
            { ig: "oche", en: "chair / seat", note: "Tone: óché.", src: "nkowaokwu" },
            { ig: "ochenkwago", en: "table (for books and writing)", alt: ["ndokwasa"], note: "Other lists say 'ndokwasa' for table, but the dictionary does not have it.", src: "nkowaokwu" },
            { ig: "enyo", en: "mirror", note: "Dictionary: also lens / glass.", src: "nkowaokwu" },
            { ig: "igodo", en: "key", unsure: true, src: "ezinaulo" }
          ]
        },
        {
          id: "home-things",
          title: "Things around the house",
          tip: "Many everyday objects are plain nouns. Say 'Efere ndị a mara mma' (these plates are beautiful) with the 'ndị a' (these) pattern.",
          items: [
            { ig: "ite", en: "pot (for cooking)", note: "Dictionary example: Ada zụtara ite ọzọ (Ada bought another pot).", src: "nkowaokwu" },
            { ig: "azịzà", en: "broom", src: "nkowaokwu" },
            { ig: "nkata", en: "basket", note: "A bowl-shaped woven container.", src: "nkowaokwu" },
            { ig: "akpa", en: "bag / sack / pocket", src: "nkowaokwu" },
            { ig: "ekwentị", en: "mobile phone", src: "nkowaokwu" },
            { ig: "Efere ndị a mara mma", en: "These plates are beautiful", alt: ["Efere ndị a mara mma."], note: "'efere' = plate; 'mara mma' = beautiful.", src: "nkowaokwu" },
            { ig: "Ọ zụtara ekwentị ọhụrụ", en: "She bought a new phone", alt: ["Ọ zụtara ekwentị ọhụrụ."], note: "'zụtara' = bought. Dictionary example.", src: "nkowaokwu" },
            { ig: "Anyị nwere usekwu abụọ", en: "We have two kitchens", alt: ["Anyị nwere usekwu abụọ."], src: "nkowaokwu" },
            { ig: "Ebee ka ekwentị m dị?", en: "Where is my phone?", unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── JOBS (Section 2) ───────────────────────── */
    {
      id: "jobs",
      title: "Jobs",
      igTitle: "Ọrụ Aka",
      color: "#6d4bc4",
      description: "Farmer, nurse, boss, worker: what people do for a living.",
      lessons: [
        {
          id: "job-words",
          title: "Who does what",
          tip: "Many job names are 'onye' (person) + the work: onye ahịa (trader), onye ugbo (farmer).",
          items: [
            { ig: "onye ọrụ", en: "worker", alt: ["onye ọlụ"], unsure: true },
            { ig: "ubi", en: "farm / farmland", note: "Dictionary example: ubi anyị (our farm).", src: "nkowaokwu" },
            { ig: "onye ugbo", en: "farmer", alt: ["onye ubi","onye ọrụ ugbo"], unsure: true, src: "wikivoyage" },
            { ig: "nọọsụ", en: "nurse", alt: ["onye uwe ọcha"], unsure: true, src: "wikivoyage" },
            { ig: "dibịa", en: "traditional healer / medicine man", unsure: true, src: "nkowaokwu" },
            { ig: "onye isi", en: "boss / head / leader", unsure: true, src: "wikivoyage" },
            { ig: "ndị ọrụ", en: "colleagues / co-workers", unsure: true, src: "wikivoyage" }
          ]
        },
        {
          id: "job-talk",
          title: "What do you do?",
          tip: "To say what you are, use 'Abụ m …' (I am …) or 'Nna m bụ …' (My father is …), as in 'Abụ m onyenkụzi'.",
          items: [
            { ig: "Ị na-arụ ọrụ gịnị?", en: "What work do you do?", alt: ["Gịnị ka ị na-arụ?","Ị na-arụ ọrụ gịnị"], unsure: true },
            { ig: "Abụ m dọkịta", en: "I am a doctor", alt: ["Abụ m dọkịta."], unsure: true },
            { ig: "Abụ m onye ahịa", en: "I am a trader", alt: ["Abụ m onye ahịa."], unsure: true },
            { ig: "Nna m bụ onye ugbo", en: "My father is a farmer", alt: ["Nna m bụ onye ugbo."], unsure: true },
            { ig: "Nne m bụ onyenkụzi", en: "My mother is a teacher", alt: ["Nne m bụ onyenkụzi."], unsure: true },
            { ig: "Ọ bụ nọọsụ", en: "She is a nurse", alt: ["Ọ bụ nọọsụ."], unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── ANIMALS (Section 2) ───────────────────────── */
    {
      id: "animals",
      title: "Animals",
      igTitle: "Anụmanụ",
      color: "#4f6b1c",
      description: "Dog, goat, cow, snake, tortoise and the sentences they appear in.",
      lessons: [
        {
          id: "ani-farm",
          title: "Pets and farm animals",
          tip: "Animals names often share their spelling with another word, so tone matters: ezi (pig) is not ezi (outside).",
          items: [
            { ig: "nkịta", en: "dog", src: "nkowaokwu" },
            { ig: "nwamba", en: "cat", alt: ["nwoologbo"], note: "A second word for cat is 'nwoologbo' (borrowed).", src: "nkowaokwu" },
            { ig: "ewu", en: "goat", note: "Also used for a foolish person.", src: "nkowaokwu" },
            { ig: "atụrụ", en: "sheep", src: "nkowaokwu" },
            { ig: "ehi", en: "cow / cattle", alt: ["efi"], note: "Dictionary example spells it 'efi'.", src: "nkowaokwu" },
            { ig: "ezi", en: "pig", note: "Tone: other words share this spelling (ezi = outside; ezi = menses). Teach 'pig' first.", src: "nkowaokwu" },
            { ig: "ịnyịnya", en: "horse", src: "nkowaokwu" },
            { ig: "nnekwu", en: "hen", note: "A female chicken. (ọkụkọ is chicken as food.)", src: "nkowaokwu" },
            { ig: "okeọkpa", en: "cock / rooster", alt: ["oke ọkpa"], src: "nkowaokwu" }
          ]
        },
        {
          id: "ani-wild",
          title: "Wild animals and birds",
          tip: "'ényí' (elephant) and 'agụ' (leopard) need tone marks to tell them from other words.",
          items: [
            { ig: "agwọ", en: "snake", note: "Tone: agwọ (snake) is not agwọ (raffia).", src: "nkowaokwu" },
            { ig: "mbe", en: "tortoise", alt: ["nnabe"], note: "The tortoise is the clever trickster in many Igbo folktales.", src: "nkowaokwu" },
            { ig: "ọdụm", en: "lion", src: "nkowaokwu" },
            { ig: "ényí", en: "elephant", alt: ["enyi"], note: "Tone: ényí (elephant) vs enyì (friend). The dictionary gives both.", src: "nkowaokwu" },
            { ig: "agụ", en: "leopard", note: "Tone: agụ (leopard) vs agụụ (hunger). The dictionary also lists 'tiger'.", src: "nkowaokwu" },
            { ig: "enwe", en: "monkey", src: "ezinaulo" },
            { ig: "nnụnụ", en: "bird", src: "nkowaokwu" },
            { ig: "ngwere", en: "lizard", src: "nkowaokwu" }
          ]
        },
        {
          id: "ani-talk",
          title: "Animals in sentences",
          tip: "Every sentence here comes from a dictionary example. 'na-' before a verb shows it happens regularly: Ewu na-ata ahịhịa (Goats eat leaves).",
          items: [
            { ig: "Enwere m nkịta", en: "I have a dog", alt: ["Enwere m nkịta."], src: "nkowaokwu" },
            { ig: "Ewu na-ata ahịhịa", en: "Goats eat leaves", alt: ["Ewu na-ata ahịhịa."], src: "nkowaokwu" },
            { ig: "Efi bụ oke anụmanụ", en: "Cows are big animals", alt: ["Efi bụ oke anụmanụ.","Ehi bụ oke anụmanụ"], note: "'oke' here means big; 'anụmanụ' = animal.", src: "nkowaokwu" },
            { ig: "Nnekwu na-eyi akwa", en: "The hen lays eggs", alt: ["Nnekwu na-eyi akwa."], src: "nkowaokwu" },
            { ig: "Nnụnụ na-eyi akwa n'akwụ", en: "Birds lay eggs in the nest", alt: ["Nnụnụ na-eyi akwa n'akwụ."], src: "nkowaokwu" },
            { ig: "Ahụbeghị m mbe mbụ", en: "I have not seen a tortoise before", alt: ["Ahụbeghị m mbe mbụ."], note: "'-beghị m' = I have not … yet.", src: "nkowaokwu" },
            { ig: "Ọdụm abụghị obere anụmanụ", en: "The lion is not a small animal", alt: ["Ọdụm abụghị obere anụmanụ.","Ọdụm abụghị obere anụmaanụ"], note: "'abụghị' = is not.", src: "nkowaokwu" },
            { ig: "Agụ bụ anụ kara obi", en: "The leopard is a brave animal", alt: ["Agụ bụ anụ kara obi."], note: "'kara obi' = brave.", src: "nkowaokwu" }
          ]
        }
      ]
    },

    /* ───────────────────────── CLOTHES (Section 2) ───────────────────────── */
    {
      id: "clothes",
      title: "Clothes",
      igTitle: "Uwe",
      color: "#a8336f",
      description: "Wrapper, hat, head tie, shoes: what people wear.",
      lessons: [
        {
          id: "clo-wear",
          title: "What people wear",
          tip: "'yi' is the verb for putting on or wearing clothes. 'uwe' (clothes) came up in My Day.",
          items: [
            { ig: "ọgọdọ", en: "wrapper (cloth tied round the waist)", note: "Worn by men and women. In the dictionary: a cloth wrapped round the waist.", src: "nkowaokwu" },
            { ig: "abada", en: "wrapper (wax-print cloth)", alt: ["àbàdá"], note: "Dictionary: a borrowed word for wax-print wrapper cloth. Similar to ọgọdọ.", src: "nkowaokwu" },
            { ig: "okpu", en: "hat / cap", note: "Dictionary: the hat is 'n'isi' (on the head).", src: "nkowaokwu" },
            { ig: "ịchafụ", en: "head tie / scarf", alt: ["ichafụ"], note: "A cloth worn on the head or neck.", src: "nkowaokwu" },
            { ig: "akpụkpụụkwụ", en: "shoes / footwear", alt: ["akpụkpọ ụkwụ"], src: "nkowaokwu" },
            { ig: "ọpante", en: "trousers / pants", unsure: true, src: "nkowaokwu" },
            { ig: "skeetị", en: "skirt", unsure: true, src: "bu200" },
            { ig: "yi", en: "to wear / put on (clothes)", note: "Used as 'iyi' (to wear) in the dictionary example.", src: "nkowaokwu" }
          ]
        },
        {
          id: "clo-talk",
          title: "Clothes in sentences",
          tip: "'Achọrọ m …' (I want …) works for clothes too, the same way it did for food.",
          items: [
            { ig: "A chọrọ m iyi akwa ọhụrụ wee jee emume ahụ", en: "I want to wear new clothes and go to the ceremony", alt: ["Achọrọ m iyi akwa ọhụrụ wee jee emume ahụ"], note: "'akwa' here is cloth / clothes, 'emume' is a ceremony.", src: "nkowaokwu" },
            { ig: "Achọrọ m ịchafụ ojii", en: "I want a black head tie", alt: ["Achọrọ m ịchafụ oji"], note: "'ojii' = black (the same word as 'oji').", src: "nkowaokwu" },
            { ig: "Onye nwe akpụkpụụkwụ ndị a?", en: "Who owns these shoes?", src: "nkowaokwu" },
            { ig: "Ndị nne na-amakarị ọgọdọ mgbe ha na-ezu ike", en: "Mothers usually tie a wrapper when they rest", alt: ["Ndị nne na-amakarị ọgọdọ mgbe ha na-ezu ike."], src: "nkowaokwu" },
            { ig: "E ji akwa mee akpa a", en: "This bag is made of cloth", alt: ["E ji akwa mee akpa a."], note: "'E ji … mee' = made of.", src: "nkowaokwu" },
            { ig: "Agaghị m eji akpa ahụ je mmemme ahụ", en: "I will not go to that event with that bag", alt: ["Agaghị m eji akpa ahụ je mmemme ahụ."], note: "'Agaghị m …' = I will not …", src: "nkowaokwu" },
            { ig: "Akpụkpụụkwụ gị dị mma", en: "Your shoes are nice", alt: ["Akpụkpụụkwụ gị mara mma"], unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── DESCRIBING THINGS (Section 2) ───────────────────────── */
    {
      id: "describe",
      title: "Describing Things",
      color: "#0f7a72",
      description: "Big, small, new, old, good, bad: describing things and people.",
      lessons: [
        {
          id: "des-size",
          title: "Size, age and amount",
          tip: "Igbo adjectives come after the noun: ihe ukwu = a big thing (not 'big thing'). Only a few real adjectives exist; the rest use 'dị' (be).",
          items: [
            { ig: "ukwu", en: "big / large / great", note: "Dictionary example: Naanị ihe ukwu na-amasị m (I only like big things).", src: "nkowaokwu" },
            { ig: "nta", en: "small / little", note: "Also 'younger one'.", src: "nkowaokwu" },
            { ig: "obere", en: "small (amount) / a little", note: "Dictionary example: Nye m obere oge (give me a little time).", src: "nkowaokwu" },
            { ig: "ogologo", en: "tall / long", src: "nkowaokwu" },
            { ig: "mkpụmkpụ", en: "short / brief", src: "nkowaokwu" },
            { ig: "ọhụrụ", en: "new", alt: ["ohuru"], note: "The dictionary finds it under 'ohuru'.", src: "nkowaokwu" },
            { ig: "ochie", en: "old (things) / ancient", note: "Used for things, not usually for people.", src: "nkowaokwu" },
            { ig: "ọtụtụ", en: "many / a lot", src: "nkowaokwu" }
          ]
        },
        {
          id: "des-quality",
          title: "Good, bad and sentences",
          tip: "'ọma' (good) comes after its noun, 'ezigbo' (good, very) comes before it: nwoke ọma, ezigbo mmadụ.",
          items: [
            { ig: "ọma", en: "good / nice / beautiful", src: "nkowaokwu" },
            { ig: "ọjọọ", en: "bad / evil / ugly", src: "nkowaokwu" },
            { ig: "ezigbo", en: "good (quality) / very", note: "Comes before the noun. Also 'very': ọ dị ezigbo nso (it is very near).", src: "nkowaokwu" },
            { ig: "Ajaero bụ nwoke ọma", en: "Ajaero is a good man", alt: ["Ajaero bụ nwoke ọma."], src: "nkowaokwu" },
            { ig: "Ụgbọala m emeela ochie", en: "My car has become old", alt: ["Ugboala m emeela ochie","Ụgbọala m emeela ochie."], src: "nkowaokwu" },
            { ig: "Mmadụ dị ọtụtụ ebe a", en: "There are many people here", alt: ["Mmadụ dị ọtụtụ ebe a."], src: "nkowaokwu" },
            { ig: "Naanị ihe ukwu na-amasị m", en: "I only like big things", alt: ["Naanị ihe ukwu na-amasị m."], src: "nkowaokwu" },
            { ig: "Ụlọ ahụ buru ibu", en: "The house is big", alt: ["Ụlọ ahụ buru ibu."], note: "'buru ibu' = is big (a verb form, not an adjective).", src: "ilanguages" },
            { ig: "Nke ahụ dị njọ", en: "That is bad", alt: ["Nke ahụ dị njọ."], unsure: true, src: "igboguide" }
          ]
        }
      ]
    },

    /* ───────────────────────── OPINIONS & ADVICE (Section 2) ───────────────────────── */
    {
      id: "opinions",
      title: "Opinions & Advice",
      igTitle: "Echiche",
      color: "#b5482a",
      description: "What do you think? Agree, disagree, maybe, and friendly advice.",
      lessons: [
        {
          id: "op-think",
          title: "What do you think?",
          tip: "'Echere m na …' means 'I think that …'. 'masịrị' and 'amasịghị' (liked / did not like) are the building blocks for likes and dislikes.",
          items: [
            { ig: "Gịnị ka ị chere?", en: "What do you think?", alt: ["Gịnị ka ị chere"], note: "Another list translates it as 'what do you mean?'.", src: "ilanguages" },
            { ig: "Echere m na ị na-arịa ọrịa oyi", en: "I think you have a cold", alt: ["Echere m na ị na-arịa ọrịa oyi."], note: "'Echere m na …' = I think that …", src: "igboguide" },
            { ig: "Echere m na ahụrụ m agwọ", en: "I think I saw a snake", alt: ["Echere m na ahụrụ m agwọ."], src: "igboguide" },
            { ig: "Ọ masịrị m", en: "I like it", alt: ["Masịrị m","Ọ na-amasị m"], unsure: true },
            { ig: "Amasịghị m", en: "I do not like it", alt: ["Amasịghị m ya","Ọ amasịghị m"], note: "From the dictionary example 'Ọrụ ahụ amasịghị m' (I did not like that job).", src: "nkowaokwu" },
            { ig: "Ekwenyere m", en: "I agree", alt: ["Ekwenyere m."], unsure: true },
            { ig: "Ekwenyeghị m", en: "I do not agree", alt: ["Ekwenyeghị m."], unsure: true },
            { ig: "ikekwe", en: "maybe / perhaps", note: "Dictionary example: Ikekwe di ya enwetabeghị ọrụ ahụ (perhaps her husband has not found that job).", src: "nkowaokwu" }
          ]
        },
        {
          id: "op-advice",
          title: "Friendly advice",
          tip: "'Kwesịrị ị …' means 'you should …'. Soften advice with 'Biko' (please).",
          items: [
            { ig: "Ha kwesịrị ịma ebe anyị nọ", en: "They should know where we are", alt: ["Ha kwesịrị ịma ebe anyị nọ."], note: "'kwesịrị' = should / ought to. Dictionary example.", src: "nkowaokwu" },
            { ig: "Ị kwesịrị ịga ụlọ", en: "You should go home", alt: ["Kwesịrị ị ịga ụlọ"], unsure: true },
            { ig: "Esogbuna", en: "Don't worry", alt: ["Esogbuna!"], unsure: true, src: "igboguide" },
            { ig: "Lema kwa!", en: "Look out!", alt: ["Lèmá kwá!"], unsure: true, src: "wikivoyage" },
            { ig: "ngwa ngwa", en: "quickly / hurry up", alt: ["ngwangwa"], note: "Dictionary: ńgwáńgwá = quick, fast. 'Ngwa ngwa!' = Hurry up!", src: "nkowaokwu" },
            { ig: "Ka anyị gaa ebe ahụ", en: "Let us go there", alt: ["Ka anyị gaa ebe ahụ."], note: "'Ka anyị …' = let us …", src: "igboguide" },
            { ig: "Ikekwe, anyị nwere ike inye aka", en: "Maybe we can help", alt: ["Ike kwe, anyị nwere ike inye aka"], unsure: true, src: "igboguide" }
          ]
        }
      ]
    },

    /* ───────────────────────── COUNTRIES & PEOPLES (Section 2) ───────────────────────── */
    {
      id: "peoples",
      title: "Countries & Peoples",
      igTitle: "Ndị Mmadụ",
      color: "#4b4fc4",
      description: "Igbo, Yoruba, Hausa, English and American: peoples and the languages they speak.",
      lessons: [
        {
          id: "ppl-words",
          title: "Peoples and languages",
          tip: "'ndị' + a name makes a group of people: ndị Igbo (the Igbo people). The same name is often the language.",
          items: [
            { ig: "ndị Igbo", en: "the Igbo people", alt: ["Ndị Igbo"], note: "'ndị' = people (plural).", src: "nkowaokwu" },
            { ig: "Yoruba", en: "Yoruba (people or language)", alt: ["Yòròbá","Yoroba"], src: "nkowaokwu" },
            { ig: "Awụsa", en: "Hausa (people or language)", alt: ["Hausa"], src: "nkowaokwu" },
            { ig: "Amerika", en: "America / the USA", alt: ["Amerịka"], src: "nkowaokwu" },
            { ig: "Bekee", en: "English (language or people) / foreign", note: "The dictionary also uses it for people from overseas. See the question about this word.", src: "nkowaokwu" },
            { ig: "asụsụ", en: "language", note: "From the dictionary example Ọ na-asụ asụsụ Bekee.", src: "nkowaokwu" },
            { ig: "onye ọcha", en: "a white person", unsure: true }
          ]
        },
        {
          id: "ppl-talk",
          title: "Who speaks what",
          tip: "'A bụ m onye …' (I am a … person) and 'Ana m asụ …' (I speak …) work for every country and language.",
          items: [
            { ig: "A bụ m onye Amerika", en: "I am American", alt: ["A bụ m onye Amerịka"], unsure: true },
            { ig: "Ọ na-asụ asụsụ Bekee", en: "He / she speaks English", alt: ["Ọ na-asụ asụsụ Bekee."], src: "nkowaokwu" },
            { ig: "Asụsụ ọ na-asụ bụ Yoroba", en: "The language she speaks is Yoruba", alt: ["Asụsụ ọ na-asụ bụ Yoruba","Asụsụ ọ na-asụ bụ Yoroba."], src: "nkowaokwu" },
            { ig: "Anyị ga-agaghachi Amerịka", en: "We will go back to America", alt: ["Anyị ga-agaghachi Amerika","Anyị ga-agaghachi Amerịka."], src: "nkowaokwu" },
            { ig: "Ana m asụ Igbo na Bekee", en: "I speak Igbo and English", alt: ["Ana m asụ Igbo na Bekee."], unsure: true },
            { ig: "Ị na-asụ Yoruba?", en: "Do you speak Yoruba?", alt: ["I na-asụ Yoruba?"], unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── LINKING WORDS (Section 2) ───────────────────────── */
    {
      id: "linking",
      title: "Linking Words",
      color: "#157a43",
      description: "And, but, so, instead of, also, all: words that join sentences.",
      lessons: [
        {
          id: "link-words",
          title: "And, but, so",
          tip: "'na' joins two things (anụ na ọkụkọ). 'mana' (but) and 'yabụ' (so) join two sentences.",
          items: [
            { ig: "na", en: "and / with", note: "Use it between nouns: anụ na ọkụkọ (meat and chicken).", src: "igboguide" },
            { ig: "mana", en: "but", unsure: true, src: "igboguide" },
            { ig: "yabụ", en: "so / therefore", note: "Dictionary example: Ọ bịaghị, yabụ, anyị agaghị enye ya (she did not come, so we will not give it to her).", src: "nkowaokwu" },
            { ig: "kama", en: "instead of", unsure: true, src: "igboguide" },
            { ig: "mgbe ahụ", en: "then / at that time", unsure: true, src: "igboguide" },
            { ig: "ọzọ", en: "again / another / more", unsure: true, src: "omniglot" },
            { ig: "niile", en: "all / every", note: "Example in the app: Ọ zara ajụjụ niile.", src: "nkowaokwu" },
            { ig: "nke ukwuu", en: "very / very much", note: "Dictionary example: Nri a dị ụtọ nke ukwuu.", src: "nkowaokwu" }
          ]
        },
        {
          id: "link-talk",
          title: "Joining sentences",
          tip: "Put the linking word between the two parts: Ọ dị mma, mana ọ dị oke ọnụ (It is good, but it is too expensive).",
          items: [
            { ig: "Ọ dị mma, mana ọ dị oke ọnụ", en: "It is good, but it is too expensive", alt: ["Ọ dị mma, mana ọ dị oke ọnụ."], unsure: true },
            { ig: "Achọrọ m anụ kama ọkụkọ", en: "I want meat instead of chicken", alt: ["Achọrọ m anụ kama ọkụkọ."], unsure: true, src: "igboguide" },
            { ig: "Ọ bịaghị, yabụ, anyị agaghị enye ya", en: "She did not come, so we will not give it to her", alt: ["Ọ bịaghị, yabụ, anyị agaghị enye ya."], src: "nkowaokwu" },
            { ig: "Anyị nọ n'ụzọ ugbua", en: "We are on the way now", alt: ["Anyị nọ n'ụzọ ugbua.","Anyị nọ n'ụzọ ugbu a"], note: "The dictionary writes 'ugbua' as one word.", src: "nkowaokwu" },
            { ig: "Achọrọ m ihe ọzọ", en: "I want something else", alt: ["Achọrọ m ihe ọzọ."], unsure: true },
            { ig: "Mgbe ahụ, anyị ga-aga ahịa", en: "Then we will go to the market", alt: ["Mgbe ahụ, anyị ga-aga ahịa."], unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── 9. TIME & DAYS ───────────────────────── */
    {
      id: "time",
      title: "Time & Days",
      igTitle: "Oge na Ụbọchị",
      color: "#7f5420",
      description: "Today, tomorrow, the four Igbo market days and times of day.",
      lessons: [
        {
          id: "time-days",
          title: "Today & tomorrow",
          tip: "'taa' (today), 'echi' (tomorrow), 'ụnyaahụ' (yesterday).",
          items: [
            { ig: "taa", en: "today", src: "elias" },
            { ig: "echi", en: "tomorrow", src: "elias" },
            { ig: "ụnyaahụ", en: "yesterday", alt: ["ụnyahụ", "nnyaahụ"], src: "nkowaokwu" },
            { ig: "ugbu a", en: "now" },
            { ig: "oge", en: "time" },
            { ig: "ụbọchị", en: "day", src: "elias" }
          ]
        },
        {
          id: "time-parts",
          title: "Times of the day",
          tip: "Combine with 'ọma' (good) to make greetings: Ụtụtụ ọma, Mgbede ọma.",
          items: [
            { ig: "ụtụtụ", en: "morning" },
            { ig: "ehihie", en: "afternoon / midday" },
            { ig: "mgbede", en: "evening" },
            { ig: "abalị", en: "night" },
            { ig: "izu", en: "week (traditional 4-day week)", alt: ["izu ụka"], src: "wiki-cal" },
            { ig: "ọnwa", en: "month (also moon)", src: "wiki-cal" },
            { ig: "afọ", en: "year" }
          ]
        },
        {
          id: "time-market",
          title: "The 4 market days",
          tip: "The traditional Igbo week (izu) has FOUR days: Eke, Orie, Afọ, Nkwọ. Many markets and towns are named after them!",
          items: [
            { ig: "Eke", en: "1st market day", src: "wiki-cal" },
            { ig: "Orie", en: "2nd market day", alt: ["Oye"], src: "wiki-cal" },
            { ig: "Afọ", en: "3rd market day", alt: ["Afor"], src: "wiki-cal" },
            { ig: "Nkwọ", en: "4th market day", alt: ["Nkwo"], src: "wiki-cal" },
            { ig: "ahịa", en: "market" },
            { ig: "Ụbọchị Ụka", en: "Sunday (lit. 'church day')", unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── 7. BODY ───────────────────────── */
    {
      id: "body",
      title: "The Body",
      igTitle: "Ahụ",
      color: "#0f7a72",
      description: "Head, eyes, hands, feet — and saying something hurts.",
      lessons: [
        {
          id: "body-head",
          title: "Head & face",
          tip: "'isi' (head) is also used for 'main/chief' — 'isi ụlọ akwụkwọ' = head teacher.",
          items: [
            { ig: "ahụ", en: "body" },
            { ig: "isi", en: "head" },
            { ig: "anya", en: "eye" },
            { ig: "ntị", en: "ear" },
            { ig: "imi", en: "nose" },
            { ig: "ọnụ", en: "mouth" },
            { ig: "ezé", en: "tooth", alt: ["eze"], note: "Tone matters: 'eze' (king) vs 'ezé' (tooth)." },
            { ig: "ntutu", en: "hair" }
          ]
        },
        {
          id: "body-limbs",
          title: "Hands, legs & more",
          tip: "'aka' covers both hand and arm; 'ụkwụ' covers both foot and leg.",
          items: [
            { ig: "aka", en: "hand / arm" },
            { ig: "ụkwụ", en: "foot / leg" },
            { ig: "mkpịsị aka", en: "finger" },
            { ig: "olu", en: "neck (also voice)" },
            { ig: "obi", en: "heart / chest" },
            { ig: "afọ", en: "stomach / belly", note: "Also means 'year' — tone and context tell them apart." },
            { ig: "azụ", en: "back (of the body)" }
          ]
        },
        {
          id: "body-health",
          title: "Feeling unwell",
          tip: "'na-awa m' = 'is splitting me' — used for headaches.",
          items: [
            { ig: "Isi na-awa m", en: "I have a headache" },
            { ig: "Ahụ adịghị m mma", en: "I don't feel well" },
            { ig: "Afọ na-eme m", en: "My stomach hurts", unsure: true },
            { ig: "dọkịta", en: "doctor" },
            { ig: "ọgwụ", en: "medicine" },
            { ig: "Ndo", en: "Sorry (sympathy)" }
          ]
        }
      ]
    },

    /* ───────────────────────── 11. EVERYDAY PHRASES ───────────────────────── */
    {
      id: "everyday",
      title: "Everyday Phrases",
      igTitle: "Okwu Kwa Ụbọchị",
      color: "#b0213f",
      description: "Places, questions, and phrases you'll hear around the house.",
      lessons: [
        {
          id: "every-places",
          title: "Places",
          tip: "'ụlọ' = house/building. 'ụlọ akwụkwọ' = school (house of books).",
          items: [
            { ig: "ụlọ", en: "house / home" },
            { ig: "ụlọ akwụkwọ", en: "school" },
            { ig: "ụka", en: "church" },
            { ig: "ahịa", en: "market" },
            { ig: "ụzọ", en: "road / way / door" },
            { ig: "obodo", en: "town / village / country" },
            { ig: "ego", en: "money" }
          ]
        },
        {
          id: "every-questions",
          title: "Questions",
          tip: "Question words: gịnị (what), ebee (where), onye (who), ole (how many), kedu (how), olee mgbe (when).",
          items: [
            { ig: "Gịnị?", en: "What?" },
            { ig: "Ebee?", en: "Where?" },
            { ig: "Onye?", en: "Who?" },
            { ig: "Olee mgbe?", en: "When?", unsure: true },
            { ig: "Gịnị mere?", en: "Why? / What happened?", unsure: true },
            { ig: "Gịnị bụ nke a?", en: "What is this?" },
            { ig: "Ebee ka ọ dị?", en: "Where is it?" }
          ]
        },
        {
          id: "every-heart",
          title: "Phrases from the heart",
          tip: "'n'anya' literally means 'in the eye' — 'Ahụrụ m gị n'anya' = 'I see you in my eye' = I love you.",
          items: [
            { ig: "Ahụrụ m gị n'anya", en: "I love you" },
            { ig: "Ọ dị mma", en: "It's good / It's okay" },
            { ig: "Ọ dịghị mma", en: "It's not good" },
            { ig: "Jisie ike", en: "Well done / Keep it up (lit. 'hold strength')" },
            { ig: "Nwayọọ nwayọọ", en: "Slowly, slowly / Take it easy", unsure: true },
            { ig: "Ọ dị ka nne ya", en: "She looks like her mother", alt: ["Ọ dị ka nne ya."], note: "'Ọ dị ka …' = it is like … / it seems …. Here 'ọ' means she.", unsure: true },
            { ig: "Chukwu nọ", en: "God is there (encouragement)", unsure: true }
          ]
        },
        {
          id: "every-help",
          title: "Help & emergencies",
          tip: "Hopefully you'll never need these, but 'Nyere m aka!' (help me!) is one of the most useful phrases to know.",
          items: [
            { ig: "Nyere m aka!", en: "Help (me)!", alt: ["Nyere m aka"], src: "omniglot" },
            { ig: "Kwụsị!", en: "Stop!", alt: ["Kwụsi!"], src: "omniglot" },
            { ig: "Ọkụ!", en: "Fire!", src: "omniglot" },
            { ig: "Kpọọ ndị uwe ojii!", en: "Call the police! (lit. 'the black-uniform people')", src: "omniglot" },
            { ig: "Ebee ka ụlọ mposi dị?", en: "Where is the toilet?", src: "omniglot" },
            { ig: "Hapụ m aka!", en: "Leave me alone!", src: "omniglot" },
            { ig: "Pụọ ebe a!", en: "Go away! / Get out of here!", src: "omniglot" }
          ]
        },
        {
          id: "every-celebrate",
          title: "Celebrations",
          tip: "'Ekene' means greetings. Add the occasion after it.",
          items: [
            { ig: "Ekene Ekeresimesi", en: "Happy Christmas (Christmas greetings)", src: "omniglot" },
            { ig: "Ekene afọ ọhụụ", en: "Happy New Year (New Year greetings)", alt: ["Ekene afọ ọhụrụ"], src: "omniglot" },
            { ig: "Ekene ncheta ọmụmụ", en: "Happy birthday (birthday greetings)", src: "omniglot" },
            { ig: "Ekene mbilite ọnwụ Kristi", en: "Happy Easter (Easter greetings)", src: "omniglot" },
            { ig: "Mma mma nụ!", en: "Cheers! (a toast)", src: "omniglot" },
            { ig: "Chukwu alụka!", en: "Congratulations! (lit. 'God has done it')", unsure: true, src: "omniglot" }
          ]
        }
      ]
    },

    /* ───────────────────────── TELLING THE TIME (Section 3) ───────────────────────── */
    {
      id: "clock",
      title: "Telling the Time",
      igTitle: "Elekere",
      color: "#4b4fc4",
      description: "What time is it? Hours, minutes, half past, and times of day.",
      lessons: [
        {
          id: "clk-words",
          title: "Hours and minutes",
          tip: "'elekere' is the clock and also the hour (o'clock). Say the number after it: elekere otu = one o'clock.",
          items: [
            { ig: "elekere", en: "clock / hour (o'clock)", note: "From English 'clock'.", src: "nkowaokwu" },
            { ig: "nkeji", en: "minute", src: "nkowaokwu" },
            { ig: "ọkara", en: "half", src: "nkowaokwu" },
            { ig: "anyasị", en: "night (sunset to sunrise)", note: "A dictionary variant of 'abalị'.", src: "nkowaokwu" },
            { ig: "Olee ihe elekere nọ?", en: "What time is it?", alt: ["Olee ihe elekere no?","Ọ bụ elekere ole?", "Elekere ole ka ọ bụ?", "Ọ bụ elekere ole?"], unsure: true, src: "igboguide" },
            { ig: "Ọ nọ elekere otu", en: "It is one o'clock", alt: ["Ọ nọ elekere otu."], unsure: true, src: "igboguide" },
            { ig: "n'elekere anọ", en: "at four o'clock", alt: ["na elekere anọ"], unsure: true, src: "igboguide" }
          ]
        },
        {
          id: "clk-talk",
          title: "Times of day and plans",
          tip: "Say the part of the day after the hour (elekere isii na ụtụtụ = six in the morning), because 'four o'clock' alone could be day or night.",
          items: [
            { ig: "n'ụtụtụ", en: "in the morning", note: "Dictionary example for ụtụtụ.", src: "nkowaokwu" },
            { ig: "ufochi", en: "dawn", alt: ["ùfóchí"], src: "nkowaokwu" },
            { ig: "elekere isii na ụtụtụ", en: "six o'clock in the morning", alt: ["elekere isii n'ụtụtụ"], unsure: true, src: "wikivoyage" },
            { ig: "elekere itoolu na ụtụtụ", en: "nine o'clock in the morning", alt: ["elekere itoolu n'ụtụtụ"], unsure: true, src: "wikivoyage" }
          ]
        }
      ]
    },

    /* ───────────────────────── THE PAST (Section 3) ───────────────────────── */
    {
      id: "past",
      title: "The Past",
      color: "#0b6fa4",
      description: "Said and done: the -rV ending that tells you something already happened.",
      lessons: [
        {
          id: "past-form",
          title: "Went, ate, came",
          tip: "To say something happened, many verbs add -r + the same vowel: gaa → gara (went), ri → riri (ate). It shows a finished action. Some linguists call it 'completed' rather than 'past'.",
          items: [
            { ig: "gara", en: "went", note: "Past of 'gaa' (go).", src: "nkowaokwu" },
            { ig: "jere", en: "went (another word for 'go')", unsure: true, src: "igbostudy" },
            { ig: "riri", en: "ate", note: "Past of 'ri' (eat).", unsure: true },
            { ig: "M gara ahịa", en: "I went to the market", alt: ["M gara ahịa.","Agara m ahịa", "Agara m ahịa"], unsure: true, src: "igbostudy" },
            { ig: "Ọ gara ahịa", en: "She / he went to the market", alt: ["Ọ gara ahịa."], unsure: true },
            { ig: "M jere ebe ahụ ụnyaahụ", en: "I went to that place yesterday", alt: ["M jere ebe ahụ ụnyaahụ.", "Ejere m ebe ahụ ụnyaahụ"], unsure: true, src: "latinum" },
            { ig: "Ha gawara ụlọ ọgwụ", en: "They went to the hospital", alt: ["Ha gawara ụlọ ọgwụ."], unsure: true, src: "igboguide" }
          ]
        },
        {
          id: "past-talk",
          title: "What happened",
          tip: "The same -rV pattern: hụ → hụrụ (saw), zụta → zụtara (bought). Every sentence here is a dictionary example.",
          items: [
            { ig: "Ahụrụ m ya n'ochenkwago dị n'imụlọ", en: "I saw it on the table in the bedroom", alt: ["Ahụrụ m ya n'ochenkwago dị n'imụlọ."], note: "'ahụrụ' = saw.", src: "nkowaokwu" },
            { ig: "Abanyere m n'imụlọ ozugbo", en: "I went into the room immediately", alt: ["Abanyere m n'imụlọ ozugbo."], note: "'ozugbo' = immediately.", src: "nkowaokwu" },
            { ig: "Ada zụtara ite ọzọ", en: "Ada bought another pot", alt: ["Ada zụtara ite ọzọ."], src: "nkowaokwu" },
            { ig: "Chikọdị zụtara nwamba ọhụrụ", en: "Chikodi bought a new cat", alt: ["Chikọdị zụtara nwamba ọhụrụ."], src: "nkowaokwu" },
            { ig: "Enyi m zụtaara m akpa ojii", en: "My friend bought me a black bag", alt: ["Enyi m zụtaara m akpa ojii."], note: "'zụtaara m' = bought for me.", src: "nkowaokwu" },
            { ig: "Anyị gara ụlọ akwụkwọ", en: "We went to school", alt: ["Anyị gara ụlọ akwụkwọ."], unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── THE FUTURE (Section 3) ───────────────────────── */
    {
      id: "future",
      title: "The Future",
      igTitle: "Ọdịnihu",
      color: "#157a43",
      description: "Will do: ga- and Aga m, with tomorrow, today and the evening.",
      lessons: [
        {
          id: "fut-form",
          title: "Will come, will eat",
          tip: "Put 'ga-' before the verb for the future: ga-abịa (will come), ga-eri (will eat). 'Aga m …' = 'I will …'. 'Agaghị m …' = 'I will not …'.",
          items: [
            { ig: "ga", en: "will (marks the future)", alt: ["ga-"], note: "Joined to the verb with a hyphen: ga-abịa.", src: "nkowaokwu" },
            { ig: "ga-abịa", en: "will come", alt: ["ga abịa"], src: "nkowaokwu" },
            { ig: "ga-eri", en: "will eat", alt: ["ga eri"], src: "nkowaokwu" },
            { ig: "ga-ahụ", en: "will see", alt: ["ga ahụ"], src: "nkowaokwu" },
            { ig: "ga-aga", en: "will go", alt: ["ga aga"], src: "igbostudy" },
            { ig: "aga m", en: "I will", alt: ["a ga m","m ga-"], note: "'Aga m + verb': Aga m ewetara gị akwa ahụ (I will bring you that cloth). Dictionary examples use it.", src: "nkowaokwu" },
            { ig: "izu nabịa", en: "next week", alt: ["izu na-abịa"], unsure: true, src: "wikivoyage" }
          ]
        },
        {
          id: "fut-talk",
          title: "Plans and promises",
          tip: "Say when with echi (tomorrow), taa (today) or n'ụtụtụ (in the morning).",
          items: [
            { ig: "Ha ga-eri nri ma e mechaa", en: "They will eat afterwards", alt: ["Ha ga-eri nri ma e mechaa."], note: "'ma e mechaa' = after it is finished.", src: "nkowaokwu" },
            { ig: "Anyị ga-ahụ echi", en: "We will see tomorrow", alt: ["Anyị ga-ahụ echi."], src: "nkowaokwu" },
            { ig: "Ị ga-enye m ego m taa", en: "You will give me my money today", alt: ["Ị ga-enye m ego m taa."], src: "nkowaokwu" },
            { ig: "A ga m abịa na uhuluchi", en: "I will come in the evening", alt: ["A ga m abịa na mgbede","A ga m abịa na uhuluchi."], note: "'uhuluchi' is a dialect word for evening; the standard word is 'mgbede'.", src: "nkowaokwu" },
            { ig: "Aga m ewetara gị akwa ahụ n'ụtụtụ", en: "I will bring you that cloth in the morning", alt: ["Aga m ewetara gị akwa ahụ n'ụtụtụ."], src: "nkowaokwu" },
            { ig: "M ga-abịa echi n'ụtụtụ", en: "I will come tomorrow morning", alt: ["M ga-abịa echi n'ụtụtụ.", "Aga m abịa echi n'ụtụtụ"], unsure: true, src: "latinum" },
            { ig: "M ga-eri ji n'anyasị", en: "I will eat yam in the evening", alt: ["M ga-eri ji n'anyasị.", "Aga m eri ji n'anyasị"], unsure: true, src: "latinum" }
          ]
        }
      ]
    },

    /* ───────────────────────── FEELINGS (Section 3) ───────────────────────── */
    {
      id: "feelings",
      title: "Feelings",
      color: "#a8336f",
      description: "Happy, sad, angry, tired and afraid.",
      lessons: [
        {
          id: "feel-words",
          title: "Happy, sad, angry, tired",
          tip: "Igbo often says feelings 'do' something to you: Iwe na-ewe m = anger is acting on me = I am angry.",
          items: [
            { ig: "obi ụtọ", en: "happy (lit. sweet heart)", unsure: true, src: "wikivoyage" },
            { ig: "Obi ụtọ na-eme m", en: "I am happy", alt: ["Obi dị m ụtọ"], unsure: true, src: "wikivoyage" },
            { ig: "aṅụrị", en: "joy / happiness", alt: ["anụrị"], note: "Dictionary: aṅụ̀rị, also cheerful.", src: "nkowaokwu" },
            { ig: "mwute", en: "sadness / grief", src: "nkowaokwu" },
            { ig: "Anọ m na mwute", en: "I am sad", alt: ["Anọ m na nwute"], unsure: true, src: "wikivoyage" },
            { ig: "iwe", en: "anger / annoyance", src: "nkowaokwu" },
            { ig: "Iwe na-ewe m", en: "I am angry", alt: ["Iwe ji m"], unsure: true, src: "wikivoyage" },
            { ig: "Ike gwụrụ m", en: "I am tired", alt: ["Ike agwụla m"], unsure: true, src: "wikivoyage" }
          ]
        },
        {
          id: "feel-talk",
          title: "Fear, joy and how you are",
          tip: "'Atụ egwu' means to fear. 'na-' makes it ongoing: Nkịta anaghị atụ m egwu = dogs do not scare me.",
          items: [
            { ig: "ụjọ", en: "fear / nervousness", note: "Also anxiety and cowardice.", src: "nkowaokwu" },
            { ig: "Ụjọ na-atụ m", en: "I am afraid", unsure: true, src: "wikivoyage" },
            { ig: "Nkịta anaghị atụ m egwu", en: "Dogs do not scare me", alt: ["Nkịta anaghị atụ m egwu."], note: "Careful: 'egwu' means fear here, but music and dance elsewhere (tone: égwù vs egwu).", src: "nkowaokwu" },
            { ig: "Ọ na-enwe aṅụrị n'ime obi ya", en: "He / she is full of joy in her heart", alt: ["Ọ na-enwe anụrị n'ime obi ya","Ọ na-enwe aṅụrị n'ime obi ya."], src: "nkowaokwu" },
            { ig: "Gịnị na-ewe gị?", en: "Why are you angry? (lit. what is acting on you?)", alt: ["Gịnị na-ewe ya?", "Gịnị na-ewe gị iwe?"], unsure: true, src: "ucla1981" },
            { ig: "Obi ụtọ na-eme m, mana ike gwụrụ m", en: "I am happy, but I am tired", alt: ["Obi ụtọ na-eme m, mana ike gwụrụ m."], unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── DESCRIBING PEOPLE (Section 3) ───────────────────────── */
    {
      id: "people",
      title: "Describing People",
      color: "#0f7a72",
      description: "Tall, short, old, young, neighbours and friends.",
      lessons: [
        {
          id: "pers-words",
          title: "Young, old and nearby",
          tip: "To describe a person, use the adjectives from Describing Things: ogologo (tall), mkpụmkpụ (short), ochie/agadị (old).",
          items: [
            { ig: "nwata", en: "child / young one", note: "Dictionary: little child; young.", src: "nkowaokwu" },
            { ig: "agadị", en: "old person / adult / old age", alt: ["agadi"], note: "Used for people. For things, use 'ochie'.", src: "nkowaokwu" },
            { ig: "ọchị", en: "laughter / smile", src: "nkowaokwu" },
            { ig: "Ọ na-achị ọchị", en: "He / she is laughing", alt: ["Ọ na-achị ọchị."], unsure: true },
            { ig: "agbata", en: "nearby / neighbourhood / beside", alt: ["àgbàtà"], note: "Dictionary: surrounding, nearby.", src: "nkowaokwu" },
            { ig: "onye agbata obi", en: "neighbour", alt: ["onye agbatobi"], unsure: true, src: "wikivoyage" }
          ]
        },
        {
          id: "pers-talk",
          title: "Talking about people",
          tip: "'Onye m hụrụ …' means 'the person I saw …'. 'n'agbata nke gị' = next to yours.",
          items: [
            { ig: "Ahụbeghị m onye toro ogologo ka Chukwudị", en: "I have not seen anyone as tall as Chukwudi", alt: ["Ahụbeghị m onye toro ogologo ka Chukwudị."], note: "'toro ogologo' = grew tall.", src: "nkowaokwu" },
            { ig: "Onye m hụrụ bụ agadị", en: "The person I saw was an old person", alt: ["Onye m hụrụ bụ agadị."], src: "nkowaokwu" },
            { ig: "E nwere onye na-arụ ụlọ n'agbata nke gị", en: "Someone is building a house next to yours", alt: ["E nwere onye na-arụ ụlọ n'agbata nke gị."], src: "nkowaokwu" },
            { ig: "Ọ toro ogologo", en: "He / she is tall", alt: ["Ọ toro ogologo."], unsure: true },
            { ig: "Enyi m bụ nwoke ọma", en: "My friend is a good man", alt: ["Enyi m bụ nwoke ọma."], unsure: true },
            { ig: "Nwa m dị mkpụmkpụ", en: "My child is short", unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── CHATTING WITH FRIENDS (Section 3) ───────────────────────── */
    {
      id: "chat",
      title: "Chatting with Friends",
      color: "#9a5f00",
      description: "Say 'Wow!', 'Really?' and 'What's up?' to friends.",
      lessons: [
        {
          id: "chat-wow",
          title: "Wow! Really?",
          tip: "Surprise words are short. Say them with feeling: Hei! Chai! Chineke! (Note: 'Chineke' means God, like 'Oh my God' in English.)",
          items: [
            { ig: "Hei!", en: "Oh! (surprise)", alt: ["Heì!","Hei"], src: "nkowaokwu" },
            { ig: "Chai!", en: "Wow! / Oh no! (shock, surprise, pity)", alt: ["Chei!","Chai"], unsure: true, src: "wikivoyage" },
            { ig: "Chineke!", en: "God! (an exclamation)", alt: ["Chineke"], note: "Used like 'Oh my God!'.", src: "nkowaokwu" },
            { ig: "Nenu!", en: "Look at that! (surprise)", alt: ["Nenu"], unsure: true, src: "wikivoyage" },
            { ig: "Inukwa?", en: "Can you imagine?", alt: ["Inukwa","Inukwá?"], unsure: true, src: "wikivoyage" },
            { ig: "Eziokwu?", en: "Really? / Is it true?", alt: ["Ezi okwu?","Eziokwu"], unsure: true, src: "wikivoyage" }
          ]
        },
        {
          id: "chat-talk",
          title: "Talking to friends",
          tip: "With friends, greet short and warm. Add 'enyi m' (my friend).",
          items: [
            { ig: "Nda?", en: "What's up?", alt: ["Ǹdâ?"], unsure: true, src: "wikivoyage" },
            { ig: "Enyi m, kedụ ka ị mere?", en: "My friend, how are you?", alt: ["Enyi m, kedụ ka ị mere"], unsure: true },
            { ig: "Hei! Nke a karịrị m", en: "Oh! This is too much for me", alt: ["Hei! Nke a karịrị m."], note: "'karịrị m' = is more than I can take.", src: "nkowaokwu" },
            { ig: "Ka anyị gaa ahịa", en: "Let's go to the market", alt: ["Ka anyị gaa ahịa."], unsure: true },
            { ig: "Ee, eziokwu", en: "Yes, it is true", alt: ["Ee, eziokwu."], unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── CITIES & TOWNS (Section 3) ───────────────────────── */
    {
      id: "cities",
      title: "Cities & Towns",
      igTitle: "Obodo",
      color: "#6d4bc4",
      description: "Enugu, Onitsha, Owerri and Lagos, and what a big town is like.",
      lessons: [
        {
          id: "city-words",
          title: "Big towns and city names",
          tip: "City names keep their usual spelling. A big town can be 'obodo ukwu'.",
          items: [
            { ig: "obodo ukwu", en: "city / big town", alt: ["obodo mepere emepe"], unsure: true },
            { ig: "ime obodo", en: "village / countryside", unsure: true },
            { ig: "Enugu", en: "Enugu (a city in Igboland)", alt: ["Enugụ"], note: "Ebi m n'Enugu = I live in Enugu.", src: "ilanguages" },
            { ig: "Onitsha", en: "Onitsha (a city in Igboland)", src: "ilanguages" },
            { ig: "Owerri", en: "Owerri (a city in Igboland)", src: "ilanguages" },
            { ig: "Aba", en: "Aba (a city in Igboland)", src: "ilanguages" },
            { ig: "Legọọsị", en: "Lagos", alt: ["Lagos"], unsure: true }
          ]
        },
        {
          id: "city-talk",
          title: "Talking about towns",
          tip: "'buru ibu' = is big. Add 'n'' for in: n'Enugu = in Enugu.",
          items: [
            { ig: "Obodo anyị buru ibu", en: "Our town (country) is big", alt: ["Obodo anyị buru ibu."], note: "The dictionary translates it as 'Our country is big'.", src: "nkowaokwu" },
            { ig: "Ibi n'Legọọsị adịghị ofele", en: "Living in Lagos is not easy", alt: ["Ibi n'Legọọsị adịghị ofele."], note: "Dictionary example. 'ibi' = to live.", src: "nkowaokwu" },
            { ig: "Ebi m n'Owerri", en: "I live in Owerri", alt: ["Ebi m n'Owerri."], unsure: true },
            { ig: "Onitsha bụ obodo ukwu", en: "Onitsha is a big town", alt: ["Onitsha bụ obodo ukwu."], unsure: true },
            { ig: "Anyị ga-aga Onitsha echi", en: "We will go to Onitsha tomorrow", alt: ["Anyị ga-aga Onitsha echi."], unsure: true },
            { ig: "Ị bi n'obodo ukwu?", en: "Do you live in a big town?", alt: ["I bi n'obodo ukwu?"], unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── NATURE (Section 3) ───────────────────────── */
    {
      id: "nature",
      title: "Nature",
      color: "#4f6b1c",
      description: "Sun, stars, wind, mountains, rivers and wild animals.",
      lessons: [
        {
          id: "nat-world",
          title: "Sky, land and water",
          tip: "Several nature words share their spelling with other words, so tone matters: igwe (sky) is not igwe (iron).",
          items: [
            { ig: "anyanwụ", en: "sun / sunlight", alt: ["anwụ"], note: "The dictionary has both 'anyanwụ' and the short 'anwụ'.", src: "nkowaokwu" },
            { ig: "kpakpando", en: "star", src: "nkowaokwu" },
            { ig: "igwe", en: "sky", note: "Tone: igwe (sky). The same spelling also means iron / machine.", src: "nkowaokwu" },
            { ig: "ikuku", en: "wind / air", src: "nkowaokwu" },
            { ig: "osisi", en: "tree / wood", src: "nkowaokwu" },
            { ig: "ugwu", en: "mountain / hill", note: "Other words share the spelling (e.g. respect).", src: "nkowaokwu" },
            { ig: "osimiri", en: "river", note: "In the dictionary: usually refers to the Niger.", src: "nkowaokwu" },
            { ig: "ụwa", en: "world / earth / life", src: "nkowaokwu" }
          ]
        },
        {
          id: "nat-talk",
          title: "Weather and wild animals",
          tip: "Most lines here are dictionary examples. 'Anwụ achaghị taa' (The sun did not shine today) shows the negative '-ghị'.",
          items: [
            { ig: "ugo", en: "eagle", src: "nkowaokwu" },
            { ig: "agụiyi", en: "crocodile", alt: ["agụ iyi"], src: "nkowaokwu" },
            { ig: "anụmanụ", en: "animal(s)", alt: ["anụmaanụ"], src: "nkowaokwu" },
            { ig: "Ikuku na-eku", en: "The wind is blowing", alt: ["Ikuku na-eku."], src: "nkowaokwu" },
            { ig: "Igwe achakeela taa", en: "The sky has brightened today", alt: ["Igwe achakeela taa."], src: "nkowaokwu" },
            { ig: "Anwụ achaghị taa", en: "The sun did not shine today", alt: ["Anwụ achaghị taa."], src: "nkowaokwu" },
            { ig: "Ọ na-amasị m ikiri kpakpando n'igwe", en: "I love to look at the stars in the sky", alt: ["Ọ na-amasị m ikiri kpakpando n'igwe."], src: "nkowaokwu" },
            { ig: "Anyị rịgoro n'elu ugwu ahụ", en: "We climbed to the top of that mountain", alt: ["Anyị rịgoro n'elu ugwu ahụ."], src: "nkowaokwu" },
            { ig: "Agụiyi nwere eze dị nkọ", en: "Crocodiles have sharp teeth", alt: ["Agụiyi nwere eze dị nkọ."], src: "nkowaokwu" }
          ]
        }
      ]
    },

    /* ───────────────────────── SPORTS, MUSIC & STORIES (Section 3) ───────────────────────── */
    {
      id: "arts",
      title: "Sports, Music & Stories",
      color: "#b5482a",
      description: "Football, wrestling, swimming, drums, songs and stories.",
      lessons: [
        {
          id: "art-words",
          title: "Games, music and stories",
          tip: "'egwu' means music, song and dance, but with another tone it also means fear (égwù).",
          items: [
            { ig: "bọọlụ", en: "football (soccer) / ball", src: "nkowaokwu" },
            { ig: "mgba", en: "wrestling", note: "A traditional Igbo sport.", src: "nkowaokwu" },
            { ig: "egwu", en: "music / song / dance", note: "Tone: égwù (fear) is a different word.", src: "nkowaokwu" },
            { ig: "abụ", en: "song / hymn", src: "nkowaokwu" },
            { ig: "ịgba", en: "drum", src: "nkowaokwu" },
            { ig: "ọja", en: "flute", src: "nkowaokwu" },
            { ig: "akụkọ", en: "story / tale", note: "Also history or news.", src: "nkowaokwu" }
          ]
        },
        {
          id: "art-talk",
          title: "Talking about games and stories",
          tip: "'gwu mmiri' means to swim; do not mix it with 'gwuo' (dig). Every sentence is a dictionary example.",
          items: [
            { ig: "Ị nụla akụkọ ọhụụ?", en: "Have you heard the new story?", alt: ["Ị nụla akụkọ ọhụrụ?"], src: "nkowaokwu" },
            { ig: "Anyị na-egwu mmiri", en: "We are swimming", alt: ["Anyị na-egwu mmiri."], src: "nkowaokwu" },
            { ig: "Mgba ndị Igbo adịchaghị ka nke ndị Amerịka", en: "Igbo wrestling is not quite like the American kind", alt: ["Mgba ndị Igbo adịchaghị ka nke ndị Amerịka."], src: "nkowaokwu" },
            { ig: "Abụ ahụ na-emetụta m n'obi", en: "That song touches my heart", alt: ["Abụ ahụ na-emetụta m n'obi."], src: "nkowaokwu" },
            { ig: "Amaghị m etu e si egbu ọja", en: "I don't know how to play the flute", alt: ["Amaghị m etu e si egbu ọja."], src: "nkowaokwu" },
            { ig: "Ị chọrọ ka mụ na gị gbaa egwu?", en: "Do you want to dance with me?", alt: ["Ị chọrọ ka m na gị gbaa egwu?"], unsure: true, src: "omniglot" },
            { ig: "Ee, nụrụ m", en: "Yes, I heard it", alt: ["Ee, nụrụ m."], unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── IGBOLAND (Section 3) ───────────────────────── */
    {
      id: "igboland",
      title: "Igboland",
      igTitle: "Ala Igbo",
      color: "#7f5420",
      description: "Kola nut, new yam, masquerades and kings: a taste of Igbo culture.",
      lessons: [
        {
          id: "igl-culture",
          title: "Kola nut, masquerade and kings",
          tip: "The kola nut (ọjị) is offered to guests with a prayer. Masquerades (mmanwụ) are performed by men, and no one asks who is behind the mask.",
          items: [
            { ig: "Ala Igbo", en: "Igboland (the land of the Igbo)", alt: ["Ala Ndị Igbo"], unsure: true, src: "ezinaulo" },
            { ig: "ọjị", en: "kola nut", note: "Also any food offered to a visitor.", src: "nkowaokwu" },
            { ig: "ịwa ọjị", en: "to break the kola nut", alt: ["iwa ọjị"], unsure: true },
            { ig: "Ọjị bụ ndụ", en: "Kola is life", alt: ["Ọjị bụ ndụ."], unsure: true, src: "nkenne" },
            { ig: "Anyị na-enye gị ọjị n'aha Chukwu", en: "We offer you kola in the name of God", alt: ["Anyị na-enye gị ọjị n'aha Chukwu."], unsure: true, src: "nkenne" },
            { ig: "Iri ji", en: "New Yam festival (eating the new yam)", alt: ["Iwa ji"], unsure: true },
            { ig: "mmanwụ", en: "masquerade (masked spirit figure)", alt: ["mmọnwụ"], note: "The dictionary headword is 'mmọnwụ'; 'mmanwụ' is the common variant.", src: "nkowaokwu" },
            { ig: "Mmọnwụ atọ bịara mmemme ahụ", en: "Three masquerades came to the event", alt: ["Mmanwụ atọ bịara mmemme ahụ","Mmọnwụ atọ bịara mmemme ahụ."], src: "nkowaokwu" },
            { ig: "E chiri ya eze ọhụrụ", en: "He was crowned a new king", alt: ["E chiri ya eze ọhụrụ."], note: "'eze' = king.", src: "nkowaokwu" }
          ]
        }
      ]
    },
    /* ───────────────────────── PROVERBS (Section 4) ───────────────────────── */
    {
      id: "ilu",
      title: "Proverbs (Ilu)",
      igTitle: "Ilu Igbo",
      color: "#b5482a",
      description: "Proverbs are the heart of Igbo speech. Learn what an ilu is, then a dozen well-known ones.",
      lessons: [
        {
          id: "ilu-intro",
          title: "What is an ilu?",
          tip: "An ilu (proverb) is a short saying that gives advice or a warning. Elders use them in serious talk, and using one correctly shows that you know the culture. Proverbs are best learnt whole, so each one in this unit comes with its word-for-word meaning and what it is used for.",
          items: [
            { ig: "ilu", en: "proverb", note: "A short, well-known saying that states a general truth or advice. (A different word 'ilu' also means bitterness.)", src: "nkowaokwu" },
            { ig: "okwu", en: "word / speech / matter", note: "Also 'a matter' or 'an argument'.", src: "nkowaokwu" },
            { ig: "amamihe", en: "wisdom / knowledge", note: "What proverbs are said to hold.", src: "nkowaokwu" },
            { ig: "nkọwa", en: "explanation / meaning", note: "Ask for the nkọwa when you do not understand a proverb.", src: "nkowaokwu" },
            { ig: "ndị okenye", en: "elders", alt: ["ndi okenye"], note: "Elders are the usual speakers of proverbs.", src: "nkowaokwu" },
            { ig: "Aghọtaghị m ilu a", en: "I did not understand this proverb", alt: ["Aghọtaghị m ilu a."], note: "'-ghị' makes a verb negative: aghọtara m = I understood, aghọtaghị m = I did not understand.", src: "nkowaokwu" },
            { ig: "Ilu bụ mmanụ e ji eri okwu", en: "Proverbs are the palm oil with which words are eaten", alt: ["Ilu bụ mmanụ e ji eri okwu."], note: "Meaning: proverbs make speech rich and tasty, like oil on food. A well-known saying about proverbs themselves.", unsure: true, src: "meigen" }
          ]
        },
        {
          id: "ilu-unity",
          title: "Sharing and living together",
          tip: "These proverbs are about fairness and community. Read the English meaning first, then build the sentence word by word. Notice how 'bụ' (is) links two ideas: 'Azụ bụ eze na mmiri' = a fish is king in water.",
          items: [
            { ig: "egbe", en: "kite (a bird of prey)", src: "nkowaokwu" },
            { ig: "Egbe bere, ugo bere; nke sị ibe ya ebela, nku kwaa ya", en: "Let the kite perch and let the eagle perch; whichever says the other may not perch, may its wing break", alt: ["Egbe bere, ugo bere; nke sị ibe ya ebela, nku kwaa ya.", "Egbe bere ugo bere"], note: "Meaning: live and let live. Everyone has an equal right to the shared space. Said when someone tries to push another out.", src: "ifont" },
            { ig: "Otu osisi adịghị eme oke ọhịa", en: "One tree does not make a forest", alt: ["Otu osisi adighi eme oke ohia", "Otu osisi adịghị eme oke ọhịa."], note: "Meaning: no one succeeds alone, so ask for help. Used to encourage teamwork.", src: "zikoko" },
            { ig: "Igwe bụ ike", en: "A crowd is strength", alt: ["Igwe bu ike"], note: "Meaning: there is strength in numbers and unity.", unsure: true, src: "zikoko" },
            { ig: "Azụ bụ eze na mmiri", en: "A fish is king in the water", alt: ["Azu bu eze na mmiri", "Azụ bụ eze na mmiri."], note: "Meaning: everyone is important and in charge in their own place.", src: "zikoko" },
            { ig: "Aka ekpe kwọ aka nri, aka nri akwọ aka ekpe", en: "If the left hand washes the right, the right washes the left", alt: ["Aka ekpe kwo aka nri, aka nri akwo aka ekpe"], note: "Meaning: favours are returned. One good turn deserves another.", unsure: true, src: "zikoko" }
          ]
        },
        {
          id: "ilu-wisdom",
          title: "Patience, time and wisdom",
          tip: "A proverb often comes after a short story or a problem, and the listener answers with another. Use these when someone is in a hurry, wants to give up, or needs advice. Notice 'adịghị' and 'anaghị' = does not: both make a statement negative.",
          items: [
            { ig: "ndidi", en: "patience", src: "nkowaokwu" },
            { ig: "Ndidi nwe mmeri", en: "Patience brings victory", alt: ["Ndidi nwe mmeri.", "Ndidi nwere mmeri"], note: "Literally 'patience owns victory'. Meaning: the patient person wins in the end.", src: "zikoko" },
            { ig: "Oge adịghị eche mmadụ", en: "Time does not wait for anyone", alt: ["Oge adighi eche mmadu"], note: "Meaning: do not waste time. Used to encourage someone to act now.", unsure: true, src: "legit" },
            { ig: "Onye ajụjụ anaghị efu ụzọ", en: "The one who asks questions does not lose the way", alt: ["Onye ajụjụ anaghị efu ụzọ."], note: "Meaning: asking questions keeps you on course. A good proverb for learners!", unsure: true, src: "meigen" },
            { ig: "Ejula sị: nwayọọ, nwayọọ, ka m wuo ụlọ m", en: "The snail says: slowly, slowly, so that I build my house", alt: ["Ejula sị nwayọọ nwayọọ ka m wuo ụlọ m"], note: "Meaning: steady, patient progress gets the job done.", unsure: true, src: "meigen" },
            { ig: "Ihe okenye nọ ala hụ, nwata akwụ elu ahụghị ya", en: "What an elder sees sitting down, a child standing up cannot see", alt: ["Ihe okenye nọ ala hụ, nwata kwụ n'elu ahụghị ya"], note: "Meaning: experience shows things that youth cannot yet see. Said to respect elders' advice.", unsure: true, src: "meigen" },
            { ig: "Mgbe isi rere, ahụ niile na-arịa", en: "When the head is rotten, the whole body suffers", alt: ["Mgbe isi rere ahụ niile na-arịa"], note: "Meaning: when the leader fails, everybody suffers.", unsure: true, src: "meigen" },
            { ig: "Ewu nwa ogbenye bụ chi ya", en: "A poor person's goat is his 'chi' (his fortune)", alt: ["Ewu nwa ogbenye bu chi ya"], note: "Meaning: be content with what you have; it matters to you as much as a cow does to a rich man. The two sources translate this differently.", unsure: true, src: "zikoko" }
          ]
        }
      ]
    },

    /* ───────────────────────── DISCUSSING & COMPARING (Section 4) ───────────────────────── */
    {
      id: "discuss",
      title: "Discussing & Comparing",
      color: "#4b4fc4",
      description: "Agree, disagree, say why, and compare: bigger than, best, nearest, different.",
      lessons: [
        {
          id: "disc-agree",
          title: "True or not true?",
          tip: "'Ee' (yes) and 'Mba' (no) answer a question. Add 'Ọ bụ eziokwu' (it is the truth) to agree and 'Ọ bụghị' (it is not) to disagree. To say why, use 'n'ihi na' (because). Most of this lesson is built from patterns, so it is on the list for a native speaker to check.",
          items: [
            { ig: "Ee, aga m aga Owere echi", en: "Yes, I will go to Owerri tomorrow", alt: ["Ee, aga m aga Owere echi."], note: "'Ee' starts an answer. 'Aga m aga' = I will go.", src: "nkowaokwu" },
            { ig: "Ọ bụ eziokwu", en: "It is true", alt: ["Ọ bụ eziokwu.", "O bu eziokwu"], note: "Literally 'it is the truth'.", unsure: true },
            { ig: "Ọ bụghị eziokwu", en: "It is not true", alt: ["Ọ bụghị eziokwu.", "O bughi eziokwu"], note: "'bụghị' = is not.", unsure: true },
            { ig: "Echeghị m na ọ bụ eziokwu", en: "I do not think it is true", alt: ["Echeghị m na ọ bụ eziokwu."], note: "The negative of 'Echere m na …' (I think that …).", unsure: true },
            { ig: "n'ihi na", en: "because", alt: ["maka na"], note: "Joins a reason to a statement.", unsure: true },
            { ig: "Ahụ adịghị m mma n'ihi na m rịa ọrịa", en: "I do not feel well because I am sick", alt: ["Ahụ adịghị m mma n'ihi na m rịa ọrịa."], unsure: true },
            { ig: "dịka ọmụmaatụ", en: "for example", alt: ["dika omumaatu"], unsure: true },
            { ig: "ọmụmaatụ", en: "example", alt: ["omumaatu"], unsure: true }
          ]
        },
        {
          id: "disc-more",
          title: "More than",
          tip: "Igbo has no '-er' ending. To say 'A is taller than B', put 'karịa' (more than) between the two: 'Ada toro ogologo karịa Ike' = Ada grew tall more than Ike. The describing word comes first, then karịa, then the thing you compare with.",
          items: [
            { ig: "karịa", en: "more than / than", alt: ["karịrị", "karia"], note: "Put it after the describing word, before the thing you compare. 'karịrị' is the same verb in the past.", src: "nkowaokwu" },
            { ig: "Ikuku na-ekukarị n'ụgụrụ karịa ọkọchị", en: "Wind blows more in the harmattan than in the dry season", alt: ["Ikuku na-ekukarị n'ụgụrụ karịa ọkọchị."], note: "A dictionary example of 'karịa'.", src: "nkowaokwu" },
            { ig: "Nke a ka mma karịa nke ahụ", en: "This one is better than that one", alt: ["Nke a ka mma karịa nke ahụ."], note: "'ka mma' = better.", unsure: true },
            { ig: "Ada toro ogologo karịa Ike", en: "Ada is taller than Ike", alt: ["Ada toro ogologo karịa Ike."], note: "Literally 'Ada grew tall more than Ike'.", unsure: true },
            { ig: "Ụlọ a dị ukwu karịa ụlọ ahụ", en: "This house is bigger than that house", alt: ["Ụlọ a dị ukwu karịa ụlọ ahụ."], unsure: true },
            { ig: "Nke a dị ọnụ karịa nke ahụ", en: "This one is more expensive than that one", alt: ["Nke a dị ọnụ karịa nke ahụ."], note: "'nke a' = this one, 'nke ahụ' = that one.", unsure: true },
            { ig: "Nke a dị njọ karịa nke ahụ", en: "This one is worse than that one", alt: ["Nke a dị njọ karịa nke ahụ."], unsure: true }
          ]
        },
        {
          id: "disc-best",
          title: "Best, nearest, different",
          tip: "For 'the most' or '-est', put 'kacha' (some speakers say 'kachasị') in front of the describing word: 'kacha dị nso' = the nearest. 'Ka mma' means better. Use 'pụrụ iche' for special or different. A short question and answer ends the lesson.",
          items: [
            { ig: "kacha dị nso", en: "the nearest", alt: ["kachasị nso"], note: "'kacha' + describing word = the most. (The dictionary lists a different word 'kacha' too.)", unsure: true, src: "wikivoyage" },
            { ig: "Ebee ka e nwere ụlọ mkpụrụ ọgwụ kacha dị nso?", en: "Where is the nearest pharmacy?", alt: ["Ebee ka e nwere ụlọ mkpụrụ ọgwụ kacha dị nso"], unsure: true, src: "wikivoyage" },
            { ig: "Nke a kacha mma", en: "This one is the best", alt: ["Nke a kacha mma.", "Nke a kachasị mma"], unsure: true },
            { ig: "pụrụ iche", en: "special / unique / different", note: "A dictionary word: 'be extraordinary'.", src: "nkowaokwu" },
            { ig: "Ihe pụrụ iche na-amasị m", en: "I like unique things", alt: ["Ihe pụrụ iche na-amasị m."], src: "nkowaokwu" },
            { ig: "dị iche", en: "be different", alt: ["di iche"], unsure: true },
            { ig: "Kedụ nke ka mma?", en: "Which one is better?", alt: ["Kedu nke ka mma?"], unsure: true },
            { ig: "Nke a ka mma, mana ọ dị oke ọnụ", en: "This one is better, but it is very expensive", alt: ["Nke a ka mma, mana ọ dị oke ọnụ."], note: "'mana' = but.", unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── CUSTOM & RESPECT (Section 4) ───────────────────────── */
    {
      id: "omenala",
      title: "Custom & Respect",
      igTitle: "Omenala",
      color: "#157a43",
      description: "Respect for elders, titles, good manners, what is sacred or forbidden, and kola.",
      lessons: [
        {
          id: "om-respect",
          title: "Respect and elders",
          tip: "In Igbo society it is expected to show respect (nsọpụrụ) to anyone older. Greet elders first and with a respectful word. 'okenye' is an elder, and 'ndị okenye' means the elders of a place.",
          items: [
            { ig: "omenala", en: "custom / tradition", note: "Seen in 'alụmdi na nwunye omenala' (traditional marriage).", unsure: true, src: "wikivoyage" },
            { ig: "nsọpụrụ", en: "respect / honour", alt: ["nsopuru"], src: "nkowaokwu" },
            { ig: "A na-enye ya nsọpụrụ n'obodo", en: "He is respected in the town", alt: ["A na-enye ya nsọpụrụ n'obodo."], note: "Literally 'people give him respect'.", src: "nkowaokwu" },
            { ig: "okenye", en: "elder / grown person", note: "'onye okenye' = an elderly person.", src: "nkowaokwu" },
            { ig: "Ha nwere ọtụtụ ndị okenye n'etiti ha", en: "They have many elders among them", alt: ["Ha nwere ọtụtụ ndị okenye n'etiti ha."], src: "nkowaokwu" },
            { ig: "ọnụ ọma", en: "politeness / courtesy", alt: ["ọnụọma"], src: "nkowaokwu" },
            { ig: "Emeka enweghị ọnụọma", en: "Emeka is not polite", alt: ["Emeka enweghị ọnụọma."], src: "nkowaokwu" },
            { ig: "ezi omume", en: "good conduct / good manners", alt: ["eziomume"], src: "nkowaokwu" }
          ]
        },
        {
          id: "om-titles",
          title: "Titles and manners",
          tip: "Titles come before a name: Mazị (Mr) for a man and Daa (Madam) for an older woman. Nze and ọzọ are noble titles that a community gives to a person. Do not use a title for a real person unless you know it is right.",
          items: [
            { ig: "Onye ọbụla kwesịrị iyi eziomume dịka uwe", en: "Everyone should wear good conduct like a cloth", alt: ["Onye ọbụla kwesịrị iyi eziomume dịka uwe."], note: "A dictionary example about good manners.", src: "nkowaokwu" },
            { ig: "nze", en: "high chief (a noble title)", note: "The highest chieftaincy in Igbo tradition.", src: "nkowaokwu" },
            { ig: "Nna ya bụ nze", en: "His father is a high chief", alt: ["Nna ya bụ nze."], src: "nkowaokwu" },
            { ig: "E chiri m ọzọ be nna m", en: "I was given the Ozo title at my father's place", alt: ["E chiri m ọzọ be nna m."], note: "'ọzọ' here is the noble title, not 'again'.", src: "nkowaokwu" },
            { ig: "ichie", en: "titled elder", note: "One source says a titled person, another says a male elder you address with respect.", unsure: true, src: "wikivoyage" },
            { ig: "Mazị Ibekwe", en: "Mr Ibekwe", note: "'Mazị' goes before an older man's name.", unsure: true, src: "wikivoyage" },
            { ig: "Ndewo, Daa Mgbechi", en: "Hello, Madam Mgbechi", alt: ["Ndewo, Daa Mgbechi."], note: "'Daa' goes before an older woman's name. 'Ndewo' works for anyone.", unsure: true, src: "wikivoyage" },
            { ig: "Oga diri gị, nwa m", en: "May it go well with you, my child", alt: ["Oga diri gị nwa m"], note: "An elder's reply to a greeting.", unsure: true, src: "igbofocus" }
          ]
        },
        {
          id: "om-sacred",
          title: "Sacred, forbidden and kola",
          tip: "'Nsọ' means holy or sacred, and 'arụ' is something forbidden by custom (a taboo). Kola (ọjị) is offered to guests with a prayer, and many families say that kola brings life and good will. Customs differ from town to town.",
          items: [
            { ig: "nsọ", en: "sacred / holy", note: "Also seen on signs as 'Ihe nsọ' (forbidden).", src: "nkowaokwu" },
            { ig: "Chukwu dị nsọ", en: "God is holy", alt: ["Chukwu dị nsọ."], src: "nkowaokwu" },
            { ig: "arụ", en: "taboo / abomination (forbidden act)", note: "A different word 'arụ' means 'bite'.", src: "nkowaokwu" },
            { ig: "A chụpụrụ ya maka arụ o mere", en: "He was sent away because of the taboo he broke", alt: ["A chụpụrụ ya maka arụ o mere."], src: "nkowaokwu" },
            { ig: "Ihe nsọ", en: "forbidden (lit. sacred thing)", note: "Used on signs.", unsure: true, src: "wikivoyage" },
            { ig: "Onye wetara ọjị, wetara ndụ", en: "He who brings kola brings life", alt: ["Onye wetara ọjị wetara ndụ", "Onye wetara ọjị, o wetara ndụ"], note: "A saying about hospitality: the visitor with kola brings good will.", unsure: true, src: "meigen" }
          ]
        }
      ]
    },

    /* ───────────────────────── LIFE EVENTS (Section 4) ───────────────────────── */
    {
      id: "ceremonies",
      title: "Life Events",
      color: "#a8336f",
      description: "Weddings, birth and naming, Christmas, anniversaries and funerals.",
      lessons: [
        {
          id: "cer-wedding",
          title: "The wedding",
          tip: "A traditional Igbo marriage has several steps. Common ones are knocking on the family's door (ịkụ aka), the bride-price talks, and the wine-carrying day (igba nkwụ). Many couples also have a church wedding. Practice varies from town to town.",
          items: [
            { ig: "igba nkwụ", en: "the traditional wedding (wine carrying)", alt: ["ịgba nkwụ", "igba nkwu", "Igba Nkwu"], note: "The main day of a traditional marriage, when the bride finds her husband in the crowd and brings him palm wine.", src: "nkowaokwu" },
            { ig: "Ha gbara nkwu afọ atọ gara aga", en: "They had their traditional wedding three years ago", alt: ["Ha gbara nkwu afọ atọ gara aga."], src: "nkowaokwu" },
            { ig: "ịkụ aka", en: "to knock (the first step of a wedding)", alt: ["iku aka", "kụ aka"], note: "Literally 'to knock': the groom's family come to ask permission.", src: "nkowaokwu" },
            { ig: "Onye kụrụ aka n'ụzọ?", en: "Who knocked on the door?", alt: ["Onye kụrụ aka n'ụzọ"], src: "nkowaokwu" },
            { ig: "Eze lụrụ nwunye ọhụrụ", en: "Eze married a new wife", alt: ["Eze lụrụ nwunye ọhụrụ."], note: "'lụ' = to marry (a man marries a woman).", src: "nkowaokwu" },
            { ig: "nwunye ọhụrụ", en: "bride / new wife", note: "'ọhụrụ' = new.", unsure: true, src: "nkowaokwu" },
            { ig: "ime ego", en: "the bride-price talks", alt: ["ịme ego"], note: "'ego' is money. This stage is when the families agree the bride price.", unsure: true, src: "wiki-marriage" }
          ]
        },
        {
          id: "cer-birth",
          title: "Birth and Christmas",
          tip: "A new baby is celebrated with a naming ceremony, and the mother is cared for by an older relative (ọmụgwọ). Many Igbo families travel home for Christmas, so the roads are full in December.",
          items: [
            { ig: "ọmụmụ", en: "childbirth", note: "Also 'fruitfulness'. Ncheta ọmụmụ = birthday.", src: "nkowaokwu" },
            { ig: "Chukwu nyere ya ọmụmụ", en: "God gave her a child", alt: ["Chukwu nyere ya ọmụmụ."], note: "Literally 'God gave her fruitfulness'.", src: "nkowaokwu" },
            { ig: "ọmụgwọ", en: "omugwo (care for a new mother and baby)", alt: ["omugwo", "ọ̀mụgwọ̀"], note: "An older relative, often the grandmother, looks after the new mother and baby for some weeks. Sources disagree on how long.", src: "nkowaokwu" },
            { ig: "igu nwa aha", en: "the naming ceremony", alt: ["ịgụ aha", "igu aha"], note: "Held a week or so after birth; the father gives the name. Many families now name the baby sooner.", unsure: true, src: "umuigbo" },
            { ig: "Ekeresimesi", en: "Christmas", alt: ["Ekeresimeesi"], src: "nkowaokwu" },
            { ig: "Anyị na-agba Ekeresimeesi", en: "We are celebrating Christmas", alt: ["Anyị na-agba Ekeresimesi", "Anyị na-agba Ekeresimeesi."], src: "nkowaokwu" }
          ]
        },
        {
          id: "cer-funeral",
          title: "Anniversaries and funerals",
          tip: "A funeral (olili) is an important event, often with a wake, burial and a gathering of family. Say 'Ndo' to someone who has lost a loved one. 'ncheta' is remembering a date every year.",
          items: [
            { ig: "ncheta", en: "anniversary / remembrance", src: "nkowaokwu" },
            { ig: "Ncheta ọnwụ nna ha gara nke ọma", en: "The anniversary of their father's death went well", alt: ["Ncheta ọnwụ nna ha gara nkeọma", "Ncheta ọnwụ nna ha gara nke ọma."], src: "nkowaokwu" },
            { ig: "ozu", en: "corpse / dead body", src: "nkowaokwu" },
            { ig: "ikwa ozu", en: "to hold a funeral", alt: ["ịkwa ozu"], note: "Literally 'to cry the dead'.", src: "nkowaokwu" },
            { ig: "A ga-akwa ozu na obodo anyị echi", en: "There will be a funeral in our town tomorrow", alt: ["A ga-akwa ozu na obodo anyị echi."], src: "nkowaokwu" },
            { ig: "olili", en: "burial", src: "nkowaokwu" },
            { ig: "Olili ya ga-abụ n'ọnwa na-abịa abịa", en: "His burial will be next month", alt: ["Olili ya ga-abụ n'ọnwa na-abịa abịa."], src: "nkowaokwu" }
          ]
        }
      ]
    },

    /* ───────────────────────── CHI, ANCESTORS & FOLKTALES (Section 4) ───────────────────────── */
    {
      id: "beliefs",
      title: "Chi, Ancestors & Folktales",
      color: "#6d4bc4",
      description: "God and the spirit world, folktales and the tortoise, and a little about old times.",
      lessons: [
        {
          id: "bel-god",
          title: "God, chi and prayer",
          tip: "Many Igbo people believe in one high God, Chukwu or Chineke, and in a personal spirit or fortune called chi. Today many people use both traditional and Christian words, and families differ. This lesson only teaches the words, not what anyone should believe.",
          items: [
            { ig: "Chukwu", en: "God / the great God", note: "Many Igbo people use Chukwu for the high God, in traditional and in Christian speech.", src: "nkowaokwu" },
            { ig: "chi", en: "personal spirit / fate / soul", note: "Many Igbo people believe each person has a chi that shapes their fortune. 'chi' can also mean 'day' (Ị bọọla chi?).", src: "nkowaokwu" },
            { ig: "mmụọ", en: "spirit / soul", alt: ["mmuo"], note: "Can also mean ghost or masquerade, depending on the sentence.", src: "nkowaokwu" },
            { ig: "agbara", en: "deity / spirit", alt: ["agbàrà"], note: "A spirit that some Igbo people honour in traditional belief.", src: "nkowaokwu" },
            { ig: "ekpere", en: "prayer", src: "nkowaokwu" },
            { ig: "Chukwu na-aza ekpere", en: "God answers prayer", alt: ["Chukwu na-aza ekpere."], src: "nkowaokwu" },
            { ig: "Chineke na-aza ekpere e kpere n'asụsụ Igbo", en: "God answers prayers said in the Igbo language", alt: ["Chineke na-aza ekpere e kpere n'asụsụ Igbo."], note: "'Chineke' = God the creator, often used for the God of the Christian Bible.", src: "nkowaokwu" },
            { ig: "ụlọ ụka", en: "church (building)", alt: ["ulo uka"], note: "'ụka' alone is also used for church.", unsure: true }
          ]
        },
        {
          id: "bel-folk",
          title: "Folktales and the tortoise",
          tip: "Akụkọ ifo (folktales) used to be told to children at night. The tortoise (mbe) is the clever trickster of many tales, and the stories usually teach a lesson about greed or broken promises.",
          items: [
            { ig: "akụkọ ifo", en: "folktale / fable", note: "The same words can also mean 'a true account', so context matters.", src: "nkowaokwu" },
            { ig: "Akụkọ a bụ akụkọ ifo", en: "That story is a folktale", alt: ["Akụkọ a bụ akụkọ ifo."], note: "A dictionary example (it says 'myth').", src: "nkowaokwu" },
            { ig: "Ukpana", en: "Grasshopper (a character in tortoise tales)", note: "Used as a name for the grasshopper in one fable.", unsure: true, src: "wiki-mbeku" },
            { ig: "egwu ọnwa", en: "moonlight play (a time for stories)", alt: ["egwu onwa"], note: "Folktales were told by moonlight.", unsure: true },
            { ig: "Mbe bụ onye aghụghọ", en: "The tortoise is a trickster", alt: ["Mbe bụ onye aghụghọ."], note: "'aghụghọ' = trickery.", unsure: true, src: "wiki-mbeku" },
            { ig: "Mbe riri nri niile", en: "The tortoise ate all the food", alt: ["Mbe riri nri niile."], note: "From the tale of the tortoise and the birds. 'riri' = ate.", unsure: true, src: "wiki-mbeku" }
          ]
        },
        {
          id: "bel-past",
          title: "Ancestors and old times",
          tip: "Many Igbo people speak of their ancestors with respect. The old kingdom of Nri, in the Igbo heartland, was known for ritual rather than military power. These words are mostly taken from one or two sources, so check them with a native speaker.",
          items: [
            { ig: "ndichie", en: "ancestors / the old ones", alt: ["ndị ichie"], note: "Many Igbo people believe the ancestors still watch over their families.", unsure: true, src: "wiki-odinani" },
            { ig: "alaeze", en: "kingdom", note: "From 'ala' (land) and 'eze' (king).", src: "nkowaokwu" },
            { ig: "Nri bụ alaeze ochie", en: "Nri was an old kingdom", alt: ["Nri bụ alaeze ochie."], note: "'ochie' = old.", unsure: true, src: "wiki-nri" },
            { ig: "Eze Nri", en: "the King of Nri (a spiritual ruler)", unsure: true, src: "wiki-nri" },
            { ig: "Igbo-Ukwu", en: "Igbo-Ukwu (a town famous for old bronze art)", unsure: true, src: "wiki-nri" },
            { ig: "n'oge gboo", en: "long ago", alt: ["n'oge ochie", "mgbe ochie"], unsure: true },
            { ig: "akụkọ ihe mere eme", en: "history", alt: ["akuko ihe mere eme"], note: "Literally 'the story of what happened'.", unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── WEATHER & SEASONS (Section 4) ───────────────────────── */
    {
      id: "weather",
      title: "Weather & Seasons",
      color: "#0b6fa4",
      description: "Dry season, harmattan, rain, cold and clouds, and how to ask about the weather.",
      lessons: [
        {
          id: "wea-seasons",
          title: "Dry season and harmattan",
          tip: "Igboland has two main seasons: the rainy season and the dry season (ọkọchị). The harmattan (ụgụrụ) is the dry, dusty wind that blows in the dry season, usually from December to February.",
          items: [
            { ig: "ọkọchị", en: "dry season", alt: ["okochi"], src: "nkowaokwu" },
            { ig: "Ọkọchị na-abịa", en: "The dry season is coming", alt: ["Ọkọchị na-abịa."], note: "'na-abịa' = is coming.", src: "nkowaokwu" },
            { ig: "ụgụrụ", en: "harmattan (dry, dusty wind)", alt: ["uguru"], src: "nkowaokwu" },
            { ig: "udu mmiri", en: "rainy season", note: "Only one source; the dictionary has 'udu' as a clay pot.", unsure: true, src: "wikivoyage" },
            { ig: "Ugbu a bụ oge mmiri ozuzo", en: "This is the rainy season", alt: ["Ugbua bụ oge mmiriozuzo", "Ugbu a bụ oge mmiri ozuzo."], note: "A dictionary example. 'ozuzo' = pouring.", src: "nkowaokwu" },
            { ig: "Ugbu a bụ oge ụgụrụ", en: "Now it is the harmattan period", alt: ["Ugbu a bụ oge ụgụrụ."], unsure: true, src: "igboguide" },
            { ig: "okpomọkụ", en: "heat", alt: ["okpomoku"], note: "Heat or hotness.", src: "nkowaokwu" }
          ]
        },
        {
          id: "wea-today",
          title: "Rain, cold and clouds",
          tip: "'Oyi na-atụ' is how the dictionary says 'it is cold'. For rain, 'Mmiri na-ezo' = it is raining and 'Mmiri anaghị ezo' = it is not raining. A friendly way to ask about the weather is 'Olee maka ụbọchị taa?'",
          items: [
            { ig: "oyi", en: "cold", note: "Also 'fever' or 'a cold' (the illness).", src: "nkowaokwu" },
            { ig: "Oyi na-atụ", en: "It is cold", alt: ["Oyi na-atụ."], src: "nkowaokwu" },
            { ig: "urukpu", en: "clouds", alt: ["ụrụkpụ"], src: "nkowaokwu" },
            { ig: "Kpakpando apụtala n'urukpu", en: "Stars have appeared among the clouds", alt: ["Kpakpando apụtala n'urukpu."], note: "A dictionary example; it shows 'urukpu' used for the sky.", src: "nkowaokwu" },
            { ig: "Mmiri na-ezo", en: "It is raining", alt: ["Mmiri na-ezo."], note: "Built from the pattern in 'Mmiri anaghị ezo'.", unsure: true, src: "igboguide" },
            { ig: "Mmiri anaghị ezo", en: "It is not raining", alt: ["Mmiri anaghị ezo."], unsure: true, src: "igboguide" },
            { ig: "Oke mmiri ozuzo ekweghị anyị lọta", en: "The heavy downpour did not let us go back", alt: ["Oke mmiri ozuzo ekweghị anyị lọta."], note: "A dictionary example.", src: "nkowaokwu" },
            { ig: "Olee maka ụbọchị taa?", en: "How is the weather today?", alt: ["Olee maka ụbọchị taa"], note: "Literally 'what about today?'.", unsure: true, src: "igboguide" },
            { ig: "Ụbọchị taa dị mma", en: "Today is nice", alt: ["Ụbọchị taa dị mma."], unsure: true, src: "igboguide" }
          ]
        }
      ]
    },

    /* ───────────────────────── COOKING (Section 4) ───────────────────────── */
    {
      id: "cooking",
      title: "Cooking",
      color: "#9a5f00",
      description: "Soups, swallows and the kitchen: onugbu, egusi, nsara, akpụ, garị and abacha.",
      lessons: [
        {
          id: "cook-dishes",
          title: "Soups and swallows",
          tip: "A typical Igbo meal is a starchy food (akpụ or fufu, garị, pounded yam) eaten with a soup (ofe). The soup is usually named after its main ingredient, so 'ofe onugbu' is bitterleaf soup.",
          items: [
            { ig: "onugbu", en: "bitter leaf", note: "A leaf used in soup.", src: "nkowaokwu" },
            { ig: "ofe onugbu", en: "bitterleaf soup", unsure: true },
            { ig: "Ọ kọrọ onugbu ebe ahụ", en: "He planted bitter leaf there", alt: ["Ọ kọrọ onugbu ebe ahụ."], src: "nkowaokwu" },
            { ig: "ofe nsara", en: "white soup", alt: ["ofe nsala", "ofe ǹsàrà"], note: "A soup usually cooked without palm oil.", src: "nkowaokwu" },
            { ig: "Achọrọ m iri ofe nsara", en: "I want to eat white soup", alt: ["Achọrọ m iri ofe nsara."], src: "nkowaokwu" },
            { ig: "ofe egusi", en: "egusi (melon seed) soup", alt: ["egusi"], unsure: true, src: "wikivoyage" },
            { ig: "akpụ", en: "cassava / cassava fufu", alt: ["akpu"], src: "nkowaokwu" },
            { ig: "Ndị Igbo na-eji akpụ emepụta ụdị nri dị ichiiche", en: "Igbo people use cassava to make many kinds of food", alt: ["Ndị Igbo na-eji akpụ emepụta ụdị nri dị ichiiche."], src: "nkowaokwu" }
          ]
        },
        {
          id: "cook-kitchen",
          title: "In the kitchen",
          tip: "'sie' is the verb 'to cook' or 'to boil', and 'siri' is its past (cooked). 'Eghe' means a food is done cooking. Ask who cooked something with 'Onye siri…?'",
          items: [
            { ig: "sie", en: "to cook / to boil", note: "'siri' = cooked.", src: "nkowaokwu" },
            { ig: "Onye siri ofe a?", en: "Who cooked this soup?", alt: ["Onye siri ofe a"], unsure: true, src: "wikivoyage" },
            { ig: "Mmanụ anọghị na nri o siri", en: "There was no oil in the food he cooked", alt: ["Mmanụ anọghị na nri o siri."], src: "nkowaokwu" },
            { ig: "Nri ga-eghe na nkeji iri na abụọ", en: "The food will be done in twelve minutes", alt: ["Nri ga-eghe na nkeji 12", "Nri ga-eghe na nkeji iri na abụọ."], note: "'eghe' = to be properly cooked.", src: "nkowaokwu" },
            { ig: "garị", en: "gari (dried, grated cassava)", alt: ["gari", "garri"], src: "nkowaokwu" },
            { ig: "A na-elo garị elo", en: "Gari is swallowed", alt: ["A na-elo garị elo."], src: "nkowaokwu" },
            { ig: "abacha", en: "African salad / cassava flakes", src: "nkowaokwu" },
            { ig: "Abacha na-amasị m", en: "I like African salad", alt: ["Abacha na-amasị m."], src: "nkowaokwu" },
            { ig: "Kwọọ aka gị", en: "Wash your hands", alt: ["Kwọọ aka", "Kwọọ aka gị."], note: "A good habit before cooking and eating.", unsure: true, src: "wikivoyage" }
          ]
        }
      ]
    },

    /* ───────────────────────── AT THE DOCTOR (Section 4) ───────────────────────── */
    {
      id: "doctor",
      title: "At the Doctor",
      color: "#b0213f",
      description: "Say what hurts, name common illnesses, and ask for a doctor.",
      lessons: [
        {
          id: "doc-sick",
          title: "Feeling ill",
          tip: "Use 'Enwere m …' (I have …) with an illness: 'Enwere m isiọwụwa' = I have a headache. 'mgbu' means pain, so 'isi mgbu' is a headache too.",
          items: [
            { ig: "ọrịa", en: "sickness / illness", src: "nkowaokwu" },
            { ig: "Ọ na-arịa ọrịa", en: "She is sick", alt: ["Ọ na-arịa ọrịa."], src: "nkowaokwu" },
            { ig: "mgbu", en: "ache / pain", note: "Use it with a body part. (A different word 'mgbu' means jealousy.)", src: "nkowaokwu" },
            { ig: "isiọwụwa", en: "headache", alt: ["isi ọwụwa"], src: "nkowaokwu" },
            { ig: "Enwere m isiọwụwa", en: "I am having a headache", alt: ["Enwere m isiọwụwa."], note: "The dictionary's own example. (The app also has 'Isi na-awa m'.)", src: "nkowaokwu" },
            { ig: "iba", en: "fever / malaria", alt: ["ịba"], src: "nkowaokwu" },
            { ig: "Ịba ji ya aka", en: "He has a fever", alt: ["Iba ji ya aka", "Ịba ji ya aka."], note: "Literally 'fever has caught him'.", src: "nkowaokwu" },
            { ig: "ụkwara", en: "cough", alt: ["ukwara"], src: "nkowaokwu" },
            { ig: "Nwa m nwere ụkwara", en: "My baby has a cough", alt: ["Nwa m nwere ụkwara."], src: "nkowaokwu" }
          ]
        },
        {
          id: "doc-care",
          title: "At the clinic",
          tip: "A traditional healer is a dibịa. For a hospital doctor, older books say 'dibịa oyibo' (a doctor of the white man's medicine), and many people today say dọkịta. Ask a native speaker which word they use.",
          items: [
            { ig: "ntụtụ", en: "syringe / needle", note: "Not the same as 'ntutu' (hair).", src: "nkowaokwu" },
            { ig: "E ji ntụtụ agba ọgwụ", en: "Syringes are used to give injections", alt: ["E ji ntụtụ agba ọgwụ."], src: "nkowaokwu" },
            { ig: "Aṅụrụ m ọgwụ isiọwụwa", en: "I took medicine for a headache", alt: ["Anụrụ m ọgwụ isiọwụwa", "Aṅụrụ m ọgwụ isiọwụwa."], note: "'ṅụ' = to drink or take (medicine).", src: "nkowaokwu" },
            { ig: "dibịa oyibo", en: "hospital doctor (older word)", alt: ["dibia oyibo"], note: "Literally 'a healer of the white man'.", unsure: true, src: "igboguide" },
            { ig: "Achọrọ m dibịa oyibo", en: "I need a doctor", alt: ["Achọrọ m dibịa oyibo."], unsure: true, src: "ilanguages" },
            { ig: "Ahụ na-arịa m", en: "I am sick", alt: ["Ahụ na-arịa m."], note: "Another way to say it, besides 'Ahụ adịghị m mma'.", unsure: true, src: "wikivoyage" },
            { ig: "afọ ohihi", en: "stomach ache", alt: ["afo ohihi"], unsure: true, src: "wikivoyage" },
            { ig: "ọgwụ ahụ mgbu", en: "painkiller", unsure: true, src: "wikivoyage" }
          ]
        }
      ]
    },

    /* ───────────────────────── PLANS, INVITATIONS & CALLS (Section 4) ───────────────────────── */
    {
      id: "plans",
      title: "Plans, Invitations & Calls",
      color: "#0f7a72",
      description: "Days of the week, making plans, inviting someone, and talking on the phone.",
      lessons: [
        {
          id: "plan-days",
          title: "Days of the week",
          tip: "The traditional Igbo week has four market days (Eke, Orie, Afọ, Nkwọ). The seven-day week came with English, so the day names are borrowed words: Mọnde, Tuuzde, Fraịde, Satọde. Sunday is 'Ụbọchị Ụka'.",
          items: [
            { ig: "Mọnde", en: "Monday", alt: ["Monde"], src: "nkowaokwu" },
            { ig: "Mọnde bụ ụbọchị e ji eje ọrụ", en: "Monday is a work day", alt: ["Mọnde bụ ụbọchị e ji eje ọrụ."], src: "nkowaokwu" },
            { ig: "Tuuzde", en: "Tuesday", alt: ["Tuzde"], src: "nkowaokwu" },
            { ig: "Wensde", en: "Wednesday", unsure: true, src: "wikivoyage" },
            { ig: "Tosde", en: "Thursday", alt: ["Tọsde"], unsure: true, src: "wikivoyage" },
            { ig: "Fraịde", en: "Friday", alt: ["Fraide"], src: "nkowaokwu" },
            { ig: "Ndị mmadụ na-emekarị njem ụbọchị Fraịde", en: "People often travel on Fridays", alt: ["Ndị mmadụ na-emekarị njem ụbọchị Fraịde."], src: "nkowaokwu" },
            { ig: "Satọde", en: "Saturday", alt: ["Satode"], src: "nkowaokwu" },
            { ig: "Anyị na-asụ akwa Satọde ọbụla", en: "We wash clothes every Saturday", alt: ["Anyị na-asụ akwa Satọde ọbụla."], src: "nkowaokwu" }
          ]
        },
        {
          id: "plan-invite",
          title: "Making plans",
          tip: "'Aga m …' = I will …, 'Ị ga-…?' = will you …? and 'Ka anyị …' = let us …. Add a day or 'echi' (tomorrow) to make a plan. Several of these are built from patterns, so they are on the list for a native speaker.",
          items: [
            { ig: "Anyị ga-ahụ n'ụbọchị Satọde", en: "We will see each other on Saturday", alt: ["Anyị ga-ahụ n'ụbọchị Satọde."], note: "Built on the dictionary example 'Anyị ga-ahụ echi' (see you tomorrow).", unsure: true, src: "nkowaokwu" },
            { ig: "Gịnị ka ị na-eme echi?", en: "What are you doing tomorrow?", alt: ["Gịnị ka ị na-eme echi"], unsure: true },
            { ig: "Ị ga-abịa?", en: "Will you come?", alt: ["I ga-abịa?"], unsure: true },
            { ig: "Bịa n'ụlọ m", en: "Come to my house", alt: ["Bịa n'ụlọ m."], unsure: true },
            { ig: "Bịa n'ụlọ m ụbọchị Satọde", en: "Come to my house on Saturday", alt: ["Bịa n'ụlọ m ụbọchị Satọde."], unsure: true },
            { ig: "Ana m abịa", en: "I am coming", alt: ["Ana m abịa."], unsure: true, src: "wikivoyage" },
            { ig: "Enwere m oge", en: "I am free (I have time)", alt: ["Enwere m oge."], unsure: true },
            { ig: "Enweghị m oge", en: "I am busy (I have no time)", alt: ["Enweghị m oge."], unsure: true }
          ]
        },
        {
          id: "plan-calls",
          title: "On the phone",
          tip: "'Kpọọ m' = call me. 'ozi' is a message or news. Remember the polite words you already know, like 'Ndewo' and 'Biko'. These phone phrases are on the list for a native speaker, so say them to someone before trusting them.",
          items: [
            { ig: "Kpọọ m", en: "Call me", alt: ["Kpọọ m."], unsure: true, src: "wikivoyage" },
            { ig: "Kpọọ m mgbe emechaa", en: "Call me later", alt: ["Kpọọ m mgbe emechaa."], unsure: true, src: "wikivoyage" },
            { ig: "Ka m kpọghachi gị", en: "Let me call you back", alt: ["Kà m kpọghachi gị", "Ka m kpọghachi gị."], unsure: true, src: "wikivoyage" },
            { ig: "ozi", en: "message / news", src: "nkowaokwu" },
            { ig: "Ezigaara m Echefula ozi", en: "I sent Echefula a message", alt: ["Ezigaara m Echefula ozi."], note: "A dictionary example. Swap in another name.", src: "nkowaokwu" },
            { ig: "Enwere m ike ịnweta nọmba gị?", en: "Can I have your number?", alt: ["Enwere m ike inweta nọmba gị?"], unsure: true, src: "wikivoyage" },
            { ig: "Anaghị m anụ gị", en: "I cannot hear you", alt: ["Anaghị m anụ gị."], unsure: true, src: "wikivoyage" }
          ]
        }
      ]
    },

    /* ───────────────────────── MEMORIES (Section 5) ───────────────────────── */
    {
      id: "memories",
      title: "Memories",
      color: "#7f5420",
      description: "Remember and forget, and talk about when you were a child.",
      lessons: [
        {
          id: "mem-words",
          title: "Remembering",
          tip: "'mgbe' means 'when'. 'Achọghị m …' means 'I do not want to …', and the verb after it takes the 'i-' form: icheta (to remember), ichefu (to forget). Those two sentences come straight from the dictionary.",
          items: [
            { ig: "cheta", en: "remember", alt: ["chetà", "icheta"], src: "nkowaokwu" },
            { ig: "chefu", en: "forget", alt: ["chefuo", "ichefu"], note: "The dictionary writes chefù. Some people write chefuo.", src: "nkowaokwu" },
            { ig: "Achọghị m icheta ihe mere ụbọchị ahụ", en: "I do not want to remember what happened that day", alt: ["Achọghị m icheta ihe mere ụbọchị ahụ."], src: "nkowaokwu" },
            { ig: "Achọghị m ichefu ihe ndị a", en: "I do not want to forget these things", alt: ["Achọghị m ichefu ihe ndị a."], src: "nkowaokwu" },
            { ig: "n'oge ọkpụ", en: "long ago (in the far past)", note: "'ọkpụ' is an old word for the distant past.", src: "nkowaokwu" },
            { ig: "N'oge ọkpụ, ekwentị adịghị ire", en: "Long ago, phones were not on sale", alt: ["N'oge ọkpụ, ekwentị adịghị ire."], note: "A dictionary example. My English is a rough reading: adịghị = is not.", unsure: true, src: "nkowaokwu" },
            { ig: "afọ gara aga", en: "last year", alt: ["afọ gara aga."], note: "'gara aga' = passed, ago. The dictionary has it only inside 'afọ atọ gara aga' (three years ago).", unsure: true, src: "wikivoyage" },
            { ig: "Achọrọ m icheta ụbọchị mbụ m gara ụlọ akwụkwọ", en: "I want to remember the first day I went to school", alt: ["Achọrọ m icheta ụbọchị mbụ m gara ụlọ akwụkwọ."], unsure: true }
          ]
        },
        {
          id: "mem-young",
          title: "When I was young",
          tip: "'Mgbe m bụ nwata' = when I was a child ('bụ' takes its past meaning from 'mgbe'). Put -karị on a verb after 'na-' to say you did it often, or used to: 'm na-agakarị' = I often went. 'Have you ever …?' uses -bu- and 'have never' uses -beghị, as in 'Ahụbeghị m mbe mbụ' (Animals). We still need a confirmed 'have ever' form.",
          items: [
            { ig: "mgbe m bụ nwata", en: "when I was a child", alt: ["mgbe m bụ nwata."], note: "Built on the dictionary example 'mgbe m bụ nwaakwụkwọ' (when I was a student).", unsure: true },
            { ig: "na-agakarị", en: "often goes / used to go", note: "-karị = habitually, usually (dictionary). 'na-agakarị' is built from it.", unsure: true, src: "nkowaokwu" },
            { ig: "Mgbe m bụ nwata, m na-agakarị ahịa n'ụtụtụ", en: "When I was a child, I often went to the market in the morning", alt: ["Mgbe m bụ nwata, m na-agakarị ahịa n'ụtụtụ."], unsure: true },
            { ig: "Mgbe m bụ nwata, m na-anụkarị akụkọ ifo n'abalị", en: "When I was a child, I often heard folktales at night", alt: ["Mgbe m bụ nwata, m na-anụkarị akụkọ ifo n'abalị."], unsure: true },
            { ig: "Afọ atọ gara aga, m gara Enugu", en: "Three years ago, I went to Enugu", alt: ["Afọ atọ gara aga, m gara Enugu."], unsure: true },
            { ig: "Mgbe mbụ m gara ụlọ akwụkwọ, m chetara ya ruo ugbu a", en: "The first time I went to school, I still remember it today", note: "'ruo ugbu a' = until now.", unsure: true },
            { ig: "Ị chetara ihe ọ bụla mgbe ị bụ nwata?", en: "Do you remember anything from when you were a child?", unsure: true },
            { ig: "Ee, m chetara ya", en: "Yes, I remember it", alt: ["Ee, m chetara ya."], unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── HOPES & DREAMS (Section 5) ───────────────────────── */
    {
      id: "hopes",
      title: "Hopes & Dreams",
      color: "#6d4bc4",
      description: "Dreams, hopes and plans, and what you want to become.",
      lessons: [
        {
          id: "hope-words",
          title: "Hope and dreams",
          tip: "'nrọ' = a dream, and you 'rọ' a dream: 'nrọ m rọrọ' = the dream I dreamed. 'ghọ' = become or turn into. 'Achọrọ m ịbụ …' = I want to be …. The dictionary sentences here are real examples.",
          items: [
            { ig: "olileanya", en: "hope", alt: ["olịleanya"], note: "One blog spells it with a dot under the i.", unsure: true },
            { ig: "nrọ", en: "dream", src: "nkowaokwu" },
            { ig: "Ụdị nrọ m rọrọ n'abalị gara aga, aghọtaghị m ya", en: "The kind of dream I had last night, I did not understand it", alt: ["Ụdị nrọ m rọrọ n'abalị gara aga, aghọtaghị m ya."], src: "nkowaokwu" },
            { ig: "atụmatụ", en: "plan", note: "A planned set of steps to reach a goal.", src: "nkowaokwu" },
            { ig: "otu ụbọchị", en: "one day (someday)", unsure: true },
            { ig: "Achọrọ m ịbụ dọkịta", en: "I want to be a doctor", alt: ["Achọrọ m ịbụ dọkịta."], unsure: true },
            { ig: "Achọrọ m ịghọ dọkịta n'afọ na-abịa abịa", en: "I want to become a doctor next year", alt: ["Achọrọ m ịghọ dọkịta n'afọ na-abịa abịa."], unsure: true }
          ]
        },
        {
          id: "hope-plans",
          title: "Plans and wishes",
          tip: "'ga-' makes the future. Add a time phrase like 'afọ na-abịa abịa' (next year) or 'otu ụbọchị' (one day). 'Ọ bụrụ na' means 'if', so 'Ọ bụrụ na Chukwu kwe' = if God agrees. These are built from patterns and are on the list for a native speaker.",
          items: [
            { ig: "afọ na-abịa abịa", en: "next year", alt: ["afọ n'abịa abịa", "afọ na-abịa abịa."], note: "Wikivoyage has it. A dictionary example uses the same phrase but is translated 'next month'.", unsure: true, src: "wikivoyage" },
            { ig: "N'afọ na-abịa abịa, m ga-aga Enugu", en: "Next year, I will go to Enugu", alt: ["N'afọ na-abịa abịa, m ga-aga Enugu."], unsure: true },
            { ig: "Otu ụbọchị, m ga-enwe ụlọ m n'obodo m", en: "One day, I will have my own house in my town", alt: ["Otu ụbọchị, m ga-enwe ụlọ m n'obodo m."], unsure: true },
            { ig: "Olileanya m bụ na m ga-enweta ọrụ ọhụrụ", en: "My hope is that I will get a new job", alt: ["Olileanya m bụ na m ga-enweta ọrụ ọhụrụ."], unsure: true },
            { ig: "Ọ bụrụ na Chukwu kwe, m ga-abịa echi", en: "If God agrees, I will come tomorrow", alt: ["Ọ bụrụ na Chukwu kwe, m ga-abịa echi."], unsure: true },
            { ig: "Ọ ga-adị mma", en: "It will be fine", alt: ["Ọ ga-adị mma."], unsure: true },
            { ig: "Gịnị ka ị chọrọ ịbụ?", en: "What do you want to be?", unsure: true },
            { ig: "Achọrọ m ịbụ onye ndu n'obodo m", en: "I want to be a leader in my town", alt: ["Achọrọ m ịbụ onye ndu n'obodo m."], unsure: true },
            { ig: "Ọ bụ atụmatụ dị mma", en: "That is a good plan", alt: ["Ọ bụ atụmatụ dị mma."], unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── WORK & BUSINESS (Section 5) ───────────────────────── */
    {
      id: "career",
      title: "Work & Business",
      color: "#157a43",
      description: "Trade and business, pay, and talking about your work.",
      lessons: [
        {
          id: "car-trade",
          title: "Business and trade",
          tip: "'azụmahịa' = business or trade (from ahịa, trade, and zụ, buy). 'uru' = profit or gain. To say a deal did not work out, use 'adabaghị'. The dictionary sentences below show how the words are used.",
          items: [
            { ig: "azụmahịa", en: "business / trade", src: "nkowaokwu" },
            { ig: "ụlọ ahịa", en: "shop", note: "Wikivoyage uses it for a bookshop. The dictionary has no entry for the phrase.", unsure: true, src: "wikivoyage" },
            { ig: "uru", en: "profit / gain", src: "nkowaokwu" },
            { ig: "Anaghị ere akwa n'ahịa ahụ", en: "Clothes are not sold at that market", alt: ["Anaghị ere akwa n'ahịa ahụ."], src: "nkowaokwu" },
            { ig: "Azụmahịa ya na Okey adabaghị", en: "His business with Okey did not work out", alt: ["Azụmahịa ya na Okey adabaghị."], src: "nkowaokwu" },
            { ig: "Ọ bụ onye ahịa ọma", en: "She is a good trader", alt: ["Ọ bụ onye ahịa ọma."], unsure: true },
            { ig: "Amalitere m azụmahịa nke m", en: "I started my own business", alt: ["Amalitere m azụmahịa nke m."], note: "'amalite' (to start) was not confirmed by a dictionary.", unsure: true }
          ]
        },
        {
          id: "car-work",
          title: "At work",
          tip: "'ụgwọ ọrụ' = pay for work (ụgwọ, payment + ọrụ, work). 'ọrụ ike' = hard work (ike = strength). The dictionary writes 'office' as one word, ụlọọrụ; the app writes ụlọ ọrụ.",
          items: [
            { ig: "ụgwọ ọrụ", en: "wages / pay for work", src: "nkowaokwu" },
            { ig: "ọrụ ike", en: "hard work", unsure: true },
            { ig: "Ọ na-arụ ọrụ ike", en: "She works hard", alt: ["Ọ na-arụ ọrụ ike."], note: "Built sentence. We have not confirmed 'rụ' for 'to work' (see the list for a native speaker).", unsure: true },
            { ig: "Ụlọ ọrụ ahụ buru ibu", en: "That company is big", alt: ["Ụlọọrụ ahụ buru ibu", "Ụlọ ọrụ ahụ buru ibu."], note: "A dictionary example (spelled ụlọọrụ there). My English for it is a reading of buru ibu (big).", src: "nkowaokwu" },
            { ig: "Ị chọrọ ịmalite azụmahịa nke gị?", en: "Do you want to start your own business?", unsure: true },
            { ig: "Ee. Ego dị mkpa", en: "Yes. Money is important", alt: ["Ee. Ego dị mkpa."], unsure: true },
            { ig: "Uru bụ ihe m chọrọ", en: "Profit is what I want", alt: ["Uru bụ ihe m chọrọ."], unsure: true },
            { ig: "Ọ bụ nwanyị ahịa", en: "She is a businesswoman", alt: ["Ọ bụ nwanyị ahịa."], unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── STUDIES & EXAMS (Section 5) ───────────────────────── */
    {
      id: "exams",
      title: "Studies & Exams",
      color: "#4b4fc4",
      description: "Exams, certificates, university, and studying hard.",
      lessons: [
        {
          id: "exam-ule",
          title: "Exams",
          tip: "'ule' = exam. 'imụ' = to learn or study, and 'Ana m amụ …' = I am learning …. The sentences with the dictionary as source are real examples. We could not confirm words for pass, fail or result, so they are left out for now.",
          items: [
            { ig: "ule", en: "exam / test", src: "nkowaokwu" },
            { ig: "Ule anyị ga-ebido n'izụụka ọzọ", en: "Our exams will start next week", alt: ["Ule anyị ga-ebido n'izụụka ọzọ."], src: "nkowaokwu" },
            { ig: "asambodo", en: "certificate", src: "nkowaokwu" },
            { ig: "Asambodo m ga-abụ ihe kacha mkpa", en: "My certificate will be the most important thing", alt: ["Asambodo m ga-abụ ihe kacha mkpa."], unsure: true },
            { ig: "imụ", en: "to learn / to study", note: "Not the same as 'amụ' (a different word). Use imụ for learning.", src: "nkowaokwu" },
            { ig: "Ana m amụ mgbakọ na mwepụ", en: "I am learning addition and subtraction", alt: ["Ana m amụ mgbakọ na mwepụ."], src: "nkowaokwu" }
          ]
        },
        {
          id: "exam-uni",
          title: "University",
          tip: "'mahadum' = university. 'nwa akwụkwọ' = student, and 'ịgụ akwụkwọ' = to read or study (gụ = read, as in the school lessons). 'Ọ ga-abanye …' = she will enter ….",
          items: [
            { ig: "mahadum", en: "university", src: "nkowaokwu" },
            { ig: "Ọ bụ nwa akwụkwọ mahadum", en: "He is a university student", alt: ["Ọ bụ nwa akwụkwọ mahadum."], unsure: true },
            { ig: "onye nkụzi mahadum", en: "university lecturer", alt: ["onye nkụzi mahadum."], unsure: true },
            { ig: "Ọ ga-abanye mahadum n'afọ na-abịa abịa", en: "She will enter university next year", alt: ["Ọ ga-abanye mahadum n'afọ na-abịa abịa."], note: "A dictionary example. It translates the last words as 'next month', so the list for a native speaker asks which is right.", unsure: true, src: "nkowaokwu" },
            { ig: "Ị na-agụ akwụkwọ ike?", en: "Are you studying hard?", unsure: true },
            { ig: "Ọ ka mma ịgụ akwụkwọ ike", en: "It is better to study hard", alt: ["Ọ ka mma ịgụ akwụkwọ ike."], unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── ACCIDENTS & INJURIES (Section 5) ───────────────────────── */
    {
      id: "injuries",
      title: "Accidents & Injuries",
      color: "#b0213f",
      description: "Falls, broken bones, wounds, and calling for help.",
      lessons: [
        {
          id: "inj-hurt",
          title: "Hurt",
          tip: "'A gbajiri m ụkwụ m' literally means 'my leg broke'. gbajiri is for long, thin things like legs and sticks. Swap 'ụkwụ' for another body part you know. We could not confirm words for 'cut', 'bleed' or 'swollen' yet.",
          items: [
            { ig: "ihe mberede", en: "accident", note: "Wikivoyage uses it in 'ụgbọ ihe mberede' (ambulance). The dictionary's closest headword differs in tone.", unsure: true, src: "wikivoyage" },
            { ig: "Ihe mberede mere!", en: "An accident happened!", unsure: true },
            { ig: "ọkpụkpụ", en: "bone", src: "nkowaokwu" },
            { ig: "A gbajiri m ụkwụ m", en: "I broke my leg", alt: ["A gbajiri m ụkwụ m.", "Agbajiri m ụkwụ m"], src: "nkowaokwu" },
            { ig: "Ọ gbajiri ụkwụ ya", en: "He broke his leg", alt: ["Ọ gbajiri ụkwụ ya."], unsure: true },
            { ig: "ọnya", en: "wound", src: "nkowaokwu" },
            { ig: "Apa ahụ bụ ebe o nwere ọnya", en: "That scar is where he had a wound", alt: ["Apa ahụ bụ ebe o nwere ọnya."], src: "nkowaokwu" },
            { ig: "ọbara", en: "blood", src: "nkowaokwu" }
          ]
        },
        {
          id: "inj-help",
          title: "Getting help",
          tip: "Say 'Ndo' first to someone who is hurt (you learned it in Greetings). 'Kpachara anya!' is meant as 'Be careful!'. 'ambulans' is the English word; Wikivoyage has 'ụgbọ ihe mberede'. These are on the list for a native speaker.",
          items: [
            { ig: "Kpachara anya!", en: "Be careful!", unsure: true },
            { ig: "Ọ dị gị mgbu?", en: "Are you hurt? (Does it hurt you?)", unsure: true },
            { ig: "Amaka, sị ya ndo", en: "Amaka, say sorry to him", alt: ["Amaka, sị ya ndo."], src: "nkowaokwu" },
            { ig: "Kpọọ ambulans!", en: "Call an ambulance!", note: "Borrowed from English.", unsure: true, src: "ilanguages" },
            { ig: "ụgbọ ihe mberede", en: "ambulance", alt: ["ụgbọ ihe mberede."], unsure: true, src: "wikivoyage" },
            { ig: "bandeeji", en: "bandage", note: "Borrowed from English.", unsure: true, src: "wikivoyage" },
            { ig: "daa", en: "to fall", note: "The dictionary headword is dà (low tone). A high-tone dá means to hit.", unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── FRIENDS & RELATIONSHIPS (Section 5) ───────────────────────── */
    {
      id: "relations",
      title: "Friends & Relationships",
      color: "#a8336f",
      description: "Love, marriage, promises, forgiveness and jealousy.",
      lessons: [
        {
          id: "rel-love",
          title: "Love and promises",
          tip: "'ịhụnanya' = love. 'lụ' = to marry (a man marries a woman), and the dictionary example uses the command 'Lụọ'. 'nkwa' = a promise. 'I love you' is already in Everyday: 'Ahụrụ m gị n'anya'.",
          items: [
            { ig: "ịhụnanya", en: "love", alt: ["ihunanya", "ịhụ̀naanya"], src: "nkowaokwu" },
            { ig: "Agụụ gị na-agụ m", en: "I miss you", alt: ["Obi gị na-eme m.", "Obi gị na-eme m"], note: "Literally 'hunger for you is hungering me'. 'Obi gị na-eme m' is also listed by one phrasebook.", unsure: true, src: "usefulphrases" },
            { ig: "lụ", en: "to marry", src: "nkowaokwu" },
            { ig: "Lụọ onye ọ ga-adabara gị na ya", en: "Marry the person who suits you", alt: ["Lụọ onye ọ ga-adabara gị na ya."], src: "nkowaokwu" },
            { ig: "Achọrọ m ịlụ gị", en: "I want to marry you", alt: ["Achọrọ m ịlụ gị."], src: "nkowaokwu" },
            { ig: "nkwa", en: "promise", src: "nkowaokwu" },
            { ig: "Ada mezuru nkwa ya", en: "Ada kept her promise", alt: ["Ada mezuru nkwa ya."], src: "nkowaokwu" },
            { ig: "Anyị bụ enyi ruo afọ iri", en: "We have been friends for ten years", alt: ["Anyị bụ enyi ruo afọ iri."], unsure: true }
          ]
        },
        {
          id: "rel-sorry",
          title: "Sorry and forgiveness",
          tip: "'Biko' (please) comes before 'gbaghara m'. 'sị ya ndo' = say sorry to him or her (sị = say). 'ekworo' = jealousy or envy.",
          items: [
            { ig: "gbaghara", en: "to forgive", src: "nkowaokwu" },
            { ig: "Biko, gbaghara m", en: "Please forgive me", alt: ["Biko, gbaghara m."], src: "nkowaokwu" },
            { ig: "M gbaghara gị", en: "I forgive you", alt: ["M gbaghara gị."], unsure: true },
            { ig: "sị ya ndo", en: "say sorry to him / her", alt: ["sị ya ndo."], src: "nkowaokwu" },
            { ig: "ekworo", en: "jealousy / envy", src: "nkowaokwu" },
            { ig: "Ekworo ehika ebe a", en: "There is too much envy here", alt: ["Ekworo ehika ebe a."], src: "nkowaokwu" }
          ]
        }
      ]
    },

    /* ───────────────────────── HOUSEWORK (Section 5) ───────────────────────── */
    {
      id: "chores",
      title: "Housework",
      color: "#4f6b1c",
      description: "Washing, cleaning, sweeping and helping at home.",
      lessons: [
        {
          id: "chore-clean",
          title: "Cleaning and washing",
          tip: "'sa' = wash (your body, plates). 'sụ akwa' = wash clothes: sụ is the clothes-washing verb, and 'yi' is to wear. 'hicha' = wipe, clean, mop. 'za ụlọ' = sweep the house. 'sa efere' is wash plates.",
          items: [
            { ig: "sa", en: "to wash", note: "'Ana m asa ahụ' (Daily Routine) is the same verb.", src: "nkowaokwu" },
            { ig: "sụ akwa", en: "to wash clothes", note: "Seen in 'Anyị na-asụ akwa Satọde ọbụla' (Days of the week). The dictionary's own entry for sụ gives 'to have a garment on', so we ask a native speaker.", unsure: true, src: "nkowaokwu" },
            { ig: "Biko, za ụlọ", en: "Please sweep the house", alt: ["Biko, za ụlọ."], note: "Built with 'za ụlọ' (sweep the house), which no dictionary confirmed.", unsure: true },
            { ig: "hicha", en: "to wipe / clean / mop", src: "nkowaokwu" },
            { ig: "Biko, sa efere ndị a", en: "Please wash these plates", alt: ["Biko, sa efere ndị a."], unsure: true, src: "wikivoyage" },
            { ig: "Ndụka hichara akpụkpọ ụkwụ m", en: "Nduka cleaned my shoe", alt: ["Ndụka hichara akpụkpọ ụkwụ m."], src: "nkowaokwu" },
            { ig: "Biko, hicha ụlọ m", en: "Please clean my room", alt: ["Biko, hicha ụlọ m."], unsure: true, src: "wikivoyage" }
          ]
        },
        {
          id: "chore-help",
          title: "Helping at home",
          tip: "'ezi' (a different word from 'ezi', pig) is the family compound, the shared yard. 'Ị ga-enyere m aka?' = can you help me? and 'M ga-enyere gị aka' = I can help you. Dialect varies (the fetch-water line uses an older dialect form).",
          items: [
            { ig: "ọrụ ụlọ", en: "housework", unsure: true },
            { ig: "Nne m gwara m ka m hicha ụlọ", en: "My mother told me to clean the house", alt: ["Nne m gwara m ka m hicha ụlọ."], unsure: true },
            { ig: "Ezi anyị buru ibu", en: "Our compound (extended family) is large", alt: ["Ezi anyị buru ibu."], note: "This 'ezi' (compound) is a different word from 'ezi' (pig) in Animals.", src: "nkowaokwu" },
            { ig: "Ị ga-enyere m aka?", en: "Can you help me?", alt: ["Ị ga enyere m aka?"], unsure: true, src: "ilanguages" },
            { ig: "M ga-enyere gị aka", en: "I can help you", alt: ["M ga enyere gị aka", "M ga-enyere gị aka."], unsure: true, src: "ilanguages" },
            { ig: "Ana m aga ikuta mmiri n'ikpere mmiri", en: "I am going to fetch water at the riverbank", alt: ["Ana m aga ikuta mmiri n'ikpere mmiri."], note: "Older dialect form (ikuta = to fetch).", unsure: true, src: "igboguide" }
          ]
        }
      ]
    },

    /* ───────────────────────── GIVING DIRECTIONS (Section 5) ───────────────────────── */
    {
      id: "directions",
      title: "Giving Directions",
      color: "#0b6fa4",
      description: "Left and right, straight on, crossing and asking the way.",
      lessons: [
        {
          id: "dir-turn",
          title: "Left, right and straight",
          tip: "'aka ekpe' = left (literally the left hand) and 'aka nri' = right (the eating hand). One older phrase list swaps them, but the dictionary and Wikivoyage agree on this order, so we follow them.",
          items: [
            { ig: "aka ekpe", en: "left (side)", note: "Literally the left hand.", src: "nkowaokwu" },
            { ig: "aka nri", en: "right (side)", unsure: true, src: "wikivoyage" },
            { ig: "Gaa n'aka ekpe m", en: "Go to my left hand", alt: ["Gaa n'aka ekpe m."], src: "nkowaokwu" },
            { ig: "Gba na aka nri", en: "Turn right", alt: ["Gbá na áká nri", "Gba na aka nri."], unsure: true, src: "wikivoyage" },
            { ig: "Gba na aka ekpe", en: "Turn left", alt: ["Gbá na áká èkpè", "Gba na aka ekpe."], unsure: true, src: "wikivoyage" },
            { ig: "tụgharịa", en: "to turn (change direction)", unsure: true },
            { ig: "Gaa n'ihu, gba na aka nri", en: "Go straight ahead, then turn right", alt: ["Gaa n'ihu, gba na aka nri."], unsure: true },
            { ig: "Ahịa ahụ dị n'aka ekpe", en: "The market is on the left", alt: ["Ahịa ahụ dị n'aka ekpe."], unsure: true }
          ]
        },
        {
          id: "dir-ask",
          title: "Asking the way",
          tip: "'gafee' = to cross or pass. 'ụzọ' (road) and 'ahịa' (market) you know already. 'n'ihu' = in front of. Several of these are built from the words above, so they are on the list for a native speaker.",
          items: [
            { ig: "gafee", en: "to cross / to pass", alt: ["gafe"], src: "nkowaokwu" },
            { ig: "Aga m na-agafe ebe a oge niile", en: "I pass this place all the time", alt: ["Aga m na-agafe ebe a oge niile."], src: "nkowaokwu" },
            { ig: "Gafee ụzọ a", en: "Cross this road", alt: ["Gafee ụzọ a."], unsure: true },
            { ig: "ábọ", en: "junction", alt: ["abọ"], unsure: true, src: "wikivoyage" },
            { ig: "Olee ụzọ m ga-esi aga ahịa?", en: "Which way do I go to the market?", unsure: true },
            { ig: "Ọ dị n'ihu ụlọ ụka", en: "It is in front of the church", alt: ["Ọ dị n'ihu ụlọ ụka."], unsure: true },
            { ig: "Gafee ụzọ a, ahịa ahụ dị n'aka ekpe", en: "Cross this road, the market is on the left", alt: ["Gafee ụzọ a, ahịa ahụ dị n'aka ekpe."], unsure: true }
          ]
        }
      ]
    },

    /* ───────────────────────── NEWS, MEDIA & FILM (Section 5) ───────────────────────── */
    {
      id: "media",
      title: "News, Media & Film",
      color: "#b5482a",
      description: "Radio, television, films and watching.",
      lessons: [
        {
          id: "media-film",
          title: "Radio and film",
          tip: "'redio' is borrowed from English. 'nkiri' means watching (especially a match), and 'ihe nkiri' is a film. Careful: 'onyonyo' alone means shadow, not television. News ('ozi', 'akụkọ') is in earlier lessons.",
          items: [
            { ig: "redio", en: "radio", note: "Borrowed from English.", src: "nkowaokwu" },
            { ig: "Ụzọamaka mebiri redio ya", en: "Uzoamaka broke her radio", alt: ["Ụzọamaka mebiri redio ya."], src: "nkowaokwu" },
            { ig: "Ana m anụ redio kwa ụtụtụ", en: "I listen to the radio every morning", alt: ["Ana m anụ redio kwa ụtụtụ."], note: "Built sentence ('nụ' = hear).", unsure: true },
            { ig: "igwe onyonyo", en: "television", note: "Literally 'machine of images'.", unsure: true },
            { ig: "ihe nkiri", en: "film / movie", note: "Not a dictionary entry, but used in real film reviews.", unsure: true, src: "nollysenti" },
            { ig: "Ihe nkiri a tọrọ ezigbo ụtọ", en: "This film was very enjoyable", alt: ["Ihe nkiri a tọrọ ezigbo ụtọ."], unsure: true, src: "nollysenti" },
            { ig: "nkiri", en: "watching (a match, a show)", src: "nkowaokwu" },
            { ig: "Nkiri bọọlụ na-amasị ya", en: "He likes watching football", alt: ["Nkiri bọọlụ na-amasị ya."], src: "nkowaokwu" }
          ]
        }
      ]
    },

    /* ───────────────────────── TECHNOLOGY (Section 5) ───────────────────────── */
    {
      id: "tech",
      title: "Technology",
      color: "#0f7a72",
      description: "Computers, the internet, photos and sending things.",
      lessons: [
        {
          id: "tech-phone",
          title: "Computers, photos and sending",
          tip: "'kọmputa' and 'foto' are borrowed from English. 'ziga' = send. 'nata' = collect or receive (the dictionary example is about collecting money). No source gave Igbo for charger, battery, password or video, so they are left out.",
          items: [
            { ig: "kọmputa", en: "computer", alt: ["kọmpụta"], note: "Borrowed from English.", src: "nkowaokwu" },
            { ig: "Ọ zụrụ kọmputa ọhụrụ maka ọrụ ya", en: "He bought a new computer for his work", alt: ["Ọ zụrụ kọmputa ọhụrụ maka ọrụ ya."], src: "nkowaokwu" },
            { ig: "ịntanetị", en: "internet", alt: ["intaneti"], note: "Borrowed from English. Seen in an Igbo style guide, not in the dictionary.", unsure: true, src: "igstyle" },
            { ig: "foto", en: "photograph", note: "Borrowed from English.", src: "nkowaokwu" },
            { ig: "Nna m na-ese foto", en: "My father takes photos", alt: ["Nna m na-ese foto."], src: "nkowaokwu" },
            { ig: "ziga", en: "to send", src: "nkowaokwu" },
            { ig: "Onye ka m ga-eziga?", en: "Whom shall I send it to?", src: "nkowaokwu" },
            { ig: "Achọrọ m ịnata ya ego m", en: "I want to collect my money from him", alt: ["Achọrọ m ịnata ya ego m."], src: "nkowaokwu" }
          ]
        }
      ]
    },

    /* ───────────────────────── COMMUNITY & ENVIRONMENT (Section 5) ───────────────────────── */
    {
      id: "community",
      title: "Community & Environment",
      color: "#9a5f00",
      description: "Meetings, helping each other, keeping the town clean, and problems like erosion.",
      lessons: [
        {
          id: "com-meet",
          title: "Meetings and neighbours",
          tip: "'nzukọ' = a meeting. 'ọgbọ' = an age mate, someone in your age group (an important group in Igbo towns). 'ibe' = a fellow or mate. 'enyemaka' = help.",
          items: [
            { ig: "nzukọ", en: "meeting / gathering", src: "nkowaokwu" },
            { ig: "Anyị nwere nzukọ echi", en: "We have a meeting tomorrow", alt: ["Anyị nwere nzukọ echi."], src: "nkowaokwu" },
            { ig: "ọgbọ", en: "age mate / peer", src: "nkowaokwu" },
            { ig: "Gị na ndị ọgbọ gị soro bịa", en: "Come with your peers", alt: ["Gị na ndị ọgbọ gị soro bịa."], src: "nkowaokwu" },
            { ig: "ibe", en: "mate / fellow", src: "nkowaokwu" },
            { ig: "Ndị ibe m nọ ebe ahụ ugbua", en: "My mates are there now", alt: ["Ndị ibe m nọ ebe ahụ ugbua."], src: "nkowaokwu" },
            { ig: "enyemaka", en: "help / aid", src: "nkowaokwu" },
            { ig: "Emeka chọrọ enyemaka anyị", en: "Emeka needs our help", alt: ["Emeka chọrọ enyemaaka anyị", "Emeka chọrọ enyemaka anyị."], src: "nkowaokwu" }
          ]
        },
        {
          id: "com-env",
          title: "Keeping things clean",
          tip: "'gburugburu' = the surroundings, the environment. 'unyi' = dirty. 'ọcha' is already white in Colours; 'dị ọcha' is used for clean (to be checked). 'mbuze' = erosion or a gully; the dictionary also has a landslide sense with a different tone.",
          items: [
            { ig: "gburugburu", en: "environment / surroundings", src: "nkowaokwu" },
            { ig: "unyi", en: "dirty / untidy", src: "nkowaokwu" },
            { ig: "Aka m ruru unyi", en: "My hands are dirty", alt: ["Aka m ruru unyi."], src: "nkowaokwu" },
            { ig: "Obodo anyị dị ọcha", en: "Our town is clean", alt: ["Obodo anyị dị ọcha."], unsure: true },
            { ig: "mbuze", en: "erosion / gully", src: "nkowaokwu" },
            { ig: "Ndị mmadụ na-ekpofu ahịhịa na mbuze ahụ", en: "People throw rubbish into that gully", alt: ["Ndị mmadụ na-ekpofu ahịhịa na mbuze ahụ."], note: "'ahịhịa' is usually grass or weeds; here the dictionary uses it for refuse.", src: "nkowaokwu" },
            { ig: "Mbụze ahụ metụtara ọtụtụ ndị mmadụ", en: "The erosion affected many people", alt: ["Mbụze ahụ metụtara ọtụtụ ndị mmadụ."], note: "The dictionary translates this one as a landslide.", src: "nkowaokwu" }
          ]
        },
        {
          id: "com-town",
          title: "Our town",
          tip: "These are everyday lines about the town. The dictionary ones are real examples; the built ones (road, light, helping) are on the list for a native speaker.",
          items: [
            { ig: "Ahịhịa juru n'ubi ahụ", en: "Grass is all over the farm", alt: ["Ahịhịa juru n'ubi ahụ."], src: "nkowaokwu" },
            { ig: "Ụzọ a dị njọ", en: "This road is bad", alt: ["Ụzọ a dị njọ."], unsure: true },
            { ig: "Ụgbaala a nọchiri ụzọ", en: "This car is blocking the road", alt: ["Ụgbaala a nọchiri ụzọ."], src: "nkowaokwu" },
            { ig: "Mmiri kwara ebe ahụ ruru m n'ikpere", en: "The water standing there reached my knee", alt: ["Mmiri kwara ebe ahụ ruru m n'ikpere."], src: "nkowaokwu" },
            { ig: "Ọ dịghị ọkụ n'obodo anyị", en: "There is no light (electricity) in our town", alt: ["Ọ dịghị ọkụ n'obodo anyị."], unsure: true },
            { ig: "Anyị kwesịrị inyere ibe anyị aka", en: "We should help one another", alt: ["Anyị kwesịrị inyere ibe anyị aka."], unsure: true }
          ]
        }
      ]
    }
  ]
};
