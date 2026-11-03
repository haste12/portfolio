"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { useLang } from "@/lib/lang";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLang();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center py-8 border-b border-[#1a1a1a]">
        <div className="md:col-span-1">
          <span className="text-sm font-mono text-[#333] group-hover:text-[#C6FF3D] transition-colors">
            {project.num}
          </span>
        </div>

        <div className="md:col-span-4">
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#111] border border-[#1a1a1a] transition-all duration-500 group-hover:border-[#C6FF3D]/30">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/40 to-transparent" />
          </div>
        </div>

        <div className="md:col-span-5">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C6FF3D] mb-2 block">
            {project.category}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-[#C6FF3D] transition-colors">
            {project.title}
          </h3>
          <p className="text-[#999] text-sm leading-relaxed mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-[#111] border border-[#1a1a1a] text-xs text-[#999]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 flex md:justify-end">
          {project.link !== "#" ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[#999] hover:text-[#C6FF3D] transition-colors"
            >
              {t("projects-view")}
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-[#555]">
              {t("projects-view")}
              <ArrowUpRight size={16} />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  return (
    <section id="work" ref={ref} className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs font-mono text-[#C6FF3D]">02</span>
          <span className="h-[1px] w-12 bg-[#333]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#999]">{t("nav-work")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
        >
          {t("projects-title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#999] mb-16 max-w-lg"
        >
          {t("projects-desc")}
        </motion.p>

        <div>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
