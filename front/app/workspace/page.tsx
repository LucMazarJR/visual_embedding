"use client";

import { useEffect, useRef, useState } from "react";
import AddButton from "../_components/buttons/add_button";
import GenerateButton from "../_components/buttons/generate_button";
import DeletePhrase from "../_components/buttons/delete_phrase";
import CartesianPlane from "../_components/cartesian_plane";
import Image from "next/image";

import { Share_Tech } from "next/font/google";

const share_tech = Share_Tech({
  weight: "400",
  variable: "--font-share-tech",
  subsets: ["latin"],
});

export default function WorkSpace() {
  const [phrases, setPhrases] = useState<{ phrase: string, isEmpty: boolean }[]>([{ phrase: "", isEmpty: false }, { phrase: "", isEmpty: false }, { phrase: "", isEmpty: false }]);
  const [embeddedPhrases, setEmbeddedPhrases] = useState<{ points: { x: number, y: number }, sentence: { phrase: string, isEmpty: boolean } }[]>([])
  const phrasesContainerRef = useRef<HTMLFormElement>(null);
  const previousPhrasesLengthRef = useRef(phrases.length);

  const handlePhraseChange = (index: number, value: string) => {
    setPhrases((prev) => {
      const next = [...prev];
      next[index] = { phrase: value, isEmpty: false };
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
      setPhrases([...phrases, { phrase: "", isEmpty: false }]);
    }
  };

  const handleSubmit = async (phrases: { phrase: string, isEmpty: boolean }[]) => {
    try {
      const checkedPhrases = phrases.map((item) => ({
        ...item,
        isEmpty: item.phrase.trim().length === 0,
      }));

      const submitError = checkedPhrases.some((item) => item.isEmpty);
      setPhrases(checkedPhrases);

      if (submitError) {
        alert("Existem campos vazios")
        return;
      }

      const validPhrases = checkedPhrases.filter((item) => !item.isEmpty);
      const data = { sentences: validPhrases.map((item) => item.phrase) }

      /*
      if (data.sentences.length < 3) {
        throw new Error("Número de frases insuficiente")
      }
      */

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/embedding/process`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const resData: [number, number][] = await res.json()
      const formattedData: { points: { x: number, y: number }, sentence: { phrase: string, isEmpty: boolean } }[] = resData.map((vector, i) => {
        return { points: { x: vector[0], y: vector[1] }, sentence: validPhrases[i] ?? { phrase: "", isEmpty: true } }
      })
      setEmbeddedPhrases(formattedData)
      console.log(formattedData)
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
                      className={"rounded-lg border p-2 relative w-full caret-black " + (p.isEmpty ? "border-red-300 bg-red-50 text-red-800" : "border-gray-300 bg-background text-gray-400")}
                      id={`${i}form`}
                      value={p.phrase}
                      placeholder={p.isEmpty ? "Adicione uma frase ou exclua esse campo" : "Digite aqui uma frase para comparação"}
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

            <div className={`flex flex-col items-center justify-center text-3xl text-center font-bold gap-8 w-full h-full ${share_tech.className}`}>
              Gere uma vizualização
              para começar
              <div className="w-full flex justify-center">
                <Image
                  src="/workspace-init.png"
                  width={500}
                  height={500}
                  sizes="(max-width: zz) 256px, (max-width: 1024px) 320px, 448px"
                  className="w-64 sm:w-72 md:w-80 lg:w-md h-auto"
                  alt="Ilustração inicial da visualização semântica"
                  priority
                />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
