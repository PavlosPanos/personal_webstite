'use strict';

// --- ELEMENT TOGGLE FUNCTION ---
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// --- SIDEBAR TOGGLE (MOBILE) ---
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}

// --- NAVBAR TOGGLE (MOBILE) ---
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
if (navToggler) {
  navToggler.addEventListener("click", () => {
    elementToggleFunc(navbar);
    elementToggleFunc(navToggler);
  });
}

// --- PARTICLE ENGINE ---
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
const particleCount = 60;
const mouse = { x: null, y: null, radius: 150 };

window.addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = (Math.random() * 30) + 1;
    this.color = 'rgba(34, 211, 238, 0.5)';
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let force = (mouse.radius - distance) / mouse.radius;
    if (distance < mouse.radius) {
      this.x -= forceDirectionX * force * this.density;
      this.y -= forceDirectionY * force * this.density;
    } else {
      if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 10;
      if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 10;
    }
  }
}

function initParticles() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles = [];
  for (let i = 0; i < particleCount; i++) particles.push(new Particle());
}

function animateParticles() {
  if (!canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].draw();
    particles[i].update();
  }
  connectParticles();
  requestAnimationFrame(animateParticles);
}

function connectParticles() {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a; b < particles.length; b++) {
      let dx = particles[a].x - particles[b].x;
      let dy = particles[a].y - particles[b].y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.strokeStyle = `rgba(34, 211, 238, ${1 - (dist / 100)})`;
        ctx.lineWidth = 1; ctx.beginPath();
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y); ctx.stroke();
      }
    }
  }
}

if (canvas) {
  initParticles(); animateParticles();
  window.addEventListener('resize', initParticles);
}

// --- MULTI-LANGUAGE LOGIC ---
const langBtns = document.querySelectorAll("[data-lang-btn]");
const translatableElements = document.querySelectorAll("[data-en]");

const setLanguage = (lang) => {
  translatableElements.forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = text;
        } else {
            el.innerText = text;
        }
    }
  });
  langBtns.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
  });
  localStorage.setItem('pref-lang', lang);
}

langBtns.forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang-btn")));
});

// Load preferred language
const savedLang = localStorage.getItem('pref-lang') || 'en';
setLanguage(savedLang);

// --- NAVIGATION ---
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const dataEn = this.getAttribute('data-en');
    if (!dataEn) return;
    
    const targetPage = dataEn.toLowerCase().trim();
    
    // Update links state
    navigationLinks.forEach(link => link.classList.remove("active"));
    this.classList.add("active");

    // Update pages visibility
    let found = false;
    pages.forEach(page => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");
        found = true;
      } else {
        page.classList.remove("active");
      }
    });

    if (navbar) navbar.classList.remove("active");
    if (navToggler) navToggler.classList.remove("active");
    
    if (found) {
      window.scrollTo(0, 0);
    }
  });
}

// --- PORTFOLIO FILTER ---
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

if (select) select.addEventListener("click", function () { elementToggleFunc(this); });

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let val = this.innerText.toLowerCase();
    elementToggleFunc(select);
    filterFunc(val);
  });
}

const filterFunc = (val) => {
  filterItems.forEach(item => {
    if (val === "all" || val === item.dataset.category) item.classList.add("active");
    else item.classList.remove("active");
  });
}

let lastBtn = filterBtn[0];
filterBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    let val = this.innerText.toLowerCase();
    filterFunc(val);
    if (lastBtn) lastBtn.classList.remove("active");
    this.classList.add("active");
    lastBtn = this;
  });
});