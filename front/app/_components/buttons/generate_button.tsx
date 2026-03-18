import { ChartSpline } from "lucide-react";

export default function GenerateButton() {
    return(
        <button className="bg-foreground hover:bg-accent-foreground p-2 py-4 rounded-lg text-white cursor-pointer flex justify-center gap-2 shadow-lg" type="button">
            <ChartSpline/>Gerar Vizualização            
        </button>
    )
}