// Typing Animation
const wordsEn = ['Exceptional Digital Experiences', 'Scalable Web Solutions', 'Modern Applications', 'Beautiful Interfaces'];
const wordsKu = ['ئەزموونی دیجیتاڵی بێهاوتا', 'چارەسەری وێبی بەرفراوان', 'ئەپلیکەیشنی موڕدێن', 'ڕووکارێکی جوان'];
let words = wordsEn;
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedWordsElement = document.querySelector('.typed-words');

function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typedWordsElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedWordsElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(type, typingSpeed);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});


// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;
let ticking = false;

function onScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
    highlightNavigation(currentScroll);
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
    }
}, { passive: true });

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements
const animateElements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .certificate-card, .contact-item');
animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Here you would typically send the data to a server
        console.log('Form submitted:', data);

        // Show success message (you can customize this)
        alert('Thank you for your message! I will get back to you soon.');

        // Reset form
        contactForm.reset();
    });
}

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section[id]');

function highlightNavigation(scrollPosition) {
    scrollPosition = (scrollPosition !== undefined ? scrollPosition : window.pageYOffset) + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Parallax effect for gradient orbs - cached reference, driven by shared rAF loop
const orbs = document.querySelectorAll('.gradient-orb');

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ============================================================
// Language Switcher (English / Kurdish)
// ============================================================
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-experience': 'Experience',
        'nav-certificates': 'Certificates',
        'nav-contact': 'Contact',
        'hero-typing-prefix': 'Building',
        'hero-description': 'A student at Lebanese French University from Kurdistan. Coding is one of my favorite hobbies, as I enjoy creating things through logic and creativity.',
        'hero-btn-work': 'View My Work',
        'hero-btn-contact': 'Contact Me',
        'hero-scroll': 'Explore More',
        'section-about-title': 'Professional Profile',
        'section-about-subtitle': 'Passionate about coding and continuous learning',
        'about-p1': 'My name is Hasti Mohsin, a student at Lebanese French University from Kurdistan. Coding is one of my favorite hobbies, as I enjoy creating things through logic and creativity.',
        'about-p2': 'I like exploring new ideas, learning continuously, and improving my thinking through programming. My goal is to develop innovative solutions and contribute to meaningful projects.',
        'section-skills-title': 'Skills & Expertise',
        'section-skills-subtitle': 'Technologies and tools I work with',
        'section-projects-title': 'Projects',
        'section-projects-subtitle': 'A collection of my recent work and creative endeavors',
        'project-link': 'View Project →',
        'project-desc-movieflix': 'a website to watch movies online with a modern design , responsive layout and high quality .',
        'project-desc-lfu': 'Real-time chat application powered by AI with natural language processing and smart responses for students of Lebanese French University.',
        'project-desc-gym': 'A comprehensive gym management platform with member tracking, automated email notifications for expired memberships, and real-time analytics dashboard.',
        'project-desc-build': 'An e-commerce platform for custom PC building, offering components selection, compatibility checking, and complete pre-built systems with a modern shopping experience.',
        'project-desc-warger': 'A versatile file converter tool that seamlessly transforms documents between multiple formats including PDF to Word, Word to PPTX, PPTX to Word, and more.',
        'project-desc-zer': 'A real-time gold price tracker for the Kurdistan market, displaying live prices for 18K, 21K, 22K, and 24K gold in Iraqi Dinar and USD, with daily price history and a built-in currency calculator.',
        'project-desc-raparin': 'A multilingual website for the Raparin Youth Organization, founded in 2022 in Kurdistan. Features a modern dark-blue UI with Kurdish, Arabic, and English language support, activities showcase, and contact sections.',
        'section-experience-title': 'Work Experience',
        'section-experience-subtitle': 'My professional journey and career milestones',
        'exp1-date': 'Data Entry Specialist',
        'exp1-org': 'Ministry of Higher Education',
        'exp1-role': 'ICT Directorate & Systems Department',
        'exp1-desc': 'Performed data entry operations in the ICT Directorate & Systems Department.',
        'exp2-date': 'Freelancer',
        'exp2-org': 'Full stack - Web Developer',
        'exp2-role': 'Self-employed',
        'exp2-desc': 'Designed, developed, and maintained custom, responsive, and performance-optimized websites using React, Next.js, and modern web standards.',
        'exp3-date': 'Digital Marketing',
        'exp3-org': 'TECNO Company',
        'exp3-role': 'Marketing & Collaborations',
        'exp3-desc': 'Executed digital marketing campaigns, analyzed user reach, and designed promotional materials to strengthen brand presence.',
        'exp4-date': 'Social Media Management',
        'exp4-org': 'Raparin Youth Organisation',
        'exp4-role': 'ڕێکخراوی گەنجانی ڕاپەڕین',
        'exp4-desc': 'Managed social media platforms, curated digital content, and expanded organization outreach and engagement within the community.',
        'section-certificates-title': 'Certificates',
        'section-certificates-subtitle': 'Professional certifications and achievements',
        'view-certificate': 'View Certificate',
        'section-contact-title': "Let's Connect",
        'section-contact-subtitle': "Have a project in mind? Let's work together!",
        'contact-email-label': 'Email',
        'contact-phone-label': 'Phone',
        'footer-text': '© 2025 Hasti Mohsin. All rights reserved.',
    },
    ku: {
        'nav-home': 'سەرەکی',
        'nav-about': 'دەربارەی',
        'nav-skills': 'پرۆژەکان',
        'nav-projects': 'پڕۆژەکان',
        'nav-experience': 'ئەزموون',
        'nav-certificates': 'بڕوانامەکان',
        'nav-contact': 'پەیوەندی',
        'hero-typing-prefix': 'دروستکردنی',
        'hero-description': 'خوێندکارێکم لە زانکۆی فەرەنسی لوبنانی لە کوردستان. کۆدنووسین یەکێکە لە هۆبیەکانی دڵخوازم، چونکە خۆشم دێت شتەکان بخوڵقێنم بە ڕێگای لۆجیک و دیاریداری.',
        'hero-btn-work': 'کارەکانم ببینە',
        'hero-btn-contact': 'پەیوەندیم پێوەبکە',
        'hero-scroll': 'زیاتر کاوێبکەرەوە',
        'section-about-title': 'پرۆفایلی پیشەیی',
        'section-about-subtitle': 'خولیای کۆدکردن و فێربوونی بەردەوام',
        'about-p1': 'ناوم هەستی موحسینە، خوێندکارێکم لە زانکۆی فەرەنسی لوبنانی لە کوردستان. کۆدنووسین یەکێکە لە هۆبیەکانی دڵخوازم، چونکە خۆمی تیادا دەدۆزمەوە شتەکان بخوڵقێنم بە ڕێگای لۆجیکەوە.',
        'about-p2': 'هەبوونی بیرۆکەی نوێ ، بەردەوام فێربوون ، و بیرکردنەوەم باشتر بکەم بە ڕێگای بەرنامەسازی. ئامانجم دروستکردنی چارەسەری نوێ و بەشداری لە پڕۆژە گرینگەکانە.',
        'section-skills-title': 'شارەزایی',
        'section-skills-subtitle': 'تەکنەلۆجیا و ئامرازەکانی کارکردنم پێیان',
        'section-projects-title': 'پڕۆژەکان',
        'section-projects-subtitle': 'کۆمەڵێک لە کارە دوایینەکانم و هەوڵدانە دیاریدارەکانم',
        'project-link': 'پڕۆژەکە ببینە ←',
        'project-desc-movieflix': 'مالپەڕێکە بۆ سەیرکردنی فیلم بە دیزاینی موڕدێن، ڕووکاری ڕێکخراو و کوالێتی بالا.',
        'project-desc-lfu': 'ئەپلیکەیشنی چات بە ڕێکاری AI لەگەڵ پرۆسەکردنی زمانی سروشتی و وەڵامی زیرەک بۆ خوێندکارانی زانکۆی فەرەنسی لوبنانی.',
        'project-desc-gym': 'پلاتفۆرمی بەڕێوەبردنی جیمی تەواو لەگەڵ شوێنکەوتنی ئەندامان، ئاگادارکردنەوەی ئیمەیڵی خۆکارانەی بۆ ئەندامێتی بەسەرچووان، و داشبۆردی ئەنالیتیکسی ڕاستکاتی.',
        'project-desc-build': 'پلاتفۆرمی ئی-کۆمەرسی بۆ دروستکردنی کۆمپیوتەری تایبەت، لەگەڵ هەڵبژاردنی پارچەکان، پشکنینی گونجاویی، و سیستەمی بازاڕکردنی موڕدێن.',
        'project-desc-warger': 'ئامرازی گۆڕینی فایلی فراوان کە بەبێ کێشە بەڵگەنامەکان دەگۆڕێت لە نێوان فۆرماتە جۆراوجۆرەکان، وەک PDF بۆ Word، Word بۆ PPTX، و زیاتر.',
        'project-desc-zer': 'شوێنکەوتەری نرخی زێڕی ڕاستکاتی بۆ بازاڕی کوردستان، نرخی زیندووی ١٨K، ٢١K، ٢٢K و ٢٤K لە دینار و دۆلار نیشان دەدات، لەگەڵ مێژووی نرخ و ژمێرەری دراو.',
        'project-desc-raparin': 'ماڵپەڕێکی پرە زمانانە بۆ ڕێکخراوی گەنجانی ڕاپەڕین، دامەزراوە لە ٢٠٢٢ لە کوردستان. ڕووکاری تاریکی شینی موڕدێن لەگەڵ پشتگیری زمانی کوردی، عەرەبی و ئینگلیزی.',
        'section-experience-title': 'ئەزموونی کار',
        'section-experience-subtitle': 'گەشتی پیشەیی و گامە گرینگەکانم',
        'exp1-date': 'تۆمارکاری زانیاری',
        'exp1-org': 'وەزارەتی خوێندنی باڵا',
        'exp1-role': 'بەڕێوەبەرایەتی ICT و بەشی سیستمەکان',
        'exp1-desc': 'ئەنجامدانی کارەکانی تۆمارکردنی زانیاری لە بەڕێوەبەرایەتی ICT و بەشی سیستمەکان.',
        'exp2-date': 'سەربەخۆ (Freelancer)',
        'exp2-org': 'گەشەپێدەری وێبی فول ستاک',
        'exp2-role': 'کاری سەربەخۆ',
        'exp2-desc': 'دیزاینکردن، گەشەپێدان و چاکسازیکردنی ماڵپەڕە مۆدێرنەکان و بەرنامە وێبییەکان بە بەکارهێنانی React و Next.js و تەکنەلۆجیا پێشکەوتووەکان.',
        'exp3-date': 'مارکێتینگی دیجیتاڵی',
        'exp3-org': 'کۆمپانیای تێکنۆ (TECNO)',
        'exp3-role': 'مارکێتینگ و هاوکارییەکان',
        'exp3-desc': 'ئەنجامدانی کەمپینەکانی مارکێتینگی دیجیتاڵی، شیکردنەوەی گەیشتنی بەکارهێنەران، و دیزاینکردنی کەرەستە ڕیکلامییەکان بۆ بەهێزکردنی براندەکە.',
        'exp4-date': 'بەڕێوەبردنی سۆشیاڵ میدیا',
        'exp4-org': 'ڕێکخراوی گەنجانی ڕاپەڕین',
        'exp4-role': 'ڕێکخراوی گەنجانی ڕاپەڕین',
        'exp4-desc': 'بەڕێوەبردنی پلاتفۆرمەکانی سۆشیاڵ میدیا، ئامادەکردنی ناوەڕۆکی دیجیتاڵی، و فراوانکردنی چالاکییەکان و پەیوەندییەکانی ڕێکخراوەکە لەناو کۆمەڵگادا.',
        'section-certificates-title': 'بڕوانامەکان',
        'section-certificates-subtitle': 'گواهینامە پیشەییەکان و دەستکەوتەکان',
        'view-certificate': 'بڕوانامەکە ببینە',
        'section-contact-title': 'پەیوەندیمان بکەینەوە',
        'section-contact-subtitle': 'پڕۆژەیەکت بیربابێتە؟ با باشان کار بکەین!',
        'contact-email-label': 'ئیمەیڵ',
        'contact-phone-label': 'تەلەفۆن',
        'footer-text': '© 2025 هاستە موحسین. هەموو مافەکان پارێزراون.',
    }
};

function applyLanguage(lang) {
    const html = document.documentElement;

    // Set direction and language
    if (lang === 'ku') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ckb');
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
    }

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            // footer-text contains © symbol — use textContent to avoid XSS
            el.textContent = translations[lang][key];
        }
    });

    // Update all project links (class-based, repeated elements)
    document.querySelectorAll('.project-link').forEach(el => {
        el.textContent = translations[lang]['project-link'];
    });

    // Update all certificate links (class-based, repeated elements)
    document.querySelectorAll('.view-certificate').forEach(el => {
        el.textContent = translations[lang]['view-certificate'];
    });

    // Swap typing words list
    words = lang === 'ku' ? wordsKu : wordsEn;

    // Persist preference
    localStorage.setItem('lang', lang);

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// Wire up lang buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        applyLanguage(btn.getAttribute('data-lang'));
    });
});

// Apply saved language on load
const savedLang = localStorage.getItem('lang') || 'en';
if (savedLang !== 'en') {
    applyLanguage(savedLang);
}
