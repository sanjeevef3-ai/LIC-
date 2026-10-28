const CACHE_NAME = 'lic-agent-offline-v14.0';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './css/mobile_fix.css',
  './manifest.json',
  './data/lic_database.js',
  './data/app_version.json',
  './data/icon-192.png',
  './js/chart.umd.min.js',
  './js/lic_plans.js',
  './js/app.js',
  './js/dashboard_overview.js',
  './js/leader_hub.js',
  './js/direct_payment_gateway.js',
  './js/nvidia_gpu_matrix.js',
  './js/v10_sovereign_engine.js',
  './js/v12_genesis_engine.js',
  './js/ps_enterprise_suite.js',
  './js/pentagon_ai_sentinel.js'
];

// 1. INSTALL EVENT - Pre-cache everything into phone storage
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('📱 [PWA Offline Engine] Pre-caching all 706 policies & assets into phone storage...');
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('Some non-critical assets skipped caching:', err);
      });
    })
  );
});

// 2. ACTIVATE EVENT - Clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('Cleaning old offline cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. FETCH EVENT - Offline First / Cache First Strategy
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // If found in phone local storage, return it immediately (0ms delay, PC OFF proof)
      if (cachedResponse) {
        fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse));
          }
        }).catch(() => {/* PC is off, silently ignore */});

        return cachedResponse;
      }

      // If not in cache, fetch from network and store in cache
      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // PC is completely OFF and request not cached: Return main offline index
        if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
