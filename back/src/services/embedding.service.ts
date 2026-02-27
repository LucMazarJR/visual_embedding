import { embedSentences } from "../lib/embedSentences.js"
import { applyPCA } from "../lib/applyPca.js"

export const embeddingServices = {
    async embedData(sentences: string[] | string) {
        const result = await embedSentences(sentences)
        const embeddings = result.embeddings?.map(vector => vector.values).filter((v): v is number[] => v !== undefined) || []
        const reducedData = applyPCA(embeddings, 2)
        return reducedData
    }
}