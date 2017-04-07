const CACHE_VERSION = 1;

const OFFLINE_CACHE_FILES = [
    '/css/style.css',
    '/offline/index.html',
];

const OFFLINE_PAGE = '/offline/index.html';

const CACHE_VERSIONS = {
    offline: 'offline-v' + CACHE_VERSION,
};

/**
 * installServiceWorker
 * @returns {Promise}
 */
function installServiceWorker() {
    console.log('installServiceWorker');
    return Promise.all(
        [
            caches.open(CACHE_VERSIONS.offline)
                .then(
                    (cache) => {
                        return cache.addAll(OFFLINE_CACHE_FILES);
                    }
                ),
        ]
    );
}

self.addEventListener(
    'install', event => {
        console.log('service worker install');
        event.waitUntil(installServiceWorker());
    }
);

// The activate handler takes care of cleaning up old caches.
self.addEventListener(
    'activate', event => {
        console.log('activate');
    }
);

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        return response;
      });
    }).catch(function() {
      return caches.match(OFFLINE_PAGE);
    })
  );
});
