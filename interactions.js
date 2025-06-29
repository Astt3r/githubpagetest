document.querySelectorAll('.tag').forEach(tag => {
  tag.addEventListener('click', () => {
    tag.classList.add('explode');
    setTimeout(() => tag.remove(), 400); // Remueve del DOM tras animar
  });
});
// --- Botón de caos ---
document.getElementById('chaosButton').addEventListener('click', () => {
  const cards = document.querySelectorAll('.tech-card');
  cards.forEach(card => {
    card.classList.add('fall');
    makeDraggable(card);
  });
});

// --- Draggable con mouse ---
function makeDraggable(element) {
  let offsetX, offsetY, isDragging = false;

  element.addEventListener('mousedown', e => {
    isDragging = true;
    element.style.transition = 'none';
    offsetX = e.clientX - element.getBoundingClientRect().left;
    offsetY = e.clientY - element.getBoundingClientRect().top;
  });

  document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    element.style.left = `${e.clientX - offsetX}px`;
    element.style.top = `${e.clientY - offsetY}px`;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    element.style.cursor = 'grab';
  });
}
