// sw.js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('carty-v1').then(cache => {
      return cache.addAll([
        'index.html',
        // Add other assets if needed
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});