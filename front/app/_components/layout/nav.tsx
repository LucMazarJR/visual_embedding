import Link from "next/link";

interface navBarProps {
  header?: boolean;
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/workspace", label: "Workspace" },
];

export default function NavBar({ header = true }: navBarProps) {
  const navItemClasses = [
    "inline-flex rounded-md px-3 py-1 transition-all duration-150 ease-in-out hover:scale-110",
    header ? "hover:bg-accent" : "",
  ].join(" ");

  return (
    <nav>
      <ul className="flex items-center gap-8">
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
