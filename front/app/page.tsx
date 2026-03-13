import { Box } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-2 p-8 flex-1">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="px-20 space-y-12">
          <h1 className="font-black tracking-wider text-7xl">Bem vindo à Sentence Space</h1>
          <p className="text-xl">Explore o conceito de vetores semânticos e vizualize como a inteligência artificial processa o significado da linguagem em dimensões matemáticas</p>
          <div className="space-x-4">
            <button className="rounded-xl bg-foreground text-background p-3">
              <Link href={"/workspace"}>Começar Agora</Link>
            </button>
            <button className="rounded-xl bg-gray-100 p-3 border-2 border-gray-200">
              <Link href={"/about"}>Saiba Mais</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative isolate flex flex-col gap-6 h-128 w-lg items-center justify-center overflow-hidden rounded-2xl border border-gray-300 bg-[url('/frame1.svg')] bg-repeat shadow-2xl">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-72 w-72 rounded-full bg-gray-300/60 blur-3xl" />
          </div>
          <div className="relative z-10 h-fit w-fit animate-spin rounded-full border-5 border-dashed border-gray-400 [animation-duration:40s]">
            <Box className="h-42 w-42 m-20 animate-spin rounded-full border border-gray-400 p-12 drop-shadow-2xl [animation-direction:reverse] [animation-duration:40s]" color="#99a1af" />
          </div>
          <div className="z-10">
            a
          </div>
        </div>
      </div>
    </div >
  );
}
