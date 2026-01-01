"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Cpu, Database } from "lucide-react";

export function MainContentBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Adaptive Gradient Background - JS Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1f1f1f] via-[#222] to-[#181818] opacity-100 transition-colors duration-500" />

      {/* Abstract Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay transition-opacity duration-500"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Animated Abstract Lines - Grayscale/Yellow */}
      <div className="absolute inset-0 opacity-10 transition-opacity duration-500">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0 100 Q 250 50 500 100 T 1000 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary/10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />
          <motion.path
            d="M0 300 Q 250 350 500 300 T 1000 300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-400/10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 5, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      </div>

      {/* Floating Watermark Icons - Subtle Gray & Yellow accents */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Right - Code */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 5, 0],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[10%] text-primary/15 scale-150"
        >
          <Code2 size={300} strokeWidth={1} />
        </motion.div>

        {/* Bottom Left - Globe */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
            scale: [1, 1.05, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 left-[5%] text-gray-500/10 scale-125"
        >
          <Globe size={300} strokeWidth={1} />
        </motion.div>

        {/* Center Right - CPU */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-[40%] right-[25%] text-primary/10"
        >
          <Cpu size={400} strokeWidth={0.8} />
        </motion.div>

        {/* Top Left - Database */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            y: [15, -15, 15],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute top-[15%] left-[20%] text-gray-400/10"
        >
          <Database size={200} strokeWidth={1} />
        </motion.div>
      </div>
    </div>
  );
}
