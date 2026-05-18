/* ============================================================
   Interactive Poster · hover-lens + click-to-read
   ============================================================ */
(function () {
  'use strict';

  const DATA = window.POSTER_DATA;
  if (!DATA) return;

  // Build a flat ordered list of all readable sections (skip image-only items
  // in nav, but they're still clickable as hotspots)
  const orderedSections = [];
  for (const pageKey of ['p1', 'p2']) {
    DATA[pageKey].sections.forEach((s) => {
      orderedSections.push({ ...s, page: pageKey });
    });
  }

  // ============================================================
  // 1. Build hotspots inside each .hotspots container
  // ============================================================
  document.querySelectorAll('.poster-wrap').forEach((wrap) => {
    const page = wrap.parentElement.dataset.page;
    const sections = DATA[page].sections;
    const hotspotsLayer = wrap.querySelector('.hotspots');

    sections.forEach((sec) => {
      if (sec.virtual || !sec.box) return; // closing card etc. has no hotspot on the poster
      const [x1, y1, x2, y2] = sec.box;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'hotspot';
      btn.dataset.id = sec.id;
      btn.setAttribute('aria-label', `Read: ${sec.name}`);
      btn.style.left = (x1 * 100).toFixed(3) + '%';
      btn.style.top = (y1 * 100).toFixed(3) + '%';
      btn.style.width = ((x2 - x1) * 100).toFixed(3) + '%';
      btn.style.height = ((y2 - y1) * 100).toFixed(3) + '%';

      const tag = document.createElement('span');
      tag.className = 'hotspot-tag';
      tag.textContent = sec.name;
      btn.appendChild(tag);

      btn.addEventListener('click', () => openReader(sec.id, btn));
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openReader(sec.id, btn);
        }
      });

      hotspotsLayer.appendChild(btn);
    });
  });

  // ============================================================
  // 2. Magnifier lens — follows the cursor inside each .poster-wrap
  // ============================================================
  const ZOOM = 2.4;
  const NATURAL_W = 1123;
  const NATURAL_H = 1588;

  document.querySelectorAll('.poster-wrap').forEach((wrap) => {
    const lens = wrap.querySelector('.lens');
    const lensContent = lens.querySelector('.lens-content');

    function moveLens(e) {
      // Only respond to mouse events (touch devices fall through CSS hover:none)
      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        hideLens();
        return;
      }

      const lensSize = lens.offsetWidth;
      const half = lensSize / 2;

      // Position lens centered on cursor
      lens.style.left = (x - half) + 'px';
      lens.style.top = (y - half) + 'px';

      // Scale the underlying image by ZOOM, then position so cursor point
      // is centered in the lens.
      const bgW = rect.width * ZOOM;
      const bgH = rect.height * ZOOM;
      lensContent.style.backgroundSize = `${bgW}px ${bgH}px`;
      lensContent.style.backgroundPosition = `${-(x * ZOOM - half)}px ${-(y * ZOOM - half)}px`;
    }

    function showLens() {
      lens.classList.add('visible');
      wrap.classList.add('hovering');
    }
    function hideLens() {
      lens.classList.remove('visible');
      wrap.classList.remove('hovering');
    }

    wrap.addEventListener('mouseenter', showLens);
    wrap.addEventListener('mousemove', moveLens);
    wrap.addEventListener('mouseleave', hideLens);

    // Hide lens while a hotspot has keyboard focus
    wrap.querySelectorAll('.hotspot').forEach((h) => {
      h.addEventListener('focus', hideLens);
    });
  });

  // ============================================================
  // 3. Reader overlay
  // ============================================================
  const reader = document.getElementById('reader');
  const readerTitle = document.getElementById('readerTitle');
  const readerKicker = document.getElementById('readerKicker');
  const readerBody = document.getElementById('readerBody');
  const readerCount = document.getElementById('readerCount');
  const readerClose = document.getElementById('readerClose');
  const readerPrev = document.getElementById('readerPrev');
  const readerNext = document.getElementById('readerNext');

  let currentIndex = 0;
  let lastTrigger = null;

  function indexOfId(id) {
    return orderedSections.findIndex((s) => s.id === id);
  }

  function renderSection(idx) {
    const sec = orderedSections[idx];
    if (!sec) return;
    readerTitle.innerHTML = sec.title;
    readerKicker.textContent = `${sec.page === 'p1' ? 'Page 1' : 'Page 2'} · ${sec.kicker || sec.name}`;
    readerBody.innerHTML = sec.html;
    readerBody.scrollTop = 0;
    readerCount.textContent = `${idx + 1} / ${orderedSections.length}`;
    currentIndex = idx;

    readerPrev.disabled = idx <= 0;
    readerNext.disabled = idx >= orderedSections.length - 1;
  }

  function openReader(id, trigger) {
    const idx = indexOfId(id);
    if (idx < 0) return;
    lastTrigger = trigger || null;
    renderSection(idx);
    reader.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Move focus into the dialog
    setTimeout(() => readerClose.focus(), 50);
  }

  function closeReader() {
    reader.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus();
    }
  }

  function prevSection() {
    if (currentIndex > 0) renderSection(currentIndex - 1);
  }
  function nextSection() {
    if (currentIndex < orderedSections.length - 1) renderSection(currentIndex + 1);
  }

  readerClose.addEventListener('click', closeReader);
  readerPrev.addEventListener('click', prevSection);
  readerNext.addEventListener('click', nextSection);

  // Click on the backdrop (anywhere outside the panel) closes the reader
  reader.addEventListener('click', (e) => {
    if (e.target === reader) closeReader();
  });

  document.addEventListener('keydown', (e) => {
    if (reader.getAttribute('aria-hidden') === 'true') return;
    if (e.key === 'Escape') {
      e.preventDefault();
      closeReader();
    } else if (e.key === 'ArrowLeft') {
      prevSection();
    } else if (e.key === 'ArrowRight') {
      nextSection();
    }
  });

  // ============================================================
  // 4. Tiny intro: nudge the first hotspot on each page briefly
  // ============================================================
  setTimeout(() => {
    document.querySelectorAll('.poster-wrap').forEach((wrap) => {
      const first = wrap.querySelector('.hotspot');
      if (!first) return;
      first.classList.add('hotspot-hint');
      setTimeout(() => first.classList.remove('hotspot-hint'), 1600);
    });
  }, 600);
})();
