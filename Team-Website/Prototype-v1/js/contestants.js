/* ============================================================
   CONTESTANTS DATA & LOGIC
   contestants.js — Notion-inspired profile page with in-place editing
============================================================ */

const rawContestants = [
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

const CONTESTANT_STORAGE_KEY = 'mw73-contestant-cms-v4';
const COUNTRY_CODES = {
  philippines: 'ph',
  india: 'in',
  france: 'fr',
  'south-africa': 'za',
  brazil: 'br'
};
const assetModalState = {
  open: false,
  kind: '',
  galleryIndex: null,
  tempPosition: 50,
  anchor: null,
  urlTarget: '',
  flagSearch: ''
};

let activeContestantId = null;
let editDraft = null;
let editStatus = '';
let pendingUpload = null;
let editStatusTimer = null;

const contestants = rawContestants.map(normalizeContestantEntity);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.delay || '0', 10);
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function normalizeContestantEntity(raw) {
  return {
    id: raw.id,
    country: raw.country,
    flag: raw.flag,
    region: raw.region,
    gradient: raw.gradient,
    profile: {
      name: raw.name,
      tagline: raw.tagline,
      age: String(raw.age),
      occupation: raw.occupation,
      education: raw.education,
      languages: [...raw.languages],
      bio: raw.bio
    },
    media: {
      coverImage: raw.media?.coverImage || raw.media?.backgroundImage || '',
      coverPosition: raw.media?.coverPosition ?? 50,
      avatarImage: raw.media?.avatarImage || '',
      flagImage: raw.media?.flagImage || '',
      gallery: (raw.media?.gallery || []).map(normalizeGalleryItem)
    },
    beautyWithPurpose: {
      title: raw.project.name,
      description: raw.project.description,
      image: raw.beautyWithPurpose?.image || '',
      video: raw.beautyWithPurpose?.video || ''
    },
    social: {
      instagram: raw.social?.instagram || '',
      facebook: raw.social?.facebook || '',
      threads: raw.social?.threads || ''
    },
    countryGuide: {
      capital: raw.culture.capital,
      traditions: [...raw.culture.traditions],
      landmarks: [...raw.culture.landmarks],
      food: [...raw.culture.food],
      conversationStarters: [...raw.conversation_starters],
      funFacts: [...raw.fun_facts],
      pronunciation: {
        country: { ...raw.pronunciation.country },
        name: { ...raw.pronunciation.name }
      }
    }
  };
}

function normalizeGalleryItem(item) {
  if (typeof item === 'string') {
    return { src: item, title: '', description: '' };
  }
  return {
    src: item?.src || item?.image || '',
    title: item?.title || '',
    description: item?.description || ''
  };
}

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function getContestantById(id) {
  return contestants.find(item => item.id === id);
}

function getDisplayedContestant() {
  if (!activeContestantId) return null;
  return editDraft || getContestantById(activeContestantId);
}

function isEditing() {
  return Boolean(editDraft);
}

function getContestantOverrides() {
  try {
    return JSON.parse(localStorage.getItem(CONTESTANT_STORAGE_KEY) || '{}');
  } catch (error) {
    console.warn('Could not read contestant overrides:', error);
    return {};
  }
}

function saveContestantOverrides(overrides) {
  try {
    localStorage.setItem(CONTESTANT_STORAGE_KEY, JSON.stringify(overrides));
  } catch (error) {
    console.warn('Could not save contestant overrides:', error);
  }
}

function applyStoredContestantOverrides() {
  const overrides = getContestantOverrides();
  contestants.forEach(contestant => {
    const saved = overrides[contestant.id];
    if (!saved) return;
    contestant.profile = deepClone(saved.profile || contestant.profile);
    contestant.media = {
      ...contestant.media,
      ...deepClone(saved.media || {}),
      gallery: (saved.media?.gallery || contestant.media.gallery).map(normalizeGalleryItem)
    };
    contestant.beautyWithPurpose = deepClone(saved.beautyWithPurpose || contestant.beautyWithPurpose);
    contestant.social = deepClone(saved.social || contestant.social);
    contestant.countryGuide = deepClone(saved.countryGuide || contestant.countryGuide);
  });
}

function persistContestant(contestant) {
  const overrides = getContestantOverrides();
    overrides[contestant.id] = deepClone({
      profile: contestant.profile,
      media: contestant.media,
      beautyWithPurpose: contestant.beautyWithPurpose,
      social: contestant.social,
      countryGuide: contestant.countryGuide
    });
  saveContestantOverrides(overrides);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatText(value) {
  return escapeHtml(value).replace(/\n/g, '<br>');
}

function parseCsv(value) {
  return String(value || '')
    .split(',')
    .map(item => item.trim())
    .filter(Boolean);
}

function parseLines(value) {
  return String(value || '')
    .split('\n')
    .map(item => item.trim())
    .filter(Boolean);
}

function joinLines(items) {
  return Array.isArray(items) ? items.join('\n') : '';
}

function buildListItems(items) {
  return items.map(item => `<li>${escapeHtml(item)}</li>`).join('');
}

function normalizeUrl(value) {
  const trimmed = String(value || '').trim();
  if (!trimmed) return '';
  if (trimmed.startsWith('data:')) return trimmed;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed.replace(/^\/+/, '')}`;
}

function getSocialHandle(url) {
  if (!url) return '';
  try {
    const parsed = new URL(url);
    const parts = parsed.pathname.split('/').filter(Boolean);
    return parts[0] || parsed.hostname.replace(/^www\./, '');
  } catch (error) {
    return url.replace(/^@/, '').trim();
  }
}

function buildSocialLinkMarkup(contestant) {
  const links = [
    { key: 'instagram', label: 'Instagram', url: contestant.social?.instagram || '' },
    { key: 'facebook', label: 'Facebook', url: contestant.social?.facebook || '' },
    { key: 'threads', label: 'Threads', url: contestant.social?.threads || '' }
  ].filter(item => item.url);

  if (!links.length) return '';

  return `
    <div class="profile-social-links">
      ${links.map(item => `
        <a class="profile-social-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">
          <span class="profile-social-link__icon">${iconSvg(item.key)}</span>
          <span class="profile-social-link__label">${escapeHtml(getSocialHandle(item.url))}</span>
        </a>
      `).join('')}
    </div>
  `;
}

function cssUrl(url) {
  return `url("${String(url || '').replace(/"/g, '%22').replace(/\n/g, '')}")`;
}

function getYouTubeEmbedUrl(url) {
  if (!url) return '';
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('youtu.be')) {
      return `https://www.youtube.com/embed/${parsed.pathname.replace('/', '')}`;
    }
    if (parsed.hostname.includes('youtube.com')) {
      return `https://www.youtube.com/embed/${parsed.searchParams.get('v') || ''}`;
    }
  } catch (error) {
    return '';
  }
  return '';
}

