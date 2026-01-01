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
    "Explore my portfolio of backend development projects built with Laravel, PHP, MySQL, and modern technologies. Showcasing real-world applications including property management systems, ERP solutions, and payment platforms.",
  alternates: {
    canonical: "https://mohamed-elshafey.vercel.app/projects",
  },
  openGraph: {
    title: "Projects Portfolio - Mohamed Magdy Elshafey | Backend Developer",
    description:
      "Explore my portfolio of backend applications built with Laravel, PHP, and scalable architectures.",
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
