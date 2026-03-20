"use client";

import { useEffect, useRef, useState } from "react";
import AddButton from "../_components/buttons/add_button";
import GenerateButton from "../_components/buttons/generate_button";
import DeletePhrase from "../_components/buttons/delete_phrase";
import CartesianPlane from "../_components/cartesian_plane";

import { Share_Tech } from "next/font/google";
import { Sparkles } from "lucide-react";

const share_tech = Share_Tech({
  weight: "400",
  variable: "--font-share-tech",
  subsets: ["latin"],
});

export default function WorkSpace() {
  const [phrases, setPhrases] = useState(["", "", ""]);
  const [embeddedPhrases, setEmbeddedPhrases] = useState<{ points: { x: number, y: number }, phrase: string }[]>([])
  const phrasesContainerRef = useRef<HTMLFormElement>(null);
  const previousPhrasesLengthRef = useRef(phrases.length);

  const handlePhraseChange = (index: number, value: string) => {
    setPhrases((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const handleRemovePhrase = (index: number) => {
    setPhrases((prev) => {
      const next = [...prev];
      next.splice(index, 1)
      return next
    })
  }

  const handleAddPhrase = () => {
    if (phrases.length < 10) {
      setPhrases([...phrases, ""]);
    }
  };

  const handleSubmit = async (phrases: string[]) => {
    const data = { sentences: phrases }

    try {
      if (data.sentences.filter(phrase => phrase.trim().length !== 0).length < 3) {
        throw new Error("Número de frases insuficiente")
      }
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/embedding/process`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const resData: [number, number][] = await res.json()
      const formatedData: { points: { x: number, y: number }, phrase: string }[] = resData.map((vector, i) => {
        return { points: { x: vector[0], y: vector[1] }, phrase: phrases[i] }
      })
      setEmbeddedPhrases(formatedData)
      console.log(formatedData)
    } catch (e) {
      alert(e) // Mudar para aviso de erro nativo
    }
  }

  const scrollToBottom = () => {
    const container = phrasesContainerRef.current;
    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (phrases.length > previousPhrasesLengthRef.current) {
      scrollToBottom();
    }

    previousPhrasesLengthRef.current = phrases.length;
  }, [phrases.length]);

  return (
    <div className="space-y-8 p-8 px-12">
      <section className="flex flex-col gap-1">
        <p className="font-medium text-purple-700">WORKSPACE</p>
        <h2 className="text-4xl font-bold">Analise a distribuição semântica</h2>
      </section>
      <div className="flex min-h-screen flex-1 gap-8 h-screen">
        <div className="flex-4 space-y-6 rounded-lg border border-gray-200 bg-white px-12 py-8">
          <section className="space-y-2">
            <h3 className="text-2xl font-bold">Suas Frases</h3>
            <p className="text-gray-500">
              Insira suas frases abaixo para processar a análise semântica. Cada
              entrada será vetorizada para mapear suas relações em um espaço 2D.
            </p>
          </section>
          <form ref={phrasesContainerRef} action="" className="flex flex-col h-[60%] gap-6 scroll-auto overflow-auto">
            {phrases.map((p, i) => {
              return (
                <div key={i} className="flex flex-col ">
                  <label htmlFor={`${i}form`} className="font-semibold">
                    Frase {i + 1}
                  </label>
                  <div className="flex relative group">
                    <input
                      type="text"
                      className="bg-background rounded-lg border border-gray-300 p-2 text-gray-400 relative w-full caret-black"
                      id={`${i}form`}
                      value={p}
                      placeholder="Digite aqui uma frase para comparação"
                      onChange={(e) => handlePhraseChange(i, e.target.value)}
                    />
                    <DeletePhrase lngt={phrases.length} removeFunc={() => handleRemovePhrase(i)} />
                  </div>
                </div>
              );
            })}
          </form>
          <AddButton addFunc={handleAddPhrase} len={phrases.length} />
          <GenerateButton generateFunc={() => handleSubmit(phrases)} />
        </div>
        <div className="flex-6 rounded-lg border border-gray-200 bg-white p-4 h-screen flex items-center justify-center">
          {!!embeddedPhrases.length ?
            <CartesianPlane data={embeddedPhrases} /> :

            <div className={`flex items-center justify-center text-3xl text-center font-bold gap-5 w-full h-full ${share_tech.className}`}>
              <Sparkles className="animate-pulse duration-100"/>
              Gere uma vizualização
              para começar
              <Sparkles className="animate-pulse duration-200"/>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
