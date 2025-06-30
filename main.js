/* ===== TEMA CLARO / OSCURO CON ÍCONO FLOTANTE ===== */
document.addEventListener('DOMContentLoaded', () => {
  const themeIcon = document.getElementById('themeToggleIcon');
  const bubble = document.getElementById('themeBubble');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  const body = document.body;

  // Aplicar tema guardado o sistema
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    body.classList.remove('light');
    themeIcon.textContent = '☀️';
  } else {
    body.classList.add('light');
    themeIcon.textContent = '🌙';
  }

  // Mostrar bubble si no se ha mostrado antes
  if (!localStorage.getItem('theme_hint_shown') && bubble) {
    setTimeout(() => {
      bubble.classList.add('visible');
      setTimeout(() => bubble.classList.remove('visible'), 6000);
    }, 1500);
    localStorage.setItem('theme_hint_shown', 'true');
  }

  // Cambiar tema al tocar el ícono
  themeIcon.addEventListener('click', () => {
    const isLight = body.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeIcon.textContent = isLight ? '🌙' : '☀️';

    // Si el bubble está activo o fue mostrado, actualizar texto y mostrar nuevamente
    if (bubble) {
      bubble.innerHTML = 'Puedes alternar entre temas al tocar';
      bubble.classList.add('visible');
      setTimeout(() => bubble.classList.remove('visible'), 4000);
    }
  });
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

/* ===== MENÚ MÓVIL ===== */
document.addEventListener('DOMContentLoaded', () => {
  const btn   = document.getElementById('menuToggle');
  const panel = document.getElementById('mobileNav');

  if (!btn || !panel) return;

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
