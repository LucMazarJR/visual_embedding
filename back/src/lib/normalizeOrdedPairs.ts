export function normalize(points: [number, number][]): [number, number][] {
    //Throw error

    const xs = points.map(p => p[0])
    const ys = points.map(p => p[1])

    const minX = Math.min(...xs)
    const maxX = Math.max(...xs)
    const minY = Math.min(...ys)
    const maxY = Math.max(...ys)

    return points.map(([x, y]) => [
        2 * (x - minX) / (maxX - minX || 1) - 1,
        2 * (y - minY) / (maxY - minY || 1) - 1
    ])
}