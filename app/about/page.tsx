import { Metadata } from "next";
import { PageWrapper } from "@/components/PageWrapper";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: {
    absolute:
      "About Mohamed Magdy Elshafey — Backend Developer from Cairo, Egypt",
  },
  description:
    "Learn about Mohamed Magdy Elshafey, a Backend Developer from Cairo, Egypt with 2+ years in Laravel (11/12/13), PHP 8.4, MySQL, multi-tenant SaaS, RBAC, Pest testing, and payment integrations. Co-founder of CodeLine Tech, currently at Beyonex IT.",
  alternates: {
    canonical: "https://mohamed-elshafey.vercel.app/about",
  },
  openGraph: {
    title: "About Mohamed Magdy Elshafey — Backend Developer",
    description:
      "Backend Developer from Cairo — Laravel, PHP, SaaS, RBAC, Pest, Paymob, Firebase. Skills, background, and approach.",
    url: "https://mohamed-elshafey.vercel.app/about",
    images: [
      {
        url: "/mee1-removebg-preview.png",
        width: 800,
        height: 800,
        alt: "Mohamed Magdy Elshafey — Backend Developer",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <About />
    </PageWrapper>
  );
}
