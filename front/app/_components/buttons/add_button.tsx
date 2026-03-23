import { CirclePlus, X } from "lucide-react";

type AddButtonProps = {
  addFunc: () => void;
  len: number;
};

export default function AddButton({ addFunc, len }: AddButtonProps) {
  return (
    <button
      className={
        "flex w-full items-center justify-center gap-2 rounded-lg border-2 border-gray-300 p-2 py-4 font-medium shadow-lg transition-colors duration-150 ease-in-out" +
        (len >= 10
          ? " cursor-not-allowed bg-gray-200"
          : " cursor-pointer border-dashed hover:bg-gray-50")
      }
      type="button"
      onClick={addFunc}
    >
      {len >= 10 ? <X /> : <CirclePlus />}
      {len >= 10 ? "Limite de frases atingido" : "Adicione uma Frase"}
    </button>
  );
}
