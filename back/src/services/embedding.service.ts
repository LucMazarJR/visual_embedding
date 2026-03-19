import { applyUmap } from "../lib/applyUMAP.js"
import { embedSentences } from "../lib/embedSentences.js"
import { normalize } from "../lib/normalizeOrdedPairs.js"

type Point2D = [number, number]

function canonicalSentence(input: string) {
  return input.trim().replace(/\s+/g, " ").toLowerCase()
}

function placeTinySet(size: number): Point2D[] {
  if (size <= 0) return []
  if (size === 1) return [[0, 0]]
  if (size === 2) return [[-0.6, 0], [0.6, 0]]
  return []
}

export const embeddingServices = {
  async embedData(sentences: string[] | string) {
    const sentenceList = Array.isArray(sentences) ? sentences : [sentences]
    const entries = sentenceList.map((sentence, index) => ({
      index,
      original: sentence,
      key: canonicalSentence(sentence)
    }))

    const uniqueKeys = [...new Set(entries.map((entry) => entry.key))]
    const keyToFirstSentence = new Map<string, string>()
    for (const entry of entries) {
      if (!keyToFirstSentence.has(entry.key)) keyToFirstSentence.set(entry.key, entry.original)
    }

    const uniqueSentences = uniqueKeys.map((key) => keyToFirstSentence.get(key) || key)
    const tinyLayout = placeTinySet(uniqueSentences.length)

    let uniquePoints: Point2D[]
    if (tinyLayout.length > 0) {
      uniquePoints = tinyLayout
    } else {
      const result = await embedSentences(uniqueSentences)
      const embeddings = result.embeddings
        ?.map((vector) => vector.values)
        .filter((v): v is number[] => v !== undefined) || []

      if (embeddings.length !== uniqueSentences.length) {
        throw new Error("Falha ao gerar embeddings para todas as sentencas unicas")
      }

      const reducedData = applyUmap(embeddings)
      if (!reducedData) {
        throw new Error("Falha ao aplicar UMAP")
      }

      uniquePoints = normalize(reducedData as Point2D[])
    }

    const pointByKey = new Map<string, Point2D>()
    uniqueKeys.forEach((key, i) => {
      pointByKey.set(key, uniquePoints[i] ?? [0, 0])
    })

    return entries.map((entry) => pointByKey.get(entry.key) || [0, 0])
  }
}