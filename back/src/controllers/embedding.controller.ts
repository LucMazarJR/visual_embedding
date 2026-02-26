import { embeddingServices } from "../services/embedding.service.js"
import type { Request, Response } from "express";

export const embeddingCotroller = {
    async reciveSentences(req: Request, res: Response){
        try{
            if(!req.params.sentences) throw new Error("no sentences provided")

            const sentences = req.params.sentences
            const data = await embeddingServices.embedData(sentences)
            res.json(data)
        }catch(e){
            res.status(400).send({error: "bad request"})
        }
    }
}