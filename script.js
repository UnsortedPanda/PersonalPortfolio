/* ── NAV SCROLL ─────────────────────────────── */
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── REVEAL ON SCROLL ────────────────────────── */
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // Trigger skill bars inside a revealed element
      e.target.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => revealObserver.observe(el));

/* ── SKILL BAR TRIGGER ───────────────────────── */
document.querySelectorAll('.skill-card').forEach(card => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-bar').forEach(bar => {
          setTimeout(() => { bar.style.width = bar.dataset.width + '%'; }, 200);
        });
      }
    });
  }, { threshold: 0.3 });
  obs.observe(card);
});

/* ── ACCORDION ───────────────────────────────── */
document.querySelectorAll('[data-exp]').forEach(card => {
  card.addEventListener('click', () => {
    const isOpen = card.classList.contains('open');
    document.querySelectorAll('[data-exp]').forEach(c => c.classList.remove('open'));
    if (!isOpen) card.classList.add('open');
  });
});
// Open first card by default
const firstCard = document.querySelector('[data-exp]');
if (firstCard) firstCard.classList.add('open');

/* ── CONTACT FORM ────────────────────────────── */
function submitForm() {
  const fname  = document.getElementById('fname').value.trim();
  const femail = document.getElementById('femail').value.trim();
  const fmsg   = document.getElementById('fmsg').value.trim();

  if (!fname || !femail || !fmsg) {
    alert('Please fill in the required fields (Name, Email, Message).');
    return;
  }

  // Show success message
  const successEl = document.getElementById('formSuccess');
  successEl.style.display = 'block';

  // Clear fields
  document.getElementById('fname').value  = '';
  document.getElementById('femail').value = '';
  document.getElementById('fpos').value   = '';
  document.getElementById('fmsg').value   = '';

  // Hide success message after 5s
  setTimeout(() => { successEl.style.display = 'none'; }, 5000);
}
