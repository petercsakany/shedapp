'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "287ee44f4958c037ff70a58604df5e16",
"assets/AssetManifest.bin.json": "911f0cb25a69f97c16dc99aff786b737",
"assets/AssetManifest.json": "6f005e541cc31e2bda0dbcac236ae568",
"assets/assets/images/1B.png": "afda5e3d2069adf5d63a50bfea3984f0",
"assets/assets/images/1J.png": "43338bc2742f3b0471b077f2304bd98d",
"assets/assets/images/2B.png": "275b271ac45b1747469dc96173ca4b98",
"assets/assets/images/2C.png": "74011fb9273c135eeb92ef582f86c549",
"assets/assets/images/2D.png": "c5d02f8b588ce0f0a986f69c42752c69",
"assets/assets/images/2H.png": "1b7dff5c10ff528a7cf67a2e8ad1a7df",
"assets/assets/images/2J.png": "e87690e10658a006740a9d3779f7be63",
"assets/assets/images/2S.png": "2610cb45f701fa2b741a3fd9e4d62268",
"assets/assets/images/3C.png": "5b7c1824c77540d2f740610cbf9c0668",
"assets/assets/images/3D.png": "7af6b3469456bf5138412798f4e89960",
"assets/assets/images/3H.png": "c763ccb2f7f2fc97e57325bfcf5564fa",
"assets/assets/images/3S.png": "7919c1aaaef5e5c3abe46d65d88c5039",
"assets/assets/images/4C.png": "dcbb64ff124d0455ab617e7da67aea37",
"assets/assets/images/4D.png": "d7b07c8351af8821e3966a1f12de3c8e",
"assets/assets/images/4H.png": "0c9c5bcec7ed55c8a8f147866d39e022",
"assets/assets/images/4S.png": "7760dea199c662a45ef8b9d0979b7455",
"assets/assets/images/5C.png": "f4e51eb8499c2350dee6f2299421cf0a",
"assets/assets/images/5D.png": "5c6f08c8bd8628d5abf2b5c444c21297",
"assets/assets/images/5H.png": "152cecacb6fdb04399c01010994767a8",
"assets/assets/images/5S.png": "62976ed6b114c3da51dae728332f2243",
"assets/assets/images/6C.png": "5c75d3012b84df610cdb386cce08d8e8",
"assets/assets/images/6D.png": "3a16c4d20c02a9ccbcdd5bdc186e292f",
"assets/assets/images/6H.png": "fe3f66ebe6f53756a15cb86277680173",
"assets/assets/images/6S.png": "c789022553dd3e5be711f581819c1d48",
"assets/assets/images/7C.png": "d0734fb2fe639ee836024e8fd9eb841f",
"assets/assets/images/7D.png": "d2a3038ac89aa4870f2706a43e0b834b",
"assets/assets/images/7H.png": "84e846d21ef5bc0b19cf30baaf9c8cd4",
"assets/assets/images/7S.png": "f7378e7c81fd1eece408a0c02f7a5057",
"assets/assets/images/8C.png": "d6cfe259c5b4c7481dea3f4a1dd50502",
"assets/assets/images/8D.png": "c4f85f49e54174d715bd5ec1f3ced0fb",
"assets/assets/images/8H.png": "90e644a4fe5eddc7cc1ebcbf7652b5d1",
"assets/assets/images/8S.png": "4be4528b4195dffda9654b44b48a363d",
"assets/assets/images/9C.png": "049f55ceed8300458f0392572e962124",
"assets/assets/images/9D.png": "b7962a6b74b7e3ac0b68185caf0c9b55",
"assets/assets/images/9H.png": "b7ea7891c2d5bc881c1f98c1c963b605",
"assets/assets/images/9S.png": "f648f1d76efb0df4a3be84e6be57979e",
"assets/assets/images/AC.png": "904d1e518730a1913a1e17fd6ce9d54c",
"assets/assets/images/AD.png": "df52b70eed99a74d54eba09aeff5bad0",
"assets/assets/images/AH.png": "d352afd373e0a4f6e7897c2b66888245",
"assets/assets/images/AS.png": "32d8f28b565d45ab2a779f1366e34733",
"assets/assets/images/JC.png": "341e59230d65b672e31db928227676c3",
"assets/assets/images/JD.png": "5488f830bdc7174c942ee1fcf942b810",
"assets/assets/images/JH.png": "834687a2025bc547632818da5bed9aee",
"assets/assets/images/JS.png": "004e5affe69b555d1c349033d8ae5a81",
"assets/assets/images/KC.png": "1fc4748e1281392e2eb9a981b871e5e8",
"assets/assets/images/KD.png": "535258659d0e5358e2a0e9de3aaed235",
"assets/assets/images/KH.png": "c75a364a6050d19b36a78eafb3fafa5e",
"assets/assets/images/KS.png": "b6cb7dc9a3ee22f98e5f17173b604af6",
"assets/assets/images/QC.png": "58b36efcab0d52f70e26aa4cac0e9162",
"assets/assets/images/QD.png": "60b81494ebd3aa85112be27d829b9df1",
"assets/assets/images/QH.png": "1aabbbe020be0ed6cd1cd12f9fa57c4d",
"assets/assets/images/QS.png": "1ea95e823ada270d7e21849a181e6e7f",
"assets/assets/images/TC.png": "c4c13ca4794da11d950795fbc8ca672b",
"assets/assets/images/TD.png": "40d892cb0a0116fa6e80b0abedf232dd",
"assets/assets/images/TH.png": "064e03d3cbfaa1e29cedb93d5711c078",
"assets/assets/images/TS.png": "65d039b11b4160ed087ec88a96bb9ea4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8d2a703337fe44de7abdec0a54ee72bb",
"assets/NOTICES": "8b362d8a50f4bfbe56e40f4819485758",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "3f2787bdbdb5450e7e5ae4ff04284d5a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2f184109595fb474fb029eafd33ee001",
"/": "2f184109595fb474fb029eafd33ee001",
"main.dart.js": "b7b9a5972d47d4eba1c00e17780fe140",
"manifest.json": "6b7871790e80b778986a8273ca31b6b2",
"version.json": "470cfaeb92207980b3907452546902d1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
