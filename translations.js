// Translations for Portfolio
const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },

    // Hero Section
    hero: {
      greeting: "Hi, I'm",
      name: "Mohamed Magdy Elshafey",
      title: "Software Engineer - Backend Developer (Laravel)",
      location: "Cairo, Egypt",
      description:
        "Passionate Backend Developer specializing in Laravel, building scalable systems and clean APIs. Experienced in multi-tenant architectures, modular development, and delivering production-ready solutions.",
      viewWork: "View Work",
      downloadCV: "Download CV",
    },

    // About Section
    about: {
      title: "About Me",
      paragraph1:
        "I'm a Junior Backend Laravel Developer with hands-on production experience in building enterprise-level applications. My expertise lies in developing secure RESTful APIs, implementing modular architectures, and designing scalable multi-tenant systems that serve multiple business clients efficiently.",
      paragraph2:
        "Throughout my career, I've worked extensively with Laravel Modules Architecture, enabling me to create maintainable and scalable codebases. I specialize in database design, performance optimization, and implementing clean code principles that ensure long-term project sustainability.",
      paragraph3:
        "What drives me is the challenge of solving complex technical problems and the satisfaction of seeing clean, efficient code in production. I'm committed to continuous learning, staying updated with the latest Laravel features, and contributing effectively in collaborative team environments where quality and innovation are valued.",
    },

    // Experience Section
    experience: {
      title: "Experience",
      jobs: [
        {
          title: "Backend Developer",
          company: "Brmja Tech",
          location: "Giza, Egypt",
          date: "08/2025 – Present",
          responsibilities: [
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
          title: "Web Developer",
          company: "Websolla",
          location: "Cairo, Egypt",
          date: "06/2025 – 08/2025",
          responsibilities: [
            "Developed dynamic websites and admin dashboards using Laravel.",
            "Converted UI designs into functional interfaces with backend logic.",
            "Focused on clean code practices and smooth admin panel performance.",
          ],
        },
        {
          title: "Backend Developer (Intern)",
          company: "Brmja Tech",
          location: "Giza, Egypt",
          date: "02/2025 – 06/2025",
          responsibilities: [
            "Participated in API development for real-world applications.",
            "Designed custom dashboard features and performed database structuring.",
            "Debugged and enhanced Laravel-based systems in a team environment.",
          ],
        },
      ],
    },

    // Education Section
    education: {
      title: "Education & Certifications",
      items: [
        {
          degree: "Bachelor's Degree in Computer Science",
          institution:
            "Faculty of Computers and Artificial Intelligence, Benha University",
          date: "10/2020 – 07/2024",
        },
        {
          degree: "Building Web Applications using PHP & MYSQL",
          institution: "Mahara tech",
          date: "Dec 2024 - Jan 2025",
        },
      ],
    },

    // Skills Section
    skills: {
      title: "Skills",
      categories: {
        programming: "Programming & Database",
        concepts: "Concepts",
        frameworks: "Frameworks & Tools",
        soft: "Soft Skills",
      },
    },

    // Projects Section
    projects: {
      title: "Featured Projects",
      items: [
        {
          title: "Bayt-Link",
          status: "(In Progress)",
          description:
            "Developed the backend for a full property-management system serving property owners and residents. Built modules for property structuring (buildings, floors, units), user roles, financial management (revenues, expenses, maintenance fees), online payments, voting on decisions, complaints, internal chat, technician directory, notifications, and subscription plans. Implemented clean RESTful APIs, secure validations, and optimized database workflows.",
          tech: [
            "Laravel 12",
            "MySQL",
            "Livewire",
            "RESTful APIs",
            "Clean Architecture",
          ],
        },
        {
          title: "Faya ERP",
          status: "(In Progress)",
          description:
            'Working on backend development for "Faya ERP", a modular multi-tenant system for restaurants and cafés. Responsible for implementing new features using Laravel Modules Architecture, designing and improving database workflows, and integrating services between different business domains such as inventory and sales. Focused on performance optimization, clean code practices, and scalable solutions to support multiple tenants within a shared database environment.',
          tech: [
            "Laravel 11",
            "MySQL",
            "Multi-Tenant",
            "Modular Development",
            "RESTful APIs",
          ],
        },
        {
          title: "Online Pay Solution",
          status: "",
          description:
            "Developed a backend platform that serves as a secure intermediary between users and Fawry services. Users register through an API-based client system and submit verification documents, while admins review and approve accounts through an advanced dashboard. The platform includes automated email notifications and multi-language support.",
          tech: ["Laravel 11", "PHP 8.2", "MySQL", "Sanctum"],
        },
        {
          title: "Customize CRM System",
          status: "",
          description:
            "Developed an internal Laravel CRM with HMVC architecture. Features included client management, invoicing with email, contract control, user permissions, employee reporting, and attendance API integration.",
          tech: ["Laravel", "HMVC", "MySQL"],
        },
        {
          title: "Invoice System",
          status: "",
          description:
            "A Laravel-based system for managing invoices, with features for invoice creation, payments, and printing. Includes sections for departments, products, and user permissions.",
          tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        },
        {
          title: "LRG",
          status: "",
          description:
            "Worked on dynamic dashboard development and real-time data sync between backend and frontend.",
          tech: ["Laravel 10", "PHP", "MySQL", "Bootstrap"],
        },
        {
          title: "Bait-Elkhebra",
          status: "",
          description:
            "Developed and customized a dynamic Laravel-based dashboard with real-time data synchronization, ensuring a seamless connection between backend operations and front-end user experience.",
          tech: ["Laravel 10", "PHP", "MySQL", "Bootstrap"],
        },
      ],
    },

    // Contact Section
    contact: {
      title: "Get In Touch",
      description:
        "I'm currently available for freelance work or full-time opportunities. If you have a project that needs some backend magic, let's talk.",
      form: {
        name: "Your Name",
        namePlaceholder: "Mohamed Ahmed",
        email: "Email Address",
        emailPlaceholder: "mohamed@example.com",
        phone: "Phone Number",
        phonePlaceholder: "+20 100 000 0000",
        subject: "Subject",
        subjectPlaceholder: "Select a subject",
        subjectOptions: {
          job: "Job Opportunity",
          freelance: "Freelance Project",
          collaboration: "Collaboration",
          general: "General Inquiry",
        },
        message: "Your Message",
        messagePlaceholder: "Tell me about your project or opportunity...",
        submit: "Send Message",
      },
      divider: "Or reach me directly",
    },

    // Footer
    footer: {
      rights: "All rights reserved.",
    },
  },

  ar: {
    // Navigation
    nav: {
      home: "الرئيسية",
      about: "عني",
      experience: "الخبرات",
      education: "التعليم",
      skills: "المهارات",
      projects: "المشاريع",
      contact: "تواصل معي",
    },

    // Hero Section
    hero: {
      greeting: "مرحباً، أنا",
      name: "محمد مجدي الشافعي",
      title: "مهندس برمجيات - مطور Backend (Laravel)",
      location: "القاهرة، مصر",
      description:
        "مطور Backend متخصص في Laravel، أبني أنظمة قابلة للتوسع وواجهات برمجية نظيفة. خبرة في البنية متعددة المستأجرين، التطوير المعياري، وتقديم حلول جاهزة للإنتاج.",
      viewWork: "شاهد أعمالي",
      downloadCV: "تحميل السيرة الذاتية",
    },

    // About Section
    about: {
      title: "عني",
      paragraph1:
        "أنا مطور Laravel Backend مبتدئ مع خبرة عملية في بناء تطبيقات على مستوى المؤسسات. خبرتي تكمن في تطوير واجهات برمجية آمنة RESTful، تطبيق البنى المعيارية، وتصميم أنظمة متعددة المستأجرين قابلة للتوسع تخدم عملاء أعمال متعددين بكفاءة.",
      paragraph2:
        "طوال مسيرتي المهنية، عملت بشكل مكثف مع بنية Laravel Modules، مما مكنني من إنشاء قواعد برمجية قابلة للصيانة والتوسع. أتخصص في تصميم قواعد البيانات، تحسين الأداء، وتطبيق مبادئ الكود النظيف التي تضمن استدامة المشروع على المدى الطويل.",
      paragraph3:
        "ما يدفعني هو تحدي حل المشاكل التقنية المعقدة والرضا من رؤية كود نظيف وفعال في الإنتاج. أنا ملتزم بالتعلم المستمر، البقاء على اطلاع بأحدث ميزات Laravel، والمساهمة بفعالية في بيئات العمل الجماعية حيث تُقدر الجودة والابتكار.",
    },

    // Experience Section
    experience: {
      title: "الخبرات العملية",
      jobs: [
        {
          title: "مطور Backend",
          company: "Brmja Tech",
          location: "الجيزة، مصر",
          date: "08/2025 – حتى الآن",
          responsibilities: [
            "بناء ودمج واجهات برمجية RESTful باستخدام Laravel لأنظمة الإنتاج.",
            "تطوير لوحات تحكم ديناميكية وهيكلة قواعد بيانات علائقية.",
            "العمل مع بنية Laravel Modules لتقديم ميزات قابلة للتوسع والصيانة.",
            "تطبيق هياكل متعددة المستأجرين لدعم عملاء أعمال متعددين على أنظمة مشتركة.",
            "دمج خدمات Firebase في العمليات الخلفية.",
            "تطبيق مبادئ MVC، ممارسات الكود النظيف، وسير عمل Git في التطوير الجماعي.",
            "التركيز على تحسين الأداء، تصحيح الأخطاء، والتعامل الآمن مع البيانات.",
          ],
        },
        {
          title: "مطور ويب",
          company: "Websolla",
          location: "القاهرة، مصر",
          date: "06/2025 – 08/2025",
          responsibilities: [
            "تطوير مواقع ويب ديناميكية ولوحات تحكم باستخدام Laravel.",
            "تحويل تصاميم واجهة المستخدم إلى واجهات وظيفية مع منطق خلفي.",
            "التركيز على ممارسات الكود النظيف وأداء لوحة التحكم السلس.",
          ],
        },
        {
          title: "مطور Backend (متدرب)",
          company: "Brmja Tech",
          location: "الجيزة، مصر",
          date: "02/2025 – 06/2025",
          responsibilities: [
            "المشاركة في تطوير واجهات برمجية لتطبيقات واقعية.",
            "تصميم ميزات لوحة تحكم مخصصة وإجراء هيكلة قواعد البيانات.",
            "تصحيح وتحسين أنظمة قائمة على Laravel في بيئة عمل جماعية.",
          ],
        },
      ],
    },

    // Education Section
    education: {
      title: "التعليم والشهادات",
      items: [
        {
          degree: "بكالوريوس علوم الحاسب",
          institution: "كلية الحاسبات والذكاء الاصطناعي، جامعة بنها",
          date: "10/2020 – 07/2024",
        },
        {
          degree: "بناء تطبيقات الويب باستخدام PHP و MySQL",
          institution: "مهارة تك",
          date: "ديسمبر 2024 - يناير 2025",
        },
      ],
    },

    // Skills Section
    skills: {
      title: "المهارات",
      categories: {
        programming: "البرمجة وقواعد البيانات",
        concepts: "المفاهيم",
        frameworks: "الأطر والأدوات",
        soft: "المهارات الشخصية",
      },
    },

    // Projects Section
    projects: {
      title: "المشاريع المميزة",
      items: [
        {
          title: "بيت لينك",
          status: "(قيد التطوير)",
          description:
            "تطوير الواجهة الخلفية لنظام إدارة عقارات كامل يخدم ملاك العقارات والمقيمين. بناء وحدات لهيكلة العقارات (المباني، الطوابق، الوحدات)، أدوار المستخدمين، الإدارة المالية (الإيرادات، المصروفات، رسوم الصيانة)، المدفوعات الإلكترونية، التصويت على القرارات، الشكاوى، الدردشة الداخلية، دليل الفنيين، الإشعارات، وخطط الاشتراك. تطبيق واجهات برمجية RESTful نظيفة، عمليات تحقق آمنة، وتدفقات قاعدة بيانات محسّنة.",
          tech: [
            "Laravel 12",
            "MySQL",
            "Livewire",
            "RESTful APIs",
            "Clean Architecture",
          ],
        },
        {
          title: "فايا ERP",
          status: "(قيد التطوير)",
          description:
            'العمل على تطوير الواجهة الخلفية لـ "فايا ERP"، نظام معياري متعدد المستأجرين للمطاعم والمقاهي. مسؤول عن تطبيق ميزات جديدة باستخدام بنية Laravel Modules، تصميم وتحسين تدفقات قاعدة البيانات، ودمج الخدمات بين مجالات الأعمال المختلفة مثل المخزون والمبيعات. التركيز على تحسين الأداء، ممارسات الكود النظيف، والحلول القابلة للتوسع لدعم مستأجرين متعددين ضمن بيئة قاعدة بيانات مشتركة.',
          tech: [
            "Laravel 11",
            "MySQL",
            "Multi-Tenant",
            "Modular Development",
            "RESTful APIs",
          ],
        },
        {
          title: "حل الدفع الإلكتروني",
          status: "",
          description:
            "تطوير منصة خلفية تعمل كوسيط آمن بين المستخدمين وخدمات فوري. يسجل المستخدمون من خلال نظام عميل قائم على واجهة برمجية ويقدمون مستندات التحقق، بينما يراجع المسؤولون ويوافقون على الحسابات من خلال لوحة تحكم متقدمة. تتضمن المنصة إشعارات بريد إلكتروني تلقائية ودعم متعدد اللغات.",
          tech: ["Laravel 11", "PHP 8.2", "MySQL", "Sanctum"],
        },
        {
          title: "نظام CRM مخصص",
          status: "",
          description:
            "تطوير نظام CRM داخلي بـ Laravel مع بنية HMVC. تضمنت الميزات إدارة العملاء، الفواتير مع البريد الإلكتروني، التحكم في العقود، صلاحيات المستخدمين، تقارير الموظفين، ودمج واجهة برمجية للحضور.",
          tech: ["Laravel", "HMVC", "MySQL"],
        },
        {
          title: "نظام الفواتير",
          status: "",
          description:
            "نظام قائم على Laravel لإدارة الفواتير، مع ميزات إنشاء الفواتير، المدفوعات، والطباعة. يتضمن أقسام للإدارات، المنتجات، وصلاحيات المستخدمين.",
          tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        },
        {
          title: "LRG",
          status: "",
          description:
            "العمل على تطوير لوحة تحكم ديناميكية ومزامنة بيانات في الوقت الفعلي بين الواجهة الخلفية والأمامية.",
          tech: ["Laravel 10", "PHP", "MySQL", "Bootstrap"],
        },
        {
          title: "بيت الخبرة",
          status: "",
          description:
            "تطوير وتخصيص لوحة تحكم ديناميكية قائمة على Laravel مع مزامنة بيانات في الوقت الفعلي، مما يضمن اتصالاً سلساً بين العمليات الخلفية وتجربة المستخدم الأمامية.",
          tech: ["Laravel 10", "PHP", "MySQL", "Bootstrap"],
        },
      ],
    },

    // Contact Section
    contact: {
      title: "تواصل معي",
      description:
        "أنا متاح حالياً للعمل الحر أو الفرص بدوام كامل. إذا كان لديك مشروع يحتاج إلى بعض السحر في الواجهة الخلفية، دعنا نتحدث.",
      form: {
        name: "الاسم",
        namePlaceholder: "محمد أحمد",
        email: "البريد الإلكتروني",
        emailPlaceholder: "mohamed@example.com",
        phone: "رقم الهاتف",
        phonePlaceholder: "+20 100 000 0000",
        subject: "الموضوع",
        subjectPlaceholder: "اختر موضوعاً",
        subjectOptions: {
          job: "فرصة عمل",
          freelance: "مشروع حر",
          collaboration: "تعاون",
          general: "استفسار عام",
        },
        message: "رسالتك",
        messagePlaceholder: "أخبرني عن مشروعك أو الفرصة...",
        submit: "إرسال الرسالة",
      },
      divider: "أو تواصل معي مباشرة",
    },

    // Footer
    footer: {
      rights: "جميع الحقوق محفوظة.",
    },
  },
};

// Export for use in script.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = translations;
}
