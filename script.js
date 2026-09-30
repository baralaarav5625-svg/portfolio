/* ============================================================
   PROJECTS DATA
   ============================================================ */
const projects = [
  { title:'M.A.T. — Multi-purpose Agricultural Tool', cat:'agriculture', catLabel:'Agriculture', year:'2022 — Present',
    summary:'A hybrid-powered, compact agricultural machine designed to automate small-scale farming.',
    cover:'linear-gradient(140deg,#0f172a 0%,#0e7490 62%,#06b6d4 100%)',
    features:['Tilling / digging plow with adjustable depth','Precision seed sowing mechanism','Ground levelling attachment','Dual cutters for crop and weed management','Built-in soil irrigation system','Petrol engine + 24V battery charged via solar panel','Real-time soil humidity and temperature monitoring'],
    tags:['Hybrid Power','Solar','Sensors','CAD','1st Place Build'] },
  { title:'High-Performance RC Robot Car', cat:'robotics', catLabel:'Robotics', year:'2024',
    summary:'A custom 2.4 GHz long-range remote-controlled vehicle engineered for varied terrains.',
    cover:'linear-gradient(140deg,#0f172a 0%,#7c2d12 60%,#f59e0b 100%)',
    features:['Arduino Uno based control architecture','FlySky FS-i6 transmitter / receiver — up to 3 km range','Dedicated motor driver stage','Stock configuration plus upgraded rugged off-road build','Optimised battery placement for balance and traction'],
    tags:['Arduino','RF Control','Motor Drivers','Off-road'] },
  { title:'Autonomous Hydroponics System', cat:'automation', catLabel:'Automation', year:'2024',
    summary:'An automated, climate-controlled environmental system engineered for optimal indoor plant growth and nutrient management.',
    cover:'linear-gradient(140deg,#0f172a 0%,#065f46 60%,#10b981 100%)',
    features:['Automated nutrient dosing and pH management','Climate control for temperature and humidity','Scheduled irrigation cycling','Continuous environmental monitoring'],
    tags:['Automation','Hydroponics','Climate Control'] },
  { title:'Wildfire Prediction System', cat:'iot', catLabel:'IoT & Systems', year:'2025',
    summary:'An early detection and prediction monitoring setup built to analyse environmental metrics and issue fire hazard warnings.',
    cover:'linear-gradient(140deg,#0f172a 0%,#991b1b 60%,#f97316 100%)',
    features:['Multi-metric environmental sensing','Fire hazard threshold analysis','Early warning alert output','Prediction logic for risk trending'],
    tags:['Sensors','Prediction','Early Warning'] },
  { title:'Firefighter Robot', cat:'robotics', catLabel:'Robotics', year:'2024',
    summary:'An automated response bot designed to detect and extinguish flames in hazardous environments.',
    cover:'linear-gradient(140deg,#0f172a 0%,#9a3412 58%,#ef4444 100%)',
    features:['Flame detection sensor array','Onboard water pump and nozzle','Obstacle navigation while approaching fire','Autonomous response routine via Arduino'],
    tags:['Flame Sensors','Pump System','Autonomous'] },
  { title:'Obstacle Avoiding Robot (OAR)', cat:'robotics', catLabel:'Robotics', year:'2023',
    summary:'An autonomous navigation robot engineered to manoeuvre through unknown environments without collision.',
    cover:'linear-gradient(140deg,#0f172a 0%,#1e3a8a 60%,#3b82f6 100%)',
    features:['Servo-mounted ultrasonic and IR sensors','Real-time distance measurement and path calculation','Arduino-driven decision logic','Debris and obstacle avoidance steering'],
    tags:['Ultrasonic','IR','Servo','Navigation'] },
  { title:'Smart Car Parking System', cat:'iot', catLabel:'IoT & Systems', year:'2025',
    summary:'An IoT and Arduino-based prototype designed to reduce urban parking congestion through automated slot detection.',
    cover:'linear-gradient(140deg,#0f172a 0%,#4c1d95 60%,#8b5cf6 100%)',
    features:['IR / ultrasonic sensors for real-time slot availability','Automated servo-gate barrier','LCD status display for drivers','IoT layer for remote slot monitoring'],
    tags:['IoT','Arduino','Servo Gate','LCD'] }
];

