"use client";

import Image from "next/image";
import { useLanguage } from "../../_contexts/language-context";

const getFlag = (language: "pt" | "en") => {
  if (language === "pt") {
    return "/icons/br-flag.png";
  }
  return "/icons/us-flag.png";
};

export default function LanguageButton() {
  const { language, toggleLanguage } = useLanguage();
  const nextLanguage = language === "pt" ? "en" : "pt";

  return (
    <button
      className="cursor-pointer transition-transform duration-150 ease-in-out hover:scale-110"
      onClick={toggleLanguage}
      aria-label={
        language === "pt" ? "Mudar idioma para ingles" : "Switch language to Portuguese"
      }
      title={language === "pt" ? "Idioma: Portugues" : "Language: English"}
    >
      <Image
        src={getFlag(language)}
        alt={language === "pt" ? "Bandeira do Brasil" : "United States flag"}
        width={35}
        height={35}
      />
    </button>
  );
}
