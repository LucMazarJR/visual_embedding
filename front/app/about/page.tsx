export default function About() {
    return (
        <div className="flex flex-col items-center w-full text-center">
            <h1 className="font-bold text-4xl text-center">O que é o Sentence Space?</h1>
            <div className="flex flex-col w-1/2 gap-10 text-justify mt-2">
                <section>
                    <p>Sentence Space é um experimento/ferramenta que transforma frases em vetores e as mostra num espaço visual para você ver, explorar e entender como uma IA à interpreta e organiza semanticamente.</p>
                </section>
                <section>
                    <h3 className="font-semibold text-2xl">O que fazemos?</h3>
                    <p>Recebemos várias frases (do usuário) e transformamos cada frase em um vetor numérico (embedding). Em seguida reduzimos a dimensionalidade desses vetores com UMAP para que possam ser desenhados em 2D. Depois aplicamos padronização e ajustes visuais para deixar a visualização clara, comparável e informativa.</p>
                </section>
                <section className="space-y-2">
                    <h3 className="font-semibold text-2xl">Como funciona?</h3>
                    <div className="flex flex-col items-center">
                        <section className="w-[95vh]">
                            <ol className="list-decimal list-inside space-y-2 marker:font-bold">
                                <li><span className="font-bold">Entrada:</span> o usuário envia uma lista de frases.</li>
                                <li><span className="font-bold">Embedding:</span> cada frase é convertida em um vetor que captura seu significado semântico.</li>
                                <li><span className="font-bold">Redução (UMAP):</span>sses vetores de alta dimensão são projetados em 2 dimensões por UMAP, preservando relações semânticas locais.</li>
                                <li><span className="font-bold">Padronização & Styling:</span> normalizamos escalas, aplicamos cores/legendas e melhoramos a disposição para visualização.</li>
                                <li><span className="font-bold">Exploração:</span> o usuário vê as frases no espaço, identifica grupos, similaridades e outliers.</li>
                            </ol>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    )
}