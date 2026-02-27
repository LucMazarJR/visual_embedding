import { applyUmap } from "../lib/applyUMAP.js"
import { embedSentences } from "../lib/embedSentences.js"
import { center } from "../lib/centralizeOrdedPairs.js"

export const embeddingServices = {
  async embedData(sentences: string[] | string) {
    const result = await embedSentences(sentences)
    const embeddings = result.embeddings?.map(vector => vector.values).filter((v): v is number[] => v !== undefined) || []
    const reducedData = applyUmap(embeddings)
    const centeredData = center(reducedData)
    return centeredData
  }
}