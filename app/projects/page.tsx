import { Metadata } from "next";
import dynamic from "next/dynamic";

const ProjectsComponent = dynamic(
  () =>
    import("@/components/sections/Projects").then((m) => ({
      default: m.Projects,
    })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Projects - Portfolio",
  description:
    "Explore backend development projects including Bayt-Link SaaS, Faya ERP, Qeema ERP, and production APIs built with Laravel and Node.js.",
  alternates: {
    canonical: "https://mohamed-elshafey.vercel.app/projects",
  },
  openGraph: {
    title: "Projects Portfolio - Mohamed Magdy Elshafey | Backend Developer",
    description:
      "Portfolio of SaaS platforms, ERP systems, and production APIs built with Laravel and Node.js.",
    url: "https://mohamed-elshafey.vercel.app/projects",
    images: [
      {
        url: "/mee1-removebg-preview.png",
        width: 800,
        height: 800,
        alt: "Mohamed Magdy Elshafey Projects Portfolio",
      },
    ],
  },
};
import { PageWrapper } from "@/components/PageWrapper";

export default function ProjectsPage() {
  return (
    <PageWrapper backgroundVariant="projects">
      <ProjectsComponent />
    </PageWrapper>
  );
}
