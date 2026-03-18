'use client'

import { useState } from "react"
import AddButton from "../_components/buttons/add_button"
import GenerateButton from "../_components/buttons/generate_button"

export default function WorkSpace() {
  const [phrases, setPhrases] = useState(["", "", ""])

  const handlePhraseChange = (index: number, value: string) => {
    setPhrases((prev) => {
      const next = [...prev]
      next[index] = value
      return next
    })
  }

  const handleAddPhrase = () => {
    if (phrases.length < 10) setPhrases([...phrases, ""])
  }

  return (
    <div className="p-8 px-12 space-y-8">
      <section className="flex flex-col gap-1">
        <p className="text-purple-700 font-medium">WORKSPACE</p>
        <h2 className="text-4xl font-bold">Analise a distribuição semântica</h2>
      </section>
      <div className="flex-1 flex gap-8 min-h-screen">
        <div className="flex-4 bg-white border border-gray-200 rounded-lg px-12 py-8 space-y-6">
          <section className="space-y-2">
            <h3 className="font-bold text-2xl">Suas Frases</h3>
            <p className="text-gray-500">
              Insira suas frases abaixo para processar a análise semântica. Cada entrada será vetorizada para mapear suas relações em um espaço 2D.
            </p>
          </section>
          <form action="" className="flex flex-col gap-6">
            {phrases.map((p, i) => {
              return (
                <div key={i} className="flex flex-col">
                  <label htmlFor={`${i}form`} className="font-semibold">Frase {i + 1}</label>
                  <input
                    type="text"
                    className="border p-2 rounded-lg bg-background border-gray-300 text-gray-400"
                    id={`${i}form`}
                    value={p}
                    placeholder="Digite aqui uma frase para comparação"
                    onChange={(e) => handlePhraseChange(i, e.target.value)}
                  />
                </div>
              )
            })}
            <AddButton addFunc={handleAddPhrase} len={phrases.length} />
            <GenerateButton/>
        </form>
      </div>
      <div className="flex-6 bg-white border border-gray-200 rounded-lg p-4">
        b
      </div>
    </div>
    </div >
  )
}
