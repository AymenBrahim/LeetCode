import {
  areArraysEqual,
  createArrayFromListNode,
  createLinkedList,
} from "$/utils";
import { middleOfTheLinkedList } from "./index";

// You can call middleOfTheLinkedList here with manual or parsed input.
const testCases = [
  [
    [1, 2, 3, 4, 5],
    [3, 4, 5],
  ],
  [
    [1, 2, 3, 4],
    [3, 4],
  ],
] as const;

describe("testing middleOfTheLinkedList", () => {
  test.each(testCases)("middleOfTheLinkedList(%s)", (input, output) => {
    console.log(
      createArrayFromListNode(
        middleOfTheLinkedList(createLinkedList([...input]))
      )
    );
    expect(
      areArraysEqual(
        createArrayFromListNode(
          middleOfTheLinkedList(createLinkedList([...input]))
        ),
        output
      )
    ).toBe(true);
  });
});
