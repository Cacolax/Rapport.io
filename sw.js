// Rapport photo : cache hors ligne. Changer VERSION à chaque mise à jour de index.html.
const VERSION='9';
const CACHE='rapport-photo-'+VERSION;
const FILES=['./','./index.html','./manifest.webmanifest','./jspdf.umd.min.js','./pdf.min.js','./pdf.worker.min.js','./icon-180.png','./icon-192.png','./icon-512.png','./fonts/archivo-latin-500-normal.woff2','./fonts/archivo-latin-600-normal.woff2','./fonts/archivo-latin-700-normal.woff2','./fonts/source-sans-3-latin-400-normal.woff2','./fonts/source-sans-3-latin-600-normal.woff2','./fonts/ibm-plex-mono-latin-500-normal.woff2'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES.map(u=>new Request(u,{cache:'reload'})))))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('rapport-photo-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('message',e=>{if(e.data==='skip')self.skipWaiting()});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url);if(u.origin!==self.location.origin)return;
  e.respondWith(caches.open(CACHE).then(c=>c.match(r,{ignoreSearch:true}).then(hit=>hit||fetch(r).catch(()=>r.mode==='navigate'?c.match('./index.html'):Response.error()))));
});
