/* Mmụta Igbo service worker — offline support.
   Bump CACHE_VERSION when the app shell (css/js/icons) changes.
   index.html and data/curriculum.js are network-first, so daily curriculum
   updates arrive whenever the device is online without a version bump. */
const CACHE_VERSION = "v1";
const CACHE = "mmuta-igbo-" + CACHE_VERSION;
const SHELL = [
  "./",
  "index.html",
  "css/style.css",
  "js/app.js",
  "data/curriculum.js",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png"
];
const NETWORK_FIRST = ["data/curriculum.js", "index.html"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL.map((p) => new Request(p, { cache: "reload" })))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("mmuta-igbo-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function isNetworkFirst(req, url) {
  if (req.mode === "navigate") return true;
  const scope = new URL(self.registration.scope);
  const rel = url.pathname.startsWith(scope.pathname) ? url.pathname.slice(scope.pathname.length) : url.pathname;
  return rel === "" || NETWORK_FIRST.includes(rel);
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
  if (url.origin !== self.location.origin) return; // external links (e.g. Nkọwa okwu) go straight to the network
  e.respondWith(isNetworkFirst(req, url) ? networkFirst(req) : cacheFirst(req));
});
