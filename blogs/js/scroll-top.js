// Show/hide the scroll-to-top button and scroll smoothly to top on click.
// Place an element with id="scrollTopBtn" in the body (see snippet).
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  const THRESHOLD = 100; // px scrolled before button appears

  function update() {
    const y = window.scrollY || window.pageYOffset;
    if (y > THRESHOLD) btn.classList.add('visible');
    else btn.classList.remove('visible');
  }

  // Show/hide on scroll
  window.addEventListener('scroll', update, { passive: true });
  // Initial state
  update();

  // Scroll to top on click (smooth)
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});