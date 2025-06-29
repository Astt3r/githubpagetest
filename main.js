/* ===== Tema claro / oscuro ===== */
const toggle = document.getElementById('themeToggle');
const root   = document.body;

/* cargar preferencia */
if (localStorage.theme === 'light') {
  root.classList.add('light');
  toggle.checked = true;
}
/* cambiar tema */
toggle.addEventListener('change', () => {
  const light = toggle.checked;
  root.classList.toggle('light', light);
  localStorage.theme = light ? 'light' : 'dark';
});

/* ===== UTILIDAD: habilita navegación flechas si hay +2 tarjetas ===== */
function enableArrowNavigation(container) {
  const track = container.querySelector('.carousel');
  if (!track) return;
  const items = track.children.length;
  const prev = container.querySelector('.nav-prev');
  const next = container.querySelector('.nav-next');
  const SCROLL = 320;

  if (items <= 2) {
    if (prev) prev.style.display = 'none';
    if (next) next.style.display = 'none';
    return;
  }

  if (prev) {
    prev.style.display = 'flex';
    prev.addEventListener('click', () => {
      track.scrollBy({ left: -SCROLL, behavior: 'smooth' });
    });
  }

  if (next) {
    next.style.display = 'flex';
    next.addEventListener('click', () => {
      track.scrollBy({ left: SCROLL, behavior: 'smooth' });
    });
  }
}


/* ===== MOBILE MENU ===== */
document.addEventListener('DOMContentLoaded', () => {
  const btn   = document.getElementById('menuToggle');
  const panel = document.getElementById('mobileNav');
  const themeCheckbox = document.getElementById('mobileTheme');

  if (!btn || !panel) return;

  // Sincroniza estado del tema con el switch del menú
  themeCheckbox.checked = toggle.checked;
  themeCheckbox.addEventListener('change', () => toggle.click());

  btn.addEventListener('click', () => {
    panel.classList.toggle('open');
  });

  // Cierra menú al seguir un enlace
  panel.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => panel.classList.remove('open'));
  });
});


/* ===== EJECUCIÓN SOBRE TODOS LOS CAROUSELES EXISTENTES ===== */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel-container').forEach(enableArrowNavigation);
});
