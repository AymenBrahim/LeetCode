export class ListNode<T = number> {
  val?: T;
  next: ListNode<T> | null;
  constructor(val?: T, next?: ListNode<T> | null) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }
}

export function createLinkedList<T>(array: T[]): ListNode<T> | null {
  if (!array.length) {
    return null;
  }
  const val = array.shift()!;
  return new ListNode(val, createLinkedList<T>(array));
}

export function createArrayFromListNode<T>(head: ListNode<T> | null): T[] {
  if (!head) {
    return [];
  }
  return [head.val!, ...createArrayFromListNode(head.next)];
}

export class TreeNode<T = number> {
  val?: T;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: T, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
export function createTreeNode(values: (number | null)[]): TreeNode | null {
  if (!values.length || values[0] === null) return null;

  const root = new TreeNode(values[0]);
  const queue: (TreeNode | null)[] = [root];
  let index = 1;

  while (queue.length && index < values.length) {
    const node = queue.shift();
    if (!node) continue;

    const leftVal = values[index++];
    if (leftVal !== undefined && leftVal !== null) {
      node.left = new TreeNode(leftVal);
      queue.push(node.left);
    }

    const rightVal = values[index++];
    if (rightVal !== undefined && rightVal !== null) {
      node.right = new TreeNode(rightVal);
      queue.push(node.right);
    }
  }

  return root;
}

export function areArraysEqual(array1: any, array2: any) {
  while (array1.length || array2.length) {
    if (array1.pop() !== array2.pop()) {
      return false;
    }
  }
  return array1.length === array2.length;
}
