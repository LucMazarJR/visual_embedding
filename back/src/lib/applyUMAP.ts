import { UMAP } from 'umap-js';
import { cosine, type Vectors } from 'umap-js/dist/umap.js';
import { seededRandom } from './seededRandom.js';

function l2Normalize(vec: number[]) {
  const s = Math.sqrt(vec.reduce((a,b)=>a+b*b, 0));
  return s === 0 ? vec.map(()=>0) : vec.map(v=>v/s);
}

function chooseNNeighbors(nSamples: number) {
  if (nSamples <= 1) return 1;
  const maxAllowed = nSamples - 1;
  const heuristic = nSamples <= 10
    ? Math.round(Math.sqrt(nSamples) * 1.2)
    : Math.round(Math.sqrt(nSamples) * 1.5);
  return Math.max(1, Math.min(heuristic, maxAllowed, 15));
}

function cosineDistanceFromNormalized(a: number[], b: number[]) {
  let dot = 0;
  for (let i = 0; i < a.length; i++) {
    const av = a[i];
    const bv = b[i];
    if (av === undefined || bv === undefined) continue;
    dot += av * bv;
  }
  return 1 - dot;
}

function euclidean2D(a: [number, number], b: [number, number]) {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  return Math.sqrt(dx * dx + dy * dy);
}

function pearsonCorrelation(a: number[], b: number[]) {
  if (a.length !== b.length || a.length === 0) return -Infinity;
  const meanA = a.reduce((acc, v) => acc + v, 0) / a.length;
  const meanB = b.reduce((acc, v) => acc + v, 0) / b.length;

  let numerator = 0;
  let denA = 0;
  let denB = 0;

  for (let i = 0; i < a.length; i++) {
    const av = a[i];
    const bv = b[i];
    if (av === undefined || bv === undefined) continue;

    const da = av - meanA;
    const db = bv - meanB;
    numerator += da * db;
    denA += da * da;
    denB += db * db;
  }

  const denominator = Math.sqrt(denA * denB);
  if (!Number.isFinite(denominator) || denominator === 0) return -Infinity;
  return numerator / denominator;
}

function pairwiseSemanticDistances(normed: number[][]) {
  const distances: number[] = [];
  for (let i = 0; i < normed.length; i++) {
    for (let j = i + 1; j < normed.length; j++) {
      const vi = normed[i];
      const vj = normed[j];
      if (!vi || !vj) continue;
      distances.push(cosineDistanceFromNormalized(vi, vj));
    }
  }
  return distances;
}

function pairwise2DDistances(embedding: [number, number][]) {
  const distances: number[] = [];
  for (let i = 0; i < embedding.length; i++) {
    for (let j = i + 1; j < embedding.length; j++) {
      const pi = embedding[i];
      const pj = embedding[j];
      if (!pi || !pj) continue;
      distances.push(euclidean2D(pi, pj));
    }
  }
  return distances;
}

function runSingleUmap(
  normed: number[][],
  nNeighbors: number,
  seed: number,
  nSamples: number
) {
  const isTinySample = nSamples <= 10;
  const umap = new UMAP({
    nNeighbors,
    nComponents: 2,
    minDist: isTinySample ? 0.05 : 0.0,
    spread: isTinySample ? 1.35 : 1.0,
    setOpMixRatio: isTinySample ? 0.9 : 1.0,
    localConnectivity: isTinySample ? 2 : 1,
    distanceFn: cosine,
    random: seededRandom(seed)
  });

  const nEpochs = umap.initializeFit(normed);
  for (let i = 0; i < nEpochs; i++) umap.step();
  const embedding = umap.getEmbedding();
  return embedding.map((p) => [p[0], p[1]] as [number, number]);
}

export const applyUmap = (data: Vectors)=> {
  try {
    const n_samples = data.length;
    if (n_samples === 0) return [];
    if (n_samples === 1) return [[0, 0]];

    const normed = data.map(l2Normalize);
    const n_neighbors = chooseNNeighbors(n_samples);
    const targetPairwise = pairwiseSemanticDistances(normed);

    // Em amostras pequenas, avaliamos multiplos seeds e escolhemos o melhor
    // embedding pela correlacao com as distancias semanticas originais.
    if (n_samples <= 12) {
      const seeds = [11, 23, 42, 71, 97];
      let bestScore = -Infinity;
      let bestEmbedding: [number, number][] | null = null;

      for (const seed of seeds) {
        const candidate = runSingleUmap(normed, n_neighbors, seed, n_samples);
        const candidatePairwise = pairwise2DDistances(candidate);
        const score = pearsonCorrelation(targetPairwise, candidatePairwise);

        if (score > bestScore) {
          bestScore = score;
          bestEmbedding = candidate;
        }
      }

      return bestEmbedding ?? runSingleUmap(normed, n_neighbors, 42, n_samples);
    }

    return runSingleUmap(normed, n_neighbors, 42, n_samples);
  } catch (e) {
    console.error("Error applying UMAP:", e);
    return null;
  }
}