import { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageWrapper } from "@/components/PageWrapper";

const AboutComponent = dynamic(
  () =>
    import("@/components/sections/About").then((m) => ({ default: m.About })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "About Me - Mohamed Magdy Elshafey",
  description:
    "Learn more about Mohamed Magdy Elshafey, an experienced Backend Developer with 2+ years specializing in Laravel, SaaS architectures, and RESTful APIs.",
  alternates: {
    canonical: "https://mohamed-elshafey.vercel.app/about",
  },
  openGraph: {
    title: "About Me - Mohamed Magdy Elshafey | Backend Developer",
    description:
      "Experienced Backend Developer skilled in Laravel, PHP, MySQL, Node.js, and multi-tenant SaaS systems.",
    url: "https://mohamed-elshafey.vercel.app/about",
    images: [
      {
        url: "/mee1-removebg-preview.png",
        width: 800,
        height: 800,
        alt: "About Mohamed Magdy Elshafey",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <PageWrapper backgroundVariant="about">
      <AboutComponent />
    </PageWrapper>
  );
}
