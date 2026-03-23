import {
  Lightbulb,
  Sparkles,
  SquareTerminal,
  VectorSquare,
} from "lucide-react";
import styles from "./page.module.css";

export default function About() {
  return (
    <div className="mt-8 mb-14 flex w-full flex-col items-center px-4 text-center sm:mt-10 sm:mb-20 sm:px-8 lg:mt-12 lg:mb-24">
      <div className="w-full max-w-5xl space-y-2">
        <h1 className="w-full text-start text-3xl font-black sm:text-4xl lg:text-5xl">
          O que é o Sentence Space?
        </h1>
        <div className="mt-2 flex flex-col gap-8 text-justify sm:gap-10 lg:gap-12">
          <section>
            <p className="text-sm text-gray-600 sm:text-base lg:text-lg">
              Sentence Space é um experimento/ferramenta que transforma frases
              em vetores e as mostra num espaço visual para você ver, explorar e
              entender como uma IA as interpreta e organiza semanticamente.
            </p>
          </section>
          <hr className="border-gray-200" />
          <section className={styles.section}>
            <h3>
              <SquareTerminal /> O que fazemos?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg">
              Recebemos de 3 a 10 frases (do usuário) e transformamos cada frase em
              um vetor numérico (embedding) usando o modelo de embeddings do Gemini.
              Em seguida reduzimos a
              dimensionalidade desses vetores com UMAP para que possam ser
              desenhados em 2D. Depois aplicamos uma normalização para manter os
              pontos em uma escala consistente e comparável.
            </p>
          </section>
          <section className={styles.section}>
            <h3>
              <VectorSquare />
              Como funciona?
            </h3>
            <div className="mt-2 flex flex-col items-center">
              <ol className="w-full list-inside list-decimal space-y-2 text-sm marker:font-bold sm:w-[95%] sm:text-base lg:text-lg">
                <li>
                  <span>Entrada:</span> o usuário envia uma lista de frases.
                </li>
                <li>
                  <span>Embedding:</span> cada frase é convertida em um vetor que
                  captura seu significado semântico.
                </li>
                <li>
                  <span>Redução (UMAP):</span> esses vetores de alta dimensão
                  são projetados em 2 dimensões por UMAP com foco em preservar
                  relações semânticas locais.
                </li>
                <li>
                  <span>Normalização:</span> centralizamos e ajustamos a escala
                  dos pontos para facilitar leitura e comparação.
                </li>
                <li>
                  <span>Exploração:</span> o usuário vê as frases no espaço,
                  identifica grupos, similaridades e outliers.
                </li>
              </ol>
            </div>
          </section>
          <section className={styles.section}>
            <h3>
              <Lightbulb />E por que isso importa?
            </h3>
            <div className="mt-2 flex flex-col items-center">
              <ul className="w-full list-inside list-disc space-y-2 text-sm sm:w-[95%] sm:text-base lg:text-lg">
                <li>
                  <span>Torna o abstrato visível:</span> embeddings são números;
                  aqui você vê onde frases parecidas ficam próximas no espaço.
                </li>
                <li>
                  <span>Aprendizado e diagnóstico:</span> ajuda a entender
                  modelos de linguagem, clusters semânticos e possíveis vieses.
                </li>
                <li>
                  <span>Protótipo prático:</span> inspiração direta de como
                  embeddings são usados em chatbots e bancos vetoriais para
                  busca por similaridade.
                </li>
              </ul>
            </div>
          </section>
          <section className={styles.section}>
            <h3>
              <Sparkles />
              Inspiração
            </h3>
            <p className="text-sm sm:text-base lg:text-lg">
              A ideia nasceu do uso de embeddings para aproximação semântica em
              chatbots e bancos de dados vetoriais. Durante um projeto de
              extensão no PET-Saúde, precisei implementar um conjunto de FAQs em
              um banco de dados vetorial para alimentar um chatbot — e foi nesse
              processo que a intuição por trás dos embeddings se tornou
              concreta: frases com significados próximos ocupam regiões próximas
              no espaço vetorial. Explicações didáticas normalmente ilustram
              isso com frases em um plano cartesiano; o Sentence Space é a
              versão prática e interativa dessa ideia.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
