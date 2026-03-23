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
    <div className="flex flex-1 flex-col gap-10 px-4 py-10 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-6 lg:px-8 lg:py-20">
      <div className="flex h-full flex-col items-center justify-center lg:items-start">
        <div className="w-full max-w-2xl space-y-8 text-center sm:space-y-10 lg:space-y-12 lg:px-6 lg:text-left xl:px-12">
          <h1 className="text-4xl font-black tracking-wide sm:text-5xl lg:text-6xl xl:text-7xl">
            Bem vindo à Sentence Space
          </h1>
          <p className="text-base sm:text-lg lg:text-xl">
            Explore o conceito de vetores semânticos e visualize como a
            inteligência artificial processa o significado da linguagem em
            dimensões matemáticas
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link
              href={"/workspace"}
              className="bg-foreground text-background hover:bg-accent-foreground inline-flex rounded-xl px-4 py-3 text-sm transition-all duration-100 ease-in-out hover:scale-105 sm:text-base"
            >
              Começar Agora
            </Link>
            <Link
              href={"/about"}
              className="inline-flex rounded-xl border-2 border-gray-200 bg-gray-100 px-4 py-3 text-sm transition-all duration-100 ease-in-out hover:scale-105 hover:bg-gray-200 sm:text-base"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
      <div className="flex cursor-default flex-col items-center justify-center">
        <div className="relative isolate flex h-105 w-full max-w-135 flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border border-gray-300 bg-[url('/bgs/frame1.svg')] bg-repeat shadow-2xl sm:h-125 lg:h-140">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-56 w-56 rounded-full bg-gray-400/50 blur-3xl sm:h-72 sm:w-72" />
          </div>
          <div className="relative z-10 h-fit w-fit animate-spin rounded-full border-4 border-dashed border-gray-300 [animation-duration:40s]">
            <Box
              className="m-12 h-28 w-28 animate-spin rounded-full border-2 border-gray-400 p-7 drop-shadow-2xl [animation-direction:reverse] [animation-duration:40s] sm:m-16 sm:h-36 sm:w-36 sm:p-10"
              color="#505967"
              strokeWidth={1.5}
            />
          </div>
          <div className="absolute z-20 h-72 w-72 sm:h-80 sm:w-80">
            <div className="absolute top-6 right-2 flex items-center gap-2 rounded-lg border border-gray-300 bg-white p-1 px-2 text-center text-xs font-bold shadow-xl duration-200 ease-in-out hover:scale-105 sm:-right-15 sm:text-sm">
              <Globe />
              PROXIMIDADE <br />
              SEMÂNTICA
            </div>
            <div className="absolute bottom-5 left-2 flex items-center gap-2 rounded-lg border border-gray-300 bg-white p-1 px-2 text-center text-xs font-bold shadow-xl duration-200 ease-in-out hover:scale-105 sm:-left-15 sm:bottom-15 sm:text-sm">
              <Axis3D /> SIMILARIDADE DO <br /> COSSENO
            </div>
          </div>
          <div
            className={`relative z-10 px-4 text-center text-sm sm:text-base ${share_tech.className}`}
          >
            CAMPO DE VETORES INTERATIVO
          </div>
        </div>
      </div>
    </div>
  );
}
