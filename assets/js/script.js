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

// --- SCROLL REVEAL ANIMATOR ---
const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    observer.observe(el);
  });
};

// --- PARTICLE BACKGROUND ENGINE ---
const canvas = document.getElementById('particle-canvas');
let ctx = null;
let particles = [];
const particleCount = 40;
const mouse = { x: null, y: null, radius: 120 };

window.addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

class Particle {
  constructor() {
    this.x = Math.random() * (canvas ? canvas.width : window.innerWidth);
    this.y = Math.random() * (canvas ? canvas.height : window.innerHeight);
    this.size = Math.random() * 2 + 1;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = (Math.random() * 15) + 5;
    this.color = 'rgba(34, 211, 238, 0.25)';
  }
  draw() {
    if (!ctx) return;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  update() {
    if (!canvas) return;
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < mouse.radius) {
      let forceDirectionX = dx / distance;
      let forceDirectionY = dy / distance;
      let force = (mouse.radius - distance) / mouse.radius;
      this.x -= forceDirectionX * force * this.density;
      this.y -= forceDirectionY * force * this.density;
    } else {
      if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 15;
      if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 15;
    }
  }
}

function initParticles() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext('2d');
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function animateParticles() {
  if (!canvas || !ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].draw();
    particles[i].update();
  }
  connectParticles();
  requestAnimationFrame(animateParticles);
}

