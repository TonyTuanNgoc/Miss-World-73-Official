/* ============================================================
   INTERVIEW PREP — Tab switching + accordion
============================================================ */

// ── Tab switching ─────────────────────────────────────────
const tabs = document.querySelectorAll('.prep-tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    const content = document.getElementById('tab-' + target);
    if (content) {
      content.classList.add('active');

      // Re-trigger reveal animations for newly visible content
      content.querySelectorAll('.reveal:not(.visible)').forEach((el, i) => {
        el.dataset.delay = i * 90;
        setTimeout(() => el.classList.add('visible'), i * 90);
      });
    }

    // Smooth scroll to top of page content (below header)
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) {
      const targetY = pageHeader.offsetTop + pageHeader.offsetHeight;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  });
});

// ── Hash-based tab activation on load ────────────────────
const hash = window.location.hash.replace('#', '');
if (hash) {
  const hashTab = document.querySelector(`.prep-tab[data-tab="${hash}"]`);
  if (hashTab) hashTab.click();
}