/* ============================================================
   AWARDS DATA
   👉 Put your certificate photos inside the "images" folder
      and name them cert-1.jpg, cert-2.jpg … cert-8.jpg
   ============================================================ */
const awards = [
  { place:'1st', title:'VECTOR 3rd National Technical Festival', org:'IOE, Pashchimanchal Campus — Open Project Demonstration (+2 Category)', year:'2082 / 2026', photo:'images/cert-1.jpg' },
  { place:'1st', title:'Himalayan Science Festival 3.0', org:'Himalayan Science Foundation & Science Teachers Association of Nepal — Sainik Awasiya Mahavidyalaya, Pokhara', year:'2080 B.S.', photo:'images/cert-2.jpg' },
  { place:'1st', title:'Autoways Science Fair', org:'Autoways Pvt. Ltd. & Sainik Awasiya Mahavidyalaya — Project: M.A.T. I', year:'2022', photo:'images/cert-3.jpg' },
  { place:'1st', title:'Community School Cluster Science & Tech Exhibition', org:'Shree Mahendra Secondary School / Pokhara Metropolitan Ward No. 20', year:'2081 B.S.', photo:'images/cert-4.jpg' },
  { place:'1st', title:'Best Presentation Award — Science Exhibition', org:'Shree Shitaladevi Community Secondary School, Pokhara', year:'2082 B.S.', photo:'images/cert-5.jpg' },
  { place:'2nd', title:'COAS Grand Science Exhibition', org:'Chief of the Army Staff [COAS] / Ripumardini Sainik Mahavidyalaya, Kathmandu — National level', year:'2079 / 2080 B.S.', photo:'images/cert-6.jpg' },
  { place:'2nd', title:"Fishtail SEE Scholars' Cup", org:'Fishtail Academy IB World School — Design Thinking Challenge', year:'2082 / 2025', photo:'images/cert-7.jpg' },
  { place:'2nd', title:'Pokhara Metropolitan Inter-School Open Science Exhibition', org:'Chhorepatan Secondary School, Pokhara', year:'2024', photo:'images/cert-8.jpg' }
];

/* ============================================================
   GALLERY DATA
   👉 Name your photos gal-1.jpg, gal-2.jpg, … inside "images"
   ============================================================ */
const gallery = [
  { src:'images/gal-1.jpg', tag:'Award',    caption:'VECTOR 3rd National Technical Festival — 1st Place' },
  { src:'images/gal-2.jpg', tag:'Project',  caption:'M.A.T. — Multi-purpose Agricultural Tool' },
  { src:'images/gal-3.jpg', tag:'Award',    caption:'Himalayan Science Festival 3.0' },
  { src:'images/gal-4.jpg', tag:'Project',  caption:'Firefighter Robot demo session' },
  { src:'images/gal-5.jpg', tag:'Media',    caption:'Kaji — Feature Film, junior lead role' },
  { src:'images/gal-6.jpg', tag:'Project',  caption:'Obstacle Avoiding Robot (OAR)' },
  { src:'images/gal-7.jpg', tag:'Award',    caption:'COAS Grand Science Exhibition — 2nd Place' },
  { src:'images/gal-8.jpg', tag:'Project',  caption:'Autonomous Hydroponics System' },
  { src:'images/gal-9.jpg', tag:'Media',    caption:'On-set during Kaji filming' }
];

/* ============================================================
   LIGHTBOX (shared for certificates + gallery)
   ============================================================ */
const lightbox     = document.getElementById('lightbox');
const lightboxImg  = document.getElementById('lightboxImg');
const lightboxCap  = document.getElementById('lightboxCaption');
const lbPrev       = document.getElementById('lightboxPrev');
const lbNext       = document.getElementById('lightboxNext');

