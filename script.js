/* ==========================================================
   RYFT SMP SHOP CONFIG
   Edit this section to change your server details and prices.
   ========================================================== */
const shopConfig = {
  /*
   * TEBEX CONNECTION
   * --------------------------------------------------------
   * For a real custom-site integration, keep Tebex credentials on your backend.
   * Never put a Tebex private key/secret in this browser file.
   * Add your public store URL here for documentation/buttons if desired.
   */
  tebex: {
    storeUrl: 'https://yourstore.tebex.io',
    connected: false
  },

  /*
   * DISCOUNT + PARTNER CODES
   * --------------------------------------------------------
   * Add/edit codes here. Codes are case-insensitive on the shop.
   *
   * Discount code example:
   *   RYFT10: { type: 'discount', discountType: 'percent', value: 10, description: '10% off' }
   *
   * Partner code example:
   *   CREATORYFT: { type: 'partner', partner: 'CreatorRyft', discountType: 'percent', value: 10, description: '10% off with CreatorRyft' }
   *
   * Supported discountType values: 'percent' or 'fixed'.
   * Usage controls: maxRedemptions (null = unlimited), expiresAt (null = never expires).
   * Redemption counts are stored in this browser for the frontend demo.
   * NOTE: These browser-side codes are for the storefront demo. For real payments,
   * validate the code and final price on your payment/backend system too.
   */
  promoCodes: {
    RYFT10: { type: 'discount', discountType: 'percent', value: 10, description: '10% off your order', maxRedemptions: 100, expiresAt: '2026-12-31T23:59:59' },
    WELCOME5: { type: 'discount', discountType: 'fixed', value: 5, description: '$5 off your order', maxRedemptions: 50, expiresAt: null },
    CREATORYFT: { type: 'partner', partner: 'CreatorRyft', discountType: 'percent', value: 10, description: '10% off with CreatorRyft', maxRedemptions: 25, expiresAt: '2026-12-31T23:59:59' }
  },

  serverIp: 'play.ryftsmp.com',
  currency: 'USD',
  currencySymbol: '$',

  // Prices + perks supplied for Ryft SMP.
  products: [
    {
      id: 'vip',
      name: 'VIP',
      category: 'ranks',
      price: 5,
      icon: '💎',
      iconClass: 'icon-pink',
      badge: 'RANK',
      description: 'Your first upgrade on Ryft SMP.',
      features: [
        '/anvil',
        '/craft',
        '/suicide',
        '+1 Home',
        '+1 Auction Slot',
        '+$10,000 In-game Money'
      ]
    },
    {
      id: 'elite',
      name: 'Elite',
      category: 'ranks',
      price: 14,
      icon: '💚',
      iconClass: 'icon-green',
      badge: 'RANK',
      description: 'Unlock more commands, homes, auction slots, and in-game cash.',
      features: [
        '/anvil',
        '/craft',
        '/suicide',
        '/trash',
        '/glow',
        '/playtime',
        '+1 Home',
        '+2 Auction Slots',
        '+$5M In-game Money'
      ]
    },
    {
      id: 'legend',
      name: 'Legend',
      category: 'ranks',
      price: 24,
      icon: '👑',
      iconClass: 'icon-gold',
      badge: 'RANK',
      description: 'A premium Ryft SMP rank for players ready to go further.',
      features: ['Legend Rank', 'Premium rank perks', 'Exclusive rank access']
    },
    {
      id: 'immortal',
      name: 'Immortal',
      category: 'ranks',
      price: 36,
      icon: '🔥',
      iconClass: 'icon-red',
      badge: 'RANK',
      description: 'A high-tier rank with powerful server benefits.',
      features: ['Immortal Rank', 'High-tier rank perks', 'Exclusive rank access']
    },
    {
      id: 'ryft',
      name: 'Ryft',
      category: 'ranks',
      price: 50,
      icon: '♛',
      iconClass: 'icon-purple',
      badge: 'ULTIMATE',
      featured: true,
      description: 'The ultimate Ryft SMP rank.',
      features: ['Ryft Rank', 'Top-tier rank perks', 'Exclusive rank access']
    },
    {
      id: 'ryftsmp-plus',
      name: 'RyftSMP Plus',
      category: 'subscriptions',
      price: 35,
      recurring: true,
      interval: 'month',
      icon: '💜',
      iconClass: 'icon-purple',
      badge: 'MONTHLY',
      featured: true,
      description: 'A monthly membership packed with keys plus a Donor Rank and Donor Kit.',
      features: [
        '10× Spawner Keys every month',
        '20× Elite Keys every month',
        '3× Exotic Keys every month',
        '2× Ryft Keys every month',
        'Donor Rank',
        'Donor Kit',
        'Automatic monthly renewal via Tebex'
      ]
    },
    {
      id: 'spawner-key',
      name: 'Spawner Key',
      category: 'items',
      price: 4,
      icon: '🗝️',
      iconClass: 'icon-cyan',
      badge: 'KEY',
      description: 'Unlock a Spawner Key reward on Ryft SMP.',
      features: ['Spawner Key', 'Crate reward', 'Instant delivery ready']
    },
    {
      id: 'elite-key',
      name: 'Elite Key',
      category: 'items',
      price: 2,
      icon: '🔑',
      iconClass: 'icon-green',
      badge: 'KEY',
      description: 'Unlock an Elite Key reward on Ryft SMP.',
      features: ['Elite Key', 'Crate reward', 'Instant delivery ready']
    },
    {
      id: 'ryft-key',
      name: 'Ryft Key',
      category: 'items',
      price: 5,
      icon: '💠',
      iconClass: 'icon-purple',
      badge: 'KEY',
      description: 'Unlock a Ryft Key reward on Ryft SMP.',
      features: ['Ryft Key', 'Crate reward', 'Instant delivery ready']
    },
    {
      id: 'exotic-key',
      name: 'Exotic Key',
      category: 'items',
      price: 7,
      icon: '✨',
      iconClass: 'icon-gold',
      badge: 'EXOTIC',
      description: 'Unlock an Exotic Key reward on Ryft SMP.',
      features: ['Exotic Key', 'Exotic crate reward', 'Instant delivery ready']
    }
  ]
};

