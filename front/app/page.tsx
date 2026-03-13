import { Box } from "lucide-react";
import Link from "next/link";
import { Share_Tech } from "next/font/google";

const share_tech = Share_Tech({
  weight: "400",
  variable: "--font-share-tech",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="grid flex-1 grid-cols-2 p-8">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="space-y-12 px-20">
          <h1 className="text-7xl font-black tracking-wider">
            Bem vindo à Sentence Space
          </h1>
          <p className="text-xl">
            Explore o conceito de vetores semânticos e vizualize como a
            inteligência artificial processa o significado da linguagem em
            dimensões matemáticas
          </p>
          <div className="space-x-4">
            <button className="bg-foreground text-background rounded-xl p-3">
              <Link href={"/workspace"}>Começar Agora</Link>
            </button>
            <button className="rounded-xl border-2 border-gray-200 bg-gray-100 p-3">
              <Link href={"/about"}>Saiba Mais</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative isolate flex h-128 w-lg flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border border-gray-300 bg-[url('/frame1.svg')] bg-repeat shadow-2xl">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-72 w-72 rounded-full bg-gray-300/60 blur-3xl" />
          </div>
          <div className="relative z-10 h-fit w-fit animate-spin rounded-full border-5 border-dashed border-gray-400 [animation-duration:40s]">
            <Box
              className="m-20 h-42 w-42 animate-spin rounded-full border border-gray-400 p-12 drop-shadow-2xl [animation-direction:reverse] [animation-duration:40s]"
              color="#99a1af"
            />
          </div>
          <div className={`z-10 ${share_tech.className}`}>
            CAMPO DE VETORES INTERATIVO
          </div>
        </div>
      </div>
    </div>
  );
}
