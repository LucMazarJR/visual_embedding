import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <ul className="flex gap-12 items-center">
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
    )
}