const state = {
  category: 'all',
  cart: JSON.parse(localStorage.getItem('ryftCart') || '{}'),
  promoCode: localStorage.getItem('ryftPromoCode') || ''
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function money(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: shopConfig.currency
  }).format(value);
}

function saveCart() {
  localStorage.setItem('ryftCart', JSON.stringify(state.cart));
}

function cartEntries() {
  return Object.entries(state.cart)
    .map(([id, quantity]) => ({ product: shopConfig.products.find(p => p.id === id), quantity }))
    .filter(entry => entry.product && entry.quantity > 0);
}

function cartCount() {
  return cartEntries().reduce((total, entry) => total + entry.quantity, 0);
}

function addToCart(id, quantity = 1) {
  state.cart[id] = (state.cart[id] || 0) + quantity;
  saveCart();
  renderCart();
  showToast('Added to your cart.');
}

function changeQuantity(id, delta) {
  if (!state.cart[id]) return;
  state.cart[id] += delta;
  if (state.cart[id] <= 0) delete state.cart[id];
  saveCart();
  renderCart();
}

function getPromoCode(code = state.promoCode) {
  const normalized = String(code || '').trim().toUpperCase();
  return normalized ? shopConfig.promoCodes[normalized] || null : null;
}

function getRedemptionCounts() {
  try { return JSON.parse(localStorage.getItem('ryftPromoRedemptions') || '{}'); } catch { return {}; }
}

function getRedemptionCount(code) {
  return Number(getRedemptionCounts()[String(code || '').toUpperCase()] || 0);
}

function isPromoExpired(promo) {
  return Boolean(promo?.expiresAt) && Date.now() >= new Date(promo.expiresAt).getTime();
}

function promoStatus(code = state.promoCode) {
  const normalized = String(code || '').trim().toUpperCase();
  const promo = getPromoCode(normalized);
  if (!promo) return { ok: false, message: 'That code is not valid.' };
  if (isPromoExpired(promo)) return { ok: false, message: 'That code has expired.' };
  const count = getRedemptionCount(normalized);
  if (promo.maxRedemptions != null && count >= promo.maxRedemptions) return { ok: false, message: 'That code has reached its redemption limit.' };
  return { ok: true, message: 'Code is active.', count };
}

