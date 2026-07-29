/* ═══════════════════════════════════════════════════
   UPASANA — Main JavaScript
   ═══════════════════════════════════════════════════ */

'use strict';

/* ── DOM Ready ── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileSidebar();
  initHeroSlider();
  initFAQ();
  initScrollReveal();
  initStatCounters();
  initBackToTop();
  initBookingForm();
  initSearchSuggestions();
});

/* ══════════════════════════════════════════════════
   NAVBAR — Scroll behaviour & dropdown
══════════════════════════════════════════════════ */
function initNavbar() {
  const header = document.getElementById('site-header');
  if (!header) return;

  let lastScrollY = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 80) {
      header.classList.add('scrolled');
      header.style.top = '0';
    } else {
      header.classList.remove('scrolled');
      header.style.top = '18px';
    }

    lastScrollY = scrollY;
  }, { passive: true });
}

/* ══════════════════════════════════════════════════
   MOBILE SIDEBAR
══════════════════════════════════════════════════ */
function initMobileSidebar() {
  const hamburger = document.getElementById('hamburger-btn');
  const sidebar   = document.getElementById('mobile-sidebar');
  const overlay   = document.getElementById('mobile-overlay');
  const closeBtn  = document.getElementById('sidebar-close');

  if (!hamburger || !sidebar) return;

  const openSidebar = () => {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeSidebar = () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', openSidebar);
  closeBtn?.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);

  // Close on sidebar link click
  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeSidebar);
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSidebar();
  });
}

/* ══════════════════════════════════════════════════
   HERO SLIDER
══════════════════════════════════════════════════ */
function initHeroSlider() {
  const slides  = document.querySelectorAll('.hero-slide');
  const dots    = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('slide-prev');
  const nextBtn = document.getElementById('slide-next');

  if (!slides.length) return;

  let current  = 0;
  let autoTimer = null;

  const goTo = (index) => {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');

    current = (index + slides.length) % slides.length;

    slides[current].classList.add('active');
    dots[current]?.classList.add('active');

    // Reset hero content animation
    const content = slides[current].querySelector('.hero-content');
    if (content) {
      content.style.animation = 'none';
      content.offsetHeight; // reflow
      content.style.animation = '';
    }
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  const startAuto = () => {
    stopAuto();
    autoTimer = setInterval(next, 5500);
  };

  const stopAuto = () => {
    if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
  };

  nextBtn?.addEventListener('click', () => { next(); startAuto(); });
  prevBtn?.addEventListener('click', () => { prev(); startAuto(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); startAuto(); });
  });

  // Touch / swipe support
  let touchStartX = 0;
  const heroSection = document.getElementById('hero');
  heroSection?.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  heroSection?.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
      startAuto();
    }
  }, { passive: true });

  startAuto();
}

/* ══════════════════════════════════════════════════
   FAQ ACCORDION
══════════════════════════════════════════════════ */
function initFAQ() {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(q => {
    q.addEventListener('click', () => {
      const answer  = q.nextElementSibling;
      const isOpen  = q.getAttribute('aria-expanded') === 'true';

      // Close all others
      questions.forEach(other => {
        if (other !== q) {
          other.setAttribute('aria-expanded', 'false');
          other.nextElementSibling?.classList.remove('open');
        }
      });

      // Toggle current
      if (isOpen) {
        q.setAttribute('aria-expanded', 'false');
        answer?.classList.remove('open');
      } else {
        q.setAttribute('aria-expanded', 'true');
        answer?.classList.add('open');
      }
    });
  });
}

/* ══════════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════════ */
function initScrollReveal() {
  // Add reveal classes to sections
  const addReveal = (selector, cls = 'reveal', delay = 0) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add(cls);
      if (delay) el.classList.add(`reveal-delay-${Math.min(i + 1, 4)}`);
    });
  };

  addReveal('.stat-card', 'reveal', true);
  addReveal('.service-card', 'reveal', true);
  addReveal('.step-card', 'reveal', true);
  addReveal('.testimonial-card', 'reveal', true);
  addReveal('.blog-card', 'reveal', true);
  addReveal('.faq-item', 'reveal', true);
  addReveal('.section-header', 'reveal');
  addReveal('.kundali-banner', 'reveal');
  addReveal('.booking-card', 'reveal');
  addReveal('.astrology-left', 'reveal-left');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left').forEach(el => {
    observer.observe(el);
  });
}

/* ══════════════════════════════════════════════════
   STAT COUNTERS
══════════════════════════════════════════════════ */
function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (!statNumbers.length) return;

  const formatNumber = (num) => {
    if (num >= 100000) return (num / 1000).toFixed(0) + 'K';
    if (num >= 1000)  return (num / 1000).toFixed(0) + 'K';
    return num.toString();
  };

  const animateCounter = (el) => {
    const target   = parseInt(el.dataset.target, 10);
    const duration = 2000;
    const step     = target / (duration / 16);
    let   current  = 0;

    const tick = () => {
      current = Math.min(current + step, target);
      el.textContent = formatNumber(Math.floor(current)) + '+';
      if (current < target) requestAnimationFrame(tick);
    };
    tick();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════════
   BACK TO TOP
══════════════════════════════════════════════════ */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ══════════════════════════════════════════════════
   BOOKING FORM
══════════════════════════════════════════════════ */
function initBookingForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;

  // Set min date to today
  const dateInput = document.getElementById('puja-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const pujaType = document.getElementById('puja-type')?.value;
    const date     = document.getElementById('puja-date')?.value;
    const name     = document.getElementById('full-name')?.value;
    const phone    = document.getElementById('phone')?.value;

    if (!pujaType) {
      showToast('Please select a puja type.', 'error');
      return;
    }
    if (!date) {
      showToast('Please select a date.', 'error');
      return;
    }
    if (!name?.trim()) {
      showToast('Please enter your full name.', 'error');
      return;
    }
    if (!phone?.trim() || phone.replace(/\D/g, '').length < 10) {
      showToast('Please enter a valid 10-digit phone number.', 'error');
      return;
    }

    // Simulate success
    const btn = form.querySelector('.btn-submit-booking');
    btn.textContent = 'Booking Confirmed! ✅';
    btn.style.background = 'linear-gradient(135deg, #2e7d32, #43a047)';
    btn.disabled = true;

    showToast('🙏 Your booking request has been submitted! Our team will call you within 30 minutes.', 'success');

    setTimeout(() => {
      btn.textContent = 'Book Pandit Now 🙏';
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 4000);
  });
}

