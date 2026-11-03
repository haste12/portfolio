export interface Project {
  num: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  image: string;
  docUrl: string;
}

export interface ExperienceItem {
  type: string;
  title: string;
  org: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    num: "01",
    title: "Bdozawa",
    category: "Places Discovery Platform",
    description: "A map-based platform that shows places around the user, helping people discover what's nearby at a glance.",
    tags: ["Next.js", "React", "Maps", "Tailwind"],
    image: "/bdozawaa.PNG",
    link: "https://bdozawa.site/home",
  },
  {
    num: "02",
    title: "LFU AI",
    category: "University AI Assistant",
    description: "Real-time AI chat application with natural language processing and smart responses for students of Lebanese French University.",
    tags: ["Next.js", "Express", "Firebase"],
    image: "/LFU.png",
    link: "https://lfu-ai.vercel.app/",
  },
  {
    num: "03",
    title: "Gym Management System",
    category: "Management Platform",
    description: "Comprehensive gym management platform with member tracking, automated email notifications, and real-time analytics dashboard.",
    tags: ["Node.js", "Express", "MongoDB", "Nodemailer"],
    image: "/Screenshot 2025-12-22 200220.png",
    link: "#",
  },
  {
    num: "04",
    title: "Build Computers",
    category: "E-Commerce Platform",
    description: "An e-commerce platform for custom PC building with component selection, compatibility checking, and pre-built systems.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    image: "/build.png",
    link: "https://build-computer.vercel.app/",
  },
  {
    num: "05",
    title: "Warger",
    category: "File Converter Tool",
    description: "A versatile file converter tool that transforms documents between formats — PDF to Word, Word to PPTX, and more.",
    tags: ["React", "Next.js", "Express", "Node.js"],
    image: "/warger.png",
    link: "https://warger-kurdi.vercel.app/",
  },
  {
    num: "06",
    title: "Zer — Gold Price Tracker",
    category: "Price Tracking Platform",
    description: "Real-time gold price tracker for the Kurdistan market with live prices for 18K–24K gold, daily history, and currency calculator.",
    tags: ["Next.js", "React", "JavaScript", "Tailwind", "MongoDB Atlas"],
    image: "/zer.png",
    link: "https://zer-website.vercel.app/gold-prices",
  },
  {
    num: "07",
    title: "Raparin Youth Organization",
    category: "Organizational Website",
    description: "A multilingual website for Raparin Youth Organization with modern dark-blue UI, Kurdish/Arabic/English support, and activities showcase.",
    tags: ["Next.js", "Express", "Upstash"],
    image: "/raparin.png",
    link: "https://raparinorganization.com",
  },
  {
    num: "08",
    title: "Movieflix",
    category: "Streaming Platform",
    description: "A website to watch movies online with a modern design, responsive layout and high quality.",
    tags: ["React", "Node.js", "MongoDB", "Next.js", "Express", "Tailwind", "BackBlaze"],
    image: "/moviflix.png",
    link: "#",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Google Certificate of Digital Marketing",
    issuer: "Google",
    year: "2024",
    image: "/Google certificate  2.png",
    docUrl: "/Google certificate  2.png",
  },
  {
    title: "Institute of Electrical and Electronics Engineers (IEEE)",
    issuer: "IEEE",
    year: "2025",
    image: "/Screenshot 2025-12-21 171858.png",
    docUrl: "/IEEE Certificate  2.pdf",
  },
  {
    title: "AI and Robotics Exhibition, Institute Cihan",
    issuer: "AI & Robotics",
    year: "2025",
    image: "/cihan.png",
    docUrl: "/cihan.png",
  },
  {
    title: "NASA Space Apps Challenge",
    issuer: "NASA",
    year: "2025",
    image: "/Nasa.png",
    docUrl: "/NASA Space Apps Challenge.pdf",
  },
  {
    title: "National Innovation Competition in Engineering (NICE)",
    issuer: "NICE",
    year: "2025",
    image: "/Screenshot 2025-12-21 171937.png",
    docUrl: "/NICE Certificates (2).pdf",
  },
  {
    title: "TECNO AI BootCamp 2025",
    issuer: "TECNO",
    year: "2025",
    image: "/tecno.jpeg",
    docUrl: "/tecno.jpeg",
  },
  {
    title: "NICER — Robotics",
    issuer: "Robotics",
    year: "2024",
    image: "/nicer.PNG",
    docUrl: "/nicer.PNG",
  },
  {
    title: "Web Developer Course",
    issuer: "Course",
    year: "2025",
    image: "/knowledge.PNG",
    docUrl: "/knowledge.PNG",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    type: "Data Entry Specialist",
    title: "Ministry of Higher Education",
    org: "ICT Directorate & Systems Department",
    description: "Performed data entry operations in the ICT Directorate & Systems Department.",
  },
  {
    type: "Freelancer",
    title: "Full-Stack Web Developer",
    org: "Self-employed",
    description: "Designed, developed, and maintained custom, responsive, and performance-optimized websites using React, Next.js, and modern web standards.",
  },
  {
    type: "Digital Marketing",
    title: "TECNO Company",
    org: "Marketing & Collaborations",
    description: "Executed digital marketing campaigns, analyzed user reach, and designed promotional materials to strengthen brand presence.",
  },
  {
    type: "Social Media Management",
    title: "Raparin Youth Organisation",
    org: "ڕێکخراوی گەنجانی ڕاپەڕین",
    description: "Managed social media platforms, curated digital content, and expanded organization outreach and engagement within the community.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "FRONTEND",
    icon: "code",
    skills: ["React", "Next.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "BACKEND",
    icon: "server",
    skills: ["Node.js", "Express.js", "TypeScript", "C++", "REST APIs"],
  },
  {
    title: "DATABASE & CLOUD",
    icon: "database",
    skills: ["MongoDB", "Firebase", "BackBlaze B2", "Upstash", "Vercel Blob"],
  },
  {
    title: "TOOLS & DEVOPS",
    icon: "rocket",
    skills: ["Git", "GitHub", "Vercel", "Netlify", "Render"],
  },
];

