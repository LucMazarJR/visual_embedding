import { PCA } from "ml-pca";

export function applyPCA(
  embeddings: number[][],
  nComponents: number = 2
): number[][] {
  if (!embeddings.length) {
    throw new Error("Embeddings vazio");
  }

  const pca = new PCA(embeddings, {
    center: true,   // centraliza (importantíssimo)
    scale: false,   // geralmente não precisa escalar embedding
  });

  const reduced = pca.predict(embeddings, {
    nComponents,
  });

  return reduced.to2DArray();
}