// main.js — enhanced renderer with copy email, resume, dynamic role, active nav, etc.

/* ---- HELPERS ---- */
function icon(id, cls = '') {
  return `<svg class="icon ${cls}" aria-hidden="true"><use href="#icon-${id}"/></svg>`;
}

/* ---- THEME ---- */
const THEME_KEY = 'portfolio-theme';
function getTheme() {
  return localStorage.getItem(THEME_KEY) ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem(THEME_KEY, t);
  const btn = document.getElementById('theme-btn');
  if (!btn) return;
  btn.innerHTML = t === 'dark' ? icon('sun', 'icon-md') : icon('moon', 'icon-md');
  btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}
function toggleTheme() { applyTheme(getTheme() === 'dark' ? 'light' : 'dark'); }

/* ---- MOBILE NAV ---- */
function toggleMobileNav() {
  const nav = document.getElementById('nav-mobile');
  const open = nav.classList.toggle('open');
  document.getElementById('menu-btn').innerHTML = open ? icon('x', 'icon-md') : icon('menu', 'icon-md');
}
function closeMobileNav() { 
  const nav = document.getElementById('nav-mobile');
  nav.classList.remove('open');
  document.getElementById('menu-btn').innerHTML = icon('menu', 'icon-md');
}

/* ---- SCROLL REVEAL + ACTIVE NAV HIGHLIGHT ---- */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(section => observer.observe(section));
}

/* ---- OFFSET SCROLL (for fixed nav) ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        closeMobileNav();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ---- COPY EMAIL (sketch-style toast) ---- */
function showToast(msg) {
  let toast = document.querySelector('.sketch-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'sketch-toast';
    toast.style.cssText = 'position:fixed; bottom:20px; left:50%; transform:translateX(-50%); background:var(--ink); color:var(--paper); font-family:var(--font-sketch); padding:8px 20px; border-radius:2px 8px 4px 6px; z-index:999; font-size:13px; border:2px solid var(--accent); box-shadow:4px 4px 0 var(--accent); opacity:0; transition:0.2s; pointer-events:none;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  setTimeout(() => toast.style.opacity = '0', 2000);
}

function initCopyEmail() {
  const email = DATA.person.email;
  const emailBtn = document.getElementById('hero-email-btn');
  emailBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    showToast('✧ Email copied to clipboard ✧');
  });
  // also add copy to contact email item
  const contactEmail = document.querySelector('.contact-val[href^="mailto"]');
  if (contactEmail) {
    contactEmail.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(email);
      showToast('✧ Email copied ✧');
    });
  }
}

/* ---- RESUME BUTTON ---- */
function initResume() {
  const resumeBtn = document.getElementById('hero-resume-btn');
  if (resumeBtn && DATA.person.resumeLink) {
    resumeBtn.href = DATA.person.resumeLink;
    if (DATA.person.resumeLink === '#') {
      resumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showToast('📄 Resume available upon request. Contact me directly.');
      });
    }
  }
}

/* ---- RENDER FUNCTIONS (updated) ---- */
function renderNav() {
  const links = [
    ['#experience', 'Experience'],
    ['#projects',   'Projects'],
    ['#skills',     'Skills'],
    ['#certs',      'Certs'],
    ['#contact',    'Contact'],
  ];
  const navHtml = links.map(([href, label]) => `<a href="${href}">${label}</a>`).join('');
  document.getElementById('nav-links').innerHTML = navHtml;
  document.getElementById('nav-mobile-links').innerHTML = links.map(([href, label]) =>
    `<a href="${href}" onclick="closeMobileNav()">${label}</a>`
  ).join('');
}

function renderHero() {
  const p = DATA.person;
  const statsHtml = DATA.stats.map(s => `<div class="stat-item"><div class="stat-num">${s.num}</div><div class="stat-lbl">${s.label}</div></div>`).join('');
  document.getElementById('hero-name').innerHTML = p.name.replace('Abu Haider', '');
  document.getElementById('hero-accent').textContent = 'Abu Haider';
  document.getElementById('hero-tag-text').textContent = p.tagline;
  document.getElementById('hero-bio').textContent = p.bio;
  document.getElementById('hero-loc').innerHTML = icon('map-pin','icon-sm') + ' ' + p.location;
  document.getElementById('hero-phone').innerHTML = icon('phone','icon-sm') + ' ' + p.phone;
  document.getElementById('hero-portfolio-btn').href = p.portfolio;
  document.getElementById('hero-stats').innerHTML = statsHtml;
  // dynamic role (latest experience)
  const latestExp = DATA.experience[0];
  document.getElementById('hero-role-text').innerHTML = `${latestExp.role} — ${latestExp.company}, ${latestExp.dept}`;
  document.getElementById('hero-status').innerHTML = `<span class="live-dot"></span> Currently @ ${latestExp.company} · ${latestExp.role}`;
}

function renderExperience() {
  const container = document.getElementById('exp-list');
  container.innerHTML = DATA.experience.map((e, i) => `
    <div class="exp-card sk-box reveal" style="transition-delay:${i * 0.1}s">
      <div class="exp-bar ${e.color}"></div>
      <div class="exp-top"><div><div class="exp-role">${e.role}</div><div class="exp-company">${e.company}</div></div><div class="exp-date">${e.date}</div></div>
      <div class="exp-dept">${icon('briefcase','icon-sm')} ${e.dept}</div>
      <ul class="exp-items">${e.items.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>`).join('');
}

