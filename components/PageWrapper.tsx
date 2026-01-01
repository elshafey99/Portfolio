"use client";

import { motion } from "framer-motion";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

// Optimized animation variants for better performance
const pageVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export function PageWrapper({
  children,
  className,
  backgroundVariant,
}: PageWrapperProps & { backgroundVariant?: string }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className={`min-h-screen will-change-transform relative overflow-hidden ${
        className || "py-20 px-4 md:px-8"
      }`}
      data-background-variant={backgroundVariant}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
