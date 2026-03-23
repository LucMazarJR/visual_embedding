import { Copyright, Github, Globe, Linkedin, Waypoints } from "lucide-react";
import NavBar from "./nav";

export default function Footer() {
  return (
    <footer className="bg-footer-background text-footer-foreground mt-auto w-full px-4 sm:px-8 lg:px-16 xl:px-24">
      <div className="flex flex-col items-center justify-between gap-4 border-b border-gray-700 py-6 text-center lg:flex-row lg:text-left">
        <div className="flex items-center gap-2 text-lg font-bold sm:text-xl">
          <Waypoints width={30} height={30} />
          Sentence Space
        </div>
        <NavBar header={false} />
      </div>
      <div className="flex flex-col items-center justify-between gap-4 py-6 text-center text-xs sm:text-sm lg:flex-row lg:text-left">
        <div className="flex items-center gap-2">
          <Copyright width={15} />
          2026 Sentence Space. Processamento semântico para testes com IA
        </div>
        <div className="flex gap-6 border-gray-300">
          <a
            href={"https://www.linkedin.com/in/lucianomazaraojr/"}
            className="transition-transform delay-100 ease-in-out hover:scale-105"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href={"https://github.com/LucMazarJR"}
            className="transition-transform delay-100 ease-in-out hover:scale-105"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            href={"https://www.lucianomjr.dev/"}
            className="transition-transform delay-100 ease-in-out hover:scale-105"
            target="_blank"
            rel="noreferrer"
          >
            <Globe />
          </a>
        </div>
      </div>
    </footer>
  );
}
