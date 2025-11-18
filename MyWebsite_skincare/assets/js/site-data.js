const services = [
  { id: 1, title: 'Facial Treatment', desc: 'Deep cleansing facial to refresh skin.', img: 'https://images.unsplash.com/photo-1679394270597-e90694d70350?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D', category: 'Face', details: 'Complete facial treatment with deep cleansing, exfoliation, and moisturizing.' },
  { id: 2, title: 'Body Scrub', desc: 'Exfoliating body scrub for smooth skin.', img: 'https://images.unsplash.com/photo-1683944433023-027a3f443ae4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qm9keSUyMFNjcnVifGVufDB8fDB8fHww', category: 'Body', details: 'Full body exfoliation treatment for smoother, healthier skin.' },
  { id: 3, title: 'Acne Care', desc: 'Targeted acne treatments and follow-up.', img: 'https://images.unsplash.com/photo-1686121544242-5780a88db2ae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEFjbmUlMjBDYXJlfGVufDB8fDB8fHww', category: 'Face', details: 'Professional acne treatment with specialized products and techniques.' }
];

const portfolio = [
  { id: 1, title: 'Hydrating Mask', img: 'https://images.unsplash.com/photo-1761864293840-cf73a186bff8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SHlkcmF0aW5nJTIwTWFza3xlbnwwfHwwfHx8MA%3D%3D', tag: 'Mask' },
  { id: 2, title: 'Glow Treatment', img: 'https://images.unsplash.com/photo-1763103074871-b78c815fcbcf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'Treatment' }
];

const posts = [
  { id: 1, title: '5 Tips for Healthy Skin', date: '2025-01-10', excerpt: 'Simple daily habits that improve skin health.', img: 'https://images.unsplash.com/photo-1712995519613-60d8d4143de9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEFjbmUlMjBDYXJlfGVufDB8fDB8fHww' },
  { id: 2, title: 'Choosing the Right Moisturizer', date: '2025-02-20', excerpt: 'Match moisturizer to your skin type.', img: 'https://plus.unsplash.com/premium_photo-1680740103875-048f39fe05d7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D' }
];

// helpers
function getQueryParam(name) {
  const url = new URL(location.href);
  return url.searchParams.get(name);
}

// populate functions
function populateServices(containerId) {
  const c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = '';
  const row = document.createElement('div'); row.className = 'row g-4';
  services.forEach(s => {
    const col = document.createElement('div'); col.className = 'col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="card h-100 shadow-sm border rounded-3">
        <img src="${s.img}" class="card-img-top" style="height:250px; object-fit:cover;" alt="${s.title}">
        <div class="card-body">
          <h5 class="card-title">${s.title}</h5>
          <p class="card-text text-muted">${s.desc}</p>
          <a href="service-details.html?id=${s.id}" class="btn btn-primary">Learn more</a>
        </div>
      </div>`;
    row.appendChild(col);
  });
  c.appendChild(row);
}

function populatePortfolio(containerId) {
  const c = document.getElementById(containerId); if (!c) return;
  c.innerHTML = '';
  const row = document.createElement('div'); row.className = 'row g-4';
  portfolio.forEach(p => {
    const col = document.createElement('div'); col.className = 'col-sm-6 col-md-4';
    col.innerHTML = `
      <div class="card h-100 border rounded-3 shadow-sm">
        <img src="${p.img}" class="card-img-top" style="height:250px; object-fit:cover;" alt="${p.title}">
        <div class="card-body">
          <h6 class="card-title">${p.title} <span class="badge bg-secondary">${p.tag}</span></h6>
        </div>
      </div>`;
    row.appendChild(col);
  });
  c.appendChild(row);
}

function populatePosts(containerId) {
  const c = document.getElementById(containerId); if (!c) return;
  c.innerHTML = '';
  const row = document.createElement('div'); row.className = 'row g-4';
  posts.forEach(p => {
    const col = document.createElement('div'); col.className = 'col-md-6 col-lg-12';
    col.innerHTML = `
      <div class="card mb-3 shadow-sm border rounded-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${p.img}" class="img-fluid rounded-start h-100" style="object-fit:cover; min-height:200px;" alt="${p.title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${p.title}</h5>
              <p class="card-text text-muted"><small><i class="bi bi-calendar3 me-2"></i>${p.date}</small></p>
              <p class="card-text">${p.excerpt}</p>
              <a href="blog-details.html?id=${p.id}" class="btn btn-outline-primary">Read more</a>
            </div>
          </div>
        </div>
      </div>`;
    row.appendChild(col);
  });
  c.appendChild(row);
}

// details loaders
function loadServiceDetails(containerId) {
  const id = getQueryParam('id') || services[0].id;
  const s = services.find(x => String(x.id) === String(id)) || services[0];
  const c = document.getElementById(containerId); if (!c) return;
  
  c.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-8">
        <h1 class="h3">${s.title}</h1>
        <p class="text-muted">${s.desc}</p>
        <img src="${s.img}" class="img-fluid rounded-3 shadow-sm mb-4" style="height:300px; width:100%; object-fit:cover;" alt="${s.title}">
        
        <h4 class="mt-4 mb-3">Service Details</h4>
        <p>${s.details || s.desc}</p>
        
        <div class="accordion mt-4" id="faq">
          <div class="accordion-item">
            <h2 class="accordion-header" id="h1">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c1" aria-expanded="false" aria-controls="c1">
                What to expect?
              </button>
            </h2>
            <div id="c1" class="accordion-collapse collapse" aria-labelledby="h1" data-bs-parent="#faq">
              <div class="accordion-body">Professional treatment with high-quality products and experienced staff.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="h2">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c2" aria-expanded="false" aria-controls="c2">
                How long does it take?
              </button>
            </h2>
            <div id="c2" class="accordion-collapse collapse" aria-labelledby="h2" data-bs-parent="#faq">
              <div class="accordion-body">Sessions typically last 45-60 minutes depending on the service.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="h3">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c3" aria-expanded="false" aria-controls="c3">
                Common Questions
              </button>
            </h2>
            <div id="c3" class="accordion-collapse collapse" aria-labelledby="h3" data-bs-parent="#faq">
              <div class="accordion-body">Here are answers to common questions about the service. Feel free to contact us for more information.</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4">
        <div class="card sticky-top shadow-sm border rounded-3" style="top: 100px;">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0">All Services</h5>
          </div>
          <div class="list-group list-group-flush">
            ${services.map(srv => `
              <a href="service-details.html?id=${srv.id}" class="list-group-item list-group-item-action ${String(srv.id) === String(id) ? 'active' : ''}">
                <i class="bi bi-check-circle me-2"></i>${srv.title}
              </a>
            `).join('')}
          </div>
        </div>
      </div>
    </div>`;
}

function loadPostDetails(containerId) {
  const id = getQueryParam('id') || posts[0].id;
  const p = posts.find(x => String(x.id) === String(id)) || posts[0];
  const c = document.getElementById(containerId); if (!c) return;
  
  c.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-8">
        <h1 class="h3">${p.title}</h1>
        <p class="text-muted"><i class="bi bi-calendar3 me-2"></i>${p.date}</p>
        <img src="${p.img}" class="img-fluid rounded-3 shadow-sm mb-4" style="height:400px; width:100%; object-fit:cover;" alt="${p.title}">
        <div class="mt-4">
          <p class="lead">${p.excerpt}</p>
          <p>Full article content goes here. This would include detailed information about ${p.title.toLowerCase()}.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      
      <div class="col-lg-4">
        <div class="card sticky-top shadow-sm border rounded-3" style="top: 100px;">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0">Recent Posts</h5>
          </div>
          <div class="list-group list-group-flush">
            ${posts.map(post => `
              <a href="blog-details.html?id=${post.id}" class="list-group-item list-group-item-action ${String(post.id) === String(id) ? 'active' : ''}">
                <div class="d-flex w-100 justify-content-between">
                  <h6 class="mb-1">${post.title}</h6>
                </div>
                <small class="text-muted">${post.date}</small>
              </a>
            `).join('')}
          </div>
        </div>
      </div>
    </div>`;
}

// convenience init for home
function initHome() {
  populateServices('servicesGrid');
  populatePosts('postsGrid');
}

// expose
if (typeof window !== 'undefined') {
  window.populateServices = populateServices;
  window.populatePortfolio = populatePortfolio;
  window.populatePosts = populatePosts;
  window.loadServiceDetails = loadServiceDetails;
  window.loadPostDetails = loadPostDetails;
  window.initHome = initHome;
  window.services = services;
  window.portfolio = portfolio;
  window.posts = posts;
}