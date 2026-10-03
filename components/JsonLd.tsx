import { personalInfo } from "@/lib/data";

const BASE = "https://mohamed-elshafey.vercel.app";
const IMAGE = `${BASE}/mee1-removebg-preview.png`;

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE}/#person`,
    name: "Mohamed Magdy Elshafey",
    alternateName: ["Mohamed Elshafey", "Elshafey99", "محمد مجدي الشافعي"],
    url: BASE,
    image: {
      "@type": "ImageObject",
      url: IMAGE,
      width: 800,
      height: 800,
    },
    sameAs: [
      personalInfo.github,
      personalInfo.linkedin,
      `https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`,
      BASE,
    ],
    jobTitle: "Backend Developer",
    worksFor: {
      "@type": "Organization",
      name: "Beyonex IT",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Riyadh",
        addressCountry: "SA",
      },
    },
    founder: {
      "@type": "Organization",
      name: "CodeLine Tech",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressRegion: "Cairo",
      addressCountry: "EG",
    },
    email: personalInfo.email,
    telephone: personalInfo.phone,
    description:
      "Mohamed Magdy Elshafey is a Backend Developer from Cairo, Egypt with 2+ years of experience building production Laravel APIs for SaaS, ERP, healthcare, e-learning, and booking platforms. He is the sole backend developer at Beyonex IT (Riyadh, remote) and co-founder of CodeLine Tech.",
    knowsAbout: [
      "Laravel",
      "PHP",
      "PHP 8.4",
      "Laravel 12",
      "Laravel 13",
      "MySQL",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Multi-Tenant SaaS",
      "SaaS Architecture",
      "RBAC",
      "HMVC",
      "Laravel Modules",
      "Clean Architecture",
      "Design Patterns",
      "Laravel Sanctum",
      "Laravel Reverb",
      "WebSockets",
      "Livewire",
      "Pest PHP",
      "Feature Testing",
      "GitHub Actions CI",
      "Payment Gateway Integration",
      "Paymob",
      "HyperPay",
      "Stripe",
      "WhatsApp Business API",
      "Firebase",
      "ZATCA E-Invoicing",
      "Backend Development",
      "API Development",
      "Database Design",
      "Query Optimization",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Benha University",
      department: "Faculty of Computers and Artificial Intelligence",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Backend Developer",
      occupationLocation: [
        { "@type": "Country", name: "Egypt" },
        { "@type": "Country", name: "Saudi Arabia" },
      ],
      skills:
        "Laravel, PHP, MySQL, Node.js, RESTful APIs, Multi-Tenant SaaS, RBAC, HMVC, Pest PHP, Payment Gateway Integration, WhatsApp Business API, Firebase",
    },
    knowsLanguage: [
      { "@type": "Language", name: "Arabic" },
      { "@type": "Language", name: "English" },
    ],
  };

  // ProfilePage schema — modern schema type for personal pages
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${BASE}/#profilepage`,
    dateCreated: "2024-01-01",
    dateModified: "2026-10-03",
    url: BASE,
    name: "Mohamed Magdy Elshafey — Backend Developer Portfolio",
    description:
      "Official portfolio of Mohamed Magdy Elshafey, Backend Developer specializing in Laravel, PHP, and multi-tenant SaaS systems.",
    mainEntity: { "@id": `${BASE}/#person` },
    image: IMAGE,
    inLanguage: "en-US",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    name: "Mohamed Magdy Elshafey — Backend Developer Portfolio",
    url: BASE,
    description:
      "Portfolio of Mohamed Magdy Elshafey — Backend Developer from Cairo, Egypt. Laravel, PHP, SaaS, ERP, payment integrations.",
    author: { "@id": `${BASE}/#person` },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mohamed Magdy Elshafey — Backend Development Services",
    image: IMAGE,
    url: BASE,
    telephone: personalInfo.phone,
    email: personalInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressRegion: "Cairo",
      addressCountry: "EG",
    },
    priceRange: "$$",
    serviceType: [
      "Backend Development",
      "Laravel Development",
      "PHP Development",
      "API Development",
      "Database Design",
      "Multi-Tenant SaaS Systems",
      "ERP Development",
      "Payment Gateway Integration",
      "WhatsApp Business API Integration",
    ],
    areaServed: { "@type": "Place", name: "Worldwide" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Backend Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Laravel API Development",
            description:
              "Building scalable, production-ready RESTful APIs with Laravel 12/13 and PHP 8.4",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Multi-Tenant SaaS Architecture",
            description:
              "Designing and implementing multi-tenant SaaS platforms with strict data isolation and RBAC",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Payment Gateway Integration",
            description:
              "Integrating Paymob, HyperPay, Stripe, and other payment gateways into web applications",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ERP System Development",
            description:
              "Building modular ERP systems using Laravel Modules for restaurants, cafés, and businesses",
          },
        },
      ],
    },
  };

  // FAQPage — surfaces directly in Google AI Overviews and AI search engines
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Mohamed Magdy Elshafey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mohamed Magdy Elshafey (Arabic: محمد مجدي الشافعي) is a Backend Developer from Cairo, Egypt with 2+ years of professional experience building production Laravel APIs. He is currently the sole backend developer at Beyonex IT (Riyadh, Saudi Arabia — working remotely) and co-founder of CodeLine Tech. He specializes in multi-tenant SaaS architecture, RBAC, PHP 8.4, and Laravel 12/13.",
        },
      },
      {
        "@type": "Question",
        name: "What does Mohamed Elshafey specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mohamed Elshafey specializes in PHP 8.4, Laravel (11/12/13), MySQL, Node.js, RESTful APIs, multi-tenant SaaS architecture, RBAC, and automated testing with Pest PHP on GitHub Actions CI. He integrates payment gateways (Paymob, HyperPay, Stripe), WhatsApp Business API, Firebase, Google Sign-In, and Apple Sign-In. He is currently implementing ZATCA e-invoicing integration.",
        },
      },
      {
        "@type": "Question",
        name: "Where does Mohamed Magdy Elshafey work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mohamed Magdy Elshafey currently works as a Backend Developer at Beyonex IT (Riyadh, Saudi Arabia — remotely from Cairo) since February 2026. He is the sole backend developer managing 7+ products in HR, healthcare, wellness, legal, and recruitment. He also previously worked at Brmja Tech (Giza, Egypt) and Websolla (Cairo).",
        },
      },
      {
        "@type": "Question",
        name: "Is Mohamed Elshafey available for hire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mohamed Elshafey is open to full-time Backend Developer opportunities and consulting projects worldwide. He can be reached at mahamedmagdy005@gmail.com or via WhatsApp at +201025329322. His portfolio is at https://mohamed-elshafey.vercel.app.",
        },
      },
      {
        "@type": "Question",
        name: "What projects has Mohamed Elshafey built?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mohamed Elshafey has built: Darabny (training marketplace with 460+ API endpoints on Laravel 13), Bayt-Link (SaaS property management system), Beyonex Workflow (multi-company HR/CRM/project management platform), Gaia Spa (at-home spa booking platform), Elagy Care (e-pharmacy platform — in progress), Nash Menu (bilingual online restaurant menu with ordering dashboard), Faya ERP (modular restaurant ERP with Laravel Modules), and several other ERP and dashboard systems.",
        },
      },
      {
        "@type": "Question",
        name: "What is Mohamed Elshafey's educational background?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mohamed Magdy Elshafey holds a Bachelor's Degree in Computer Science from the Faculty of Computers and Artificial Intelligence at Benha University, Egypt (October 2020 – July 2024).",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Mohamed Magdy Elshafey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Mohamed Magdy Elshafey at mahamedmagdy005@gmail.com, via WhatsApp at +201025329322, through his LinkedIn at https://www.linkedin.com/in/mohamed-elshafey-a59188364, or via GitHub at https://github.com/elshafey99. His portfolio is at https://mohamed-elshafey.vercel.app/contact.",
        },
      },
      {
        "@type": "Question",
        name: "What is CodeLine Tech?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CodeLine Tech is a software company co-founded by Mohamed Magdy Elshafey. It has delivered projects including Nash Menu, a bilingual online ordering platform for Nash Nashville Chicken restaurant (https://nash-menu.codelinetech.com/).",
        },
      },
    ],
  };

  // Breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${BASE}/about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Experience",
        item: `${BASE}/experience`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Projects",
        item: `${BASE}/projects`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Education",
        item: `${BASE}/education`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Contact",
        item: `${BASE}/contact`,
      },
    ],
  };

  const schemas = [
    personSchema,
    profilePageSchema,
    websiteSchema,
    professionalService,
    faqSchema,
    breadcrumbSchema,
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
