import {} from "lucide-react";

export const personalInfo = {
  name: "Mohamed Magdy Elshafey",
  title: "Software Engineer - Backend Developer (Laravel)",
  email: "mahamedmagdy005@gmail.com",
  phone: "+201025329322",
  location: "Cairo, Egypt",
  github: "https://github.com/elshafey99",
  linkedin: "https://www.linkedin.com/in/mohamed-elshafey-a59188364",
  about: `I'm a Junior Backend Laravel Developer with hands-on production experience in building enterprise-level applications. My expertise lies in developing secure RESTful APIs, implementing modular architectures, and designing scalable multi-tenant systems that serve multiple business clients efficiently.

Throughout my career, I've worked extensively with Laravel Modules Architecture, enabling me to create maintainable and scalable codebases. I specialize in database design, performance optimization, and implementing clean code principles that ensure long-term project sustainability.

What drives me is the challenge of solving complex technical problems and the satisfaction of seeing clean, efficient code in production. I'm committed to continuous learning, staying updated with the latest Laravel features, and contributing effectively in collaborative team environments where quality and innovation are valued.`,
};

export const skills = {
  frontend: [
    "PHP",
    "Laravel",
    "MySQL",
    "JavaScript",
    "Python",
    "Firebase",
    "Livewire",
    "HTML",
    "CSS",
  ],
  tools: [
    "OOP",
    "SOLID Principles",
    "RESTful APIs",
    "Design Patterns",
    "Git",
    "Bootstrap",
  ],
  cs: [
    "Laravel Modules Architecture",
    "Multi-Tenant Systems",
    "Database Design",
    "Performance Optimization",
    "Clean Code Principles",
    "MVC Architecture",
  ],
  soft: [
    "Problem-Solving",
    "Time Management",
    "Teamwork",
    "Adaptability",
    "Continuous Learning",
    "Quality Focus",
  ],
};

