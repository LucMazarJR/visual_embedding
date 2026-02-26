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