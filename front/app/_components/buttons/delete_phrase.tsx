import { Trash } from "lucide-react"

type DeletePhraseProps = {
    lngt: number
}

export default function DeletePhrase({lngt}: DeletePhraseProps){
    if(lngt > 3){
        return (
            <button type="button" className="invisible group-hover:visible absolute right-2 top-2 text-gray-300 rounded-full hover:scale-110 ease-in-out transition-transform delay-100 duration-100">
                <Trash width={30}/>
            </button>
        )
    }
    return null
}