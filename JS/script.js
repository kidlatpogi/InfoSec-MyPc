// Simple product list (sample PC components) with variants
if (typeof PRODUCTS === 'undefined') {
  window.PRODUCTS = [
    {id: 'cpu-ryzen5', title: 'AMD Ryzen 5 5600X', category: 'CPU', price: 12995, img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%23666%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ECPU%3C/text%3E%3C/svg%3E',
      description: `AMD Ryzen™ 5 5600X — 6 Cores / 12 Threads desktop processor based on the Vermeer (Zen 3) architecture. Key highlights:
• Base Clock: 3.7 GHz, Max Boost Clock: up to 4.6 GHz
• L2 Cache: 3 MB, L3 Cache: 32 MB
• TDP: 65W; Socket: AM4
• Process Technology: TSMC 7nm FinFET; Unlocked for overclocking
• Supported Memory: DDR4 up to 3200 MT/s
• OS Support: Windows 11 / Windows 10 / Linux (64-bit)

This processor delivers strong single-threaded performance for gaming and fast multi-threaded throughput for content creation and general productivity. Included product types: Boxed (with AMD Wraith Stealth cooler) and OEM/Tray options where applicable.`,
      reviews: [
        {name:'Alice',rating:5,comment:'Great value and performance.'},
        {name:'Bob',rating:4,comment:'Runs cool and fast.'},
      ],
      variants:[{label:'Boxed',priceDelta:0},{label:'OEM',priceDelta:-1200}]},
    {id: 'cpu-intel-i5', title: 'Intel Core i5-12400F', category: 'CPU', price: 11500, img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%23666%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ECPU%3C/text%3E%3C/svg%3E',
      description: 'Efficient 6-core CPU for mainstream builds. Good balance of price and performance.',
      reviews:[{name:'Carol',rating:4,comment:'Solid performer for the price.'}],
      variants:[{label:'Boxed',priceDelta:0},{label:'Tray',priceDelta:-900}]},
    {id: 'gpu-rtx3060', title: 'NVIDIA RTX 3060 12GB', category: 'GPU', price: 18999, img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%23666%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EGPU%3C/text%3E%3C/svg%3E',
      description: '12GB VRAM, great 1080p/1440p performance and ray tracing support.',
      reviews:[{name:'Dave',rating:5,comment:'Plays everything smoothly.'}],
      variants:[{label:'Reference',priceDelta:0},{label:'OC Edition',priceDelta:1500}]},
    {id: 'gpu-rx6600', title: 'AMD Radeon RX 6600', category: 'GPU', price: 15999, img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%23666%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EGPU%3C/text%3E%3C/svg%3E', variants:[{label:'Reference',priceDelta:0}]},
    {id: 'mb-b450', title: 'MSI B450 Tomahawk', category: 'Motherboard', price: 6495, img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%23666%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EMB%3C/text%3E%3C/svg%3E', variants:[{label:'ATX',priceDelta:0}]},
    {id: 'ram-16gb', title: 'Corsair Vengeance 16GB (2x8GB) DDR4', category: 'RAM', price: 4295, img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%23666%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ERAM%3C/text%3E%3C/svg%3E', variants:[{label:'3000MHz',priceDelta:0},{label:'3600MHz',priceDelta:400}]},
    {id: 'psu-650', title: 'EVGA 650W Bronze', category: 'PSU', price: 3595, img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%23666%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPSU%3C/text%3E%3C/svg%3E', variants:[{label:'650W',priceDelta:0}]},
    {id: 'ssd-1tb', title: 'Samsung 980 1TB NVMe SSD', category: 'Storage', price: 7495, img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%23666%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ESSD%3C/text%3E%3C/svg%3E', variants:[{label:'1TB',priceDelta:0},{label:'2TB',priceDelta:6200}]}
  ];
} else {
  window.PRODUCTS = window.PRODUCTS; // Reuse existing
}

// Cart stored in localStorage under 'mypc_cart'
function loadCart(){
  try{ return JSON.parse(localStorage.getItem('mypc_cart')||'[]') }catch(e){return []}
}
function saveCart(cart){ localStorage.setItem('mypc_cart', JSON.stringify(cart)) }

function formatPHP(n){ return '₱' + n.toLocaleString('en-PH') }

// User session management
function setUserSession(email){ localStorage.setItem('mypc_user', email) }
function getUserSession(){ return localStorage.getItem('mypc_user') }
function clearUserSession(){ localStorage.removeItem('mypc_user') }
function updateAuthNav(){
  const authNav = document.getElementById('auth-nav');
  const authBtn = document.getElementById('auth-trigger');
  if(!authNav) return;
  
  const user = getUserSession();
  if(user){
    // Check if user is admin
    const users = getAdminUsers ? getAdminUsers() : [];
    const isAdmin = users.some(u=>u.email===user && u.isAdmin);
    
    // Update modal menu with user info and links
    const adminLink = isAdmin ? `<a href="/admin" class="auth-menu-item" style="color:#ef4444"><span class="auth-menu-icon">⚙️</span><span>Admin Dashboard</span></a>` : '';
    authNav.innerHTML = `
      <div class="auth-user-header">
        <p class="user-email">${user}</p>
      </div>
      <a href="/profile" class="auth-menu-item">
        <span class="auth-menu-icon">👤</span>
        <span>Profile</span>
      </a>
      ${adminLink}
      <div class="auth-divider"></div>
      <button id="logout-btn" class="auth-menu-item" style="color:#ef4444">
        <span class="auth-menu-icon">🚪</span>
        <span>Logout</span>
      </button>
    `;
    
    // Update button appearance
    if(authBtn) {
      authBtn.style.background = 'var(--accent)';
      authBtn.style.color = '#fff';
      authBtn.style.borderColor = 'var(--accent)';
    }
    
    // Wire up logout button
    const logoutBtn = document.getElementById('logout-btn');
    if(logoutBtn) {
      logoutBtn.addEventListener('click', (e)=>{ 
        e.preventDefault();
        clearUserSession();
        closeAuthModal();
        window.router.navigateTo('/'); 
      });
    }
  } else {
    authNav.innerHTML = '<a href="/login" id="login-link" class="auth-menu-item"><span class="auth-menu-icon">🔑</span><span>Login</span></a>';
    if(authBtn) {
      authBtn.style.background = 'var(--surface)';
      authBtn.style.color = 'var(--text)';
      authBtn.style.borderColor = 'var(--border)';
    }
  }
}

// Handle auth modal
function setupAuthModal(){
  const authBtn = document.getElementById('auth-trigger');
  const modal = document.getElementById('auth-modal');
  const backdrop = document.getElementById('auth-modal-backdrop');
  const closeBtn = document.getElementById('auth-modal-close');
  
  if(!authBtn || !modal || !backdrop) return;
  
  // Open modal on button click
  authBtn.addEventListener('click', (e)=>{
    e.stopPropagation();
    openAuthModal();
  });
  
  // Close modal on close button click
  closeBtn.addEventListener('click', closeAuthModal);
  
  // Close modal on backdrop click
  backdrop.addEventListener('click', closeAuthModal);
  
  // Close modal when clicking on links
  modal.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click', ()=>{
      closeAuthModal();
    });
  });
  
  // Prevent closing when clicking inside modal
  modal.addEventListener('click', (e)=>{
    e.stopPropagation();
  });
  
  // Close on Escape key
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') {
      closeAuthModal();
    }
  });
}

