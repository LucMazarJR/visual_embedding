import { Trash2Icon } from "lucide-react";

type DeletePhraseProps = {
  lngt: number;
  removeFunc: () => void;
};

export default function DeletePhrase({ lngt, removeFunc }: DeletePhraseProps) {
  if (lngt > 3) {
    return (
      <button
        type="button"
        className="absolute top-2 right-2 text-gray-400 opacity-100 transition-all duration-100 ease-in-out hover:scale-110 hover:text-red-300 sm:text-gray-300 sm:opacity-0 sm:group-hover:opacity-100"
        onClick={removeFunc}
      >
        <Trash2Icon width={30} />
      </button>
    );
  }
  return null;
}
