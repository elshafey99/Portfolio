"use client"
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className, ...props }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("py-20 md:py-24 container mx-auto px-4", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
