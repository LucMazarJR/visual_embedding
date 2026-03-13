import { Box, Globe, Axis3D } from "lucide-react";
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
        <div className="relative isolate flex h-128 w-lg flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border border-gray-300 bg-[url('/bgs/frame1.svg')] bg-repeat shadow-2xl">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-80 w-80 rounded-full bg-gray-400/50 blur-3xl" />
          </div>
          <div className="relative z-10 h-fit w-fit animate-spin rounded-full border-4 border-dashed border-gray-300 [animation-duration:40s]">
            <Box
              className="m-20 h-42 w-42 animate-spin rounded-full border-2 border-gray-400 p-12 drop-shadow-2xl [animation-direction:reverse] [animation-duration:40s]"
              color="#505967"
            />
          </div>
          <div className="absolute z-20 h-80 w-80">
            <div className="absolute top-6 -right-15 flex items-center gap-2 rounded-lg border border-gray-300 bg-white p-1 px-2 text-center text-sm font-bold shadow-xl">
              <Globe />
              PROXIMIDADE <br />
              SEMÂNTICA
            </div>
            <div className="absolute bottom-15 -left-15 flex items-center gap-2 rounded-lg border-gray-300 bg-white p-1 px-2 text-center text-sm font-bold shadow-xl">
              <Axis3D /> SIMILARIDADE DO <br /> COSSENO
            </div>
          </div>
          <div className={`relative z-10 ${share_tech.className}`}>
            CAMPO DE VETORES INTERATIVO
          </div>
        </div>
      </div>
    </div>
  );
}
