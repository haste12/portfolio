"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Database, Rocket } from "lucide-react";
import { skillCategories } from "@/lib/data";
import { useLang } from "@/lib/lang";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code size={20} />,
  server: <Server size={20} />,
  database: <Database size={20} />,
  rocket: <Rocket size={20} />,
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  return (
    <section id="skills" ref={ref} className="relative py-32 px-6 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs font-mono text-[#C6FF3D]">03</span>
          <span className="h-[1px] w-12 bg-[#333]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#999]">{t("nav-skills")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-16"
        >
          {t("skills-title").split(" ")[0]}
          <br />
          <span className="text-[#999]">{t("skills-title").split(" ").slice(1).join(" ")}</span>
        </motion.h2>

        <div className="border-t border-[#1a1a1a]">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-8 border-b border-[#1a1a1a] transition-colors hover:bg-[#111]/40"
            >
              <div className="md:col-span-4 flex items-center gap-4 ps-2">
                <span className="text-[#555] group-hover:text-[#C6FF3D] transition-colors">
                  {iconMap[cat.icon]}
                </span>
                <div>
                  <span className="block text-[10px] font-mono text-[#333] group-hover:text-[#C6FF3D]/60 transition-colors">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-bold tracking-wide text-[#F5F5F5]">
                    {cat.title}
                  </h3>
                </div>
              </div>

              <div className="md:col-span-8 flex flex-wrap items-center gap-2.5 ps-2 md:ps-0">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-[#111] border border-[#1a1a1a] text-sm text-[#C6FF3D] transition-all hover:border-[#C6FF3D]/40 hover:bg-[#C6FF3D]/10 hover:-translate-y-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
