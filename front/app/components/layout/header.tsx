import LanguageButton from "./language_button";

export default function Header() {
    return (
        <header className="flex justify-between py-8 px-6">
            <nav className="flex gap-12">
                <a href="">HOME</a>
                <a href="">ABOUT</a>
            </nav>
            <LanguageButton/>
        </header>
    )
}