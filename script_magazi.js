// Local artwork used while a photo loads or whenever a remote photo is unavailable
const CAT_FALLBACK = {
  bras: 'magazi_images/bra.svg',
  slips: 'magazi_images/slip.svg',
  nightwear: 'magazi_images/nightwear.svg',
  sets: 'magazi_images/set.svg',
  homewear: 'magazi_images/homewear.svg'
};

// Bilingual Product Data Catalog
const products = [
  // --- Bras ---
  {
    id: 'bra-lace',
    name: 'Lace Delicate Bra',
    greekName: 'Δαντελένιο Σουτιέν Delicate',
    category: 'bras',
    brand: 'La Perla',
    price: 38.00,
    imageUrl: 'https://images.unsplash.com/photo-1610444583731-97217983ffef?auto=format&fit=crop&w=600&q=70',
    sizes: ['75B', '80B', '85B', '90B', '75C', '80C', '85C']
  },
  {
    id: 'bra-silk',
    name: 'Silk Comfort Underwire',
    greekName: 'Μεταξωτό Σουτιέν Comfort',
    category: 'bras',
    brand: 'Intimissimi',
    price: 42.00,
    imageUrl: 'https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?auto=format&fit=crop&w=600&q=70',
    sizes: ['75B', '80B', '85B', '80C', '85C']
  },
  {
    id: 'bra-tshirt',
    name: 'Smooth T-Shirt Push-Up Bra',
    greekName: 'Σουτιέν T-shirt Push-Up',
    category: 'bras',
    brand: 'Triumph',
    price: 36.00,
    imageUrl: 'magazi_images/bra.svg',
    sizes: ['70B', '75B', '80B', '85B', '75C', '80C']
  },
  {
    id: 'bra-bralette',
    name: 'Cotton Comfort Bralette',
    greekName: 'Βαμβακερό Μπραλέτ Comfort',
    category: 'bras',
    brand: 'Calvin Klein',
    price: 29.00,
    imageUrl: 'magazi_images/bra.svg',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'bra-strapless',
    name: 'Invisible Strapless Bra',
    greekName: 'Σουτιέν Στράπλες Invisible',
    category: 'bras',
    brand: 'Triumph',
    price: 44.00,
    imageUrl: 'magazi_images/bra.svg',
    sizes: ['75B', '80B', '85B', '75C', '80C', '85C']
  },
  // --- Slips / Briefs ---
  {
    id: 'slip-lace',
    name: 'French Lace Slip',
    greekName: 'Δαντελένιο Σλιπ French',
    category: 'slips',
    brand: 'Victoria\'s Secret',
    price: 15.00,
    imageUrl: 'https://images.unsplash.com/photo-1616878438186-06103328e83b?auto=format&fit=crop&w=600&q=70',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'slip-satin',
    name: 'Classic Satin Briefs',
    greekName: 'Σατέν Σλιπ Classic',
    category: 'slips',
    brand: 'Calvin Klein',
    price: 18.00,
    imageUrl: 'https://images.unsplash.com/photo-1608755673427-4a008c4e09f7?auto=format&fit=crop&w=600&q=70',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'slip-cotton-3pack',
    name: 'Cotton Briefs (3-Pack)',
    greekName: 'Βαμβακερά Σλιπ (Σετ 3 τεμ.)',
    category: 'slips',
    brand: 'Sloggi',
    price: 25.00,
    imageUrl: 'magazi_images/slip.svg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'slip-highwaist',
    name: 'High-Waist Shaping Brief',
    greekName: 'Ψηλόμεσο Σλιπ Σύσφιξης',
    category: 'slips',
    brand: 'Triumph',
    price: 22.00,
    imageUrl: 'magazi_images/slip.svg',
    sizes: ['M', 'L', 'XL', 'XXL']
  },
  // --- Nightwear ---
  {
    id: 'night-robe',
    name: 'Luxury Silk Kimono Robe',
    greekName: 'Μεταξωτή Ρόμπα Κιμονό',
    category: 'nightwear',
    brand: 'La Perla',
    price: 85.00,
    imageUrl: 'https://images.unsplash.com/photo-1549045337-9670077d206a?auto=format&fit=crop&w=600&q=70',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'night-dress',
    name: 'Satin Sleep Chemise',
    greekName: 'Σατέν Νυχτικό Sleep',
    category: 'nightwear',
    brand: 'Hunkemöller',
    price: 49.00,
    imageUrl: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=70',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'night-pyjama',
    name: 'Cotton Pyjama Set',
    greekName: 'Βαμβακερή Πιτζάμα Σετ',
    category: 'nightwear',
    brand: 'Oysho',
    price: 55.00,
    imageUrl: 'magazi_images/nightwear.svg',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'night-winter',
    name: 'Warm Fleece Nightgown',
    greekName: 'Ζεστό Χειμωνιάτικο Νυχτικό',
    category: 'nightwear',
    brand: 'Triumph',
    price: 39.00,
    imageUrl: 'magazi_images/nightwear.svg',
    sizes: ['M', 'L', 'XL', 'XXL']
  },
  // --- Sets ---
  {
    id: 'set-lace-gold',
    name: 'Boutique Lace Matching Set',
    greekName: 'Σετ Εσωρούχων Δαντέλα Gold',
    category: 'sets',
    brand: 'Agent Provocateur',
    price: 95.00,
    imageUrl: 'https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&w=600&q=70',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'set-lounge',
    name: 'Cozy Satin Lounge Set',
    greekName: 'Σατέν Σετ Ύπνου & Lounge',
    category: 'sets',
    brand: 'Oysho',
    price: 65.00,
    imageUrl: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&w=600&q=70',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'set-bridal',
    name: 'Bridal White Lace Set',
    greekName: 'Νυφικό Σετ Λευκή Δαντέλα',
    category: 'sets',
    brand: 'Intimissimi',
    price: 75.00,
    imageUrl: 'magazi_images/set.svg',
    sizes: ['S', 'M', 'L']
  },
  // --- Homewear ---
  {
    id: 'home-robe',
    name: 'Soft Cotton Bathrobe',
    greekName: 'Απαλό Βαμβακερό Μπουρνούζι',
    category: 'homewear',
    brand: 'Oysho',
    price: 65.00,
    imageUrl: 'magazi_images/homewear.svg',
    sizes: ['S/M', 'L/XL']
  },
  {
    id: 'home-velour',
    name: 'Velour Homewear Set',
    greekName: 'Βελουτέ Σετ Homewear',
    category: 'homewear',
    brand: 'Triumph',
    price: 59.00,
    imageUrl: 'magazi_images/homewear.svg',
    sizes: ['S', 'M', 'L', 'XL']
  }
];

