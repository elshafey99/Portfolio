"use client";
import type { CSSProperties, ReactNode } from "react";
import { motion, MotionConfig, type Variants } from "framer-motion";
import { ArrowRight, Briefcase, Download, Mail, MapPin } from "lucide-react";
import {
  SiExpress,
  SiFirebase,
  SiGithub,
  SiGithubactions,
  SiLaravel,
  SiLinkedin,
  SiLivewire,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostman,
} from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { cvPath, experience, heroContent, personalInfo } from "@/lib/data";
import { EASE } from "@/components/ui/Reveal";
import {
  buttonPrimary,
  buttonSecondary,
  focusRing,
} from "@/components/ui/styles";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const [role, specialty] = personalInfo.title.split(" | ");
const nameParts = personalInfo.name.split(" ");
const lastName = nameParts.pop();
const leadingName = nameParts.join(" ");
const currentJob = experience[0];

const socials = [
  { label: "GitHub", href: personalInfo.github, Icon: SiGithub },
  { label: "LinkedIn", href: personalInfo.linkedin, Icon: SiLinkedin },
  { label: "Email", href: `mailto:${personalInfo.email}`, Icon: Mail },
];

const stack = [
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Livewire", Icon: SiLivewire, color: "#FB70A9" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
];

export function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative isolate flex min-h-[calc(100svh-4rem)] w-full flex-col justify-center overflow-hidden lg:min-h-screen">
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-10 pt-12 sm:px-10 xl:py-16">
          <div className="grid grid-cols-1 items-center gap-14 xl:grid-cols-[1.2fr_0.8fr] xl:gap-10">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="order-2 mx-auto flex max-w-2xl flex-col items-center text-center xl:order-1 xl:mx-0 xl:max-w-none xl:items-start xl:text-left"
            >
              <motion.div
                variants={fadeUp}
                className="mb-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 xl:justify-start"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  {heroContent.availability}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400">
                  <MapPin className="h-3.5 w-3.5" />
                  {personalInfo.location}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-outfit text-[2.6rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-[4.25rem]"
              >
                <span className="block">{leadingName}</span>
                <span className="block bg-gradient-to-r from-primary-light via-primary-light to-primary bg-clip-text pb-1 text-transparent">
                  {lastName}
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-5 font-outfit text-lg font-medium text-neutral-200 sm:text-2xl"
              >
                <span className="whitespace-nowrap">{role}</span>
                <span className="mx-2 text-neutral-600 sm:mx-2.5">/</span>
                <span className="whitespace-nowrap text-primary-light">
                  {specialty}
                </span>
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-[1.0625rem]"
              >
                {heroContent.description}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
              >
                <Link
                  href="/projects"
                  className={`group ${buttonPrimary}`}
                >
                  {heroContent.btnProject}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={cvPath}
                  download
                  className={`group ${buttonSecondary}`}
                >
                  <Download className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                  {heroContent.btnContact}
                </a>

                <div className="mt-2 flex items-center gap-2 sm:ml-1 sm:mt-0">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-neutral-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] hover:text-white ${focusRing}`}
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.dl
                variants={fadeUp}
                className="mt-12 grid w-full grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-4 xl:max-w-xl"
              >
                {heroContent.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-1 bg-[#151515] px-4 py-4 text-center xl:text-left"
                  >
                    <dt className="text-xs leading-snug text-neutral-500">
                      {stat.label}
                    </dt>
                    <dd className="font-outfit text-2xl font-bold text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </motion.dl>
            </motion.div>

            <Portrait />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-14 border-t border-white/[0.06] pt-7 xl:mt-16"
          >
            <div className="flex flex-col items-center gap-4 xl:flex-row xl:gap-8">
              <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                {heroContent.stackTitle}
              </p>
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 xl:justify-start">
                {stack.map(({ name, Icon, color }) => (
                  <li
                    key={name}
                    style={{ "--brand": color } as CSSProperties}
                    className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-200"
                  >
                    <Icon className="h-4 w-4 transition-colors duration-200 group-hover:text-[color:var(--brand)]" />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}

function Portrait() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
      className="order-1 flex justify-center xl:order-2 xl:justify-end"
    >
      <div className="relative w-[230px] sm:w-[280px] xl:w-[360px]">
        <div
          aria-hidden
          className="absolute -inset-10 rounded-full bg-primary/25 blur-3xl"
        />

        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#3776AB] via-[#285a86] to-[#14212f] shadow-2xl shadow-black/60">
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "radial-gradient(ellipse at top, black 20%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at top, black 20%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-[10%] aspect-square w-[85%] -translate-x-1/2 rounded-full border border-white/15 bg-white/[0.04]"
          />

          <div className="absolute inset-x-0 bottom-0 top-6">
            <Image
              src="/mee1-removebg-preview.png"
              alt={personalInfo.name}
              fill
              priority
              unoptimized
              className="object-cover object-top"
              sizes="(max-width: 640px) 230px, (max-width: 1280px) 280px, 360px"
            />
          </div>

          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#14212f] via-[#14212f]/60 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10"
          />
        </div>

        <FloatingChip className="-left-8 top-6 sm:-left-14 sm:top-10" delay={0}>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FF2D20]/15 text-[#FF2D20]">
            <SiLaravel className="h-5 w-5" />
          </span>
          <span className="text-left">
            <span className="block text-sm font-semibold leading-tight text-white">
              Laravel
            </span>
            <span className="block text-[11px] text-neutral-400">
              Specialist
            </span>
          </span>
        </FloatingChip>

        <FloatingChip
          className="-right-6 bottom-5 sm:-right-12 sm:bottom-12"
          delay={1.5}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary-light">
            <Briefcase className="h-[18px] w-[18px]" />
          </span>
          <span className="text-left">
            <span className="block text-sm font-semibold leading-tight text-white">
              {currentJob.company}
            </span>
            <span className="block text-[11px] text-neutral-400">
              {currentJob.role} · Now
            </span>
          </span>
        </FloatingChip>
      </div>
    </motion.div>
  );
}

function FloatingChip({
  children,
  className,
  delay,
}: {
  children: ReactNode;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.5, delay: 0.6 + delay * 0.2 },
        scale: { duration: 0.5, delay: 0.6 + delay * 0.2 },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={`absolute z-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#161616]/85 py-2.5 pl-2.5 pr-4 shadow-xl shadow-black/40 backdrop-blur-md ${className}`}
    >
      {children}
    </motion.div>
  );
}