function openAuthModal(){
  const modal = document.getElementById('auth-modal');
  const backdrop = document.getElementById('auth-modal-backdrop');
  if(modal && backdrop) {
    modal.classList.add('open');
    backdrop.classList.add('open');
  }
}

function closeAuthModal(){
  const modal = document.getElementById('auth-modal');
  const backdrop = document.getElementById('auth-modal-backdrop');
  if(modal && backdrop) {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
  }
}

// pagination & sort state
if (typeof STATE === 'undefined') {
  var STATE = {query:'',category:'',sort:'relevance',page:1,perPage:6};
}

function applySort(list, sort){
  if(sort==='price-asc') return list.sort((a,b)=>a.price-b.price);
  if(sort==='price-desc') return list.sort((a,b)=>b.price-a.price);
  if(sort==='alpha') return list.sort((a,b)=>a.title.localeCompare(b.title));
  return list; // relevance
}

function paginate(list, page, perPage){
  const total = Math.ceil(list.length / perPage) || 1;
  const p = Math.max(1, Math.min(page, total));
  const start = (p-1) * perPage; return {items:list.slice(start, start+perPage), page:p, total}
}

function renderProducts(){ 
  const grid = document.getElementById('product-grid'); if(!grid) return;
  let list = window.PRODUCTS.slice();
  const q = STATE.query.trim().toLowerCase();
  if(q) list = list.filter(p=> p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  if(STATE.category) list = list.filter(p=>p.category===STATE.category);
  list = applySort(list, STATE.sort);
  const page = paginate(list, STATE.page, STATE.perPage);
  grid.innerHTML = '';
  page.items.forEach(p=>{
      const el = document.createElement('article'); el.className='product';
      el.innerHTML = `
        <img src="${p.img}" alt="${p.title}">
        <h3>${p.title}</h3>
        <div class="meta">${p.category}</div>
        <div class="price" data-base="${p.price}">${formatPHP(p.price)}</div>
        <div class="actions">
          <input type="number" class="qty-input" data-id="${p.id}" value="1" min="1">
        </div>
        <div class="actions">
          <button class="btn" data-id="${p.id}" data-action="view">View</button>
          <button class="btn add" data-id="${p.id}" data-action="add">Add to cart</button>
        </div>
      `;
      grid.appendChild(el);
  })
  renderPagination(page.page, page.total);
}

function updateCartCount(){
  const countEl = document.getElementById('cart-count');
  if(!countEl) return;
  const cart = loadCart();
  const qty = cart.reduce((s,i)=>s+i.qty,0);
  countEl.textContent = qty;
}

function openCart(){
  const drawer = document.getElementById('cart-drawer'); 
  const backdrop = document.getElementById('cart-backdrop');
  if(!drawer) return; 
  drawer.classList.add('open'); 
  drawer.setAttribute('aria-hidden','false');
  if(backdrop) backdrop.style.opacity = '1'; 
  if(backdrop) backdrop.style.pointerEvents = 'auto';
  renderCartItems();
}
function closeCart(){ 
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if(drawer){ 
    drawer.classList.remove('open'); 
    drawer.setAttribute('aria-hidden','true')
  }
  if(backdrop){ 
    backdrop.style.opacity = '0'; 
    backdrop.style.pointerEvents = 'none';
  }
}

function renderCartItems(){
  const itemsEl = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if(!itemsEl) return;
  const cart = loadCart();
  itemsEl.innerHTML = '';
  let total = 0;
  cart.forEach(ci=>{
    const prod = PRODUCTS.find(p=>p.id===ci.id);
    if(!prod) return;
    const unitPrice = prod.price;
    total += unitPrice * ci.qty;
    const row = document.createElement('div'); row.className='cart-item';
    row.innerHTML = `
      <img src="${prod.img}" alt="${prod.title}">
      <div style="flex:1">
        <div>${prod.title}</div>
        <div style="color:#666">${formatPHP(unitPrice)} x ${ci.qty}</div>
      </div>
      <div style="text-align:right">
        <button class="btn" data-id="${ci.id}" data-action="dec">-</button>
        <button class="btn" data-id="${ci.id}" data-action="inc">+</button>
        <button class="btn" data-id="${ci.id}" data-action="rem">Remove</button>
      </div>
    `;
    itemsEl.appendChild(row);
  })
  totalEl.textContent = formatPHP(total);
}

function addToCart(id, qty=1){
  const cart = loadCart();
  // Add to cart without variant
  const idx = cart.findIndex(i=>i.id===id);
  if(idx>=0) cart[idx].qty += qty; else cart.push({id,qty});
  saveCart(cart); updateCartCount();
  
  // Add animation feedback
  const button = document.querySelector(`.btn.add[data-id="${id}"]`);
  if(button) {
    // Pulse the button
    button.style.animation = 'cartPulse 0.4s ease-out';
    
    // Change button text temporarily
    const originalText = button.textContent;
    button.textContent = '✓ Added!';
    button.style.background = '#10b981';
    
    setTimeout(() => {
      button.style.animation = '';
      button.textContent = originalText;
      button.style.background = '';
    }, 1500);
    
    // Create flying animation to cart icon
    const cartIcon = document.getElementById('cart-toggle');
    if(cartIcon) {
      const rect = button.getBoundingClientRect();
      const cartRect = cartIcon.getBoundingClientRect();
      
      const flyEl = document.createElement('div');
      flyEl.style.cssText = `
        position: fixed;
        pointer-events: none;
        left: ${rect.left}px;
        top: ${rect.top}px;
        width: 30px;
        height: 30px;
        background: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%232563eb%22%3E%3Cpath d=%22M7 4V3m10 1v-1m4 7v-2m1 14H2v-2m1-6V9a7 7 0 0 1 14 0v8m0 0v2m0-2h3v2m-3-2h2m1 0h-2%22/%3E%3C/svg%3E');
        background-size: contain;
        background-repeat: no-repeat;
        z-index: 1000;
      `;
      
      document.body.appendChild(flyEl);
      
      const distance = Math.sqrt(
        Math.pow(cartRect.left - rect.left, 2) + 
        Math.pow(cartRect.top - rect.top, 2)
      );
      const duration = Math.min(600, 400 + distance * 0.2);
      
      flyEl.animate([
        { 
          transform: 'translate(0, 0) scale(1)', 
          opacity: 1 
        },
        { 
          transform: `translate(${cartRect.left - rect.left}px, ${cartRect.top - rect.top}px) scale(0.3)`, 
          opacity: 0 
        }
      ], {
        duration: duration,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      });
      
      setTimeout(() => flyEl.remove(), duration);
    }
  }
}

function changeQty(id, delta){
  const cart = loadCart();
  const idx = cart.findIndex(i=>i.id===id); if(idx<0) return;
  cart[idx].qty += delta; if(cart[idx].qty<=0) cart.splice(idx,1);
  saveCart(cart); renderCartItems(); updateCartCount();
}

function removeFromCart(id){ const cart=loadCart(); const idx=cart.findIndex(i=>i.id===id); if(idx>=0){cart.splice(idx,1); saveCart(cart); renderCartItems(); updateCartCount()} }

// Event delegation
document.addEventListener('click', e=>{
  const t = e.target.closest('[data-action]'); if(!t) return;
  const action = t.getAttribute('data-action'); const id = t.getAttribute('data-id');
  if(action==='add') addToCart(id,1);
  if(action==='inc') changeQty(id,1);
  if(action==='dec') changeQty(id,-1);
  if(action==='rem') removeFromCart(id);
  if(action==='view') {
    // Navigate to product detail page
    if(window.router && typeof window.router.navigateTo === 'function'){
      window.router.navigateTo('/product/' + id);
    } else {
      // Fallback: show alert
      alert('Product details:\n'+id);
    }
  }
});

function renderPagination(page, total){
  const el = document.getElementById('pagination'); if(!el) return; el.innerHTML='';
  for(let i=1;i<=total;i++){
    const b = document.createElement('button'); b.className='page-btn'+(i===page?' active':''); b.textContent = i; b.addEventListener('click', ()=>{ STATE.page=i; renderProducts(); });
    el.appendChild(b);
  }
}

function renderCheckoutItems(){
  const itemsEl = document.getElementById('checkout-items');
  const totalEl = document.getElementById('checkout-total');
  if(!itemsEl) return;
  const cart = loadCart();
  itemsEl.innerHTML = '';
  let total = 0;
  cart.forEach(ci=>{
    const prod = PRODUCTS.find(p=>p.id===ci.id);
    if(!prod) return;
    const unitPrice = prod.price;
    total += unitPrice * ci.qty;
    const row = document.createElement('div'); row.className='checkout-item';
    row.innerHTML = `
      <img src="${prod.img}" alt="${prod.title}">
      <div class="checkout-item-info">
        <p><strong>${prod.title}</strong></p>
        <p>${formatPHP(unitPrice)} x ${ci.qty}</p>
      </div>
      <div style="text-align:right"><strong>${formatPHP(unitPrice * ci.qty)}</strong></div>
    `;
    itemsEl.appendChild(row);
  })
  if(totalEl) totalEl.textContent = formatPHP(total);
}

// Wire UI elements - runs after DOM is ready (works with router)
function initializePageScript(){
  // Update auth nav (always do this first, regardless of page)
  updateAuthNav();
  setupAuthModal();
  
  // Check if this is admin page
  if(document.getElementById('users-tab')){
    initializeAdmin();
    return;
  }
  
  // Only initialize products-related elements if we have the products array
  if(!window.PRODUCTS) return;

  // If this is a product detail page, render the product info
  if(window.CURRENT_PRODUCT_ID){
    const pid = window.CURRENT_PRODUCT_ID;
    const prod = PRODUCTS.find(p=>p.id===pid);
    if(prod){
      const img = document.getElementById('prod-img'); if(img){ img.src = prod.img; img.alt = prod.title }
      const title = document.getElementById('prod-title'); if(title) title.textContent = prod.title;
      const cat = document.getElementById('prod-category'); if(cat) cat.textContent = prod.category;
      const priceEl = document.getElementById('prod-price'); if(priceEl) priceEl.textContent = formatPHP(prod.price);
      const desc = document.getElementById('prod-desc'); if(desc) desc.textContent = prod.description || 'High quality component.';

  // Wire add/buy buttons
      const qtyEl = document.getElementById('prod-qty');
      const addBtn = document.getElementById('prod-add');
      const buyBtn = document.getElementById('prod-buy');
      if(addBtn){ addBtn.addEventListener('click', ()=>{
        const q = qtyEl?parseInt(qtyEl.value,10)||1:1;
        addToCart(prod.id, q);
      }); }
      if(buyBtn){ buyBtn.addEventListener('click', ()=>{
        const q = qtyEl?parseInt(qtyEl.value,10)||1:1;
        addToCart(prod.id, q);
        updateCartCount(); window.router.navigateTo('/checkout');
      }); }
      // Render reviews
      const reviewsEl = document.getElementById('prod-reviews');
      const ratingEl = document.getElementById('prod-rating');
      if(reviewsEl){
        const reviews = prod.reviews || [];
        if(reviews.length===0){ reviewsEl.innerHTML = '<div style="color:var(--text-light)">No reviews yet.</div>'; if(ratingEl) ratingEl.textContent=''; }
        else {
          const avg = (reviews.reduce((s,r)=>s+(r.rating||0),0) / reviews.length).toFixed(1);
          if(ratingEl) ratingEl.textContent = `${avg} ★ (${reviews.length})`;
          reviewsEl.innerHTML = reviews.map(r=>`<div class="review"><div style="font-weight:600">${r.name} <span style="color:var(--text-light);font-weight:400">• ${r.rating}★</span></div><div style="color:var(--text-light);margin-top:.25rem">${r.comment}</div></div>`).join('<hr style="border:none;border-top:1px solid var(--border);margin:.75rem 0">');
        }
      }
      // Render specifications
      const specsEl = document.getElementById('prod-specs');
      if(specsEl){
        const specsHtml = `
          <div class="spec-list">
            <div class="spec-item"><strong>Product ID</strong><div>${prod.id}</div></div>
            <div class="spec-item"><strong>Category</strong><div>${prod.category}</div></div>
            <div class="spec-item"><strong>Price</strong><div>${formatPHP(prod.price)}</div></div>
            <div class="spec-item" style="grid-column:1 / -1"><strong>Description</strong><div style="color:var(--text-light);margin-top:.25rem">${prod.description || 'No description available.'}</div></div>
          </div>
        `;
        specsEl.innerHTML = specsHtml;
      }
    }
  }
  
  // populate categories
  const cats = Array.from(new Set(window.PRODUCTS.map(p=>p.category))).sort();
  const catSel = document.getElementById('category-filter'); if(catSel){ cats.forEach(c=>{ const o=document.createElement('option'); o.value=c; o.textContent=c; catSel.appendChild(o) }); catSel.addEventListener('change', e=>{ STATE.category=e.target.value; STATE.page=1; renderProducts() }) }

  const sortSel = document.getElementById('sort-select'); if(sortSel){ sortSel.addEventListener('change', e=>{ STATE.sort=e.target.value; STATE.page=1; renderProducts() }) }

  const search = document.getElementById('search-input'); if(search){ search.addEventListener('input', e=>{ STATE.query=e.target.value; STATE.page=1; renderProducts(); }) }

  renderProducts(); updateCartCount();

  const cartToggle = document.getElementById('cart-toggle'); if(cartToggle) cartToggle.addEventListener('click', openCart);
  const closeBtn = document.querySelectorAll('#close-cart'); if(closeBtn) closeBtn.forEach(b=>b.addEventListener('click', closeCart));
  const backdrop = document.getElementById('cart-backdrop'); if(backdrop) backdrop.addEventListener('click', closeCart);
  const checkout = document.getElementById('checkout-btn'); if(checkout) checkout.addEventListener('click', ()=>{ closeCart(); window.router.navigateTo('/checkout'); })

  // Simple auth forms (demo only) with inline validation
  const createForm = document.getElementById('create-form'); if(createForm) createForm.addEventListener('submit', e=>{ e.preventDefault(); const email=createForm.querySelector('#email'); const pass=createForm.querySelector('#password'); const name=createForm.querySelector('#fullname'); let ok=true; removeErrors(createForm);
    if(!name.value.trim()){ addError(name,'Please enter your full name'); ok=false }
    if(!validateEmail(email.value)){ addError(email,'Enter a valid email address'); ok=false }
    if(pass.value.length<6){ addError(pass,'Password must be at least 6 characters'); ok=false }
    if(ok){ alert('Account created (demo).'); window.router.navigateTo('/login') }
  })
  const loginForm = document.getElementById('login-form'); if(loginForm) loginForm.addEventListener('submit', e=>{ e.preventDefault(); const email=loginForm.querySelector('#email'); const pass=loginForm.querySelector('#password'); removeErrors(loginForm); let ok=true; if(!validateEmail(email.value)){ addError(email,'Enter a valid email'); ok=false } if(!pass.value){ addError(pass,'Enter your password'); ok=false } if(ok){ setUserSession(email.value); alert('Signed in (demo).'); window.router.navigateTo('/shop') } })

  // Checkout page
  const checkoutForm = document.getElementById('checkout-form'); if(checkoutForm){ 
    renderCheckoutItems();
    checkoutForm.addEventListener('submit', e=>{ 
      e.preventDefault(); 
      const name = checkoutForm.querySelector('#fullname');
      const email = checkoutForm.querySelector('#email');
      const phone = checkoutForm.querySelector('#phone');
      const address = checkoutForm.querySelector('#address');
      let ok=true;
      removeErrors(checkoutForm);
      if(!name.value.trim()){ addError(name,'Please enter full name'); ok=false }
      if(!validateEmail(email.value)){ addError(email,'Enter valid email'); ok=false }
      if(!phone.value.trim()){ addError(phone,'Enter phone number'); ok=false }
      if(!address.value.trim()){ addError(address,'Enter address'); ok=false }
      if(ok){ alert('Order placed successfully! (Demo)\n\nOrder confirmation sent to '+email.value); saveCart([]); updateCartCount(); window.router.navigateTo('/shop') }
    });
  }

  // Profile page - menu navigation
  document.querySelectorAll('.menu-item').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const section = btn.getAttribute('data-section');
      if(section==='logout'){ alert('Logged out (demo).'); window.router.navigateTo('/'); return; }
      document.querySelectorAll('.menu-item').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.profile-section').forEach(s=>s.classList.remove('active'));
      btn.classList.add('active');
      const el = document.getElementById(section); if(el) el.classList.add('active');
    });
  });

  // Profile edit form
  const editForm = document.getElementById('edit-profile-form'); if(editForm){
    editForm.addEventListener('submit', e=>{
      e.preventDefault();
      removeErrors(editForm);
      const newPass = editForm.querySelector('#new-password').value;
      const confirmPass = editForm.querySelector('#confirm-password').value;
      if(newPass && newPass!==confirmPass){ addError(editForm.querySelector('#confirm-password'),'Passwords do not match'); return; }
      alert('Profile updated successfully (demo).'); 
    });
  }

  // Order sorting functionality
  const orderSortDate = document.getElementById('order-sort-date');
  const orderSortStatus = document.getElementById('order-sort-status');
  if(orderSortDate || orderSortStatus){
    function sortOrders(){
      const ordersList = document.getElementById('orders-list');
      if(!ordersList) return;
      const orders = Array.from(ordersList.querySelectorAll('.order-card'));
      const dateSort = orderSortDate ? orderSortDate.value : 'newest';
      const statusFilter = orderSortStatus ? orderSortStatus.value : 'all';
      
      // Filter by status
      let filtered = orders;
      if(statusFilter !== 'all'){
        filtered = orders.filter(order => {
          const status = order.getAttribute('data-order-status');
          return status === statusFilter;
        });
      }
      
      // Sort by date
      filtered.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-order-date'));
        const dateB = new Date(b.getAttribute('data-order-date'));
        return dateSort === 'newest' ? dateB - dateA : dateA - dateB;
      });
      
      // Clear and re-append sorted orders
      ordersList.innerHTML = '';
      filtered.forEach(order => ordersList.appendChild(order));
    }
    
    if(orderSortDate) orderSortDate.addEventListener('change', sortOrders);
    if(orderSortStatus) orderSortStatus.addEventListener('change', sortOrders);
  }
}

