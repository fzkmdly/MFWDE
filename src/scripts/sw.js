import {precacheAndRoute} from 'workbox-precaching';
import cacheHelper from './utils/cache-helper';

precacheAndRoute(self.__WB_MANIFEST);

const assetsToCache = [
  './',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');
  event.waitUntill(cacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');
  event.waitUntill(cacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(cacheHelper.revalidateCache(event.request));
});