// Generic bilingual descriptions per category (used when a product has no bespoke text)
const defaultDescriptions = {
  bras: {
    el: 'Σουτιέν εξαιρετικής ποιότητας με προσεγμένες ραφές και άνετη εφαρμογή για όλη την ημέρα. Διαθέσιμο σε διάφορα μεγέθη — ρωτήστε μας για δοκιμή στο κατάστημα.',
    en: 'High-quality bra with careful seams and all-day comfortable fit. Available in multiple sizes — visit us for a personal fitting.'
  },
  slips: {
    el: 'Άνετο σλιπ από απαλά υλικά που δεν διαγράφονται κάτω από τα ρούχα. Ιδανικό για καθημερινή χρήση.',
    en: 'Comfortable briefs in soft fabrics that stay invisible under clothing. Perfect for everyday wear.'
  },
  nightwear: {
    el: 'Νυχτικό από ποιοτικά υφάσματα για όμορφο και ξεκούραστο ύπνο, με κομψές λεπτομέρειες.',
    en: 'Sleepwear in quality fabrics for a beautiful, restful night, finished with elegant details.'
  },
  sets: {
    el: 'Ασορτί σετ εσωρούχων με κομψό σχεδιασμό — μια ολοκληρωμένη επιλογή για εσάς ή για δώρο.',
    en: 'Matching lingerie set with elegant design — a complete choice for yourself or as a gift.'
  },
  homewear: {
    el: 'Άνετο homewear για χαλαρές στιγμές στο σπίτι, από μαλακά υλικά που αγαπούν το δέρμα.',
    en: 'Cozy homewear for relaxed moments at home, in soft skin-loving fabrics.'
  }
};

