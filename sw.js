const CACHE_NAME = 'ricettario-v2';
const ASSETS = [
  'index.html',
  'ricette.html',
  'manifest.json',
  'icon.png',
  'pagine-ricette/carbonara.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});