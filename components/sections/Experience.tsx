"use client";
import {
  experience,
  education,
  certifications,
  experienceContent,
} from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export function Experience() {
  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-16 relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-white/10 text-primary text-sm font-bold uppercase tracking-widest mb-4">
          <Briefcase className="w-4 h-4" />
          <span>{experienceContent.badge}</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-primary">
            Journey
          </span>
        </h2>
      </div>

      <div className="space-y-24">
        {/* Work Experience Section */}
        <section className="space-y-8">
          <h3 className="text-3xl font-bold flex items-center gap-4 text-white font-outfit">
            <span className="p-3 rounded-2xl bg-primary/10 text-primary">
              <Briefcase className="w-6 h-6" />
            </span>
            {experienceContent.workTitle}
          </h3>

          <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-4">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.35,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative pl-8 md:pl-12 group will-change-transform"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[5px] top-8 w-3 h-3 rounded-full bg-primary ring-4 ring-[#111] group-hover:scale-150 transition-all duration-200" />

                <div className="p-6 md:p-8 rounded-2xl bg-[#252525] border border-white/10 hover:border-primary/30 transition-all duration-200 relative overflow-hidden group-hover:-translate-y-0.5">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4 relative z-10">
                    <div>
                      <h4 className="text-2xl font-bold text-white font-outfit group-hover:text-primary/90 transition-colors">
                        {job.role}
                      </h4>
                      <p className="text-lg font-medium text-slate-400 mt-2">
                        {job.company}
                      </p>
                      {"location" in job && job.location && (
                        <p className="text-sm text-slate-500 mt-1">
                          {job.location}
                        </p>
                      )}
                    </div>
                    <span className="text-sm font-bold tracking-wide text-primary bg-primary/10 border border-white/10 px-4 py-2 rounded-full w-fit whitespace-nowrap self-start">
                      {job.duration}
                    </span>
                  </div>

                  <ul className="space-y-4 relative z-10">
                    {job.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start text-slate-300 text-base leading-relaxed"
                      >
                        <span className="mr-4 mt-2.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-8">
          <h3 className="text-3xl font-bold flex items-center gap-4 text-white font-outfit">
            <span className="p-3 rounded-2xl bg-primary/10 text-primary">
              <GraduationCap className="w-6 h-6" />
            </span>
            {experienceContent.educationTitle}
          </h3>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="p-8 rounded-3xl bg-gradient-to-br from-[#252525] to-[#202020] border border-white/10 hover:border-primary/30 transition-all duration-200 group will-change-transform"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
              <div>
                <h4 className="text-2xl font-bold text-white leading-tight mb-2 group-hover:text-primary/90 transition-colors">
                  {education.degree}
                </h4>
                <p className="text-lg font-medium text-slate-400 flex items-center gap-2">
                  {education.university}
                </p>
                {"location" in education && education.location && (
                  <p className="text-sm text-slate-500 mt-1">
                    {education.location}
                  </p>
                )}
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-primary bg-primary/10 px-4 py-2 rounded-xl border border-white/10 whitespace-nowrap w-fit">
                {education.duration}
              </span>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
              {education.details}
            </p>
          </motion.div>
        </section>

        {/* Certifications Section */}
        <section className="space-y-8">
          <h3 className="text-3xl font-bold flex items-center gap-4 text-white font-outfit">
            <span className="p-3 rounded-2xl bg-primary/10 text-primary">
              <Award className="w-6 h-6" />
            </span>
            {experienceContent.achievementsTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[#252525] border border-white/10 hover:border-primary/30 transition-all duration-200 group"
              >
                <div className="mt-1 w-3 h-3 rounded-full bg-primary group-hover:scale-150 transition-transform ring-4 ring-white/5 shrink-0" />
                <span className="text-base font-semibold text-slate-200 leading-snug group-hover:text-white transition-colors">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
