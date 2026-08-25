// Nome della memoria cache dell'app
const CACHE_NAME = 'sal-2026-v1';
const urlsToCache = ['index.html', 'manifest.json'];

// Evento di installazione: salva i file in locale sullo smartphone
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Evento di recupero: serve i file dalla cache se non c'è connessione internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});