export const projects = [
  {
    title: "Bayt-Link (In Progress)",
    description:
      "Developed the backend for a full property-management system serving property owners and residents. Built modules for property structuring (buildings, floors, units), user roles, financial management (revenues, expenses, maintenance fees), online payments, voting on decisions, complaints, internal chat, technician directory, notifications, and subscription plans.",
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
      "Developed the backend for a full property-management system serving property owners and residents. Built modules for property structuring (buildings, floors, units), user roles, financial management (revenues, expenses, maintenance fees), online payments, voting on decisions, complaints, internal chat, technician directory, notifications, and subscription plans. Implemented clean RESTful APIs, secure validations, and optimized database workflows.",
  },
  {
    title: "Faya ERP (In Progress)",
    description:
      "Working on backend development for 'Faya ERP', a modular multi-tenant system for restaurants and cafés. Responsible for implementing new features using Laravel Modules Architecture, designing and improving database workflows, and integrating services between different business domains such as inventory and sales.",
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
      "Working on backend development for 'Faya ERP', a modular multi-tenant system for restaurants and cafés. Responsible for implementing new features using Laravel Modules Architecture, designing and improving database workflows, and integrating services between different business domains such as inventory and sales. Focused on performance optimization, clean code practices, and scalable solutions to support multiple tenants within a shared database environment.",
  },
  {
    title: "Online Pay Solution",
    description:
      "Developed a backend platform that serves as a secure intermediary between users and Fawry services. Users register through an API-based client system and submit verification documents, while admins review and approve accounts through an advanced dashboard.",
    tech: ["Laravel 11", "PHP 8.2", "MySQL", "Sanctum"],
    github: "https://github.com/elshafey99",
    demo: "https://onlinepaysolution.com/",
    image: "/projects/online-pay.png",
    details:
      "Developed a backend platform that serves as a secure intermediary between users and Fawry services. Users register through an API-based client system and submit verification documents, while admins review and approve accounts through an advanced dashboard. The platform includes automated email notifications and multi-language support.",
  },
  {
    title: "Customize CRM System",
    description:
      "Developed an internal Laravel CRM with HMVC architecture. Features included client management, invoicing with email, contract control, user permissions, employee reporting, and attendance API integration.",
    tech: ["Laravel", "HMVC", "MySQL"],
    github: "https://github.com/elshafey99",
    demo: "#",
    image: "/projects/crm-system.svg",
    details:
      "Developed an internal Laravel CRM with HMVC architecture. Features included client management, invoicing with email, contract control, user permissions, employee reporting, and attendance API integration.",
  },
  {
    title: "Invoice System",
    description:
      "A Laravel-based system for managing invoices, with features for invoice creation, payments, and printing. Includes sections for departments, products, and user permissions.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/elshafey99/invoice_system",
    demo: "#",
    image: "/projects/invoice-system.png",
    details:
      "A Laravel-based system for managing invoices, with features for invoice creation, payments, and printing. Includes sections for departments, products, and user permissions.",
  },
  {
    title: "LRG",
    description:
      "Worked on dynamic dashboard development and real-time data sync between backend and frontend.",
    tech: ["Laravel 10", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/elshafey99",
    demo: "https://lrginvestmentsllc.com/en",
    image: "/projects/lrg.png",
    details:
      "Worked on dynamic dashboard development and real-time data sync between backend and frontend.",
  },
  {
    title: "Bait-Elkhebra",
    description:
      "Developed and customized a dynamic Laravel-based dashboard with real-time data synchronization, ensuring a seamless connection between backend operations and front-end user experience.",
    tech: ["Laravel 10", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/elshafey99",
    demo: "https://bait-elkhebra.com/en",
    image: "/projects/bait-elkhebra.png",
    details:
      "Developed and customized a dynamic Laravel-based dashboard with real-time data synchronization, ensuring a seamless connection between backend operations and front-end user experience.",
  },
  {
    title: "Vertex",
    description:
      "Developed and customized a dynamic Laravel-based dashboard with real-time data synchronization, ensuring a seamless connection between backend operations and front-end user experience.",
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
    company: "Brmja Tech",
    duration: "08/2025 – Present",
    location: "Giza, Egypt",
    points: [
      "Built and integrated RESTful APIs using Laravel for production systems.",
      "Developed dynamic admin dashboards and structured relational databases.",
      "Worked with Laravel Modules Architecture to deliver scalable, maintainable features.",
      "Implemented Multi-Tenant structures to support multiple business clients on shared systems.",
      "Integrated Firebase services into backend operations.",
      "Applied MVC principles, clean code practices, and Git workflow in team development.",
      "Focused on performance optimization, debugging, and secure data handling.",
    ],
  },
  {
    role: "Web Developer",
    company: "Websolla",
    duration: "06/2025 – 08/2025",
    location: "Cairo, Egypt",
    points: [
      "Developed dynamic websites and admin dashboards using Laravel.",
      "Converted UI designs into functional interfaces with backend logic.",
      "Focused on clean code practices and smooth admin panel performance.",
    ],
  },
  {
    role: "Backend Developer (Intern)",
    company: "Brmja Tech",
    duration: "02/2025 – 06/2025",
    location: "Giza, Egypt",
    points: [
      "Participated in API development for real-world applications.",
      "Designed custom dashboard features and performed database structuring.",
      "Debugged and enhanced Laravel-based systems in a team environment.",
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
    "Passionate Backend Developer specializing in Laravel, building scalable systems and clean APIs. Experienced in multi-tenant architectures, modular development, and delivering production-ready solutions.",
  btnProject: "View Work",
  btnContact: "Download CV",
};

export const aboutContent = {
  badge: "About Me",
  titlePrefix: "I'm",
  highlights: [
    { label: "Scalable", desc: "Building scalable multi-tenant systems" },
    { label: "Clean Code", desc: "Clean code principles and best practices" },
    { label: "Modular", desc: "Modular development with Laravel Modules" },
    {
      label: "Production-Ready",
      desc: "Delivering production-ready solutions",
    },
  ],
  skillsTitle: "Technical Expertise",
  skillsDesc:
    "A comprehensive overview of my technical skills and professional experience in backend development",
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
  description: "Showcasing my latest work and creative solutions",
  btnDetails: "View Details",
  btnGithub: "GitHub",
  btnDemo: "Live Demo",
};

export const contactContent = {
  badge: "Get In Touch",
  title: "Contact Me",
  subtitle:
    "I'm currently available for freelance work or full-time opportunities",
  description:
    "If you have a project that needs some backend magic, let's talk. I'm here to help you build scalable, secure, and efficient backend solutions.",
  btnSend: "Send Message",
  formEmail: "Email Address",
  formMessage: "Your Message",
  successTitle: "Message Sent!",
  successDesc: "Thanks for reaching out! I'll get back to you soon.",
};
