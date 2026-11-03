"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/lang";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLang();

  const navItems = [
    { label: t("nav-home"), href: "#home" },
    { label: t("nav-about"), href: "#about" },
    { label: t("nav-work"), href: "#work" },
    { label: t("nav-skills"), href: "#skills" },
    { label: t("nav-experience"), href: "#experience" },
    { label: t("nav-certificates"), href: "#certificates" },
    { label: t("nav-contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "work", "skills", "experience", "certificates", "contact"];
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled ? "py-3 bg-[#080808]/70 backdrop-blur-xl border-b border-[#1a1a1a]/50" : "py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <button
            onClick={() => handleClick("#home")}
            className="text-sm font-bold tracking-tight text-[#F5F5F5] flex items-center gap-1"
          >
            <span className="text-[#C6FF3D]">/</span> HM
          </button>

          <div className={`hidden lg:flex items-center gap-1 rounded-full px-2 py-2 ${
            scrolled ? "glass" : "bg-transparent"
          }`}>
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="relative px-3 py-2 text-xs font-medium tracking-wide transition-colors"
                style={{
                  color: activeSection === item.href.slice(1) ? "#C6FF3D" : "#999",
                }}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-[#C6FF3D]/10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-[#F5F5F5]"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[999] lg:hidden flex flex-col items-center justify-center gap-4 bg-[#080808]"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleClick(item.href)}
                className="text-xl font-bold tracking-tight"
                style={{
                  color: activeSection === item.href.slice(1) ? "#C6FF3D" : "#F5F5F5",
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
