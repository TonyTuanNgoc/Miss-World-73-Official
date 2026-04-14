/* ============================================================
   LOCATIONS & EXPERIENCES DATA & LOGIC
   locations.js — extends main.js (nav scroll already handled)
============================================================ */

const locations = [
  {
    id: 'hue-imperial-city',
    name: 'Imperial City of Huế',
    nameVi: 'Kinh thành Huế',
    region: 'Central Vietnam',
    city: 'Thừa Thiên Huế Province',
    activityDate: 'Aug 05',
    short_desc: 'A UNESCO World Heritage site and former imperial capital — the historic citadel of the Nguyễn dynasty stands as Vietnam\'s most complete expression of royal architecture, culture, and heritage.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80',
    overview: 'The Imperial City of Huế served as the political and cultural capital of unified Vietnam under the Nguyễn dynasty from 1802 to 1945. Situated along the Perfume River, the complex spans over 500 hectares of palaces, temples, courtyards, and ceremonial walls. Designated as a UNESCO World Heritage Site in 1993, it remains one of the most significant historical sites in Southeast Asia — a place where dynastic ambition, Confucian values, and Vietnamese craftsmanship converge.',
    cultural_highlights: [
      'The Noon Gate (Ngọ Môn) — the five-arched main entrance — was once reserved exclusively for the Emperor himself',
      'Royal architecture blends Vietnamese tradition with Chinese imperial influence: elaborate lacquered columns, ornate rooflines, and vibrant mosaic inlays',
      'The Forbidden Purple City (Tử Cấm Thành) at the heart of the complex was the Emperor\'s private residence — ordinary citizens were forbidden to enter on pain of death',
      'Traditional Huế court music (Nhã nhạc) is listed as UNESCO Intangible Cultural Heritage — it originated in these royal halls',
      'Huế cuisine is considered the most refined in Vietnam, rooted in the elaborate food culture of the imperial court'
    ],
    highlight_images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=75',
      null,
      null,
      null,
      'https://images.unsplash.com/photo-1527515637462-cff94aca208b?auto=format&fit=crop&w=600&q=75'
    ],
    interview_angles: [
      'What part of Vietnamese royal history has surprised or moved you most during this visit?',
      'How does this citadel compare to historic royal palaces or heritage sites in your own country?',
      'Walking through a place where an entire dynasty lived and shaped a nation — what does that feel like?',
      'Huế cuisine is said to be Vietnam\'s most sophisticated — have you tasted anything here you\'d love to bring home?',
      'If you could ask the last Emperor of Vietnam one question, what would it be?'
    ],
    photo_moments: [
      'Noon Gate (Ngọ Môn) — the iconic five-arched entrance, most powerful in golden morning light',
      'Thai Hoa Palace courtyard — vast ceremonial space with dramatic symmetry and red lacquered columns',
      'Nine Dynastic Urns (Cửu Đỉnh) — ornate bronze vessels, excellent for detail and cultural storytelling shots',
      'Perfume River from the citadel walls at dusk — cinematic, wide, deeply atmospheric',
      'Royal Garden (Thiệu Phương Garden) — peaceful, lush, and intimate for quieter conversation settings'
    ],
    fun_facts: [
      'The citadel walls reach up to 21 metres in height and stretch 2.5 kilometres on each side.',
      'Emperor Gia Long began construction in 1805 — it took over 20 years to complete using an estimated 30,000 workers.',
      'Huế was severely damaged during the 1968 Tet Offensive. Much of what stands today has been painstakingly restored over decades.',
      'At its height, the royal court employed over 10,000 staff — cooks, musicians, scribes, soldiers, and servants.',
      'Over 300 restaurants in Huế still serve authentic dishes inspired by royal court recipes, some unchanged for 200 years.'
    ]
  },
  {
    id: 'temple-of-literature',
    name: 'Temple of Literature',
    nameVi: 'Văn Miếu – Quốc Tử Giám',
    region: 'Hanoi',
    city: 'Hanoi',
    activityDate: 'Aug 07',
    short_desc: 'Vietnam\'s first national university, founded in 1070 — one of Hanoi\'s most revered landmarks and a living symbol of the country\'s centuries-long reverence for education and scholarship.',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1400&q=80',
    overview: 'Founded in 1070 under Emperor Lý Thánh Tông to honor Confucius, the Temple of Literature served as Vietnam\'s first national university for over 700 years — educating the mandarins, scholars, and officials who shaped the nation. Its five serene courtyards, tranquil gardens, and 82 carved stone steles — each bearing the names of doctoral graduates, the oldest dating from 1484 — make it one of Vietnam\'s most important cultural sanctuaries.',
    cultural_highlights: [
      'Vietnamese students visit before major examinations to rub the stone turtles for good luck — a ritual that has persisted for centuries',
      'The 82 stone doctorate steles, each mounted on a carved stone turtle, represent the highest scholarly honor in Vietnam\'s academic tradition',
      'The Khue Van Pavilion (Khuê Văn Các) is so iconic it appears on Hanoi\'s official emblem — it symbolizes the city\'s intellectual identity',
      'Confucian values — education, filial piety, loyalty, and community responsibility — are foundational to Vietnamese cultural identity',
      'Traditional scholarly ceremonies and new year blessing festivals are still held here each year'
    ],
    highlight_images: [
      null,
      null,
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=600&q=75',
      null,
      null
    ],
    interview_angles: [
      'Education is deeply sacred in Vietnamese culture — how does that value compare to what you experienced growing up?',
      'Standing among 82 stone steles honoring graduates from 600 years ago — how does that make you reflect on your own education journey?',
      'Vietnamese students still come here before exams for good luck. Are there similar traditions around success and learning in your country?',
      'What does it mean to visit a place that has honored scholarship for nearly 1,000 years?',
      'If you could inscribe one piece of wisdom on a stone stele for future generations, what would it say?'
    ],
    photo_moments: [
      'Khue Van Pavilion — the iconic square pavilion perfectly reflected in the Well of Heavenly Clarity below',
      'Stone doctorate steles on turtle bases — powerful, quiet symbols of academic history across generations',
      'Great House of Ceremonies (Đại Thành) — ornate red and gold main shrine hall with striking lacquered columns',
      'Second courtyard walkway at early morning — symmetrical, mist-draped, and architecturally beautiful',
      'Ancient banyan trees throughout the complex — weathered and vast, excellent for atmospheric framing'
    ],
    fun_facts: [
      'The Temple of Literature has stood for over 950 years — older than most universities in Europe.',
      'Only four scholars in the entire exam history achieved the title of "Trạng nguyên" — the Vietnamese equivalent of valedictorian.',
      'The complex covers 54,000 square metres and contains over 100 ancient trees, some centuries old.',
      'The stone doctorate steles were designated a UNESCO World Documentary Heritage in 2010.',
      'At its peak, the university educated hundreds of scholars simultaneously, with students sometimes studying for over a decade to pass the imperial examinations.'
    ]
  },
  {
    id: 'ben-thanh-market',
    name: 'Bến Thành Market',
    nameVi: 'Chợ Bến Thành',
    region: 'Ho Chi Minh City',
    city: 'District 1, Ho Chi Minh City',
    activityDate: 'Aug 09',
    short_desc: 'One of Vietnam\'s most iconic landmarks — a century-old market alive with street food, silk, handicrafts, and the irrepressible energy of Saigon daily life.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1400&q=80',
    overview: 'Bến Thành Market has anchored the heart of Ho Chi Minh City since 1914, making it one of the earliest surviving structures in Saigon. More than a marketplace, it is a living symbol of the city\'s energy, resilience, and warmth — a place where vendors, families, tourists, and locals have gathered for generations. Inside its four halls, over 3,000 stalls offer everything from fresh seafood and tropical fruit to lacquerware, silk, and Vietnamese coffee. At night, the surrounding streets transform into a vibrant open-air food market.',
    cultural_highlights: [
      'Vietnamese market culture is built on long relationships — regular vendors know their customers by name, and bargaining is a social art form, not a transaction',
      'The clock tower is one of the most instantly recognized icons of Saigon — it has appeared on postcards and city emblems for over a century',
      'Southern Vietnamese street food at the market represents Ho Chi Minh City\'s culinary identity: bolder, sweeter, and more herb-driven than Northern cuisine',
      'The surrounding roundabout (Quảng trường Quách Thị Trang) is a daily gathering point and landmark for the entire city',
      'After dark, the area transforms into an outdoor night market extending the tradition of street commerce into the evening'
    ],
    highlight_images: [
      null,
      null,
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=75',
      null,
      null
    ],
    interview_angles: [
      'Walking through Bến Thành — what is the very first thing that hits your senses: the colors, the smells, the sounds?',
      'Markets are often the true heartbeat of a culture. How does this one compare to the most memorable market you\'ve visited at home?',
      'Vietnamese street food is famous worldwide — have you tried anything here that surprised or moved you?',
      'This market has survived colonial rule, wartime, reunification, and rapid modernization. What does that kind of resilience say about Vietnamese people?',
      'If you could bring one thing from this market back as a gift to someone you love, what would it be and why?'
    ],
    photo_moments: [
      'Main entrance with the clock tower — instantly recognizable backdrop for portraits and wide establishing shots',
      'Inside the market aisles — vibrant textiles, hanging lanterns, and piled tropical fruit create rich visual layers',
      'Street food corner stalls — bánh mì, phở, cà phê sữa đá — perfect for authentic cultural food moments',
      'Flower vendors arranging fresh bundles at dawn — documentary-style and deeply atmospheric',
      'Night market surrounding streets after sunset — warm golden lamplight, crowds, and movement'
    ],
    fun_facts: [
      'The original Bến Thành Market was established in the 17th century near the banks of the Sài Gòn River — the current colonial-era building dates to 1914.',
      '"Bến Thành" translates roughly as "City Wharf" — a reference to the original river landing site where goods were unloaded.',
      'Over 3,000 stalls operate inside the market, employing more than 6,000 vendors and their families.',
      'Bến Thành Market survived the French colonial era, two world wars, and the Vietnam War without being destroyed.',
      'The market\'s clock tower has become so embedded in Saigon\'s identity that it appears on official city tourism materials to this day.'
    ]
  },
  {
    id: 'hoi-an',
    name: 'Hội An Ancient Town',
    nameVi: 'Phố Cổ Hội An',
    region: 'Central Vietnam',
    city: 'Quảng Nam Province',
    activityDate: 'Aug 11',
    short_desc: 'A perfectly preserved UNESCO World Heritage trading port glowing with hundreds of handmade silk lanterns — where Japanese, Chinese, and Vietnamese culture fused into one of Southeast Asia\'s most magical atmospheres.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=80',
    overview: 'Hội An Ancient Town is one of the best-preserved international trading ports in Southeast Asia, with a history spanning over 2,000 years. Once home to Japanese, Chinese, Dutch, and Portuguese merchant communities, the town\'s architecture, cuisine, and customs bear the unmistakable marks of centuries of cultural exchange. At night, the streets come alive with hundreds of handmade silk lanterns, creating a warm, timeless atmosphere that has made Hội An one of Vietnam\'s most beloved destinations.',
    cultural_highlights: [
      'The Full Moon Lantern Festival — held every month — turns off all electric lights, filling the town with only the glow of handmade silk lanterns floating on the river',
      'Japanese Covered Bridge (Cầu Nhật Bản) — a 400-year-old lacquered wooden bridge built by Japanese merchants in the 16th century, now the most iconic symbol of Hội An',
      'Hội An is Vietnam\'s tailor capital — dozens of workshops create custom silk garments by hand, often within 24 hours',
      'Phúc Kiến Assembly Hall (1697) — built by Chinese Fujian merchants — is a single building that contains five centuries of cultural layering in ornament, ritual, and architecture',
      'Cao lầu — a local rice noodle dish — is considered authentic only when made with water drawn from the ancient Bá Lễ well in the old town'
    ],
    highlight_images: [
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=600&q=75',
      null,
      null,
      null,
      null
    ],
    interview_angles: [
      'Walking through Hội An at night, with lanterns glowing all around — what emotion does this place bring out in you?',
      'This town was shaped by Japanese, Chinese, Portuguese, and Vietnamese cultures over centuries. What does that kind of layering say about Vietnam\'s history?',
      'Hội An tailors can create a custom silk dress in 24 hours — if you could design a garment that represented your country, what would it look like?',
      'The Full Moon Festival turns off all electric lights — is there a tradition in your country that creates a similar feeling of stepping back in time?',
      'Hội An is one of the few ancient trading ports almost perfectly preserved. What do you think would be lost if places like this disappeared?'
    ],
    photo_moments: [
      'Japanese Covered Bridge at dusk — lantern-lit and reflected perfectly in the canal below',
      'Riverside lantern reflections — especially stunning during the Full Moon Lantern Festival',
      'Ancient House alleyways — narrow, layered, atmospheric, and rich with texture at every angle',
      'Phúc Kiến Assembly Hall courtyard — dramatic red and gold with ornate stone carvings',
      'Riverside terrace cafes at dusk — warm light, river view, ideal for relaxed interview settings'
    ],
    fun_facts: [
      'Hội An was designated a UNESCO World Heritage Site in 1999, with over 1,000 historic structures still intact.',
      'The Japanese Covered Bridge appeared on the 20,000 Vietnamese đồng banknote — making it one of the most widely circulated images in the country.',
      'Hội An has more than 450 tailoring shops and is considered one of the best places in the world for made-to-measure silk clothing.',
      'The town remained almost unchanged for centuries partly because the railway bypassed it in the early 1900s, limiting industrial development.',
      'Traditional lantern-making is a family craft passed through generations — each lantern is entirely handmade from bamboo and silk, and no two are identical.'
    ]
  },
  {
    id: 'phu-quoc',
    name: 'Phú Quốc Island',
    nameVi: 'Đảo Phú Quốc',
    region: 'Southern Vietnam',
    city: 'Kiên Giang Province',
    activityDate: 'Aug 13',
    short_desc: 'Vietnam\'s largest island — where pristine white-sand beaches, turquoise tropical waters, and lush national forest meet world-class hospitality and the warmth of island community life.',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1400&q=80',
    overview: 'Phú Quốc is Vietnam\'s largest island and one of Southeast Asia\'s most breathtaking natural destinations. Located in the Gulf of Thailand off the coast of Kiên Giang Province, the island covers 574 square kilometres of pristine tropical forest, coral reefs, white-sand beaches, and clear water. Once a quiet fishing community and wartime prison island, Phú Quốc has transformed into a world-class destination while preserving much of its natural character and the warmth of its local fishing culture.',
    cultural_highlights: [
      'Phú Quốc fish sauce (nước mắm Phú Quốc) is considered the finest in Vietnam — produced using traditional fermentation methods passed down through generations of fishing families',
      'Pearl farming is a major local industry — Phú Quốc\'s pearls are prized across Asia for their quality and distinctive golden color',
      'The island carries a complex wartime history — Phú Quốc Prison, once used by French and South Vietnamese forces, is now a sobering museum',
      'Local fishing communities maintain centuries-old sea worship traditions and hold festivals tied to the lunar calendar each year',
      'Phú Quốc pepper is among the most aromatic in the world — the island\'s interior pepper plantations have produced it since the 17th century'
    ],
    highlight_images: [
      null,
      null,
      null,
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=75',
      null
    ],
    interview_angles: [
      'Standing on this island surrounded by turquoise water and tropical forest — how does nature on this scale make you feel?',
      'Vietnam is often seen as a country of history and cities — does Phú Quốc change how you think about what Vietnam is?',
      'This island was once a wartime prison — now it welcomes visitors from around the world. What does that transformation say to you?',
      'Phú Quốc fish sauce is one of Vietnam\'s most celebrated culinary traditions — how important is traditional food to your own country\'s identity?',
      'If you could describe Phú Quốc in one word to someone who had never heard of it — what would it be?'
    ],
    photo_moments: [
      'Sao Beach (Bãi Sao) — one of Vietnam\'s most photogenic beaches, with shallow turquoise water and white sand',
      'Dinh Cậu Rock at sunset (Đá Dinh Cậu) — a sea-facing shrine on a dramatic cliff, cinematic in any light',
      'Long Beach (Bãi Trường) at golden hour — expansive, warm, and softly atmospheric',
      'Pearl farm boat excursion — authentic local culture with blue-water backdrop throughout',
      'Tropical forest interior trails — lush green canopy and quiet for nature-focused content'
    ],
    fun_facts: [
      'Phú Quốc Island is larger than Singapore and home to a national park that covers over 57% of its total land area.',
      'The island produces around 40% of all fish sauce made in Vietnam — over 3 million litres per year using traditional craft methods.',
      'Phú Quốc has over 150 distinct beaches and a largely undisturbed coral reef ecosystem offshore.',
      'The island received its first international airport in 2012 — before that, it was only accessible by boat from the mainland.',
      'Phú Quốc has been named one of the world\'s best islands multiple times by Travel + Leisure, Condé Nast Traveler, and Lonely Planet.'
    ]
  }
];

