"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const words = ["CREATE", "EXPLORE", "BUILD", "INNOVATE", "DESIGN", "DEVELOP"];
const repeatedWords = [...words, ...words, ...words, ...words];

export default function Creative() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      setMousePos({ x, y });
    };
    const el = sectionRef.current;
    el?.addEventListener("mousemove", handleMouse);
    return () => el?.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-[#080808]">
      <div ref={sectionRef} className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs font-mono text-[#C6FF3D]">06</span>
          <span className="h-[1px] w-12 bg-[#333]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#999]">Experiment</span>
        </motion.div>

        <div className="relative h-[60vh] flex items-center justify-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute w-64 h-64 rounded-full bg-[#C6FF3D]/5 blur-[80px]"
            style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
          />

          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-[#1a1a1a]"
            style={{ transform: `perspective(800px) rotateX(${mousePos.y * 10}deg) rotateY(${mousePos.x * 10}deg)` }}
          >
            {repeatedWords.map((word, i) => {
              const angle = (i / repeatedWords.length) * 360;
              const radius = 200;
              return (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 text-xs font-mono text-[#333] hover:text-[#C6FF3D] transition-colors"
                  style={{ transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)` }}
                >
                  {word}
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full border border-[#C6FF3D]/10"
            style={{ transform: `perspective(600px) rotateX(${-mousePos.y * 15}deg) rotateY(${-mousePos.x * 15}deg)` }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 text-center"
            style={{ transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)` }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#555] mb-2">The intersection of</p>
            <p className="text-2xl md:text-4xl font-bold gradient-text">Creativity & Code</p>
            <p className="text-xs uppercase tracking-[0.3em] text-[#555] mt-2">is where magic happens</p>
          </motion.div>

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#C6FF3D]/30"
              animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
              style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            />
          ))}
        </div>

        <div className="mt-16 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-4">
                {["CREATIVE DEVELOPMENT", "AI INTEGRATION", "UI/UX DESIGN", "FULL-STACK ENGINEERING", "DIGITAL EXPERIENCES"].map((text) => (
                  <span key={text} className="text-2xl md:text-4xl font-bold text-[#111] hover:text-[#C6FF3D] transition-colors">
                    {text}
                    <span className="text-[#C6FF3D] ml-8">/</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
