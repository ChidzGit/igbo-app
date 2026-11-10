# Sources folder

Everything used to build the curriculum lives here.

| Folder / file | What's in it |
|---|---|
| `research-notes.md` | Claude's notes: search findings, dictionary checks, what was blocked |
| `web-pages/` | Web pages saved as **plain text** (`.md`). About 10× smaller than PDF, so cheap for Claude to read |
| `inbox/` | **Drop pages YOU save here** (see below) |
| `converted/` | Text versions of your inbox pages (made automatically) |
| `../QUESTIONS-FOR-PARENT.md` | Words to check with your parent |
| `../RESOURCES.md` | Table of all free resources + daily log |

## How to give Claude a page it can't open (Omniglot etc.)

Some sites show a "verify you're human" page to automated tools. You can open them, so save the page yourself. No copy-paste needed:

1. Open the page in Chrome or Edge.
2. Press **Ctrl + S**.
3. In "Save as type", choose **Webpage, HTML Only** (not "Complete": that adds a folder of images).
4. Save it into **`sources/inbox/`** in this project folder.

That's it. The next morning update (or any Claude session you ask) converts it to compact text in `sources/converted/` and mines it for the curriculum. The original HTML moves to `inbox/done/`.

**Why HTML and not PDF?** Both work. Claude can read PDFs too. But a PDF is read page by page, partly as images, so it costs several times more tokens than the same page as text. Saved HTML converts cleanly to text, tables included. Use **PDF only** for things that are already PDFs (scanned books, worksheets): just drop the PDF in `inbox/` too.

### Pages worth saving for Claude (blocked to automated tools)
- [x] https://www.omniglot.com/language/phrases/igbo.php: phrases ⭐
- [x] https://www.omniglot.com/language/numbers/igbo.htm: numbers
- [ ] https://www.omniglot.com/writing/igbo.htm: alphabet & pronunciation ⭐
- [ ] https://www.omniglot.com/language/colours/igbo.htm: colours ⭐ (would settle the 6 flagged colour words)
- [ ] http://www.columbia.edu/itc/mealac/pritchett/00fwp/igbo_index.html: Columbia Igbo index
- [ ] https://polyglotclub.com/wiki/Language/Igbo/Vocabulary/Basic-Greetings
- [ ] https://polyglotclub.com/wiki/Language/Igbo/Vocabulary/Numbers
- [ ] https://elias.fas.harvard.edu/node/275: Harvard: greetings & responses ⭐
- [ ] https://elias.fas.harvard.edu/languages/igbo/beginning/8/igbo-family-system: Harvard: family ⭐
- [ ] https://elias.fas.harvard.edu/node/266: Harvard: days, weeks, months ⭐
- [ ] https://elias.fas.harvard.edu/languages/igbo/beginning: Harvard course contents (then save any unit that looks useful)
- [ ] https://polyglotclub.com/wiki/Language/Igbo/Grammar/Adjectives: adjectives (403 to automated tools)
- [ ] https://polyglotclub.com/wiki/Language/Igbo/Grammar/Adverbs: adverbs (403)
- [ ] https://polyglotclub.com/wiki/Language/Igbo/Grammar/Tenses: tenses (403)
- [ ] https://elias.fas.harvard.edu/languages/igbo/beginning/9/telling-time: Harvard unit 9, telling time ⭐ (site did not load)
- [ ] https://elias.fas.harvard.edu/languages/igbo/beginning/15/making-plans-future: Harvard unit 15, future ⭐
- [ ] https://elias.unix.fas.harvard.edu/index.php/node/261: Harvard unit 16, professions ⭐
- [ ] https://elias.fas.harvard.edu/index.php/languages/Igbo/Beginning/20/buying-and-selling: Harvard unit 20 (and unit 21, directions)
- [ ] https://elias.fas.harvard.edu/index.php/languages/igbo/beginning/17/my-house: Harvard unit 17, my house
- [ ] https://www.brainbound.blog/igbo-greetings-guide: greetings and respect for elders ⭐ (403 to automated tools; for the Custom & Respect unit)

⭐ = most useful

**Tip:** give each saved page a clear name (e.g. `omniglot-phrases.html`). Saving the same page more than once is harmless.
