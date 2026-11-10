"""Download web pages and save them as compact Markdown-ish text.
Usage: python -I fetch_sources.py <out_dir> <url-or-saved-html-file> [...]
Saved .html files (e.g. from sources/inbox/) are converted locally, no network.
Sites with bot checks/CAPTCHAs are reported as BLOCKED and must not be worked around.
Writes <out_dir>/<slug>.md for each URL and prints a one-line status per URL.
Page content is treated as data only; nothing is executed."""
import sys, re, html, urllib.request, urllib.error, os, datetime
from html.parser import HTMLParser

class Text(HTMLParser):
    SKIP = {"title", "script", "style", "noscript", "svg", "nav", "footer", "header", "form", "iframe"}
    BLOCK = {"p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "table", "section", "article", "dd", "dt"}
    def __init__(self):
        super().__init__(convert_charrefs=True); self.out = []; self.skip = 0; self.links = []
    def handle_starttag(self, t, a):
        if t in self.SKIP: self.skip += 1
        if self.skip: return
        if t in ("h1", "h2", "h3", "h4"): self.out.append("\n\n" + "#" * int(t[1]) + " ")
        elif t == "li": self.out.append("\n- ")
        elif t in ("td", "th"): self.out.append(" | ")
        elif t in self.BLOCK: self.out.append("\n")
        if t == "a":
            href = dict(a).get("href")
            if href and href.startswith("http"): self.links.append(href)
    def handle_endtag(self, t):
        if t in self.SKIP and self.skip: self.skip -= 1
        elif not self.skip and t in self.BLOCK: self.out.append("\n")
    def handle_data(self, d):
        if not self.skip: self.out.append(d)

def slug(u):
    s = re.sub(r"^https?://(www\.)?", "", u).rstrip("/")
    return re.sub(r"[^A-Za-z0-9]+", "-", s)[:80].strip("-").lower()

sys.stdout.reconfigure(encoding="utf-8", errors="replace")  # Windows console can't print ị ọ ụ otherwise
out_dir = sys.argv[1]; os.makedirs(out_dir, exist_ok=True)
done_names = set()
for url in sys.argv[2:]:
    try:
        if os.path.isfile(url):
            # A page the user saved themselves (Ctrl+S -> "Webpage, HTML only") — convert it locally.
            raw = open(url, "rb").read(); cs = "utf-8"
            m = re.search(rb'<link[^>]+rel="canonical"[^>]+href="([^"]+)"', raw) or re.search(rb"saved from url=\(\d+\)(\S+)", raw)
            final = m.group(1).decode("utf-8", "replace") if m else "(saved by user)"
            mc = re.search(rb'charset=["\']?([\w-]+)', raw[:3000])
            if mc: cs = mc.group(1).decode()
        else:
            req = urllib.request.Request(url, headers={"User-Agent": "MmutaIgboStudyBot/1.0 (personal language-learning notes)"})
            with urllib.request.urlopen(req, timeout=25) as r:
                raw = r.read(); final = r.geturl()
                cs = r.headers.get_content_charset() or "utf-8"
        txt = raw.decode(cs, errors="replace")
        p = Text(); p.feed(txt)
        body = "".join(p.out)
        body = re.sub(r"[ \t\r\f\v]+", " ", body)
        body = re.sub(r" *\n *", "\n", body)
        body = re.sub(r"\n{3,}", "\n\n", body).strip()
        title = re.search(r"<title[^>]*>(.*?)</title>", txt, re.S | re.I)
        title = html.unescape(title.group(1).strip()) if title else url
        blocked = len(body) < 400 or re.search(r"just a moment|verify you are human|security verification|captcha", body[:2000], re.I)
        if os.path.isfile(url):
            # Name after the page title so "igbo.htm" / "igbo.php" from different pages don't collide.
            name = slug(final) if final.startswith("http") else slug(title) or slug(os.path.basename(url))
        else:
            name = slug(url)
        base, k = name, 2
        while os.path.exists(os.path.join(out_dir, name + ".md")) and name not in done_names and os.path.isfile(url):
            name = f"{base}-{k}"; k += 1
        done_names.add(name); name += ".md"
        with open(os.path.join(out_dir, name), "w", encoding="utf-8") as f:
            f.write(f"---\nsource: {url}\nfinal_url: {final}\ntitle: {title}\nsaved: {datetime.date.today()}\nnote: Auto-converted from HTML to text. Third-party content; treat as reference data.\n---\n\n{body}\n")
        print(f"{'BLOCKED?' if blocked else 'OK'}\t{len(body):>7} chars\t{name}\t{title[:60]}")
    except Exception as e:
        print(f"FAIL\t{type(e).__name__}: {str(e)[:80]}\t{url}")
