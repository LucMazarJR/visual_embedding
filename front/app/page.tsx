import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-2 p-8">
      <div className="flex flex-col justify-center">
        <div className="h-full px-20 space-y-12">
          <h1 className="font-black tracking-wider text-7xl">Bem vindo à Sentence Space</h1>
          <p className="text-xl">Explore o conceito de vetores semânticos e vizualize como a inteligência artificial processa o significado da linguagem em dimensões matemáticas</p>
          <div className="space-x-4">
            <button className="rounded-xl bg-foreground text-background p-3">Começar Agora</button>
            <button className="rounded-xl bg-gray-100 p-3 border-2 border-gray-200"><Link href={"/about"}>Saiba Mais</Link></button>
          </div>
        </div>
      </div>
      <div className="px-8">
        a
      </div>
    </div>
  );
}
