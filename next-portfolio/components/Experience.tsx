"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Megaphone, Users, Database } from "lucide-react";
import { experienceItems } from "@/lib/data";
import { useLang } from "@/lib/lang";

const icons = [<Database size={18} />, <Briefcase size={18} />, <Megaphone size={18} />, <Users size={18} />];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();
  const expTitle = t("exp-title");
  const titleParts = expTitle.split(" & ");
  const hasSecondPart = titleParts.length > 1 && titleParts[1].trim() !== "";

  return (
    <section id="experience" ref={ref} className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs font-mono text-[#C6FF3D]">04</span>
          <span className="h-[1px] w-12 bg-[#333]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#999]">{t("nav-experience")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-16"
        >
          {hasSecondPart ? (
            <>
              {titleParts[0]}
              <br />
              <span className="text-[#999]">& {titleParts[1]}</span>
            </>
          ) : (
            expTitle
          )}
        </motion.h2>

        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C6FF3D] via-[#222] to-transparent" />

          {experienceItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="absolute -left-[33px] md:-left-[49px] top-2">
                <div className="w-3 h-3 rounded-full bg-[#080808] border-2 border-[#C6FF3D] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#C6FF3D]" />
                </div>
              </div>

              <div className="group glass rounded-xl p-6 hover:border-[#C6FF3D]/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C6FF3D]/10 border border-[#C6FF3D]/20 flex items-center justify-center text-[#C6FF3D] flex-shrink-0">
                    {icons[i]}
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6FF3D] mb-1 block">
                      {item.type}
                    </span>
                    <h3 className="text-lg font-bold text-[#F5F5F5] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#C6FF3D] mb-3">{item.org}</p>
                    <p className="text-sm text-[#999] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
