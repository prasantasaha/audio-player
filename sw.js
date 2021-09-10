if ('undefined' === typeof window) {
    // eslint-disable-next-line no-undef
    importScripts(
        'https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js',
    );
    
    const workbox = this['workbox'];

    // Note: Ignore the error that Glitch raises about workbox being undefined.
    workbox.setConfig({
        debug: false,
    });

    // Demonstrates a custom cache name for a route.
    workbox.routing.registerRoute(
        new RegExp('.*\\.(?:png|jpg|jpeg|svg|gif|woff2)'),
        new workbox.strategies.CacheFirst({
            cacheName: 'asset-cache',
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 3,
                }),
            ],
        }),
    );
}