const toast = document.getElementById('toast');
let toastTimer;
function notify(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2800)}

document.querySelectorAll('[data-play]').forEach(button=>button.addEventListener('click',event=>{event.preventDefault();notify('El juego todavía no está conectado a esta página.')}));
const menuButton=document.getElementById('menuButton');
const sideNav=document.getElementById('sideNav');
menuButton.addEventListener('click',()=>{const opened=sideNav.classList.toggle('mobile-open');menuButton.setAttribute('aria-expanded',String(opened))});
sideNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{sideNav.classList.remove('mobile-open');menuButton.setAttribute('aria-expanded','false');sideNav.querySelectorAll('a').forEach(item=>item.classList.remove('active'));link.classList.add('active')}));
const sections=[...document.querySelectorAll('.page-section')];
window.addEventListener('scroll',()=>{let current='inicio';for(const section of sections){if(window.scrollY>=section.offsetTop-180)current=section.id}sideNav.querySelectorAll('a').forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+current))},{passive:true});
