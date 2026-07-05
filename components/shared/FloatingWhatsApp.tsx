"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

const whatsappUrl = `https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`;

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-[60] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow duration-300"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <FaWhatsapp className="w-7 h-7 relative z-10" />
    </motion.a>
  );
}
