const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu-btn');

menu?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

// Hero + other animated elements
document.querySelectorAll(
  '.reveal, .service-card, .project-card, .process > div, .stats > div, .contact-box'
).forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

document.querySelectorAll('a[href="#"]').forEach(a => {
  a.addEventListener('click', e => e.preventDefault());
});
