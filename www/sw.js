importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "ads/ad.html",
    "revision": "408aed0261024e1d5ff2c8a6b0458d2e"
  },
  {
    "url": "build/app.js",
    "revision": "39c26bcaaa8ea200dfa2ac92e156e432"
  },
  {
    "url": "build/app.registry.json",
    "revision": "c0f236e7cf26e8e73f3040539418a2be"
  },
  {
    "url": "build/app\\3t1gedldn6t4.css",
    "revision": "16753566796c394451c57bd642cbeadf"
  },
  {
    "url": "build/app\\app.ehypaqtbz6um.ce.js",
    "revision": "066df9c7280ee9f07bc272b17db6ce31"
  },
  {
    "url": "build/app\\app.zmqmcdvksoyy.js",
    "revision": "24696c82e4e300dca7965f904c5213cc"
  },
  {
    "url": "build/app\\dsrzjekmpvju.js",
    "revision": "88401818800bc34cfcaa2f27553cefed"
  },
  {
    "url": "build/app\\ex7hcmgtcbiy.js",
    "revision": "a41291ba87df5e5257acf9b9e016fa44"
  },
  {
    "url": "build/app\\oyimd1xcquqw.css",
    "revision": "80c19ceab7e3e655f3fff65c32834700"
  },
  {
    "url": "build/app\\qopyj9ai3cuh.css",
    "revision": "f8be421ca5f8202aa3443735ff01e2de"
  },
  {
    "url": "build/app\\t3i6afkoo90s.js",
    "revision": "95d6132216909cbd81389b0f8a096a79"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "firebase-messaging-sw.js",
    "revision": "5bde178351ddd4de96ff915c113a23f3"
  },
  {
    "url": "index.html",
    "revision": "611c7511d7ac59fa8d4a3f5a7822328a"
  },
  {
    "url": "manifest.json",
    "revision": "7affde00c804e8fc7fc259b1b79b7499"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
