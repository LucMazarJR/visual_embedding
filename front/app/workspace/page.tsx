"use client";

import { useState } from "react";
import AddButton from "../_components/buttons/add_button";
import GenerateButton from "../_components/buttons/generate_button";
import DeletePhrase from "../_components/buttons/delete_phrase";
import CartesianPlane from "../_components/cartesian_plane";

export default function WorkSpace() {
  const [phrases, setPhrases] = useState(["", "", ""]);
  const [embeddedPhrases, setEmbeddedPhrases] = useState<{ points: { x: number, y: number }, phrase: string }[]>([])

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
    if (phrases.length < 10) setPhrases([...phrases, ""]);
  };

  const handleSubmit = async (phrases: string[]) => {
    const data = { sentences: phrases }

    try {
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
      console.log(e)
    }
  }

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
          <form action="" className="flex flex-col h-[60%] gap-6 scroll-smooth overflow-auto">
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
        <div className="flex-6 rounded-lg border border-gray-200 bg-white p-4 h-screen">
          <CartesianPlane data={embeddedPhrases} />
        </div>
      </div>
    </div>
  );
}
