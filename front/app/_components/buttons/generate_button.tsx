import { ChartSpline } from "lucide-react";

export default function GenerateButton() {
  return (
    <button
      className="bg-foreground hover:bg-accent-foreground flex cursor-pointer justify-center gap-2 rounded-lg p-2 py-4 text-white shadow-lg"
      type="button"
    >
      <ChartSpline />
      Gerar Vizualização
    </button>
  );
}
