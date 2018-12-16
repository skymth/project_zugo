importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.06413b2c9af8058e3524.js",
    "revision": "2ab9bda0e944af0f845da7e83542d12d"
  },
  {
    "url": "/_nuxt/layouts/default.b23271adebb3a7f73fa1.js",
    "revision": "5b9a9930794ba6a7fc4dba774dce8e77"
  },
  {
    "url": "/_nuxt/manifest.d75b2a7ed067f7c00329.js",
    "revision": "8047afe635bd0263db3b87a7bcbdf87e"
  },
  {
    "url": "/_nuxt/pages/index.80b20d57ec535540f68c.js",
    "revision": "a12fda34c1a29b5a328ac001fdeca80d"
  },
  {
    "url": "/_nuxt/vendor.b272274c7c98917358d3.js",
    "revision": "8e6c670b51382e548a57db91d36513ba"
  }
], {
  "cacheId": "zugo",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





