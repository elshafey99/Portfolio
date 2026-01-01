import { personalInfo } from "@/lib/data";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    url: "https://mohamed-elshafey.vercel.app",
    image: "https://mohamed-elshafey.vercel.app/mee1-removebg-preview.png",
    sameAs: [
      personalInfo.github,
      personalInfo.linkedin,
    ],
    jobTitle: "Backend Developer",
    worksFor: {
      "@type": "Organization",
      name: "Brmja Tech",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: personalInfo.location.split(", ")[0],
      addressRegion: "Cairo",
      addressCountry: "EG",
    },
    email: personalInfo.email,
    telephone: personalInfo.phone,
    description: personalInfo.about,
    knowsAbout: [
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "Python",
      "Firebase",
      "Livewire",
      "RESTful APIs",
      "Multi-Tenant Systems",
      "Laravel Modules",
      "Database Design",
      "Backend Development",
      "API Development",
      "Clean Architecture",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Benha University",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Backend Developer",
      occupationLocation: {
        "@type": "Country",
        name: "Egypt",
      },
      estimatedSalary: {
        "@type": "MonetaryAmountDistribution",
        name: "Competitive",
        currency: "USD",
      },
      skills: "Laravel, PHP, MySQL, JavaScript, Python, Firebase, RESTful APIs, Multi-Tenant Systems",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mohamed Magdy Elshafey - Backend Developer Portfolio",
    url: "https://mohamed-elshafey.vercel.app",
    description:
      "Backend Developer Portfolio showcasing Laravel and PHP projects",
    author: {
      "@type": "Person",
      name: personalInfo.name,
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://mohamed-elshafey.vercel.app/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mohamed Magdy Elshafey - Backend Development Services",
    image: "https://mohamed-elshafey.vercel.app/mee1-removebg-preview.png",
    url: "https://mohamed-elshafey.vercel.app",
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
      "Multi-Tenant Systems",
    ],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Backend Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Laravel Development",
            description:
              "Building scalable, maintainable backend systems with Laravel",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "RESTful API Development",
            description:
              "Creating secure, efficient RESTful APIs for web and mobile applications",
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mohamed-elshafey.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://mohamed-elshafey.vercel.app/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: "https://mohamed-elshafey.vercel.app/projects",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Experience",
        item: "https://mohamed-elshafey.vercel.app/experience",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://mohamed-elshafey.vercel.app/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        key="person-schema"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        key="website-schema"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalService),
        }}
        key="service-schema"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        key="breadcrumb-schema"
      />
    </>
  );
}
