/* ===== Yacmina Brand — App Core ===== */

const STORAGE_KEYS = {
  PRODUCTS: 'yacmina_products',
  CART: 'yacmina_cart',
  ORDERS: 'yacmina_orders',
  ADMIN_AUTH: 'yacmina_admin_auth'
};

const DELIVERY_FEE = 7;

/* ---------- Default Seed Products ---------- */
const DEFAULT_PRODUCTS = [
  {
    id: 'p1',
    title: 'Essential Oversized Tee',
    description: 'Heavyweight cotton oversized tee with dropped shoulders. A signature Yacmina staple.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
    stock: 25,
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p2',
    title: 'Minimal Cargo Pants',
    description: 'Tapered cargo trousers in technical fabric. Clean lines, utility pockets, premium finish.',
    price: 159,
    image: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop',
    stock: 18,
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p3',
    title: 'Structured Bomber Jacket',
    description: 'Architectural bomber with matte finish and ribbed cuffs. Built for cold city nights.',
    price: 249,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
    stock: 10,
    sizes: ['M', 'L', 'XL']
  },
  {
    id: 'p4',
    title: 'Signature Beige Hoodie',
    description: 'Brushed fleece hoodie in signature beige, embroidered Yacmina wordmark.',
    price: 129,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
    stock: 30,
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p5',
    title: 'Tailored Wide Trousers',
    description: 'Flowing wide-leg trousers with a tailored waistband. Effortless minimal silhouette.',
    price: 139,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=800&auto=format&fit=crop',
    stock: 14,
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'p6',
    title: 'Premium Knit Sweater',
    description: 'Ribbed knit sweater in heavyweight cotton blend. Understated luxury layering piece.',
    price: 119,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
    stock: 0,
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p7',
    title: 'Boxy Denim Jacket',
    description: 'Washed denim jacket with a boxy fit and dropped shoulder seams.',
    price: 179,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=800&auto=format&fit=crop',
    stock: 12,
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p8',
    title: 'Track Pants — Stripe',
    description: 'Classic three-stripe track pants in soft technical jersey. Sport luxe essential.',
    price: 99,
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=800&auto=format&fit=crop',
    stock: 22,
    sizes: ['S', 'M', 'L', 'XL']
  }
];

/* ---------- Storage Helpers ---------- */
function getProducts() {
  const raw = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
  if (!raw) {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(DEFAULT_PRODUCTS));
    return DEFAULT_PRODUCTS;
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_PRODUCTS;
  }
}

function saveProducts(products) {
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
}

function getCart() {
  const raw = localStorage.getItem(STORAGE_KEYS.CART);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  updateCartCount();
}

function getOrders() {
  const raw = localStorage.getItem(STORAGE_KEYS.ORDERS);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function saveOrders(orders) {
  localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
}

/* ---------- Cart Operations ---------- */
function addToCart(productId, size) {
  const products = getProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return false;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId && item.size === size);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      size: size,
      qty: 1
    });
  }

  saveCart(cart);
  return true;
}

function removeFromCart(productId, size) {
  let cart = getCart();
  cart = cart.filter(item => !(item.id === productId && item.size === size));
  saveCart(cart);
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartCount() {
  const counters = document.querySelectorAll('.cart-count');
  const count = getCartCount();
  counters.forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

/* ---------- UI Helpers ---------- */
function formatPrice(value) {
  return value.toFixed(2) + ' DT';
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- Mobile Nav ---------- */
function initMobileNav() {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
}

/* ---------- Init on every page ---------- */
document.addEventListener('DOMContentLoaded', () => {
  getProducts(); // ensure seeded
  updateCartCount();
  initMobileNav();
});