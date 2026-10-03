import { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Projects — Mohamed Magdy Elshafey | Backend Developer Portfolio",
  description:
    "Backend projects by Mohamed Magdy Elshafey: Darabny (training marketplace, 460+ API endpoints, Laravel 13), Bayt-Link (SaaS property management), Beyonex Workflow (HR/CRM platform), Gaia Spa (booking platform), Elagy Care (e-pharmacy), Nash Menu (online ordering), Faya ERP (restaurant ERP).",
  alternates: {
    canonical: "https://mohamed-elshafey.vercel.app/projects",
  },
  openGraph: {
    title: "Projects Portfolio — Mohamed Magdy Elshafey | Backend Developer",
    description:
      "SaaS platforms, ERP systems, e-pharmacy, booking apps, and production APIs built with Laravel 12/13, PHP 8.4, MySQL, and Pest.",
    url: "https://mohamed-elshafey.vercel.app/projects",
    images: [
      {
        url: "/mee1-removebg-preview.png",
        width: 800,
        height: 800,
        alt: "Mohamed Magdy Elshafey — Projects Portfolio",
      },
    ],
  },
};

const ProjectsComponent = dynamic(
  () =>
    import("@/components/sections/Projects").then((m) => ({
      default: m.Projects,
    })),
  { ssr: true }
);

export default function ProjectsPage() {
  return (
    <PageWrapper backgroundVariant="projects">
      <ProjectsComponent />
    </PageWrapper>
  );
}