// ============= ADMIN DASHBOARD FUNCTIONS =============

// Admin data management
function getAdminUsers(){
  try{ return JSON.parse(localStorage.getItem('mypc_admin_users')||'[]') }catch(e){return []}
}
function saveAdminUsers(users){ localStorage.setItem('mypc_admin_users', JSON.stringify(users)) }

function getAdminProducts(){
  try{ return JSON.parse(localStorage.getItem('mypc_admin_products')||JSON.stringify(window.PRODUCTS||[])) }catch(e){return window.PRODUCTS||[]}
}
function saveAdminProducts(products){ localStorage.setItem('mypc_admin_products', JSON.stringify(products)); window.PRODUCTS = products }

// Initialize admin data if first time
if(!localStorage.getItem('mypc_admin_users')){
  saveAdminUsers([
    {id:1, email:'admin@mypc.com', name:'Admin User', password:'admin123', isAdmin:true, status:'active', created:new Date().toISOString()},
    {id:2, email:'test@example.com', name:'Test User', password:'test123', isAdmin:false, status:'active', created:new Date().toISOString()}
  ]);
}

// Guard against redeclaration when script is reloaded
if (typeof currentEditingId === 'undefined') {
  var currentEditingId = null;
}
if (typeof deleteTarget === 'undefined') {
  var deleteTarget = null;
}

