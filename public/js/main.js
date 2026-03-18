const fallbackData = {
  profile: {
    name: 'Leonisis M. Asis',
    location: 'Bunakan, Madridejos, Cebu',
    title: 'Front-end Developer | Web Developer',
    email: 'Leonisisasis23@gmail.com',
    resume: 'https://drive.google.com/file/d/1hxuy8xOwwPric-uuPp9gXHRxNFHDUitO/view?usp=sharing'
  },
  about: [
    'I am an IT-focused developer passionate about building modern, responsive, and user-centered web applications. I enjoy writing clean code and turning practical ideas into functional digital products.',
    'I continue improving by learning new tools and best practices in web development, while keeping a strong focus on maintainability, performance, and real-world usability.',
    'My goal is to grow as a developer by contributing to meaningful projects that solve real problems and create better user experiences.'
  ],
  experience: [
    {
      role: 'Multimedia Team Member (BSIT Department)',
      company: 'Madridejos Community College',
      year: '2024',
      details: [
        'Collaborated with team members.',
        'Assisted during ID capturing of students at Madridejos Community College.'
      ]
    },
    {
      role: 'Enrollment Assistant',
      company: 'Madridejos Community College',
      year: 'Dec 12-17, 2025',
      details: [
        'Assisted with student enrollment, document verification, and data entry.'
      ]
    },
    {
      role: 'PisoWiFi Troubleshooting',
      company: 'Bunakan, Madridejos, Cebu',
      year: '',
      details: [
        'Performed troubleshooting and maintenance on PisoWiFi systems, including connectivity, power, and hardware issues.',
        'Conducted basic maintenance to ensure stable network connectivity and system operation.',
        'Assisted in resolving basic hardware and network problems.'
      ]
    }
  ],
  stack: [
    { group: 'Frontend', items: ['JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'] },
    { group: 'Backend', items: ['Laravel', 'Node.js', 'PHP', 'MongoDB', 'MySQL'] },
    { group: 'DevOps & Cloud', items: ['Figma', 'GitHub', 'Git', 'AWS', 'GitHub Actions'] }
  ],
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nikko-asis-1bb559389/' },
    { label: 'GitHub', url: 'https://github.com/N1ks23' },
    { label: 'Instagram', url: 'https://www.instagram.com/ur.nkko?igsh=MWRlbnVzbXp5ZzY4bA==' },
    { label: 'Facebook', url: 'https://www.facebook.com/Nikko23.hack/' }
  ],
  beyondCoding:
    "When not coding, I stay active and productive through learning, fitness, and community activities. These help me maintain balance, creativity, and focus while improving as a developer.",
  projects: [
    { name: 'HoneyBeeIn', description: 'HoneyBeeIn is a web platform.', url: '#' },
    { name: 'ProxiFan App', description: 'UNO R4 WiFi–based fan controller project and its companion web/mobile UI.', url: '#' },
    { name: 'SackTracker App', description: 'SackTracker is a feed tracking app.', url: '#' },
    { name: 'Farm Logs App', description: 'Farm logs are records of farm activities and outcomes.', url: '#' }
  ],
  gallery: [
    'assets/image1.jpg',
    'assets/image2.jpg',
    'assets/image3.jpg',
    'assets/image4.jpg',
    'assets/image5.jpg',
    'assets/image6.jpg',
    'assets/image7.jpg',
    'assets/image8.jpg',
    'assets/image-1.jpg',
    'assets/image-2.jpg',
    'assets/image-3.jpg'
  ]
};

const data = window.__PORTFOLIO__ || fallbackData;

function text(id, value) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = value;
  }
}

function html(id, markup) {
  const el = document.getElementById(id);
  if (el) {
    el.innerHTML = markup;
  }
}

function renderProfile() {
  const nameEl = document.getElementById('profileName');
  if (nameEl) {
    nameEl.innerHTML = `<span id="profileNameText">${data.profile.name}</span> <span class="verified" aria-label="verified">&#10003;</span>`;
  }

  text('profileLocation', data.profile.location);
  text('profileTitle', data.profile.title);
  text('footerName', data.profile.name);

  const resumeButton = document.getElementById('resumeButton');
  if (resumeButton) {
    resumeButton.href = data.profile.resume;
  }

  const emailButton = document.getElementById('emailButton');
  if (emailButton) {
    emailButton.href = `mailto:${data.profile.email}`;
  }

  text('year', String(new Date().getFullYear()));
}

function renderAbout() {
  html(
    'aboutText',
    data.about.map((paragraph) => `<p class="reveal-text">${paragraph}</p>`).join('')
  );
}

function renderExperience() {
  html(
    'experienceList',
    data.experience
      .map(
        (item) => `
      <li>
        <div class="top">
          <strong>${item.role}</strong>
          <em>${item.year}</em>
        </div>
        <p class="reveal-text">${item.company}</p>
        ${
          item.details && item.details.length
            ? `<ul class="experience-details">${item.details
                .map((detail) => `<li class="reveal-text">${detail}</li>`)
                .join('')}</ul>`
            : ''
        }
      </li>
    `
      )
      .join('')
  );
}

