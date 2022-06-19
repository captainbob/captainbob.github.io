// 首先引入 Workbox 框架
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js');

// 注册成功后要立即缓存的资源列表
workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "gga234ccc"
  },
  {
    "url": 'static/media/Clouds.png',
    'revision': 'ddccc1'
  },
  {
    "url": 'static/media/Clouds-night.png',
    'revision': 'ddccf1'
  },
  {
    "url": 'static/media/Rain.png',
    'revision': 'fdcddc1'
  },
  {
    "url": 'static/media/Rain-night.png',
    'revision': 'fdccc1'
  },
  {
    "url": 'static/media/Sun.png',
    'revision': 'edccc1'
  },
  {
    "url": 'static/media/Sun-night.png',
    'revision': 'edcdccc1'
  },
  {
    "url": 'static/media/Wind.png',
    'revision': 'hdccc1'
  },
  {
    "url": 'static/media/Wind-night.png',
    'revision': 'hddccc1'
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