function recordPromoRedemption(code) {
  const normalized = String(code || '').trim().toUpperCase();
  if (!normalized || !shopConfig.promoCodes[normalized]) return;
  const counts = getRedemptionCounts();
  counts[normalized] = Number(counts[normalized] || 0) + 1;
  localStorage.setItem('ryftPromoRedemptions', JSON.stringify(counts));
}

function subtotal() {
  return cartEntries().reduce((total, entry) => total + entry.product.price * entry.quantity, 0);
}

function promoDiscount() {
  const promo = getPromoCode();
  const total = subtotal();
  if (!promo || total <= 0) return 0;
  const amount = promo.discountType === 'fixed' ? promo.value : total * (promo.value / 100);
  return Math.min(total, Math.max(0, amount));
}

function cartTotal() {
  return Math.max(0, subtotal() - promoDiscount());
}

function applyPromoCode(rawCode) {
  const code = String(rawCode || '').trim().toUpperCase();
  if (!code) {
    state.promoCode = '';
    localStorage.removeItem('ryftPromoCode');
    renderCart();
    return;
  }
  const promo = getPromoCode(code);
  const status = promoStatus(code);
  if (!promo || !status.ok) {
    showToast(status.message);
    return;
  }
  state.promoCode = code;
  localStorage.setItem('ryftPromoCode', code);
  renderCart();
  showToast(`${code} applied — ${promo.description}`);
}

function removePromoCode() {
  state.promoCode = '';
  localStorage.removeItem('ryftPromoCode');
  renderCart();
  showToast('Promo code removed.');
}

function productCard(product) {
  return `
    <article class="product-card ${product.featured ? 'featured' : ''}">
      <div class="product-top">
        <span class="product-badge">${product.badge}</span>
        ${product.featured ? '<span class="product-badge">★ FEATURED</span>' : ''}
      </div>
      <div class="product-icon ${product.iconClass}">${product.icon}</div>
      <h3>${product.name}</h3>
      <p class="product-desc">${product.description}</p>
      <ul class="product-features">
        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
      <div class="product-bottom">
        <div class="product-price">${money(product.price)}${product.recurring ? '<small class="recurring-price"> / month</small>' : ''}</div>
        <button class="btn btn-primary add-btn" type="button" data-add="${product.id}">${product.recurring ? 'Choose Membership' : 'Add to Cart'}</button>
      </div>
    </article>
  `;
}

function renderProducts() {
  const grid = $('#shopGrid');
  const products = shopConfig.products.filter(p => state.category === 'all' || p.category === state.category);
  grid.innerHTML = products.map(productCard).join('');
  $$('[data-add]').forEach(button => {
    button.addEventListener('click', () => addToCart(button.dataset.add));
  });
}

function renderRanks() {
  const rankProducts = shopConfig.products.filter(p => p.category === 'ranks');
  $('#rankLine').innerHTML = rankProducts.map((product, index) => `
    <div class="rank-mini">
      <div class="dot"></div>
      <h4>${index + 1}. ${product.name}</h4>
      <p>${money(product.price)}</p>
    </div>
  `).join('');
}

const rankComparison = {
  vip: { homes: 1, auction: 1, commands: ['/anvil', '/craft', '/suicide'], perks: ['+$10,000 in-game money'] },
  elite: { homes: 2, auction: 2, commands: ['/anvil', '/craft', '/suicide', '/trash', '/glow', '/playtime'], perks: ['+$5M in-game money'] },
  legend: { homes: 4, auction: 5, commands: ['/anvil', '/craft', '/enderchest', '/feed', '/heal', '/trash', '/glow', '/nick', '/playtime'], perks: ['+$10M in-game money', 'Legend chat prefix', 'Premium rank access'] },
  immortal: { homes: 7, auction: 10, commands: ['/anvil', '/craft', '/enderchest', '/feed', '/heal', '/trash', '/glow', '/nick', '/playtime', '/fly', '/repair', '/near', '/back', '/sellall', '/hat', '/ptime'], perks: ['+$25M in-game money', 'Immortal chat prefix', 'Priority crate rewards', 'Everything in Legend'] },
  ryft: { homes: 12, auction: 18, commands: ['/anvil', '/craft', '/enderchest', '/feed', '/heal', '/trash', '/glow', '/nick', '/playtime', '/fly', '/repair all', '/invsee', '/back', '/sellall', '/hat', '/repair'], perks: ['+$50M in-game money', 'Ryft chat prefix', 'Exclusive Ryft rewards', 'Everything in Immortal'] }
};

