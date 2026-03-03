import { applyUmap } from "../lib/applyUMAP.js"
import { embedSentences } from "../lib/embedSentences.js"
import { normalize } from "../lib/normalizeOrdedPairs.js"

export const embeddingServices = {
  async embedData(sentences: string[] | string) {
    const result = await embedSentences(sentences)
    const embeddings = result.embeddings?.map(vector => vector.values).filter((v): v is number[] => v !== undefined) || []
    const reducedData = applyUmap(embeddings)
    
    if (!reducedData) {
      throw new Error("Falha ao aplicar UMAP")
    }
    
    const normalized = normalize(reducedData as [number, number][])
    return normalized
  }
}