/* ─────────────────────────────────────────
   LIGHTBOX
   Opens when a .grid-item is clicked.
   Works with real <img> tags — just make
   sure each .grid-item contains an <img>.
───────────────────────────────────────── */
(function () {
  const lightbox  = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lb-img');
  const lbCaption = document.getElementById('lb-caption');
  const lbClose   = document.getElementById('lb-close');
  const lbPrev    = document.getElementById('lb-prev');
  const lbNext    = document.getElementById('lb-next');

  const items = Array.from(document.querySelectorAll('.grid-item'));
  let current = 0;

  function getSrc(item) {
    const img = item.querySelector('img');
    return img ? img.src : null;
  }

  function getLabel(item) {
    const label = item.querySelector('.grid-label');
    const num   = item.querySelector('.grid-num');
    return [label ? label.textContent : '', num ? num.textContent : ''].filter(Boolean).join(' — ');
  }

  function openAt(index) {
    const src = getSrc(items[index]);
    if (!src) return; // no image yet — skip
    current       = index;
    lbImg.src     = src;
    lbImg.alt     = getLabel(items[index]);
    lbCaption.textContent = getLabel(items[index]);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  function prev() {
    openAt((current - 1 + items.length) % items.length);
  }

  function next() {
    openAt((current + 1) % items.length);
  }

  items.forEach((item, i) => {
    item.addEventListener('click', () => openAt(i));
  });

  lbClose.addEventListener('click', close);
  lbPrev.addEventListener('click', prev);
  lbNext.addEventListener('click', next);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      close();
    if (e.key === 'ArrowLeft')   prev();
    if (e.key === 'ArrowRight')  next();
  });
})();
