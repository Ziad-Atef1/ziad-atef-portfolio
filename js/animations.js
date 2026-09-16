/* ==========================================
   ZIAD ATEF PORTFOLIO — SCROLL ANIMATIONS
   - IntersectionObserver for scroll-reveal (.reveal)
   - Staggered word-by-word text splitting for section titles
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Prepare Word-by-Word Spans on Heading Elements (.section-title)
  const sectionTitles = document.querySelectorAll('.section-title');

  sectionTitles.forEach(title => {
    // Preserve existing child HTML elements if any (like icons or accent spans)
    const rawText = title.innerText.trim();
    if (!rawText) return;

    const words = rawText.split(/\s+/);
    title.innerHTML = '';

    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.className = 'word-span';
      span.textContent = word + (index < words.length - 1 ? '\u00A0' : ''); // Non-breaking space
      span.style.transitionDelay = `${index * 0.08}s`;
      title.appendChild(span);
    });
  });

  // 2. IntersectionObserver for Reveal Elements
  const revealElements = document.querySelectorAll('.reveal, .section-title');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        // Unobserve once revealed to keep it clean
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
});
