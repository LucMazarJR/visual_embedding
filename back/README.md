# Backend - Sentence Space

API em Node.js + Express responsavel por gerar embeddings de frases, reduzir para 2D com UMAP e retornar os pontos normalizados para visualizacao.

## Tecnologias

- Node.js 20
- Express 5
- TypeScript
- Google GenAI SDK
- umap-js

## Requisitos

- Node.js 20+
- npm
- chave de API do Gemini

## Configuracao

Crie um arquivo `.env` nesta pasta com:

```env
GEMINI_API_KEY=sua_chave_aqui
```

## Executar em desenvolvimento

```bash
npm install
npm run dev
```

API disponivel em `http://localhost:3001`.

## Scripts

- `npm run dev`: executa com watch usando tsx
- `npm run build`: compila TypeScript para `dist`
- `npm run start`: executa build compilada

## Endpoints

- `GET /`: health check basico
- `POST /api/embedding/process`: recebe frases e retorna pares `[x, y]`

### Exemplo de requisicao

```json
{
  "sentences": [
    "gato dormindo no sofa",
    "felino descansando no sofa",
    "chuva forte no fim da tarde"
  ]
}
```

### Exemplo de resposta

```json
[
  [0.41, 0.17],
  [0.37, 0.22],
  [-0.78, -0.35]
]
```

## Regras importantes

- A API aceita de 3 a 10 frases por requisicao.
- Frases duplicadas (considerando espacos e caixa) compartilham o mesmo ponto.
- Para conjuntos muito pequenos, o servico aplica um layout simples para manter estabilidade visual.
