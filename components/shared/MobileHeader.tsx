"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { cvPath, personalInfo } from "@/lib/data";
import { isActivePath, navItems } from "@/lib/navigation";
import { focusRing } from "@/components/ui/styles";
import { socialLinks } from "@/components/shared/LeftSidebar";

const [role] = personalInfo.title.split(" | ");

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-white/[0.06] px-4 lg:hidden",
        // backdrop-filter would turn the header into the containing block of the fixed menu
        isOpen ? "bg-[#0e0e0e]" : "bg-[#0e0e0e]/85 backdrop-blur-xl"
      )}
    >
      <Link
        href="/"
        onClick={close}
        className={`flex items-center gap-3 rounded-xl ${focusRing}`}
      >
        <span className="relative h-9 w-9 overflow-hidden rounded-full bg-gradient-to-b from-[#3776AB] to-[#14212f] ring-1 ring-white/10">
          <Image
            src="/mee1-removebg-preview.png"
            alt={personalInfo.name}
            fill
            sizes="36px"
            className="object-cover object-top"
            priority
            unoptimized
          />
        </span>
        <span className="leading-tight">
          <span className="block font-outfit text-sm font-semibold text-white">
            {personalInfo.shortName}
          </span>
          <span className="block text-[11px] text-neutral-500">{role}</span>
        </span>
      </Link>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-neutral-200 transition-colors hover:bg-white/[0.05] ${focusRing}`}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 top-16 -z-10 bg-black/60 backdrop-blur-sm"
            />
            <motion.nav
              aria-label="Main"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 top-16 rounded-b-3xl border-b border-white/[0.06] bg-[#0e0e0e] px-4 pb-6 pt-3"
            >
              <ul className="space-y-1">
                {navItems.map(({ name, href, icon: Icon }) => {
                  const active = isActivePath(pathname, href);
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={close}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex items-center gap-3 rounded-xl px-3 py-3 text-[15px] font-medium transition-colors",
                          focusRing,
                          active
                            ? "bg-white/[0.06] text-white"
                            : "text-neutral-400 active:bg-white/[0.04]"
                        )}
                      >
                        <Icon
                          className={cn(
                            "h-5 w-5",
                            active ? "text-primary-light" : "text-neutral-500"
                          )}
                        />
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-5 grid grid-cols-[1fr_auto] gap-2 border-t border-white/[0.06] pt-5">
                <a
                  href={cvPath}
                  download
                  className={`flex h-11 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-white ${focusRing}`}
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
                <div className="flex gap-2">
                  {socialLinks.slice(0, 3).map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-neutral-400 ${focusRing}`}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
