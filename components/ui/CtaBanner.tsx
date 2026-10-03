"use client";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { buttonPrimary, buttonSecondary } from "@/components/ui/styles";
import { ctaContent, cvPath } from "@/lib/data";

export function CtaBanner() {
  return (
    <Reveal className="mt-24 lg:mt-32">
      <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b3550] via-[#152639] to-[#121212] px-6 py-12 text-center sm:px-12 lg:py-16 lg:text-left">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse at top left, black 20%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at top left, black 20%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-primary/30 blur-[100px]"
        />

        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-outfit text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {ctaContent.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-300">
              {ctaContent.description}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link href="/contact" className={`group ${buttonPrimary}`}>
              {ctaContent.primary}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <a href={cvPath} download className={`group ${buttonSecondary}`}>
              <Download className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              {ctaContent.secondary}
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
