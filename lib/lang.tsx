"use client";

import { createContext, useContext, ReactNode } from "react";
import { translations } from "./data";

const LangContext = createContext<{ t: (key: string) => string }>({
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const t = (key: string): string => {
    return (translations.en as Record<string, string>)[key] || key;
  };

  return <LangContext.Provider value={{ t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
