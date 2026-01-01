"use client";
import dynamic from "next/dynamic";
import { PageWrapper } from "@/components/PageWrapper";

const Hero = dynamic(
  () => import("@/components/sections/Hero").then((m) => ({ default: m.Hero })),
  { ssr: true }
);

export default function Home() {
  return (
    <PageWrapper className="p-0 overflow-hidden">
      <Hero />
    </PageWrapper>
  );
}
