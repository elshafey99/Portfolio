import { Metadata } from "next";
import dynamic from "next/dynamic";

const ExperienceComponent = dynamic(
  () =>
    import("@/components/sections/Experience").then((m) => ({
      default: m.Experience,
    })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Experience - Professional Work History",
  description:
    "Explore Mohamed Magdy Elshafey's professional experience as a Backend Developer. View detailed work history, accomplishments, and technical contributions in backend development.",
  alternates: {
    canonical: "https://mohamed-elshafey.vercel.app/experience",
  },
  openGraph: {
    title: "Professional Experience - Mohamed Magdy Elshafey",
    description:
      "Explore my professional journey and technical accomplishments as a Backend Developer specializing in Laravel.",
    url: "https://mohamed-elshafey.vercel.app/experience",
    images: [
      {
        url: "/mee1-removebg-preview.png",
        width: 800,
        height: 800,
        alt: "Mohamed Magdy Elshafey Professional Experience",
      },
    ],
  },
};
import { PageWrapper } from "@/components/PageWrapper";

export default function ExperiencePage() {
  return (
    <PageWrapper backgroundVariant="experience">
      <ExperienceComponent />
    </PageWrapper>
  );
}
