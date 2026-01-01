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
    "Learn more about Mohamed Magdy Elshafey, a passionate Backend Developer specializing in Laravel and PHP. Discover my journey, skills, and professional background.",
  alternates: {
    canonical: "https://mohamed-elshafey.vercel.app/about",
  },
  openGraph: {
    title: "About Me - Mohamed Magdy Elshafey | Backend Developer",
    description:
      "Passionate Backend Developer skilled in Laravel, PHP, MySQL, and building scalable systems. Learn about my journey and expertise.",
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
