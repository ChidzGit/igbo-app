/* Mmụta Igbo dialogues - short story-style conversations with questions
   Generated from data/curriculum.js items only (no new Igbo). Optional: the app works without this file.
   Load after data/curriculum.js. */
window.DIALOGUES = {
 "greetings": [
  {
   "id": "dlg-greetings-1",
   "title": "Welcome to the house",
   "setting": "A guest arrives and says hello and goodbye.",
   "roles": {
    "A": "Host",
    "B": "Guest"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Nnọọ",
     "en": "Welcome"
    },
    {
     "who": "B",
     "ig": "Ndewo, kedụ ka ị mere?",
     "en": "Hello, how are you?"
    },
    {
     "who": "A",
     "ig": "Adị m mma, daalụ",
     "en": "I'm fine, thank you"
    },
    {
     "who": "B",
     "ig": "Ka ọmesịa",
     "en": "See you later"
    },
    {
     "who": "A",
     "ig": "Ka ọ dị",
     "en": "Goodbye"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ndewo, kedụ ka ị mere?\" mean?",
     "answer": "Hello, how are you?",
     "options": [
      "Hello, how are you?",
      "Good night (lit. 'till dawn')",
      "I am fine"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Ndewo, kedụ ka ị mere?\"?",
     "answer": "Adị m mma, daalụ",
     "options": [
      "Ị dịkwa mma?",
      "G'ịnwa kwanụ?",
      "Adị m mma, daalụ"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Nnọọ\"?",
     "answer": "Host",
     "options": [
      "Host",
      "Guest"
     ]
    }
   ]
  }
 ],
 "intro": [
  {
   "id": "dlg-intro-1",
   "title": "Meeting someone new",
   "setting": "Two people meet and share their names.",
   "roles": {
    "A": "Ada",
    "B": "Visitor"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ndewo, kedụ ka ị mere?",
     "en": "Hello, how are you?"
    },
    {
     "who": "B",
     "ig": "Adị m mma, daalụ",
     "en": "I'm fine, thank you"
    },
    {
     "who": "A",
     "ig": "Kedụ aha gị?",
     "en": "What is your name?"
    },
    {
     "who": "B",
     "ig": "Aha m bụ Ada",
     "en": "My name is Ada"
    },
    {
     "who": "A",
     "ig": "Ebee ka ị si?",
     "en": "Where are you from?"
    },
    {
     "who": "B",
     "ig": "E si m England",
     "en": "I am from England"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ndewo, kedụ ka ị mere?\" mean?",
     "answer": "Hello, how are you?",
     "options": [
      "I am Igbo (an Igbo person)",
      "I live in Enugu",
      "Hello, how are you?"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Ndewo, kedụ ka ị mere?\"?",
     "answer": "Adị m mma, daalụ",
     "options": [
      "Adị m mma, daalụ",
      "Kedụ ebe ị bi?",
      "Kedụ ka ị mere?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Kedụ aha gị?\"?",
     "answer": "Ada",
     "options": [
      "Ada",
      "Visitor"
     ]
    },
    {
     "type": "meaning",
     "prompt": "What does \"Adị m mma, daalụ\" mean?",
     "answer": "I'm fine, thank you",
     "options": [
      "How are you?",
      "I'm fine, thank you",
      "I speak English"
     ]
    }
   ]
  }
 ],
 "family": [
  {
   "id": "dlg-family-1",
   "title": "Showing a photo",
   "setting": "Someone shows family photos to a friend.",
   "roles": {
    "A": "Host",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ndewo, kedụ ka ị mere?",
     "en": "Hello, how are you?"
    },
    {
     "who": "B",
     "ig": "Adị m mma, daalụ",
     "en": "I'm fine, thank you"
    },
    {
     "who": "A",
     "ig": "Nke a bụ nne m",
     "en": "This is my mother"
    },
    {
     "who": "A",
     "ig": "Nke a bụ nna m",
     "en": "This is my father"
    },
    {
     "who": "B",
     "ig": "Ndewo",
     "en": "Hello (respectful)"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ndewo, kedụ ka ị mere?\" mean?",
     "answer": "Hello, how are you?",
     "options": [
      "Hello, how are you?",
      "Please say it again",
      "This is my wife"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Ndewo, kedụ ka ị mere?\"?",
     "answer": "Adị m mma, daalụ",
     "options": [
      "Adị m mma, daalụ",
      "Kedụ ka ị mere?",
      "Ị bọọla chi?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Nke a bụ nne m\"?",
     "answer": "Host",
     "options": [
      "Host",
      "Friend"
     ]
    }
   ]
  }
 ],
 "food": [
  {
   "id": "dlg-food-1",
   "title": "Come and eat",
   "setting": "A hungry visitor is invited to eat.",
   "roles": {
    "A": "Visitor",
    "B": "Host"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Agụụ na-agụ m",
     "en": "I am hungry"
    },
    {
     "who": "B",
     "ig": "Bịa rie nri",
     "en": "Come and eat"
    },
    {
     "who": "A",
     "ig": "Daalụ",
     "en": "Thank you"
    },
    {
     "who": "A",
     "ig": "Nri a tọrọ ụtọ",
     "en": "This food is delicious"
    },
    {
     "who": "B",
     "ig": "Ee",
     "en": "Yes"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Nri a tọrọ ụtọ\" mean?",
     "answer": "This food is delicious",
     "options": [
      "Do you speak Igbo?",
      "Thank you (lit. 'you have done well')",
      "This food is delicious"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Agụụ na-agụ m\"?",
     "answer": "Bịa rie nri",
     "options": [
      "Aghọtara m",
      "Bịa rie nri",
      "Ka ọmesịa"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Daalụ\"?",
     "answer": "Visitor",
     "options": [
      "Visitor",
      "Host"
     ]
    }
   ]
  }
 ],
 "numbers": [
  {
   "id": "dlg-numbers-1",
   "title": "How much?",
   "setting": "A short chat about paying.",
   "roles": {
    "A": "Buyer",
    "B": "Seller"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ego ole?",
     "en": "How much (money)?"
    },
    {
     "who": "B",
     "ig": "naịra iri ise",
     "en": "fifty naira"
    },
    {
     "who": "A",
     "ig": "Ọ dị mma",
     "en": "It's fine (okay)"
    },
    {
     "who": "B",
     "ig": "Daalụ",
     "en": "Thank you"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ego ole?\" mean?",
     "answer": "How much (money)?",
     "options": [
      "Please say it again",
      "How much (money)?",
      "I am thirsty"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Ego ole?\"?",
     "answer": "naịra iri ise",
     "options": [
      "naịra iri ise",
      "iri atọ",
      "ụlọ ahịa"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Ọ dị mma\"?",
     "answer": "Buyer",
     "options": [
      "Buyer",
      "Seller"
     ]
    }
   ],
   "flag": true
  }
 ],
 "eatingout": [
  {
   "id": "dlg-eatingout-1",
   "title": "At the restaurant",
   "setting": "A customer orders water and meat.",
   "roles": {
    "A": "Waiter",
    "B": "Customer"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Kedụ mmanya ị chọrọ?",
     "en": "What drink do you want?"
    },
    {
     "who": "B",
     "ig": "Biko, nye m mmiri",
     "en": "Please give me water"
    },
    {
     "who": "A",
     "ig": "Ị chọrọ anụ?",
     "en": "Do you want meat?"
    },
    {
     "who": "B",
     "ig": "Ee, achọrọ m anụ",
     "en": "Yes, I want meat"
    },
    {
     "who": "B",
     "ig": "Nri a dị ụtọ",
     "en": "This food is tasty"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Kedụ mmanya ị chọrọ?\" mean?",
     "answer": "What drink do you want?",
     "options": [
      "I am full",
      "Take the money",
      "What drink do you want?"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Kedụ mmanya ị chọrọ?\"?",
     "answer": "Biko, nye m mmiri",
     "options": [
      "Ego ole ka m ji gị?",
      "Ị nwere mmiri?",
      "Biko, nye m mmiri"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Ị chọrọ anụ?\"?",
     "answer": "Waiter",
     "options": [
      "Waiter",
      "Customer"
     ]
    }
   ]
  }
 ],
 "market": [
  {
   "id": "dlg-market-1",
   "title": "Bargaining for yam",
   "setting": "A buyer bargains and agrees on a price.",
   "roles": {
    "A": "Buyer",
    "B": "Seller"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ị nwere ji?",
     "en": "Do you have yam?"
    },
    {
     "who": "B",
     "ig": "Naịra narị ise",
     "en": "Five hundred naira"
    },
    {
     "who": "A",
     "ig": "Ọ dị oke ọnụ. Biko, belata ọnụ ya",
     "en": "It's too expensive. Please reduce the price."
    },
    {
     "who": "B",
     "ig": "Ọ dị mma, naịra narị anọ",
     "en": "Okay, four hundred naira"
    },
    {
     "who": "A",
     "ig": "Ọ dị mma. Achọrọ m ya",
     "en": "Fine. I want it. (I'll take it)"
    },
    {
     "who": "B",
     "ig": "Were ego",
     "en": "Take the money"
    },
    {
     "who": "A",
     "ig": "Daalụ. Aga m abịa echi",
     "en": "Thank you. I will come tomorrow."
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ọ dị oke ọnụ. Biko, belata ọnụ ya\" mean?",
     "answer": "It's too expensive. Please reduce the price.",
     "options": [
      "Thank you. How much do I owe you?",
      "It's too expensive. Please reduce the price.",
      "How much do I owe you?"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Ị nwere ji?\"?",
     "answer": "Naịra narị ise",
     "options": [
      "Ị nwere mmiri?",
      "Naịra narị ise",
      "Naịra ole bụ ihe a?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Ọ dị mma, naịra narị anọ\"?",
     "answer": "Seller",
     "options": [
      "Buyer",
      "Seller"
     ]
    },
    {
     "type": "meaning",
     "prompt": "What does \"Ọ dị mma. Achọrọ m ya\" mean?",
     "answer": "Fine. I want it. (I'll take it)",
     "options": [
      "Please give me water",
      "Thank you. How much do I owe you?",
      "Fine. I want it. (I'll take it)"
     ]
    }
   ],
   "flag": true
  }
 ],
 "verbs": [
  {
   "id": "dlg-verbs-1",
   "title": "What are you doing?",
   "setting": "Two friends talk about what they are doing.",
   "roles": {
    "A": "Ada",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Gịnị ka ị na-eme?",
     "en": "What are you doing?"
    },
    {
     "who": "B",
     "ig": "Ana m agụ akwụkwọ",
     "en": "I am reading a book / I am studying"
    },
    {
     "who": "A",
     "ig": "Bịa rie nri",
     "en": "Come and eat"
    },
    {
     "who": "B",
     "ig": "Daalụ",
     "en": "Thank you"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ana m agụ akwụkwọ\" mean?",
     "answer": "I am reading a book / I am studying",
     "options": [
      "What drink do you want?",
      "It's tasty (it was tasty)",
      "I am reading a book / I am studying"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Gịnị ka ị na-eme?\"?",
     "answer": "Ana m agụ akwụkwọ",
     "options": [
      "Ego ole ka m ji gị?",
      "Ana m agụ akwụkwọ",
      "Kedụ mmanya ị chọrọ?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Bịa rie nri\"?",
     "answer": "Ada",
     "options": [
      "Ada",
      "Friend"
     ]
    }
   ]
  }
 ],
 "school": [
  {
   "id": "dlg-school-1",
   "title": "At school",
   "setting": "A teacher and a student chat.",
   "roles": {
    "A": "Teacher",
    "B": "Student"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Abụ m onyenkụzi",
     "en": "I am a teacher"
    },
    {
     "who": "B",
     "ig": "Abụ m nwa akwụkwọ",
     "en": "I am a student"
    },
    {
     "who": "A",
     "ig": "Gịnị ka ị na-eme?",
     "en": "What are you doing?"
    },
    {
     "who": "B",
     "ig": "Ana m aga ụlọ akwụkwọ",
     "en": "I am going to school"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ana m aga ụlọ akwụkwọ\" mean?",
     "answer": "I am going to school",
     "options": [
      "I am going to school",
      "Please reduce the price",
      "He/she is going to school"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Gịnị ka ị na-eme?\"?",
     "answer": "Ana m aga ụlọ akwụkwọ",
     "options": [
      "Naịra ole bụ ihe a?",
      "Gịnị pụtara ahịa?",
      "Ana m aga ụlọ akwụkwọ"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Abụ m onyenkụzi\"?",
     "answer": "Teacher",
     "options": [
      "Teacher",
      "Student"
     ]
    }
   ]
  }
 ],
 "travel": [
  {
   "id": "dlg-travel-1",
   "title": "In a taxi",
   "setting": "A passenger tells the driver where to go.",
   "roles": {
    "A": "Driver",
    "B": "Passenger"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Olee ebe ị na-aga?",
     "en": "Where are you going?"
    },
    {
     "who": "B",
     "ig": "Ana m aga ọrụ",
     "en": "I am going to work"
    },
    {
     "who": "B",
     "ig": "Ọ dị nso?",
     "en": "Is it near?"
    },
    {
     "who": "A",
     "ig": "E-e, ọ dị ezigbo nso",
     "en": "Yes, it is very near"
    },
    {
     "who": "B",
     "ig": "Kwụsị ebe a",
     "en": "Stop here"
    },
    {
     "who": "A",
     "ig": "Ebe a dị mma",
     "en": "Here is fine"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ana m aga ọrụ\" mean?",
     "answer": "I am going to work",
     "options": [
      "I am going to work",
      "I want to go home",
      "I am going to the market"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Olee ebe ị na-aga?\"?",
     "answer": "Ana m aga ọrụ",
     "options": [
      "Ebee ka ahịa dị?",
      "Ana m aga ọrụ",
      "Ọ dị anya?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Ọ dị nso?\"?",
     "answer": "Passenger",
     "options": [
      "Driver",
      "Passenger"
     ]
    },
    {
     "type": "meaning",
     "prompt": "What does \"E-e, ọ dị ezigbo nso\" mean?",
     "answer": "Yes, it is very near",
     "options": [
      "I am a student",
      "Where is the market?",
      "Yes, it is very near"
     ]
    }
   ],
   "flag": true
  }
 ],
 "questions": [
  {
   "id": "dlg-questions-1",
   "title": "Why learn Igbo?",
   "setting": "Someone asks a new learner why they study Igbo.",
   "roles": {
    "A": "Friend",
    "B": "Learner"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Onye ka ị bụ?",
     "en": "Who are you?"
    },
    {
     "who": "B",
     "ig": "Aha m bụ Ada",
     "en": "My name is Ada"
    },
    {
     "who": "A",
     "ig": "Gịnị mere ị na-amụ Igbo?",
     "en": "Why are you learning Igbo?"
    },
    {
     "who": "B",
     "ig": "A na m amụ Igbo maka na ọ bụ asụsụ nne m",
     "en": "I am learning Igbo because it is my mother's language"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"A na m amụ Igbo maka na ọ bụ asụsụ nne m\" mean?",
     "answer": "I am learning Igbo because it is my mother's language",
     "options": [
      "The kind of dream I had last night, I did not understand it",
      "I am learning Igbo because it is my mother's language",
      "Finish everything you went to do in Lagos before returning to Onitsha."
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Onye ka ị bụ?\"?",
     "answer": "Aha m bụ Ada",
     "options": [
      "Olee mgbe?",
      "Aha m bụ Ada",
      "Gịnị ka ị chọrọ?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Gịnị mere ị na-amụ Igbo?\"?",
     "answer": "Friend",
     "options": [
      "Friend",
      "Learner"
     ]
    }
   ],
   "flag": true
  }
 ],
 "routine": [
  {
   "id": "dlg-routine-1",
   "title": "Getting ready",
   "setting": "A parent hurries a child along in the morning.",
   "roles": {
    "A": "Parent",
    "B": "Child"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Gịnị ka ị na-eme?",
     "en": "What are you doing?"
    },
    {
     "who": "B",
     "ig": "Ana m asa ahụ",
     "en": "I am having a bath / shower"
    },
    {
     "who": "A",
     "ig": "Yiri uwe gị ọsọọsọ",
     "en": "Put on your clothes quickly"
    },
    {
     "who": "B",
     "ig": "Ee",
     "en": "Yes"
    },
    {
     "who": "A",
     "ig": "Anyị na-eri nri",
     "en": "We are eating (food)"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ana m asa ahụ\" mean?",
     "answer": "I am having a bath / shower",
     "options": [
      "Why? / What happened?",
      "I am having a bath / shower",
      "Every morning I sweep my house"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Gịnị ka ị na-eme?\"?",
     "answer": "Ana m asa ahụ",
     "options": [
      "Ole ụmụnne ị nwere?",
      "Gịnị mere ị na-amụ Igbo?",
      "Ana m asa ahụ"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Yiri uwe gị ọsọọsọ\"?",
     "answer": "Parent",
     "options": [
      "Parent",
      "Child"
     ]
    }
   ]
  }
 ],
 "whereis": [
  {
   "id": "dlg-whereis-1",
   "title": "Where is my bag?",
   "setting": "Someone looks for a bag.",
   "roles": {
    "A": "Seeker",
    "B": "Helper"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Olee ebe akpa ahụ dị?",
     "en": "Where is the bag?"
    },
    {
     "who": "B",
     "ig": "Akpa m nọ n'elu ochenkwago",
     "en": "My bag is on the table"
    },
    {
     "who": "A",
     "ig": "Daalụ",
     "en": "Thank you"
    },
    {
     "who": "B",
     "ig": "Nsogbu adịghị",
     "en": "No problem / You're welcome"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Akpa m nọ n'elu ochenkwago\" mean?",
     "answer": "My bag is on the table",
     "options": [
      "My bag is on the table",
      "Put on your clothes quickly",
      "When I wake up in the morning, I go running"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Olee ebe akpa ahụ dị?\"?",
     "answer": "Akpa m nọ n'elu ochenkwago",
     "options": [
      "Ole ihe ị nwere?",
      "Akpa m nọ n'elu ochenkwago",
      "Gịnị bụ nke a?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Daalụ\"?",
     "answer": "Seeker",
     "options": [
      "Seeker",
      "Helper"
     ]
    }
   ],
   "flag": true
  }
 ],
 "jobs": [
  {
   "id": "dlg-jobs-1",
   "title": "What work do you do?",
   "setting": "Two people talk about their work.",
   "roles": {
    "A": "Ada",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ị na-arụ ọrụ gịnị?",
     "en": "What work do you do?"
    },
    {
     "who": "B",
     "ig": "Abụ m dọkịta",
     "en": "I am a doctor"
    },
    {
     "who": "A",
     "ig": "Nna m bụ onye ugbo",
     "en": "My father is a farmer"
    },
    {
     "who": "B",
     "ig": "Nne m bụ onyenkụzi",
     "en": "My mother is a teacher"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ị na-arụ ọrụ gịnị?\" mean?",
     "answer": "What work do you do?",
     "options": [
      "She bought a new phone",
      "What work do you do?",
      "We are eating (food)"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Ị na-arụ ọrụ gịnị?\"?",
     "answer": "Abụ m dọkịta",
     "options": [
      "Olee oge ị na-alọta ụlọ?",
      "Olee ebe ọ dị?",
      "Abụ m dọkịta"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Nna m bụ onye ugbo\"?",
     "answer": "Ada",
     "options": [
      "Ada",
      "Friend"
     ]
    }
   ],
   "flag": true
  }
 ],
 "animals": [
  {
   "id": "dlg-animals-1",
   "title": "Talking about animals",
   "setting": "Two friends talk about animals.",
   "roles": {
    "A": "Ada",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Efi bụ oke anụmanụ",
     "en": "Cows are big animals"
    },
    {
     "who": "B",
     "ig": "Ọdụm abụghị obere anụmanụ",
     "en": "The lion is not a small animal"
    },
    {
     "who": "A",
     "ig": "Agụ bụ anụ kara obi",
     "en": "The leopard is a brave animal"
    },
    {
     "who": "B",
     "ig": "Ahụbeghị m mbe mbụ",
     "en": "I have not seen a tortoise before"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ọdụm abụghị obere anụmanụ\" mean?",
     "answer": "The lion is not a small animal",
     "options": [
      "My mother is a teacher",
      "The lion is not a small animal",
      "Your ball is under the car"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Efi bụ oke anụmanụ\"?",
     "answer": "Ọdụm abụghị obere anụmanụ",
     "options": [
      "Gaa n'ihu",
      "Ọdụm abụghị obere anụmanụ",
      "Abụ m dọkịta"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Agụ bụ anụ kara obi\"?",
     "answer": "Ada",
     "options": [
      "Ada",
      "Friend"
     ]
    }
   ]
  }
 ],
 "clothes": [
  {
   "id": "dlg-clothes-1",
   "title": "A nice outfit",
   "setting": "Two friends talk about clothes.",
   "roles": {
    "A": "Ada",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Akpụkpụụkwụ gị dị mma",
     "en": "Your shoes are nice"
    },
    {
     "who": "B",
     "ig": "Daalụ",
     "en": "Thank you"
    },
    {
     "who": "B",
     "ig": "A chọrọ m iyi akwa ọhụrụ wee jee emume ahụ",
     "en": "I want to wear new clothes and go to the ceremony"
    },
    {
     "who": "A",
     "ig": "Ọ dị mma",
     "en": "It's fine (okay)"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"A chọrọ m iyi akwa ọhụrụ wee jee emume ahụ\" mean?",
     "answer": "I want to wear new clothes and go to the ceremony",
     "options": [
      "I will not go to that event with that bag",
      "I want to wear new clothes and go to the ceremony",
      "Mothers usually tie a wrapper when they rest"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Akpụkpụụkwụ gị dị mma\"?",
     "answer": "Daalụ",
     "options": [
      "Gaa n'ihu",
      "Daalụ",
      "Ahụbeghị m mbe mbụ"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Ọ dị mma\"?",
     "answer": "Ada",
     "options": [
      "Ada",
      "Friend"
     ]
    }
   ],
   "flag": true
  }
 ],
 "describe": [
  {
   "id": "dlg-describe-1",
   "title": "Big things",
   "setting": "Two people share what they like.",
   "roles": {
    "A": "Ada",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ụlọ ahụ buru ibu",
     "en": "The house is big"
    },
    {
     "who": "B",
     "ig": "Naanị ihe ukwu na-amasị m",
     "en": "I only like big things"
    },
    {
     "who": "A",
     "ig": "Ụgbọala m emeela ochie",
     "en": "My car has become old"
    },
    {
     "who": "B",
     "ig": "Nke ahụ dị njọ",
     "en": "That is bad"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Naanị ihe ukwu na-amasị m\" mean?",
     "answer": "I only like big things",
     "options": [
      "I have a dog",
      "I only like big things",
      "My mother is a teacher"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Ụlọ ahụ buru ibu\"?",
     "answer": "Naanị ihe ukwu na-amasị m",
     "options": [
      "Naanị ihe ukwu na-amasị m",
      "Ọdụm abụghị obere anụmanụ",
      "Nnekwu na-eyi akwa"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Ụgbọala m emeela ochie\"?",
     "answer": "Ada",
     "options": [
      "Ada",
      "Friend"
     ]
    }
   ],
   "flag": true
  }
 ],
 "opinions": [
  {
   "id": "dlg-opinions-1",
   "title": "Do you agree?",
   "setting": "A friend suggests going somewhere.",
   "roles": {
    "A": "Ada",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ka anyị gaa ebe ahụ",
     "en": "Let us go there"
    },
    {
     "who": "B",
     "ig": "Ekwenyere m",
     "en": "I agree"
    },
    {
     "who": "A",
     "ig": "Gịnị ka ị chere?",
     "en": "What do you think?"
    },
    {
     "who": "B",
     "ig": "Ọ masịrị m",
     "en": "I like it"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ka anyị gaa ebe ahụ\" mean?",
     "answer": "Let us go there",
     "options": [
      "That is bad",
      "Let us go there",
      "I have a dog"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Gịnị ka ị chere?\"?",
     "answer": "Ọ masịrị m",
     "options": [
      "Ọ masịrị m",
      "Ole ihe ị nwere?",
      "Gịnị ka ị chọrọ ịbụ?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Ekwenyere m\"?",
     "answer": "Friend",
     "options": [
      "Ada",
      "Friend"
     ]
    }
   ],
   "flag": true
  }
 ],
 "peoples": [
  {
   "id": "dlg-peoples-1",
   "title": "Languages we speak",
   "setting": "Two people ask about each other.",
   "roles": {
    "A": "Ada",
    "B": "Visitor"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ị na-asụ Yoruba?",
     "en": "Do you speak Yoruba?"
    },
    {
     "who": "B",
     "ig": "Ana m asụ Igbo na Bekee",
     "en": "I speak Igbo and English"
    },
    {
     "who": "A",
     "ig": "Ebee ka ị si?",
     "en": "Where are you from?"
    },
    {
     "who": "B",
     "ig": "E si m England",
     "en": "I am from England"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ana m asụ Igbo na Bekee\" mean?",
     "answer": "I speak Igbo and English",
     "options": [
      "I speak Igbo and English",
      "What do you think?",
      "Ajaero is a good man"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Ị na-asụ Yoruba?\"?",
     "answer": "Ana m asụ Igbo na Bekee",
     "options": [
      "Onye nwe akpụkpụụkwụ ndị a?",
      "Ana m asụ Igbo na Bekee",
      "Gịnị ka ị chere?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Ebee ka ị si?\"?",
     "answer": "Ada",
     "options": [
      "Ada",
      "Visitor"
     ]
    }
   ],
   "flag": true
  }
 ],
 "linking": [
  {
   "id": "dlg-linking-1",
   "title": "Changing the order",
   "setting": "A customer changes what they want.",
   "roles": {
    "A": "Customer",
    "B": "Seller"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Achọrọ m anụ kama ọkụkọ",
     "en": "I want meat instead of chicken"
    },
    {
     "who": "B",
     "ig": "Ọ dị mma, mana ọ dị oke ọnụ",
     "en": "It is good, but it is too expensive"
    },
    {
     "who": "A",
     "ig": "Mgbe ahụ, anyị ga-aga ahịa",
     "en": "Then we will go to the market"
    },
    {
     "who": "B",
     "ig": "Ọ dị mma",
     "en": "It's fine (okay)"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ọ dị mma, mana ọ dị oke ọnụ\" mean?",
     "answer": "It is good, but it is too expensive",
     "options": [
      "It is good, but it is too expensive",
      "I think I saw a snake",
      "I think you have a cold"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Achọrọ m anụ kama ọkụkọ\"?",
     "answer": "Ọ dị mma, mana ọ dị oke ọnụ",
     "options": [
      "Echere m na ị na-arịa ọrịa oyi",
      "Ha kwesịrị ịma ebe anyị nọ",
      "Ọ dị mma, mana ọ dị oke ọnụ"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Mgbe ahụ, anyị ga-aga ahịa\"?",
     "answer": "Customer",
     "options": [
      "Customer",
      "Seller"
     ]
    }
   ],
   "flag": true
  }
 ],
 "everyday": [
  {
   "id": "dlg-everyday-1",
   "title": "Good morning",
   "setting": "Two people greet each other and ask about English.",
   "roles": {
    "A": "Ada",
    "B": "Visitor"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ụtụtụ ọma",
     "en": "Good morning"
    },
    {
     "who": "B",
     "ig": "Ndewo, kedụ ka ị mere?",
     "en": "Hello, how are you?"
    },
    {
     "who": "A",
     "ig": "Adị m mma, daalụ",
     "en": "I'm fine, thank you"
    },
    {
     "who": "B",
     "ig": "Ị na-asụ Bekee?",
     "en": "Do you speak English?"
    },
    {
     "who": "A",
     "ig": "Ana m asụ ntakịrị Igbo",
     "en": "I speak a little Igbo"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ana m asụ ntakịrị Igbo\" mean?",
     "answer": "I speak a little Igbo",
     "options": [
      "How old are you?",
      "Please write it down",
      "I speak a little Igbo"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Ndewo, kedụ ka ị mere?\"?",
     "answer": "Adị m mma, daalụ",
     "options": [
      "Ebee ka ụlọ mposi dị?",
      "Afọ ole ka ị dị?",
      "Adị m mma, daalụ"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Ị na-asụ Bekee?\"?",
     "answer": "Visitor",
     "options": [
      "Ada",
      "Visitor"
     ]
    }
   ]
  }
 ],
 "clock": [
  {
   "id": "dlg-clock-1",
   "title": "What time is it?",
   "setting": "Someone asks the time.",
   "roles": {
    "A": "Ada",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Olee ihe elekere nọ?",
     "en": "What time is it?"
    },
    {
     "who": "B",
     "ig": "Ọ nọ elekere otu",
     "en": "It is one o'clock"
    },
    {
     "who": "A",
     "ig": "Daalụ",
     "en": "Thank you"
    },
    {
     "who": "B",
     "ig": "Nsogbu adịghị",
     "en": "No problem / You're welcome"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Nsogbu adịghị\" mean?",
     "answer": "No problem / You're welcome",
     "options": [
      "No problem / You're welcome",
      "Leave me alone!",
      "Good luck! (lit. 'have a good chi')"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Olee ihe elekere nọ?\"?",
     "answer": "Ọ nọ elekere otu",
     "options": [
      "Afọ ole ka ị dị?",
      "Ọ nọ elekere otu",
      "Gịnị ka a na-akpọ 'water' n'Igbo?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Daalụ\"?",
     "answer": "Ada",
     "options": [
      "Ada",
      "Friend"
     ]
    }
   ],
   "flag": true
  }
 ],
 "future": [
  {
   "id": "dlg-future-1",
   "title": "See you tomorrow",
   "setting": "Two friends plan to meet.",
   "roles": {
    "A": "Ada",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ha ga-abịa echi",
     "en": "They will come tomorrow"
    },
    {
     "who": "B",
     "ig": "A ga m abịa na uhuluchi",
     "en": "I will come in the evening"
    },
    {
     "who": "A",
     "ig": "Anyị ga-ahụ echi",
     "en": "We will see tomorrow"
    },
    {
     "who": "B",
     "ig": "Ee",
     "en": "Yes"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"A ga m abịa na uhuluchi\" mean?",
     "answer": "I will come in the evening",
     "options": [
      "I went into the room immediately",
      "I will come in the evening",
      "We went to school"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Ha ga-abịa echi\"?",
     "answer": "A ga m abịa na uhuluchi",
     "options": [
      "Ọ nọ elekere otu",
      "A ga m abịa na uhuluchi",
      "Kpọọ ndị uwe ojii!"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Anyị ga-ahụ echi\"?",
     "answer": "Ada",
     "options": [
      "Ada",
      "Friend"
     ]
    }
   ]
  }
 ],
 "feelings": [
  {
   "id": "dlg-feelings-1",
   "title": "How are you feeling?",
   "setting": "A friend feels happy but tired.",
   "roles": {
    "A": "Ada",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ndewo, kedụ ka ị mere?",
     "en": "Hello, how are you?"
    },
    {
     "who": "B",
     "ig": "Obi ụtọ na-eme m, mana ike gwụrụ m",
     "en": "I am happy, but I am tired"
    },
    {
     "who": "A",
     "ig": "Ọ dị mma",
     "en": "It's fine (okay)"
    },
    {
     "who": "B",
     "ig": "Daalụ",
     "en": "Thank you"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Obi ụtọ na-eme m, mana ike gwụrụ m\" mean?",
     "answer": "I am happy, but I am tired",
     "options": [
      "I am happy, but I am tired",
      "She will enter university next year",
      "I saw it on the table in the bedroom"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Ndewo, kedụ ka ị mere?\"?",
     "answer": "Obi ụtọ na-eme m, mana ike gwụrụ m",
     "options": [
      "Daalụ. Ego ole ka m ji gị?",
      "Gịnị ka a na-akpọ 'water' n'Igbo?",
      "Obi ụtọ na-eme m, mana ike gwụrụ m"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Ọ dị mma\"?",
     "answer": "Ada",
     "options": [
      "Ada",
      "Friend"
     ]
    }
   ],
   "flag": true
  }
 ],
 "chat": [
  {
   "id": "dlg-chat-1",
   "title": "Meeting a friend",
   "setting": "Two friends decide to go to market.",
   "roles": {
    "A": "Ada",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Enyi m, kedụ ka ị mere?",
     "en": "My friend, how are you?"
    },
    {
     "who": "B",
     "ig": "Adị m mma, daalụ",
     "en": "I'm fine, thank you"
    },
    {
     "who": "A",
     "ig": "Ka anyị gaa ahịa",
     "en": "Let's go to the market"
    },
    {
     "who": "B",
     "ig": "Ọ dị mma",
     "en": "It's fine (okay)"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Enyi m, kedụ ka ị mere?\" mean?",
     "answer": "My friend, how are you?",
     "options": [
      "My friend, how are you?",
      "Someone is building a house next to yours",
      "I have not seen anyone as tall as Chukwudi"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Enyi m, kedụ ka ị mere?\"?",
     "answer": "Adị m mma, daalụ",
     "options": [
      "Onye ka m ga-eziga?",
      "Adị m mma, daalụ",
      "Ị chọrọ anụ?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Ka anyị gaa ahịa\"?",
     "answer": "Ada",
     "options": [
      "Ada",
      "Friend"
     ]
    }
   ],
   "flag": true
  }
 ],
 "cities": [
  {
   "id": "dlg-cities-1",
   "title": "Where do you live?",
   "setting": "Two people talk about their towns.",
   "roles": {
    "A": "Ada",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ị bi n'obodo ukwu?",
     "en": "Do you live in a big town?"
    },
    {
     "who": "B",
     "ig": "Ebi m n'Owerri",
     "en": "I live in Owerri"
    },
    {
     "who": "A",
     "ig": "Onitsha bụ obodo ukwu",
     "en": "Onitsha is a big town"
    },
    {
     "who": "B",
     "ig": "Ee",
     "en": "Yes"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ị bi n'obodo ukwu?\" mean?",
     "answer": "Do you live in a big town?",
     "options": [
      "My friend is a good man",
      "I am afraid",
      "Do you live in a big town?"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Ị bi n'obodo ukwu?\"?",
     "answer": "Ebi m n'Owerri",
     "options": [
      "Ebi m n'Owerri",
      "Gịnị na-ewe gị?",
      "Enyi m, kedụ ka ị mere?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Onitsha bụ obodo ukwu\"?",
     "answer": "Ada",
     "options": [
      "Ada",
      "Friend"
     ]
    }
   ],
   "flag": true
  }
 ],
 "arts": [
  {
   "id": "dlg-arts-1",
   "title": "Music and dance",
   "setting": "A friend invites you to dance.",
   "roles": {
    "A": "Ada",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ị nụla akụkọ ọhụụ?",
     "en": "Have you heard the new story?"
    },
    {
     "who": "B",
     "ig": "Ee, nụrụ m",
     "en": "Yes, I heard it"
    },
    {
     "who": "A",
     "ig": "Ị chọrọ ka mụ na gị gbaa egwu?",
     "en": "Do you want to dance with me?"
    },
    {
     "who": "B",
     "ig": "Ee",
     "en": "Yes"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ị chọrọ ka mụ na gị gbaa egwu?\" mean?",
     "answer": "Do you want to dance with me?",
     "options": [
      "My friend, how are you?",
      "I love to look at the stars in the sky",
      "Do you want to dance with me?"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Ị nụla akụkọ ọhụụ?\"?",
     "answer": "Ee, nụrụ m",
     "options": [
      "Enyi m, kedụ ka ị mere?",
      "Ị bi n'obodo ukwu?",
      "Ee, nụrụ m"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Ee\"?",
     "answer": "Friend",
     "options": [
      "Ada",
      "Friend"
     ]
    }
   ],
   "flag": true
  }
 ],
 "discuss": [
  {
   "id": "dlg-discuss-1",
   "title": "Which one is better?",
   "setting": "Two shoppers compare two items.",
   "roles": {
    "A": "Ada",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Kedụ nke ka mma?",
     "en": "Which one is better?"
    },
    {
     "who": "B",
     "ig": "Nke a ka mma, mana ọ dị oke ọnụ",
     "en": "This one is better, but it is very expensive"
    },
    {
     "who": "A",
     "ig": "Nke a kacha mma",
     "en": "This one is the best"
    },
    {
     "who": "B",
     "ig": "Ọ bụ eziokwu",
     "en": "It is true"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Nke a ka mma, mana ọ dị oke ọnụ\" mean?",
     "answer": "This one is better, but it is very expensive",
     "options": [
      "I don't know how to play the flute",
      "Igbo wrestling is not quite like the American kind",
      "This one is better, but it is very expensive"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Kedụ nke ka mma?\"?",
     "answer": "Nke a ka mma, mana ọ dị oke ọnụ",
     "options": [
      "Nke a ka mma, mana ọ dị oke ọnụ",
      "Ebee ka e nwere ụlọ mkpụrụ ọgwụ kacha dị nso?",
      "Ị chetara ihe ọ bụla mgbe ị bụ nwata?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Nke a kacha mma\"?",
     "answer": "Ada",
     "options": [
      "Ada",
      "Friend"
     ]
    }
   ],
   "flag": true
  }
 ],
 "plans": [
  {
   "id": "dlg-plans-1",
   "title": "Weekend plans",
   "setting": "A friend invites you over.",
   "roles": {
    "A": "Ada",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Gịnị ka ị na-eme echi?",
     "en": "What are you doing tomorrow?"
    },
    {
     "who": "B",
     "ig": "Enwere m oge",
     "en": "I am free (I have time)"
    },
    {
     "who": "A",
     "ig": "Bịa n'ụlọ m ụbọchị Satọde",
     "en": "Come to my house on Saturday"
    },
    {
     "who": "B",
     "ig": "Ana m abịa",
     "en": "I am coming"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Enwere m oge\" mean?",
     "answer": "I am free (I have time)",
     "options": [
      "I am free (I have time)",
      "That song touches my heart",
      "Call me later"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Gịnị ka ị na-eme echi?\"?",
     "answer": "Enwere m oge",
     "options": [
      "Enwere m oge",
      "Ị nụla akụkọ ọhụụ?",
      "Enwere m ike ịnweta nọmba gị?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Bịa n'ụlọ m ụbọchị Satọde\"?",
     "answer": "Ada",
     "options": [
      "Ada",
      "Friend"
     ]
    }
   ],
   "flag": true
  }
 ],
 "doctor": [
  {
   "id": "dlg-doctor-1",
   "title": "At the clinic",
   "setting": "A patient tells the doctor they feel unwell.",
   "roles": {
    "A": "Patient",
    "B": "Doctor"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ahụ adịghị m mma",
     "en": "I don't feel well"
    },
    {
     "who": "B",
     "ig": "Gịnị mere?",
     "en": "Why? / What happened?"
    },
    {
     "who": "A",
     "ig": "Isi na-awa m",
     "en": "I have a headache"
    },
    {
     "who": "B",
     "ig": "Gbakee ngwa ngwa",
     "en": "Get well soon"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ahụ adịghị m mma\" mean?",
     "answer": "I don't feel well",
     "options": [
      "I don't feel well",
      "What are you doing tomorrow?",
      "This one is the best"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Gịnị mere?\"?",
     "answer": "Isi na-awa m",
     "options": [
      "Ị ga-abịa?",
      "Isi na-awa m",
      "Enwere m ike ịnweta nọmba gị?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Gbakee ngwa ngwa\"?",
     "answer": "Doctor",
     "options": [
      "Patient",
      "Doctor"
     ]
    }
   ],
   "flag": true
  }
 ],
 "weather": [
  {
   "id": "dlg-weather-1",
   "title": "Rain today",
   "setting": "Two people talk about the weather.",
   "roles": {
    "A": "Ada",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Olee maka ụbọchị taa?",
     "en": "How is the weather today?"
    },
    {
     "who": "B",
     "ig": "Mmiri na-ezo",
     "en": "It is raining"
    },
    {
     "who": "A",
     "ig": "Oyi na-atụ",
     "en": "It is cold"
    },
    {
     "who": "B",
     "ig": "Ee",
     "en": "Yes"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Olee maka ụbọchị taa?\" mean?",
     "answer": "How is the weather today?",
     "options": [
      "I need a doctor",
      "How is the weather today?",
      "What are you doing tomorrow?"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Olee maka ụbọchị taa?\"?",
     "answer": "Mmiri na-ezo",
     "options": [
      "Ị ga-abịa?",
      "Mmiri na-ezo",
      "Gịnị ka ị na-eme echi?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Oyi na-atụ\"?",
     "answer": "Ada",
     "options": [
      "Ada",
      "Friend"
     ]
    }
   ],
   "flag": true
  }
 ],
 "omenala": [
  {
   "id": "dlg-omenala-1",
   "title": "Greeting an elder",
   "setting": "A young person greets an elder politely.",
   "roles": {
    "A": "Young person",
    "B": "Elder"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ndewo, Daa Mgbechi",
     "en": "Hello, Madam Mgbechi"
    },
    {
     "who": "B",
     "ig": "Ndewo, kedụ ka ị mere?",
     "en": "Hello, how are you?"
    },
    {
     "who": "A",
     "ig": "Adị m mma, daalụ",
     "en": "I'm fine, thank you"
    },
    {
     "who": "B",
     "ig": "Oga diri gị, nwa m",
     "en": "May it go well with you, my child"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Oga diri gị, nwa m\" mean?",
     "answer": "May it go well with you, my child",
     "options": [
      "May it go well with you, my child",
      "I took medicine for a headache",
      "My baby has a cough"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Ndewo, kedụ ka ị mere?\"?",
     "answer": "Adị m mma, daalụ",
     "options": [
      "Adị m mma, daalụ",
      "Onye siri ofe a?",
      "Olee maka ụbọchị taa?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Ndewo, Daa Mgbechi\"?",
     "answer": "Young person",
     "options": [
      "Young person",
      "Elder"
     ]
    }
   ],
   "flag": true
  }
 ],
 "chores": [
  {
   "id": "dlg-chores-1",
   "title": "Helping at home",
   "setting": "A child offers to help with chores.",
   "roles": {
    "A": "Parent",
    "B": "Child"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ị ga-enyere m aka?",
     "en": "Can you help me?"
    },
    {
     "who": "B",
     "ig": "M ga-enyere gị aka",
     "en": "I can help you"
    },
    {
     "who": "A",
     "ig": "Biko, za ụlọ",
     "en": "Please sweep the house"
    },
    {
     "who": "B",
     "ig": "Ee",
     "en": "Yes"
    },
    {
     "who": "A",
     "ig": "Biko, sa efere ndị a",
     "en": "Please wash these plates"
    },
    {
     "who": "B",
     "ig": "Ọ dị mma",
     "en": "It's fine (okay)"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ị ga-enyere m aka?\" mean?",
     "answer": "Can you help me?",
     "options": [
      "Can you help me?",
      "Please clean my room",
      "When the head is rotten, the whole body suffers"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Ị ga-enyere m aka?\"?",
     "answer": "M ga-enyere gị aka",
     "options": [
      "Ị chọrọ mmiri?",
      "M ga-enyere gị aka",
      "Ị bi n'obodo ukwu?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Biko, za ụlọ\"?",
     "answer": "Parent",
     "options": [
      "Parent",
      "Child"
     ]
    },
    {
     "type": "meaning",
     "prompt": "What does \"M ga-enyere gị aka\" mean?",
     "answer": "I can help you",
     "options": [
      "A fish is king in the water",
      "I can help you",
      "There will be a funeral in our town tomorrow"
     ]
    }
   ],
   "flag": true
  }
 ],
 "directions": [
  {
   "id": "dlg-directions-1",
   "title": "Which way to the market?",
   "setting": "Someone asks the way and gets directions.",
   "roles": {
    "A": "Traveller",
    "B": "Local"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Olee ụzọ m ga-esi aga ahịa?",
     "en": "Which way do I go to the market?"
    },
    {
     "who": "B",
     "ig": "Gafee ụzọ a, ahịa ahụ dị n'aka ekpe",
     "en": "Cross this road, the market is on the left"
    },
    {
     "who": "A",
     "ig": "Daalụ",
     "en": "Thank you"
    },
    {
     "who": "B",
     "ig": "Nsogbu adịghị",
     "en": "No problem / You're welcome"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Gafee ụzọ a, ahịa ahụ dị n'aka ekpe\" mean?",
     "answer": "Cross this road, the market is on the left",
     "options": [
      "A poor person's goat is his 'chi' (his fortune)",
      "Cross this road, the market is on the left",
      "God answers prayers said in the Igbo language"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Olee ụzọ m ga-esi aga ahịa?\"?",
     "answer": "Gafee ụzọ a, ahịa ahụ dị n'aka ekpe",
     "options": [
      "Gịnị ka a na-akpọ 'water' n'Igbo?",
      "Gafee ụzọ a, ahịa ahụ dị n'aka ekpe",
      "Onye ka Ada zụụrụ akwa ndị a?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Daalụ\"?",
     "answer": "Traveller",
     "options": [
      "Traveller",
      "Local"
     ]
    }
   ],
   "flag": true
  }
 ],
 "injuries": [
  {
   "id": "dlg-injuries-1",
   "title": "After an accident",
   "setting": "A person is hurt and help is called.",
   "roles": {
    "A": "Helper",
    "B": "Hurt person"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ihe mberede mere!",
     "en": "An accident happened!"
    },
    {
     "who": "A",
     "ig": "Ọ dị gị mgbu?",
     "en": "Are you hurt? (Does it hurt you?)"
    },
    {
     "who": "B",
     "ig": "A gbajiri m ụkwụ m",
     "en": "I broke my leg"
    },
    {
     "who": "A",
     "ig": "Kpọọ ambulans!",
     "en": "Call an ambulance!"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ọ dị gị mgbu?\" mean?",
     "answer": "Are you hurt? (Does it hurt you?)",
     "options": [
      "Go straight ahead, then turn right",
      "Are you hurt? (Does it hurt you?)",
      "Turn right"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Ọ dị gị mgbu?\"?",
     "answer": "A gbajiri m ụkwụ m",
     "options": [
      "Olee ụzọ m ga-esi aga ahịa?",
      "A gbajiri m ụkwụ m",
      "Ị ga-enyere m aka?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Ihe mberede mere!\"?",
     "answer": "Helper",
     "options": [
      "Helper",
      "Hurt person"
     ]
    }
   ],
   "flag": true
  }
 ],
 "exams": [
  {
   "id": "dlg-exams-1",
   "title": "Exam week",
   "setting": "Two students talk about exams.",
   "roles": {
    "A": "Student",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ule anyị ga-ebido n'izụụka ọzọ",
     "en": "Our exams will start next week"
    },
    {
     "who": "B",
     "ig": "Ị na-agụ akwụkwọ ike?",
     "en": "Are you studying hard?"
    },
    {
     "who": "A",
     "ig": "Ana m amụ mgbakọ na mwepụ",
     "en": "I am learning addition and subtraction"
    },
    {
     "who": "B",
     "ig": "Ọ dị mma",
     "en": "It's fine (okay)"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ule anyị ga-ebido n'izụụka ọzọ\" mean?",
     "answer": "Our exams will start next week",
     "options": [
      "Please clean my room",
      "Our exams will start next week",
      "Can you help me?"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Ị na-agụ akwụkwọ ike?\"?",
     "answer": "Ana m amụ mgbakọ na mwepụ",
     "options": [
      "Ị ga-enyere m aka?",
      "Ọ dị gị mgbu?",
      "Ana m amụ mgbakọ na mwepụ"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Ọ dị mma\"?",
     "answer": "Friend",
     "options": [
      "Student",
      "Friend"
     ]
    }
   ],
   "flag": true
  }
 ],
 "community": [
  {
   "id": "dlg-community-1",
   "title": "Town meeting",
   "setting": "Two neighbours talk about a meeting.",
   "roles": {
    "A": "Neighbour 1",
    "B": "Neighbour 2"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Anyị nwere nzukọ echi",
     "en": "We have a meeting tomorrow"
    },
    {
     "who": "B",
     "ig": "Ọ dị mma",
     "en": "It's fine (okay)"
    },
    {
     "who": "A",
     "ig": "Anyị kwesịrị inyere ibe anyị aka",
     "en": "We should help one another"
    },
    {
     "who": "B",
     "ig": "Ekwenyere m",
     "en": "I agree"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Anyị nwere nzukọ echi\" mean?",
     "answer": "We have a meeting tomorrow",
     "options": [
      "We have a meeting tomorrow",
      "I am learning addition and subtraction",
      "Go straight ahead, then turn right"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Anyị nwere nzukọ echi\"?",
     "answer": "Ọ dị mma",
     "options": [
      "Ana m amụ mgbakọ na mwepụ",
      "Ihe mberede mere!",
      "Ọ dị mma"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Anyị kwesịrị inyere ibe anyị aka\"?",
     "answer": "Neighbour 1",
     "options": [
      "Neighbour 1",
      "Neighbour 2"
     ]
    }
   ],
   "flag": true
  }
 ],
 "career": [
  {
   "id": "dlg-career-1",
   "title": "Starting a business",
   "setting": "A friend asks about starting a business.",
   "roles": {
    "A": "Friend",
    "B": "Ada"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ị chọrọ ịmalite azụmahịa nke gị?",
     "en": "Do you want to start your own business?"
    },
    {
     "who": "B",
     "ig": "Ee. Ego dị mkpa",
     "en": "Yes. Money is important"
    },
    {
     "who": "A",
     "ig": "Ọ bụ onye ahịa ọma",
     "en": "She is a good trader"
    },
    {
     "who": "B",
     "ig": "Uru bụ ihe m chọrọ",
     "en": "Profit is what I want"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ị chọrọ ịmalite azụmahịa nke gị?\" mean?",
     "answer": "Do you want to start your own business?",
     "options": [
      "Our town is clean",
      "Do you want to start your own business?",
      "His business with Okey did not work out"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Ị chọrọ ịmalite azụmahịa nke gị?\"?",
     "answer": "Ee. Ego dị mkpa",
     "options": [
      "Ee. Ego dị mkpa",
      "Kedụ ihe Adaọra na-eme ụtụtụ niile?",
      "Ị ga-enyere m aka?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Ọ bụ onye ahịa ọma\"?",
     "answer": "Friend",
     "options": [
      "Friend",
      "Ada"
     ]
    }
   ],
   "flag": true
  }
 ],
 "relations": [
  {
   "id": "dlg-relations-1",
   "title": "Saying sorry",
   "setting": "A friend asks for forgiveness.",
   "roles": {
    "A": "Ada",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Biko, gbaghara m",
     "en": "Please forgive me"
    },
    {
     "who": "B",
     "ig": "M gbaghara gị",
     "en": "I forgive you"
    },
    {
     "who": "A",
     "ig": "Daalụ",
     "en": "Thank you"
    },
    {
     "who": "B",
     "ig": "Anyị bụ enyi ruo afọ iri",
     "en": "We have been friends for ten years"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Anyị bụ enyi ruo afọ iri\" mean?",
     "answer": "We have been friends for ten years",
     "options": [
      "He likes watching football",
      "We have been friends for ten years",
      "Marry the person who suits you"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Biko, gbaghara m\"?",
     "answer": "M gbaghara gị",
     "options": [
      "M gbaghara gị",
      "Ọ bụ nwanyị ahịa",
      "Azụmahịa ya na Okey adabaghị"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Daalụ\"?",
     "answer": "Ada",
     "options": [
      "Ada",
      "Friend"
     ]
    }
   ],
   "flag": true
  }
 ],
 "memories": [
  {
   "id": "dlg-memories-1",
   "title": "Childhood",
   "setting": "Two people remember being children.",
   "roles": {
    "A": "Ada",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Ị chetara ihe ọ bụla mgbe ị bụ nwata?",
     "en": "Do you remember anything from when you were a child?"
    },
    {
     "who": "B",
     "ig": "Ee, m chetara ya",
     "en": "Yes, I remember it"
    },
    {
     "who": "B",
     "ig": "Mgbe m bụ nwata, m na-anụkarị akụkọ ifo n'abalị",
     "en": "When I was a child, I often heard folktales at night"
    },
    {
     "who": "A",
     "ig": "Ọ dị mma",
     "en": "It's fine (okay)"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Mgbe m bụ nwata, m na-anụkarị akụkọ ifo n'abalị\" mean?",
     "answer": "When I was a child, I often heard folktales at night",
     "options": [
      "Three years ago, I went to Enugu",
      "The first time I went to school, I still remember it today",
      "When I was a child, I often heard folktales at night"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Ị chetara ihe ọ bụla mgbe ị bụ nwata?\"?",
     "answer": "Ee, m chetara ya",
     "options": [
      "Ee, m chetara ya",
      "Gịnị ka a na-akpọ 'water' n'Igbo?",
      "Onye ka m ga-eziga?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Ọ dị mma\"?",
     "answer": "Ada",
     "options": [
      "Ada",
      "Friend"
     ]
    }
   ],
   "flag": true
  }
 ],
 "hopes": [
  {
   "id": "dlg-hopes-1",
   "title": "What do you want to be?",
   "setting": "Two friends share their dreams.",
   "roles": {
    "A": "Ada",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Gịnị ka ị chọrọ ịbụ?",
     "en": "What do you want to be?"
    },
    {
     "who": "B",
     "ig": "Achọrọ m ịbụ dọkịta",
     "en": "I want to be a doctor"
    },
    {
     "who": "A",
     "ig": "Ọ bụ atụmatụ dị mma",
     "en": "That is a good plan"
    },
    {
     "who": "B",
     "ig": "Daalụ",
     "en": "Thank you"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Gịnị ka ị chọrọ ịbụ?\" mean?",
     "answer": "What do you want to be?",
     "options": [
      "What do you want to be?",
      "Next year, I will go to Enugu",
      "Please forgive me"
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Gịnị ka ị chọrọ ịbụ?\"?",
     "answer": "Achọrọ m ịbụ dọkịta",
     "options": [
      "Achọrọ m ịbụ dọkịta",
      "Gịnị ka ị chere?",
      "Kedụ ebe ị bi?"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Ọ bụ atụmatụ dị mma\"?",
     "answer": "Ada",
     "options": [
      "Ada",
      "Friend"
     ]
    }
   ],
   "flag": true
  }
 ],
 "grooming": [
  {
   "id": "dlg-grooming-1",
   "title": "At the barber",
   "setting": "A customer visits a barber.",
   "roles": {
    "A": "Customer",
    "B": "Friend"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Achọrọ m ịkpụ afụọnụ.",
     "en": "I want to shave."
    },
    {
     "who": "B",
     "ig": "Ọkpụisi ahụ bụ nwanne m nwoke.",
     "en": "That barber is my brother."
    },
    {
     "who": "A",
     "ig": "Daalụ",
     "en": "Thank you"
    },
    {
     "who": "B",
     "ig": "Nsogbu adịghị",
     "en": "No problem / You're welcome"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ọkpụisi ahụ bụ nwanne m nwoke.\" mean?",
     "answer": "That barber is my brother.",
     "options": [
      "I want to be a leader in my town",
      "That barber is my brother.",
      "The chairman gave me permission to follow you."
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Achọrọ m ịkpụ afụọnụ.\"?",
     "answer": "Ọkpụisi ahụ bụ nwanne m nwoke.",
     "options": [
      "Afọ atọ gara aga, m gara Enugu",
      "Ada ma ka e si eme ncha.",
      "Ọkpụisi ahụ bụ nwanne m nwoke."
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Daalụ\"?",
     "answer": "Customer",
     "options": [
      "Customer",
      "Friend"
     ]
    }
   ]
  }
 ],
 "myday6": [
  {
   "id": "dlg-myday6-1",
   "title": "Come and wash",
   "setting": "A parent gives morning instructions.",
   "roles": {
    "A": "Parent",
    "B": "Child"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Bịa saa ahụ.",
     "en": "Come and have a bath."
    },
    {
     "who": "B",
     "ig": "Ee",
     "en": "Yes"
    },
    {
     "who": "A",
     "ig": "Yiri akwa i yi ụnyaahụ.",
     "en": "Wear the clothes you wore yesterday."
    },
    {
     "who": "B",
     "ig": "Daalụ",
     "en": "Thank you"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Yiri akwa i yi ụnyaahụ.\" mean?",
     "answer": "Wear the clothes you wore yesterday.",
     "options": [
      "Nkọlịka is wearing waist beads on her waist.",
      "Wear the clothes you wore yesterday.",
      "I want to shave."
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Bịa saa ahụ.\"?",
     "answer": "Ee",
     "options": [
      "Emesịa, ị bịa.",
      "Adaọra mara mma.",
      "Ee"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Daalụ\"?",
     "answer": "Child",
     "options": [
      "Parent",
      "Child"
     ]
    }
   ]
  }
 ],
 "neighbours": [
  {
   "id": "dlg-neighbours-1",
   "title": "Living in peace",
   "setting": "Two people talk about neighbours.",
   "roles": {
    "A": "Elder",
    "B": "Young person"
   },
   "lines": [
    {
     "who": "A",
     "ig": "Gaa kelee agbatoobi gị",
     "en": "Go and greet your neighbour"
    },
    {
     "who": "B",
     "ig": "Ee",
     "en": "Yes"
    },
    {
     "who": "A",
     "ig": "Ihe anyị chọrọ bụ udo na ịdịnotu.",
     "en": "What we want is peace and unity."
    },
    {
     "who": "B",
     "ig": "Ekwenyere m",
     "en": "I agree"
    }
   ],
   "questions": [
    {
     "type": "meaning",
     "prompt": "What does \"Ihe anyị chọrọ bụ udo na ịdịnotu.\" mean?",
     "answer": "What we want is peace and unity.",
     "options": [
      "What we want is peace and unity.",
      "Ijeoma was tying a wrapper when I came.",
      "Wear the clothes you wore yesterday."
     ]
    },
    {
     "type": "next-line",
     "prompt": "What comes next after \"Gaa kelee agbatoobi gị\"?",
     "answer": "Ee",
     "options": [
      "Bịa saa ahụ.",
      "Achọrọ m ịkpụ afụọnụ.",
      "Ee"
     ]
    },
    {
     "type": "who",
     "prompt": "Who says \"Ekwenyere m\"?",
     "answer": "Young person",
     "options": [
      "Elder",
      "Young person"
     ]
    }
   ],
   "flag": true
  }
 ]
};
