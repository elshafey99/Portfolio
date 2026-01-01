import { Metadata } from "next";
import { Education as EducationComponent } from "@/components/sections/Education";

export const metadata: Metadata = {
  title: "Education - Academic Background",
  description:
    "Discover Mohamed Magdy Elshafey's educational background, academic achievements, and professional certifications in Computer Science and Backend Development.",
  alternates: {
    canonical: "https://mohamed-elshafey.vercel.app/education",
  },
  openGraph: {
    title: "Education & Certifications - Mohamed Magdy Elshafey",
    description:
      "Explore my academic journey, certifications, and continuous learning in backend development and computer science.",
    url: "https://mohamed-elshafey.vercel.app/education",
    images: [
      {
        url: "/mee1-removebg-preview.png",
        width: 800,
        height: 800,
        alt: "Mohamed Magdy Elshafey Education",
      },
    ],
  },
};
import { PageWrapper } from "@/components/PageWrapper";

export default function EducationPage() {
  return (
    <PageWrapper>
      <div className="space-y-20">
        <EducationComponent />
      </div>
    </PageWrapper>
  );
}
