# Visual Embedding - Sentence Space

Projeto full stack para explorar proximidade semantica entre frases.

O frontend envia frases para o backend, que gera embeddings com Gemini, aplica reducao de dimensionalidade com UMAP e devolve coordenadas 2D para visualizacao em grafico de dispersao.

## Estrutura

- `front/`: interface em Next.js
- `back/`: API em Express + TypeScript
- `docker-compose.yml`: orquestracao de frontend e backend em dev

## Requisitos

- Node.js 20+
- npm
- Docker e Docker Compose (opcional)

## Execucao local (sem Docker)

1. Backend:

```bash
cd back
npm install
npm run dev
```

2. Frontend (novo terminal):

```bash
cd front
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Variaveis de ambiente

### Backend (`back/.env`)

```env
GEMINI_API_KEY=sua_chave_aqui
```

### Frontend (`front/.env`)

```env
NEXT_PUBLIC_BASE_API_URL=http://localhost:3001
```

## Execucao com Docker Compose

Na raiz do projeto:

```bash
docker compose up --build
```

Servicos esperados:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:3001`

## Fluxo da aplicacao

1. Usuario informa de 3 a 10 frases no workspace.
2. Frontend envia `POST /api/embedding/process`.
3. Backend gera embeddings e aplica UMAP em 2D.
4. Coordenadas sao normalizadas para uma escala consistente.
5. Frontend renderiza os pontos no plano cartesiano.
