export function Matrix(mat: number[][]): number[][] {
  const queue: [number, number, number][] = [];
  const visited = new Set<string>();

  const m = mat.length;
  const n = mat[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        queue.unshift([i, j, 0]);
        const key = `${i}_${j}`;
        visited.add(key);
      }
    }
  }

  while (queue.length) {
    const [i, j, distance] = queue.pop()!;

    mat[i][j] = distance;
    const adjacentCells = getAdjacentCells(i, j, m, n)
      .filter(([i, j]) => {
        const key = `${i}_${j}`;
        if (visited.has(key)) {
          return false;
        }

        visited.add(key);
        return true;
      })
      .map(([i, j]) => [i, j, distance + 1] satisfies [number, number, number]);
    queue.unshift(...adjacentCells);
  }
  return mat;
}

function getAdjacentCells(
  row: number,
  col: number,
  m: number,
  n: number
): [number, number][] {
  const result = [];
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      if (
        i >= 0 &&
        i < m &&
        j >= 0 &&
        j < n &&
        Math.abs(row - i) + Math.abs(col - j) === 1
      ) {
        result.push([i, j] satisfies [number, number]);
      }
    }
  }

  return result;
}
