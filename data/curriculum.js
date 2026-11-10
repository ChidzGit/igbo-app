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

  Lesson fields: id (never change once published, progress is stored by id),
  title, tip, items, type ("letters" = no typing exercises).
*/
window.CURRICULUM = {
  version: "1.1.0",
  updated: "2026-11-10",

  // Newest first. Shown in the app under More → "What's new".
  changelog: [
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
    { id: "languagesandnumbers", name: "Languages and Numbers: Counting in Igbo", url: "https://www.languagesandnumbers.com/how-to-count-in-igbo/en/ibo/", note: "Number-building rules." }
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
            { ig: "Ebee ka i si?", en: "Where are you from?", alt: ["Ebee ka ị si?", "Onye ebee ka ị bụ?"], src: "elias" },
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
    }
  ]
};