// Active wishlist state (persisted in localStorage)
const IMG_FALLBACK = 'magazi_images/hero.svg';

function loadState(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw !== null ? JSON.parse(raw) : fallback;
  } catch (e) { return fallback; }
}
function saveState(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* private mode */ }
}

let wishlist = loadState('chr-wishlist', []);
let activeLang = loadState('chr-lang', 'el'); // default to Greek
let currentCurrency = loadState('chr-currency', 'EUR');
let discountPercent = 0;
let appliedPromoCode = "";
let currentCategory = 'all';

// Exchange rates & symbols
const currencyRates = { EUR: 1.0, USD: 1.12, GBP: 0.86 };
const currencySymbols = { EUR: '€', USD: '$', GBP: '£' };

// DOM elements
const productGridEl = document.getElementById('productGrid');
const wishlistDrawer = document.getElementById('wishlistDrawer');
const wishlistItemsEl = document.getElementById('wishlistItems');
const wishlistCountEl = document.getElementById('wishlistCount');
const wishlistCountIconEl = document.getElementById('wishlistCountIcon');
const totalPriceEl = document.getElementById('totalPrice');
const burgerMenu = document.getElementById('burgerBtn');
const navEl = document.getElementById('navMenuLinks');

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

  // Toggle active language button class
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Redraw products & cart details
  filterAndSortCatalog();
  updateWishlistUI();
  updateOpenStatus();
  saveState('chr-lang', lang);
  document.documentElement.lang = lang;
}

// Attach listeners to language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    setLanguage(e.currentTarget.getAttribute('data-lang'));
  });
});

// --- 2. MULTI-CURRENCY CONVERTER ---
function convertPrice(priceInEur) {
  const converted = priceInEur * currencyRates[currentCurrency];
  const symbol = currencySymbols[currentCurrency];
  if (currentCurrency === 'EUR') {
    return `${symbol}${converted.toFixed(2)}`;
  }
  return `${symbol}${converted.toFixed(2)}`;
}

window.changeCurrency = () => {
  currentCurrency = document.getElementById('currencySelect').value;
  saveState('chr-currency', currentCurrency);
  filterAndSortCatalog();
  updateWishlistUI();
};

// --- OPEN / CLOSED STATUS (from store hours) ---
// Mon(1)/Wed(3)/Sat(6): 09:00-15:00 | Tue(2)/Thu(4)/Fri(5): 09:00-14:00 & 17:00-21:00 | Sun: closed
function isStoreOpenNow() {
  const now = new Date();
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();
  const within = (a, b) => mins >= a && mins < b;
  if (day === 1 || day === 3 || day === 6) return within(540, 900);
  if (day === 2 || day === 4 || day === 5) return within(540, 840) || within(1020, 1260);
  return false;
}

function updateOpenStatus() {
  const badge = document.getElementById('openStatusBadge');
  if (!badge) return;
  const open = isStoreOpenNow();
  badge.textContent = open
    ? (activeLang === 'el' ? '● Ανοιχτά τώρα' : '● Open now')
    : (activeLang === 'el' ? '● Κλειστά τώρα' : '● Closed now');
  badge.classList.toggle('is-open', open);
  badge.classList.toggle('is-closed', !open);
}

