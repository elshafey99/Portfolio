"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE } from "@/components/ui/Reveal";

export function PageHeader({
  eyebrow,
  title,
  accent,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="mb-14 max-w-3xl lg:mb-20"
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-5 font-outfit text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}{" "}
        {accent && (
          <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            {accent}
          </span>
        )}
      </h1>
      {description && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          {description}
        </p>
      )}
      {children}
    </motion.header>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
      <span className="h-px w-8 bg-gradient-to-r from-primary-light to-transparent" />
      {children}
    </span>
  );
}

export function SectionHeading({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="mb-8 flex items-start gap-4">
      {Icon && (
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-primary-light">
          <Icon className="h-5 w-5" />
        </span>
      )}
      <div>
        <h2 className="font-outfit text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-1.5 text-sm text-neutral-400 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
