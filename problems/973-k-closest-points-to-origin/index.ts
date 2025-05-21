export function kClosestPointsToOrigin(
  points: number[][],
  k: number
): number[][] {
  points.sort(
    ([xa, ya], [xb, yb]) =>
      Math.sqrt(xa ** 2 + ya ** 2) - Math.sqrt(xb ** 2 + yb ** 2)
  );
  return points.slice(0, k);
}
