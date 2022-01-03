export const lerp = (a, b, n) => {
  return a * (1 - n) + b * n;
}