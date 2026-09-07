
const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const glow=document.getElementById('mouseGlow');
addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(x=>io.observe(x));

const cio=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;
  const el=e.target,end=+el.dataset.count,s=el.dataset.suffix||'',st=performance.now(),dur=850;
  function tick(n){const p=Math.min(1,(n-st)/dur);el.textContent=Math.round(end*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(tick)}
  requestAnimationFrame(tick);cio.unobserve(el)
}),{threshold:.4});
document.querySelectorAll('[data-count]').forEach(x=>cio.observe(x));

document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('[data-tab]').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  document.getElementById('tab-'+b.dataset.tab)?.classList.add('active');
}));