function initializeAdmin(){
  // Check if user is admin
  const user = getUserSession();
  if(!user) { window.router.navigateTo('/login'); return; }
  
  const users = getAdminUsers();
  const isAdmin = users.some(u=>u.email===user && u.isAdmin);
  if(!isAdmin) { alert('Access denied: Admin only'); window.router.navigateTo('/'); return; }
  
  // Render admin page
  renderAdminUsers();
  
  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const tab = e.target.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
      e.target.classList.add('active');
      document.getElementById(tab+'-tab').classList.add('active');
      if(tab==='products') renderAdminProducts();
    });
  });
  
  // User form handlers
  document.getElementById('add-user-btn').addEventListener('click', ()=>{
    currentEditingId = null;
    document.getElementById('user-modal-title').textContent = 'Add New User';
    document.getElementById('user-form').reset();
    document.getElementById('user-modal').classList.add('open');
  });
  
  document.getElementById('user-form').addEventListener('submit', saveUser);
  
  // Product form handlers
  document.getElementById('add-product-btn').addEventListener('click', ()=>{
    currentEditingId = null;
    document.getElementById('product-modal-title').textContent = 'Add New Product';
    document.getElementById('product-form').reset();
    document.getElementById('product-modal').classList.add('open');
  });
  
  document.getElementById('product-form').addEventListener('submit', saveProduct);
  
  // Modal close buttons
  document.querySelectorAll('.modal-close, [data-action="cancel"]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.modal').forEach(m=>m.classList.remove('open'));
      deleteTarget = null;
    });
  });
  
  // Search filters
  document.getElementById('user-search').addEventListener('input', filterAdminUsers);
  document.getElementById('product-search').addEventListener('input', filterAdminProducts);
  
  // Confirm delete
  document.getElementById('confirm-delete-btn').addEventListener('click', confirmDelete);
  
  // Welcome message
  document.getElementById('admin-welcome').textContent = `Welcome, ${user}`;
}

