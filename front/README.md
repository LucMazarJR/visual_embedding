# Frontend - Sentence Space

Aplicacao web em Next.js para inserir frases, enviar para a API de embeddings e visualizar os pontos em um plano cartesiano 2D.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Recharts
- Tailwind CSS 4

## Requisitos

- Node.js 20+
- npm

## Configuracao

Crie um arquivo `.env` nesta pasta com:

```env
NEXT_PUBLIC_BASE_API_URL=http://localhost:3001
```

## Executar em desenvolvimento

```bash
npm install
npm run dev
```

Aplicacao disponivel em `http://localhost:3000`.

## Scripts

- `npm run dev`: inicia o servidor de desenvolvimento
- `npm run build`: gera build de producao
- `npm run start`: inicia a aplicacao em modo producao
- `npm run lint`: executa ESLint
- `npm run format`: formata o codigo com Prettier

## Estrutura principal

- `app/page.tsx`: landing page
- `app/about/page.tsx`: explicacao do projeto
- `app/workspace/page.tsx`: fluxo de entrada e geracao dos pontos
- `app/_components/cartesian_plane.tsx`: grafico de dispersao
