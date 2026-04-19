/* ════════════════════════════════════════════════════
   IRSHAD AHMAD PORTFOLIO — main.js
   Interactivity, Animations, Charts
════════════════════════════════════════════════════ */

'use strict';

/* ── DOM Ready ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileNav();
  initScrollReveal();
  initStatCounters();
  initProjectFilter();
  initSkillBars();
  initCharts();
  initKpiCounters();
  initContactForm();
  initActiveNavLinks();
});

/* ════════════════════════════════════════════════════
   NAVBAR — scroll state
════════════════════════════════════════════════════ */
function initNavbar() {
  const nav = document.getElementById('navbar');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 24);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ════════════════════════════════════════════════════
   MOBILE NAV TOGGLE
════════════════════════════════════════════════════ */
function initMobileNav() {
  const toggle   = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    }
  });
}

/* ════════════════════════════════════════════════════
   SCROLL REVEAL — Intersection Observer
════════════════════════════════════════════════════ */
function initScrollReveal() {
  // Auto-add reveal class to key elements
  const selectors = [
    '.service-card',
    '.project-card',
    '.kpi-card',
    '.chart-card',
    '.skill-group',
    '.insight-card',
    '.timeline-card',
    '.about-copy',
    '.about-visual',
    '.contact-copy',
    '.contact-form',
    '.section-header'
  ];

  selectors.forEach((sel, i) => {
    document.querySelectorAll(sel).forEach((el, j) => {
      el.classList.add('reveal');
      // Stagger delay for grid children
      const delay = Math.min(j * 80, 400);
      el.style.transitionDelay = `${delay}ms`;
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ════════════════════════════════════════════════════
   HERO STAT COUNTERS
════════════════════════════════════════════════════ */
function initStatCounters() {
  const counters = document.querySelectorAll('.hero-section .stat-num[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target   = parseFloat(el.dataset.target);
  const isFloat  = target % 1 !== 0;
  const duration = 1800;
  const start    = performance.now();

  const update = (now) => {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = easeOutExpo(progress);
    const current  = eased * target;
    el.textContent = isFloat ? current.toFixed(1) : Math.floor(current);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function easeOutExpo(x) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

/* ════════════════════════════════════════════════════
   KPI COUNTERS (Analytics section)
════════════════════════════════════════════════════ */
function initKpiCounters() {
  const counters = document.querySelectorAll('.kpi-num.counter[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ════════════════════════════════════════════════════
   PROJECT FILTER
════════════════════════════════════════════════════ */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active state
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Filter cards with animation
      projectCards.forEach((card, index) => {
        const category = card.dataset.category;
        const show = filter === 'all' || category === filter;

        if (show) {
          card.style.animation = 'none';
          card.classList.remove('hidden');
          // Stagger re-appearance
          setTimeout(() => {
            card.style.animation = '';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, index * 60);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ════════════════════════════════════════════════════
   SKILL BARS
════════════════════════════════════════════════════ */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill[data-width]');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        setTimeout(() => {
          bar.style.width = bar.dataset.width + '%';
        }, 200);
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
}

/* ════════════════════════════════════════════════════
   ACTIVE NAV LINKS (Scrollspy)
════════════════════════════════════════════════════ */
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => observer.observe(s));
}

/* ════════════════════════════════════════════════════
   CHARTS
════════════════════════════════════════════════════ */
function initCharts() {
  // Wait for charts section to be visible before initialising
  const analyticsSection = document.getElementById('analytics');
  if (!analyticsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        buildAllCharts();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(analyticsSection);
}

function buildAllCharts() {
  buildEngagementChart();
  buildReachChart();
  buildContentMixChart();
  buildPlatformChart();
  buildRoasChart();
}

/* Chart defaults */
const ACCENT      = '#6c47ff';
const ACCENT_SOFT = 'rgba(108,71,255,0.12)';
const ACCENT2     = '#c044e0';
const GREEN       = '#22c55e';
const ORANGE      = '#ff6b35';
const BLUE        = '#3b82f6';
const YELLOW      = '#f59e0b';

const CHART_FONT = "'Inter', sans-serif";

Chart.defaults.font.family = CHART_FONT;
Chart.defaults.color = '#6b6860';

function chartPlugin() {
  return {
    grid: {
      color: 'rgba(0,0,0,0.05)',
      drawBorder: false
    }
  };
}

/* ── Engagement Rate Chart (Bar) ─────────────────── */
function buildEngagementChart() {
  const ctx = document.getElementById('engagementChart');
  if (!ctx) return;

  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const data   = [4.2, 5.1, 5.8, 6.4, 7.2, 8.1, 7.8, 8.6, 9.0, 9.2, 8.8, 9.4];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [{
        label: 'Engagement Rate (%)',
        data,
        backgroundColor: data.map((_, i) =>
          i >= 6 ? ACCENT : 'rgba(108,71,255,0.4)'
        ),
        borderRadius: 6,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.raw}% engagement`
          }
        }
      },
      scales: {
        x: { grid: { display: false }, border: { display: false } },
        y: {
          grid: chartPlugin().grid,
          border: { display: false },
          ticks: { callback: v => v + '%' },
          max: 12
        }
      }
    }
  });
}

/* ── Reach Growth Chart (Line/Area) ──────────────── */
function buildReachChart() {
  const ctx = document.getElementById('reachChart');
  if (!ctx) return;

  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const data   = [12, 22, 35, 48, 68, 90, 118, 152, 198, 245, 295, 340];

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: 'Cumulative Reach (K)',
        data,
        borderColor: ACCENT,
        backgroundColor: 'rgba(108,71,255,0.1)',
        pointBackgroundColor: ACCENT,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        fill: true,
        tension: 0.45
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.raw}K total reach`
          }
        }
      },
      scales: {
        x: { grid: { display: false }, border: { display: false } },
        y: {
          grid: chartPlugin().grid,
          border: { display: false },
          ticks: { callback: v => v + 'K' }
        }
      }
    }
  });
}

/* ── Content Mix Doughnut ─────────────────────────── */
function buildContentMixChart() {
  const ctx = document.getElementById('contentMixChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Short-Form Video', 'Carousels', 'Static Graphics', 'Stories', 'Long-Form'],
      datasets: [{
        data: [38, 24, 18, 14, 6],
        backgroundColor: [ACCENT, ACCENT2, BLUE, GREEN, ORANGE],
        borderWidth: 0,
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '68%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { size: 11 },
            padding: 12,
            boxWidth: 10,
            usePointStyle: true
          }
        }
      }
    }
  });
}

/* ── Platform Distribution Doughnut ─────────────── */
function buildPlatformChart() {
  const ctx = document.getElementById('platformChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Instagram', 'TikTok', 'LinkedIn', 'Facebook', 'YouTube'],
      datasets: [{
        data: [40, 25, 18, 10, 7],
        backgroundColor: [
          '#E1306C', '#000000', '#0A66C2', '#1877F2', '#FF0000'
        ],
        borderWidth: 0,
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '68%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { size: 11 },
            padding: 12,
            boxWidth: 10,
            usePointStyle: true
          }
        }
      }
    }
  });
}

