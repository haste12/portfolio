"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";
import MagneticButton from "./MagneticButton";
import { useLang } from "@/lib/lang";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 2.4 } },
};

const wordAnim = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-60">
        <ParticleField />
      </div>
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#080808]/40 to-[#080808]" />
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#F5F5F5 1px, transparent 1px), linear-gradient(90deg, #F5F5F5 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C6FF3D] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C6FF3D]" />
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-[#999]">{t("hero-badge")}</span>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show">
          <div className="flex flex-col">
            {["HASTE", "MOHSIN."].map((word, i) => (
              <div key={i} className="reveal-mask">
                <motion.h1
                  variants={wordAnim}
                  className="text-[clamp(3.5rem,14vw,11rem)] font-bold leading-[0.85] tracking-[-0.04em] text-[#F5F5F5]"
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-lg md:text-xl font-medium text-[#C6FF3D] mb-3">{t("hero-subtitle")}</p>
            <p className="text-base md:text-lg text-[#999] max-w-xl leading-relaxed">{t("hero-desc")}</p>
          </div>
          <div className="flex gap-3">
            <MagneticButton>
              <button
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-2 whitespace-nowrap rounded-full bg-[#C6FF3D] px-6 py-3 text-sm font-semibold text-[#080808] transition-transform"
              >
                {t("hero-cta-work")}
                <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
              </button>
            </MagneticButton>
            <MagneticButton>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-2 whitespace-nowrap rounded-full border border-[#333] px-6 py-3 text-sm font-semibold text-[#F5F5F5] transition-colors hover:border-[#C6FF3D] hover:text-[#C6FF3D]"
              >
                {t("hero-cta-contact")}
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#555]">Scroll</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-[#C6FF3D] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
