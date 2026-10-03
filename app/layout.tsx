import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { LeftSidebar } from "@/components/shared/LeftSidebar";
import { MainContentBackground } from "@/components/shared/MainContentBackground";
import { MobileHeader } from "@/components/shared/MobileHeader";
import { FloatingWhatsApp } from "@/components/shared/FloatingWhatsApp";
import { JsonLd } from "@/components/JsonLd";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamed-elshafey.vercel.app"),
  title: {
    default:
      "Mohamed Magdy Elshafey | Backend Developer | Laravel & PHP Specialist",
    template: "%s | Mohamed Magdy Elshafey",
  },
  description:
    "Mohamed Magdy Elshafey — Backend Developer from Cairo, Egypt with 2+ years building production Laravel APIs for SaaS, ERP, healthcare, e-learning and booking platforms. Specialized in multi-tenant architecture, RBAC, Pest testing, and payment integrations (Paymob, HyperPay, Stripe). Currently at Beyonex IT (Riyadh, remote) and co-founder of CodeLine Tech.",
  keywords: [
    // Name variations (Arabic & English)
    "Mohamed Magdy Elshafey",
    "Mohamed Elshafey",
    "Elshafey99",
    "Mohamed Magdy",
    "محمد مجدي الشافعي",
    "محمد الشافعي",
    "محمد مجدي",
    // Role
    "Backend Developer",
    "Backend Developer Egypt",
    "Backend Developer Cairo",
    "Backend Engineer Egypt",
    "Laravel Developer",
    "Laravel Developer Egypt",
    "PHP Developer",
    "PHP Developer Egypt",
    "Software Engineer Egypt",
    "مطور باك اند",
    "مطور لارافيل",
    "مبرمج باك اند",
    "مبرمج PHP",
    "مبرمج مصري",
    "مطور مصري",
    // Hire intent
    "Hire Laravel Developer",
    "Hire PHP Developer",
    "Hire Backend Developer Egypt",
    "Remote Backend Developer",
    "Freelance Laravel Developer",
    // Core tech
    "Laravel",
    "PHP",
    "PHP 8.4",
    "Laravel 12",
    "Laravel 13",
    "MySQL",
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "REST API Development",
    "Livewire",
    "Laravel Sanctum",
    "Laravel Reverb",
    "WebSockets Laravel",
    "Pest PHP",
    "Pest Testing",
    "GitHub Actions CI",
    // Architecture
    "Multi-Tenant SaaS",
    "SaaS Architecture",
    "RBAC",
    "HMVC",
    "Laravel Modules",
    "Clean Architecture",
    "Design Patterns",
    "Service Layer Pattern",
    // Integrations
    "Paymob Integration",
    "HyperPay Integration",
    "Stripe Integration",
    "Payment Gateway Integration",
    "WhatsApp Business API",
    "Firebase Integration",
    "ZATCA E-Invoicing",
    // Domains
    "ERP Development",
    "SaaS Development",
    "Healthcare API",
    "E-Learning Platform Backend",
    "Booking System Backend",
    "Property Management System",
    "E-Pharmacy Backend",
    // General
    "Portfolio",
    "برمجة",
    "تطوير تطبيقات",
    "باك اند",
    "سوفت وير",
  ],
  authors: [
    {
      name: "Mohamed Magdy Elshafey",
      url: "https://mohamed-elshafey.vercel.app",
    },
  ],
  creator: "Mohamed Magdy Elshafey",
  publisher: "Mohamed Magdy Elshafey",
  category: "Technology",
  alternates: {
    canonical: "https://mohamed-elshafey.vercel.app",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title:
      "Mohamed Magdy Elshafey | Backend Developer | Laravel & PHP Specialist",
    description:
      "Backend Developer from Cairo, Egypt with 2+ years building production Laravel APIs. Specializing in multi-tenant SaaS, RBAC, Pest testing, and payment integrations. Currently at Beyonex IT & co-founder of CodeLine Tech.",
    url: "https://mohamed-elshafey.vercel.app",
    siteName: "Mohamed Magdy Elshafey — Backend Developer Portfolio",
    images: [
      {
        url: "/mee1-removebg-preview.png",
        width: 800,
        height: 800,
        alt: "Mohamed Magdy Elshafey — Backend Developer from Cairo, Egypt",
      },
    ],
    locale: "en-US",
    type: "profile",
    firstName: "Mohamed",
    lastName: "Elshafey",
    username: "elshafey99",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Magdy Elshafey | Backend Developer",
    description:
      "Backend Developer from Cairo, Egypt — Laravel, PHP, multi-tenant SaaS, payment integrations. Co-founder of CodeLine Tech. Open to opportunities.",
    images: ["/mee1-removebg-preview.png"],
    creator: "@elshafey99",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ANxwWa80I3sel5DkgC7HXxLgGVMu-gc_x3q5WghjbqI",
  },
  other: {
    // AI crawlers meta hints
    "revisit-after": "7 days",
    language: "English",
    rating: "General",
    distribution: "Global",
    coverage: "Worldwide",
    target: "all",
    "HandheldFriendly": "True",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${jakarta.variable} ${outfit.variable} font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary`}
      >
        <div className="flex min-h-screen">
          <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[280px] lg:block">
            <LeftSidebar />
          </aside>

          <MobileHeader />

          <main className="relative min-h-screen w-full min-w-0 flex-grow pt-16 lg:ml-[280px] lg:pt-0">
            <MainContentBackground />
            <div className="relative z-10 w-full">{children}</div>
          </main>
        </div>
        <FloatingWhatsApp />
        <JsonLd />
      </body>
    </html>
  );
}
