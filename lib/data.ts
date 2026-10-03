export const personalInfo = {
  name: "Mohamed Magdy Elshafey",
  title: "Backend Developer | Laravel Specialist",
  email: "mahamedmagdy005@gmail.com",
  phone: "+201025329322",
  location: "Cairo, Egypt",
  github: "https://github.com/elshafey99",
  linkedin: "https://www.linkedin.com/in/mohamed-elshafey-a59188364",
  about: `Backend Developer with 2+ years of experience building production Laravel APIs for SaaS, ERP, healthcare, e-learning and booking platforms. Sole backend owner for multiple products at a Saudi software company and co-founder of CodeLine Tech.

Experienced in multi-tenant architecture, RBAC, payment gateway integrations (Paymob, Dineropay), WhatsApp Business API, bilingual Arabic/English APIs and automated testing with Pest. Currently working on ZATCA e-invoicing integration.`,
};

export const skills = {
  backend: [
    "PHP 8.4",
    "Laravel 11/12/13",
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "Laravel Sanctum",
    "JWT",
    "Laravel Reverb (WebSockets)",
    "Livewire",
    "Blade",
  ],
  database: [
    "MySQL",
    "Database Design",
    "Query Optimization",
    "Transactions",
    "Pest PHP",
    "Feature Testing",
  ],
  architecture: [
    "OOP",
    "SOLID",
    "Strategy Pattern",
    "Adapter Pattern",
    "State Machine",
    "Service Layer",
    "Clean Architecture",
    "HMVC",
    "Laravel Modules",
    "Multi-Tenant SaaS",
    "RBAC",
  ],
  integrations: [
    "Paymob",
    "HyperPay",
    "Stripe",
    "WhatsApp Business API",
    "Firebase (FCM, Auth)",
    "Google/Apple Sign-In",
    "Git",
    "GitHub Actions CI",
    "Postman",
    "Apidog",
    "Composer",
  ],
  soft: [
    "Problem-Solving",
    "Time Management",
    "Teamwork",
    "Adaptability",
  ],
};

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional Working Proficiency" },
];

