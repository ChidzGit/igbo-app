# Mmụta Igbo 🦅

A Duolingo-style app for learning Igbo every day, built only from free resources.

## How to open it

**On your phone (or any device): https://chidzgit.github.io/igbo-app/**: open it in Safari (iPhone) or Chrome (Android) and choose *Add to Home Screen* / *Install app*. `localhost` links only work on the PC itself.

**On this PC (offline copy):** **Easiest:** double-click `Start Igbo App.bat`. It starts a tiny local server and opens the app in your browser.

(Or run `python -m http.server 8765` in this folder and go to http://localhost:8765.)

Progress is saved in your browser. Use **More → Export progress** to back it up or move it to another device.

## What's inside

- **Learn**: 11 sections (Alphabet, Greetings, Introductions, Numbers, Family, Food, Body, Colours, Time & Days, Action Words, Everyday Phrases), each a path of short lessons. The first lesson of every section is open; the rest unlock in order.
- **Exercises**: new-word cards, multiple choice both ways, tap-the-pairs, type it in Igbo (with ị ọ ụ ṅ buttons), build-the-sentence, and **speaking** 🎤. Mistakes come back at the end of the lesson.
- **Speaking**: record yourself saying the phrase and play it back. If your browser can recognise Igbo speech it scores you automatically; otherwise compare with the native speaker (🔊, played in the app) and grade yourself. Turn it off under More → Speaking, or tap "Can't speak now". Use Chrome or Edge and allow the microphone.
- **Daily test**: 10 questions from words you've learned, chosen by spaced repetition (weak and due words first). One score per day, with a history chart.
- **Streak, XP and daily goal**, like Duolingo.
- **Letters tab**: the alphabet lives in its own tab (vowels, consonants, double letters). Tap a letter to hear it, or practise each group. It is not part of the Learn path, so Section 1 starts with Greetings.
- **Native-speaker audio** 🔊: many words play a real recording right in the app (from [Lingua Libre](https://lingualibre.org) on Wikimedia Commons and the [Nkọwa okwu / IgboAPI dataset](https://huggingface.co/datasets/nkowaokwu/ibo-dict), CC BY 4.0). New words and speaking exercises play it automatically (turn off under More → Sound). Words without a clip link to Nkọwa okwu instead. Played clips are kept for offline use. Family recordings can be dropped into `audio/parent/` (see the README there). Credits: More → Audio credits.
- **Words**: every word, with a strength meter, search, and a 🔊 button.
- **⚑ flags**: words still waiting for a native-speaker check (see `QUESTIONS-FOR-PARENT.md`).

## Files

| File | Purpose |
|---|---|
| `data/curriculum.js` | **All lesson content.** The morning routine edits this. |
| `QUESTIONS-FOR-PARENT.md` | Uncertain words: fill in the answers with your parent. |
| `RESOURCES.md` | Free sources found + daily research log. |
| `sources/` | Every source used: saved pages as text, research notes, and an **inbox** for pages you save yourself (see `sources/README.md`). |
| `tools/fetch_sources.py` | Turns web pages / saved HTML into compact text. |
| `tools/fetch_audio.py` | Matches curriculum words to Lingua Libre recordings and downloads them to `audio/` + `data/audio.js`. Re-run (`python -I tools/fetch_audio.py`) after adding words. Merge-only: keeps clips from other sources. |
| `tools/fetch_audio_igboapi.py` | Fills remaining gaps from the Nkọwa okwu / IgboAPI Hugging Face dataset (gated; `hf auth login` once). Run after `fetch_audio.py`. Merge-only. |
| `tools/add_parent_audio.py` | Adds family recordings from `audio/parent/` (see the README there) to `data/audio.js`; they always win over other clips. Files pushed to GitHub are public. |
| `audio/`, `data/audio.js` | Native-speaker clips and their credits (generated). |
| `index.html`, `css/`, `js/` | The app itself. |

## Morning update routine

A scheduled task (**"Igbo curriculum morning update"**) runs every morning at 7:00 from 11 to 20 Nov 2026. Each run:
1. converts any pages you dropped in `sources/inbox/`
2. searches for new free Igbo resources and logs them in `RESOURCES.md`
3. applies any answers you've written in `QUESTIONS-FOR-PARENT.md`
4. adds or improves lessons in `data/curriculum.js` and bumps the version
5. adds any new uncertain items to `QUESTIONS-FOR-PARENT.md`

It only runs while the Claude desktop app is open. If the app is closed at 7:00, it runs the next time you open it.

Each run is a **separate, fresh session**. It doesn't add to this chat's context. Find runs under **Scheduled** in the sidebar.

## App fixes (13 Nov 2026)

Answer checking now accepts every item with the same English meaning, lessons are capped at about 15 exercises, word banks only for 3–8 word sentences (lower-case tiles), the results screen lists "Words to review" with a "Practise these" mini-lesson, and the Letters practise quiz is audio-first. Service worker cache is `v8`.

## Path, Guidebook and story nodes
Each unit shows a banner with a Guidebook button (`#guide-<unit>`; data in `data/guides.js`, optional) and a path of lessons, an optional story (`data/dialogues.js`, optional), optional Practice nodes and an optional Unit Review. Only lessons unlock the next lesson. Details: `docs/STRUCTURE-SPEC.md` ("Implemented (D, E, G, H, I)").
