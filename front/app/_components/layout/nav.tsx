import Link from "next/link";

const navItemClasses =
  "rounded-md px-3 py-1 transition-transform transition-colors duration-150 ease-in-out hover:scale-110 hover:bg-accent";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/workspace", label: "Workspace" },
];

export default function NavBar() {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.href} className={navItemClasses}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
