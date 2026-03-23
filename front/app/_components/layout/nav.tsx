"use client";

import Link from "next/link";
import { useLanguage } from "../../_contexts/language-context";

interface navBarProps {
  header?: boolean;
}

export default function NavBar({ header = true }: navBarProps) {
  const { language } = useLanguage();
  const navItems = [
    { href: "/", label: language === "pt" ? "Inicio" : "Home" },
    { href: "/about", label: language === "pt" ? "Sobre" : "About" },
    {
      href: "/workspace",
      label: language === "pt" ? "Workspace" : "Workspace",
    },
  ];

  const navItemClasses = [
    "inline-flex rounded-md px-3 py-1 text-sm transition-all duration-150 ease-in-out hover:scale-105 sm:text-base",
    header ? "hover:bg-accent" : "",
  ].join(" ");

  return (
    <nav>
      <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 lg:gap-8">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={navItemClasses}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
