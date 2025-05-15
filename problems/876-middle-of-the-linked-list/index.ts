import { ListNode } from "$/utils";

export function middleOfTheLinkedList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let turtle = head;
  let rabbit: ListNode | null = head;
  while (rabbit && rabbit.next) {
    turtle = turtle!.next!;
    rabbit = rabbit.next?.next ?? null;
  }
  return turtle;
}
