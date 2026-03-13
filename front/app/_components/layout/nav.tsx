import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex items-center gap-12">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/workspace"}>Workspace</Link>
        </li>
      </ul>
    </nav>
  );
}
