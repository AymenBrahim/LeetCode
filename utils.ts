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
/**
 * Checks if a number is within a given inclusive range.
 *
 * This function takes a number and two boundary values, and determines
 * whether the number lies between the two bounds, including the bounds themselves.
 * The order of `a` and `b` does not matter.
 *
 * @param {number} number - The number to check.
 * @param {number} a - One boundary of the range.
 * @param {number} b - The other boundary of the range.
 * @returns {boolean} Returns `true` if `number` is between `a` and `b` (inclusive), otherwise `false`.
 *
 * @example
 * betweenInc(5, 1, 10); // true
 * betweenInc(1, 1, 10); // true
 * betweenInc(10, 1, 10); // true
 * betweenInc(0, 1, 10); // false
 */
export function betweenInc(number: number, a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return number >= min && number <= max;
}

/**
 * Checks if a number is within a given exclusive range.
 *
 * This function takes a number and two boundary values, and determines
 * whether the number lies strictly between the two bounds (excluding the bounds themselves).
 * The order of `a` and `b` does not matter.
 *
 * @param {number} number - The number to check.
 * @param {number} a - One boundary of the range.
 * @param {number} b - The other boundary of the range.
 * @returns {boolean} Returns `true` if `number` is between `a` and `b` (exclusive), otherwise `false`.
 *
 * @example
 * betweenExc(5, 1, 10); // true
 * betweenExc(1, 1, 10); // false
 * betweenExc(10, 1, 10); // false
 * betweenExc(0, 1, 10); // false
 */
export function betweenExc(number: number, a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return number > min && number < max;
}
