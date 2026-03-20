import { embeddingServices } from "../services/embedding.service.js"
import type { Request, Response } from "express";
import { AppError } from "../errors/appError.js";

export const embeddingCotroller = {
    async reciveSentences(req: Request, res: Response) {
        try {
            const { sentences } = req.body;

            if (!sentences) {
                throw new AppError("No sentences provided", 422);
            }

            if(sentences.length > 10 || sentences.length < 3){
                throw new AppError("Number of sentences must be between 3 and 10", 422);
            }

            const data = await embeddingServices.embedData(sentences);

            return res.status(200).json(data);

        } catch (e: any) {
            if (e instanceof AppError) {
                return res.status(e.statusCode).json({ error: e.message });
            }

            return res.status(500).json({ error: "Internal server error" });
        }
    }
};