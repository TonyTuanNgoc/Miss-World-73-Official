/* ============================================================
   CONTESTANTS DATA & LOGIC
   contestants.js — extends main.js (nav scroll already handled)
============================================================ */

const contestants = [
  {
    id: 'philippines',
    name: 'Maria Santos',
    country: 'Philippines',
    flag: '🇵🇭',
    tagline: 'Empowering communities through sustainable agriculture education',
    region: 'Asia Pacific',
    languages: ['English', 'Filipino'],
    age: 24,
    occupation: 'Environmental Scientist',
    education: 'University of the Philippines — B.Sc. Environmental Science',
    bio: 'Maria grew up in the province of Pampanga, surrounded by rice fields and fishing communities. Watching local farmers struggle with drought and soil depletion inspired her to pursue environmental science. She now leads a youth initiative teaching sustainable farming in underserved rural areas — a mission that has reached over 3,000 families across Luzon.',
    project: {
      name: 'Roots & Seeds',
      description: 'A grassroots program training rural youth as community agricultural educators. Participants learn soil conservation, rainwater harvesting, and organic farming — then return to their villages to teach others. The program has established 14 community gardens and reduced food insecurity in partner barangays by 40%.'
    },
    culture: {
      capital: 'Manila',
      traditions: [
        "Fiesta culture — every town celebrates its patron saint's festival",
        'Bayanihan — collective community spirit and cooperation',
        'Pasalubong — the tradition of bringing gifts home from any journey'
      ],
      landmarks: [
        'Chocolate Hills, Bohol',
        'El Nido, Palawan',
        'Intramuros, Manila',
        'Mayon Volcano, Albay'
      ],
      food: [
        'Adobo — meat braised in vinegar and soy sauce',
        'Sinigang — sour tamarind soup with vegetables',
        'Lechon — whole roasted pig, centerpiece of celebrations',
        'Halo-halo — shaved ice dessert with sweet toppings'
      ]
    },
    conversation_starters: [
      'Tell us about the moment you realized sustainable farming could change lives in your community.',
      'The Philippines has over 7,600 islands — which one feels most like home to you, and why?',
      'What does Bayanihan mean to you personally — and how do you see it in your Beauty With A Purpose work?',
      'How has growing up in Pampanga shaped your values and your mission?',
      'What is one Filipino tradition or dish you would love to share with contestants here in Vietnam?'
    ],
    fun_facts: [
      'The Philippines is the only predominantly Christian country in Southeast Asia.',
      'There are over 180 languages spoken across the 7,600+ Philippine islands.',
      'Filipino is the only Asian language with Spanish loanwords as part of everyday vocabulary.',
      'The Philippines is home to one of the world\'s smallest fish — the Paedocypris progenetica.'
    ],
    pronunciation: {
      country: { word: 'Philippines', phonetic: 'FIL-ih-peenz' },
      name: { word: 'Maria Santos', phonetic: 'mah-REE-ah SAHN-tos' }
    },
    gradient: 'blue'
  },
  {
    id: 'india',
    name: 'Priya Sharma',
    country: 'India',
    flag: '🇮🇳',
    tagline: 'Bringing digital literacy and education equity to rural girls',
    region: 'South & Southeast Asia',
    languages: ['English', 'Hindi', 'Tamil'],
    age: 22,
    occupation: 'Education Activist & Software Developer',
    education: 'Lady Shri Ram College, New Delhi — B.A. Political Science',
    bio: "Priya was born in Chennai and raised in New Delhi, experiencing firsthand the stark contrast between India's urban opportunities and rural realities. At 19, she co-founded a non-profit delivering solar-powered tablet libraries to remote villages in Rajasthan. She is also a self-taught programmer who builds learning apps for children with no internet access.",
    project: {
      name: 'Akash — Sky Without Limits',
      description: 'A solar-powered offline digital library initiative equipping rural schools with curated educational content accessible without internet. Each Akash Kit serves up to 200 students and includes multilingual resources in 12 languages. Currently operational in 38 villages across Rajasthan and Madhya Pradesh, serving over 7,600 children.'
    },
    culture: {
      capital: 'New Delhi',
      traditions: [
        'Namaste — the traditional greeting with hands pressed together',
        'Diwali — Festival of Lights celebrated across many religions',
        'Holi — the Festival of Colors marking the arrival of spring',
        'Atithi Devo Bhava — "the guest is god", a core principle of Indian hospitality'
      ],
      landmarks: [
        'Taj Mahal, Agra',
        'Amber Fort, Jaipur',
        'Kerala Backwaters',
        'Himalayan mountain range, north India'
      ],
      food: [
        'Biryani — fragrant spiced rice layered with meat or vegetables',
        'Masala dosa — crispy crepe with spiced potato filling',
        'Butter chicken — mild tomato-cream curry, beloved worldwide',
        'Chai — spiced milk tea, a daily ritual across all regions'
      ]
    },
    conversation_starters: [
      "India has 22 official languages — how does language shape identity and community in your experience?",
      "You're both a political science graduate and a self-taught software developer. How do those two worlds meet in your work?",
      'Tell us about a specific child whose life was changed by the Akash program.',
      'What is one misconception about India you would love the world to reconsider?',
      'How does Atithi Devo Bhava — the idea that every guest is sacred — show up in your daily work and life?'
    ],
    fun_facts: [
      "India has the world's largest film industry by number of films produced annually — Bollywood is just one of many regional industries.",
      'Chess was invented in India around the 6th century AD.',
      'India is the world\'s largest democracy, with over 900 million eligible voters.',
      'The number zero and the decimal system were developed by Indian mathematicians.'
    ],
    pronunciation: {
      country: { word: 'India', phonetic: 'IN-dee-ah' },
      name: { word: 'Priya Sharma', phonetic: 'PREE-yah SHAR-mah' }
    },
    gradient: 'globe'
  },
  {
    id: 'france',
    name: 'Camille Dubois',
    country: 'France',
    flag: '🇫🇷',
    tagline: 'Using design and fashion to advocate for climate consciousness',
    region: 'Europe',
    languages: ['French', 'English', 'Spanish'],
    age: 23,
    occupation: 'Fashion Designer & Climate Advocate',
    education: 'École Nationale Supérieure des Arts Décoratifs, Paris — Fashion Design',
    bio: "Camille grew up in Lyon — France's gastronomic capital — with a grandmother who sewed all her clothes by hand. That early connection to craft and material led her to fashion design. After witnessing the textile industry's environmental toll, she pivoted her career toward sustainable fashion advocacy, collaborating with NGOs to promote circular clothing initiatives across French urban communities.",
    project: {
      name: 'Tissu Vivant — Living Fabric',
      description: 'A sustainable fashion education program running in 12 French cities. Camille and her team teach textile recycling, upcycling techniques, and the environmental cost of fast fashion to young people aged 14–25. The program has diverted over 4 tonnes of clothing from landfill and trained 2,200 young people in circular fashion principles.'
    },
    culture: {
      capital: 'Paris',
      traditions: [
        'La bise — a cheek-kiss greeting (number of kisses varies by region)',
        'Gastronomie — food culture recognized as UNESCO Intangible Cultural Heritage',
        'Apéritif culture — pre-meal drinks as a social and conversational ritual',
        'Les grandes vacances — the national August holiday tradition'
      ],
      landmarks: [
        'Eiffel Tower, Paris',
        'Palace of Versailles',
        'Mont-Saint-Michel, Normandy',
        "The French Riviera (Côte d'Azur)"
      ],
      food: [
        'Croissant — buttery laminated pastry, the French morning ritual',
        'Coq au vin — chicken braised slowly in red wine',
        'Bouillabaisse — traditional Provençal seafood stew from Marseille',
        'Crème brûlée — custard dessert with caramelized sugar crust'
      ]
    },
    conversation_starters: [
      "How did your grandmother's hand-sewing shape your love of craft — and eventually lead you toward climate advocacy?",
      'France is synonymous with haute couture and luxury — how do you make the case for sustainability within that world?',
      'What surprised you most about how young people across France responded to your Tissu Vivant workshops?',
      'What is one thing about French culture you think the rest of the world genuinely misunderstands?',
      'Vietnam has a rich tradition of textile craft, especially silk and áo dài — have you found any connections there?'
    ],
    fun_facts: [
      'France is the world\'s most visited country, welcoming over 90 million tourists every year.',
      'French is an official language in 29 countries across 5 continents.',
      'France produces over 1,600 distinct varieties of cheese.',
      'The Louvre in Paris is the most visited museum on Earth, housing over 380,000 works.'
    ],
    pronunciation: {
      country: { word: 'France', phonetic: 'FRAHNS' },
      name: { word: 'Camille Dubois', phonetic: 'kah-MEE doo-BWAH' }
    },
    gradient: 'interview'
  },
  {
    id: 'south-africa',
    name: 'Naledi Dlamini',
    country: 'South Africa',
    flag: '🇿🇦',
    tagline: 'Healing township communities through accessible mental health support',
    region: 'Africa',
    languages: ['English', 'Zulu', 'Xhosa'],
    age: 25,
    occupation: 'Community Psychologist',
    education: 'University of Cape Town — B.Sc. Psychology, Postgrad Diploma in Community Mental Health',
    bio: "Naledi grew up in Soweto, one of South Africa's most historically significant townships. After losing a close friend to untreated depression, she pursued psychology with a single mission: to bring mental health support to communities where it is either unaffordable or culturally stigmatized. She founded a network of peer counselors operating across Gauteng.",
    project: {
      name: 'Ubuntu Heals',
      description: 'A peer-led mental health support network built on the philosophy of Ubuntu — "I am because we are." Trained community members provide culturally grounded emotional support, mental health first aid, and crisis referrals. Operating in 9 townships across Gauteng and the Western Cape, the network has conducted over 12,000 peer support sessions since 2023.'
    },
    culture: {
      capital: 'Pretoria (executive) · Cape Town (legislative) · Bloemfontein (judicial)',
      traditions: [
        'Ubuntu — the philosophy of collective humanity: "I am because we are"',
        "Braai — South Africa's beloved barbecue culture, a national bonding ritual",
        'Lobola — traditional bride-price negotiation ceremony',
        'Heritage Day — celebrated 24 September as a day of cultural pride'
      ],
      landmarks: [
        'Table Mountain, Cape Town',
        'Kruger National Park',
        'Robben Island',
        'Drakensberg Mountains'
      ],
      food: [
        "Braai — barbecued meat, the cornerstone of South African social life",
        'Bobotie — spiced minced meat baked with egg custard topping',
        'Bunny chow — hollowed bread filled with curry, a Durban specialty',
        "Boerewors — spiced farmer's sausage, essential at any braai"
      ]
    },
    conversation_starters: [
      '"I am because we are" — Ubuntu is at the heart of your work. How has that philosophy shaped your approach to mental health?',
      'What was the moment that made you realize your community needed a different kind of support than what existed?',
      'South Africa has 11 official languages — how do language and culture affect how people open up about mental health?',
      'What gives you hope when working in communities that carry such deep historical pain?',
      "Is there something about Soweto or township life you'd love the world to understand more fully?"
    ],
    fun_facts: [
      'South Africa is the only country in the world with three capital cities.',
      'South Africa has 11 official languages — the most of any African country.',
      'Nelson Mandela spent 27 years imprisoned before becoming the country\'s first democratically elected president.',
      'The world\'s largest diamond, the Cullinan Diamond, was found in South Africa in 1905.'
    ],
    pronunciation: {
      country: { word: 'South Africa', phonetic: 'sowth AF-ree-kah' },
      name: { word: 'Naledi Dlamini', phonetic: 'nah-LEH-dee dlah-MEE-nee' }
    },
    gradient: 'vietnam'
  },
  {
    id: 'brazil',
    name: 'Isabella Ferreira',
    country: 'Brazil',
    flag: '🇧🇷',
    tagline: 'Protecting the Amazon through indigenous youth leadership',
    region: 'Americas',
    languages: ['Portuguese', 'English', 'Spanish'],
    age: 23,
    occupation: 'Environmental Lawyer & Indigenous Rights Advocate',
    education: 'Pontifícia Universidade Católica do Rio — Law, Environmental & Indigenous Rights',
    bio: 'Isabella was raised in Manaus, a city at the heart of the Amazon basin. Her childhood was defined by the forest — and by watching it shrink. With mixed indigenous and Portuguese heritage, she trained as an environmental lawyer and now represents indigenous communities in land rights cases before Brazilian federal courts, while running a leadership program for indigenous youth.',
    project: {
      name: 'Raízes — Roots',
      description: 'A leadership and legal literacy program for indigenous youth from 11 communities in the Amazon basin. Participants learn their land rights, traditional ecological knowledge, and how to represent themselves in modern legal and governmental systems. Raízes has supported 3 successful land demarcation cases and trained over 340 young indigenous leaders since 2022.'
    },
    culture: {
      capital: 'Brasília',
      traditions: [
        "Carnaval — the world's largest carnival, held before Lent each year",
        "Futebol — football is not just sport; it's a national identity and social language",
        'Jeitinho brasileiro — the creative, flexible Brazilian approach to problem-solving',
        'Festa Junina — a beloved June festival with folk music, dancing, and traditional food'
      ],
      landmarks: [
        'Amazon Rainforest, Manaus',
        'Christ the Redeemer, Rio de Janeiro',
        'Iguazú Falls, Paraná',
        'Lençóis Maranhenses National Park'
      ],
      food: [
        'Feijoada — black bean stew with pork, considered the national dish',
        'Pão de queijo — cheesy tapioca bread rolls eaten at any time of day',
        'Brigadeiro — chocolate truffle, present at every Brazilian celebration',
        'Açaí — antioxidant-rich purple berry, consumed daily in the Amazon'
      ]
    },
    conversation_starters: [
      'Growing up in Manaus — what did you witness that drove you toward environmental law?',
      'How do you bridge the gap between traditional indigenous knowledge and modern legal systems?',
      "Carnaval is Brazil's global image — but what part of Brazilian culture deserves more of the world's attention?",
      'Tell us about one young leader from the Raízes program who has moved or surprised you.',
      'What would you want Miss World audiences to understand about the Amazon that they don\'t already know?'
    ],
    fun_facts: [
      'Brazil contains approximately 60% of the Amazon Rainforest, the world\'s largest tropical forest.',
      'Brazil is the fifth largest country in the world and the largest in South America.',
      'Brazil is the only Portuguese-speaking country in the Americas.',
      'Brazil has won the FIFA World Cup five times — more than any other nation in history.'
    ],
    pronunciation: {
      country: { word: 'Brazil', phonetic: 'bruh-ZIL' },
      name: { word: 'Isabella Ferreira', phonetic: 'ee-zah-BEL-ah feh-HEY-rah' }
    },
    gradient: 'media'
  }
];