function svgToDataUri(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getGeneratedFlagBackground(contestant) {
  const builders = {
    philippines: () => svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"><rect width="1600" height="450" fill="#0038A8"/><rect y="450" width="1600" height="450" fill="#CE1126"/><polygon points="0,0 0,900 700,450" fill="#FFFFFF"/><circle cx="185" cy="450" r="86" fill="#FCD116"/></svg>`),
    india: () => svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"><rect width="1600" height="300" fill="#FF9933"/><rect y="300" width="1600" height="300" fill="#FFFFFF"/><rect y="600" width="1600" height="300" fill="#138808"/><circle cx="800" cy="450" r="108" fill="none" stroke="#1A3C8B" stroke-width="18"/></svg>`),
    france: () => svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"><rect width="533.33" height="900" fill="#0055A4"/><rect x="533.33" width="533.33" height="900" fill="#FFFFFF"/><rect x="1066.66" width="533.34" height="900" fill="#EF4135"/></svg>`),
    'south-africa': () => svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"><rect width="1600" height="450" fill="#DE3831"/><rect y="450" width="1600" height="450" fill="#002395"/><polygon points="0,0 620,450 0,900" fill="#000000"/><polyline points="0,90 520,450 0,810" fill="none" stroke="#FFFFFF" stroke-width="190" stroke-linejoin="round"/><polyline points="0,120 560,450 0,780" fill="none" stroke="#007A4D" stroke-width="130" stroke-linejoin="round"/></svg>`),
    brazil: () => svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"><rect width="1600" height="900" fill="#009B3A"/><polygon points="800,120 1360,450 800,780 240,450" fill="#FFDF00"/><circle cx="800" cy="450" r="190" fill="#002776"/></svg>`)
  };
  return (builders[contestant.id] || (() => svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#003876"/><stop offset="100%" stop-color="#C9A84C"/></linearGradient></defs><rect width="1600" height="900" fill="url(#g)"/></svg>`)))();
}

function getBuiltInFlagBadgeSource(id) {
  const builders = {
    philippines: () => svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64"><rect width="96" height="32" fill="#0038A8"/><rect y="32" width="96" height="32" fill="#CE1126"/><polygon points="0,0 0,64 44,32" fill="#FFFFFF"/><circle cx="12" cy="32" r="6" fill="#FCD116"/></svg>`),
    india: () => svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64"><rect width="96" height="21.33" fill="#FF9933"/><rect y="21.33" width="96" height="21.33" fill="#FFFFFF"/><rect y="42.66" width="96" height="21.34" fill="#138808"/><circle cx="48" cy="32" r="7.5" fill="none" stroke="#1A3C8B" stroke-width="1.8"/></svg>`),
    france: () => svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64"><rect width="32" height="64" fill="#0055A4"/><rect x="32" width="32" height="64" fill="#FFFFFF"/><rect x="64" width="32" height="64" fill="#EF4135"/></svg>`),
    'south-africa': () => svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64"><rect width="96" height="32" fill="#DE3831"/><rect y="32" width="96" height="32" fill="#002395"/><polygon points="0,0 32,32 0,64" fill="#000000"/><polyline points="0,6 28,32 0,58" fill="none" stroke="#FFFFFF" stroke-width="12" stroke-linejoin="round"/><polyline points="0,8 32,32 0,56" fill="none" stroke="#007A4D" stroke-width="8" stroke-linejoin="round"/></svg>`),
    brazil: () => svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64"><rect width="96" height="64" fill="#009B3A"/><polygon points="48,8 82,32 48,56 14,32" fill="#FFDF00"/><circle cx="48" cy="32" r="11" fill="#002776"/></svg>`)
  };
  return (builders[id] || (() => ''))();
}

const FLAG_GALLERY_OPTIONS = rawContestants.map(contestant => ({
  id: contestant.id,
  country: contestant.country,
  src: getBuiltInFlagBadgeSource(contestant.id)
})).filter(option => option.src);

function getCoverImage(contestant) {
  return contestant.media.coverImage || getGeneratedFlagBackground(contestant);
}

function getDefaultFlagBadge(contestant) {
  return getBuiltInFlagBadgeSource(contestant.id);
}

function getFlagBadgeImage(contestant) {
  return contestant.media.flagImage || getDefaultFlagBadge(contestant);
}

function getAvatarMarkup(contestant, options = {}) {
  const flagImage = getFlagBadgeImage(contestant);
  const showControls = options.showControls && isEditing();
  if (contestant.media.avatarImage) {
    return `
      <div class="profile-avatar-stack">
        <img class="notion-avatar__image" src="${escapeHtml(contestant.media.avatarImage)}" alt="${escapeHtml(contestant.profile.name)} avatar" />
        ${flagImage ? `<img class="notion-avatar__flag" src="${escapeHtml(flagImage)}" alt="${escapeHtml(contestant.country)} flag" />` : ''}
        ${showControls ? `<div class="notion-avatar__controls">${buildIconButton('avatar-change', 'image', 'Edit avatar images')}</div>` : ''}
      </div>
    `;
  }
  return `
    <div class="profile-avatar-stack">
      <div class="notion-avatar__fallback">${contestant.flag}</div>
      ${flagImage ? `<img class="notion-avatar__flag" src="${escapeHtml(flagImage)}" alt="${escapeHtml(contestant.country)} flag" />` : ''}
      ${showControls ? `<div class="notion-avatar__controls">${buildIconButton('avatar-change', 'image', 'Edit avatar images')}</div>` : ''}
    </div>
  `;
}

function buildCoverStyle(contestant) {
  const position = contestant.media.coverPosition ?? 50;
  return `background-image:${cssUrl(getCoverImage(contestant))}; background-position:center ${position}%; background-size:cover; background-repeat:no-repeat;`;
}

function iconSvg(kind) {
  const icons = {
    pencil: '<path d="M4 20h4l9.5-9.5-4-4L4 16v4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12.5 6.5l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    check: '<path d="M5 12.5l4.2 4.2L19 7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
    close: '<path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    image: '<rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="10" r="1.5" fill="currentColor"/><path d="M20 16l-4.5-4.5L9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    link: '<path d="M10 14l4-4M8.5 16.5l-2 2a3 3 0 1 1-4.2-4.2l2-2M15.5 7.5l2-2a3 3 0 1 1 4.2 4.2l-2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    instagram: '<rect x="5" y="5" width="14" height="14" rx="4" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3.3" stroke="currentColor" stroke-width="1.6"/><circle cx="16.8" cy="7.4" r="1" fill="currentColor"/>',
    facebook: '<path d="M13.5 20v-7h2.4l.4-3h-2.8V8.2c0-.9.3-1.5 1.6-1.5h1.4V4.1c-.2 0-1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V10H9v3h2.2v7h2.3Z" fill="currentColor"/>',
    threads: '<path d="M15.6 10.1c-.1-2.5-1.6-3.8-4.3-3.8-2.9 0-4.8 1.9-4.8 4.8 0 3.6 2.3 6 5.8 6 2.3 0 4-.9 5.1-2.8l-1.9-1c-.7 1.1-1.7 1.6-3 1.6-2 0-3.4-1.4-3.5-3.5.7.8 1.8 1.2 3.2 1.2 2.3 0 3.6-.9 3.4-2.5Zm-4.2.8c-1.2 0-2.1-.5-2.6-1.4.5-.8 1.3-1.2 2.4-1.2 1.3 0 2.1.6 2.1 1.4 0 .8-.7 1.2-1.9 1.2Z" fill="currentColor"/>',
    move: '<path d="M12 4v16M4 12h16M8 8l4-4 4 4M8 16l4 4 4-4M16 8l4 4-4 4M8 8l-4 4 4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>',
    plus: '<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    trash: '<path d="M5 7h14M10 11v5M14 11v5M8 7l1-2h6l1 2M7 7l1 12h8l1-12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    video: '<rect x="4" y="6" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M16 11l4-2.5v7L16 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'
  };
  return `<svg viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true">${icons[kind]}</svg>`;
}

function buildIconButton(action, icon, label, extra = '') {
  return `<button class="icon-action ${extra}" type="button" data-action="${action}" aria-label="${escapeHtml(label)}">${iconSvg(icon)}</button>`;
}

function buildField(label, name, value, options = {}) {
  const { textarea = false, rows = 4, type = 'text', placeholder = '', compact = false, hideLabel = true } = options;
  const fieldPlaceholder = placeholder || label;
  return `
    <label class="notion-field ${compact ? 'notion-field--compact' : ''}">
      <span class="${hideLabel ? 'sr-only' : 'notion-field__label'}">${escapeHtml(label)}</span>
      ${textarea
        ? `<textarea class="notion-field__control notion-field__control--textarea" name="${escapeHtml(name)}" rows="${rows}" placeholder="${escapeHtml(fieldPlaceholder)}">${escapeHtml(value)}</textarea>`
        : `<input class="notion-field__control" type="${escapeHtml(type)}" name="${escapeHtml(name)}" value="${escapeHtml(value)}" placeholder="${escapeHtml(fieldPlaceholder)}" />`
      }
    </label>
  `;
}

function buildModalActions() {
  if (!activeContestantId) return '';
  if (isEditing()) {
    return `
      ${buildIconButton('cancel-edit', 'close', 'Cancel editing')}
      ${buildIconButton('save-edit', 'check', 'Save changes', 'icon-action--primary')}
    `;
  }
  return buildIconButton('start-edit', 'pencil', 'Edit contestant');
}

function renderModalActions() {
  const actions = document.querySelector('[data-role="modal-actions"]');
  if (actions) actions.innerHTML = buildModalActions();
}

function buildCard(contestant, index) {
  const card = document.createElement('div');
  card.className = 'ccard reveal';
  card.dataset.id = contestant.id;
  card.dataset.delay = String(index * 80);
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `Open ${contestant.profile.name} profile`);
  card.innerHTML = `
    <div class="ccard__visual" style="background-image:linear-gradient(180deg, rgba(7,16,31,0.18) 0%, rgba(7,16,31,0.82) 100%), ${cssUrl(getCoverImage(contestant))}; background-position:center ${contestant.media.coverPosition ?? 50}%;">
      <span class="ccard__flag">${contestant.flag}</span>
    </div>
    <div class="ccard__body">
      <div class="ccard__meta">
        <span class="ccard__region">${escapeHtml(contestant.region)}</span>
        <span class="ccard__arrow">→</span>
      </div>
      <h3 class="ccard__name">${escapeHtml(contestant.profile.name)}</h3>
      <p class="ccard__country">${escapeHtml(contestant.country)}</p>
      <p class="ccard__tagline">${escapeHtml(contestant.profile.tagline)}</p>
    </div>
  `;
  card.addEventListener('click', () => openProfile(contestant.id));
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProfile(contestant.id);
    }
  });
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
  list.forEach((contestant, index) => {
    const card = buildCard(contestant, index);
    grid.appendChild(card);
    revealObserver.observe(card);
  });
}

