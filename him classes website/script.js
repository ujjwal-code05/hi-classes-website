/* 
   HIM CLASSES — script.js
   */

/* ── Board data ── */
const boardData = {
  cbse: {
    icon: '🏫',
    name: 'CBSE Board',
    fullName: 'Central Board of Secondary Education',
    badge: 'Most Popular',
    color: '#0EA5E9',
    description: 'CBSE is India\'s most followed national curriculum, offering a balanced and comprehensive academic programme recognised across India and internationally for higher education.',
    classes: ['Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'],
    subjects10: ['Mathematics', 'Science', 'Social Science', 'English'],
    streams: [
      { icon: '🔬', name: 'Science', desc: 'Physics, Chemistry, Biology/Maths' },
      { icon: '📈', name: 'Commerce', desc: 'Accountancy, Business Studies, Economics, Maths' },
      { icon: '🎭', name: 'Humanities(arts)', desc: 'History, Geography, Political Science, Economics' }
    ],
    highlights: ['NCERT-based curriculum', 'All-India recognition', 'JEE & NEET aligned']
  },
  icse: {
    icon: '📘',
    name: 'ICSE Board',
    fullName: 'Indian Certificate of Secondary Education',
    badge: 'International Recognition',
    color: '#38BDF8',
    description: 'ICSE is administered by the Council for the Indian School Certificate Examinations (CISCE). It is widely regarded for its rigorous and detailed curriculum that promotes analytical and creative thinking.',
    classes: ['Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
    subjects10: ['English', 'History & Civics', 'Geography', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Computer Applications'],
    streams: [
      { icon: '🌍', name: 'Global Scope', desc: 'Internationally recognised for university admissions' },
      { icon: '📝', name: 'English Focus', desc: 'Strong emphasis on communication and writing' },
      { icon: '🧪', name: 'Science Depth', desc: 'Separate subjects for Physics, Chemistry, Biology' }
    ],
    highlights: ['International recognition', 'English proficiency focus', 'Detailed curriculum', 'Strong analytical base']
  },
  isc: {
    icon: '🎓',
    name: 'ISC Board',
    fullName: 'Indian School Certificate (Class 11 & 12)',
    badge: 'Senior Secondary',
    color: '#F4B942',
    description: 'ISC is the senior secondary examination for Classes 11 and 12 under CISCE. It is known for its in-depth, rigorous academic content that prepares students for premier national and international universities.',
    classes: ['Class 11', 'Class 12'],
    subjects10: ['English', 'Physics', 'Chemistry', 'Mathematics', 'Biology', 'Accountancy', 'Economics', 'Business Studies', 'History', 'Geography', 'Computer Science'],
    streams: [
      { icon: '🔬', name: 'Science', desc: 'Physics, Chemistry, Mathematics/Biology' },
      { icon: '📈', name: 'Commerce', desc: 'Accountancy, Business Studies, Economics' },
      { icon: '🎭', name: 'Humanities', desc: 'History, Sociology, Psychology, Geography' }
    ],
    highlights: ['Advanced senior secondary', 'University admission focused', 'Deep subject mastery', 'Premium institutes recognised']
  },
  up: {
    icon: '🏛️',
    name: 'UP Board',
    fullName: 'Uttar Pradesh Madhyamik Shiksha Parishad',
    badge: 'State Board',
    color: '#0EA5E9',
    description: 'UP Board (UPMSP) is the state education board of Uttar Pradesh. It is one of the largest examination boards in the world by student enrolment and provides a strong foundation for competitive state-level examinations.',
    classes: ['Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'],
    subjects10: ['Hindi', 'English', 'Mathematics', 'Science', 'Social Studies', 'Computer'],
    streams: [
      { icon: '🔬', name: 'Science', desc: 'Physics, Chemistry, Mathematics / Biology' },
      { icon: '📈', name: 'Commerce', desc: 'Accountancy, Business Studies, Economics' },
      { icon: '🎭', name: 'Humanities / Arts', desc: 'History, Civics, Geography, Economics' }
    ],
    highlights: [ 'Affordable fees', 'State competitive exam aligned']
  }
};

/* ── Open board modal ── */
function openBoard(boardKey) {
  const data = boardData[boardKey];
  if (!data) return;

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div class="modal-header">
      <span class="modal-board-icon">${data.icon}</span>
      <div>
        <h2>${data.name}</h2>
        <p>${data.fullName}</p>
      </div>
      <span class="modal-badge">${data.badge}</span>
    </div>

    <p style="font-size:0.93rem;color:var(--text-dim);line-height:1.75;margin-bottom:28px;">${data.description}</p>

    <div class="modal-body-grid">
      <div class="modal-info-block">
        <h4>📚 Classes Covered</h4>
        <ul>
          ${data.classes.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>
      <div class="modal-info-block">
        <h4>📝 Key Subjects </h4>
        <ul>
          ${data.subjects10.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>
    </div>

    ${data.streams.length ? `
    <div class="modal-info-block" style="margin-bottom:24px;">
      <h4>🎓 Streams Offered (Class 11 & 12)</h4>
      <div class="modal-streams" style="margin-top:14px;">
        ${data.streams.map(s => `
          <div class="stream-pill">
            <span class="s-icon">${s.icon}</span>
            <h5>${s.name}</h5>
            <p>${s.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>` : ''}

    <div class="modal-info-block" style="margin-bottom:0;">
      <h4>⭐ Why Choose This Board with Him Classes</h4>
      <ul>
        ${data.highlights.map(h => `<li>${h}</li>`).join('')}
        <li>Expert faculty with 5+ years experience</li>
        <li>Regular assessments and mock tests</li>
        <li>Personalised doubt-clearing sessions</li>
      </ul>
    </div>

    <div class="modal-cta">
      <a href="#about" class="btn-primary" onclick="closeBoard()">📞 Enquire for Admission</a>
      <button class="btn-secondary" onclick="closeBoard()">← Back to Boards</button>
    </div>
  `;

  const overlay = document.getElementById('boardModal');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Scroll to boards section first
  document.getElementById('boards').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closeBoard() {
  const overlay = document.getElementById('boardModal');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Close on overlay click
document.getElementById('boardModal').addEventListener('click', function (e) {
  if (e.target === this) closeBoard();
});

// Close on Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeBoard();
});


/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  updateActiveNavLink();
});

/* ── Active nav link ── */
function updateActiveNavLink() {
  const sections = ['home', 'boards', 'gallery', 'about'];
  const scrollY = window.scrollY + 120;

  sections.forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;
    const top    = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const link   = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) {
      link.classList.toggle('active', scrollY >= top && scrollY < bottom);
    }
  });
}

/* ── Hamburger mobile menu ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  // Animate bars
  const bars = hamburger.querySelectorAll('span');
  if (isOpen) {
    bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    bars[1].style.opacity   = '0';
    bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    bars[0].style.transform = '';
    bars[1].style.opacity   = '';
    bars[2].style.transform = '';
  }
});

// Close menu on nav link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const bars = hamburger.querySelectorAll('span');
    bars[0].style.transform = '';
    bars[1].style.opacity   = '';
    bars[2].style.transform = '';
  });
});


/* ── Gallery filter ── */
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    filterBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    const filter = this.dataset.filter;

    galleryItems.forEach(item => {
      const category = item.dataset.category;
      if (filter === 'all' || category === filter) {
        item.classList.remove('hidden');
        item.style.animation = 'fadeUp 0.4s ease forwards';
      } else {
        item.classList.add('hidden');
      }
    });
  });
});


