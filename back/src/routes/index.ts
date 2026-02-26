import { Router } from "express";

import embedRoutes from "./embedding.routes.js"

const router = Router()

router.use("/embedding", embedRoutes)

export default router