export const contactInfo = {
  email: "hastemuhsin2005@gmail.com",
  phone: "+964 751 167 6815",
  phoneRaw: "+9647511676815",
  whatsapp: "https://wa.me/9647511676815",
  telegram: "https://t.me/+9647511676815",
  viber: "viber://chat?number=+9647511676815",
  linkedin: "https://www.linkedin.com/in/haste-muhsin-abb0052b4/",
  instagram: "https://www.instagram.com/haste_muhsin/",
  facebook: "https://www.facebook.com/haste.muhsin",
  github: "https://github.com/haste12",
};

export const translations = {
  en: {
    "nav-home": "HOME",
    "nav-about": "ABOUT",
    "nav-work": "WORK",
    "nav-skills": "SKILLS",
    "nav-experience": "EXPERIENCE",
    "nav-certificates": "CERTIFICATES",
    "nav-contact": "CONTACT",
    "hero-badge": "Available for Creative Projects",
    "hero-subtitle": "Creative Developer & AI Enthusiast.",
    "hero-desc": "Building digital experiences, exploring artificial intelligence, and transforming ideas into meaningful technology.",
    "hero-cta-work": "EXPLORE MY WORK",
    "hero-cta-contact": "LET'S TALK",
    "about-title": "Beyond Code. Beyond Limits.",
    "about-p1": "I'm Haste Mohsin, a creative developer passionate about building modern digital products, exploring AI technologies, and creating experiences that combine functionality with outstanding design.",
    "about-p2": "I enjoy turning complex ideas into simple, powerful, and meaningful digital solutions.",
    "stat-projects": "Projects Built",
    "stat-certs": "Certificates",
    "stat-exp": "Work Experience",
    "skills-title": "Technical Arsenal",
    "projects-title": "Projects",
    "projects-desc": "A selection of work that represents my approach to creative development and AI-driven solutions.",
    "projects-view": "VIEW PROJECT",
    "exp-title": "Experience & Achievements",
    "cert-title": "Certificates",
    "cert-desc": "Professional certifications and achievements",
    "cert-view": "View Certificate",
    "contact-title": "LET'S BUILD SOMETHING EXTRAORDINARY.",
    "contact-desc": "Have an idea, a project, or an interesting challenge? Let's make it happen.",
    "contact-cta": "START A CONVERSATION",
    "footer-text": "Designed & built with passion.",
  },
};