function getFiltered() {
  const query = document.getElementById('search-input').value.toLowerCase().trim();
  const region = document.getElementById('filter-region').value;
  const language = document.getElementById('filter-language').value;
  return contestants.filter(contestant => {
    const matchSearch = !query || contestant.profile.name.toLowerCase().includes(query) || contestant.country.toLowerCase().includes(query);
    const matchRegion = !region || contestant.region === region;
    const matchLang = !language || contestant.profile.languages.includes(language);
    return matchSearch && matchRegion && matchLang;
  });
}

function buildGallery(contestant) {
  const editing = isEditing();
  if (!contestant.media.gallery.length) {
    return `<div class="profile-empty-state">${editing ? 'No gallery yet. Use + Add image to start the gallery.' : 'No gallery images yet.'}</div>`;
  }
  return `
    <div class="gallery-rail">
      ${contestant.media.gallery.map((item, index) => `
        <article class="gallery-card">
          <div class="gallery-card__image-wrap">
            <img class="gallery-card__image" src="${escapeHtml(item.src)}" alt="${escapeHtml(item.title || contestant.profile.name)}" loading="lazy" />
            ${editing ? `
              <div class="gallery-card__controls">
                ${buildIconButton(`gallery-change:${index}`, 'image', 'Change gallery image')}
                ${buildIconButton(`gallery-remove:${index}`, 'trash', 'Remove gallery image')}
              </div>
            ` : ''}
          </div>
          <div class="gallery-card__meta">
            ${editing ? `
              ${buildField('Title', `gallery.${index}.title`, item.title, { compact: true })}
              ${buildField('Description', `gallery.${index}.description`, item.description, { textarea: true, rows: 3, compact: true })}
            ` : `
              ${item.title ? `<h4 class="gallery-card__title">${escapeHtml(item.title)}</h4>` : ''}
              ${item.description ? `<p class="gallery-card__description">${escapeHtml(item.description)}</p>` : ''}
            `}
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

function buildBeautyMedia(contestant) {
  const beauty = contestant.beautyWithPurpose;
  const embedUrl = getYouTubeEmbedUrl(beauty.video);
  return `
    <div class="beauty-media-grid">
      <div class="beauty-media-card">
        <div class="beauty-media-card__label">Image</div>
        ${beauty.image
          ? `<img class="beauty-media-card__image" src="${escapeHtml(beauty.image)}" alt="${escapeHtml(beauty.title)}" loading="lazy" />`
          : `<div class="beauty-media-card__empty">No image added yet.</div>`
        }
      </div>
      <div class="beauty-media-card">
        <div class="beauty-media-card__label">Video</div>
        ${embedUrl
          ? `<iframe class="beauty-media-card__video" src="${escapeHtml(embedUrl)}" title="${escapeHtml(beauty.title)} video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
          : beauty.video
            ? `<div class="beauty-media-card__link-wrap"><a class="beauty-media-card__link" href="${escapeHtml(beauty.video)}" target="_blank" rel="noopener noreferrer">Open video link</a></div>`
            : `<div class="beauty-media-card__empty">No video link added yet.</div>`
        }
      </div>
    </div>
  `;
}

function buildProfile(contestant) {
  const editing = isEditing();
  const { profile, beautyWithPurpose: beauty, countryGuide } = contestant;
  return `
    ${editing && editStatus ? `<div class="profile-edit-status">${escapeHtml(editStatus)}</div>` : ''}
    <div class="notion-page">
      <section class="notion-cover">
        <div class="notion-cover__media" style="${buildCoverStyle(contestant)}"></div>
        <div class="notion-cover__shade"></div>
        <div class="notion-cover__toolbar">
          <div class="notion-cover__edit" data-role="modal-actions"></div>
          ${editing ? `
            <div class="notion-cover__controls">
              ${buildIconButton('cover-change', 'image', 'Change cover image')}
              ${buildIconButton('cover-reposition', 'move', 'Reposition cover image')}
            </div>
          ` : ''}
        </div>
      </section>

      <div class="notion-page__content">
        <section class="profile-identity-card">
          <div class="profile-identity-card__main">
            <div class="notion-avatar">
              ${getAvatarMarkup(contestant, { showControls: true })}
            </div>
            <div class="profile-social-copy">
              ${editing
                ? `
                  <div class="profile-social-copy__fields">
                    ${buildField('Name', 'profile.name', profile.name, { placeholder: 'Name' })}
                    ${buildField('Short Bio', 'profile.tagline', profile.tagline, { textarea: true, rows: 3, placeholder: 'Short Bio' })}
                  </div>
                `
                : `
                  <h1 class="notion-header__title">${escapeHtml(profile.name)}</h1>
                  <p class="notion-header__subtitle">${escapeHtml(profile.tagline)}</p>
                `
              }
              ${buildSocialLinkMarkup(contestant)}
            </div>
          </div>
        </section>

        ${editing ? `
          <section class="profile-section profile-section--notion">
            <div class="profile-section__heading">
              <h3 class="profile-section__title">Social Media</h3>
            </div>
            <div class="notion-form-stack">
              ${buildField('Instagram Link', 'social.instagram', contestant.social.instagram || '', { placeholder: 'https://instagram.com/username' })}
              ${buildField('Facebook Link', 'social.facebook', contestant.social.facebook || '', { placeholder: 'https://facebook.com/name' })}
              ${buildField('Threads Link', 'social.threads', contestant.social.threads || '', { placeholder: 'https://threads.net/@username' })}
            </div>
          </section>
        ` : ''}

        <section class="profile-section profile-section--notion">
          <div class="profile-section__heading">
            <h3 class="profile-section__title">Personal Information</h3>
          </div>
          <div class="notion-info-grid">
            ${editing
              ? `
                ${buildField('Age', 'profile.age', profile.age, { type: 'number' })}
                ${buildField('Occupation', 'profile.occupation', profile.occupation)}
                ${buildField('Education', 'profile.education', profile.education, { textarea: true, rows: 3 })}
                ${buildField('Languages', 'profile.languages', profile.languages.join(', '))}
              `
              : `
                <div class="notion-info-card"><span class="notion-info-card__label">Age</span><span class="notion-info-card__value">${escapeHtml(profile.age)}</span></div>
                <div class="notion-info-card"><span class="notion-info-card__label">Occupation</span><span class="notion-info-card__value">${escapeHtml(profile.occupation)}</span></div>
                <div class="notion-info-card"><span class="notion-info-card__label">Education</span><span class="notion-info-card__value">${escapeHtml(profile.education)}</span></div>
                <div class="notion-info-card"><span class="notion-info-card__label">Languages</span><span class="notion-info-card__value">${escapeHtml(profile.languages.join(', '))}</span></div>
              `
            }
          </div>
        </section>

        <section class="profile-section profile-section--notion">
          <div class="profile-section__heading">
            <h3 class="profile-section__title">Personal Bio</h3>
          </div>
          ${editing
            ? buildField('Bio', 'profile.bio', profile.bio, { textarea: true, rows: 8 })
            : `<div class="notion-body-copy">${formatText(profile.bio)}</div>`
          }
        </section>

        <section class="profile-section profile-section--notion">
          <div class="profile-section__heading">
            <h3 class="profile-section__title">Image Gallery</h3>
            ${editing ? `<button class="gallery-add-action" type="button" data-action="gallery-add">${iconSvg('plus')}<span>Add image</span></button>` : ''}
          </div>
          ${buildGallery(contestant)}
        </section>

        <section class="profile-section profile-section--notion">
          <div class="profile-section__heading">
            <h3 class="profile-section__title">Beauty With A Purpose</h3>
            ${editing ? `<div class="section-icon-actions">${buildIconButton('beauty-image', 'image', 'Update Beauty With A Purpose image')}${buildIconButton('beauty-video', 'video', 'Update Beauty With A Purpose video')}</div>` : ''}
          </div>
          ${editing ? `
            <div class="notion-form-stack">
              ${buildField('Project Title', 'beauty.title', beauty.title)}
              ${buildField('Project Description', 'beauty.description', beauty.description, { textarea: true, rows: 6 })}
              ${buildField('Video URL', 'beauty.video', beauty.video, { placeholder: 'https://www.youtube.com/watch?v=...' })}
            </div>
          ` : ''}
          <div class="project-block">
            <div class="project-block__name">${escapeHtml(beauty.title)}</div>
            <p>${formatText(beauty.description)}</p>
          </div>
          ${buildBeautyMedia(contestant)}
        </section>

        <section class="profile-section profile-section--notion">
          <div class="profile-section__heading">
            <h3 class="profile-section__title">Country Culture Guide</h3>
          </div>
          ${editing ? `
            <div class="notion-form-stack">
              ${buildField('Capital', 'country.capital', countryGuide.capital)}
              ${buildField('Cultural Traditions', 'country.traditions', joinLines(countryGuide.traditions), { textarea: true, rows: 5 })}
              ${buildField('Landmarks', 'country.landmarks', joinLines(countryGuide.landmarks), { textarea: true, rows: 5 })}
              ${buildField('Food & Drink', 'country.food', joinLines(countryGuide.food), { textarea: true, rows: 5 })}
            </div>
          ` : ''}
          <div class="culture-grid">
            <div class="culture-item"><div class="culture-item__label">Capital</div><div class="culture-item__value">${escapeHtml(countryGuide.capital)}</div></div>
            <div class="culture-item"><div class="culture-item__label">Cultural Traditions</div><ul>${buildListItems(countryGuide.traditions)}</ul></div>
            <div class="culture-item"><div class="culture-item__label">Landmarks to Know</div><ul>${buildListItems(countryGuide.landmarks)}</ul></div>
            <div class="culture-item"><div class="culture-item__label">Food &amp; Drink</div><ul>${buildListItems(countryGuide.food)}</ul></div>
          </div>
        </section>

        <section class="profile-section profile-section--notion">
          <div class="profile-section__heading"><h3 class="profile-section__title">Conversation Starters</h3></div>
          ${editing ? buildField('Conversation Starters', 'country.conversationStarters', joinLines(countryGuide.conversationStarters), { textarea: true, rows: 6 }) : ''}
          <ol class="conversation-list">${buildListItems(countryGuide.conversationStarters)}</ol>
        </section>

        <section class="profile-section profile-section--notion">
          <div class="profile-section__heading"><h3 class="profile-section__title">Fun Facts</h3></div>
          ${editing ? buildField('Fun Facts', 'country.funFacts', joinLines(countryGuide.funFacts), { textarea: true, rows: 5 }) : ''}
          <ul class="fun-facts-list">${buildListItems(countryGuide.funFacts)}</ul>
        </section>

        <section class="profile-section profile-section--notion">
          <div class="profile-section__heading"><h3 class="profile-section__title">Pronunciation Guide</h3></div>
          ${editing ? `
            <div class="notion-info-grid notion-info-grid--editing">
              ${buildField('Country Label', 'country.pronunciationCountryWord', countryGuide.pronunciation.country.word)}
              ${buildField('Country Pronunciation', 'country.pronunciationCountryPhonetic', countryGuide.pronunciation.country.phonetic)}
              ${buildField('Name Label', 'country.pronunciationNameWord', countryGuide.pronunciation.name.word)}
              ${buildField('Name Pronunciation', 'country.pronunciationNamePhonetic', countryGuide.pronunciation.name.phonetic)}
            </div>
          ` : ''}
          <div class="pronunciation-grid">
            <div class="pronunciation-item">
              <div class="pronunciation-item__label">Country — ${escapeHtml(countryGuide.pronunciation.country.word)}</div>
              <div class="pronunciation-item__phonetic">${escapeHtml(countryGuide.pronunciation.country.phonetic)}</div>
            </div>
            <div class="pronunciation-item">
              <div class="pronunciation-item__label">Name — ${escapeHtml(countryGuide.pronunciation.name.word)}</div>
              <div class="pronunciation-item__phonetic">${escapeHtml(countryGuide.pronunciation.name.phonetic)}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderActiveProfile() {
  if (!activeContestantId) return;
  const contestant = getDisplayedContestant();
  const content = document.getElementById('modal-content');
  if (!contestant || !content) return;
  content.innerHTML = buildProfile(contestant);
  renderModalActions();
  syncEditStatusTimer();
}

function clearEditStatusTimer() {
  if (editStatusTimer) {
    clearTimeout(editStatusTimer);
    editStatusTimer = null;
  }
}

function syncEditStatusTimer() {
  clearEditStatusTimer();
  if (!editStatus || !isEditing()) return;
  editStatusTimer = setTimeout(() => {
    editStatus = '';
    if (activeContestantId && isEditing()) renderActiveProfile();
  }, 4200);
}

function getFieldValue(name) {
  const root = document.getElementById('modal-content');
  if (!root) return '';
  const field = root.querySelector(`[name="${CSS.escape(name)}"]`);
  return field ? String(field.value || '').trim() : '';
}

function syncDraftFromForm() {
  if (!editDraft) return;
  editDraft.profile.name = getFieldValue('profile.name');
  editDraft.profile.tagline = getFieldValue('profile.tagline');
  editDraft.profile.age = getFieldValue('profile.age');
  editDraft.profile.occupation = getFieldValue('profile.occupation');
  editDraft.profile.education = getFieldValue('profile.education');
  editDraft.profile.languages = parseCsv(getFieldValue('profile.languages'));
  editDraft.profile.bio = getFieldValue('profile.bio');

  editDraft.beautyWithPurpose.title = getFieldValue('beauty.title');
  editDraft.beautyWithPurpose.description = getFieldValue('beauty.description');
  editDraft.beautyWithPurpose.video = getFieldValue('beauty.video');
  editDraft.social.instagram = normalizeUrl(getFieldValue('social.instagram'));
  editDraft.social.facebook = normalizeUrl(getFieldValue('social.facebook'));
  editDraft.social.threads = normalizeUrl(getFieldValue('social.threads'));

  editDraft.countryGuide.capital = getFieldValue('country.capital');
  editDraft.countryGuide.traditions = parseLines(getFieldValue('country.traditions'));
  editDraft.countryGuide.landmarks = parseLines(getFieldValue('country.landmarks'));
  editDraft.countryGuide.food = parseLines(getFieldValue('country.food'));
  editDraft.countryGuide.conversationStarters = parseLines(getFieldValue('country.conversationStarters'));
  editDraft.countryGuide.funFacts = parseLines(getFieldValue('country.funFacts'));
  editDraft.countryGuide.pronunciation.country.word = getFieldValue('country.pronunciationCountryWord') || editDraft.country;
  editDraft.countryGuide.pronunciation.country.phonetic = getFieldValue('country.pronunciationCountryPhonetic');
  editDraft.countryGuide.pronunciation.name.word = getFieldValue('country.pronunciationNameWord') || editDraft.profile.name;
  editDraft.countryGuide.pronunciation.name.phonetic = getFieldValue('country.pronunciationNamePhonetic');

  editDraft.media.gallery.forEach((item, index) => {
    item.title = getFieldValue(`gallery.${index}.title`);
    item.description = getFieldValue(`gallery.${index}.description`);
  });
}

function openProfile(id) {
  const contestant = getContestantById(id);
  if (!contestant) return;
  activeContestantId = id;
  editDraft = null;
  editStatus = '';
  renderActiveProfile();
  const modal = document.getElementById('profile-modal');
  const panel = document.getElementById('modal-panel');
  panel.scrollTop = 0;
  clearEditStatusTimer();
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProfile() {
  clearEditStatusTimer();
  document.getElementById('profile-modal').classList.remove('open');
  document.getElementById('profile-modal').setAttribute('aria-hidden', 'true');
  activeContestantId = null;
  editDraft = null;
  editStatus = '';
  closeAssetModal();
  document.body.style.overflow = '';
}

function startEditMode() {
  if (!activeContestantId) return;
  const contestant = getContestantById(activeContestantId);
  if (!contestant) return;
  editDraft = deepClone(contestant);
  editStatus = '';
  renderActiveProfile();
}

function cancelEditMode() {
  clearEditStatusTimer();
  editDraft = null;
  editStatus = '';
  closeAssetModal();
  renderActiveProfile();
}

function saveEditMode() {
  if (!activeContestantId || !editDraft) return;
  syncDraftFromForm();
  const contestant = getContestantById(activeContestantId);
  contestant.profile = deepClone(editDraft.profile);
  contestant.media = deepClone(editDraft.media);
  contestant.beautyWithPurpose = deepClone(editDraft.beautyWithPurpose);
  contestant.social = deepClone(editDraft.social);
  contestant.countryGuide = deepClone(editDraft.countryGuide);
  persistContestant(contestant);
  clearEditStatusTimer();
  editDraft = null;
  editStatus = '';
  renderGrid(getFiltered());
  renderActiveProfile();
}

function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Could not read file.'));
    reader.readAsDataURL(file);
  });
}

function loadImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Could not process image.'));
    image.src = source;
  });
}

async function optimizeImageFile(file, options = {}) {
  const { maxWidth = 1400, quality = 0.82 } = options;
  const source = await readFile(file);
  const image = await loadImage(source);
  const scale = Math.min(1, maxWidth / image.width);
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));
  const context = canvas.getContext('2d');
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL('image/jpeg', quality);
}

function assetPreviewMarkup() {
  if (!editDraft) return '';
  if (assetModalState.kind === 'cover-change' || assetModalState.kind === 'cover-reposition') {
    return `<div class="asset-popover__cover-preview" style="${buildCoverStyle(editDraft)}"></div>`;
  }
  if (assetModalState.kind === 'gallery-add' || assetModalState.kind === 'gallery-change') {
    const item = assetModalState.galleryIndex != null ? editDraft.media.gallery[assetModalState.galleryIndex] : null;
    return item?.src ? `<img class="asset-popover__gallery-preview" src="${escapeHtml(item.src)}" alt="Gallery preview" />` : `<div class="asset-popover__empty">No image selected yet.</div>`;
  }
  if (assetModalState.kind === 'beauty-image') {
    return editDraft.beautyWithPurpose.image
      ? `<img class="asset-popover__gallery-preview" src="${escapeHtml(editDraft.beautyWithPurpose.image)}" alt="Beauty image preview" />`
      : `<div class="asset-popover__empty">No image selected yet.</div>`;
  }
  return '';
}

