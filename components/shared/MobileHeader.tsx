"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  FolderOpen,
  MessageSquare,
  Briefcase,
  Mail,
} from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/lib/data";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Contact", href: "/contact", icon: MessageSquare },
];

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={cn(
        "lg:hidden fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-4 border-b border-white/5 transition-colors duration-300",
        isOpen ? "bg-[#151515]" : "bg-[#151515] backdrop-blur-md"
      )}
    >
      {/* Brand */}
      <Link
        href="/"
        className="z-50 relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden border border-white/10 bg-neutral-800"
        onClick={() => setIsOpen(false)}
      >
        <Image
          src="/mee1-removebg-preview.png"
          alt="Mohamed Magdy Elshafey"
          fill
          className="object-contain rounded-full"
          sizes="40px"
          quality={100}
          priority
          unoptimized
        />
      </Link>

      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="z-50 p-2 text-foreground hover:text-primary transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 flex flex-col px-6 pb-6 bg-[#151515] backdrop-blur-xl border-t border-white/5 rounded-b-3xl"
          >
            {/* Gradient Mesh for subtle premium feel */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none rounded-b-3xl" />
            <nav className="flex flex-col gap-2 mt-4">
              {navItems.map((item, idx) => {
                // Robust active check handling trailing slashes
                const normalizedPath = pathname?.replace(/\/$/, "") || "/";
                const normalizedHref = item.href.replace(/\/$/, "") || "/";
                const isActive = normalizedPath === normalizedHref;

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-4 p-3.5 rounded-xl text-base font-semibold transition-all duration-200 border border-transparent active:scale-95",
                        isActive
                          ? "bg-primary/10 text-primary border-primary/20 shadow-sm"
                          : "text-foreground/80 active:bg-neutral-800 active:text-primary"
                      )}
                    >
                      <item.icon
                        className={cn(
                          "w-5 h-5",
                          isActive ? "text-primary" : "text-neutral-400"
                        )}
                      />
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Social Media Section - Real Brand Icons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 pt-4 border-t border-border/50"
            >
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Connect With Me
              </p>
              <div className="grid grid-cols-4 gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center p-3 bg-primary/10 hover:bg-primary/15 text-primary rounded-xl border border-white/10 hover:border-primary/30 transition-all active:scale-95"
                >
                  <SiGithub className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center p-3 bg-primary/10 hover:bg-primary/15 text-primary rounded-xl border border-white/10 hover:border-primary/30 transition-all active:scale-95"
                >
                  <SiLinkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                  className="flex items-center justify-center p-3 bg-primary/10 hover:bg-primary/15 text-primary rounded-xl border border-white/10 hover:border-primary/30 transition-all active:scale-95"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex items-center justify-center p-3 bg-primary/10 hover:bg-primary/15 text-primary rounded-xl border border-white/10 hover:border-primary/30 transition-all active:scale-95"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
