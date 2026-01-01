"use client";
import { motion } from "framer-motion";
import { Download, Monitor } from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiPython,
  SiFirebase,
} from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { personalInfo, heroContent } from "@/lib/data";

export function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] lg:min-h-screen w-full overflow-hidden py-12 lg:py-0 bg-[#1a1a1a]">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle Grid - created via CSS/SVG inline for reliability */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating Professional Icons - Real Tech Logos */}
        {[
          // Laravel
          {
            Icon: SiLaravel,
            color: "text-red-500",
            x: "10%",
            y: "20%",
            size: 56,
            delay: 0,
            duration: 8,
          },
          // PHP
          {
            Icon: SiPhp,
            color: "text-indigo-500",
            x: "85%",
            y: "15%",
            size: 52,
            delay: 1,
            duration: 10,
          },
          // MySQL
          {
            Icon: SiMysql,
            color: "text-blue-500",
            x: "80%",
            y: "65%",
            size: 48,
            delay: 2,
            duration: 9,
          },
          // JavaScript
          {
            Icon: SiJavascript,
            color: "text-brand-js",
            x: "15%",
            y: "70%",
            size: 48,
            delay: 3,
            duration: 11,
          },
          // Python
          {
            Icon: SiPython,
            color: "text-yellow-500",
            x: "50%",
            y: "10%",
            size: 44,
            delay: 4,
            duration: 12,
          },
          // Firebase
          {
            Icon: SiFirebase,
            color: "text-orange-500",
            x: "45%",
            y: "85%",
            size: 40,
            delay: 2.5,
            duration: 7,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.color} opacity-20`}
            style={{ top: item.y, left: item.x }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              y: [0, -30, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            suppressHydrationWarning
          >
            <item.Icon size={item.size} strokeWidth={1.5} />
          </motion.div>
        ))}

        {/* Gradient Orbs for Atmosphere */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-[128px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-primary/15 via-primary/8 to-transparent rounded-full blur-[128px] -z-10" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full max-w-6xl">
        {/* Left Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-8 will-change-transform"
          >
            <h2 className="text-lg md:text-xl font-semibold text-primary mb-3 font-outfit tracking-wide uppercase">
              {heroContent.intro}
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-outfit tracking-tight leading-[1.1] mb-4 pb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-primary">
                {personalInfo.name}
              </span>
            </h1>
            <h3 className="text-xl md:text-2xl lg:text-2xl font-medium font-outfit mt-2">
              <span className="inline-block bg-[#1f1f1f] text-primary px-6 py-2 rounded-full border border-primary/30 transition-colors duration-300 font-semibold">
                {personalInfo.title}
              </span>
            </h3>
          </motion.div>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 font-normal max-w-xl mx-auto lg:mx-0">
            {heroContent.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              href="/projects"
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary via-primary/95 to-primary/90 hover:from-primary/90 hover:via-primary/85 hover:to-primary/80 text-slate-900 font-bold rounded-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Monitor className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              View Projects
            </Link>

            <a
              href="/Mohamed-Magdy-Elshafey-Backend.pdf"
              download
              className="group w-full sm:w-auto px-8 py-4 bg-[#1f1f1f] text-primary font-bold rounded-xl border border-white/10 hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              Download CV
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative w-64 h-64 md:w-[450px] md:h-[450px] will-change-transform"
          >
            {/* Animated Background Glow */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
              className="absolute inset-0 bg-gradient-to-br from-primary/25 via-primary/15 to-primary/10 rounded-full blur-[80px] -z-10 will-change-transform"
            />

            {/* Professional 2D Floating Animation */}
            <motion.div
              animate={{
                y: [-12, 12, -12],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
              className="relative w-full h-full will-change-transform"
            >
              {/* Organic Blob Shape Image Container */}
              <div
                className="relative w-full h-full overflow-visible group transition-all duration-500"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  backgroundColor: "#3776AB", // Python Blue
                }}
                suppressHydrationWarning
              >
                {/* Optional Inner Ring for depth */}
                <div
                  className="absolute inset-0 z-10 box-border border-[6px] border-black/10 opacity-50 pointer-events-none"
                  style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
                  suppressHydrationWarning
                />

                <div className="absolute inset-0 bg-[#3776AB] z-0 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]"></div>
                <div className="absolute inset-0 z-10 p-2">
                  <Image
                    src="/mee1-removebg-preview.png"
                    alt={personalInfo.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                    quality={100}
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 450px, 450px"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