export const projects = [
  {
    title: "Darabny",
    role: "Backend Developer",
    inProgress: false,
    description:
      "A training marketplace platform with 460+ REST API endpoints across 5 portals for students, training providers, instructors, universities, and admins.",
    tech: [
      "Laravel 13",
      "PHP 8.4",
      "MySQL",
      "Sanctum",
      "Paymob",
      "Stripe",
      "Firebase",
      "Pest",
    ],
    github: "https://github.com/elshafey99",
    demo: "https://darabny-science.com/",
    image: "/projects/darabny-science.png",
    details:
      "Built 460+ REST API endpoints across 5 portals on Laravel 13. Implemented bookings, Paymob card/wallet payments, manual payment flows, refunds, provider payouts, and invoice generation. Delivered QR-verifiable certificates, attendance tracking, Firebase auth & push notifications, and a Scholars subscription module. Maintained 100+ Pest feature test files running on GitHub Actions CI.",
  },
  {
    title: "Bayt-Link",
    role: "Lead Backend Developer",
    inProgress: false,
    description:
      "A SaaS property management system for buildings, units, owners, and tenants with RBAC and transaction-safe financial workflows.",
    tech: [
      "Laravel 12",
      "MySQL",
      "Livewire",
      "RESTful APIs",
      "Clean Architecture",
    ],
    github: "https://github.com/elshafey99",
    demo: "#",
    image: "/projects/bayt-link.png",
    details:
      "Designed the database architecture for buildings, units, owners, and tenant relationships. Implemented RBAC and transaction-safe financial workflows for rent collection and expenses. Developed complaints, online payments, voting, chat, notifications, and subscription modules.",
  },
  {
    title: "Beyonex Workflow",
    role: "Sole Backend Developer",
    inProgress: false,
    description:
      "An internal multi-company business management platform for HR, CRM, projects/tasks, ticketing, and meetings.",
    tech: [
      "Laravel 12",
      "MySQL",
      "Sanctum",
      "Reverb",
      "WhatsApp Business API",
      "Pest",
    ],
    github: "https://github.com/elshafey99",
    demo: "#",
    image: "/projects/beyonex-workflow.svg",
    details:
      "Architected a multi-company platform for HR, CRM, projects/tasks, ticketing, and meetings with company/branch-scoped data isolation and RBAC. Built the CRM pipeline (quotations → contracts → invoices → payments) and a customer portal. Implemented QR attendance with leave approvals, real-time chat with Laravel Reverb, and WhatsApp Business API customer conversations.",
  },
  {
    title: "Gaia Spa",
    role: "Sole Backend Developer",
    inProgress: false,
    description:
      "An at-home spa booking platform with therapist scheduling, loyalty programs, and a pluggable payment layer.",
    tech: ["Laravel 13", "MySQL", "Sanctum", "Firebase", "Pest"],
    github: "https://github.com/elshafey99",
    demo: "#",
    image: "/projects/gaia-spa.svg",
    details:
      "Built a booking engine with therapist schedules, leave management, service areas, and distance-based travel fees. Implemented membership tiers, packages, session credits, gift cards, vouchers, coupons, and referral rewards. Designed a pluggable payment gateway layer (Strategy pattern) supporting card, bank transfer, and cash, plus Google/Apple Sign-In and FCM push notifications.",
  },
  {
    title: "Elagy Care",
    role: "Sole Backend Developer",
    inProgress: true,
    description:
      "A multi-sided e-pharmacy and prescription platform serving patients, doctors, pharmacists, pharmacies, delivery drivers, and admins.",
    tech: ["Laravel 13", "PHP 8.5", "MySQL", "Sanctum", "Firebase", "Pest"],
    github: "https://github.com/elshafey99",
    demo: "#",
    image: "/projects/elagy-care.svg",
    details:
      "Designed an order state machine with automatic routing to nearby pharmacy branches, stock reservation, drug substitution rules, and pickup/delivery verification. Integrated HyperPay payments with refunds and cash-on-delivery collection, pharmacy settlements, and pluggable delivery providers (Adapter pattern). Secured medical data with MFA/OTP, audit trails, consent management, and RBAC, covered by security, privacy, and end-to-end feature tests.",
  },
  {
    title: "Faya ERP",
    role: "Backend Developer",
    inProgress: false,
    description:
      "A modular multi-tenant ERP system tailored for restaurants and cafés with shared-database tenant isolation.",
    tech: [
      "Laravel 11",
      "MySQL",
      "Multi-Tenant",
      "Modular Development",
      "RESTful APIs",
    ],
    github: "https://github.com/elshafey99",
    demo: "https://test.tsc-group.org/",
    image: "/projects/faya-erp.jpg",
    details:
      "Working on backend development for Faya ERP using Laravel Modules Architecture. Responsible for designing and improving database workflows and integrating services between business domains such as inventory and sales. Focused on performance optimization, clean code practices, and scalable solutions to support multiple tenants within a shared database environment.",
  },
  {
    title: "Qeema ERP",
    role: "Backend Developer (Node.js)",
    inProgress: true,
    description:
      "A multi-tenant SaaS ERP system with JWT authentication, RBAC, and automated tenant onboarding.",
    tech: [
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "RESTful APIs",
      "Multi-Tenant SaaS",
    ],
    github: "https://github.com/elshafey99",
    demo: "#",
    image: "/projects/qeema-erp.png",
    details:
      "A multi-tenant SaaS ERP system designed to serve multiple business clients on a shared database with strict data isolation. Features secure JWT-based authentication, role-based access control, and automated tenant onboarding with Chart of Accounts initialization. Currently optimizing the system and designing ZATCA electronic invoicing integration.",
  },
  {
    title: "Online Pay Solution",
    role: "Backend Developer",
    inProgress: false,
    description:
      "A secure intermediary platform between users and Fawry services with API-based registration and admin verification.",
    tech: ["Laravel 11", "PHP 8.2", "MySQL", "Sanctum"],
    github: "https://github.com/elshafey99",
    demo: "https://onlinepaysolution.com/",
    image: "/projects/online-pay.png",
    details:
      "Developed a backend platform that serves as a secure intermediary between users and Fawry services. Users register through an API-based client system and submit verification documents, while admins review and approve accounts through an advanced dashboard. The platform includes automated email notifications and multi-language support.",
  },
  {
    title: "Dr. Ahmed Mashaly",
    role: "Full-Stack Developer",
    inProgress: false,
    description:
      "Professional bilingual website for an Oral & Maxillofacial Surgery consultant — services, cases, and appointment booking.",
    tech: [
      "Next.js",
      "TypeScript",
      "GSAP",
      "RESTful APIs",
      "i18n",
    ],
    github: "https://github.com/elshafey99",
    demo: "https://www.drahmedmashaly.com/en",
    image: "/projects/dr-ahmed-mashaly.png",
    details:
      "Built a modern bilingual (English/Arabic) website for Dr. Ahmed Mashaly, an Oral & Maxillofacial Consultant specializing in orthognathic surgery, jaw reconstruction, and dental implants. Developed service showcases, before-and-after case galleries, clinic location pages, and appointment booking flows. Implemented smooth GSAP animations and a responsive, professional medical brand experience across Mansoura and Cairo clinics.",
  },
  {
    title: "Custom CRM System",
    role: "Backend Developer",
    inProgress: false,
    description:
      "An internal CRM for managing client relationships, contracts, invoicing, and employee attendance.",
    tech: ["Laravel 11", "HMVC", "MySQL"],
    github: "https://github.com/elshafey99",
    demo: "#",
    image: "/projects/crm-system.svg",
    details:
      "Developed an internal Laravel CRM with HMVC architecture. Features included client management, invoicing with email, contract control, user permissions, employee reporting, and attendance API integration.",
  },
  {
    title: "Invoice System",
    role: "Backend Developer",
    inProgress: false,
    description:
      "A Laravel-based invoice management system with departments, products, payments, and user permissions.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/elshafey99/invoice_system",
    demo: "#",
    image: "/projects/invoice-system.png",
    details:
      "A Laravel-based system for managing invoices, with features for invoice creation, payments, and printing. Includes sections for departments, products, and user permissions.",
  },
  {
    title: "LRG",
    role: "Backend Developer",
    inProgress: false,
    description:
      "Dynamic dashboard development with real-time data synchronization between backend and frontend.",
    tech: ["Laravel 10", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/elshafey99",
    demo: "https://lrginvestmentsllc.com/en",
    image: "/projects/lrg.png",
    details:
      "Worked on dynamic dashboard development and real-time data sync between backend and frontend for an investment company platform.",
  },
  {
    title: "Bait-Elkhebra",
    role: "Backend Developer",
    inProgress: false,
    description:
      "Custom Laravel dashboard with real-time data synchronization for seamless backend-to-frontend operations.",
    tech: ["Laravel 10", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/elshafey99",
    demo: "https://bait-elkhebra.com/en",
    image: "/projects/bait-elkhebra.png",
    details:
      "Developed and customized a dynamic Laravel-based dashboard with real-time data synchronization, ensuring a seamless connection between backend operations and front-end user experience.",
  },
  {
    title: "Vertex",
    role: "Backend Developer",
    inProgress: false,
    description:
      "Laravel-based business dashboard with real-time data sync and admin panel customization.",
    tech: ["Laravel 10", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/elshafey99",
    demo: "https://vertex-egy.com/en",
    image: "/projects/vertex.png",
    details:
      "Developed and customized a dynamic Laravel-based dashboard with real-time data synchronization, ensuring a seamless connection between backend operations and front-end user experience.",
  },
];

export const experience = [
  {
    role: "Backend Developer",
    company: "Beyonex IT",
    duration: "02/2026 – Present",
    location: "Riyadh, Saudi Arabia (Remote)",
    points: [
      "Sole backend developer for the company, owning architecture, database design and API delivery across 7+ internal and client products in HR, healthcare, wellness, legal and recruitment domains.",
      "Built Beyonex Workflow (internal HR/CRM platform), Gaia Spa (booking platform) and Elagy Care (e-pharmacy platform) end-to-end.",
      "Integrated WhatsApp Business API, Dineropay, Firebase and Google/Apple Sign-In across products.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Brmja Tech",
    duration: "10/2024 – 2026",
    location: "Giza, Egypt (Onsite)",
    points: [
      "Developed scalable RESTful APIs using Laravel 11/12.",
      "Led the backend of Bayt-Link, a SaaS property management system.",
      "Built Faya ERP, a modular multi-tenant ERP for restaurants & cafés, implementing inventory and sales workflows with Laravel Modules.",
      "Developed an internal CRM using HMVC architecture: clients, contracts, invoicing with email, permissions and attendance API integration.",
      "Optimized database queries and API performance for high-traffic endpoints.",
    ],
  },
  {
    role: "Web Developer (Part-time)",
    company: "Websolla",
    duration: "06/2025 – 08/2025",
    location: "Cairo, Egypt",
    points: [
      "Developed dynamic admin dashboards using Laravel and Blade.",
      "Refactored legacy code and improved admin panel performance.",
    ],
  },
];

export const education = {
  degree: "Bachelor's Degree in Computer Science",
  university:
    "Faculty of Computers and Artificial Intelligence, Benha University",
  duration: "10/2020 – 07/2024",
  location: "Benha, Egypt",
  details:
    "Focusing on Software Development, Data Structures, Database Design, and Advanced Web Technologies.",
};

export const certifications = [
  "Building Web Applications using PHP & MYSQL - Mahara tech (Dec 2024 - Jan 2025)",
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Skills", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const heroContent = {
  intro: "Hi, I'm",
  description:
    "Backend Developer with 2+ years building production Laravel APIs for SaaS, ERP, healthcare, e-learning and booking platforms. I specialize in multi-tenant architecture, RBAC, payment integrations, and automated testing with Pest.",
  btnProject: "View Work",
  btnContact: "Download CV",
};

export const aboutContent = {
  badge: "About Me",
  titlePrefix: "I'm",
  highlights: [
    { label: "SaaS Architecture", desc: "Multi-tenant systems with strict data isolation" },
    { label: "RESTful APIs", desc: "Secure, scalable API design and integration" },
    { label: "Database Design", desc: "Performance-driven schema and query optimization" },
    { label: "Clean Code", desc: "SOLID principles and proven design patterns" },
  ],
  skillsTitle: "Technical Expertise",
  skillsDesc:
    "A comprehensive overview of my technical skills and professional experience in backend development",
  languagesTitle: "Languages",
  languagesDesc: "Languages I speak and work in professionally",
};

export const experienceContent = {
  badge: "Experience & Education",
  title: "My Journey",
  workTitle: "Experience",
  educationTitle: "Education",
  achievementsTitle: "Certifications",
};

export const projectsContent = {
  badge: "My Projects",
  title: "Showcasing my latest work and creative solutions",
  description: "Selected projects spanning SaaS, ERP, healthcare, e-learning, and booking platforms",
  btnDetails: "View Details",
  btnGithub: "GitHub",
  btnDemo: "Live Demo",
};

export const contactContent = {
  badge: "Get In Touch",
  title: "Contact Me",
  subtitle:
    "Open to full-time opportunities and backend consulting projects",
  description:
    "Looking for a backend developer to build scalable APIs, multi-tenant systems, or ERP solutions? Let's discuss how I can help bring your project to production.",
  btnSend: "Send Message",
  formEmail: "Email Address",
  formMessage: "Your Message",
  successTitle: "Message Sent!",
  successDesc: "Thanks for reaching out! I'll get back to you soon.",
};