// --- 3. PROMO CODE PROMOTIONS ---
window.applyPromoCode = () => {
  const code = document.getElementById('promoCode').value.trim().toUpperCase();
  const feedbackEl = document.getElementById('promoFeedback');
  if (!code) return;
  
  if (code === 'GOLDEN10') {
    discountPercent = 10;
    appliedPromoCode = code;
    feedbackEl.innerText = activeLang === 'el' ? "Έκπτωση 10% εφαρμόστηκε!" : "10% discount applied!";
    feedbackEl.className = "text-xs font-semibold mb-3 text-emerald-600";
  } else if (code === 'WELCOME20') {
    discountPercent = 20;
    appliedPromoCode = code;
    feedbackEl.innerText = activeLang === 'el' ? "Έκπτωση 20% εφαρμόστηκε!" : "20% discount applied!";
    feedbackEl.className = "text-xs font-semibold mb-3 text-emerald-600";
  } else {
    discountPercent = 0;
    appliedPromoCode = "";
    feedbackEl.innerText = activeLang === 'el' ? "Άκυρος κωδικός." : "Invalid code.";
    feedbackEl.className = "text-xs font-semibold mb-3 text-rose-500";
  }
  feedbackEl.classList.remove('hidden');
  updateWishlistUI();
};

// --- 4. NAVIGATION ---
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  const target = document.getElementById(sectionId);
  if (target) target.classList.add('active');
  if (navEl.classList.contains('open')) navEl.classList.remove('open');
  
  document.querySelectorAll('nav ul li a').forEach(a => {
    if (a.getAttribute('onclick') && a.getAttribute('onclick').includes(sectionId)) {
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

// --- 5. CATALOG SYSTEM (WITH SEARCH & SORTING) ---
window.renderCatalog = (category = 'all') => {
  currentCategory = category;
  filterAndSortCatalog();
};

window.filterAndSortCatalog = () => {
  if (!productGridEl) return;
  productGridEl.innerHTML = '';
  
  // Category Filter
  let filtered = currentCategory === 'all' 
    ? products 
    : products.filter(p => p.category === currentCategory);
    
  // Search Text matching
  const searchVal = document.getElementById('catalogSearch')?.value.toLowerCase().trim() || "";
  if (searchVal) {
    filtered = filtered.filter(p => {
      const title = (activeLang === 'el' ? p.greekName : p.name).toLowerCase();
      const brand = p.brand.toLowerCase();
      return title.includes(searchVal) || brand.includes(searchVal);
    });
  }

  // Sorting
  const sortVal = document.getElementById('catalogSort')?.value || "default";
  if (sortVal === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortVal === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortVal === 'name-asc') {
    filtered.sort((a, b) => {
      const nameA = (activeLang === 'el' ? a.greekName : a.name).toLowerCase();
      const nameB = (activeLang === 'el' ? b.greekName : b.name).toLowerCase();
      return nameA.localeCompare(nameB);
    });
  }

  // Build grid output
  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card scroll-reveal';
    const displayTitle = activeLang === 'el' ? p.greekName : p.name;
    const addBtnText = activeLang === 'el' ? 'Προσθηκη στη Λιστα' : 'Add to List';
    const priceStr = convertPrice(p.price);
    
    card.innerHTML = `
      <div class="product-img-box" onclick="openProductDetails('${p.id}')" style="cursor: pointer;">
        <img src="${p.imageUrl}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='${CAT_FALLBACK[p.category] || IMG_FALLBACK}';">
      </div>
      <div class="product-info">
        <span class="product-brand">${p.brand}</span>
        <h4 class="product-title" onclick="openProductDetails('${p.id}')" style="cursor: pointer;">${displayTitle}</h4>
        <div class="product-footer">
          <span class="product-price">${priceStr}</span>
          <select class="size-select" id="size-${p.id}">
            ${p.sizes.map(s => `<option value="${s}">${s}</option>`).join('')}
          </select>
        </div>
        <button class="add-cart-btn" onclick="addToWishlist('${p.id}')">${addBtnText}</button>
      </div>
    `;
    productGridEl.appendChild(card);
  });
  
  // Re-run scroll animations
  bindScrollReveal();

  // Active filter button styles
  document.querySelectorAll('.catalog-btn').forEach(btn => {
    if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(currentCategory)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
};

// --- 6. INTERACTIVE PRODUCT DETAILS MODAL ---
window.openProductDetails = (productId) => {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;
  
  const modalEl = document.getElementById('productDetailsModal');
  const contentEl = document.getElementById('productDetailsContent');
  if (!modalEl || !contentEl) return;
  
  const displayTitle = activeLang === 'el' ? p.greekName : p.name;
  
  const descriptions = {
    'bra-lace': {
      el: 'Ένα εξαιρετικό σουτιέν από κομψή γαλλική δαντέλα. Προσφέρει τέλειο κράτημα, φυσικό σχήμα και απαλή αίσθηση στο δέρμα, ιδανικό για ειδικές περιστάσεις αλλά και για καθημερινή πολυτέλεια.',
      en: 'An exquisite lace bra made from high-quality French lace. Offers excellent support, elegant shaping, and a soft feel against the skin, ideal for special occasions and daily luxury.'
    },
    'bra-silk': {
      el: 'Μεταξωτό σουτιέν χωρίς ραφές για απόλυτη άνεση όλη την ημέρα. Η εσωτερική επένδυση προσφέρει ελαφρύ κράτημα χωρίς να πιέζει, ενώ το φυσικό μετάξι επιτρέπει στο δέρμα να αναπνέει.',
      en: 'Seamless silk bra for ultimate comfort throughout the day. The inner lining offers lightweight support without pinching, while natural silk allows the skin to breathe.'
    },
    'slip-lace': {
      el: 'Δαντελένιο σλιπ γαλλικού σχεδιασμού με χαμηλό κόψιμο. Διαθέτει διάφανη δαντέλα στις άκρες που δεν διαγράφει κάτω από τα ρούχα, συνδυάζοντας την άνεση με τον αισθησιασμό.',
      en: 'French design lace slip with a low rise. Features sheer lace edges that lie flat against the skin, invisibly blending comfort with sensuality.'
    },
    'slip-satin': {
      el: 'Κλασικό σατέν σλιπ από ελαστικό σατέν ύφασμα. Προσφέρει κομψή γραμμή, λεία επιφάνεια και απαλή εφαρμογή που αγκαλιάζει το σώμα με φυσικό τρόπο.',
      en: 'Classic satin briefs made from stretch satin fabric. Offers a sleek silhouette, smooth surface, and a soft fit that hugs the body naturally.'
    },
    'night-robe': {
      el: 'Πολυτελής ρόμπα κιμονό από 100% φυσικό μετάξι με φαρδιά μανίκια και ζώνη στη μέση. Μια διαχρονική προσθήκη στη συλλογή σας που προσφέρει κομψότητα και αίσθηση χαλάρωσης στο σπίτι.',
      en: 'Luxury kimono robe made of 100% natural silk with wide sleeves and a tie belt. A timeless addition to your collection that delivers elegance and relaxation at home.'
    },
    'night-dress': {
      el: 'Σατέν νυχτικό σε γραμμή slip με ρυθμιζόμενες τιράντες και λεπτομέρειες δαντέλας στο ντεκολτέ. Ρέει απαλά στο σώμα, προσφέροντας έναν άνετο και κομψό ύπνο.',
      en: 'Satin slip nightdress with adjustable straps and delicate lace accents at the neckline. Flows gently over the body, ensuring a comfortable and chic sleep.'
    },
    'set-lace-gold': {
      el: 'Σετ εσωρούχων με χρυσές λεπτομέρειες, αποτελούμενο από σουτιέν και αντίστοιχο σλιπ. Ένας κομψός συνδυασμός με μοναδικό κέντημα που μαγνητίζει τα βλέμματα.',
      en: 'Lingerie set with gold accents, comprising a matching bra and slip. An elegant combination featuring unique embroidery that captures attention.'
    },
    'set-lounge': {
      el: 'Σετ lounge που περιλαμβάνει σατέν πουκάμισο με κουμπιά και άνετο σορτς. Ιδανικό για τις χαλαρές στιγμές στο σπίτι ή ως κομψό sleepwear.',
      en: 'Lounge set featuring a button-up satin shirt and matching relaxed shorts. Perfect for unwinding at home or as stylish sleepwear.'
    }
  };
  
  const desc = descriptions[p.id]
    ? descriptions[p.id][activeLang]
    : (defaultDescriptions[p.category] ? defaultDescriptions[p.category][activeLang] : '');
  const priceFormatted = convertPrice(p.price);
  
  contentEl.innerHTML = `
    <div class="details-grid">
      <div class="details-img-box">
        <img src="${p.imageUrl}" alt="${p.name}" onerror="this.onerror=null;this.src='${CAT_FALLBACK[p.category] || IMG_FALLBACK}';">
      </div>
      <div class="details-info-box">
        <span class="product-brand" style="font-size:0.7rem;">${p.brand}</span>
        <h3 class="product-title" style="font-size:1.6rem; margin: 5px 0;">${displayTitle}</h3>
        <p class="details-price text-2xl font-bold" style="color: var(--color-rose); margin-bottom: 15px;">${priceFormatted}</p>
        
        <p class="details-desc text-sm" style="color:#57534e; line-height: 1.6; margin-bottom: 20px;">${desc}</p>
        
        <div class="details-spec border-t border-espresso-800/10 pt-4 mb-5">
          <p class="text-xs text-espresso-400"><strong>${activeLang === 'el' ? 'Φροντίδα:' : 'Care Instructions:'}</strong> ${activeLang === 'el' ? 'Πλύσιμο στο χέρι, όχι λευκαντικό, στέγνωμα σε σκιερό μέρος.' : 'Hand wash only, do not bleach, dry in shade.'}</p>
          <p class="text-xs text-espresso-400 mt-1"><strong>${activeLang === 'el' ? 'Υλικά:' : 'Materials:'}</strong> ${p.category === 'nightwear' || p.id === 'bra-silk' ? (activeLang === 'el' ? '100% Μετάξι, λεπτομέρειες δαντέλας' : '100% Silk, lace details') : (activeLang === 'el' ? '85% Πολυαμίδιο, 15% Ελαστάνη' : '85% Polyamide, 15% Elastane')}</p>
        </div>
        
        <div class="flex gap-3 items-center">
          <div style="flex: 1;">
            <select class="size-select text-sm" id="detail-size-${p.id}" style="width: 100%; height: 42px;">
              ${p.sizes.map(s => `<option value="${s}">${s}</option>`).join('')}
            </select>
          </div>
          <button class="add-cart-btn" onclick="addToWishlistFromDetails('${p.id}')" style="flex: 2; height: 42px; margin-top:0;">
            ${activeLang === 'el' ? 'Προσθήκη στη Λίστα' : 'Add to List'}
          </button>
        </div>
      </div>
    </div>
  `;
  
  modalEl.classList.add('open');
};

window.closeProductDetails = () => {
  document.getElementById('productDetailsModal').classList.remove('open');
};

window.addToWishlistFromDetails = (productId) => {
  const select = document.getElementById(`detail-size-${productId}`);
  const selectedSize = select ? select.value : 'S';
  
  // Set the catalog select element value so addToWishlist processes it correctly
  const catSelect = document.getElementById(`size-${productId}`);
  if (catSelect) {
    catSelect.value = selectedSize;
  }
  
  addToWishlist(productId);
  closeProductDetails();
};

// --- 7. WISHLIST ---
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
  showToast(activeLang === 'el' ? 'Προστέθηκε στη λίστα σας ♥' : 'Added to your list ♥');
}

function removeFromWishlist(productId, size) {
  wishlist = wishlist.filter(item => !(item.id === productId && item.size === size));
  updateWishlistUI();
}

// --- TOAST NOTIFICATIONS ---
let toastTimer = null;
function showToast(msg) {
  let toast = document.getElementById('chrToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'chrToast';
    toast.className = 'chr-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function updateWishlistUI() {
  saveState('chr-wishlist', wishlist);
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
    const priceFormatted = convertPrice(item.price * item.qty);

    const cartItemEl = document.createElement('div');
    cartItemEl.className = 'cart-item';
    cartItemEl.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}" class="cart-item-img" onerror="this.onerror=null;this.src='${CAT_FALLBACK[products.find(p => p.id === item.id)?.category] || IMG_FALLBACK}';">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${displayTitle}</h4>
        <p class="cart-item-meta">${metaText}</p>
        <p class="cart-item-price">${priceFormatted}</p>
      </div>
      <button class="cart-item-remove-btn" onclick="removeFromWishlist('${item.id}', '${item.size}')">${deleteBtnText}</button>
    `;
    wishlistItemsEl.appendChild(cartItemEl);
  });
  
  // Calculate discount
  let finalPrice = totalPrice;
  if (discountPercent > 0) {
    finalPrice = totalPrice * (1 - discountPercent / 100);
  }

  if (wishlistCountEl) wishlistCountEl.innerText = totalItemsCount;
  if (wishlistCountIconEl) wishlistCountIconEl.innerText = totalItemsCount;
  
  if (totalPriceEl) {
    if (discountPercent > 0) {
      totalPriceEl.innerHTML = `<span style="text-decoration: line-through; opacity:0.5; margin-right: 5px;">${convertPrice(totalPrice)}</span> <span class="text-emerald-600">${convertPrice(finalPrice)}</span>`;
    } else {
      totalPriceEl.innerText = convertPrice(totalPrice);
    }
  }
}

// --- 8. WHATSAPP ENCODED MESSAGE COMPOSER ---
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
    message += `${index + 1}. ${title} - ${sizeLabel}: ${item.size} - ${qtyLabel}: ${item.qty} (${convertPrice(item.price * item.qty)})\n`;
  });
  
  const totalVal = wishlist.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let finalVal = totalVal;
  if (discountPercent > 0) {
    finalVal = totalVal * (1 - discountPercent / 100);
  }

  message += activeLang === 'el' ? `\nΣυνολική Αξία: ${convertPrice(totalVal)}` : `\nTotal Value: ${convertPrice(totalVal)}`;
  if (discountPercent > 0) {
    message += activeLang === 'el' ? `\nΈκπτωση (${appliedPromoCode}): -${discountPercent}%` : `\nDiscount Code (${appliedPromoCode}): -${discountPercent}%`;
    message += activeLang === 'el' ? `\nΤελική Αξία: ${convertPrice(finalVal)}` : `\nFinal Value: ${convertPrice(finalVal)}`;
  }

  message += `\n\nContact:\nName: ${clientName}\nPhone: ${clientPhone}`;
  
  const shopNumber = "302106912345"; 
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${shopNumber}&text=${encodedText}`;
  window.open(whatsappUrl, '_blank');
}

// --- 9. SIZE GUIDE & BRA SIZE CALCULATOR ---
function toggleSizeGuide() {
  document.getElementById('sizeGuideModal').classList.toggle('open');
}

window.calculateSize = () => {
  const underbust = parseFloat(document.getElementById('calcUnderbust').value);
  const overbust = parseFloat(document.getElementById('calcOverbust').value);
  const resultEl = document.getElementById('calcResult');
  
  if (!underbust || !overbust) {
    resultEl.innerText = activeLang === 'el' ? "Παρακαλώ συμπληρώστε και τα δύο πεδία." : "Please fill out both fields.";
    resultEl.style.display = "block";
    return;
  }
  
  let band = 75;
  if (underbust >= 63 && underbust <= 67) band = 65;
  else if (underbust >= 68 && underbust <= 72) band = 70;
  else if (underbust >= 73 && underbust <= 77) band = 75;
  else if (underbust >= 78 && underbust <= 82) band = 80;
  else if (underbust >= 83 && underbust <= 87) band = 85;
  else if (underbust >= 88 && underbust <= 92) band = 90;
  else if (underbust >= 93 && underbust <= 97) band = 95;
  else if (underbust > 97) band = 100;
  else band = 60;
  
  const diff = overbust - underbust;
  let cup = 'B';
  if (diff < 12) cup = 'A';
  else if (diff >= 12 && diff < 14) cup = 'B';
  else if (diff >= 14 && diff < 16) cup = 'C';
  else if (diff >= 16 && diff < 18) cup = 'D';
  else if (diff >= 18 && diff < 20) cup = 'E';
  else if (diff >= 20) cup = 'F';
  
  const usBand = band - 40; 
  const sizeEU = `${band}${cup}`;
  const sizeUS = `${usBand}${cup}`;
  
  const textEl = activeLang === 'el'
    ? `Προτεινόμενο Μέγεθος: EU ${sizeEU} (US/UK ${sizeUS})`
    : `Recommended Size: EU ${sizeEU} (US/UK ${sizeUS})`;
    
  resultEl.innerText = textEl;
  resultEl.style.display = "block";
};

// --- 10. TESTIMONIALS SLIDESHOW ---
let testimonialIndex = 0;
function showNextTestimonial() {
  const slides = document.querySelectorAll('.testimonial-slide');
  if (slides.length === 0) return;
  
  slides.forEach(s => s.classList.remove('active'));
  testimonialIndex = (testimonialIndex + 1) % slides.length;
  slides[testimonialIndex].classList.add('active');
}
setInterval(showNextTestimonial, 4500); // cycle every 4.5s

// --- 11. BRANDS LIGHTBOX GALLERY ---
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
  
  img.onerror = () => { img.onerror = null; img.src = IMG_FALLBACK; };
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
  if (isOpen) {
    if (e.key === "ArrowRight") nextImage(e);
    if (e.key === "ArrowLeft") prevImage(e);
    if (e.key === "Escape") { closeLightbox(); return; }
  }
  if (e.key === "Escape") {
    // Close any open overlay
    document.getElementById('productDetailsModal')?.classList.remove('open');
    document.getElementById('sizeGuideModal')?.classList.remove('open');
    wishlistDrawer?.classList.remove('open');
    navEl?.classList.remove('open');
  }
});

// Swipe navigation for the lightbox (mobile)
(function initLightboxSwipe() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  let startX = null;
  lightbox.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) {
      e.stopPropagation();
      dx < 0 ? nextImage(e) : prevImage(e);
    }
    startX = null;
  });
})();

// Close modals when clicking the dark backdrop
['productDetailsModal', 'sizeGuideModal'].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('click', (e) => {
      if (e.target === el) el.classList.remove('open');
    });
  }
});

// --- 12. SCROLL REVEAL OBSERVER ---
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
  // Restore saved currency in the dropdown
  const currencySelect = document.getElementById('currencySelect');
  if (currencySelect && currencyRates[currentCurrency]) currencySelect.value = currentCurrency;

  setLanguage(activeLang); // restore saved language (default Greek)
  showSection('home');
  filterAndSortCatalog();
  updateWishlistUI();
  updateOpenStatus();
  setInterval(updateOpenStatus, 60000); // refresh badge every minute
});