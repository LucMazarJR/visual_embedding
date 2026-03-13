import Link from "next/link";
import LanguageButton from "./language_button";
import NavBar from "./nav";

export default function Header() {
  return (
    <header className="flex justify-between px-6 py-8">
      <Link href={"/"} className="text-4xl font-bold">
        Sentence Space
      </Link>
      <div className="flex gap-8">
        <NavBar />
        <LanguageButton />
      </div>
    </header>
  );
}
