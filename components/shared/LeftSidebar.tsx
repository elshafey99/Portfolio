"use client";

import React from "react";
import Image from "next/image";

import { Mail, Copyright } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiLaravel,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";

// Desktop Sidebar
export function LeftSidebar() {
  return (
    <div className="h-full w-full flex flex-col justify-between p-8 bg-[#151515] border-r border-white/5 relative overflow-hidden text-neutral-200">
      {/* Background Decoration - Abstract Lines - Clean Gray */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-white/20"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="space-y-6 relative z-10 pt-8">
        {/* Brand / Name Section - Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          {/* Name & Title */}
          <div className="space-y-2 mb-4">
            <h1 className="text-4xl font-black font-outfit uppercase tracking-tighter leading-none">
              <span className="block text-white drop-shadow-lg">
                {personalInfo.name.split(" ")[0]}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-primary drop-shadow-sm">
                {personalInfo.name.split(" ")[1]}
              </span>
            </h1>
            <p className="text-sm text-neutral-400 font-medium tracking-wide uppercase">
              {personalInfo.title.split(" | ")[0]}
            </p>
          </div>

          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-full cursor-default"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </div>
            <span className="text-[10px] font-bold tracking-wider uppercase text-primary">
              Open to Work
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Middle Section - Real Tech Logos */}
      <div className="flex-grow relative w-full my-4 overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-[0.12] space-y-6 select-none pointer-events-none">
          <div className="flex gap-6 items-center">
            <SiLaravel className="w-9 h-9 text-red-500" />
            <SiPhp className="w-8 h-8 text-indigo-500" />
          </div>
          <div className="flex gap-8">
            <SiMysql className="w-10 h-10 text-blue-500" />
          </div>
          <div className="flex gap-6 items-center">
            <SiJavascript className="w-8 h-8 text-brand-js" />
            <SiReact className="w-7 h-7 text-brand-react" />
          </div>
        </div>

        {/* Subtle Abstract Lines */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0 50 Q 50 40 100 50"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
            />
            <path
              d="M0 60 Q 50 50 100 60"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-6 relative z-10 pb-4">
        {/* Profile Picture - Bottom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="relative group">
            {/* Animated Glow Ring */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary/50 to-primary/30 rounded-full opacity-20 blur transition duration-500"></div>

            {/* Image Frame - Large and clear */}
            <div className="relative w-40 h-40 rounded-full bg-[#151515] border-2 border-white/10 overflow-visible">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-neutral-800 flex items-center justify-center">
                <Image
                  src="/mee1-removebg-preview.png"
                  alt="Mohamed Magdy Elshafey"
                  width={152}
                  height={152}
                  className="object-contain rounded-full group-hover:scale-110 transition-transform duration-500"
                  quality={100}
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Status Indicator Dot */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#151515] rounded-full flex items-center justify-center z-20">
              <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-[#151515] animate-pulse"></div>
            </div>
          </div>
        </motion.div>

        {/* Social Icons - Real Brand Icons */}
        <div className="flex gap-2">
          {[
            { icon: SiGithub, href: personalInfo.github, label: "GitHub" },
            {
              icon: SiLinkedin,
              href: personalInfo.linkedin,
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: `mailto:${personalInfo.email}`,
              label: "Email",
            },
            {
              icon: FaWhatsapp,
              href: `https://wa.me/${personalInfo.phone.replace(
                /[^0-9]/g,
                ""
              )}`,
              label: "WhatsApp",
            },
          ].map((Item, idx) => (
            <a
              key={idx}
              href={Item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={Item.label}
              className="flex-1 p-3 flex items-center justify-center bg-primary/10 hover:bg-primary text-primary hover:text-slate-900 border border-primary/20 rounded-xl transition-all duration-300 group"
            >
              <Item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center text-[10px] text-neutral-500 font-medium tracking-wide border-t border-white/10 pt-4 gap-1">
          <div className="flex items-center gap-1">
            <Copyright className="w-3 h-3" />
            <span>
              {2025}{" "}
              <a
                href="https://mohamed-elshafey.vercel.app"
                className="font-bold text-primary"
              >
                Mohamed Magdy Elshafey
              </a>
            </span>
          </div>
          <span className="uppercase tracking-widest text-[9px] opacity-70">
            All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
}
