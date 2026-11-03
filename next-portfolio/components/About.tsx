"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { useLang } from "@/lib/lang";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = Date.now();
    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  const stats = [
    { value: 7, suffix: "+", label: t("stat-projects") },
    { value: 8, suffix: "+", label: t("stat-certs") },
    { value: 4, suffix: "", label: t("stat-exp") },
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs font-mono text-[#C6FF3D]">01</span>
          <span className="h-[1px] w-12 bg-[#333]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#999]">{t("nav-about")}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#111] border border-[#1a1a1a] group">
              <Image
                src="/mee.jpg"
                alt="Haste Mohsin"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 text-xs font-mono text-[#C6FF3D]/60">[01]</div>
              <div className="absolute bottom-4 right-4 text-xs font-mono text-[#C6FF3D]/60">[HM]</div>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-8"
            >
              {t("about-title").split(".")[0]}.
              <br />
              <span className="text-[#999]">{t("about-title").split(".")[1]}.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 text-lg text-[#999] leading-relaxed"
            >
              <p>{t("about-p1")}</p>
              <p>{t("about-p2")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              {stats.map((stat, i) => (
                <div key={i} className="border-s border-[#222] ps-4">
                  <div className="text-3xl md:text-4xl font-bold text-[#C6FF3D]">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#555] mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
