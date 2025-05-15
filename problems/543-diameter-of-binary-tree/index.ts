/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "$/utils";

export function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let maxDepth = 0;

  function getDiameter(root: TreeNode | null, depth: number): number {
    if (!root) {
      return depth - 1;
    }

    const leftBranch = getDiameter(root.left, depth + 1);
    const rightBranch = getDiameter(root.right, depth + 1);
    if (leftBranch + rightBranch - depth > depth) {
      maxDepth = Math.max(maxDepth, leftBranch + rightBranch - depth * 2);
    }
    return Math.max(leftBranch, rightBranch);
  }

  return Math.max(
    getDiameter(root.left, 1) + getDiameter(root.right, 1),
    maxDepth
  );
}
