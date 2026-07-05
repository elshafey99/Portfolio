export const personalInfo = {
  name: "Mohamed Magdy Elshafey",
  title: "Backend Developer | Laravel Specialist",
  email: "mahamedmagdy005@gmail.com",
  phone: "+201025329322",
  location: "Cairo, Egypt",
  github: "https://github.com/elshafey99",
  linkedin: "https://www.linkedin.com/in/mohamed-elshafey-a59188364",
  about: `Experienced Backend Laravel Developer with over 2 years of hands-on experience building scalable and secure backend systems. Specialized in RESTful API development, multi-tenant SaaS architectures, and performance-driven database design.

Adept at translating business requirements into clean, efficient, and maintainable code using Laravel best practices, SOLID principles, and proven design patterns. I focus on delivering production-ready solutions that balance technical excellence with real-world business needs.`,
};

export const skills = {
  frontend: [
    "PHP",
    "Laravel",
    "SQL",
    "Livewire",
    "JavaScript",
    "Bootstrap 5",
    "jQuery",
    "HTML",
    "CSS",
    "Blade Templates",
  ],
  tools: [
    "Git & GitHub",
    "Composer",
    "NPM",
    "Postman",
    "VS Code",
    "Cursor",
  ],
  cs: [
    "OOP",
    "SOLID Principles",
    "RESTful APIs",
    "HMVC",
    "Multi-Tenancy (SaaS)",
    "Design Patterns",
    "RBAC",
    "Database Transactions",
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
  { name: "English", level: "Good" },
];

export const projects = [
  {
    title: "Bayt-Link",
    role: "Lead Backend Developer",
    inProgress: true,
    description:
      "A comprehensive SaaS property management system serving owners and residents with RBAC, financial modules, and real-time features.",
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
      "Designed the core database structure for buildings, units, and complex tenant relationships. Implemented RBAC for granular permissions (Admins, Owners, Tenants). Built financial modules for rent collection and expense tracking using Database Transactions. Developed real-time features for complaints, online payments, voting on decisions, internal chat, technician directory, notifications, and subscription plans.",
  },
  {
    title: "Faya ERP",
    role: "Backend Developer",
    inProgress: true,
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
    title: "Darabny Science",
    role: "Backend Developer",
    inProgress: false,
    description:
      "Egypt's leading training aggregator — search, compare, and book professional training programs from trusted providers across Egypt.",
    tech: [
      "Laravel",
      "MySQL",
      "RESTful APIs",
      "Payment Integration",
      "Bootstrap",
    ],
    github: "https://github.com/elshafey99",
    demo: "https://darabny-science.com/",
    image: "/projects/darabny-science.png",
    details:
      "Contributed to backend development for Darabny, a training marketplace connecting students, training providers, and universities. Built APIs for program discovery, search and filtering, real-time seat availability, and booking workflows. Integrated payment gateways (Fawry, Paymob, e-wallets) with instant booking confirmation. Supported certificate management with QR verification and multi-role dashboards for students, providers, and university partners.",
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
    location: "Riyadh, Saudi Arabia",
    points: [
      "Acted as the sole backend developer, managing infrastructure and database design across all projects.",
      "Developed a comprehensive internal management system with seamless WhatsApp Business API integration.",
      "Optimized the Qeema ERP system and currently designing its ZATCA electronic invoicing integration.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Brmja Tech",
    duration: "02/2025 – 02/2026",
    location: "Giza, Egypt",
    points: [
      "Architected and developed scalable RESTful APIs for production systems using Laravel 11 & 12.",
      "Implemented Multi-Tenant structures (SaaS) to support multiple business clients on a shared database, ensuring strict data isolation.",
      "Utilized Laravel Modules architecture to decouple features and improve code maintainability.",
      "Optimized database queries and API response times for high-traffic endpoints.",
    ],
  },
  {
    role: "Web Developer (Part-time)",
    company: "Websolla",
    duration: "06/2025 – 08/2025",
    location: "Cairo, Egypt",
    points: [
      "Developed dynamic admin dashboards and user interfaces using Laravel and Blade templates.",
      "Refactored legacy code to adhere to clean code standards and improved admin panel performance.",
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
    "Experienced Backend Developer specializing in Laravel and scalable SaaS architectures. I build secure RESTful APIs, multi-tenant systems, and performance-driven database solutions using SOLID principles and clean architecture.",
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
  description: "Selected projects spanning SaaS platforms, ERP systems, and production APIs",
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
