// 首先引入 Workbox 框架
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js');

// 注册成功后要立即缓存的资源列表
workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "b331f6955"
  },
]);

// 缓存策略
workbox.routing.registerRoute(
  new RegExp('.*\.html'),
  workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
  new RegExp('.*\.(?:js|css)'),
  workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
  new RegExp('https://your\.cdn\.com/'),
  workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
  new RegExp('https://your\.img\.cdn\.com/'),
  workbox.strategies.cacheFirst({
    cacheName: 'example:img'
  })
);
