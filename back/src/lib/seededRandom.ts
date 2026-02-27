export const seededRandom = (seed: number) => {
  let value = seed
  return function() {
    value = (value * 16807) % 2147483647
    return (value - 1) / 2147483646
  }
}