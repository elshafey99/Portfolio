"use client";
import { useEffect, useState, useRef } from "react";
import { personalInfo, contactContent } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MessageSquare,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
  const [state, handleSubmit, reset] = useForm("xzznowgq");
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowSuccess(true);

      // Clear form inputs immediately
      if (formRef.current) {
        formRef.current.reset();
      }

      const timer = setTimeout(() => {
        setShowSuccess(false);
        reset();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, reset]);

  return (
    <div className="container mx-auto px-4 relative">
      {/* Toast Notification - Mobile Only */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="lg:hidden fixed bottom-4 left-4 right-4 z-[100] bg-[#1f1f1f] border border-primary/30 text-white px-6 py-4 rounded-2xl backdrop-blur-md flex items-center gap-3"
          >
            <div className="p-2 bg-primary/20 rounded-full shrink-0">
              <CheckCircle2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold font-outfit text-base text-white">
                {contactContent.successTitle}
              </h4>
              <p className="text-slate-400 text-sm">
                {contactContent.successDesc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mb-16 relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-white/10 text-primary text-sm font-bold uppercase tracking-widest mb-4">
          <MessageSquare className="w-4 h-4" />
          <span>{contactContent.badge}</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white">
          {contactContent.title.split(" ")[0]}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-primary">
            {contactContent.title.split(" ").slice(1).join(" ")}
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-6xl mx-auto">
        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-8 will-change-transform"
        >
          <div>
            <h3 className="text-3xl font-bold font-outfit text-white mb-4">
              {contactContent.subtitle}
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              {contactContent.description}
            </p>
          </div>

          <div className="space-y-6">
            <div className="group flex items-center gap-6 p-6 rounded-2xl bg-[#1f1f1f] border border-white/5 hover:border-primary/20 transition-all duration-200">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Email
                </h4>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-lg font-semibold text-white hover:text-primary transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="group flex items-center gap-6 p-6 rounded-2xl bg-[#1f1f1f] border border-white/10 hover:border-primary/30 transition-all">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Location
                </h4>
                <p className="text-lg font-semibold text-white">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1f1f1f] rounded-[32px] p-8 md:p-10 border border-white/10"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold uppercase tracking-wider text-slate-400 mb-2"
                >
                  {contactContent.formEmail}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400"
                  placeholder="name@example.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold uppercase tracking-wider text-slate-400 mb-2"
                >
                  {contactContent.formMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400 resize-none"
                  placeholder="Tell me about your project..."
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary via-primary/95 to-primary/85 hover:from-primary/90 hover:via-primary/85 hover:to-primary/80 text-slate-900 font-bold text-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
              >
                {state.submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {contactContent.btnSend}
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Success Message */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="hidden lg:flex bg-[#1f1f1f] border border-primary/30 text-white px-6 py-4 rounded-2xl backdrop-blur-md items-center gap-3"
              >
                <div className="p-2 bg-primary/20 rounded-full shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold font-outfit text-base text-white">
                    {contactContent.successTitle}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {contactContent.successDesc}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
