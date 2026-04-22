const CACHE_NAME = 'hqa-portal-v1.4.6';
const assets = [
  './',
  './index.html',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://unpkg.com/lucide-react@0.263.1/dist/umd/lucide-react.min.js',
  'https://unpkg.com/xlsx/dist/xlsx.full.min.js',
  'https://unpkg.com/@babel/standalone/babel.min.js',
  'https://unpkg.com/dayjs@1.11.10/dayjs.min.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
  )));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
