export function majorityElement(nums: number[]): number {
  const dict: Record<number, number> = {};
  const target = nums.length / 2;
  while (nums.length) {
    const num = nums.pop()!;
    if (!dict[num]) {
      dict[num] = 1;
    } else {
      dict[num]++;
    }
    if (dict[num] > target) {
      return num;
    }
  }

  return -1;
}
