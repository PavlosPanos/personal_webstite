// Show selected section
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

// Burger menu toggle
function toggleMenu() {
  const navList = document.querySelector('nav ul');
  navList.classList.toggle('show');
}

// Gallery image sets
const galleries = {
  exterior: [
    "website_images/exterior1.jpg",
    "website_images/exterior2.jpg"
  ],
  interior: [
    "website_images/interior1.jpg",
    "website_images/interior2.jpg"
  ]
};

// Brand image sets
const brandImages = {
  "Calvin Klein": ["website_images/ck1.jpg"],
  "Victoria's Secret": ["website_images/vs1.jpg"],
  "Intimissimi": ["website_images/int1.jpg"],
  "Tezenis": ["website_images/tez1.jpg"],
  "La Perla": ["website_images/lap1.jpg"],
  "Triumph": ["website_images/triumph1.jpg"],
  "Chantelle": ["website_images/chantelle1.jpg"],
  "Hunkemöller": ["website_images/hunkemoller1.jpg"],
  "Agent Provocateur": ["website_images/agent1.jpg"],
  "Oysho": ["website_images/oysho1.jpg"]
};

// Load selected gallery
function loadGallery(type) {
  const gallery = document.getElementById("galleryImages");
  gallery.innerHTML = '';
  galleries[type].forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    gallery.appendChild(img);
  });
  updateLightboxBindings();
}

// Load selected brand images
function loadBrand(brand) {
  const gallery = document.getElementById("brandGallery");
  gallery.innerHTML = '';
  brandImages[brand]?.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    gallery.appendChild(img);
  });
  updateLightboxBindings();
}

// Lightbox logic
let currentImageIndex = 0;
let currentImageSet = [];

function updateLightboxBindings() {
  const images = document.querySelectorAll('.gallery-grid img');
  currentImageSet = Array.from(images);
  currentImageSet.forEach((img, index) => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      openLightbox(index);
    });
  });
}

function openLightbox(index) {
  currentImageIndex = index;
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImage");
  img.src = currentImageSet[currentImageIndex].src;
  lightbox.style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImage(e) {
  e.stopPropagation();
  currentImageIndex = (currentImageIndex + 1) % currentImageSet.length;
  openLightbox(currentImageIndex);
}

function prevImage(e) {
  e.stopPropagation();
  currentImageIndex = (currentImageIndex - 1 + currentImageSet.length) % currentImageSet.length;
  openLightbox(currentImageIndex);
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  const isOpen = document.getElementById("lightbox").style.display === "block";
  if (!isOpen) return;

  if (e.key === "ArrowRight") nextImage(e);
  if (e.key === "ArrowLeft") prevImage(e);
  if (e.key === "Escape") closeLightbox();
});

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  showSection('home');
  loadGallery('exterior');
});