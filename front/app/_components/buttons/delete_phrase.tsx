import { Trash2Icon } from "lucide-react"

type DeletePhraseProps = {
    lngt: number;
    removeFunc: () => void
}

export default function DeletePhrase({lngt, removeFunc}: DeletePhraseProps){
    if(lngt > 3){
        return (
            <button type="button" className="opacity-0 group-hover:opacity-100 absolute right-2 top-2 text-gray-300 hover:text-red-300 hover:scale-110 ease-in-out transition-all delay-100 duration-100" onClick={removeFunc}>
                <Trash2Icon width={30}/>
            </button>
        )
    }
    return null
}