export function permutations(nums: number[]): number[][] {
  const result: number[][] = [];

  getPermutations([], nums, result);

  return result;
}

function getPermutations(
  combination: number[],
  nums: number[],
  result: number[][]
) {
  if (nums.length === 0) {
    result.push(combination);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    getPermutations(
      [...combination, nums[i]],
      nums.slice(0, i).concat(nums.slice(i + 1)),
      result
    );
  }
}
