import styles from './page.module.css'

export default function About() {
    return (
        <div className="flex flex-col items-center w-full text-center">
            <h1 className="font-bold text-4xl text-center">O que é o Sentence Space?</h1>
            <div className="flex flex-col w-1/2 gap-10 text-justify mt-2">
                <section>
                    <p>Sentence Space é um experimento/ferramenta que transforma frases em vetores e as mostra num espaço visual para você ver, explorar e entender como uma IA à interpreta e organiza semanticamente.</p>
                </section>
                <section className={styles.section}>
                    <h3>O que fazemos?</h3>
                    <p>Recebemos várias frases (do usuário) e transformamos cada frase em um vetor numérico (embedding). Em seguida reduzimos a dimensionalidade desses vetores com UMAP para que possam ser desenhados em 2D. Depois aplicamos padronização e ajustes visuais para deixar a visualização clara, comparável e informativa.</p>
                </section>
                <section className={styles.section}>
                    <h3>Como funciona?</h3>
                    <div className="flex flex-col items-center mt-2">
                        <ol className="list-decimal list-inside space-y-2 marker:font-bold w-[95vh]">
                            <li><span>Entrada:</span> o usuário envia uma lista de frases.</li>
                            <li><span>Embedding:</span> cada frase é convertida em um vetor que captura seu significado semântico.</li>
                            <li><span>Redução (UMAP):</span>sses vetores de alta dimensão são projetados em 2 dimensões por UMAP, preservando relações semânticas locais.</li>
                            <li><span>Padronização & Styling:</span> normalizamos escalas, aplicamos cores/legendas e melhoramos a disposição para visualização.</li>
                            <li><span>Exploração:</span> o usuário vê as frases no espaço, identifica grupos, similaridades e outliers.</li>
                        </ol>
                    </div>
                </section>
                <section className={styles.section}>
                    <h3>E por que isso importa?</h3>
                    <div className="flex flex-col items-center mt-2">
                        <ul className="list-disc list-inside space-y-2 marker:font-bold w-[95vh]">
                            <li><span>Torna o abstrato visível</span></li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}