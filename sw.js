const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Colcactus"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"5c62dbc0069ed16844850cf796f07b5f","url":"./about/index.html"},{"revision":"d77230dc9d3329b31c4d15f3d5fab16b","url":"./admin/index.html"},{"revision":"3b6385d8f94b97731ce8a08d355a6621","url":"./authors/colcactus-studio/index.html"},{"revision":"3bbf1d059e633921d0a0baed8da154eb","url":"./authors/colcactus-studio/page/1/index.html"},{"revision":"0cc83582a25145a8d0b4c264c44d6de2","url":"./authors/coldwith/index.html"},{"revision":"30c3e6ce2138c56c5f136d772cd203b6","url":"./authors/coldwith/page/1/index.html"},{"revision":"6768440267635a4734de431006d6fe6f","url":"./authors/index.html"},{"revision":"8f3f1b8c73c41526d6ed420e280ec7c3","url":"./authors/luoshilv/index.html"},{"revision":"74e6360e461e14106275867c86d406e4","url":"./authors/luoshilv/page/1/index.html"},{"revision":"7a03ee0f063587cc3f08cbda031b8231","url":"./authors/page/1/index.html"},{"revision":"bd336d628e9005f9bb5811796a933a5c","url":"./authors/xiaofanjunm/index.html"},{"revision":"d09e4d278e42c6e717064c3b7e135b11","url":"./authors/xiaofanjunm/page/1/index.html"},{"revision":"e3c09ed80339be185413293b5b1117ed","url":"./css/prism.css"},{"revision":"44bec1c9103614119bda450f2f3bd9af","url":"./index.html"},{"revision":"2eeb205c936372c8b5331e7803132e26","url":"./js/collapseAuthors.js"},{"revision":"5ee1a42b554b4536c39d0b1bae4a0656","url":"./js/copyUrl.js"},{"revision":"2c28dcc00998ebddb57993a7f062abd4","url":"./js/initColors.js"},{"revision":"6d8d4339022acea6dbb45284394bdf7b","url":"./js/prism.js"},{"revision":"886deeb6ab8bee6e2adbc78b5bbd5098","url":"./js/progressBar.js"},{"revision":"3408cec093ecd498c79988eac5d8ffcd","url":"./js/toggleBorder.js"},{"revision":"f7cb20f816587efa9a51815a25aab14b","url":"./js/toggleColors.js"},{"revision":"1192efc91abe774dc9e9ef3c61f21ce9","url":"./js/toggleLayout.js"},{"revision":"d239895cc2cecafd4bb8bcc344054da4","url":"./js/toggleLogos.js"},{"revision":"20bf5d3806f5d4e07affcaf2cae23ee9","url":"./main.e4b8d.css"},{"revision":"9d449deb4f6b214ab31404dc4045b055","url":"./main.e4b8d.js"},{"revision":"c7cc9fa1312f4ed343eebb8d71b2af7a","url":"./manifest.json"},{"revision":"f11cd6d9eaf96a1b328601a7c3bf648f","url":"./page/1/index.html"},{"revision":"837bd5f3149a2a19612aeb2f28082ef3","url":"./post/index.html"},{"revision":"1fec3b3de2f49f4ba771144b40fba882","url":"./post/markdown-syntax/index.html"},{"revision":"ab98f0c5c56812a24e7abbbc92a611e2","url":"./post/page/1/index.html"},{"revision":"bc170ba8c49a5186b2393925f0a2181a","url":"./scss/global.min.fb4dd79813ef5075eb6e0a596ca103e09f51efc11a614d013d4d9049d60904b1.css"}]);

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// External Images
workbox.routing.registerRoute(
    /^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,
    new workbox.strategies.CacheFirst({
        cacheName: "external-images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();