function connectParticles() {
  if (!ctx) return;
  for (let a = 0; a < particles.length; a++) {
    for (let b = a; b < particles.length; b++) {
      let dx = particles[a].x - particles[b].x;
      let dy = particles[a].y - particles[b].y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 110) {
        ctx.strokeStyle = `rgba(34, 211, 238, ${0.15 - (dist / 110) * 0.15})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
      }
    }
  }
}

if (canvas) {
  initParticles();
  animateParticles();
  window.addEventListener('resize', initParticles);
}

// --- MULTI-LANGUAGE TRANSLATOR ---
const langBtns = document.querySelectorAll("[data-lang-btn]");

const setLanguage = (lang) => {
  document.querySelectorAll("[data-en]").forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.innerHTML = text; 
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

const savedLang = localStorage.getItem('pref-lang') || 'en';
setLanguage(savedLang);

// --- AJAX MODAL LOADER ---
const projectModal = document.getElementById('project-modal');
const modalContentArea = document.getElementById('modal-content-area');
const closeProjectModal = document.getElementById('close-project-modal');

const showModalLoader = () => {
  if (!modalContentArea || !projectModal) return;
  modalContentArea.innerHTML = `
    <div class="loader">
      <div class="spinner"></div>
      <p style="text-align: center; color: var(--accent-cyan); font-family: var(--ff-space); font-size: 13px;">Retrieving research report...</p>
    </div>
  `;
  projectModal.classList.add('active');
};

const loadContentIntoModal = (url) => {
  showModalLoader();
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("Scientific file missing");
      return res.text();
    })
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const container = doc.querySelector('.project-container') || 
                        doc.querySelector('.post-container') || 
                        doc.querySelector('article');
                        
      if (container) {
        const backBtn = container.querySelector('.back-btn');
        if (backBtn) backBtn.remove();
        
        modalContentArea.innerHTML = container.innerHTML;
      } else {
        modalContentArea.innerHTML = `<p style="padding: 40px; text-align: center; color: #ef4444;">Failed to decode research block.</p>`;
      }
    })
    .catch(err => {
      console.error(err);
      modalContentArea.innerHTML = `<p style="padding: 40px; text-align: center; color: #ef4444;">Error accessing research documents.</p>`;
    });
};

const bindModalTriggers = () => {
  document.querySelectorAll('.project-list a, .blog-posts-list a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href.includes('.html') || href.startsWith('.') || href.includes('/projects/') || href.includes('/blog/'))) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        loadContentIntoModal(href);
      });
    }
  });
};

if (closeProjectModal) {
  closeProjectModal.addEventListener('click', () => {
    projectModal.classList.remove('active');
    modalContentArea.innerHTML = '';
  });
}
if (projectModal) {
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      projectModal.classList.remove('active');
      modalContentArea.innerHTML = '';
    }
  });
}

// --- ARTICLE TABS NAVIGATION ---
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const dataEn = this.getAttribute('data-en');
    if (!dataEn) return;
    
    const targetPage = dataEn.toLowerCase().trim();
    
    navigationLinks.forEach(link => link.classList.remove("active"));
    this.classList.add("active");

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

// --- INTERACTIVE PIANO ---
let audioCtx = null;
const playNote = (frequency) => {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.type = 'triangle'; 
    osc.frequency.value = frequency;
    
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.25, audioCtx.currentTime + 0.03); 
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.7); 
    
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.7);
  } catch (err) {
    console.error("Audio Context error: ", err);
  }
};

const noteFrequencies = {
  'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'D#4': 311.13, 'E4': 329.63,
  'F4': 349.23, 'F#4': 369.99, 'G4': 392.00, 'G#4': 415.30, 'A4': 440.00,
  'A#4': 466.16, 'B4': 493.88, 'C5': 523.25, 'C#5': 554.37, 'D5': 587.33,
  'D#5': 622.25, 'E5': 659.25, 'F5': 698.46, 'F#5': 739.99, 'G5': 783.99
};

const keyMapping = {
  'a': 'C4', 'w': 'C#4', 's': 'D4', 'e': 'D#4', 'd': 'E4', 'f': 'F4', 't': 'F#4',
  'g': 'G4', 'y': 'G#4', 'h': 'A4', 'u': 'A#4', 'j': 'B4', 'k': 'C5', 'o': 'C#5',
  'l': 'D5', 'p': 'D#5', ';': 'E5'
};

const initPiano = () => {
  const keys = document.querySelectorAll('.piano-key');
  keys.forEach(key => {
    key.addEventListener('mousedown', () => {
      const note = key.dataset.note;
      if (note && noteFrequencies[note]) {
        playNote(noteFrequencies[note]);
        key.classList.add('active');
      }
    });
    key.addEventListener('mouseup', () => key.classList.remove('active'));
    key.addEventListener('mouseleave', () => key.classList.remove('active'));
  });
  
  window.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    const note = keyMapping[e.key.toLowerCase()];
    if (note) {
      const keyEl = document.querySelector(`.piano-key[data-note="${note}"]`);
      if (keyEl) {
        playNote(noteFrequencies[note]);
        keyEl.classList.add('active');
      }
    }
  });
  window.addEventListener('keyup', (e) => {
    const note = keyMapping[e.key.toLowerCase()];
    if (note) {
      const keyEl = document.querySelector(`.piano-key[data-note="${note}"]`);
      if (keyEl) keyEl.classList.remove('active');
    }
  });
};

// --- CHESS PUZZLE ---
const initChess = () => {
  const boardEl = document.getElementById('chess-board');
  if (!boardEl) return;
  
  const boardState = Array(8).fill(null).map(() => Array(8).fill(null));
  
  boardState[0][0] = { symbol: '♜', side: 'black', type: 'r' };
  boardState[0][5] = { symbol: '♜', side: 'black', type: 'r' };
  boardState[0][6] = { symbol: '♚', side: 'black', type: 'k' };
  
  for(let col=0; col<8; col++) {
    if(col !== 3 && col !== 4) {
      boardState[1][col] = { symbol: '♟', side: 'black', type: 'p' };
    }
  }
  
  boardState[3][4] = { symbol: '♕', side: 'white', type: 'q' }; // e5
  boardState[5][2] = { symbol: '♗', side: 'white', type: 'b' }; // c3
  
  for(let col=0; col<8; col++) {
    if(col !== 3 && col !== 4) {
      boardState[6][col] = { symbol: '♙', side: 'white', type: 'p' };
    }
  }
  boardState[7][6] = { symbol: '♔', side: 'white', type: 'k' };
  
  let selectedCell = null;
  const statusMsg = document.getElementById('chess-status-msg');
  
  const drawBoard = () => {
    boardEl.innerHTML = '';
    for(let r=0; r<8; r++) {
      for(let c=0; c<8; c++) {
        const cell = document.createElement('div');
        cell.className = `chess-cell ${(r+c)%2 === 0 ? 'light' : 'dark'}`;
        cell.dataset.row = r;
        cell.dataset.col = c;
        
        const piece = boardState[r][c];
        if (piece) {
          cell.innerText = piece.symbol;
          cell.dataset.side = piece.side;
        }
        if (selectedCell && selectedCell.r === r && selectedCell.c === c) {
          cell.classList.add('selected');
        }
        if (selectedCell && selectedCell.r === 3 && selectedCell.c === 4 && r === 1 && c === 6) {
          cell.classList.add('target-highlight');
        }
        if (piece && piece.side === 'black' && piece.type === 'k' && boardState[1][6] && boardState[1][6].type === 'q') {
          cell.classList.add('checkmate-red');
        }
        cell.addEventListener('click', () => handleCellClick(r, c));
        boardEl.appendChild(cell);
      }
    }
  };
  
  const handleCellClick = (r, c) => {
    const piece = boardState[r][c];
    if (boardState[1][6] && boardState[1][6].type === 'q') return;
    
    if (selectedCell) {
      const fromR = selectedCell.r;
      const fromC = selectedCell.c;
      
      if (fromR === 3 && fromC === 4 && r === 1 && c === 6) {
        boardState[1][6] = boardState[3][4];
        boardState[3][4] = null;
        selectedCell = null;
        drawBoard();
        if (statusMsg) {
          statusMsg.innerText = "Checkmate! Queen to g7, supported by the Bishop on c3! 🎉";
          statusMsg.style.color = "#10b981";
        }
      } else {
        selectedCell = null;
        drawBoard();
        if (statusMsg) {
          statusMsg.innerText = "Try again! Look for a direct checkmate in one move.";
          statusMsg.style.color = "#ef4444";
        }
      }
    } else {
      if (piece && piece.side === 'white') {
        selectedCell = { r, c };
        drawBoard();
        if (statusMsg) {
          statusMsg.innerText = "Piece selected. Click g7 to checkmate.";
          statusMsg.style.color = "var(--accent-cyan)";
        }
      }
    }
  };
  
  drawBoard();
};

// --- SENSORY WINE LOG FILTERS ---
const initWineLog = () => {
  const searchInput = document.getElementById('wine-search');
  const tableRows = document.querySelectorAll('.wine-table tbody tr');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    tableRows.forEach(row => {
      const text = row.innerText.toLowerCase();
      row.style.display = text.includes(query) ? '' : 'none';
    });
  });
};

// --- CONTACT FORM FEEDBACK ---
const initContactForm = () => {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const alertEl = document.createElement('div');
    alertEl.className = 'alert-popup';
    alertEl.innerHTML = `<ion-icon name="checkmark-circle-outline" style="font-size: 20px;"></ion-icon> Message sent successfully!`;
    document.body.appendChild(alertEl);
    
    setTimeout(() => alertEl.classList.add('show'), 100);
    setTimeout(() => {
      alertEl.classList.remove('show');
      setTimeout(() => alertEl.remove(), 400);
    }, 3000);
    form.reset();
  });
};

// --- INITIALIZE ALL ---
document.addEventListener("DOMContentLoaded", () => {
  bindModalTriggers();
  initPiano();
  initChess();
  initWineLog();
  initContactForm();
  initScrollReveal(); 
});