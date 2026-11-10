# Research brief for Section 1 gap agents (shared)

Project: C:\Users\chidu\OneDrive\Claude Work\Igbo App ("Mmụta Igbo", Igbo-learning app). Read CURRICULUM-PLAN.md (Section 1 table) for context. Do NOT edit data/curriculum.js or any app file — research only.

## Sources (free only)
1. Local saved pages first (cheap): sources/web-pages/*.md and sources/converted/*.md (Omniglot useful phrases, Wikivoyage Igbo phrasebook, igboguide.org conversation, UCLA 1981 conversation, ilanguages phrases, igbofocus, ilc.igbonet). Use grep.
2. WebSearch / WebFetch for more free pages (no paid content). Save a useful page as text with: `python -I tools/fetch_sources.py sources/web-pages <url>` (run from the project folder).
3. Verify every word on Nkọwa okwu: https://nkowaokwu.com/search?word=<word> . It is a JS app: if WebFetch returns nothing useful, use the built-in browser (mcp__Claude_Browser__*; load via ToolSearch "select:mcp__Claude_Browser__tabs_create,mcp__Claude_Browser__navigate,mcp__Claude_Browser__get_page_text,mcp__Claude_Browser__tabs_close"). OTHER AGENTS SHARE THE BROWSER: call tabs_create first and pass YOUR tabId on every call; close your tab at the end. No screenshots (use get_page_text).
Rules: never bypass bot checks/CAPTCHAs or spoof user agents (if blocked, list the URL under "Pages for the user to save"); don't sign in, accept or download anything; decline cookie banners.

## Igbo spelling rules
Standard Igbo (Ọnwụ orthography) with dots: ị ọ ụ ṅ. Tone marks optional; include them only if a source gives them. Note dialect differences (e.g. Central vs Owerri/Onitsha) in Notes.

## Output
Write sources/research/<your-file>.md with:
1. **Items** table: `ig | en | type (word/phrase/sentence) | sources (short ids + URL) | Nkọwa okwu check (✅ exact / ⚠ variant: … / ❌ not found / – not checked) | notes (dialect, literal meaning, usage)`. Aim for 25–40 items covering the topic thoroughly: core nouns, key verbs, the 8–12 most useful phrases, and 6–10 natural multi-word example sentences / mini-dialogue lines.
2. **Mini-dialogue**: a short realistic exchange (4–8 lines) using the items, with sources.
3. **Culture notes**: 2–5 bullets a learner should know (etiquette, what's normal in Igboland).
4. **Doubts for the parent**: specific questions where sources disagree or nothing confirmed it.
5. **Sources used** list.
Mark anything you could not confirm. Never invent: if unsure, say so.
Reply with only the file path and ≤5 lines (item count, how many ✅ on Nkọwa okwu, main doubts).
