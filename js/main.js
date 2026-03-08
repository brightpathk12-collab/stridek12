/* ========================================
   STRIDE K-12 — Main JavaScript
   No frameworks, no dependencies.
   ======================================== */

(function () {
  'use strict';

  // ── Mobile Nav Toggle ──────────────────
  const navbar = document.querySelector('.navbar');
  const navToggle = document.querySelector('.nav-toggle');

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      navbar.classList.toggle('nav-open');
    });

    // Close mobile nav when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        navbar.classList.remove('nav-open');
      });
    });
  }

  // ── Navbar Scroll Shadow ───────────────
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ── Scroll Animations (Fade Up) ────────
  var fadeElements = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window && fadeElements.length > 0) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything
    fadeElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ── Tab Switching (Framework Page) ─────
  var tabButtons = document.querySelectorAll('.tab-btn');
  var tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = this.getAttribute('data-tab');

      tabButtons.forEach(function (b) {
        b.classList.remove('active');
      });
      tabPanels.forEach(function (p) {
        p.classList.remove('active');
      });

      this.classList.add('active');
      var panel = document.getElementById(target);
      if (panel) {
        panel.classList.add('active');
      }
    });
  });

  // ── Smooth Scroll for Anchor Links ─────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
