/* Theme toggle + scroll reveal. The only two behaviours on the page. */

(function () {
  'use strict';

  var root = document.documentElement;

  /* --- Theme ------------------------------------------------------------- */

  var toggle = document.querySelector('[data-theme-toggle]');

  function paintToggle() {
    if (!toggle) return;
    var dark = root.getAttribute('data-theme') === 'dark';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  paintToggle();

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      paintToggle();
      try {
        localStorage.setItem('theme', next);
      } catch (e) {
        /* Private mode — the choice just won't outlive the session. */
      }
    });
  }

  // Follow the OS only while the visitor hasn't made an explicit choice.
  var scheme = window.matchMedia('(prefers-color-scheme: dark)');
  var onSchemeChange = function (e) {
    try {
      if (localStorage.getItem('theme')) return;
    } catch (err) {
      return;
    }
    root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    paintToggle();
  };

  if (scheme.addEventListener) {
    scheme.addEventListener('change', onSchemeChange);
  } else if (scheme.addListener) {
    scheme.addListener(onSchemeChange);
  }

  /* --- Reveal ------------------------------------------------------------ */

  // The head script arms `reveal-ready` and watches this flag: if we never get
  // here, it strips the class and the page shows in full.
  window.__revealReady = true;

  if (!root.classList.contains('reveal-ready')) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    observer.observe(el);
  });
})();
