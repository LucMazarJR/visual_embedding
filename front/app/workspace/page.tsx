"use client";

import { useEffect, useRef, useState } from "react";
import AddButton from "../_components/buttons/add_button";
import GenerateButton from "../_components/buttons/generate_button";
import DeletePhrase from "../_components/buttons/delete_phrase";
import CartesianPlane from "../_components/cartesian_plane";
import Image from "next/image";

import { Share_Tech } from "next/font/google";
import { Loader2 } from "lucide-react";
import { useLanguage } from "../_contexts/language-context";

const share_tech = Share_Tech({
  weight: "400",
  variable: "--font-share-tech",
  subsets: ["latin"],
});

export default function WorkSpace() {
  const { language } = useLanguage();
  const t = {
    tag: language === "pt" ? "WORKSPACE" : "WORKSPACE",
    title:
      language === "pt"
        ? "Analise a distribuicao semantica"
        : "Analyze semantic distribution",
    yourSentences: language === "pt" ? "Suas Frases" : "Your Sentences",
    helper:
      language === "pt"
        ? "Insira suas frases abaixo para processar a analise semantica. Cada entrada sera vetorizada para mapear suas relacoes em um espaco 2D."
        : "Enter your sentences below to process semantic analysis. Each input will be vectorized to map relationships in a 2D space.",
    sentenceLabel: language === "pt" ? "Frase" : "Sentence",
    emptyFieldAlert:
      language === "pt"
        ? "Existem campos vazios"
        : "There are empty fields",
    emptyPlaceholder:
      language === "pt"
        ? "Adicione uma frase ou exclua esse campo"
        : "Add a sentence or remove this field",
    filledPlaceholder:
      language === "pt"
        ? "Digite aqui uma frase para comparacao"
        : "Type a sentence here for comparison",
    loading: language === "pt" ? "Processando dados" : "Processing data",
    emptyState:
      language === "pt"
        ? "Gere uma visualizacao para comecar"
        : "Generate a visualization to get started",
    emptyAlt:
      language === "pt"
        ? "Ilustracao inicial da visualizacao semantica"
        : "Initial semantic visualization illustration",
  };

  const [phrases, setPhrases] = useState<
    { phrase: string; isEmpty: boolean }[]
  >([
    { phrase: "", isEmpty: false },
    { phrase: "", isEmpty: false },
    { phrase: "", isEmpty: false },
  ]);
  const [embeddedPhrases, setEmbeddedPhrases] = useState<
    {
      points: { x: number; y: number };
      sentence: { phrase: string; isEmpty: boolean };
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
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
      next.splice(index, 1);
      return next;
    });
  };

  const handleAddPhrase = () => {
    if (phrases.length < 10) {
      setPhrases([...phrases, { phrase: "", isEmpty: false }]);
    }
  };

  const handleSubmit = async (
    phrases: { phrase: string; isEmpty: boolean }[],
  ) => {
    try {
      const checkedPhrases = phrases.map((item) => ({
        ...item,
        isEmpty: item.phrase.trim().length === 0,
      }));

      const submitError = checkedPhrases.some((item) => item.isEmpty);
      setPhrases(checkedPhrases);

      if (submitError) {
        alert(t.emptyFieldAlert);
        return;
      }

      setIsLoading(true);

      const validPhrases = checkedPhrases.filter((item) => !item.isEmpty);
      const data = { sentences: validPhrases.map((item) => item.phrase) };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/embedding/process`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      const resData: [number, number][] = await res.json();
      const formattedData: {
        points: { x: number; y: number };
        sentence: { phrase: string; isEmpty: boolean };
      }[] = resData.map((vector, i) => {
        return {
          points: { x: vector[0], y: vector[1] },
          sentence: validPhrases[i] ?? { phrase: "", isEmpty: true },
        };
      });
      setEmbeddedPhrases(formattedData);
      console.log(formattedData);
    } catch (e) {
      alert(e); // Mudar para aviso de erro nativo
    } finally {
      setIsLoading(false);
    }
  };

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
    <div className="space-y-6 px-4 py-6 sm:px-8 sm:py-8 lg:space-y-8 lg:px-12">
      <section className="flex flex-col gap-1">
        <p className="text-sm font-medium text-purple-700 sm:text-base">{t.tag}</p>
        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">{t.title}</h2>
      </section>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-10 lg:gap-8">
        <div className="space-y-5 rounded-lg border border-gray-200 bg-white px-4 py-5 sm:px-6 sm:py-6 lg:col-span-4 lg:space-y-6 lg:px-10 lg:py-8">
          <section className="space-y-2">
            <h3 className="text-xl font-bold sm:text-2xl">{t.yourSentences}</h3>
            <p className="text-sm text-gray-500 sm:text-base">
              {t.helper}
            </p>
          </section>
          <form
            ref={phrasesContainerRef}
            action=""
            className="flex max-h-[45vh] flex-col gap-4 overflow-auto pr-1 sm:max-h-[50vh] lg:max-h-[52vh] lg:gap-6"
          >
            {phrases.map((p, i) => {
              return (
                <div key={i} className="flex flex-col gap-1">
                  <label htmlFor={`${i}form`} className="text-sm font-semibold sm:text-base">
                    {t.sentenceLabel} {i + 1}
                  </label>
                  <div className="group relative flex">
                    <input
                      type="text"
                      className={
                        "relative w-full rounded-lg border p-2 pr-10 text-sm caret-black sm:text-base " +
                        (p.isEmpty
                          ? "border-red-300 bg-red-50 text-red-800"
                          : "bg-background border-gray-300 text-gray-400")
                      }
                      id={`${i}form`}
                      value={p.phrase}
                      placeholder={
                        p.isEmpty
                          ? t.emptyPlaceholder
                          : t.filledPlaceholder
                      }
                      onChange={(e) => handlePhraseChange(i, e.target.value)}
                    />
                    <DeletePhrase
                      lngt={phrases.length}
                      removeFunc={() => handleRemovePhrase(i)}
                    />
                  </div>
                </div>
              );
            })}
          </form>
          <AddButton addFunc={handleAddPhrase} len={phrases.length} />
          <GenerateButton generateFunc={() => handleSubmit(phrases)} />
        </div>
        <div className="flex min-h-105 items-center justify-center rounded-lg border border-gray-200 bg-white p-3 sm:min-h-125 sm:p-4 lg:col-span-6 lg:min-h-170">
          <div className="h-[56vh] min-h-90 w-full sm:h-[58vh] lg:h-full lg:min-h-155">
            {!!embeddedPhrases.length ? (
              <CartesianPlane data={embeddedPhrases} />
            ) : isLoading ? (
              <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
                <span className="text-xl font-bold sm:text-2xl">{t.loading}</span>
                <Loader2 className="h-14 w-14 animate-spin [animation-duration:3s]" />
              </div>
            ) : (
              <div
                className={`flex h-full w-full flex-col items-center justify-center gap-6 px-4 text-center text-2xl font-bold sm:gap-8 sm:text-3xl ${share_tech.className}`}
              >
                {t.emptyState}
                <div className="flex w-full justify-center">
                  <Image
                    src="/workspace-init.png"
                    width={500}
                    height={500}
                    sizes="(max-width: 612px) 240px, (max-width: 1024px) 320px, 448px"
                    className="h-auto w-56 sm:w-72 md:w-80 lg:w-md"
                    alt={t.emptyAlt}
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
