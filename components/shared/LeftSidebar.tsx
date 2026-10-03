"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { cvPath, heroContent, personalInfo } from "@/lib/data";
import { isActivePath, navItems } from "@/lib/navigation";
import { focusRing } from "@/components/ui/styles";
import { cn } from "@/lib/utils";

export const socialLinks = [
  { label: "GitHub", href: personalInfo.github, Icon: SiGithub },
  { label: "LinkedIn", href: personalInfo.linkedin, Icon: SiLinkedin },
  { label: "Email", href: `mailto:${personalInfo.email}`, Icon: Mail },
  {
    label: "WhatsApp",
    href: `https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`,
    Icon: FaWhatsapp,
  },
];

const [role] = personalInfo.title.split(" | ");

export function LeftSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-full flex-col border-r border-white/[0.06] bg-[#0e0e0e] px-5 py-6 text-neutral-200">
      <Link
        href="/"
        className={`flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/[0.03] ${focusRing}`}
      >
        <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-gradient-to-b from-[#3776AB] to-[#14212f] ring-1 ring-white/10">
          <Image
            src="/mee1-removebg-preview.png"
            alt={personalInfo.name}
            fill
            sizes="44px"
            className="object-cover object-top"
            unoptimized
          />
        </span>
        <span className="min-w-0">
          <span className="block truncate font-outfit text-[15px] font-semibold text-white">
            {personalInfo.shortName}
          </span>
          <span className="block text-xs text-neutral-500">{role}</span>
        </span>
      </Link>

      <div className="mt-4 px-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          {heroContent.availability}
        </span>
      </div>

      <nav aria-label="Main" className="mt-10">
        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
          Menu
        </p>
        <ul className="space-y-1">
          {navItems.map(({ name, href, icon: Icon }) => {
            const active = isActivePath(pathname, href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                    focusRing,
                    active
                      ? "bg-white/[0.06] text-white"
                      : "text-neutral-400 hover:bg-white/[0.03] hover:text-white"
                  )}
                >
                  {active && (
                    <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-primary-light" />
                  )}
                  <Icon
                    className={cn(
                      "h-[18px] w-[18px] transition-colors",
                      active
                        ? "text-primary-light"
                        : "text-neutral-500 group-hover:text-neutral-300"
                    )}
                  />
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto space-y-5">
        <a
          href={cvPath}
          download
          className={`group flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] text-sm font-semibold text-neutral-200 transition-colors hover:border-white/20 hover:bg-white/[0.07] ${focusRing}`}
        >
          <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          Download CV
        </a>

        <div className="grid grid-cols-4 gap-2">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className={`flex h-10 items-center justify-center rounded-xl border border-white/[0.06] text-neutral-500 transition-colors hover:border-white/15 hover:bg-white/[0.04] hover:text-white ${focusRing}`}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="border-t border-white/[0.06] pt-4 text-center text-[11px] text-neutral-600">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </div>
  );
}
