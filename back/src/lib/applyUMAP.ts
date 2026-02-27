import { UMAP } from 'umap-js';
import { cosine, type Vectors } from 'umap-js/dist/umap.js';

function l2Normalize(vec: number[]) {
  const s = Math.sqrt(vec.reduce((a,b)=>a+b*b, 0));
  return s === 0 ? vec.map(()=>0) : vec.map(v=>v/s);
}

function chooseNNeighbors(nSamples: number) {
  if (nSamples <= 3) return 2;
  if (nSamples <= 6) return 3;
  if (nSamples <= 10) return 4;
  // para datasets maiores, usa regra sqrt e força um mínimo
  const v = Math.round(Math.sqrt(nSamples));
  return Math.max(10, Math.min(v, 100)); // entre 10 e 100
}

export const applyUmap = (data: Vectors) => {
  try {
    const n_samples = data.length;
    const normed = data.map(l2Normalize);
    const n_neighbors = chooseNNeighbors(n_samples);

    const umap = new UMAP({
      nNeighbors: n_neighbors,
      minDist: 0.4,
      distanceFn: cosine
    });

    const nEpochs = umap.initializeFit(normed);
    for (let i = 0; i < nEpochs; i++) umap.step();

    return umap.getEmbedding();
  } catch (e) {
    console.error("Error applying UMAP:", e);
    return null;
  }
}