"use strict";var precacheConfig=[["/site/index.html","72aeb0b562a6c557478309d429e33895"],["/site/static/css/main.b0fa93a4.css","4dfbee3a03ea5c2ad0d9a7bbea62dc14"],["/site/static/js/main.5c930066.js","5a39698a698740006233c8373dc5a0af"],["/site/static/media/Caraters_SS.c56cd984.png","c56cd9843c482add508c772bc80faa42"],["/site/static/media/CloudSelect_SS.84d74d03.png","84d74d039d75f0b073be74823b18b30f"],["/site/static/media/Couturissimo_SS.ac883782.png","ac883782c5fa616c5906ccd2ca5a0c4d"],["/site/static/media/DoctorAnywhere_SS.cb243b69.png","cb243b692b8e5bff814a30b24757aa57"],["/site/static/media/Insight_SS.96d03440.png","96d03440a9e45ea21f38cf75ce5ced54"],["/site/static/media/Oaks_SS.55e9c63c.png","55e9c63c701585636f050b1c05d7fd94"],["/site/static/media/Olympus_SS.07672e0d.png","07672e0da9603dace32cc6dcf27adb8d"],["/site/static/media/Shoptiq_SS.de2981d8.png","de2981d8380187a28380c6256c34acc1"],["/site/static/media/Sinco_SS.f1d69040.png","f1d690404ad8ce8afd25d517844c2781"],["/site/static/media/SmileSmith_SS.395b4031.png","395b4031aa766b9551c5725397108cbb"],["/site/static/media/uParcel_SS.cf2f3469.png","cf2f34698cef4a37cd47e773a89d596b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/site/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});