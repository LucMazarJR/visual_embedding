import { CirclePlus } from "lucide-react";

type AddButtonProps = {
  addFunc: () => void;
  len: number;
};

export default function AddButton({ addFunc, len }: AddButtonProps) {
  if (len < 10) {
    return (
      <button
        className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 bg-white p-2 py-4 font-medium shadow-lg hover:bg-gray-50"
        type="button"
        onClick={addFunc}
      >
        <CirclePlus />
        Adicionar Frase
      </button>
    );
  }

  return null;
}
