import Link from "next/link";
import LanguageButton from "./language_button";
import NavBar from "./nav";
import { Waypoints } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex w-full flex-col gap-4 border-b border-gray-200 bg-background px-4 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-6 xl:px-24">
      <Link
        href={"/"}
        className="flex items-center justify-center gap-2 text-center text-2xl font-bold transition-transform duration-150 ease-in-out hover:scale-105 sm:text-3xl lg:justify-start lg:text-4xl"
      >
        <Waypoints width={30} height={30} />
        Sentence Space
      </Link>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:justify-end lg:gap-8">
        <NavBar />
        <LanguageButton />
      </div>
    </header>
  );
}
