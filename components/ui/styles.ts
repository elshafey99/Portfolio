export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212]";

export const buttonPrimary = `inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-white shadow-lg shadow-primary/25 ring-1 ring-inset ring-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-primary/40 disabled:pointer-events-none disabled:opacity-60 sm:w-auto ${focusRing}`;

export const buttonSecondary = `inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-neutral-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] sm:w-auto ${focusRing}`;

export const card =
  "rounded-2xl border border-white/[0.07] bg-[#161616]/80 backdrop-blur-sm";

export const cardHover =
  "transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#1a1a1a]/90";

export const chip =
  "inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-neutral-300";
