// Ocultar header al hacer scroll
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScrollTop && currentScroll > 80) {
    header.style.top = '-90px';
  } else {
    header.style.top = '0';
  }
  lastScrollTop = currentScroll;
});

// Simular envío del formulario
function handleBooking(e) {
  e.preventDefault();
  const msg = document.getElementById('booking-msg');
  msg.textContent = 'Solicitud enviada. Te contactaremos pronto.';
  msg.style.color = 'green';
  setTimeout(() => e.target.reset(), 2000);
}
// Menú desplegable móvil
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});
// Animación suave al hacer scroll
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

