import { Metadata } from "next";
import { PageWrapper } from "@/components/PageWrapper";
import { Experience } from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: {
    absolute: "Experience — Mohamed Magdy Elshafey | Backend Developer",
  },
  description:
    "Professional work history of Mohamed Magdy Elshafey: Backend Developer at Beyonex IT (Riyadh, remote, Feb 2026–present) building 7+ products; Backend Developer at Brmja Tech (Oct 2024–2026) leading Bayt-Link SaaS and Faya ERP; Part-time Developer at Websolla (Jun–Aug 2025). Laravel, PHP, SaaS, ERP.",
  alternates: {
    canonical: "https://mohamed-elshafey.vercel.app/experience",
  },
  openGraph: {
    title: "Work Experience — Mohamed Magdy Elshafey",
    description:
      "Beyonex IT (2026–present) · Brmja Tech (2024–2026) · Websolla (2025). Laravel, PHP, multi-tenant SaaS, ERP, payment integrations.",
    url: "https://mohamed-elshafey.vercel.app/experience",
    images: [
      {
        url: "/mee1-removebg-preview.png",
        width: 800,
        height: 800,
        alt: "Mohamed Magdy Elshafey — Work Experience",
      },
    ],
  },
};

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <Experience />
    </PageWrapper>
  );
}
