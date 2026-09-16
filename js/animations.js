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

  // 3. Dynamic Subtitle Typing Animation in Hero
  const typedSpan = document.getElementById('hero-typed-text');
  if (typedSpan) {
    const roles = [
      'Data Science & Machine Learning Engineer',
      'Computer Vision Specialist (YOLOv8)',
      'Data Automation & Pipeline Engineer',
      'CS & AI Student at Assiut National University'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        typedSpan.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typedSpan.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 30 : 60;

      if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2200; // Pause at full word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 400; // Pause before typing next
      }

      setTimeout(typeEffect, typeSpeed);
    }

    typeEffect();
  }

  // 4. 3D Interactive Card Tilt Effect on Hover
  const tiltCards = document.querySelectorAll('.interactive-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6; // max 6deg tilt
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    });
  });

  // 5. Skill Bar Fill Trigger on Intersection
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const targetWidth = fill.getAttribute('data-width') || '90%';
        fill.style.width = targetWidth;
      }
    });
  }, { threshold: 0.2 });

  skillBars.forEach(bar => skillObserver.observe(bar));
});
