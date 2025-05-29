export function productOfArrayExceptSelf(nums: number[]): number[] {
  const leftProduct = new Array(nums.length);
  const rightProduct = new Array(nums.length);
  const result = new Array(nums.length);
  leftProduct[0] = nums[0];
  rightProduct[nums.length - 1] = nums[nums.length - 1];

  for (let i = 1; i < nums.length; i++) {
    leftProduct[i] = leftProduct[i - 1] * nums[i];
    rightProduct[nums.length - 1 - i] =
      rightProduct[nums.length - i] * nums[nums.length - i - 1];
  }

  result[0] = rightProduct[1];
  result[nums.length - 1] = leftProduct[nums.length - 2];
  for (let i = 1; i < nums.length - 1; i++) {
    result[i] = leftProduct[i - 1] * rightProduct[i + 1];
  }
  return result;
}