function buildAssetSlot(label, previewMarkup, uploadAction, inputId, value = '', placeholder = 'https://example.com/image.jpg') {
  const showUrlField = assetModalState.urlTarget === inputId;
  return `
    <div class="asset-popover__slot">
      <div class="asset-popover__slot-label">${escapeHtml(label)}</div>
      <div class="asset-popover__slot-preview">${previewMarkup}</div>
      <div class="asset-popover__icon-actions">
        <button class="icon-action" type="button" data-asset-action="${uploadAction}" aria-label="Upload local image">${iconSvg('image')}</button>
        <button class="icon-action ${showUrlField ? 'icon-action--primary' : ''}" type="button" data-asset-action="toggle-url:${inputId}" aria-label="Use image URL">${iconSvg('link')}</button>
      </div>
      ${showUrlField ? `<div class="asset-popover__url-inline"><input class="asset-popover__input" id="${inputId}" type="url" value="${escapeHtml(value)}" placeholder="${escapeHtml(placeholder)}" /></div>` : ''}
    </div>
  `;
}

function buildAssetModal() {
  if (!editDraft || !assetModalState.open) return '';
  const showUrlField = assetModalState.urlTarget === 'asset-url-input';

  if (assetModalState.kind === 'cover-change') {
    return `
      <div class="asset-popover__body">
        <div class="asset-popover__title-wrap">
          <h3 class="asset-popover__title" id="asset-title">Cover image</h3>
        </div>
        ${assetPreviewMarkup()}
        <div class="asset-popover__icon-actions">
          <button class="icon-action" type="button" data-asset-action="upload-image" aria-label="Upload local image">${iconSvg('image')}</button>
          <button class="icon-action ${showUrlField ? 'icon-action--primary' : ''}" type="button" data-asset-action="toggle-url:asset-url-input" aria-label="Use image URL">${iconSvg('link')}</button>
        </div>
        ${showUrlField ? `<div class="asset-popover__url-inline"><input class="asset-popover__input" id="asset-url-input" type="url" value="${escapeHtml(editDraft.media.coverImage || '')}" placeholder="https://example.com/cover.jpg" /><button class="icon-action icon-action--primary" type="button" data-asset-action="apply-url" aria-label="Apply image URL">${iconSvg('check')}</button></div>` : ''}
        <div class="asset-popover__footer">
          <button class="asset-popover__button asset-popover__button--ghost" type="button" data-asset-action="close">Done</button>
        </div>
      </div>
    `;
  }

  if (assetModalState.kind === 'cover-reposition') {
    return `
      <div class="asset-popover__body">
        <div class="asset-popover__title-wrap">
          <h3 class="asset-popover__title" id="asset-title">Reposition cover</h3>
        </div>
        ${assetPreviewMarkup()}
        <label class="asset-popover__slider-wrap">
          <span>Vertical position</span>
          <input class="asset-popover__slider" id="cover-position-slider" type="range" min="0" max="100" value="${assetModalState.tempPosition}" />
        </label>
        <div class="asset-popover__footer">
          <button class="asset-popover__button asset-popover__button--ghost" type="button" data-asset-action="close">Cancel</button>
          <button class="asset-popover__button" type="button" data-asset-action="apply-reposition">Apply</button>
        </div>
      </div>
    `;
  }

  if (assetModalState.kind === 'avatar') {
    const mainPreview = editDraft.media.avatarImage
      ? `<img class="asset-popover__avatar-preview" src="${escapeHtml(editDraft.media.avatarImage)}" alt="Main avatar preview" />`
      : `<div class="asset-popover__avatar-fallback">${editDraft.flag}</div>`;
    const flagPreview = getFlagBadgeImage(editDraft)
      ? `<img class="asset-popover__flag-preview" src="${escapeHtml(getFlagBadgeImage(editDraft))}" alt="${escapeHtml(editDraft.country)} flag" />`
      : `<div class="asset-popover__flag-fallback">${editDraft.flag}</div>`;
    return `
      <div class="asset-popover__body">
        <div class="asset-popover__title-wrap">
          <h3 class="asset-popover__title" id="asset-title">Edit Avatar Images</h3>
        </div>
        <div class="asset-popover__slots">
          ${buildAssetSlot('Main avatar', mainPreview, 'upload-avatar-image', 'asset-avatar-url-input', editDraft.media.avatarImage || '', 'https://example.com/avatar.jpg')}
          ${buildAssetSlot('Flag badge', flagPreview, 'upload-flag-image', 'asset-flag-url-input', editDraft.media.flagImage || '', 'https://example.com/flag.png')}
        </div>
        <div class="asset-popover__flag-picker">
          <input class="asset-popover__search" id="flag-search-input" type="search" value="${escapeHtml(assetModalState.flagSearch)}" placeholder="Search country flag..." />
          <div class="asset-popover__flag-grid">
            ${FLAG_GALLERY_OPTIONS
              .filter(option => option.country.toLowerCase().includes(assetModalState.flagSearch.toLowerCase().trim()))
              .map(option => `
                <button class="asset-popover__flag-option ${getFlagBadgeImage(editDraft) === option.src ? 'is-selected' : ''}" type="button" data-asset-action="select-flag:${option.id}" aria-label="Use ${escapeHtml(option.country)} flag">
                  <img src="${escapeHtml(option.src)}" alt="${escapeHtml(option.country)} flag" />
                  <span>${escapeHtml(option.country)}</span>
                </button>
              `).join('')}
          </div>
        </div>
        <div class="asset-popover__footer">
          <button class="asset-popover__button asset-popover__button--ghost" type="button" data-asset-action="close">Cancel</button>
          <button class="asset-popover__button" type="button" data-asset-action="apply-avatar">Apply</button>
        </div>
      </div>
    `;
  }

  if (assetModalState.kind === 'gallery-add' || assetModalState.kind === 'gallery-change') {
    const urlValue = assetModalState.kind === 'gallery-change' && assetModalState.galleryIndex != null
      ? editDraft.media.gallery[assetModalState.galleryIndex]?.src || ''
      : '';
    return `
      <div class="asset-popover__body">
        <div class="asset-popover__title-wrap">
          <h3 class="asset-popover__title" id="asset-title">${assetModalState.kind === 'gallery-add' ? 'Add gallery image' : 'Update gallery image'}</h3>
        </div>
        ${assetPreviewMarkup()}
        <div class="asset-popover__icon-actions">
          <button class="icon-action" type="button" data-asset-action="upload-image" aria-label="Upload local image">${iconSvg('image')}</button>
          <button class="icon-action ${showUrlField ? 'icon-action--primary' : ''}" type="button" data-asset-action="toggle-url:asset-url-input" aria-label="Use image URL">${iconSvg('link')}</button>
        </div>
        ${showUrlField ? `<div class="asset-popover__url-inline"><input class="asset-popover__input" id="asset-url-input" type="url" value="${escapeHtml(urlValue)}" placeholder="https://example.com/image.jpg" /><button class="icon-action icon-action--primary" type="button" data-asset-action="apply-url" aria-label="Apply image URL">${iconSvg('check')}</button></div>` : ''}
        <div class="asset-popover__footer">
          <button class="asset-popover__button asset-popover__button--ghost" type="button" data-asset-action="close">Done</button>
        </div>
      </div>
    `;
  }

  return `
    <div class="asset-popover__body">
      <div class="asset-popover__title-wrap">
        <h3 class="asset-popover__title" id="asset-title">Beauty image</h3>
      </div>
      ${assetPreviewMarkup()}
      <div class="asset-popover__icon-actions">
        <button class="icon-action" type="button" data-asset-action="upload-image" aria-label="Upload local image">${iconSvg('image')}</button>
        <button class="icon-action ${showUrlField ? 'icon-action--primary' : ''}" type="button" data-asset-action="toggle-url:asset-url-input" aria-label="Use image URL">${iconSvg('link')}</button>
      </div>
      ${showUrlField ? `<div class="asset-popover__url-inline"><input class="asset-popover__input" id="asset-url-input" type="url" value="${escapeHtml(editDraft.beautyWithPurpose.image || '')}" placeholder="https://example.com/image.jpg" /><button class="icon-action icon-action--primary" type="button" data-asset-action="apply-url" aria-label="Apply image URL">${iconSvg('check')}</button></div>` : ''}
      <div class="asset-popover__footer">
        <button class="asset-popover__button asset-popover__button--ghost" type="button" data-asset-action="close">Done</button>
      </div>
    </div>
  `;
}