function comparisonData(id) {
  return rankComparison[id] || { homes: 0, auction: 0, commands: [], perks: [] };
}

function renderCompareSelects() {
  const ranks = shopConfig.products.filter(p => p.category === 'ranks');
  const options = ranks.map(p => `<option value="${p.id}">${p.name} — ${money(p.price)}</option>`).join('');
  $('#compareRankA').innerHTML = options;
  $('#compareRankB').innerHTML = options;
  $('#compareRankA').value = 'vip';
  $('#compareRankB').value = 'elite';
  $('#compareRankA').addEventListener('change', renderComparison);
  $('#compareRankB').addEventListener('change', renderComparison);
  renderComparison();
}

function comparisonChips(items, otherItems) {
  return items.map(item => {
    const cls = otherItems.includes(item) ? 'shared' : 'new';
    return `<span class="compare-chip ${cls}">${item}</span>`;
  }).join('');
}

function renderComparison() {
  const a = shopConfig.products.find(p => p.id === $('#compareRankA').value);
  const b = shopConfig.products.find(p => p.id === $('#compareRankB').value);
  if (!a || !b) return;
  const da = comparisonData(a.id);
  const db = comparisonData(b.id);
  const priceDiff = Math.abs(a.price - b.price);
  const homesDiff = da.homes !== db.homes;
  const auctionDiff = da.auction !== db.auction;
  const commandsDiff = JSON.stringify(da.commands) !== JSON.stringify(db.commands);
  const perksDiff = JSON.stringify(da.perks) !== JSON.stringify(db.perks);
  $('#compareCard').innerHTML = `
    <div class="compare-head">
      <div><div class="compare-rank-label">Category</div><div class="compare-rank-name">Compare</div></div>
      <div><div class="compare-rank-label">Rank A</div><div class="compare-rank-name">${a.name}</div><div class="compare-rank-price">${money(a.price)}</div></div>
      <div><div class="compare-rank-label">Rank B</div><div class="compare-rank-name">${b.name}</div><div class="compare-rank-price">${money(b.price)}</div></div>
    </div>
    <div class="compare-row">
      <div class="compare-label">Price</div>
      <div class="compare-cell ${priceDiff ? 'diff' : ''}"><div class="compare-value"><strong>${money(a.price)}</strong></div></div>
      <div class="compare-cell ${priceDiff ? 'diff' : ''}"><div class="compare-value"><strong>${money(b.price)}</strong></div></div>
    </div>
    <div class="compare-row">
      <div class="compare-label">Homes</div>
      <div class="compare-cell ${homesDiff ? 'diff' : ''}"><div class="compare-value"><strong>${da.homes}</strong> home${da.homes === 1 ? '' : 's'}</div></div>
      <div class="compare-cell ${homesDiff ? 'diff' : ''}"><div class="compare-value"><strong>${db.homes}</strong> homes</div></div>
    </div>
    <div class="compare-row">
      <div class="compare-label">Auction slots</div>
      <div class="compare-cell ${auctionDiff ? 'diff' : ''}"><div class="compare-value"><strong>${da.auction}</strong> slots</div></div>
      <div class="compare-cell ${auctionDiff ? 'diff' : ''}"><div class="compare-value"><strong>${db.auction}</strong> slots</div></div>
    </div>
    <div class="compare-row">
      <div class="compare-label">Commands</div>
      <div class="compare-cell ${commandsDiff ? 'diff' : ''}"><div class="compare-command-list">${comparisonChips(da.commands, db.commands)}</div></div>
      <div class="compare-cell ${commandsDiff ? 'diff' : ''}"><div class="compare-command-list">${comparisonChips(db.commands, da.commands)}</div></div>
    </div>
    <div class="compare-row">
      <div class="compare-label">Perks</div>
      <div class="compare-cell ${perksDiff ? 'diff' : ''}"><div class="compare-perk-list">${comparisonChips(da.perks, db.perks)}</div></div>
      <div class="compare-cell ${perksDiff ? 'diff' : ''}"><div class="compare-perk-list">${comparisonChips(db.perks, da.perks)}</div></div>
    </div>
    <div class="compare-footer">
      <span><strong>${money(priceDiff)}</strong> price difference between these ranks.</span>
      <button class="btn btn-primary compare-buy" type="button" data-compare-buy="${b.id}">Add ${b.name} to Cart</button>
    </div>
  `;
  const buy = $('[data-compare-buy]');
  if (buy) buy.addEventListener('click', () => addToCart(b.id));
}

