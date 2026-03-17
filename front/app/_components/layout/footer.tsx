import { Copyright, Github, Globe, Linkedin, Waypoints } from "lucide-react";
import NavBar from "./nav";

export default function Footer() {
  return (
    <footer className="bg-footer-background text-footer-foreground mt-auto grid-rows-2 px-28">
      <div className="flex justify-between border-b border-gray-700 py-6">
        <div className="flex items-center gap-2 text-xl font-bold">
          <Waypoints width={35} height={35} />
          Sentence Space
        </div>
        <NavBar header={false} />
      </div>
      <div className="flex items-center justify-between border-gray-400 py-6 text-sm">
        <div className="flex gap-2">
          <Copyright width={15} />
          2026 Sentence Space. Processamento semântico para testes com IA
        </div>
        <div className="flex gap-4 border-gray-300">
          <a href={"https://www.linkedin.com/in/lucianomazaraojr/"}>
            <Linkedin />
          </a>
          <a href={"https://github.com/LucMazarJR"}>
            <Github />
          </a>
          <a href={"https://www.lucianomjr.dev/"}>
            <Globe />
          </a>
        </div>
      </div>
    </footer>
  );
}