/* ── Scroll reveal ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Add reveal class to key elements
const revealTargets = [
  '.board-card',
  '.feature-item',
  '.gallery-item',
  '.info-card',
  '.section-header',
  '.about-left',
  '.about-right',
  '.admission-cta-card',
];

revealTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.08}s`;
    revealObserver.observe(el);
  });
});


/* ── Smooth scroll for all anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});


/* ── Counter animation for hero stats ── */
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const step  = Math.ceil(target / 60);
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current + suffix;
  }, 25);
}

// Trigger counters when hero is in view
const heroStats = document.querySelectorAll('.stat-num');
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      heroStats.forEach(stat => {
        const text = stat.textContent.trim();
        if (text.includes('+')) {
          animateCounter(stat, parseInt(text), '+');
        } else if (text.includes('%')) {
          animateCounter(stat, parseInt(text), '%');
        } else {
          animateCounter(stat, parseInt(text), '');
        }
      });
      heroObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

if (heroStats.length) {
  heroObserver.observe(heroStats[0].closest('.hero-stats') || document.querySelector('.hero'));
}


/* ── Board card pulse on load ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('.board-card').forEach((card, i) => {
      setTimeout(() => {
        card.style.animation = 'fadeUp 0.6s ease forwards';
        card.style.opacity = '0';
        setTimeout(() => { card.style.opacity = ''; card.style.animation = ''; }, 700);
      }, i * 100);
    });
  }, 500);
});

