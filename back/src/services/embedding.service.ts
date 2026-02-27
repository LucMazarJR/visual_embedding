import { applyUmap } from "../lib/applyUMAP.js"
import { embedSentences } from "../lib/embedSentences.js"
import { center } from "../lib/centralizeOrdedPairs.js"
import { normalize } from "../lib/normalizeOrdedPairs.js"

export const embeddingServices = {
  async embedData(sentences: string[] | string) {
    const result = await embedSentences(sentences)
    const embeddings = result.embeddings?.map(vector => vector.values).filter((v): v is number[] => v !== undefined) || []
    const reducedData = applyUmap(embeddings)
    
    if (!reducedData) {
      throw new Error("Falha ao aplicar UMAP")
    }
    
    const centeredData = center(reducedData as number[][]) as [number, number][]
    const normalized = normalize(centeredData)
    return normalized
  }
}