function renderAdminUsers(){
  const users = getAdminUsers();
  const tbody = document.getElementById('users-tbody');
  tbody.innerHTML = users.map((u,i)=>`
    <tr>
      <td>#${u.id}</td>
      <td>${u.email}</td>
      <td>${u.name}</td>
      <td><span class="badge ${u.status==='active'?'active':'inactive'}">${u.status}</span></td>
      <td>${new Date(u.created).toLocaleDateString()}</td>
      <td>
        <button class="action-btn edit" onclick="editUser(${i})">✏️ Edit</button>
        <button class="action-btn delete" onclick="deleteUser(${i})">🗑️ Delete</button>
      </td>
    </tr>
  `).join('');
}

function renderAdminProducts(){
  const products = getAdminProducts();
  const tbody = document.getElementById('products-tbody');
  tbody.innerHTML = products.map((p,i)=>`
    <tr>
      <td>${p.id}</td>
      <td>${p.title}</td>
      <td>${p.category}</td>
      <td>${formatPHP(p.price)}</td>
      <td>${(p.variants||[]).length} variants</td>
      <td>
        <button class="action-btn view" onclick="viewProduct(${i})">👁️ View</button>
        <button class="action-btn edit" onclick="editProduct(${i})">✏️ Edit</button>
        <button class="action-btn delete" onclick="deleteProduct(${i})">🗑️ Delete</button>
      </td>
    </tr>
  `).join('');
}

