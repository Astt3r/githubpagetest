/* ===== Tema claro / oscuro ===== */
const toggle = document.getElementById('themeToggle');
const root   = document.body;

/* cargar preferencia */
if(localStorage.theme === 'light'){
  root.classList.add('light');
  toggle.checked = true;
}
/* cambiar tema */
toggle.addEventListener('change', ()=>{
  const light = toggle.checked;
  root.classList.toggle('light', light);
  localStorage.theme = light ? 'light' : 'dark';
});

