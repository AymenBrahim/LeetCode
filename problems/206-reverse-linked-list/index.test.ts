import { reverseList } from "./index";
import {
  areArraysEqual,
  createArrayFromListNode,
  createLinkedList,
  ListNode,
} from "$/utils";
// You can call reverseLinkedList here with manual or parsed input.
const testCases = [
  [createLinkedList([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]],
  [createLinkedList([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]],
] as const;

describe("testing reverseLinkedList", () => {
  test.each(testCases)("reverseLinkedList(%s)", (input, output) => {
    const reverseListNode = reverseList(input as ListNode<number>);
    const reverseListNodeList = createArrayFromListNode(reverseListNode);
    expect(areArraysEqual(reverseListNodeList, output)).toBe(true);
  });
});