function renderStack() {
  html(
    'stackGrid',
    data.stack
      .map(
        (block) => `
      <section class="stack-col">
        <h3>${block.group}</h3>
        <div class="chips">
          ${block.items.map((item) => `<span class="chip">${item}</span>`).join('')}
        </div>
      </section>
    `
      )
      .join('')
  );
}

function renderSocialLinks() {
  const iconMap = {
    LinkedIn: 'linkedin',
    GitHub: 'github',
    Instagram: 'instagram',
    Facebook: 'facebook'
  };

  html(
    'socialLinks',
    data.links
      .map((link) => {
        const iconKey = iconMap[link.label] || 'link';
        return `
      <a class="social-item" href="${link.url}" target="_blank" rel="noopener">
        <span class="social-icon icon-${iconKey}"></span>
        <span>${link.label}</span>
      </a>
    `;
      })
      .join('')
  );
}

function renderBeyondCoding() {
  text('beyondCoding', data.beyondCoding);
}

function renderProjects() {
  html(
    'projectsGrid',
    data.projects
      .map(
        (project) => `
      <article class="project">
        <h3>${project.name}</h3>
        <p class="reveal-text">${project.description}</p>
        <a href="${project.url}" target="_blank" rel="noopener">${project.url === '#' ? 'project-link' : project.url}</a>
      </article>
    `
      )
      .join('')
  );
}

function renderGallery() {
  html(
    'gallery',
    data.gallery
      .map(
        (src, index) => `<img src="${src}" loading="lazy" decoding="async" alt="Gallery image ${index + 1}" onerror="this.onerror=null;this.src='https://placehold.co/420x420/e4e7ec/1f2937?text=Photo';">`
      )
      .join('')
  );
}

function setupGalleryNav() {
  const gallery = document.getElementById('gallery');
  const prev = document.getElementById('galleryPrev');
  const next = document.getElementById('galleryNext');

  if (!gallery || !prev || !next) {
    return;
  }

  const shift = () => Math.max(220, Math.round(gallery.clientWidth * 0.4));

  prev.addEventListener('click', () => {
    gallery.scrollBy({ left: -shift(), behavior: 'smooth' });
  });

  next.addEventListener('click', () => {
    gallery.scrollBy({ left: shift(), behavior: 'smooth' });
  });
}


function setupThemeToggle() {
  const button = document.getElementById('themeToggle');
  if (!button) {
    return;
  }

  const setState = (dark) => {
    document.body.classList.toggle('dark', dark);
    button.classList.toggle('active', dark);
    button.setAttribute('aria-pressed', dark ? 'true' : 'false');
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
  };

  const saved = localStorage.getItem('portfolio-theme');
  if (saved === 'dark') {
    setState(true);
  }

  button.addEventListener('click', () => {
    setState(!document.body.classList.contains('dark'));
  });
}

