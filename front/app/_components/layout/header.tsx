import Link from "next/link";
import LanguageButton from "./language_button";
import NavBar from "./nav";

export default function Header() {
    return (
        <header className="flex justify-between py-8 px-6">
            <Link href={"/"} className="font-bold text-4xl">Sentence Space</Link>
            <div className="flex gap-8">
                <NavBar />
                <LanguageButton />
            </div>
        </header>
    )
}