function renderCart() {
  const entries = cartEntries();
  $('#cartCount').textContent = cartCount();
  $('#cartTotal').textContent = money(cartTotal());
  $('#cartEmpty').style.display = entries.length ? 'none' : 'block';
  $('#checkoutBtn').disabled = entries.length === 0;
  $('#checkoutBtn').style.opacity = entries.length ? '1' : '0.5';

  const promo = getPromoCode();
  const promoState = promoStatus();
  const promoArea = $('#promoArea');
  if (promoArea) {
    promoArea.innerHTML = promo
      ? `<div class=\"promo-applied\"><div><strong>${state.promoCode}</strong><span>${promo.description}${promo.type === 'partner' ? ` • Partner: ${promo.partner}` : ''}</span><small>${promo.maxRedemptions == null ? 'Unlimited redemptions' : `${getRedemptionCount(state.promoCode)} / ${promo.maxRedemptions} redeemed`}${promo.expiresAt ? ` • Expires ${new Date(promo.expiresAt).toLocaleDateString()}` : ' • Never expires'}</small></div><button type=\"button\" class=\"promo-remove\" id=\"removePromoBtn\">Remove</button></div>`
      : `<div class=\"promo-entry\"><input id=\"promoCodeInput\" type=\"text\" maxlength=30 placeholder=\"Discount or partner code\" value=\"\" autocomplete=\"off\" /><button type=\"button\" class=\"btn btn-secondary promo-apply\" id=\"applyPromoBtn\">Apply</button></div><small>Have a creator/partner code? Enter it here. Usage limits and expiry are controlled in <code>shopConfig.promoCodes</code>.</small>`;
    const apply = $('#applyPromoBtn');
    const input = $('#promoCodeInput');
    if (apply && input) {
      apply.addEventListener('click', () => applyPromoCode(input.value));
      input.addEventListener('keydown', (event) => { if (event.key === 'Enter') { event.preventDefault(); applyPromoCode(input.value); } });
    }
    const remove = $('#removePromoBtn');
    if (remove) remove.addEventListener('click', removePromoCode);
  }

  const subtotalEl = $('#cartSubtotal');
  const discountEl = $('#cartDiscount');
  const discountRow = $('#cartDiscountRow');
  if (subtotalEl) subtotalEl.textContent = money(subtotal());
  if (discountEl) discountEl.textContent = `−${money(promoDiscount())}`;
  if (discountRow) discountRow.style.display = promoDiscount() > 0 ? 'flex' : 'none';

  $('#cartItems').innerHTML = entries.map(({ product, quantity }) => `
    <div class="cart-row">
      <div class="cart-row-icon">${product.icon}</div>
      <div>
        <h4>${product.name}</h4>
        <p>${money(product.price)}${product.recurring ? ' / month' : ' each'}</p>
        <div class="qty-controls">
          <button class="qty-btn" data-minus="${product.id}" type="button">−</button>
          <span>${quantity}</span>
          <button class="qty-btn" data-plus="${product.id}" type="button">+</button>
        </div>
      </div>
      <div class="cart-row-total">${money(product.price * quantity)}</div>
    </div>
  `).join('');

  $$('[data-minus]').forEach(button => button.addEventListener('click', () => changeQuantity(button.dataset.minus, -1)));
  $$('[data-plus]').forEach(button => button.addEventListener('click', () => changeQuantity(button.dataset.plus, 1)));

  const activePromo = getPromoCode();
  $('#checkoutSummary').innerHTML = entries.length
    ? entries.map(({ product, quantity }) => `${quantity}× ${product.name} <strong>${money(product.price * quantity)}</strong>`).join('<br>')
      + `<hr style="border:0;border-top:1px solid rgba(255,255,255,.08)">`
      + `<div class="summary-line"><span>Subtotal</span><strong>${money(subtotal())}</strong></div>`
      + (promoDiscount() > 0 ? `<div class="summary-line discount"><span>${activePromo ? activePromo.description : 'Discount'}</span><strong>−${money(promoDiscount())}</strong></div>` : '')
      + `<div class="summary-line total"><span>Total</span><strong>${money(cartTotal())}</strong></div>`
    : 'Your cart is empty.';
}

