// Tarnished offline shell. Incremented automatically when the packaged application changes.
const VERSION='ba589e777490';
const PREFIX='tarnished-'+self.registration.scope+'-';
const CACHE=PREFIX+VERSION;
const HOME=new URL('./',self.registration.scope).href;
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES.map(path=>new Request(new URL(path,self.registration.scope).href,{cache:'reload'})))));});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim();})());});
self.addEventListener('message',event=>{if(event.data?.type==='ACTIVATE_UPDATE')self.skipWaiting();});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);
 if(url.origin!==self.location.origin||!url.href.startsWith(self.registration.scope))return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  const hit=await cache.match(event.request,{ignoreSearch:event.request.mode==='navigate'});
  if(hit)return hit;
  try{return await fetch(event.request);}catch(error){if(event.request.mode==='navigate'){const home=await cache.match(HOME);if(home)return home;}throw error;}
 })());
});
