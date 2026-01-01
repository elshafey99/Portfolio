"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { projects, projectsContent } from "@/lib/data";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Github, ExternalLink, X, FolderOpen } from "lucide-react";
import Image from "next/image";

// Define type based on data structure
interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
  details?: string;
}

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.25,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{ perspective: 1000 }}
      className="h-full will-change-transform"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className="group relative h-full w-full rounded-3xl bg-[#1f1f1f] border border-white/5 p-4 transition-all duration-200 cursor-pointer overflow-hidden flex flex-col"
        suppressHydrationWarning
      >
        {/* shine effect */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Image Container */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden transform-style-3d group-hover:translate-z-10 transition-transform">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />

          <div className="absolute top-3 right-3 flex gap-2 translate-z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="p-2.5 bg-primary text-slate-900 rounded-full backdrop-blur-md">
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="mt-6 text-center transform-style-3d group-hover:translate-z-5 transition-transform relative z-10 pb-2">
          <h3 className="text-xl md:text-2xl font-bold font-outfit text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-400 font-medium tracking-wider uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
            {projectsContent.btnDetails}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-white/10 text-primary text-sm font-bold uppercase tracking-widest mb-4">
          <FolderOpen className="w-4 h-4" />
          <span>{projectsContent.badge}</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white">
          {projectsContent.title.split(" ")[0]}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/85 to-primary/70">
            {projectsContent.title.split(" ").slice(1).join(" ")}
          </span>
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
          {projectsContent.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {mounted && typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                <motion.div
                  layoutId={`project-modal-${projects.indexOf(
                    selectedProject
                  )}`}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="relative w-full max-w-3xl bg-card border border-border/50 rounded-3xl shadow-lg overflow-hidden h-[85vh] flex flex-col z-50"
                >
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-[60] backdrop-blur-md"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Top Image Section - 45% Height */}
                  <div className="relative w-full h-[45%] shrink-0 bg-neutral-900 overflow-hidden">
                    {/* Ambient Background Blur */}
                    <Image
                      src={selectedProject.image}
                      alt=""
                      fill
                      className="object-cover opacity-60 blur-2xl scale-110 grayscale-[0.2]"
                    />

                    {/* Main Clear Image */}
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="relative z-10 object-contain p-6"
                    />
                  </div>

                  {/* Bottom Content Section - 55% Height */}
                  <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-card flex flex-col">
                    <div className="mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl md:text-4xl font-bold font-outfit text-white">
                          {selectedProject.title}
                        </h3>
                      </div>
                      <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed font-light line-clamp-4">
                        {selectedProject.details || selectedProject.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 bg-primary/5 border border-white/10 text-primary text-xs font-medium rounded-lg"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1f1f1f] text-slate-200 border border-white/10 hover:border-primary/30 hover:bg-primary/10 transition-all font-bold text-sm"
                      >
                        <Github className="w-4 h-4" />
                        {projectsContent.btnGithub}
                      </a>
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-primary via-primary/95 to-primary/90 hover:from-primary/90 hover:via-primary/85 hover:to-primary/80 text-slate-900 font-bold hover:-translate-y-0.5 transition-all duration-200 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {projectsContent.btnDemo}
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
