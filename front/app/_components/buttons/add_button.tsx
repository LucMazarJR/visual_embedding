import { CirclePlus } from "lucide-react"

type AddButtonProps = {
  addFunc: () => void
  len: number
}

export default function AddButton({ addFunc, len }: AddButtonProps) {
  if (len < 10) {
    return (
      <button
        className="bg-white border-dashed border-2 p-2 py-4 rounded-lg border-gray-300 font-medium flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-50"
        type="button"
        onClick={addFunc}
      >
        <CirclePlus />Adicionar Frase
      </button>
    )
  }

  return null
}