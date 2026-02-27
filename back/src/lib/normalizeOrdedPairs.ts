export function normalize(points: [number, number][]): [number, number][] {
    //Throw error

    const xs = points.map(p => p[0])
    const ys = points.map(p => p[1])

    const minX = Math.min(...xs)
    const maxX = Math.max(...xs)
    const minY = Math.min(...ys)
    const maxY = Math.max(...ys)

    return points.map(([x, y]) => [
        (x - minX) / (maxX - minX || 1),
        (y - minY) / (maxY - minY || 1)
    ])
}