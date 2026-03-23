"use client";

import { ChartSpline } from "lucide-react";
import { useLanguage } from "../../_contexts/language-context";

type GenerateButtonProps = {
  generateFunc: () => void;
};

export default function GenerateButton({ generateFunc }: GenerateButtonProps) {
  const { language } = useLanguage();

  return (
    <button
      className="bg-foreground hover:bg-accent-foreground flex w-full cursor-pointer justify-center gap-2 rounded-lg p-2 py-4 text-white shadow-lg"
      type="button"
      onClick={generateFunc}
    >
      <ChartSpline />
      {language === "pt" ? "Gerar Visualizacao" : "Generate Visualization"}
    </button>
  );
}
