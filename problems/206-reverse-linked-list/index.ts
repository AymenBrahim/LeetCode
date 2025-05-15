import { ListNode } from "$/utils";

export function reverseList(
  head: ListNode<number> | null
): ListNode<number> | null {
  if (!head) {
    return null;
  }

  let tail = new ListNode();

  while (head) {
    tail.val = head.val;
    if (head.next) {
      tail = new ListNode(undefined, tail);
    }
    head = head.next;
  }
  return tail;
}
