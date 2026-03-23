"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type Language = "pt" | "en";

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
};

const STORAGE_KEY = "sentence-space-language";

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "pt";

    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "pt" || stored === "en" ? stored : "pt";
  });

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const next = prev === "pt" ? "en" : "pt";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ language, toggleLanguage }),
    [language, toggleLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
