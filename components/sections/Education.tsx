"use client";
import { education, experienceContent } from "@/lib/data";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <div className="max-w-4xl mx-auto px-4 mt-10 mb-20">
      <div className="flex items-center gap-3 mb-10 justify-center">
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
          <GraduationCap className="w-6 h-6" />
        </div>
        <h2 className="text-4xl font-bold font-outfit text-white">
          {experienceContent.educationTitle}
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative group md:hover:scale-[1.02] transition-transform duration-400 will-change-transform"
      >
        {/* Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary/85 to-primary/70 rounded-3xl opacity-5 blur-xl transition-opacity duration-500" />

        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 p-8 md:p-10 rounded-3xl bg-[#252525] border border-white/10 shadow-lg">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-slate-900 flex items-center justify-center shadow-md rotate-3 group-hover:rotate-6 transition-transform duration-300">
              <GraduationCap className="w-10 h-10" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow text-center md:text-left space-y-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-outfit text-white mb-2">
                {education.degree}
              </h3>
              <p className="text-lg md:text-xl text-slate-300 font-medium">
                {education.university}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-white/10 text-primary text-sm font-bold tracking-wide uppercase">
              {education.duration}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
