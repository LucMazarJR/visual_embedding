"use client";

import {
  Lightbulb,
  Sparkles,
  SquareTerminal,
  VectorSquare,
} from "lucide-react";
import { useLanguage } from "../_contexts/language-context";
import styles from "./page.module.css";

export default function About() {
  const { language } = useLanguage();
  const t = {
    title:
      language === "pt"
        ? "O que e o Sentence Space?"
        : "What is Sentence Space?",
    intro:
      language === "pt"
        ? "Sentence Space e um experimento/ferramenta que transforma frases em vetores e as mostra num espaco visual para voce ver, explorar e entender como uma IA as interpreta e organiza semanticamente."
        : "Sentence Space is an experiment/tool that transforms sentences into vectors and shows them in a visual space so you can see, explore, and understand how an AI interprets and organizes them semantically.",
    whatWeDoTitle: language === "pt" ? "O que fazemos?" : "What do we do?",
    whatWeDoText:
      language === "pt"
        ? "Recebemos de 3 a 10 frases (do usuario) e transformamos cada frase em um vetor numerico (embedding) usando o modelo de embeddings do Gemini. Em seguida reduzimos a dimensionalidade desses vetores com UMAP para que possam ser desenhados em 2D. Depois aplicamos uma normalizacao para manter os pontos em uma escala consistente e comparavel."
        : "We receive between 3 and 10 sentences (from the user) and transform each sentence into a numeric vector (embedding) using Gemini's embedding model. Then we reduce the dimensionality of these vectors with UMAP so they can be drawn in 2D. After that, we apply normalization to keep points on a consistent and comparable scale.",
    howItWorks: language === "pt" ? "Como funciona?" : "How does it work?",
    whyItMatters:
      language === "pt" ? "E por que isso importa?" : "Why does this matter?",
    inspiration: language === "pt" ? "Inspiracao" : "Inspiration",
  };

  return (
    <div className="mt-8 mb-14 flex w-full flex-col items-center px-4 text-center sm:mt-10 sm:mb-20 sm:px-8 lg:mt-12 lg:mb-24">
      <div className="w-full max-w-5xl space-y-2">
        <h1 className="w-full text-start text-3xl font-black sm:text-4xl lg:text-5xl">
          {t.title}
        </h1>
        <div className="mt-2 flex flex-col gap-8 text-justify sm:gap-10 lg:gap-12">
          <section>
            <p className="text-sm text-gray-600 sm:text-base lg:text-lg">
              {t.intro}
            </p>
          </section>
          <hr className="border-gray-200" />
          <section className={styles.section}>
            <h3>
              <SquareTerminal /> {t.whatWeDoTitle}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg">
              {t.whatWeDoText}
            </p>
          </section>
          <section className={styles.section}>
            <h3>
              <VectorSquare />
              {t.howItWorks}
            </h3>
            <div className="mt-2 flex flex-col items-center">
              <ol className="w-full list-inside list-decimal space-y-2 text-sm marker:font-bold sm:w-[95%] sm:text-base lg:text-lg">
                <li>
                  <span>{language === "pt" ? "Entrada:" : "Input:"}</span>{" "}
                  {language === "pt"
                    ? "o usuario envia uma lista de frases."
                    : "the user sends a list of sentences."}
                </li>
                <li>
                  <span>Embedding:</span>{" "}
                  {language === "pt"
                    ? "cada frase e convertida em um vetor que captura seu significado semantico."
                    : "each sentence is converted into a vector that captures its semantic meaning."}
                </li>
                <li>
                  <span>{language === "pt" ? "Reducao (UMAP):" : "Reduction (UMAP):"}</span>{" "}
                  {language === "pt"
                    ? "esses vetores de alta dimensao sao projetados em 2 dimensoes por UMAP com foco em preservar relacoes semanticas locais."
                    : "these high-dimensional vectors are projected into 2D by UMAP with a focus on preserving local semantic relationships."}
                </li>
                <li>
                  <span>{language === "pt" ? "Normalizacao:" : "Normalization:"}</span>{" "}
                  {language === "pt"
                    ? "centralizamos e ajustamos a escala dos pontos para facilitar leitura e comparacao."
                    : "we center and scale points to make reading and comparison easier."}
                </li>
                <li>
                  <span>{language === "pt" ? "Exploracao:" : "Exploration:"}</span>{" "}
                  {language === "pt"
                    ? "o usuario ve as frases no espaco, identifica grupos, similaridades e outliers."
                    : "the user sees sentences in space and identifies groups, similarities, and outliers."}
                </li>
              </ol>
            </div>
          </section>
          <section className={styles.section}>
            <h3>
              <Lightbulb /> {t.whyItMatters}
            </h3>
            <div className="mt-2 flex flex-col items-center">
              <ul className="w-full list-inside list-disc space-y-2 text-sm sm:w-[95%] sm:text-base lg:text-lg">
                <li>
                  <span>
                    {language === "pt"
                      ? "Torna o abstrato visivel:"
                      : "Makes the abstract visible:"}
                  </span>{" "}
                  {language === "pt"
                    ? "embeddings sao numeros; aqui voce ve onde frases parecidas ficam proximas no espaco."
                    : "embeddings are numbers; here you can see where similar sentences are close in space."}
                </li>
                <li>
                  <span>
                    {language === "pt"
                      ? "Aprendizado e diagnostico:"
                      : "Learning and diagnosis:"}
                  </span>{" "}
                  {language === "pt"
                    ? "ajuda a entender modelos de linguagem, clusters semanticos e possiveis vieses."
                    : "it helps understand language models, semantic clusters, and possible biases."}
                </li>
                <li>
                  <span>{language === "pt" ? "Prototipo pratico:" : "Practical prototype:"}</span>{" "}
                  {language === "pt"
                    ? "inspiracao direta de como embeddings sao usados em chatbots e bancos vetoriais para busca por similaridade."
                    : "a direct inspiration of how embeddings are used in chatbots and vector databases for similarity search."}
                </li>
              </ul>
            </div>
          </section>
          <section className={styles.section}>
            <h3>
              <Sparkles />
              {t.inspiration}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg">
              {language === "pt"
                ? "A ideia nasceu do uso de embeddings para aproximacao semantica em chatbots e bancos de dados vetoriais. Durante um projeto de extensao no PET-Saude, precisei implementar um conjunto de FAQs em um banco de dados vetorial para alimentar um chatbot, e foi nesse processo que a intuicao por tras dos embeddings se tornou concreta: frases com significados proximos ocupam regioes proximas no espaco vetorial. Explicacoes didaticas normalmente ilustram isso com frases em um plano cartesiano; o Sentence Space e a versao pratica e interativa dessa ideia."
                : "The idea came from using embeddings for semantic matching in chatbots and vector databases. During an outreach project at PET-Saude, I had to implement a FAQ set in a vector database to power a chatbot, and in that process the intuition behind embeddings became concrete: sentences with similar meanings occupy nearby regions in vector space. Educational explanations usually illustrate this with sentences on a Cartesian plane; Sentence Space is the practical and interactive version of that idea."}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
