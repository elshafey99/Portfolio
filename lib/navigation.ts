import {
  Briefcase,
  FolderOpen,
  GraduationCap,
  Home,
  MessageSquare,
  User,
} from "lucide-react";

export const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Education", href: "/education", icon: GraduationCap },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Contact", href: "/contact", icon: MessageSquare },
];

export function isActivePath(pathname: string | null, href: string) {
  const path = pathname?.replace(/\/$/, "") || "/";
  return href === "/" ? path === "/" : path.startsWith(href);
}
