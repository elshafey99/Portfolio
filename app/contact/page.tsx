import { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Contact Mohamed Magdy Elshafey — Hire a Laravel Backend Developer",
  description:
    "Get in touch with Mohamed Magdy Elshafey — Backend Developer available for full-time positions and consulting worldwide. Reach him at mahamedmagdy005@gmail.com or WhatsApp +201025329322. Specializes in Laravel, PHP, SaaS, ERP, and payment integrations.",
  alternates: {
    canonical: "https://mohamed-elshafey.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Mohamed Magdy Elshafey — Backend Developer",
    description:
      "Open to full-time opportunities and backend consulting. Laravel, PHP, SaaS, ERP, payment integrations. mahamedmagdy005@gmail.com",
    url: "https://mohamed-elshafey.vercel.app/contact",
    images: [
      {
        url: "/mee1-removebg-preview.png",
        width: 800,
        height: 800,
        alt: "Contact Mohamed Magdy Elshafey",
      },
    ],
  },
};

const ContactComponent = dynamic(
  () =>
    import("@/components/sections/Contact").then((m) => ({
      default: m.Contact,
    })),
  { ssr: true }
);

export default function ContactPage() {
  return (
    <PageWrapper backgroundVariant="contact">
      <ContactComponent />
    </PageWrapper>
  );
}
