// Простейший service worker без кэширования для MVP
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Просто пропускаем все запросы в сеть напрямую
  return;
});