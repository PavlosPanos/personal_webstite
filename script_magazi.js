// Bilingual Product Data Catalog
const products = [
  {
    id: 'bra-lace',
    name: 'Lace Delicate Bra',
    greekName: 'Δαντελένιο Σουτιέν Delicate',
    category: 'bras',
    brand: 'La Perla',
    price: 38.00,
    imageUrl: 'https://images.unsplash.com/photo-1610444583731-97217983ffef?auto=compress&cs=tinysrgb&w=600',
    sizes: ['75B', '80B', '85B', '90B', '75C', '80C', '85C']
  },
  {
    id: 'bra-silk',
    name: 'Silk Comfort Underwire',
    greekName: 'Μεταξωτό Σουτιέν Comfort',
    category: 'bras',
    brand: 'Intimissimi',
    price: 42.00,
    imageUrl: 'https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?auto=compress&cs=tinysrgb&w=600',
    sizes: ['75B', '80B', '85B', '80C', '85C']
  },
  {
    id: 'slip-lace',
    name: 'French Lace Slip',
    greekName: 'Δαντελένιο Σλιπ French',
    category: 'slips',
    brand: 'Victoria\'s Secret',
    price: 15.00,
    imageUrl: 'https://images.unsplash.com/photo-1616878438186-06103328e83b?auto=compress&cs=tinysrgb&w=600',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'slip-satin',
    name: 'Classic Satin Briefs',
    greekName: 'Σατέν Σλιπ Classic',
    category: 'slips',
    brand: 'Calvin Klein',
    price: 18.00,
    imageUrl: 'https://images.unsplash.com/photo-1608755673427-4a008c4e09f7?auto=compress&cs=tinysrgb&w=600',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'night-robe',
    name: 'Luxury Silk Kimono Robe',
    greekName: 'Μεταξωτή Ρόμπα Κιμονό',
    category: 'nightwear',
    brand: 'La Perla',
    price: 85.00,
    imageUrl: 'https://images.unsplash.com/photo-1549045337-9670077d206a?auto=compress&cs=tinysrgb&w=600',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'night-dress',
    name: 'Satin Sleep Chemise',
    greekName: 'Σατέν Νυχτικό Sleep',
    category: 'nightwear',
    brand: 'Hunkemöller',
    price: 49.00,
    imageUrl: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=compress&cs=tinysrgb&w=600',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'set-lace-gold',
    name: 'Boutique Lace Matching Set',
    greekName: 'Σετ Εσωρούχων Δαντέλα Gold',
    category: 'sets',
    brand: 'Agent Provocateur',
    price: 95.00,
    imageUrl: 'https://images.unsplash.com/photo-1608748010899-18f300247112?auto=compress&cs=tinysrgb&w=600',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'set-lounge',
    name: 'Cozy Satin Lounge Set',
    greekName: 'Σατέν Σετ Ύπνου & Lounge',
    category: 'sets',
    brand: 'Oysho',
    price: 65.00,
    imageUrl: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=compress&cs=tinysrgb&w=600',
    sizes: ['S', 'M', 'L', 'XL']
  }
];

// Active wishlist state
let wishlist = [];
let activeLang = 'el'; // default to Greek as requested

// DOM elements
const productGridEl = document.getElementById('productGrid');
const wishlistDrawer = document.getElementById('wishlistDrawer');
const wishlistItemsEl = document.getElementById('wishlistItems');
const wishlistCountEl = document.getElementById('wishlistCount');
const wishlistCountIconEl = document.getElementById('wishlistCountIcon');
const totalPriceEl = document.getElementById('totalPrice');
const burgerMenu = document.querySelector('.burger');
const navEl = document.querySelector('nav');

// --- 1. LANGUAGE SWITCH SYSTEM ---
function setLanguage(lang) {
  activeLang = lang;
  
  // Update translation attributes
  document.querySelectorAll('[data-el]').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.innerHTML = text;
      }
    }
  });

  // Toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Re-draw products with selected language names
  renderCatalog('all');
  updateWishlistUI();
}

// Attach listeners to language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    setLanguage(e.currentTarget.getAttribute('data-lang'));
  });
});