function positionAssetPopover() {
  if (!assetModalState.open || !assetModalState.anchor) return;
  const popover = document.getElementById('asset-modal');
  const panel = document.getElementById('modal-panel');
  const popoverPanel = document.getElementById('asset-panel');
  if (!popover || !panel || !popoverPanel) return;
  const panelRect = panel.getBoundingClientRect();
  const anchorRect = assetModalState.anchor;
  const panelWidth = Math.min(360, panelRect.width - 32);
  let left = anchorRect.left - panelRect.left + panel.scrollLeft;
  left = Math.max(16, Math.min(left, panel.scrollWidth - panelWidth - 16));
  const top = anchorRect.bottom - panelRect.top + panel.scrollTop + 10;
  popoverPanel.style.width = `${panelWidth}px`;
  popover.style.left = `${left}px`;
  popover.style.top = `${top}px`;
}

function updateCoverVisuals() {
  const coverMedia = document.querySelector('.notion-cover__media');
  if (coverMedia && editDraft) {
    coverMedia.setAttribute('style', buildCoverStyle(editDraft));
  }
  const preview = document.querySelector('.asset-popover__cover-preview');
  if (preview && editDraft) {
    preview.setAttribute('style', buildCoverStyle(editDraft));
  }
}

function openAssetModal(kind, trigger, galleryIndex = null) {
  if (!editDraft || !trigger) return;
  syncDraftFromForm();
  assetModalState.open = true;
  assetModalState.kind = kind;
  assetModalState.galleryIndex = galleryIndex;
  assetModalState.tempPosition = editDraft.media.coverPosition ?? 50;
  assetModalState.anchor = trigger.getBoundingClientRect();
  assetModalState.urlTarget = '';
  assetModalState.flagSearch = '';
  document.getElementById('asset-modal-content').innerHTML = buildAssetModal();
  document.getElementById('asset-modal').classList.add('open');
  document.getElementById('asset-modal').setAttribute('aria-hidden', 'false');
  positionAssetPopover();
}

