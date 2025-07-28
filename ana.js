// Animate fractals (optional interactive motif on click)
document.querySelectorAll('.motif-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('active');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('active');
  });
});