/* ══════════════════════════════════════════════════
   SEARCH SUGGESTIONS
══════════════════════════════════════════════════ */
function initSearchSuggestions() {
  const searchInput = document.getElementById('puja-search');
  if (!searchInput) return;

  const suggestions = [
    'Rudrabhishek Puja', 'Griha Pravesh', 'Satyanarayan Katha',
    'Ganesh Puja', 'Navgraha Puja', 'Vivah Sanskar', 'Havan / Homa',
    'Namkaran Sanskar', 'Shradh Puja', 'Diwali Puja', 'Vastu Puja',
    'Lakshmi Puja', 'Free Kundali', 'Daily Horoscope', 'Muhurat'
  ];

  // Create suggestion dropdown
  const dropdown = document.createElement('div');
  dropdown.className = 'search-suggestions';
  dropdown.style.cssText = `
    position: absolute; top: calc(100% + 8px); left: 0; right: 0;
    background: white; border-radius: 14px; box-shadow: 0 8px 32px rgba(0,0,0,.2);
    border: 1.5px solid #E7C9A7; max-height: 240px; overflow-y: auto;
    display: none; z-index: 100;
  `;
  searchInput.parentElement.style.position = 'relative';
  searchInput.parentElement.appendChild(dropdown);

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) { dropdown.style.display = 'none'; return; }

    const matches = suggestions.filter(s => s.toLowerCase().includes(q));
    if (!matches.length) { dropdown.style.display = 'none'; return; }

    dropdown.innerHTML = matches.map(s => `
      <div class="suggestion-item" style="padding:12px 18px; cursor:pointer; font-size:.9rem; font-weight:500; color:#1a1a2e; transition: background .2s;" 
           onmouseover="this.style.background='rgba(128,9,9,.06)'" 
           onmouseout="this.style.background=''"
           data-val="${s}">🔍 ${s}</div>
    `).join('');
    dropdown.style.display = 'block';

    dropdown.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        searchInput.value = item.dataset.val;
        dropdown.style.display = 'none';
        searchInput.focus();
      });
    });
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.parentElement.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });

  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Escape') dropdown.style.display = 'none';
    if (e.key === 'Enter') {
      dropdown.style.display = 'none';
      showToast(`Searching for "${searchInput.value}"...`, 'info');
    }
  });
}

/* ══════════════════════════════════════════════════
   TOAST NOTIFICATIONS
══════════════════════════════════════════════════ */
function showToast(message, type = 'info') {
  // Remove existing toasts
  document.querySelectorAll('.upasana-toast').forEach(t => t.remove());

  const colors = {
    success: { bg: '#2e7d32', icon: '✅' },
    error:   { bg: '#c62828', icon: '❌' },
    info:    { bg: '#800909', icon: '🙏' }
  };
  const { bg, icon } = colors[type] || colors.info;

  const toast = document.createElement('div');
  toast.className = 'upasana-toast';
  toast.style.cssText = `
    position: fixed; top: 100px; right: 24px; z-index: 99999;
    background: ${bg}; color: white;
    padding: 16px 22px; border-radius: 14px; max-width: 360px;
    font-size: .9rem; font-weight: 600; line-height: 1.5;
    box-shadow: 0 8px 32px rgba(0,0,0,.3);
    display: flex; align-items: flex-start; gap: 10px;
    animation: toastSlideIn .4s cubic-bezier(.4,0,.2,1) both;
    font-family: 'Inter', sans-serif;
  `;

  // Inject animation keyframes once
  if (!document.getElementById('toast-style')) {
    const style = document.createElement('style');
    style.id = 'toast-style';
    style.textContent = `
      @keyframes toastSlideIn { from { transform: translateX(110%); opacity:0 } to { transform: translateX(0); opacity:1 } }
      @keyframes toastSlideOut { from { transform: translateX(0); opacity:1 } to { transform: translateX(110%); opacity:0 } }
    `;
    document.head.appendChild(style);
  }

  toast.innerHTML = `<span style="font-size:1.2rem;flex-shrink:0">${icon}</span><span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastSlideOut .4s cubic-bezier(.4,0,.2,1) both';
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}

/* ══════════════════════════════════════════════════
   SMOOTH SCROLL for anchor links
══════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const offset = 100;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ══════════════════════════════════════════════════
   BOOK PANDIT CTA buttons (scroll to form)
══════════════════════════════════════════════════ */
document.querySelectorAll('.btn-book, .btn-primary-hero').forEach(btn => {
  btn.addEventListener('click', () => {
    const form = document.getElementById('book-pandit-form');
    if (form) {
      const top = form.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
