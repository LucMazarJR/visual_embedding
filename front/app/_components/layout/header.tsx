import Link from "next/link";
import LanguageButton from "./language_button";

export default function Header() {
    return (
        <header className="flex justify-between py-8 px-6">
            <nav>
                <ul className="flex gap-12 items-center">
                    <li>
                        <Link href={"/"}>HOME</Link>
                    </li>
                    <li>
                        <Link href={"/about"}>ABOUT</Link>
                    </li>
                </ul>
            </nav>
            <LanguageButton/>
        </header>
    )
}