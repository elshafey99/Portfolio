import { Metadata } from "next";
import { PageWrapper } from "@/components/PageWrapper";
import { Education as EducationComponent } from "@/components/sections/Education";

export const metadata: Metadata = {
  title: {
    absolute:
      "Education — Mohamed Magdy Elshafey | Computer Science, Benha University",
  },
  description:
    "Mohamed Magdy Elshafey holds a Bachelor's Degree in Computer Science from the Faculty of Computers and Artificial Intelligence, Benha University, Egypt (2020–2024). Focused on software development, data structures, and database design.",
  alternates: {
    canonical: "https://mohamed-elshafey.vercel.app/education",
  },
  openGraph: {
    title: "Education — Mohamed Magdy Elshafey",
    description:
      "B.Sc. Computer Science, Faculty of Computers and Artificial Intelligence, Benha University, Egypt (2020–2024).",
    url: "https://mohamed-elshafey.vercel.app/education",
    images: [
      {
        url: "/mee1-removebg-preview.png",
        width: 800,
        height: 800,
        alt: "Mohamed Magdy Elshafey — Education",
      },
    ],
  },
};

export default function EducationPage() {
  return (
    <PageWrapper>
      <EducationComponent />
    </PageWrapper>
  );
}
