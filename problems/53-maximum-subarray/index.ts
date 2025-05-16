import { betweenInc } from "$/utils";

export function maximumSubarray(nums: number[]): number {
  let maxSum = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (sum + nums[i] <= nums[i]) {
      sum = nums[i];
      maxSum = Math.max(sum, maxSum);
      continue;
    }
    sum += nums[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  if (sum > maxSum) {
    maxSum = sum;
  }
  return maxSum;
}

function getMaxSum(
  nums: number[],
  index: number,
  currentSum: number,
  maxSum: number
): number {
  if (index === nums.length) {
    return maxSum;
  }

  currentSum = Math.max(nums[index], currentSum + nums[index]);
  maxSum = Math.max(maxSum, currentSum);

  return getMaxSum(nums, index + 1, currentSum, maxSum);
}
