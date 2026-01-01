"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, FolderOpen, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Contact", href: "/contact", icon: MessageSquare },
];

export function SideNav() {
  const pathname = usePathname();

  return (
    <>
      {/* Container - Fixed Right - DESKTOP ONLY */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="hidden lg:flex fixed right-4 top-0 bottom-0 z-50 flex-col justify-center pointer-events-none"
      >
        {/* Nav Background Container - Smaller Scale */}
        <div
          className={cn(
            "backdrop-blur-xl border border-border/50 shadow-2xl flex flex-col gap-3 pointer-events-auto transition-all duration-300 items-center justify-center",
            "bg-background/80 p-2 rounded-2xl w-14" // Smaller width and padding
          )}
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative group flex items-center justify-center w-8 h-8"
              >
                {/* Tooltip */}
                <span className="absolute  right-12 bg-foreground text-background text-[10px] font-bold px-2 py-1 rounded opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-sm">
                  {item.name}
                  <span className="absolute top-1/2 right-[-4px] -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-foreground"></span>
                </span>

                {/* Icon Container */}
                <div
                  className={cn(
                    "flex items-center justify-center rounded-xl transition-all duration-300 relative z-10 w-full h-full",
                    isActive
                      ? "text-primary bg-primary/20 shadow-sm"
                      : "text-muted-foreground/60 hover:text-primary hover:bg-primary/10"
                  )}
                >
                  <item.icon
                    className={cn(
                      "w-4 h-4 transition-all duration-300",
                      isActive ? "scale-110" : "scale-100 group-hover:scale-105"
                    )}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