function editUser(index){
  currentEditingId = index;
  const users = getAdminUsers();
  const user = users[index];
  document.getElementById('user-modal-title').textContent = 'Edit User';
  document.getElementById('user-email').value = user.email;
  document.getElementById('user-name').value = user.name;
  document.getElementById('user-password').value = '';
  document.getElementById('user-is-admin').checked = user.isAdmin;
  document.getElementById('user-modal').classList.add('open');
}

function editProduct(index){
  currentEditingId = index;
  const products = getAdminProducts();
  const product = products[index];
  document.getElementById('product-modal-title').textContent = 'Edit Product';
  document.getElementById('product-title').value = product.title;
  document.getElementById('product-category').value = product.category;
  document.getElementById('product-price').value = product.price;
  document.getElementById('product-variants').value = JSON.stringify(product.variants||[]);
  document.getElementById('product-modal').classList.add('open');
}

function viewProduct(index){
  const products = getAdminProducts();
  alert('Product Details:\n\n' + JSON.stringify(products[index], null, 2));
}

function saveUser(e){
  e.preventDefault();
  const email = document.getElementById('user-email').value.trim();
  const name = document.getElementById('user-name').value.trim();
  const password = document.getElementById('user-password').value.trim();
  const isAdmin = document.getElementById('user-is-admin').checked;
  
  if(!email || !name) { alert('Email and name are required'); return; }
  
  const users = getAdminUsers();
  if(currentEditingId===null){
    const newUser = {
      id: Math.max(...users.map(u=>u.id), 0)+1,
      email, name, password: password||'user123', isAdmin, status:'active',
      created: new Date().toISOString()
    };
    users.push(newUser);
    alert('User added successfully!');
  } else {
    if(password) users[currentEditingId].password = password;
    users[currentEditingId].email = email;
    users[currentEditingId].name = name;
    users[currentEditingId].isAdmin = isAdmin;
    alert('User updated successfully!');
  }
  saveAdminUsers(users);
  renderAdminUsers();
  document.getElementById('user-modal').classList.remove('open');
}

