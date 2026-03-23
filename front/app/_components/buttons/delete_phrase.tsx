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
        className="absolute top-2 right-2 text-gray-300 opacity-0 transition-all delay-100 duration-100 ease-in-out group-hover:opacity-100 hover:scale-110 hover:text-red-300"
        onClick={removeFunc}
      >
        <Trash2Icon width={30} />
      </button>
    );
  }
  return null;
}
