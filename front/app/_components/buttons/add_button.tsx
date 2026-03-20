import { CirclePlus, X } from "lucide-react";

type AddButtonProps = {
  addFunc: () => void;
  len: number;
};

export default function AddButton({ addFunc, len }: AddButtonProps) {
  return (
    <button
      className={"w-full flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 p-2 py-4 font-medium shadow-lg transition-colors ease-in-out duration-150" + ((len >= 10) ? " bg-gray-200 cursor-not-allowed" : " hover:bg-gray-50 border-dashed cursor-pointer")}
      type="button"
      onClick={addFunc}
    >
      {len >= 10 ? <X/> : <CirclePlus />}
      {len >= 10 ? ("Limite de frases atingido") : "Adicione uma Frase"}
    </button>
  );
}