// --- 2. NAVIGATION ---
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  const target = document.getElementById(sectionId);
  if (target) target.classList.add('active');
  if (navEl.classList.contains('open')) navEl.classList.remove('open');
  
  document.querySelectorAll('nav ul li a').forEach(a => {
    if (a.getAttribute('onclick').includes(sectionId)) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
  window.scrollTo(0, 0);
}

if (burgerMenu) {
  burgerMenu.addEventListener('click', () => {
    navEl.classList.toggle('open');
  });
}

// --- 3. CATALOG ---
function renderCatalog(filter = 'all') {
  if (!productGridEl) return;
  productGridEl.innerHTML = '';
  
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);
    
  filteredProducts.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card scroll-reveal';
    const displayTitle = activeLang === 'el' ? p.greekName : p.name;
    const addBtnText = activeLang === 'el' ? 'Προσθηκη στη Λιστα' : 'Add to List';
    
    card.innerHTML = `
      <div class="product-img-box">
        <img src="${p.imageUrl}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-info">
        <span class="product-brand">${p.brand}</span>
        <h4 class="product-title">${displayTitle}</h4>
        <div class="product-footer">
          <span class="product-price">€${p.price.toFixed(2)}</span>
          <select class="size-select" id="size-${p.id}">
            ${p.sizes.map(s => `<option value="${s}">${s}</option>`).join('')}
          </select>
        </div>
        <button class="add-cart-btn" onclick="addToWishlist('${p.id}')">${addBtnText}</button>
      </div>
    `;
    productGridEl.appendChild(card);
  });
  
  // Re-run scroll animations bound to newly appended elements
  bindScrollReveal();

  document.querySelectorAll('.catalog-btn').forEach(btn => {
    if (btn.getAttribute('onclick').includes(filter)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// --- 4. WISHLIST ---
function toggleWishlistDrawer() {
  wishlistDrawer.classList.toggle('open');
}

function addToWishlist(productId) {
  const product = products.find(p => p.id === productId);
  const sizeSelect = document.getElementById(`size-${productId}`);
  const selectedSize = sizeSelect ? sizeSelect.value : product.sizes[0];
  
  const existingItem = wishlist.find(item => item.id === productId && item.size === selectedSize);
  
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    wishlist.push({
      id: product.id,
      name: product.name,
      greekName: product.greekName,
      price: product.price,
      imageUrl: product.imageUrl,
      size: selectedSize,
      qty: 1
    });
  }
  
  updateWishlistUI();
  wishlistDrawer.classList.add('open');
}

function removeFromWishlist(productId, size) {
  wishlist = wishlist.filter(item => !(item.id === productId && item.size === size));
  updateWishlistUI();
}

function updateWishlistUI() {
  if (!wishlistItemsEl) return;
  wishlistItemsEl.innerHTML = '';
  
  let totalItemsCount = 0;
  let totalPrice = 0;
  const deleteBtnText = activeLang === 'el' ? 'Διαγραφή' : 'Remove';
  
  wishlist.forEach(item => {
    totalItemsCount += item.qty;
    totalPrice += item.price * item.qty;
    
    const displayTitle = activeLang === 'el' ? item.greekName : item.name;
    const metaText = activeLang === 'el' ? `Μέγεθος: ${item.size} | Ποσότητα: ${item.qty}` : `Size: ${item.size} | Qty: ${item.qty}`;
    
    const cartItemEl = document.createElement('div');
    cartItemEl.className = 'cart-item';
    cartItemEl.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${displayTitle}</h4>
        <p class="cart-item-meta">${metaText}</p>
        <p class="cart-item-price">€${(item.price * item.qty).toFixed(2)}</p>
      </div>
      <button class="cart-item-remove-btn" onclick="removeFromWishlist('${item.id}', '${item.size}')">${deleteBtnText}</button>
    `;
    wishlistItemsEl.appendChild(cartItemEl);
  });
  
  if (wishlistCountEl) wishlistCountEl.innerText = totalItemsCount;
  if (wishlistCountIconEl) wishlistCountIconEl.innerText = totalItemsCount;
  if (totalPriceEl) totalPriceEl.innerText = `€${totalPrice.toFixed(2)}`;
}

// --- 5. WHATSAPP ENCODED MESSAGE COMPOSER ---
function sendWhatsAppInquiry() {
  if (wishlist.length === 0) {
    alert(activeLang === 'el' ? "Η λίστα σας είναι άδεια!" : "Your list is empty!");
    return;
  }
  
  const clientName = document.getElementById('clientName').value.trim();
  const clientPhone = document.getElementById('clientPhone').value.trim();
  
  if (!clientName || !clientPhone) {
    alert(activeLang === 'el' ? "Παρακαλώ συμπληρώστε τα στοιχεία σας." : "Please fill out your contact details.");
    return;
  }
  
  let message = activeLang === 'el' 
    ? `Γεια σας! Θα ήθελα να ρωτήσω για τη διαθεσιμότητα των παρακάτω εσωρούχων από το κατάστημα Χρυσάνθη:\n\n`
    : `Hello! I would like to inquire about the availability of the following lingerie items from Chrysanthi boutique:\n\n`;
  
  wishlist.forEach((item, index) => {
    const title = activeLang === 'el' ? item.greekName : item.name;
    const sizeLabel = activeLang === 'el' ? 'Μέγεθος' : 'Size';
    const qtyLabel = activeLang === 'el' ? 'Ποσότητα' : 'Qty';
    message += `${index + 1}. ${title} - ${sizeLabel}: ${item.size} - ${qtyLabel}: ${item.qty} (Total: €${(item.price * item.qty).toFixed(2)})\n`;
  });
  
  const totalVal = wishlist.reduce((sum, item) => sum + (item.price * item.qty), 0);
  message += activeLang === 'el' ? `\nΣυνολική Αξία: €${totalVal.toFixed(2)}` : `\nTotal Value: €${totalVal.toFixed(2)}`;
  message += `\n\nContact:\nName: ${clientName}\nPhone: ${clientPhone}`;
  
  const shopNumber = "302106912345"; 
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${shopNumber}&text=${encodedText}`;
  window.open(whatsappUrl, '_blank');
}

// --- 6. SIZE GUIDE MODAL ---
function toggleSizeGuide() {
  document.getElementById('sizeGuideModal').classList.toggle('open');
}

// --- 7. TESTIMONIALS SLIDESHOW ---
let testimonialIndex = 0;
function showNextTestimonial() {
  const slides = document.querySelectorAll('.testimonial-slide');
  if (slides.length === 0) return;
  
  slides.forEach(s => s.classList.remove('active'));
  testimonialIndex = (testimonialIndex + 1) % slides.length;
  slides[testimonialIndex].classList.add('active');
}
setInterval(showNextTestimonial, 4000); // cycle every 4s

// --- 8. BRANDS LIGHTBOX GALLERY ---
const galleries = {
  ck: [
    "https://images.unsplash.com/photo-1608755673427-4a008c4e09f7?auto=compress&cs=tinysrgb&w=800",
    "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=compress&cs=tinysrgb&w=800"
  ],
  vs: [
    "https://images.unsplash.com/photo-1616878438186-06103328e83b?auto=compress&cs=tinysrgb&w=800",
    "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=compress&cs=tinysrgb&w=800"
  ],
  intimissimi: [
    "https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?auto=compress&cs=tinysrgb&w=800",
    "https://images.unsplash.com/photo-1579294246879-e5a95f9c5d15?auto=compress&cs=tinysrgb&w=800"
  ],
  laperla: [
    "https://images.unsplash.com/photo-1610444583731-97217983ffef?auto=compress&cs=tinysrgb&w=800",
    "https://images.unsplash.com/photo-1549045337-9670077d206a?auto=compress&cs=tinysrgb&w=800"
  ],
  triumph: [
    "https://images.unsplash.com/photo-1608748010899-18f300247112?auto=compress&cs=tinysrgb&w=800"
  ]
};

let currentImgSet = [];
let currentImgIndex = 0;

function openBrandGallery(brandKey) {
  const images = galleries[brandKey];
  if (!images || images.length === 0) return;
  currentImgSet = images;
  currentImgIndex = 0;
  showLightbox();
}

function showLightbox() {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImage");
  if (!lightbox || !img) return;
  
  img.src = currentImgSet[currentImgIndex];
  lightbox.style.display = "block";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) lightbox.style.display = "none";
}

function nextImage(e) {
  if (e) e.stopPropagation();
  currentImgIndex = (currentImgIndex + 1) % currentImgSet.length;
  showLightbox();
}

function prevImage(e) {
  if (e) e.stopPropagation();
  currentImgIndex = (currentImgIndex - 1 + currentImgSet.length) % currentImgSet.length;
  showLightbox();
}

document.addEventListener("keydown", (e) => {
  const isOpen = document.getElementById("lightbox")?.style.display === "block";
  if (!isOpen) return;
  if (e.key === "ArrowRight") nextImage(e);
  if (e.key === "ArrowLeft") prevImage(e);
  if (e.key === "Escape") closeLightbox();
});

// --- 9. SCROLL REVEAL OBSERVER ---
function bindScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
}

// --- INITIALIZE ---
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('el'); // primary Greek
  showSection('home');
  renderCatalog('all');
});