import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { SideNav } from "@/components/shared/SideNav";
import { LeftSidebar } from "@/components/shared/LeftSidebar";
import { MainContentBackground } from "@/components/shared/MainContentBackground";
import { MobileHeader } from "@/components/shared/MobileHeader";
import { JsonLd } from "@/components/JsonLd";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamed-elshafey.vercel.app"),
  title: {
    default: "Mohamed Magdy Elshafey | Backend Developer | Laravel Specialist",
    template: "%s | Mohamed Magdy Elshafey - Backend Developer",
  },
  description:
    "Passionate Backend Developer specializing in Laravel, building scalable systems and clean APIs. Experienced in multi-tenant architectures, modular development, and delivering production-ready solutions.",
  keywords: [
    "Backend Developer",
    "Laravel Developer",
    "PHP Developer",
    "RESTful APIs",
    "Multi-Tenant Systems",
    "Laravel",
    "PHP",
    "MySQL",
    "JavaScript",
    "Python",
    "Firebase",
    "Livewire",
    "Web Development",
    "API Development",
    "Database Design",
    "Mohamed Magdy Elshafey",
    "Portfolio",
    "Backend Engineer",
    "Web Developer Egypt",
    "Freelance Developer",
    "Laravel Modules",
    "Clean Architecture",
  ],
  authors: [
    {
      name: "Mohamed Magdy Elshafey",
      url: "https://mohamed-elshafey.vercel.app",
    },
  ],
  creator: "Mohamed Magdy Elshafey",
  publisher: "Mohamed Magdy Elshafey",
  alternates: {
    canonical: "https://mohamed-elshafey.vercel.app",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  openGraph: {
    title: "Mohamed Magdy Elshafey | Backend Developer | Laravel Specialist",
    description:
      "Passionate Backend Developer specializing in Laravel, building scalable systems and clean APIs. Experienced in multi-tenant architectures and modular development.",
    url: "https://mohamed-elshafey.vercel.app",
    siteName: "Mohamed Magdy Elshafey - Backend Developer Portfolio",
    images: [
      {
        url: "/mee1-removebg-preview.png",
        width: 800,
        height: 800,
        alt: "Mohamed Magdy Elshafey - Backend Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Magdy Elshafey | Backend Developer",
    description:
      "Passionate Backend Developer specializing in Laravel, building scalable systems and clean APIs.",
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
        <div className="fixed inset-0 -z-10 bg-background"></div>
        {/* Global Background Effects (Subtle) */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-50 pointer-events-none"></div>

        <div className="flex min-h-screen">
          {/* Left Sidebar - Desktop Only */}
          <aside className="hidden lg:block w-[280px] h-screen fixed top-0 left-0 z-40">
            <LeftSidebar />
          </aside>

          {/* Mobile Header - Mobile Only */}
          <MobileHeader />

          {/* Main Content Area */}
          <main className="flex-grow lg:ml-[280px] w-full relative pt-16 lg:pt-0 lg:pr-24 min-h-screen">
            <MainContentBackground />
            <SideNav />
            <div className="w-full relative z-10">{children}</div>
          </main>
        </div>
        <JsonLd />
      </body>
    </html>
  );
}
