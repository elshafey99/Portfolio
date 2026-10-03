"use client";
import { Award, Briefcase, CalendarDays, GraduationCap, MapPin } from "lucide-react";
import { experience, experienceContent } from "@/lib/data";
import { PageHeader, SectionHeading } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { card, cardHover } from "@/components/ui/styles";
import {
  CertificationList,
  EducationCard,
} from "@/components/sections/Education";

export function Experience() {
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow={experienceContent.badge}
        title={experienceContent.title}
        accent={experienceContent.titleAccent}
        description={experienceContent.description}
      />

      <section>
        <SectionHeading title={experienceContent.workTitle} icon={Briefcase} />

        <div className="relative space-y-6 md:space-y-8">
          <span
            aria-hidden
            className="absolute bottom-4 left-[7px] top-4 w-px bg-gradient-to-b from-primary-light/60 via-white/10 to-transparent md:left-[223px]"
          />
          {experience.map((job, index) => {
            const isCurrent = job.duration.includes("Present");
            return (
              <Reveal
                key={`${job.company}-${job.duration}`}
                delay={index * 0.06}
                className="relative grid gap-4 pl-8 md:grid-cols-[200px_1fr] md:gap-12 md:pl-0"
              >
                <span
                  aria-hidden
                  className={`absolute left-0 top-7 flex h-[15px] w-[15px] items-center justify-center rounded-full border md:left-[216px] ${
                    isCurrent
                      ? "border-emerald-400/40 bg-emerald-400/20"
                      : "border-white/15 bg-[#121212]"
                  }`}
                >
                  <span
                    className={`h-[7px] w-[7px] rounded-full ${
                      isCurrent ? "bg-emerald-400" : "bg-neutral-500"
                    }`}
                  />
                </span>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 md:block md:pt-6 md:text-right">
                  <p className="flex items-center gap-1.5 text-sm font-medium text-neutral-300 md:justify-end">
                    <CalendarDays className="h-4 w-4 text-neutral-500 md:hidden" />
                    {job.duration}
                  </p>
                  <p className="flex items-center gap-1.5 text-xs text-neutral-500 md:mt-1 md:justify-end">
                    <MapPin className="h-3.5 w-3.5 md:hidden" />
                    {job.location}
                  </p>
                </div>

                <article className={`${card} ${cardHover} p-6 sm:p-7`}>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="font-outfit text-xl font-semibold text-white sm:text-2xl">
                      {job.role}
                    </h3>
                    {isCurrent && (
                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 font-medium text-primary-light">
                    {job.company}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-[15px] leading-relaxed text-neutral-400"
                      >
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary-light/70" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mt-24 lg:mt-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
          <div>
            <SectionHeading
              title={experienceContent.educationTitle}
              icon={GraduationCap}
            />
            <EducationCard />
          </div>
          <div>
            <SectionHeading
              title={experienceContent.achievementsTitle}
              icon={Award}
            />
            <CertificationList />
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
