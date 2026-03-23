import 'dotenv/config'
import express from "express"
import cors from "cors"
import routes from "./routes/index.js"

const app = express()
const port = Number(process.env.PORT ?? 3001)

const defaultOrigins = [
  "http://localhost:3000",
  "http://localhost:3001"
]

const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(",")
      .map((origin) => origin.trim())
      .filter(Boolean)
  : defaultOrigins

app.use(express.json())
app.use(cors({
  origin(origin, callback) {
    // Permite requests sem origin (health checks/server-to-server)
    if (!origin) return callback(null, true)
    if (allowedOrigins.includes(origin)) return callback(null, true)
    return callback(new Error("Not allowed by CORS"))
  }
}))

app.get('/', (req, res) => {
  res.send({
    "status": "ok",
    "message": "API running",
    "timestamp": "2026-02-26T20:15:00Z"
  })
})

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`)
})
