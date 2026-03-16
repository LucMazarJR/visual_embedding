import Link from "next/link";
import LanguageButton from "./language_button";
import NavBar from "./nav";
import { Waypoints } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between border-b border-gray-200 px-28 py-8">
      <Link
        href={"/"}
        className="flex items-center gap-2 text-4xl font-bold transition-transform duration-150 ease-in-out hover:scale-105"
      >
        <Waypoints width={35} height={35} />
        Sentence Space
      </Link>
      <div className="flex items-center gap-8">
        <NavBar />
        <LanguageButton />
      </div>
    </header>
  );
}
