import { embedSentences } from "../lib/embedSentences.js"

export const embeddingServices = {
    async embedData(sentences: string[] | string) {
        return embedSentences(sentences)
    }
}