import { GoogleGenAI } from "@google/genai";

if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not defined');
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY});

export async function embedSentences(sentences: string[] | string) {
    const result = await ai.models.embedContent({
        model: 'gemini-embedding-001',
        contents: sentences,
        config: { taskType: 'SEMANTIC_SIMILARITY', outputDimensionality: 768 },
    });

    return result
}