/* ── ROAS Line Chart ──────────────────────────────── */
function buildRoasChart() {
  const ctx = document.getElementById('roasChart');
  if (!ctx) return;

  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const roasData = [1.4, 1.6, 1.9, 2.1, 2.4, 2.6, 2.5, 2.8, 3.0, 3.1, 2.9, 3.2];
  const budgetData = [300, 400, 500, 500, 600, 700, 700, 800, 900, 900, 1000, 1100];

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [
        {
          label: 'ROAS (×)',
          data: roasData,
          borderColor: GREEN,
          backgroundColor: 'rgba(34,197,94,0.08)',
          pointBackgroundColor: GREEN,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 4,
          fill: true,
          tension: 0.4,
          yAxisID: 'y'
        },
        {
          label: 'Ad Spend (USD)',
          data: budgetData,
          borderColor: ORANGE,
          backgroundColor: 'transparent',
          pointBackgroundColor: ORANGE,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 3,
          borderDash: [5, 4],
          tension: 0.4,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          position: 'top',
          align: 'end',
          labels: {
            font: { size: 11 },
            boxWidth: 12,
            usePointStyle: true
          }
        }
      },
      scales: {
        x: { grid: { display: false }, border: { display: false } },
        y: {
          type: 'linear',
          position: 'left',
          grid: chartPlugin().grid,
          border: { display: false },
          ticks: { callback: v => v + '×' },
          min: 0, max: 4
        },
        y1: {
          type: 'linear',
          position: 'right',
          grid: { display: false },
          border: { display: false },
          ticks: { callback: v => '$' + v }
        }
      }
    }
  });
}

/* ════════════════════════════════════════════════════
   CONTACT FORM
════════════════════════════════════════════════════ */
function initContactForm() {
  const form     = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    feedback.textContent = '';
    feedback.className = 'form-feedback';

    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const message = form.message.value.trim();

    // Basic validation
    if (!name || !email || !message) {
      feedback.textContent = '⚠️  Please fill in all required fields.';
      feedback.classList.add('error');
      return;
    }
    if (!isValidEmail(email)) {
      feedback.textContent = '⚠️  Please enter a valid email address.';
      feedback.classList.add('error');
      return;
    }

    // Simulate submission
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending…';

    await delay(1400);

    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
    form.reset();

    feedback.textContent = '✅  Message sent! I\'ll get back to you within 24 hours.';
    feedback.classList.add('success');

    setTimeout(() => {
      feedback.textContent = '';
      feedback.className = 'form-feedback';
    }, 6000);
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