/* ============================================================
   REVEAL OBSERVER
   main.js only observes elements present at DOMContentLoaded.
   Cards are rendered dynamically, so we need a separate observer.
============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.delay || '0');
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

/* ============================================================
   RENDERING
============================================================ */
function buildCard(c, index) {
  const card = document.createElement('div');
  card.className = 'ccard reveal';
  card.dataset.id = c.id;
  card.dataset.delay = String(index * 80);
  card.innerHTML = `
    <div class="ccard__visual ccard__visual--${c.gradient}">
      <span class="ccard__flag">${c.flag}</span>
    </div>
    <div class="ccard__body">
      <div class="ccard__meta">
        <span class="ccard__region">${c.region}</span>
        <span class="ccard__arrow">→</span>
      </div>
      <h3 class="ccard__name">${c.name}</h3>
      <p class="ccard__country">${c.country}</p>
      <p class="ccard__tagline">${c.tagline}</p>
    </div>
  `;
  card.addEventListener('click', () => openProfile(c.id));
  return card;
}

function renderGrid(list) {
  const grid = document.getElementById('contestants-grid');
  const noResults = document.getElementById('no-results');
  const countEl = document.getElementById('filter-count');

  grid.innerHTML = '';

  if (list.length === 0) {
    noResults.style.display = 'block';
    countEl.textContent = '0 contestants';
    return;
  }

  noResults.style.display = 'none';
  countEl.textContent = `${list.length} contestant${list.length !== 1 ? 's' : ''}`;

  list.forEach((c, i) => {
    const card = buildCard(c, i);
    grid.appendChild(card);
    revealObserver.observe(card);
  });
}

