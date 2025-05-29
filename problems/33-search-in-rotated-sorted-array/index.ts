export function searchInRotatedSortedArray(
  nums: number[],
  target: number
): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const middle = Math.ceil((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    }
    const isRotated = nums[left] > nums[right];
    if (!isRotated) {
      if (nums[middle] > target) {
        right = middle - 1;
        continue;
      }

      left = middle + 1;
      continue;
    }

    const isRightCenteredRotation = nums[middle] > nums[right];
    const isLeftCenteredRotation = nums[left] > nums[middle];

    if (nums[middle] > target) {
      if (isRightCenteredRotation) {
        if (nums[left] > target) {
          left = middle + 1;
          continue;
        }
      }

      right = middle - 1;
      continue;
    }

    if (isLeftCenteredRotation) {
      if (nums[right] < target) {
        right = middle - 1;
        continue;
      }
    }
    left = middle + 1;
  }

  return -1;
}
