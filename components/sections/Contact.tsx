"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { contactContent, personalInfo } from "@/lib/data";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import {
  buttonPrimary,
  card,
  cardHover,
  focusRing,
} from "@/components/ui/styles";

const methods = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    Icon: Mail,
    accent: "text-primary-light bg-primary/15 ring-primary/20",
  },
  {
    label: "WhatsApp",
    value: personalInfo.phone,
    href: `https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`,
    Icon: FaWhatsapp,
    accent: "text-[#25D366] bg-[#25D366]/10 ring-[#25D366]/20",
  },
  {
    label: "LinkedIn",
    value: personalInfo.shortName,
    href: personalInfo.linkedin,
    Icon: SiLinkedin,
    accent: "text-[#0A66C2] bg-[#0A66C2]/15 ring-[#0A66C2]/25",
  },
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-[15px] text-white placeholder:text-neutral-600 transition-colors hover:border-white/15 focus:border-primary-light/60 focus:bg-white/[0.05] focus:outline-none focus:ring-4 focus:ring-primary/15";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!succeeded) return;
    const timer = setTimeout(() => setSucceeded(false), 6000);
    return () => clearTimeout(timer);
  }, [succeeded]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSucceeded(false);
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to send message.");
      }

      formRef.current?.reset();
      setSucceeded(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow={contactContent.badge}
        title={contactContent.title}
        accent={contactContent.titleAccent}
        description={contactContent.description}
      />

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
        <div className="space-y-4">
          {methods.map(({ label, value, href, Icon, accent }, idx) => (
            <Reveal key={label} delay={idx * 0.06}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`${card} ${cardHover} group flex items-center gap-4 p-5 ${focusRing}`}
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset ${accent}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-medium uppercase tracking-wider text-neutral-500">
                    {label}
                  </span>
                  <span className="mt-0.5 block truncate font-medium text-white">
                    {value}
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-neutral-600 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </a>
            </Reveal>
          ))}

          <Reveal delay={0.2} className={`${card} p-5`}>
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-neutral-300 ring-1 ring-inset ring-white/10">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                  Location
                </p>
                <p className="mt-0.5 font-medium text-white">
                  {personalInfo.location}
                </p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2.5 border-t border-white/[0.06] pt-4 text-sm text-neutral-400">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {contactContent.subtitle}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className={`${card} p-6 sm:p-8`}>
          <h2 className="font-outfit text-2xl font-semibold text-white">
            {contactContent.formTitle}
          </h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-6 space-y-5"
          >
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-neutral-300"
              >
                {contactContent.formEmail}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                required
                className={inputClass}
                placeholder="name@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-neutral-300"
              >
                {contactContent.formMessage}
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows={6}
                className={`${inputClass} resize-none`}
                placeholder="Tell me about your project, team, or role..."
              />
            </div>

            <AnimatePresence mode="wait">
              {error && (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="alert"
                  className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  {error}
                </motion.p>
              )}
              {succeeded && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  className="flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <div>
                    <p className="text-sm font-semibold text-emerald-300">
                      {contactContent.successTitle}
                    </p>
                    <p className="text-sm text-emerald-200/70">
                      {contactContent.successDesc}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={submitting}
              className={`${buttonPrimary} sm:w-full`}
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  {contactContent.btnSend}
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
