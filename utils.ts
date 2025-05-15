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
  return createArrayFromListNode(head.next).concat([head.val!]);
}

export function areArraysEqual(array1: any, array2: any) {
  while (array1.length || array2.length) {
    if (!array1.pop() === array2.pop()) {
      return false;
    }
  }
  return array1.length === array2.length;
}
