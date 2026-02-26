import { Router } from "express";
import { embeddingCotroller } from "../controllers/embedding.controller.js";

const router = Router()

router.post("/process", embeddingCotroller.reciveSentences)

export default router