function saveProduct(e){
  e.preventDefault();
  const title = document.getElementById('product-title').value.trim();
  const category = document.getElementById('product-category').value.trim();
  const price = parseInt(document.getElementById('product-price').value);
  
  if(!title || !category || !price) { alert('Title, category, and price are required'); return; }
  
  const products = getAdminProducts();
  if(currentEditingId===null){
    const newProduct = {
      id: 'custom-'+(Math.max(...products.filter(p=>p.id.toString().startsWith('custom-')).map(p=>parseInt(p.id.split('-')[1])||0), 0)+1),
      title, category, price, img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%23666%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPRODUCT%3C/text%3E%3C/svg%3E'
    };
    products.push(newProduct);
    alert('Product added successfully!');
  } else {
    products[currentEditingId].title = title;
    products[currentEditingId].category = category;
    products[currentEditingId].price = price;
    alert('Product updated successfully!');
  }
  saveAdminProducts(products);
  window.PRODUCTS = products;
  renderAdminProducts();
  document.getElementById('product-modal').classList.remove('open');
}

function deleteUser(index){
  deleteTarget = {type:'user', index};
  document.getElementById('confirm-message').textContent = 'Are you sure you want to delete this user? This action cannot be undone.';
  document.getElementById('confirm-modal').classList.add('open');
}

