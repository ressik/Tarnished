// Tarnished offline shell. Incremented automatically when the packaged application changes.
const VERSION='6d69d4ad4183';
const PREFIX='tarnished-'+self.registration.scope+'-';
const CACHE=PREFIX+VERSION;
const HOME=new URL('./',self.registration.scope).href;
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);
 await cache.addAll(FILES.map(path=>new Request(new URL(path,self.registration.scope).href,{cache:'reload'})));
 await self.skipWaiting();
})());});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim();})());});
self.addEventListener('message',event=>{if(event.data?.type==='ACTIVATE_UPDATE')self.skipWaiting();});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);
 if(url.origin!==self.location.origin||!url.href.startsWith(self.registration.scope))return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  if(event.request.mode==='navigate'){
   try{
    const fresh=await fetch(new Request(event.request,{cache:'no-cache'}));
    if(fresh.ok)await cache.put(HOME,fresh.clone());
    return fresh;
   }catch(error){
    const home=await cache.match(HOME);
    if(home)return home;
    throw error;
   }
  }
  const hit=await cache.match(event.request);
  if(hit)return hit;
  return fetch(event.request);
 })());
});
