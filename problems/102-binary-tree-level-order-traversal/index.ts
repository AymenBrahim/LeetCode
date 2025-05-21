import { TreeNode } from "$/utils";

export function binaryTreeLevelOrderTraversal(
  root: TreeNode | null
): number[][] {
  // TODO: Implement

  let queue = [];
  let nextQueue = [root];
  const result = [];

  while (nextQueue.length) {
    queue = [...nextQueue];
    nextQueue = [];
    const row: number[] = [];
    while (queue.length) {
      const node = queue.pop();
      if (!node) {
        continue;
      }
      row.push(node.val!);
      nextQueue.unshift(node.right, node.left);
    }
    if (row.length) {
      result.push(row);
    }
  }
  return result;
}