/* ============================================================
   FILTER
============================================================ */
function getFiltered() {
  const query = document.getElementById('search-input').value.toLowerCase().trim();
  const region = document.getElementById('filter-region').value;
  const language = document.getElementById('filter-language').value;

  return contestants.filter(c => {
    const matchSearch = !query ||
      c.name.toLowerCase().includes(query) ||
      c.country.toLowerCase().includes(query);
    const matchRegion = !region || c.region === region;
    const matchLang = !language || c.languages.includes(language);
    return matchSearch && matchRegion && matchLang;
  });
}

/* ============================================================
   PROFILE MODAL — BUILD HTML
============================================================ */
function buildListItems(items) {
  return items.map(item => `<li>${item}</li>`).join('');
}

function buildProfile(c) {
  return `
    <div class="profile-header">
      <div class="profile-flag-block">${c.flag}</div>
      <div class="profile-intro">
        <div class="section-label">${c.country} · ${c.region}</div>
        <h2 class="profile-name">${c.name}</h2>
        <p class="profile-tagline-text">${c.tagline}</p>
      </div>
    </div>

    <div class="profile-basics">
      <div class="profile-basic">
        <span class="profile-basic__label">Age</span>
        <span class="profile-basic__value">${c.age}</span>
      </div>
      <div class="profile-basic">
        <span class="profile-basic__label">Occupation</span>
        <span class="profile-basic__value">${c.occupation}</span>
      </div>
      <div class="profile-basic">
        <span class="profile-basic__label">Education</span>
        <span class="profile-basic__value">${c.education}</span>
      </div>
      <div class="profile-basic">
        <span class="profile-basic__label">Languages</span>
        <span class="profile-basic__value">${c.languages.join(', ')}</span>
      </div>
    </div>

    <div class="profile-section">
      <h3 class="profile-section__title">Personal Bio</h3>
      <p>${c.bio}</p>
    </div>

    <div class="profile-section">
      <h3 class="profile-section__title">Beauty With A Purpose</h3>
      <div class="project-block">
        <div class="project-block__name">${c.project.name}</div>
        <p>${c.project.description}</p>
      </div>
    </div>

    <div class="profile-section">
      <h3 class="profile-section__title">Country Culture Guide</h3>
      <div class="culture-grid">
        <div class="culture-item">
          <div class="culture-item__label">Capital</div>
          <div class="culture-item__value">${c.culture.capital}</div>
        </div>
        <div class="culture-item">
          <div class="culture-item__label">Cultural Traditions</div>
          <ul>${buildListItems(c.culture.traditions)}</ul>
        </div>
        <div class="culture-item">
          <div class="culture-item__label">Landmarks to Know</div>
          <ul>${buildListItems(c.culture.landmarks)}</ul>
        </div>
        <div class="culture-item">
          <div class="culture-item__label">Food &amp; Drink</div>
          <ul>${buildListItems(c.culture.food)}</ul>
        </div>
      </div>
    </div>

    <div class="profile-section">
      <h3 class="profile-section__title">Conversation Starters</h3>
      <ol class="conversation-list">${buildListItems(c.conversation_starters)}</ol>
    </div>

    <div class="profile-section">
      <h3 class="profile-section__title">Fun Facts</h3>
      <ul class="fun-facts-list">${buildListItems(c.fun_facts)}</ul>
    </div>

    <div class="profile-section">
      <h3 class="profile-section__title">Pronunciation Guide</h3>
      <div class="pronunciation-grid">
        <div class="pronunciation-item">
          <div class="pronunciation-item__label">Country — ${c.pronunciation.country.word}</div>
          <div class="pronunciation-item__phonetic">${c.pronunciation.country.phonetic}</div>
        </div>
        <div class="pronunciation-item">
          <div class="pronunciation-item__label">Name — ${c.pronunciation.name.word}</div>
          <div class="pronunciation-item__phonetic">${c.pronunciation.name.phonetic}</div>
        </div>
      </div>
    </div>
  `;
}

/* ============================================================
   MODAL OPEN / CLOSE
============================================================ */
function openProfile(id) {
  const c = contestants.find(x => x.id === id);
  if (!c) return;

  const modal = document.getElementById('profile-modal');
  const panel = document.getElementById('modal-panel');
  const content = document.getElementById('modal-content');

  content.innerHTML = buildProfile(c);
  panel.scrollTop = 0;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProfile() {
  const modal = document.getElementById('profile-modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderGrid(contestants);

  document.getElementById('search-input').addEventListener('input', () => {
    renderGrid(getFiltered());
  });
  document.getElementById('filter-region').addEventListener('change', () => {
    renderGrid(getFiltered());
  });
  document.getElementById('filter-language').addEventListener('change', () => {
    renderGrid(getFiltered());
  });

  document.getElementById('modal-close').addEventListener('click', closeProfile);
  document.getElementById('modal-overlay').addEventListener('click', closeProfile);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeProfile();
  });
});