function closeAssetModal() {
  assetModalState.open = false;
  assetModalState.kind = '';
  assetModalState.galleryIndex = null;
  assetModalState.anchor = null;
  assetModalState.urlTarget = '';
  assetModalState.flagSearch = '';
  document.getElementById('asset-modal').classList.remove('open');
  document.getElementById('asset-modal').setAttribute('aria-hidden', 'true');
  document.getElementById('asset-modal-content').innerHTML = '';
}

async function applyAssetUrl() {
  const url = normalizeUrl(document.getElementById('asset-url-input')?.value.trim());
  if (!editDraft) return;
  if (!url) {
    editStatus = 'Please enter an image URL first.';
    renderActiveProfile();
    return;
  }

  try {
    await loadImage(url);
  } catch (error) {
    editStatus = 'That image URL could not be loaded.';
    renderActiveProfile();
    return;
  }

  if (assetModalState.kind === 'cover-change') editDraft.media.coverImage = url;
  if (assetModalState.kind === 'beauty-image') editDraft.beautyWithPurpose.image = url;
  if (assetModalState.kind === 'gallery-add' && url) editDraft.media.gallery.push({ src: url, title: '', description: '' });
  if (assetModalState.kind === 'gallery-change' && assetModalState.galleryIndex != null) editDraft.media.gallery[assetModalState.galleryIndex].src = url;

  editStatus = 'Image updated.';
  updateCoverVisuals();
  closeAssetModal();
  renderActiveProfile();
}

async function applyAvatarAssets() {
  if (!editDraft) return;
  const avatarUrl = normalizeUrl(document.getElementById('asset-avatar-url-input')?.value.trim()) || '';
  const flagUrl = normalizeUrl(document.getElementById('asset-flag-url-input')?.value.trim()) || '';
  try {
    if (avatarUrl) await loadImage(avatarUrl);
    if (flagUrl) await loadImage(flagUrl);
  } catch (error) {
    editStatus = 'One of the avatar image URLs could not be loaded.';
    renderActiveProfile();
    return;
  }
  editDraft.media.avatarImage = avatarUrl || editDraft.media.avatarImage || '';
  editDraft.media.flagImage = flagUrl || editDraft.media.flagImage || '';
  editStatus = 'Avatar updated.';
  closeAssetModal();
  renderActiveProfile();
}

function applyCoverPosition() {
  if (!editDraft) return;
  const slider = document.getElementById('cover-position-slider');
  editDraft.media.coverPosition = slider ? Number(slider.value) : 50;
  editStatus = 'Cover position updated.';
  closeAssetModal();
  renderActiveProfile();
}

async function handleFileUpload(files) {
  if (!editDraft || !pendingUpload || !files.length) return;
  syncDraftFromForm();
  if (pendingUpload.kind === 'cover') {
    editDraft.media.coverImage = await optimizeImageFile(files[0], { maxWidth: 1600, quality: 0.84 });
    editStatus = 'Cover image updated.';
    updateCoverVisuals();
  }
  if (pendingUpload.kind === 'avatar') {
    editDraft.media.avatarImage = await optimizeImageFile(files[0], { maxWidth: 640, quality: 0.9 });
    editStatus = 'Avatar updated.';
  }
  if (pendingUpload.kind === 'flag') {
    editDraft.media.flagImage = await optimizeImageFile(files[0], { maxWidth: 240, quality: 0.92 });
    editStatus = 'Flag badge updated.';
  }
  if (pendingUpload.kind === 'gallery-add') {
    const images = [];
    for (const file of files) {
      images.push({ src: await optimizeImageFile(file, { maxWidth: 1200, quality: 0.84 }), title: '', description: '' });
    }
    editDraft.media.gallery.push(...images);
    editStatus = `${images.length} image${images.length > 1 ? 's' : ''} added.`;
  }
  if (pendingUpload.kind === 'gallery-change' && pendingUpload.index != null) {
    editDraft.media.gallery[pendingUpload.index].src = await optimizeImageFile(files[0], { maxWidth: 1200, quality: 0.84 });
    editStatus = 'Gallery image updated.';
  }
  if (pendingUpload.kind === 'beauty-image') {
    editDraft.beautyWithPurpose.image = await optimizeImageFile(files[0], { maxWidth: 1400, quality: 0.84 });
    editStatus = 'Beauty With A Purpose image updated.';
  }
  pendingUpload = null;
  closeAssetModal();
  renderActiveProfile();
}

