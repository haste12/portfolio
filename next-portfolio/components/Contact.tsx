"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, ArrowUpRight, MessageCircle, Send } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { contactInfo } from "@/lib/data";
import { useLang } from "@/lib/lang";

function LinkedinIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();
  const titleParts = t("contact-title").split(".").filter(Boolean);
  const hasTwoLines = titleParts.length > 1;

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs font-mono text-[#C6FF3D]">07</span>
          <span className="h-[1px] w-12 bg-[#333]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#999]">{t("nav-contact")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-6"
        >
          {titleParts[0]}.
          {hasTwoLines && (
            <>
              <br />
              <span className="text-[#C6FF3D]">{titleParts.slice(1).join(".")}.</span>
            </>
          )}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-[#999] mb-16 max-w-xl"
        >
          {t("contact-desc")}
        </motion.p>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
        >
          <MagneticButton>
            <a href={`mailto:${contactInfo.email}`} className="group glass rounded-xl p-6 hover:border-[#C6FF3D]/30 transition-all w-full block">
              <Mail className="text-[#C6FF3D] mb-3" size={24} />
              <p className="text-xs uppercase tracking-wider text-[#555] mb-1">Email</p>
              <p className="text-sm text-[#F5F5F5] group-hover:text-[#C6FF3D] transition-colors flex items-center gap-1">
                {contactInfo.email}
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </p>
            </a>
          </MagneticButton>

          <div className="glass rounded-xl p-6">
            <Phone className="text-[#C6FF3D] mb-3" size={24} />
            <p className="text-xs uppercase tracking-wider text-[#555] mb-1">Phone</p>
            <a href={`tel:${contactInfo.phoneRaw}`} className="text-sm text-[#F5F5F5] hover:text-[#C6FF3D] transition-colors block mb-3">
              {contactInfo.phone}
            </a>
            <div className="flex gap-2">
              <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111] border border-[#1a1a1a] hover:border-[#25D366] hover:text-[#25D366] transition-all text-xs text-[#999]">
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a href={contactInfo.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111] border border-[#1a1a1a] hover:border-[#0088cc] hover:text-[#0088cc] transition-all text-xs text-[#999]">
                <Send size={14} /> Telegram
              </a>
              <a href={contactInfo.viber} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111] border border-[#1a1a1a] hover:border-[#7360f2] hover:text-[#7360f2] transition-all text-xs text-[#999]">
                Viber
              </a>
            </div>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          <MagneticButton>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="group glass rounded-xl p-4 hover:border-[#C6FF3D]/30 transition-all flex items-center gap-3">
              <span className="text-[#C6FF3D]"><LinkedinIcon size={20} /></span>
              <span className="text-sm text-[#999] group-hover:text-[#F5F5F5] transition-colors">LinkedIn</span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="group glass rounded-xl p-4 hover:border-[#C6FF3D]/30 transition-all flex items-center gap-3">
              <span className="text-[#C6FF3D]"><GithubIcon size={20} /></span>
              <span className="text-sm text-[#999] group-hover:text-[#F5F5F5] transition-colors">GitHub</span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="group glass rounded-xl p-4 hover:border-[#C6FF3D]/30 transition-all flex items-center gap-3">
              <span className="text-[#C6FF3D]"><InstagramIcon size={20} /></span>
              <span className="text-sm text-[#999] group-hover:text-[#F5F5F5] transition-colors">Instagram</span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" className="group glass rounded-xl p-4 hover:border-[#C6FF3D]/30 transition-all flex items-center gap-3">
              <span className="text-[#C6FF3D]"><FacebookIcon size={20} /></span>
              <span className="text-sm text-[#999] group-hover:text-[#F5F5F5] transition-colors">Facebook</span>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <MagneticButton strength={0.5}>
            <a
              href={`mailto:${contactInfo.email}`}
              className="group inline-flex items-center gap-4 rounded-full bg-[#C6FF3D] px-10 py-5 text-lg font-bold text-[#080808] transition-transform"
            >
              {t("contact-cta")}
              <ArrowUpRight size={24} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-32 border-t border-[#1a1a1a] pt-8 pb-8">
        <div className="mx-auto max-w-7xl px-0 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#555]">
            &copy; 2025 Haste Mohsin. {t("footer-text")}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C6FF3D] animate-pulse" />
            <span className="text-xs text-[#555]">{t("hero-badge")}</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