/* ============================================================
   REVEAL OBSERVER (for dynamically rendered cards)
============================================================ */
const locRevealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.delay || '0');
      setTimeout(() => entry.target.classList.add('visible'), delay);
      locRevealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

/* ============================================================
   BUILD TIMELINE CARD
============================================================ */
function buildCard(loc, index) {
  const item = document.createElement('div');
  item.className = 'tl-item';

  const card = document.createElement('div');
  card.className = 'lcard reveal';
  card.dataset.id = loc.id;
  card.dataset.delay = String(index * 100);

  card.innerHTML = `
    <div class="lcard__image">
      <img
        src="${loc.image}"
        alt="${loc.name}"
        ${index === 0 ? '' : 'loading="lazy"'}
        onerror="this.style.display='none'"
      />
    </div>
    <div class="lcard__body">
      <div class="lcard__meta">
        <span class="lcard__region">${loc.region}</span>
        <span class="lcard__arrow">→</span>
      </div>
      <h3 class="lcard__name">${loc.name}</h3>
      <p class="lcard__name-vi">${loc.nameVi}</p>
      <p class="lcard__desc">${loc.short_desc}</p>
    </div>
  `;

  card.addEventListener('click', () => openLocation(loc.id));
  item.appendChild(card);

  const dateEl = document.createElement('div');
  dateEl.className = 'tl-date';
  dateEl.innerHTML = `
    <span class="tl-date__label">Activity Date</span>
    <span class="tl-date__value">${loc.activityDate}</span>
  `;
  item.appendChild(dateEl);

  return item;
}

