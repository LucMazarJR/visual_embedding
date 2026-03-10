import Link from "next/link";
import LanguageButton from "./language_button";

export default function Header() {
    return (
        <header className="flex justify-between py-8 px-6">
            <nav>
                <ul className="flex gap-12 items-center">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/about"}>About</Link>
                    </li>
                </ul>
            </nav>
            <LanguageButton/>
        </header>
    )
}