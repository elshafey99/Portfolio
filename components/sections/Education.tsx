"use client";
import { Award, CalendarDays, GraduationCap, MapPin } from "lucide-react";
import {
  certifications,
  education,
  educationContent,
  experienceContent,
} from "@/lib/data";
import { PageHeader, SectionHeading } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { card, cardHover } from "@/components/ui/styles";

const certificationPattern = /^(.*?)\s*-\s*(.*?)\s*\((.*)\)$/;

function parseCertification(raw: string) {
  const match = raw.match(certificationPattern);
  return match
    ? { title: match[1], issuer: match[2], date: match[3] }
    : { title: raw, issuer: "", date: "" };
}

export function EducationCard() {
  return (
    <Reveal className={`${card} ${cardHover} relative overflow-hidden p-6 sm:p-8`}>
      <div
        aria-hidden
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl"
      />
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#1f4466] text-white shadow-lg shadow-primary/20 ring-1 ring-inset ring-white/15">
          <GraduationCap className="h-7 w-7" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-outfit text-xl font-semibold text-white sm:text-2xl">
            {education.degree}
          </h3>
          <p className="mt-1.5 text-neutral-300">{education.university}</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-500">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {education.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {education.location}
            </span>
          </div>
          <p className="mt-5 border-t border-white/[0.06] pt-5 text-sm leading-relaxed text-neutral-400 sm:text-base">
            {education.details}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export function CertificationList() {
  return (
    <div className="grid gap-4">
      {certifications.map((raw, idx) => {
        const cert = parseCertification(raw);
        return (
          <Reveal
            key={raw}
            delay={idx * 0.06}
            className={`${card} ${cardHover} flex items-start gap-4 p-5 sm:p-6`}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300 ring-1 ring-inset ring-amber-400/20">
              <Award className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h3 className="font-semibold leading-snug text-white">
                {cert.title}
              </h3>
              {cert.issuer && (
                <p className="mt-1 text-sm text-neutral-400">{cert.issuer}</p>
              )}
              {cert.date && (
                <p className="mt-2 text-xs text-neutral-500">{cert.date}</p>
              )}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function Education() {
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow={educationContent.badge}
        title={educationContent.title}
        accent={educationContent.titleAccent}
        description={educationContent.description}
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
        <section>
          <SectionHeading
            title={experienceContent.educationTitle}
            icon={GraduationCap}
          />
          <EducationCard />
        </section>
        <section>
          <SectionHeading
            title={experienceContent.achievementsTitle}
            icon={Award}
          />
          <CertificationList />
        </section>
      </div>

      <CtaBanner />
    </div>
  );
}