function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  if (!$$('.modal-backdrop.open').length) document.body.classList.remove('modal-open');
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => toast.classList.remove('show'), 2200);
}

async function copyServerIp() {
  try {
    await navigator.clipboard.writeText(shopConfig.serverIp);
    showToast(`Copied ${shopConfig.serverIp}`);
  } catch {
    showToast(`Server IP: ${shopConfig.serverIp}`);
  }
}

function getOrderText(username, email) {
  const lines = [
    'RYFT SMP ORDER',
    `Minecraft Username: ${username}`,
    `Email: ${email}`,
    `Server: ${shopConfig.serverIp}`,
    '',
    ...cartEntries().map(({ product, quantity }) => `${quantity}x ${product.name}${product.recurring ? ' (monthly)' : ''} — ${money(product.price * quantity)}`),
    '',
    `SUBTOTAL: ${money(subtotal())}`,
    ...(state.promoCode ? [`PROMO CODE: ${state.promoCode}`, `DISCOUNT: -${money(promoDiscount())}`] : []),
    `TOTAL: ${money(cartTotal())}`
  ];
  return lines.join('\n');
}

$$('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    $$('.tab').forEach(item => item.classList.remove('active'));
    tab.classList.add('active');
    state.category = tab.dataset.category;
    renderProducts();
  });
});

$('#openCartBtn').addEventListener('click', () => openModal('cartModal'));
$('#closeCartBtn').addEventListener('click', () => closeModal('cartModal'));
$('#closeCheckoutBtn').addEventListener('click', () => closeModal('checkoutModal'));
$('#copyIpBtn').addEventListener('click', copyServerIp);

$('#heroBuyBtn').addEventListener('click', () => {
  state.category = 'ranks';
  $$('.tab').forEach(item => item.classList.toggle('active', item.dataset.category === 'ranks'));
  renderProducts();
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

$('#checkoutBtn').addEventListener('click', () => {
  if (!cartEntries().length) return;
  closeModal('cartModal');
  renderCart();
  openModal('checkoutModal');
});

$('#checkoutForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = $('#mcUsername').value.trim();
  const email = $('#email').value.trim();
  const orderText = getOrderText(username, email);
  const activePromo = getPromoCode();
  if (activePromo) {
    const status = promoStatus();
    if (!status.ok) {
      showToast(status.message);
      closeModal('checkoutModal');
      renderCart();
      return;
    }
    recordPromoRedemption(state.promoCode);
  }

  try {
    await navigator.clipboard.writeText(orderText);
    showToast('Order summary copied to clipboard.');
  } catch {
    window.prompt('Copy your order summary:', orderText);
  }
});

$$('.modal-backdrop').forEach(backdrop => {
  backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) closeModal(backdrop.id);
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    $$('.modal-backdrop.open').forEach(modal => closeModal(modal.id));
  }
});

function init() {
  $('#serverIpText').textContent = shopConfig.serverIp;
  const featured = shopConfig.products.find(p => p.id === 'ryft') || shopConfig.products.find(p => p.featured);
  if (featured) $('#featuredPrice').textContent = money(featured.price);
  renderProducts();
  renderRanks();
  renderCompareSelects();
  renderCart();
}

init();
