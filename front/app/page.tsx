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
        <div className="bg-[url('/frame1.svg')] bg-repeat flex items-center justify-center w-lg h-128 border border-gray-300 rounded-2xl shadow-2xl">
          <div className="border-5 w-fit h-fit rounded-full border-dashed border-gray-200 animate-spin [animation-duration:10s]">
            <Box className="w-42 h-42 m-20 animate-spin [animation-duration:10s] [animation-direction:reverse] border border-gray-700 rounded-full p-12 shadow-2xl" color="#99a1af"/>
          </div>
        </div>
      </div>
    </div >
  );
}