function deleteProduct(index){
  deleteTarget = {type:'product', index};
  document.getElementById('confirm-message').textContent = 'Are you sure you want to delete this product? This action cannot be undone.';
  document.getElementById('confirm-modal').classList.add('open');
}

function confirmDelete(){
  if(!deleteTarget) return;
  if(deleteTarget.type==='user'){
    const users = getAdminUsers();
    users.splice(deleteTarget.index, 1);
    saveAdminUsers(users);
    renderAdminUsers();
    alert('User deleted successfully!');
  } else {
    const products = getAdminProducts();
    products.splice(deleteTarget.index, 1);
    saveAdminProducts(products);
    window.PRODUCTS = products;
    renderAdminProducts();
    alert('Product deleted successfully!');
  }
  document.getElementById('confirm-modal').classList.remove('open');
  deleteTarget = null;
}

function filterAdminUsers(){
  const query = document.getElementById('user-search').value.toLowerCase();
  const users = getAdminUsers();
  const filtered = users.filter(u=>u.email.toLowerCase().includes(query) || u.name.toLowerCase().includes(query));
  const tbody = document.getElementById('users-tbody');
  tbody.innerHTML = filtered.map((u,i)=>`
    <tr>
      <td>#${u.id}</td>
      <td>${u.email}</td>
      <td>${u.name}</td>
      <td><span class="badge ${u.status==='active'?'active':'inactive'}">${u.status}</span></td>
      <td>${new Date(u.created).toLocaleDateString()}</td>
      <td>
        <button class="action-btn edit" onclick="editUser(${getAdminUsers().indexOf(u)})">✏️ Edit</button>
        <button class="action-btn delete" onclick="deleteUser(${getAdminUsers().indexOf(u)})">🗑️ Delete</button>
      </td>
    </tr>
  `).join('');
}

function filterAdminProducts(){
  const query = document.getElementById('product-search').value.toLowerCase();
  const products = getAdminProducts();
  const filtered = products.filter(p=>p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
  const tbody = document.getElementById('products-tbody');
  tbody.innerHTML = filtered.map((p,i)=>`
    <tr>
      <td>${p.id}</td>
      <td>${p.title}</td>
      <td>${p.category}</td>
      <td>${formatPHP(p.price)}</td>
      <td>${(p.variants||[]).length} variants</td>
      <td>
        <button class="action-btn view" onclick="viewProduct(${getAdminProducts().indexOf(p)})">👁️ View</button>
        <button class="action-btn edit" onclick="editProduct(${getAdminProducts().indexOf(p)})">✏️ Edit</button>
        <button class="action-btn delete" onclick="deleteProduct(${getAdminProducts().indexOf(p)})">🗑️ Delete</button>
      </td>
    </tr>
  `).join('');
}

// ============= END ADMIN FUNCTIONS =============



// Collapsible sections for product page
window.toggleCollapse = function(sectionId){
  const bodyId = sectionId === 'reviews-card' ? 'reviews-card-body' : 'specs-card-body';
  const iconId = sectionId === 'reviews-card' ? 'reviews-icon' : 'specs-icon';
  const body = document.getElementById(bodyId);
  const icon = document.getElementById(iconId);
  if(!body || !icon) return;
  
  const isCollapsed = body.style.display === 'none';
  body.style.display = isCollapsed ? 'block' : 'none';
  body.style.transition = 'all 0.3s ease';
  icon.textContent = isCollapsed ? '▼' : '▶';
  icon.style.transition = 'transform 0.3s ease';
}

function validateEmail(v){ return !!v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) }
function addError(el,msg){ const e=document.createElement('div'); e.className='error'; e.textContent=msg; el.parentNode.insertBefore(e, el.nextSibling) }
function removeErrors(form){ Array.from(form.querySelectorAll('.error')).forEach(e=>e.remove()) }
