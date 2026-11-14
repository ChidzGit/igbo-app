/* Mmụta Igbo service worker — offline support.
   Bump CACHE_VERSION when the app shell (css/js/icons) changes.
   index.html and data/curriculum.js are network-first, so daily curriculum
   updates arrive whenever the device is online without a version bump.
   audio/ clips are cache-first in a separate runtime cache that survives
   version bumps, so every clip played once also works offline.
   Google Fonts (fonts.googleapis.com CSS + fonts.gstatic.com files) are
   stale-while-revalidate in their own runtime cache, so Nunito / Noto Sans
   keep working offline after the first online visit. */
const CACHE_VERSION = "v10";
const AUDIO_CACHE = "mmuta-igbo-audio";
const FONT_CACHE = "mmuta-igbo-fonts";
const FONT_HOSTS = ["fonts.googleapis.com", "fonts.gstatic.com"];
const CACHE = "mmuta-igbo-" + CACHE_VERSION;
const SHELL = [
  "./",
  "index.html",
  "css/style.css",
  "js/app.js",
  "data/curriculum.js",
  "data/guides.js",
  "data/dialogues.js",
  "data/audio.js",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png"
];
const NETWORK_FIRST = ["data/curriculum.js", "data/guides.js", "data/dialogues.js", "data/audio.js", "index.html"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL.map((p) => new Request(p, { cache: "reload" })))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("mmuta-igbo-") && k !== CACHE && k !== AUDIO_CACHE && k !== FONT_CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function relPath(url) {
  const scope = new URL(self.registration.scope);
  return url.pathname.startsWith(scope.pathname) ? url.pathname.slice(scope.pathname.length) : url.pathname;
}

function isNetworkFirst(req, url) {
  if (req.mode === "navigate") return true;
  const rel = relPath(url);
  return rel === "" || NETWORK_FIRST.includes(rel);
}

// Audio: cache-first. Range requests (some browsers ask for partial content)
// are answered from the full cached file when we have it.
async function audioFirst(req) {
  const cache = await caches.open(AUDIO_CACHE);
  const key = new Request(new URL(req.url).pathname);
  let hit = await cache.match(key);
  if (!hit) {
    const res = await fetch(key);
    if (!res || !res.ok || res.status !== 200) return res;
    await cache.put(key, res.clone());
    hit = await cache.match(key);
  }
  const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.get("range") || "");
  if (!range) return hit;
  // Safari insists on 206 Partial Content for media, so slice the cached file.
  const buf = await hit.arrayBuffer();
  const start = range[1] ? +range[1] : Math.max(0, buf.byteLength - +range[2]);
  const end = range[1] && range[2] ? Math.min(+range[2], buf.byteLength - 1) : buf.byteLength - 1;
  return new Response(buf.slice(start, end + 1), {
    status: 206,
    headers: {
      "Content-Type": hit.headers.get("Content-Type") || "audio/mpeg",
      "Content-Range": `bytes ${start}-${end}/${buf.byteLength}`,
      "Content-Length": String(end - start + 1),
      "Accept-Ranges": "bytes"
    }
  });
}

// Fonts: answer from cache at once, refresh in the background. Opaque (no-cors)
// stylesheet responses are cached too; font files arrive as CORS responses.
async function fontSWR(e) {
  const cache = await caches.open(FONT_CACHE);
  const hit = await cache.match(e.request);
  const update = fetch(e.request).then((res) => {
    if (res && (res.ok || res.type === "opaque")) return cache.put(e.request, res.clone()).then(() => res);
    return res;
  }).catch(() => hit);
  if (hit) { e.waitUntil(update.catch(() => {})); return hit; }
  const res = await update;
  if (res) return res;
  return new Response("", { status: 504, statusText: "Font unavailable offline" });
}

async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  try {
    const res = await fetch(req, { cache: "no-cache" });
    if (res && res.ok) cache.put(req, res.clone());
    return res;
  } catch (err) {
    const hit = (await cache.match(req, { ignoreSearch: true })) ||
      (req.mode === "navigate" ? (await cache.match("index.html")) || (await cache.match("./")) : null);
    if (hit) return hit;
    throw err;
  }
}

async function cacheFirst(req) {
  const hit = await caches.match(req, { ignoreSearch: true });
  if (hit) return hit;
  const res = await fetch(req);
  if (res && res.ok && res.type === "basic") (await caches.open(CACHE)).put(req, res.clone());
  return res;
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (FONT_HOSTS.includes(url.hostname)) return e.respondWith(fontSWR(e));
  if (url.origin !== self.location.origin) return; // external links (e.g. Nkọwa okwu) go straight to the network
  if (relPath(url).startsWith("audio/")) return e.respondWith(audioFirst(req));
  e.respondWith(isNetworkFirst(req, url) ? networkFirst(req) : cacheFirst(req));
});
