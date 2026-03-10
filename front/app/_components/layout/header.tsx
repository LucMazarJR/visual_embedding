import LanguageButton from "./language_button";
import NavBar from "./nav";

export default function Header() {
    return (
        <header className="flex justify-between py-8 px-6">
            <NavBar/>
            <LanguageButton/>
        </header>
    )
}