import 'dotenv/config'
import express from "express"
import routes from "./routes/index.js"

const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send({
    "status": "ok",
    "message": "API running",
    "timestamp": "2026-02-26T20:15:00Z"
  })
})

app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`)
})

app.use('/api', routes);
