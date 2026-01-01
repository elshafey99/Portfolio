/**
 * نظام الألوان المركزي للموقع
 * Centralized Color System for the Website
 *
 * يمكنك تعديل الألوان من هنا وستتغير في كل الموقع
 * You can modify colors here and they will change throughout the site
 */

export const colors = {
  // ألوان التقنيات / Technology Colors
  technologies: {
    javascript: "#F7DF1E", // JavaScript Yellow
    python: "#3776AB", // Python Blue
    react: "#61DAFB", // React Blue
    nextjs: {
      light: "#000000", // Next.js Black (light mode)
      dark: "#FFFFFF", // Next.js White (dark mode)
    },
    typescript: "#3178C6", // TypeScript Blue
    tailwind: "#06B6D4", // Tailwind Cyan
    html: "#E34F26", // HTML Orange
    css: "#1572B6", // CSS Blue
    figma: "#F24E1E", // Figma Red
    git: "#F05032", // Git Orange
    github: "#181717", // GitHub Black
  },

  // ألوان التصميم الأساسية / Brand Colors
  brand: {
    primary: "#3776AB", // Primary Python Blue
    secondary: "#1f1f1f", // Dark Gray
    accent: "#4B8BBE", // Python Light Blue accent
  },

  // ألوان الحالات / Status Colors
  status: {
    success: "#10B981", // Green
    error: "#EF4444", // Red
    warning: "#F59E0B", // Orange
    info: "#3B82F6", // Blue
  },

  // ألوان إضافية / Additional Colors
  ui: {
    background: {
      light: "#FFFFFF",
      dark: "#1f1f1f",
      darkAlt: "#151515", // Darker shade for sidebar
    },
    text: {
      light: "#1f1f1f",
      dark: "#F5F5F5",
    },
    border: {
      light: "#E5E5E5",
      dark: "#404040",
    },
  },
} as const;

// Tailwind class names helpers
export const getTechColor = (tech: string): string => {
  const techLower = tech.toLowerCase();

  if (techLower.includes("javascript") || techLower.includes("js"))
    return "text-brand-js";
  if (techLower.includes("react")) return "text-brand-react";
  if (techLower.includes("next")) return "text-slate-800 dark:text-white";
  if (techLower.includes("typescript") || techLower.includes("ts"))
    return "text-brand-typescript";
  if (techLower.includes("tailwind")) return "text-brand-tailwind";
  if (techLower.includes("html")) return "text-brand-html";
  if (techLower.includes("css")) return "text-[#1572B6]";
  if (techLower.includes("figma")) return "text-brand-figma";

  return "text-gray-600 dark:text-gray-400";
};

export default colors;
