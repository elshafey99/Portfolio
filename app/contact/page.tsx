import { Metadata } from "next";
import dynamic from "next/dynamic";

const ContactComponent = dynamic(
  () =>
    import("@/components/sections/Contact").then((m) => ({
      default: m.Contact,
    })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Contact Me - Get In Touch",
  description:
    "Get in touch with Mohamed Magdy Elshafey for freelance projects, collaboration opportunities, or full-time positions. Available for Laravel and backend development work.",
  alternates: {
    canonical: "https://mohamed-elshafey.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Mohamed Magdy Elshafey - Backend Developer",
    description:
      "Ready to collaborate on your next project? Let's build something amazing together with Laravel and scalable backend solutions.",
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
import { PageWrapper } from "@/components/PageWrapper";

export default function ContactPage() {
  return (
    <PageWrapper backgroundVariant="contact">
      <ContactComponent />
    </PageWrapper>
  );
}
