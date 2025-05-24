export function numberOfIslands(grid: string[][]): number {
  const visited = Array.from({ length: grid.length }, () =>
    new Array(grid[0].length).fill(false)
  );

  let islandsCount = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1" && !visited[row][col]) {
        exploreIsland(row, col, grid, visited);
        islandsCount++;
      }
    }
  }

  return islandsCount;
}

function exploreIsland(
  row: number,
  col: number,
  grid: string[][],
  visited: boolean[][]
) {
  if (row >= grid.length || row < 0 || col >= grid[row].length || col < 0) {
    return;
  }

  if (grid[row][col] === "0") {
    return;
  }

  if (visited[row][col]) {
    return;
  }

  visited[row][col] = true;

  exploreIsland(row - 1, col, grid, visited);
  exploreIsland(row + 1, col, grid, visited);
  exploreIsland(row, col - 1, grid, visited);
  exploreIsland(row, col + 1, grid, visited);
}
