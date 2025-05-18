
const cacheName = 'seppo-cache-v1';
const filesToCache = [
  '/seppogen/',
  '/seppogen/index.html',
  '/seppogen/manifest.json',
  '/seppogen/icon-192.png',
  '/seppogen/icon-512.png',
  '/seppogen/icon-light-192.png',
  '/seppogen/icon-light-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
