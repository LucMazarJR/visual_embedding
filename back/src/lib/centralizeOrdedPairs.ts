export const center = (points: number[][] | null | undefined): number[][] => {
    if (!points || points.length === 0) return []

    const validPoints = points.filter(
        (p): p is [number, number] =>
            Array.isArray(p) &&
            p.length === 2 &&
            typeof p[0] === "number" &&
            typeof p[1] === "number"
    )

    //Tratamento de erros

    const meanX =
        validPoints.reduce((sum, p) => sum + p[0], 0) / validPoints.length

    const meanY =
        validPoints.reduce((sum, p) => sum + p[1], 0) / validPoints.length

    return validPoints.map(([x, y]) => [
        x - meanX,
        y - meanY
    ])
}