function setupReveal() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const autoTargets = [
    '.intro h1',
    '.section-title',
    '.stack-col h3',
    '.project h3',
    '.project a',
    '.footer'
  ];

  document.querySelectorAll(autoTargets.join(',')).forEach((el) => {
    if (el.closest('.no-reveal')) {
      return;
    }
    el.classList.add('reveal-text');
  });

  const staggerItems = Array.from(document.querySelectorAll('.stagger'));
  const cardItems = Array.from(document.querySelectorAll('.card'));
  cardItems.forEach((el) => {
    if (el.closest('.no-reveal')) {
      return;
    }
    el.classList.add('reveal-up');
  });
  const leftItems = Array.from(document.querySelectorAll('.social-item'));
  leftItems.forEach((el) => el.classList.add('reveal-left'));
  const rightItems = Array.from(document.querySelectorAll('.project'));
  rightItems.forEach((el) => el.classList.add('reveal-right'));
  const chips = Array.from(document.querySelectorAll('.chip'));
  chips.forEach((el) => el.classList.add('reveal-chip'));
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    timeline.classList.add('reveal-line');
  }
  const timelineDots = Array.from(document.querySelectorAll('.timeline li'));
  timelineDots.forEach((el) => el.classList.add('reveal-dot'));
  const revealItems = Array.from(document.querySelectorAll('.reveal-text'));

  if (reduceMotion) {
    staggerItems.forEach((el) => el.classList.add('in'));
    cardItems.forEach((el) => el.classList.add('in'));
    leftItems.forEach((el) => el.classList.add('in'));
    rightItems.forEach((el) => el.classList.add('in'));
    chips.forEach((el) => el.classList.add('in'));
    timelineDots.forEach((el) => el.classList.add('in'));
    if (timeline) {
      timeline.classList.add('in');
    }
    revealItems.forEach((el) => el.classList.add('in'));
    return;
  }

  staggerItems.forEach((el, index) => {
    const delay = Math.min(400, index * 80);
    el.style.setProperty('--delay', `${delay}ms`);
  });

  cardItems.forEach((el, index) => {
    const delay = Math.min(300, index * 60);
    el.style.setProperty('--delay', `${delay}ms`);
  });

  leftItems.forEach((el, index) => {
    const delay = Math.min(240, index * 70);
    el.style.setProperty('--delay', `${delay}ms`);
  });

  rightItems.forEach((el, index) => {
    const delay = Math.min(240, index * 70);
    el.style.setProperty('--delay', `${delay}ms`);
  });

  chips.forEach((el, index) => {
    const delay = Math.min(300, index * 60);
    el.style.setProperty('--delay', `${delay}ms`);
    el.style.setProperty('--float-delay', `${index * 0.12}s`);
  });

  timelineDots.forEach((el, index) => {
    const delay = Math.min(360, index * 90);
    el.style.setProperty('--delay', `${delay}ms`);
  });

  revealItems.forEach((el, index) => {
    const delay = Math.min(240, index * 40);
    el.style.setProperty('--delay', `${delay}ms`);
  });

  if (!('IntersectionObserver' in window)) {
    staggerItems.forEach((el) => el.classList.add('in'));
    cardItems.forEach((el) => el.classList.add('in'));
    leftItems.forEach((el) => el.classList.add('in'));
    rightItems.forEach((el) => el.classList.add('in'));
    chips.forEach((el) => el.classList.add('in'));
    timelineDots.forEach((el) => el.classList.add('in'));
    if (timeline) {
      timeline.classList.add('in');
    }
    revealItems.forEach((el) => el.classList.add('in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  staggerItems.forEach((el) => observer.observe(el));
  cardItems.forEach((el) => observer.observe(el));
  leftItems.forEach((el) => observer.observe(el));
  rightItems.forEach((el) => observer.observe(el));
  chips.forEach((el) => observer.observe(el));
  timelineDots.forEach((el) => observer.observe(el));
  if (timeline) {
    observer.observe(timeline);
  }
  revealItems.forEach((el) => observer.observe(el));
}

function typewriteElement(el, { speed = 32, startDelay = 0 } = {}) {
  if (!el) {
    return;
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fullText = (el.dataset.fullText || el.textContent || '').trim();
  if (!fullText) {
    return;
  }

  el.dataset.fullText = fullText;

  if (reduceMotion) {
    el.textContent = fullText;
    return;
  }

  el.textContent = '';
  let index = 0;

  const step = () => {
    index += 1;
    el.textContent = fullText.slice(0, index);
    if (index < fullText.length) {
      window.setTimeout(step, speed);
    }
  };

  window.setTimeout(step, startDelay);
}

function setupTypewriter() {
  typewriteElement(document.getElementById('profileNameText'), { speed: 55, startDelay: 200 });
}

function setupScrollTypewriter() {
  const target = document.getElementById('beyondCoding');
  if (!target) {
    return;
  }

  if (!('IntersectionObserver' in window)) {
    typewriteElement(target, { speed: 55, startDelay: 150 });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          typewriteElement(target, { speed: 55, startDelay: 150 });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 }
  );

  observer.observe(target);
}

function setupBackgroundParallax() {
  const bg = document.querySelector('.bg-particles');
  if (!bg) {
    return;
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    return;
  }

  let ticking = false;
  const update = () => {
    const offset = (window.scrollY || 0) * 0.05;
    bg.style.transform = `translateY(${offset}px)`;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  };

  update();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function setupParallax() {
  const elements = Array.from(document.querySelectorAll('.parallax'));
  if (!elements.length) {
    return;
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    return;
  }

  let ticking = false;
  const update = () => {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    elements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax || '0.05');
      const offset = -scrollY * speed;
      el.style.setProperty('--parallax', `${offset}px`);
    });
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  };

  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update);
}
function setupPageLoad() {
  window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
    setupTypewriter();
  });
}


function setupScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) {
    return;
  }

  const update = () => {
    const doc = document.documentElement;
    const total = doc.scrollHeight - window.innerHeight;
    const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

function setupBackToTop() {
  const button = document.getElementById('toTop');
  if (!button) {
    return;
  }

  const toggle = () => {
    button.classList.toggle('show', window.scrollY > 500);
  };

  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}




renderProfile();
renderAbout();
renderExperience();
renderStack();
renderSocialLinks();
renderBeyondCoding();
renderProjects();
renderGallery();
setupGalleryNav();
setupThemeToggle();
setupReveal();
setupBackgroundParallax();
setupParallax();
setupScrollProgress();
setupBackToTop();
setupScrollTypewriter();
setupPageLoad();

// Disable right click
document.addEventListener("contextmenu", e => e.preventDefault());

// Disable inspect keys
document.onkeydown = function(e) {
    if (e.keyCode == 123) return false; // F12
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) return false; // Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) return false; // Ctrl+Shift+J
    if (e.ctrlKey && e.keyCode == 85) return false; // Ctrl+U
};

