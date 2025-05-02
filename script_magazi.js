// Show section when menu item is clicked
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

// Toggle mobile menu
function toggleMenu() {
  const navList = document.querySelector('nav ul');
  navList.classList.toggle('show');
}

// Define galleries with image paths
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

// Define brand image sets
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

// Load images into gallery section
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

// Load brand images into brandGallery
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

// ===== LIGHTBOX FUNCTIONALITY =====

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
  document.getElementById("lightboxImage").src = currentImageSet[index].src;
  document.getElementById("lightbox").style.display = "block";
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

// Initialize default state when page loads
document.addEventListener("DOMContentLoaded", () => {
  showSection('home');
  loadGallery('exterior');
});