function triggerUpload(kind, index = null) {
  pendingUpload = { kind, index };
  const map = {
    cover: 'cover-upload-input',
    avatar: 'avatar-upload-input',
    flag: 'flag-upload-input',
    'gallery-add': 'gallery-upload-input',
    'gallery-change': 'gallery-upload-input',
    'beauty-image': 'beauty-image-upload-input'
  };
  const input = document.getElementById(map[kind]);
  if (input) input.click();
}

function handleModalActionClick(event) {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const action = button.dataset.action;
  if (action === 'start-edit') startEditMode();
  if (action === 'cancel-edit') cancelEditMode();
  if (action === 'save-edit') saveEditMode();
}

function handleProfileContentClick(event) {
  const button = event.target.closest('[data-action]');
  if (!button || !editDraft) return;
  syncDraftFromForm();
  const action = button.dataset.action;

  if (action === 'cover-change') openAssetModal('cover-change', button);
  if (action === 'cover-reposition') openAssetModal('cover-reposition', button);
  if (action === 'avatar-change') openAssetModal('avatar', button);
  if (action === 'gallery-add') openAssetModal('gallery-add', button);
  if (action.startsWith('gallery-change:')) openAssetModal('gallery-change', button, Number(action.split(':')[1]));
  if (action.startsWith('gallery-remove:')) {
    editDraft.media.gallery.splice(Number(action.split(':')[1]), 1);
    editStatus = 'Gallery image removed.';
    renderActiveProfile();
  }
  if (action === 'beauty-image') openAssetModal('beauty-image', button);
  if (action === 'beauty-video') {
    const field = document.querySelector('[name="beauty.video"]');
    if (field) field.focus();
  }
}

async function handleAssetModalClick(event) {
  const button = event.target.closest('[data-asset-action]');
  if (!button) return;
  const action = button.dataset.assetAction;
  if (action === 'close') closeAssetModal();
  if (action === 'apply-url') await applyAssetUrl();
  if (action === 'apply-avatar') await applyAvatarAssets();
  if (action === 'apply-reposition') applyCoverPosition();
  if (action.startsWith('toggle-url:')) {
    assetModalState.urlTarget = assetModalState.urlTarget === action.split(':')[1] ? '' : action.split(':')[1];
    document.getElementById('asset-modal-content').innerHTML = buildAssetModal();
    positionAssetPopover();
  }
  if (action.startsWith('select-flag:')) {
    const selected = FLAG_GALLERY_OPTIONS.find(option => option.id === action.split(':')[1]);
    if (selected) {
      editDraft.media.flagImage = selected.src;
      editStatus = `${selected.country} flag selected.`;
      document.getElementById('asset-modal-content').innerHTML = buildAssetModal();
      renderActiveProfile();
      positionAssetPopover();
    }
  }
  if (action === 'upload-image') {
    if (assetModalState.kind === 'cover-change') triggerUpload('cover');
    if (assetModalState.kind === 'gallery-add') triggerUpload('gallery-add');
    if (assetModalState.kind === 'gallery-change') triggerUpload('gallery-change', assetModalState.galleryIndex);
    if (assetModalState.kind === 'beauty-image') triggerUpload('beauty-image');
  }
  if (action === 'upload-avatar-image') triggerUpload('avatar');
  if (action === 'upload-flag-image') triggerUpload('flag');
}

function handleAssetModalInput(event) {
  if (event.target.id === 'cover-position-slider') {
    if (!editDraft) return;
    editDraft.media.coverPosition = Number(event.target.value);
    updateCoverVisuals();
  }
  if (event.target.id === 'flag-search-input') {
    assetModalState.flagSearch = event.target.value || '';
    document.getElementById('asset-modal-content').innerHTML = buildAssetModal();
    positionAssetPopover();
  }
}

function handleUploadInput(event) {
  const files = Array.from(event.target.files || []);
  if (!files.length) return;
  handleFileUpload(files).catch(error => {
    editStatus = error.message || 'Upload failed.';
    closeAssetModal();
    renderActiveProfile();
  }).finally(() => {
    event.target.value = '';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyStoredContestantOverrides();
  renderGrid(contestants);

  document.getElementById('search-input').addEventListener('input', () => renderGrid(getFiltered()));
  document.getElementById('filter-region').addEventListener('change', () => renderGrid(getFiltered()));
  document.getElementById('filter-language').addEventListener('change', () => renderGrid(getFiltered()));

  document.getElementById('modal-overlay').addEventListener('click', closeProfile);
  document.getElementById('modal-content').addEventListener('click', handleModalActionClick);
  document.getElementById('modal-content').addEventListener('click', handleProfileContentClick);

  document.getElementById('asset-modal-content').addEventListener('click', handleAssetModalClick);
  document.getElementById('asset-modal-content').addEventListener('input', handleAssetModalInput);

  document.getElementById('cover-upload-input').addEventListener('change', handleUploadInput);
  document.getElementById('avatar-upload-input').addEventListener('change', handleUploadInput);
  document.getElementById('flag-upload-input').addEventListener('change', handleUploadInput);
  document.getElementById('gallery-upload-input').addEventListener('change', handleUploadInput);
  document.getElementById('beauty-image-upload-input').addEventListener('change', handleUploadInput);

  document.getElementById('modal-panel').addEventListener('scroll', () => {
    if (assetModalState.open) closeAssetModal();
  });
  window.addEventListener('resize', () => {
    if (assetModalState.open) positionAssetPopover();
  });
  document.addEventListener('mousedown', event => {
    if (!assetModalState.open) return;
    const popover = document.getElementById('asset-panel');
    const triggerZone = event.target.closest('[data-action="cover-change"], [data-action="cover-reposition"], [data-action="avatar-change"], [data-action="gallery-add"], [data-action^="gallery-change:"], [data-action="beauty-image"]');
    if (popover?.contains(event.target) || triggerZone) return;
    closeAssetModal();
  });

  document.addEventListener('keydown', event => {
    const profileOpen = document.getElementById('profile-modal').classList.contains('open');
    const assetOpen = document.getElementById('asset-modal').classList.contains('open');
    if (event.key !== 'Escape') return;
    if (assetOpen) {
      closeAssetModal();
      return;
    }
    if (!profileOpen) return;
    if (isEditing()) {
      cancelEditMode();
      return;
    }
    closeProfile();
  });
});
