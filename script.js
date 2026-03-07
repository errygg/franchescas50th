/* =========================================
   script.js – Franchesca's 50th Birthday
   ========================================= */

(function () {
  'use strict';

  /* ─── Countdown Timer ─────────────────────── */
  const PARTY_DATE = new Date('2026-06-06T18:00:00');   // adjust if needed

  function updateCountdown() {
    const now  = new Date();
    const diff = PARTY_DATE - now;

    if (diff <= 0) {
      const el = document.getElementById('countdown');
      if (el) {
        el.innerHTML =
          '<span class="countdown-complete">🎉 The party is HERE! 🎉</span>';
      }
      return;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60))       / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60))            / 1000);

    const set = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = String(val).padStart(2, '0');
    };

    set('cd-days',    days);
    set('cd-hours',   hours);
    set('cd-minutes', minutes);
    set('cd-seconds', seconds);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ─── Confetti / Sparkles ──────────────────── */
  const canvas = document.getElementById('confetti-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H;
    const particles = [];
    const COLORS = [
      '#d4a017', '#f0c942', '#e91e8c', '#ff6ec7',
      '#9b59b6', '#ffffff', '#5c2d91',
    ];

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function Particle() {
      this.reset = function () {
        this.x     = Math.random() * W;
        this.y     = Math.random() * H - H;
        this.vx    = (Math.random() - 0.5) * 1.2;
        this.vy    = Math.random() * 1.5 + 0.5;
        this.size  = Math.random() * 5 + 2;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.rot   = Math.random() * Math.PI * 2;
        this.drot  = (Math.random() - 0.5) * 0.08;
        this.shape = Math.random() < 0.5 ? 'rect' : 'circle';
        this.alpha = Math.random() * 0.5 + 0.5;
      };
      this.reset();
    }

    for (let i = 0; i < 80; i++) {
      const p = new Particle();
      p.y = Math.random() * H; // spread at start
      particles.push(p);
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        p.x   += p.vx;
        p.y   += p.vy;
        p.rot += p.drot;

        if (p.y > H + 10) p.reset();
      });
      requestAnimationFrame(draw);
    }

    draw();
  }

  /* ─── RSVP Form ────────────────────────────── */
  const form    = document.getElementById('rsvp-form');
  const success = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name    = form.querySelector('#rsvp-name').value.trim();
      const guests  = form.querySelector('#rsvp-guests').value;
      const message = form.querySelector('#rsvp-message').value.trim();

      // In a real deployment wire this up to a backend / Formspree / etc.
      console.log('RSVP submitted:', { name, guests, message });

      form.style.display    = 'none';
      success.style.display = 'block';
    });
  }

  /* ─── Smooth scroll for anchor links ──────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ─── Fade-in sections on scroll ──────────── */
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity  = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('section').forEach(sec => {
    sec.style.opacity   = '0';
    sec.style.transform = 'translateY(30px)';
    sec.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(sec);
  });
})();
