import { TreeNode } from "$/utils";

export function validateBinarySearchTree(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  return validateBST(root, Infinity, -Infinity);
}

function validateBST(
  root: TreeNode | null,
  leftMax: number,
  rightMin: number
): boolean {
  if (root === null) {
    return true;
  }
  const val = root.val!;

  if (val >= leftMax) {
    return false;
  }

  if (val <= rightMin) {
    return false;
  }

  if (root.left && (root.left.val! >= leftMax || root.left.val! >= val)) {
    return false;
  }

  if (root.right && (root.right.val! <= rightMin || root.right.val! <= val)) {
    return false;
  }

  return (
    validateBST(root.left, val, rightMin) &&
    validateBST(root.right, leftMax, val)
  );
}
