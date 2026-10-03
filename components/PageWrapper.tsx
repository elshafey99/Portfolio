"use client";

import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className={`relative min-h-screen ${
        className ?? "px-6 pb-20 pt-12 sm:px-10 lg:pb-24 lg:pt-20"
      }`}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
