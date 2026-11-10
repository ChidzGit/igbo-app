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
  version: "1.4.0",
  updated: "2026-11-10",

  // Newest first. Shown in the app under More → "What's new".
  changelog: [
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
    { id: "nkenne", name: "NKENNE: The importance of kola nut in Igbo rituals", url: "https://www.nkenne.com/blog/the-importance-of-kola-nut-in-igbo-rituals", note: "Blog. Single source for the kola phrases, so they are marked ⚑." }
  ],

  // Stages (shown as numbered Sections on the Learn screen, with CEFR level).
  // Every section id appears in exactly one stage's `units`. When you add a new
  // unit (section), also add its id to a stage's `units`. Empty stages show as "coming next".
  stages: [
    { id: "s1", number: 1, cefr: "Intro", title: "Essential phrases", focus: "Start with essential phrases and simple grammar.", units: ["alphabet","greetings","intro","family","eatingout","market","school","travel"] },
    { id: "s2", number: 2, cefr: "A1", title: "Basic interactions", focus: "Words, phrases and grammar for basic interactions.", units: ["food","numbers","colours","verbs","questions","whereis","routine","home","jobs","animals","clothes","describe","opinions","peoples","linking"] },
    { id: "s3", number: 3, cefr: "A1", title: "Basic conversations", focus: "Foundational sentences for basic conversations.", units: ["time","body","everyday","clock","past","future","feelings","people","chat","cities","nature","arts","igboland"] },
    { id: "s4", number: 4, cefr: "A2", title: "Everyday topics", focus: "Use sentences in conversations about everyday topics.", units: [] },
    { id: "s5", number: 5, cefr: "B1", title: "Wider topics", focus: "Form sentences about a wider variety of topics.", units: [] },
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
            { ig: "Aha m bụ…", en: "My name is…", alt: ["Aha m bu"], src: "elias" },
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
            { ig: "Gịnị ka a na-akpọ … n'Igbo?", en: "How do you say … in Igbo? (lit. what is … called)", alt: ["Kedụ ka e si ekwu … n'asụsụ Igbo?"], src: "omniglot" }
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
            { ig: "Gịnị pụtara …?", en: "What does … mean?", note: "'pụtara' = means.", unsure: true, src: "nkowaokwu" }
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
            { ig: "Ọ dị ka…", en: "It is like… / It seems…" },
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
    }
  ]
};