let lbItems = [];   // current list of {src, caption}
let lbIndex = 0;

function openLightbox(items, startIndex){
  lbItems = items;
  lbIndex = startIndex;
  renderLightbox();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderLightbox(){
  const item = lbItems[lbIndex];
  if (!item) return;
  lightboxImg.src = item.src;
  lightboxImg.alt = item.caption || '';
  lightboxCap.textContent = item.caption || '';
  const many = lbItems.length > 1;
  lbPrev.style.display = many ? 'grid' : 'none';
  lbNext.style.display = many ? 'grid' : 'none';
}

function closeLightbox(){
  lightbox.classList.remove('open');
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

if (lightbox) {
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  lbPrev.addEventListener('click', e => { e.stopPropagation(); lbIndex = (lbIndex - 1 + lbItems.length) % lbItems.length; renderLightbox(); });
  lbNext.addEventListener('click', e => { e.stopPropagation(); lbIndex = (lbIndex + 1) % lbItems.length; renderLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  { lbIndex = (lbIndex - 1 + lbItems.length) % lbItems.length; renderLightbox(); }
    if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % lbItems.length; renderLightbox(); }
  });
}

/* ============================================================
   PROJECTS + MODAL
   ============================================================ */
const grid = document.getElementById('grid');

if (grid) {
  function renderProjects(cat = 'all'){
    const list = cat === 'all' ? projects : projects.filter(p => p.cat === cat);
    grid.innerHTML = list.map((p, i) => {
      const index = String(projects.indexOf(p) + 1).padStart(2, '0');
      return `
        <article class="card" data-index="${projects.indexOf(p)}" style="animation-delay:${i * 55}ms">
          <div class="card-cover" style="background:${p.cover}">
            <span class="card-index">${index}</span>
            <span class="card-cat">${p.catLabel}</span>
          </div>
          <div class="card-body">
            <h3>${p.title}</h3>
            <p>${p.summary}</p>
            <div class="card-tags">
              ${p.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            <span class="card-more">
              View details
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M9 7h8v8"/></svg>
            </span>
          </div>
        </article>`;
    }).join('');
  }
  renderProjects();

  const filtersEl = document.getElementById('filters');
  if (filtersEl) {
    filtersEl.addEventListener('click', e => {
      const btn = e.target.closest('.filter');
      if (!btn) return;
      document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.cat);
    });
  }

  const modal = document.getElementById('modal');
  function openModal(i){
    const p = projects[i];
    document.getElementById('modalCat').textContent = p.catLabel + ' · ' + p.year;
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalDesc').textContent = p.summary;
    document.getElementById('modalFeatures').innerHTML = p.features.map(f => `<li>${f}</li>`).join('');
    document.getElementById('modalTags').innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    modal.classList.add('open');
  }
  function closeModal(){ modal.classList.remove('open'); }

  grid.addEventListener('click', e => {
    const card = e.target.closest('.card');
    if (card) openModal(Number(card.dataset.index));
  });
  document.getElementById('modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

/* ============================================================
   AWARDS RENDER (with certificate thumbnails)
   ============================================================ */
const awardList = document.getElementById('awardList');
if (awardList) {
  awardList.innerHTML = awards.map((a, i) => `
    <div class="award-row">
      <div class="award-place ${a.place === '1st' ? 'first' : 'second'}">${a.place}</div>
      <div class="award-photo" data-award="${i}">
        <span class="award-photo-empty">🎓</span>
        <img src="${a.photo}" alt="${a.title} certificate" onerror="this.remove()">
        <span class="award-photo-zoom">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
            <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M11 8v6M8 11h6"/>
          </svg>
        </span>
      </div>
      <div class="award-main">
        <h4>${a.title}</h4>
        <p>${a.org}</p>
      </div>
      <div class="award-year">${a.year}</div>
    </div>
  `).join('');

  // Click any certificate thumbnail → open lightbox with all certificates
  const certItems = awards
    .filter(a => a.photo)
    .map(a => ({ src: a.photo, caption: `${a.title} — ${a.org} (${a.year})` }));

  awardList.addEventListener('click', e => {
    const thumb = e.target.closest('.award-photo');
    if (!thumb) return;
    const i = Number(thumb.dataset.award);
    const a = awards[i];
    if (!a.photo) return;
    const startIdx = certItems.findIndex(c => c.src === a.photo);
    openLightbox(certItems, startIdx >= 0 ? startIdx : 0);
  });
}

/* ============================================================
   GALLERY RENDER
   ============================================================ */
const galleryGrid = document.getElementById('galleryGrid');
if (galleryGrid) {
  galleryGrid.innerHTML = gallery.map((g, i) => `
    <div class="gallery-item" data-gal="${i}" style="animation-delay:${i * 45}ms">
      <div class="gallery-fallback">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
          <rect x="3" y="5" width="18" height="14" rx="3"/>
          <circle cx="9" cy="11" r="2"/>
          <path d="m4 19 5-5 3 3 3-3 5 5"/>
        </svg>
        <span>Photo coming soon</span>
      </div>
      <img src="${g.src}" alt="${g.caption}" onerror="this.remove()">
      <div class="gallery-overlay">
        ${g.tag ? `<span class="tag-pill">${g.tag}</span>` : ''}
        <h4>${g.caption}</h4>
      </div>
    </div>
  `).join('');

  const galleryItems = gallery.map(g => ({ src: g.src, caption: `${g.tag ? g.tag + ' · ' : ''}${g.caption}` }));

  galleryGrid.addEventListener('click', e => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;
    openLightbox(galleryItems, Number(item.dataset.gal));
  });
}

/* ============================================================
   SLIDE DECK
   ============================================================ */
const track = document.getElementById('deckTrack');
if (track) {
  const slides = Array.from(track.children);
  const total = slides.length;
  let current = 0;

  const currentEl  = document.getElementById('deckCurrent');
  const prevBtn    = document.getElementById('prevBtn');
  const nextBtn    = document.getElementById('nextBtn');
  const navButtons = document.querySelectorAll('#deckNav button');
  const dots       = document.getElementById('dots');

  slides.forEach((s, i) => {
    const b = document.createElement('button');
    b.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    b.addEventListener('click', () => go(i));
    dots.appendChild(b);
  });
  const dotEls = Array.from(dots.children);

  function go(i){
    current = Math.max(0, Math.min(total - 1, i));
    track.style.transform = `translateX(-${current * 100}%)`;
    currentEl.textContent = String(current + 1).padStart(2, '0');
    navButtons.forEach((b, k) => b.classList.toggle('active', k === current));
    dotEls.forEach((d, k) => d.classList.toggle('active', k === current));
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
    slides[current].scrollTop = 0;
  }

  navButtons.forEach((b, i) => b.addEventListener('click', () => go(i)));
  prevBtn.addEventListener('click', () => go(current - 1));
  nextBtn.addEventListener('click', () => go(current + 1));

  document.addEventListener('keydown', e => {
    if (e.target.matches('input, textarea')) return;
    if (lightbox && lightbox.classList.contains('open')) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown') go(current + 1);
    if (e.key === 'ArrowLeft'  || e.key === 'PageUp')   go(current - 1);
    if (e.key === 'Home') go(0);
    if (e.key === 'End')  go(total - 1);
  });

  document.querySelectorAll('[data-goto]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      go(Number(el.dataset.goto));
    });
  });

  go(0);
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(form);
    const name = (d.get('name') || '').trim();
    const email = (d.get('email') || '').trim();
    const message = (d.get('message') || '').trim();
    if (!name || !email || !message) {
      alert('Please fill in your name, email and message.');
      return;
    }
    const subject = encodeURIComponent(d.get('subject') || `Portfolio enquiry from ${name}`);
    const body    = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:hello@aaravbaral.com?subject=${subject}&body=${body}`;
  });
}

/* ============================================================
   YEAR
   ============================================================ */
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();