self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('nona-cache-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './styles.css',
        './script.js',
        './icons/icon-192x192-calming-nona.png',
        './icons/icon-512x512-calming-nona.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
