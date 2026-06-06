(function(){
  const wrap = document.querySelector('.navwrap');
  const btn = document.querySelector('.menuBtn');
  if(btn && wrap){
    btn.addEventListener('click', ()=> wrap.classList.toggle('open'));
  }
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = (a.getAttribute('href')||'').toLowerCase();
    if(href.endsWith(path)) a.classList.add('active');
  });

  // keyboard: g then h/c/p/o
  let g=false;
  window.addEventListener('keydown', (e)=>{
    if(e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    const k = e.key.toLowerCase();
    if(k==='g'){ g=true; setTimeout(()=>g=false, 900); return; }
    if(!g) return; g=false;
    const map={h:'index.html',c:'call-for-papers.html',p:'program.html',o:'organizers.html'};
    if(map[k]) location.href = map[k];
  });
})();
