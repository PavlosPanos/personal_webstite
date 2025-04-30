function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
  }
  
  // Sample gallery images (you can replace with your own)
  const galleries = {
    exterior: [
      "https://images.pexels.com/photos/3965546/pexels-photo-3965546.jpeg",
      "https://images.pexels.com/photos/1457848/pexels-photo-1457848.jpeg"
    ],
    interior: [
      "https://images.pexels.com/photos/3965554/pexels-photo-3965554.jpeg",
      "https://images.pexels.com/photos/2698519/pexels-photo-2698519.jpeg"
    ]
  };
  
  function loadGallery(type) {
    const gallery = document.getElementById("galleryImages");
    gallery.innerHTML = '';
    galleries[type].forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      gallery.appendChild(img);
    });
  }
  
  const brandImages = {
    "Calvin Klein": ["https://via.placeholder.com/200x250?text=Calvin+Klein+1", "https://via.placeholder.com/200x250?text=Calvin+Klein+2"],
    "Victoria's Secret": ["https://via.placeholder.com/200x250?text=VS+1", "https://via.placeholder.com/200x250?text=VS+2"],
    "Intimissimi": ["https://via.placeholder.com/200x250?text=Intimissimi+1"],
    "Tezenis": ["https://via.placeholder.com/200x250?text=Tezenis+1"],
    "La Perla": ["https://via.placeholder.com/200x250?text=La+Perla+1"],
    "Triumph": ["https://via.placeholder.com/200x250?text=Triumph+1"],
    "Chantelle": ["https://via.placeholder.com/200x250?text=Chantelle+1"],
    "Hunkemöller": ["https://via.placeholder.com/200x250?text=Hunkemoller+1"],
    "Agent Provocateur": ["https://via.placeholder.com/200x250?text=Agent+1"],
    "Oysho": ["https://via.placeholder.com/200x250?text=Oysho+1"]
  };
  
  function loadBrand(brand) {
    const brandGallery = document.getElementById("brandGallery");
    brandGallery.innerHTML = '';
    if (brandImages[brand]) {
      brandImages[brand].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        brandGallery.appendChild(img);
      });
    }
  }
  
  // Default section on load
  document.addEventListener("DOMContentLoaded", () => {
    showSection('home');
    loadGallery('exterior');
  });