function renderProjects() {
  const live = DATA.projects.filter(p => p.live);
  const lab  = DATA.projects.filter(p => !p.live);
  const cardHtml = (p, i) => {
    const tagClass = `stag stag-${p.color || 'gray'}`;
    const hasUrl = p.url || p.github;
    return `
      <div class="proj-card sk-box reveal" style="transition-delay:${(i % 4) * 0.08}s">
        <div class="proj-header">
          <div class="proj-icon-wrap">${icon(p.icon, 'icon-md')}</div>
          <div class="proj-links">
            ${p.url ? `<a class="proj-link" href="${p.url}" target="_blank" aria-label="Open ${p.name}">${icon('arrow-up-right', 'icon-md')}</a>` : ''}
            ${p.github ? `<a class="proj-link" href="${p.github}" target="_blank" aria-label="GitHub ${p.name}">${icon('github', 'icon-md')}</a>` : ''}
          </div>
        </div>
        ${p.live ? `<div class="proj-live-tag">${icon('activity','icon-sm')} Live</div>` : ''}
        <div class="proj-name">${p.name}</div>
        <div class="proj-desc">${p.desc}</div>
        <div class="proj-tags">${p.tags.map(t => `<span class="${tagClass}">${t}</span>`).join('')}</div>
      </div>`;
  };
  document.getElementById('proj-live').innerHTML = live.map(cardHtml).join('');
  document.getElementById('proj-lab').innerHTML  = lab.map(cardHtml).join('');
}

function renderSkills() {
  const colorMap = { blue:'stag-blue', red:'stag-red', green:'stag-green' };
  document.getElementById('skills-grid').innerHTML = DATA.skills.map((cat, i) => `
    <div class="skill-cat sk-box reveal" style="transition-delay:${i * 0.07}s">
      <div class="skill-cat-head">${icon(cat.icon, 'icon-sm')} ${cat.category}</div>
      <div class="skill-tags">${cat.items.map(item => `<span class="stag ${colorMap[cat.color] || 'stag-gray'}">${item}</span>`).join('')}</div>
    </div>`).join('');
}

function renderCerts() {
  document.getElementById('cert-grid').innerHTML = DATA.certifications.map((c, i) => `
    <div class="cert-card sk-box-sm reveal" style="transition-delay:${(i % 4) * 0.07}s">
      <div class="cert-icon-wrap">${c.status === 'done' ? icon('check', 'icon-sm') : icon('clock', 'icon-sm')}</div>
      <div><div class="cert-name">${c.name}</div><div class="cert-issuer">${c.issuer}</div><div class="cert-badge ${c.status}">${c.status === 'done' ? icon('check','icon-sm') + ' Completed' : icon('clock','icon-sm') + ' In Progress'}</div></div>
    </div>`).join('');
}

function renderAchievements() {
  document.getElementById('ach-grid').innerHTML = DATA.achievements.map((a, i) => `
    <div class="ach-card sk-box reveal" style="transition-delay:${i * 0.1}s">
      <div class="ach-icon">${icon(a.icon, 'icon-xl')}</div>
      <div class="ach-title">${a.title}</div>
      <div class="ach-sub">${a.sub}</div>
    </div>`).join('');
}

function renderContact() {
  const p = DATA.person;
  const contacts = [
    { icon:'mail', label:'Email', val:p.email, href:'mailto:'+p.email },
    { icon:'phone', label:'Phone', val:p.phone, href:'tel:'+p.phone },
    { icon:'linkedin', label:'LinkedIn', val:'syed-md-abu-haider', href:p.linkedin },
    { icon:'github', label:'GitHub', val:'SyedMdAbuHaider', href:p.github },
    { icon:'globe', label:'Portfolio', val:'portfolio.syedmdabuhaider.xyz', href:p.portfolio },
    { icon:'twitter', label:'Twitter', val:'@smabuhaider', href:p.twitter }
  ];
  document.getElementById('contact-list').innerHTML = contacts.map(c => `
    <div class="contact-item sk-box-sm"><div class="contact-icon">${icon(c.icon, 'icon-sm')}</div><div><div class="contact-label">${c.label}</div><a class="contact-val" href="${c.href}" target="_blank" rel="noopener">${c.val}</a></div></div>
  `).join('');
  document.getElementById('refs-list').innerHTML = DATA.references.map((r, i) => `
    <div class="ref-card sk-box reveal" style="transition-delay:${i * 0.1}s"><div class="ref-name">${r.name}</div><div class="ref-role">${r.role}</div><div class="ref-contact">${icon('mail','icon-sm')} ${r.contact}</div></div>
  `).join('');
}

function renderFooter() {
  const p = DATA.person;
  document.getElementById('footer-links').innerHTML = `
    <a href="${p.github}" target="_blank" rel="noopener">${icon('github', 'icon-md')}</a>
    <a href="${p.linkedin}" target="_blank" rel="noopener">${icon('linkedin', 'icon-md')}</a>
    <a href="${p.twitter}" target="_blank" rel="noopener">${icon('twitter', 'icon-md')}</a>
    <a href="${p.portfolio}" target="_blank" rel="noopener">${icon('globe', 'icon-md')}</a>`;
  document.getElementById('footer-year').textContent = `© ${new Date().getFullYear()} — hand‑drawn with intent`;
}

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(getTheme());
  renderNav();
  renderHero();
  renderExperience();
  renderProjects();
  renderSkills();
  renderCerts();
  renderAchievements();
  renderContact();
  renderFooter();
  initReveal();
  initActiveNav();
  initSmoothScroll();
  initCopyEmail();
  initResume();

  document.getElementById('theme-btn').addEventListener('click', toggleTheme);
  document.getElementById('menu-btn').addEventListener('click', toggleMobileNav);
  window.addEventListener('resize', () => { if (window.innerWidth > 640) closeMobileNav(); });
});