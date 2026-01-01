"use client";
import { personalInfo, skills, aboutContent } from "@/lib/data";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiPostman,
  SiRedux,
  SiAngular,
  SiNodedotjs,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiPython,
  SiFirebase,
} from "react-icons/si";
import {
  Zap,
  Target,
  Layout,
  User,
  Clock,
  MessageSquare,
  Workflow,
  Users,
  Brain,
  Database,
  Code2,
  Layers,
  Box,
  Cpu,
  UserCheck,
  Sparkles,
  Rocket,
  Eye,
} from "lucide-react";

const getSkillIcon = (skillName: string) => {
  const lower = skillName.toLowerCase();

  // Backend Tech Icons - Real Logos
  if (lower.includes("laravel")) return SiLaravel;
  if (lower.includes("php")) return SiPhp;
  if (lower.includes("mysql")) return SiMysql;
  if (lower.includes("python")) return SiPython;
  if (lower.includes("firebase")) return SiFirebase;
  if (lower.includes("html")) return SiHtml5;
  if (lower.includes("css")) return SiCss3;
  if (lower.includes("javascript") && !lower.includes("type"))
    return SiJavascript;
  if (lower.includes("typescript")) return SiTypescript;
  if (lower.includes("tailwind")) return SiTailwindcss;
  if (lower.includes("bootstrap")) return SiBootstrap;
  if (lower.includes("angular")) return SiAngular;
  if (lower.includes("react") && !lower.includes("next")) return SiReact;
  if (lower.includes("next")) return SiNextdotjs;
  if (lower.includes("node") && !lower.includes("next")) return SiNodedotjs;
  if (lower.includes("git") && !lower.includes("hub")) return SiGit;
  if (lower.includes("github")) return SiGithub;
  if (lower.includes("figma")) return SiFigma;
  if (lower.includes("vercel") || lower.includes("netlify")) return SiVercel;
  if (lower.includes("postman")) return SiPostman;
  if (lower.includes("redux") || lower.includes("context")) return SiRedux;

  // Concepts & Principles
  if (lower.includes("restful") || lower.includes("api")) return Code2;
  if (lower.includes("solid")) return Layers;
  if (lower.includes("pattern")) return Layers;
  if (lower.includes("oop") || lower.includes("object")) return Box;
  if (lower.includes("mvc")) return Layers;
  if (lower.includes("module")) return Layers;
  if (lower.includes("multi-tenant")) return Database;
  if (lower.includes("database") || lower.includes("sql")) return Database;
  if (lower.includes("performance") || lower.includes("optimization")) return Zap;
  if (lower.includes("clean code")) return Code2;

  // Soft Skills & CS
  if (lower.includes("team") || lower.includes("collaboration")) return Users;
  if (
    lower.includes("problem") ||
    lower.includes("thinking") ||
    lower.includes("learning")
  )
    return Brain;
  if (lower.includes("communication")) return MessageSquare;
  if (lower.includes("adaptab")) return Workflow;
  if (lower.includes("detail")) return Target;
  if (lower.includes("time")) return Clock;
  if (lower.includes("agile")) return Zap;
  if (lower.includes("structure") || lower.includes("algorithm")) return Code2;
  if (lower.includes("quality")) return Target;

  return Code2;
};

export function About() {
  const skillCategories = [
    {
      title: "Programming & Database",
      icon: Code2,
      desc: "Core programming languages and database technologies",
      skills: skills.frontend,
    },
    {
      title: "Concepts & Tools",
      icon: Layers,
      desc: "Development principles, patterns, and tools",
      skills: skills.tools,
    },
    {
      title: "Backend Architecture",
      icon: Cpu,
      desc: "Advanced backend concepts and architectures",
      skills: skills.cs,
    },
    {
      title: "Professional Skills",
      icon: UserCheck,
      desc: "Soft skills & Personal attributes",
      skills: skills.soft,
    },
  ];

  return (
    <div className="container mx-auto px-4 max-w-5xl space-y-32 mb-20">
      {/* Intro Section */}
      <section className="text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-white/10 text-primary text-sm font-bold uppercase tracking-widest mb-6">
          <User className="w-4 h-4" />
          <span>{aboutContent.badge}</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold font-outfit text-white mb-8 tracking-tight">
          {aboutContent.titlePrefix}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-primary">
            {personalInfo.name}
          </span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed font-light text-slate-300">
            {personalInfo.about}
          </p>
        </div>
      </section>

      {/* Highlights Grid - My Approach */}
      <section className="mt-16">
        <h3 className="text-2xl md:text-3xl font-bold font-outfit text-white mb-8 text-center">
          My Approach
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutContent.highlights.map((item, idx) => {
            const icons = [Sparkles, Rocket, Zap, Eye];
            const Icon = icons[idx] || Sparkles;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.35,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#252525] border border-white/10 hover:border-primary/30 transition-all duration-200 group will-change-transform"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1 font-outfit">
                  {item.label}
                </h3>
                <p className="text-slate-400 font-medium">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Skills Categories (The Menu) */}
      <section>
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold font-outfit text-white">
            {aboutContent.skillsTitle.split(" ")[0]}{" "}
            <span className="text-primary">
              {aboutContent.skillsTitle.split(" ").slice(1).join(" ")}
            </span>
          </h3>
          <p className="text-slate-400 mt-3 text-lg">
            {aboutContent.skillsDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.35,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative p-8 md:p-10 rounded-[2.5rem] bg-[#252525] border border-white/10 transition-all duration-200 will-change-transform"
            >
              {/* Menu Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10 border-b border-white/5 pb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/75 text-slate-900 flex items-center justify-center shadow-md shrink-0">
                  <category.icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white font-outfit mb-2">
                    {category.title}
                  </h4>
                  <p className="text-lg text-slate-400 font-medium">
                    {category.desc}
                  </p>
                </div>
              </div>

              {/* Skills Grid - Unified Colors */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {category.skills.map((skill, sIdx) => {
                  const Icon = getSkillIcon(skill);

                  return (
                    <motion.div
                      key={sIdx}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{
                        delay: sIdx * 0.015,
                        duration: 0.3,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      whileHover={{
                        y: -3,
                        scale: 1.03,
                        transition: { duration: 0.15 },
                      }}
                      className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-[#2a2a2a] to-[#252525] border border-white/10 hover:border-primary/30 transition-all duration-200 group cursor-default will-change-transform"
                    >
                      <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-all duration-200" />
                      <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors leading-tight text-center">
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
