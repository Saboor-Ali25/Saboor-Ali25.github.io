// Highlight current section in the nav
const links = document.querySelectorAll('nav a');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });
document.querySelectorAll('main section').forEach(s => obs.observe(s));

// Mobile menu
const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
links.forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Copy email
document.getElementById('copyBtn').addEventListener('click', e => {
  const btn = e.currentTarget;
  navigator.clipboard.writeText('saboorali8a@icloud.com').then(() => {
    btn.textContent = 'Copied';
    setTimeout(() => btn.textContent = 'Copy email', 1500);
  }).catch(() => { btn.textContent = 'Copy failed'; });
});

// Accent color picker
const sw = document.querySelectorAll('.sw');
sw.forEach(b => b.addEventListener('click', () => {
  document.documentElement.dataset.accent = b.dataset.c;
  sw.forEach(x => x.setAttribute('aria-pressed', x === b));
}));
