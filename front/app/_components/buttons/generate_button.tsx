import { ChartSpline } from "lucide-react";

type GenerateButtonProps = {
  generateFunc: () => void;
};

export default function GenerateButton({generateFunc}: GenerateButtonProps) {
  return (
    <button
      className="bg-foreground hover:bg-accent-foreground flex cursor-pointer justify-center gap-2 rounded-lg p-2 py-4 text-white shadow-lg"
      type="button"
      onClick={generateFunc}
    >
      <ChartSpline />
      Gerar Vizualização
    </button>
  );
}
