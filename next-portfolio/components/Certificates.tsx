"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { certificates } from "@/lib/data";
import { useLang } from "@/lib/lang";

export default function Certificates() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  return (
    <section id="certificates" ref={ref} className="relative py-32 px-6 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs font-mono text-[#C6FF3D]">05</span>
          <span className="h-[1px] w-12 bg-[#333]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#999]">{t("nav-certificates")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
        >
          {t("cert-title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#999] mb-16 max-w-lg"
        >
          {t("cert-desc")}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#111] border border-[#1a1a1a] hover:border-[#C6FF3D]/30 transition-all">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                  <h3 className="text-sm font-bold text-[#F5F5F5] text-center mb-1">{cert.title}</h3>
                  <span className="text-xs text-[#C6FF3D] mb-1">{cert.issuer}</span>
                  <span className="text-xs text-[#555] mb-3">{cert.year}</span>
                  <a
                    href={cert.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#C6FF3D] text-xs font-semibold text-[#C6FF3D] hover:bg-[#C6FF3D] hover:text-[#080808] transition-all"
                  >
                    {t("cert-view")}
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
