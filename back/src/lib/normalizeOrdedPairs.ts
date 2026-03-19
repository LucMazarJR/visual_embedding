export function normalize(points: [number, number][]): [number, number][] {
    if (points.length === 0) return []
    if (points.length === 1) return [[0, 0]]

    const centerX = points.reduce((acc, [x]) => acc + x, 0) / points.length
    const centerY = points.reduce((acc, [, y]) => acc + y, 0) / points.length

    const centered = points.map(([x, y]) => [x - centerX, y - centerY] as [number, number])
    const maxRadius = Math.max(
        ...centered.map(([x, y]) => Math.sqrt(x * x + y * y))
    )

    if (!Number.isFinite(maxRadius) || maxRadius === 0) {
        return centered.map(() => [0, 0])
    }

    return centered.map(([x, y]) => [x / maxRadius, y / maxRadius])
}