"use client";
import type { ComponentType } from "react";
import {
  personalInfo,
  skills,
  languages,
  aboutContent,
} from "@/lib/data";
import {
  SiComposer,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiGoogle,
  SiJsonwebtokens,
  SiLaravel,
  SiLivewire,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiStripe,
  SiWhatsapp,
} from "react-icons/si";
import {
  Boxes,
  Brain,
  Clock,
  Code2,
  CreditCard,
  Cpu,
  Database,
  FlaskConical,
  Gauge,
  Languages,
  Layers,
  Plug,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";
import { PageHeader, SectionHeading } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { card, cardHover, chip } from "@/components/ui/styles";

type Icon = ComponentType<{ className?: string }>;

const skillIconRules: [RegExp, Icon][] = [
  [/pest|testing/, FlaskConical],
  [/whatsapp/, SiWhatsapp],
  [/firebase/, SiFirebase],
  [/stripe/, SiStripe],
  [/paymob|hyperpay|dineropay/, CreditCard],
  [/google|sign-in/, SiGoogle],
  [/github actions/, SiGithubactions],
  [/express/, SiExpress],
  [/^jwt$/, SiJsonwebtokens],
  [/livewire/, SiLivewire],
  [/laravel/, SiLaravel],
  [/php|blade/, SiPhp],
  [/mysql/, SiMysql],
  [/composer/, SiComposer],
  [/apidog/, Plug],
  [/node/, SiNodedotjs],
  [/^git$/, SiGit],
  [/postman/, SiPostman],
  [/restful|api/, Code2],
  [/state machine/, Workflow],
  [/oop|solid|pattern|service layer|architecture|hmvc|modules/, Layers],
  [/multi-tenant|rbac/, ShieldCheck],
  [/database|transaction/, Database],
  [/optimization/, Gauge],
  [/team/, Users],
  [/problem/, Brain],
  [/adaptab/, Workflow],
  [/time/, Clock],
];

function getSkillIcon(skill: string): Icon {
  const lower = skill.toLowerCase();
  return skillIconRules.find(([rule]) => rule.test(lower))?.[1] ?? Code2;
}

const skillCategories = [
  {
    title: "Backend & APIs",
    icon: Code2,
    desc: "Languages, frameworks and API technologies",
    skills: skills.backend,
  },
  {
    title: "Database & Testing",
    icon: Database,
    desc: "Data modeling, performance and automated testing",
    skills: skills.database,
  },
  {
    title: "Architecture",
    icon: Cpu,
    desc: "Patterns and principles behind maintainable backends",
    skills: skills.architecture,
  },
  {
    title: "Integrations & Tools",
    icon: Wrench,
    desc: "Payment gateways, third-party services and tooling",
    skills: skills.integrations,
  },
];

const highlightIcons = [Boxes, Plug, Database, Sparkles];
const [intro, ...restOfBio] = personalInfo.about.split("\n\n");

export function About() {
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow={aboutContent.badge}
        title={aboutContent.title}
        accent={aboutContent.titleAccent}
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <Reveal className="space-y-6 text-base leading-relaxed text-neutral-300 sm:text-lg">
          <p className="text-lg text-white sm:text-xl">{intro}</p>
          {restOfBio.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-neutral-400">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className={`${card} p-6 sm:p-7`}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {aboutContent.factsTitle}
          </h2>
          <dl className="mt-5 divide-y divide-white/[0.06]">
            {aboutContent.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-4 py-3 first:pt-0"
              >
                <dt className="text-sm text-neutral-500">{fact.label}</dt>
                <dd className="text-right text-sm font-medium text-neutral-100">
                  {fact.value}
                </dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-4 pt-3">
              <dt className="flex items-center gap-1.5 text-sm text-neutral-500">
                <Languages className="h-3.5 w-3.5" />
                {aboutContent.languagesTitle}
              </dt>
              <dd className="text-right text-sm font-medium text-neutral-100">
                {languages.map((lang) => (
                  <span key={lang.name} className="block">
                    {lang.name}{" "}
                    <span className="font-normal text-neutral-500">
                      · {lang.level}
                    </span>
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>

      <section className="mt-24 lg:mt-32">
        <SectionHeading title={aboutContent.highlightsTitle} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutContent.highlights.map((item, idx) => {
            const Icon = highlightIcons[idx] ?? Sparkles;
            return (
              <Reveal
                key={item.label}
                delay={idx * 0.06}
                className={`${card} ${cardHover} group p-6`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary-light ring-1 ring-inset ring-primary/20 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-outfit text-lg font-semibold text-white">
                  {item.label}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">
                  {item.desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mt-24 lg:mt-32">
        <SectionHeading
          title={aboutContent.skillsTitle}
          description={aboutContent.skillsDesc}
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {skillCategories.map((category, idx) => (
            <Reveal
              key={category.title}
              delay={(idx % 2) * 0.08}
              className={`${card} p-6 sm:p-7`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-primary-light">
                  <category.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-outfit text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                  <p className="text-sm text-neutral-500">{category.desc}</p>
                </div>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const SkillIcon = getSkillIcon(skill);
                  return (
                    <li
                      key={skill}
                      className={`${chip} py-1.5 text-[13px] transition-colors hover:border-white/20 hover:text-white`}
                    >
                      <SkillIcon className="h-3.5 w-3.5 text-neutral-500" />
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className={`${card} mt-4 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:p-7`}>
          <div className="flex items-center gap-3 sm:w-64 sm:shrink-0">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-primary-light">
              <UserCheck className="h-5 w-5" />
            </span>
            <h3 className="font-outfit text-lg font-semibold text-white">
              Soft Skills
            </h3>
          </div>
          <ul className="flex flex-wrap gap-2">
            {skills.soft.map((skill) => {
              const SkillIcon = getSkillIcon(skill);
              return (
                <li key={skill} className={`${chip} py-1.5 text-[13px]`}>
                  <SkillIcon className="h-3.5 w-3.5 text-neutral-500" />
                  {skill}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </section>

      <CtaBanner />
    </div>
  );
}
