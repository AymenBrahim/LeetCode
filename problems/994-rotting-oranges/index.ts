export function rottingOranges(grid: number[][]): number {
  let iteration = 0;
  let isCooking = true;
  let allRotted = false;
  while (!allRotted && isCooking) {
    allRotted = true;
    isCooking = false;
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        if (grid[row][col] === 3) {
          grid[row][col] = 2;
        }

        if (grid[row][col] !== 1) {
          continue;
        }

        allRotted = false;
        if (
          (row - 1 >= 0 && grid[row - 1][col] === 2) ||
          (row + 1 < grid.length &&
            (grid[row + 1][col] === 2 || grid[row + 1][col] === 3)) ||
          (col - 1 >= 0 && grid[row][col - 1] === 2) ||
          (col + 1 < grid[0].length &&
            (grid[row][col + 1] === 2 || grid[row][col + 1] === 3))
        ) {
          isCooking = true;
          grid[row][col] = 3;
        }
      }
    }

    if (isCooking) {
      iteration++;
    }
  }

  if (!allRotted) {
    return -1;
  }

  return iteration;
}