/* ============================================================
   RENDER TIMELINE
============================================================ */
function renderGrid() {
  const timeline = document.getElementById('locations-grid');
  timeline.innerHTML = '';
  locations.forEach((loc, i) => {
    const item = buildCard(loc, i);
    timeline.appendChild(item);
    locRevealObserver.observe(item.querySelector('.lcard'));
  });
}

/* ============================================================
   LOCATION DETAIL MODAL — BUILD HTML
============================================================ */
function buildHighlightItems(items, images) {
  return items.map((text, i) => {
    const imgUrl = images && images[i];
    const imgBlock = imgUrl
      ? `<div class="loc-highlight-img">
           <img src="${imgUrl}" alt="" loading="lazy"
                onerror="this.parentElement.classList.add('placeholder'); this.remove();" />
         </div>`
      : `<div class="loc-highlight-img placeholder"></div>`;
    return `<li>${imgBlock}<p class="loc-highlight-text">${text}</p></li>`;
  }).join('');
}

function buildListItems(items) {
  return items.map(item => `<li>${item}</li>`).join('');
}

function buildLocationDetail(loc) {
  return `
    <div class="loc-modal__hero">
      <img src="${loc.image}" alt="${loc.name}" />
      <div class="loc-modal__hero-overlay"></div>
      <div class="loc-modal__hero-label">
        <div class="section-label">${loc.region} · ${loc.city}</div>
        <h2 class="loc-modal__hero-title">${loc.name}</h2>
        <p class="loc-modal__hero-vi">${loc.nameVi}</p>
      </div>
    </div>

    <div class="loc-modal__content">

      <div class="loc-section">
        <h3 class="loc-section__title">Overview</h3>
        <p>${loc.overview}</p>
      </div>

      <div class="loc-section">
        <h3 class="loc-section__title">Cultural Highlights</h3>
        <ul class="loc-list loc-list--img">${buildHighlightItems(loc.cultural_highlights, loc.highlight_images)}</ul>
      </div>

      <div class="loc-section">
        <h3 class="loc-section__title">Interview Opportunities</h3>
        <ol class="interview-list">${buildListItems(loc.interview_angles)}</ol>
      </div>

      <div class="loc-section">
        <h3 class="loc-section__title">Photo &amp; Video Moments</h3>
        <ul class="photo-list">${buildListItems(loc.photo_moments)}</ul>
      </div>

      <div class="loc-section">
        <h3 class="loc-section__title">Fun Facts</h3>
        <ul class="facts-list">${buildListItems(loc.fun_facts)}</ul>
      </div>

    </div>
  `;
}

/* ============================================================
   MODAL OPEN / CLOSE
============================================================ */
function openLocation(id) {
  const loc = locations.find(l => l.id === id);
  if (!loc) return;

  const modal = document.getElementById('loc-modal');
  const panel = document.getElementById('modal-panel');
  const content = document.getElementById('modal-content');
  const breadcrumb = document.getElementById('modal-breadcrumb');

  content.innerHTML = buildLocationDetail(loc);
  breadcrumb.textContent = `${loc.region} · ${loc.name}`;
  panel.scrollTop = 0;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLocation() {
  const modal = document.getElementById('loc-modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderGrid();

  document.getElementById('modal-close').addEventListener('click', closeLocation);
  document.getElementById('modal-overlay').addEventListener('click', closeLocation);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLocation();
  });
});
