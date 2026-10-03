"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, X } from "lucide-react";
import { projects, projectsContent } from "@/lib/data";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, EASE } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/ui/CtaBanner";
import {
  buttonPrimary,
  buttonSecondary,
  card,
  cardHover,
  chip,
  focusRing,
} from "@/components/ui/styles";

type Project = (typeof projects)[number];

const hasDemo = (project: Project) =>
  Boolean(project.demo) && project.demo !== "#";

const hasRepo = (project: Project) =>
  new URL(project.github).pathname.split("/").filter(Boolean).length >= 2;

const liveCount = projects.filter(hasDemo).length;

function ProjectImage({
  project,
  sizes,
  className = "",
}: {
  project: Project;
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[#0d0d0d] ${className}`}
    >
      <Image
        src={project.image}
        alt=""
        aria-hidden
        fill
        sizes="64px"
        className="scale-150 object-cover opacity-40 blur-2xl"
      />
      <div className="absolute inset-5 sm:inset-6">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={sizes}
          className="rounded-lg object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
    </div>
  );
}

function StatusBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-[#1c1608]/90 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300" />
      {projectsContent.inProgress}
    </span>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const extraTech = project.tech.length - 4;

  return (
    <Reveal delay={(index % 3) * 0.06} className="h-full">
      <article
        className={`${card} ${cardHover} group relative flex h-full flex-col overflow-hidden has-[button:focus-visible]:ring-2 has-[button:focus-visible]:ring-primary-light`}
      >
        <div className="relative">
          <ProjectImage
            project={project}
            className="aspect-[16/10] border-b border-white/[0.06]"
            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 360px"
          />
          {project.inProgress && (
            <div className="absolute left-4 top-4">
              <StatusBadge />
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary-light">
            {project.role}
          </p>
          <h3 className="mt-2 font-outfit text-xl font-semibold text-white">
            <button
              type="button"
              onClick={onOpen}
              className="text-left after:absolute after:inset-0 focus-visible:outline-none"
            >
              {project.title}
            </button>
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-400">
            {project.description}
          </p>

          <ul className="mb-5 mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((tech) => (
              <li key={tech} className={chip}>
                {tech}
              </li>
            ))}
            {extraTech > 0 && (
              <li className={`${chip} text-neutral-500`}>+{extraTech}</li>
            )}
          </ul>

          <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-4">
            <span className="inline-flex items-center gap-1 text-sm font-medium text-neutral-400 transition-colors group-hover:text-white">
              {projectsContent.btnDetails}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
            {hasDemo(project) && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative z-10 inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-primary-light transition-colors hover:bg-primary/10 ${focusRing}`}
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function ProjectDialog({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-dialog-title"
    >
      <div
        aria-hidden
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="relative flex max-h-[92svh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-[#141414] shadow-2xl shadow-black/60 sm:rounded-3xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className={`absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/70 ${focusRing}`}
        >
          <X className="h-4 w-4" />
        </button>

        <ProjectImage
          project={project}
          className="aspect-[16/8] shrink-0 border-b border-white/[0.06]"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-light">
              {project.role}
            </span>
            {project.inProgress && <StatusBadge />}
          </div>
          <h2
            id="project-dialog-title"
            className="mt-2 font-outfit text-2xl font-bold text-white sm:text-3xl"
          >
            {project.title}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-300">
            {project.details ?? project.description}
          </p>

          <h3 className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {projectsContent.techTitle}
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li key={tech} className={`${chip} py-1.5 text-[13px]`}>
                {tech}
              </li>
            ))}
          </ul>

          {(hasDemo(project) || hasRepo(project)) && (
            <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.06] pt-6 sm:flex-row">
              {hasDemo(project) && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonPrimary}
                >
                  <ExternalLink className="h-4 w-4" />
                  {projectsContent.btnDemo}
                </a>
              )}
              {hasRepo(project) && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonSecondary}
                >
                  <Github className="h-4 w-4" />
                  {projectsContent.btnGithub}
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);
  const closeDialog = useCallback(() => setSelected(null), []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow={projectsContent.badge}
        title={projectsContent.title}
        accent={projectsContent.titleAccent}
        description={projectsContent.description}
      >
        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          <span className={`${chip} px-3 py-1.5 text-sm`}>
            <span className="font-semibold text-white">{projects.length}</span>
            projects
          </span>
          <span className={`${chip} px-3 py-1.5 text-sm`}>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-semibold text-white">{liveCount}</span>
            live in production
          </span>
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            onOpen={() => setSelected(project)}
          />
        ))}
      </div>

      <CtaBanner />

      {mounted &&
        createPortal(
          <AnimatePresence>
            {selected && (
              <ProjectDialog
                key={selected.title}
                project={selected}
                onClose={closeDialog}
              />
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
