// Service Worker for AI@Werk Simulator
const CACHE_NAME = 'ai-werk-simulator-v1.0.0';
const STATIC_CACHE_NAME = 'ai-werk-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'ai-werk-dynamic-v1.0.0';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js', 
  '/manifest.json',
  '/logo.png',
  '/avatar.png'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached');
        return self.skipWaiting();
      })
      .catch(err => {
        console.error('Service Worker: Error caching static assets:', err);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => {
              // Remove old caches
              return cacheName !== STATIC_CACHE_NAME && 
                     cacheName !== DYNAMIC_CACHE_NAME;
            })
            .map(cacheName => {
              console.log('Service Worker: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);
  
  // Handle same-origin requests
  if (requestUrl.origin === location.origin) {
    
    // Handle navigation requests
    if (event.request.mode === 'navigate') {
      event.respondWith(
        caches.open(STATIC_CACHE_NAME)
          .then(cache => cache.match('/index.html'))
          .then(response => response || fetch(event.request))
      );
      return;
    }
    
    // Handle static assets
    if (STATIC_ASSETS.includes(requestUrl.pathname)) {
      event.respondWith(
        caches.open(STATIC_CACHE_NAME)
          .then(cache => cache.match(event.request))
          .then(response => {
            if (response) {
              return response;
            }
            
            // If not in cache, fetch and cache
            return fetch(event.request)
              .then(fetchResponse => {
                if (fetchResponse.ok) {
                  const responseClone = fetchResponse.clone();
                  cache.put(event.request, responseClone);
                }
                return fetchResponse;
              });
          })
      );
      return;
    }
  }
  
  // Handle external API requests (like the chatbot n8n endpoint)
  if (requestUrl.origin !== location.origin) {
    event.respondWith(
      caches.open(DYNAMIC_CACHE_NAME)
        .then(cache => {
          return fetch(event.request)
            .then(response => {
              // Cache successful responses
              if (response.ok && event.request.method === 'GET') {
                cache.put(event.request, response.clone());
              }
              return response;
            })
            .catch(() => {
              // Return cached version if available
              return cache.match(event.request);
            });
        })
    );
    return;
  }
  
  // Default: try network first, then cache
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache successful GET requests
        if (response.ok && event.request.method === 'GET') {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE_NAME)
            .then(cache => cache.put(event.request, responseClone));
        }
        return response;
      })
      .catch(() => {
        // Try to serve from cache
        return caches.match(event.request);
      })
  );
});

// Background sync for training progress
self.addEventListener('sync', event => {
  console.log('Service Worker: Background sync triggered');
  
  if (event.tag === 'ai-training-progress') {
    event.waitUntil(
      syncTrainingProgress()
    );
  }
});

// Function to sync training progress when online
async function syncTrainingProgress() {
  try {
    const storedProgress = localStorage.getItem('aiTrainingProgress');
    if (storedProgress) {
      console.log('Service Worker: Training progress found, syncing...');
      // In a real app, you would send this to your backend
      // For demo purposes, we just log it
      console.log('Training Progress:', JSON.parse(storedProgress));
    }
  } catch (error) {
    console.error('Service Worker: Error syncing training progress:', error);
  }
}

// Push notification handling (for future features)
self.addEventListener('push', event => {
  console.log('Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'AI@Werk Simulator update beschikbaar',
    icon: '/logo.png',
    badge: '/logo.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 'ai-werk-notification'
    },
    actions: [
      {
        action: 'open-app',
        title: 'Open App',
        icon: '/logo.png'
      },
      {
        action: 'close',
        title: 'Sluiten'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('AI@Werk Simulator', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  console.log('Service Worker: Notification clicked');
  
  event.notification.close();
  
  if (event.action === 'open-app') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});