import { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title:
    "Mohamed Magdy Elshafey | Backend Developer | Laravel & PHP Specialist",
  description:
    "Mohamed Magdy Elshafey — Backend Developer from Cairo, Egypt. 2+ years building production Laravel APIs for SaaS, ERP, healthcare, e-learning & booking platforms. Multi-tenant architecture, Pest testing, Paymob/Stripe/HyperPay integrations. Co-founder of CodeLine Tech.",
  alternates: {
    canonical: "https://mohamed-elshafey.vercel.app",
  },
  openGraph: {
    title:
      "Mohamed Magdy Elshafey | Backend Developer | Laravel & PHP Specialist",
    description:
      "Backend Developer from Cairo, Egypt — Laravel, PHP, SaaS, ERP, payment integrations. Co-founder of CodeLine Tech.",
    url: "https://mohamed-elshafey.vercel.app",
    type: "profile",
  },
};

const Hero = dynamic(
  () => import("@/components/sections/Hero").then((m) => ({ default: m.Hero })),
  { ssr: true }
);

export default function Home() {
  return (
    <PageWrapper className="p-0 overflow-hidden">
      <Hero />
    </PageWrapper>
  );
}
