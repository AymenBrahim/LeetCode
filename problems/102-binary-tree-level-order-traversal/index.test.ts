import { createTreeNode } from "$/utils";
import { binaryTreeLevelOrderTraversal } from "./index";

// You can call binaryTreeLevelOrderTraversal here with manual or parsed input.
const testCases = [
  [
    [3, 9, 20, null, null, 15, 7],
    [[3], [9, 20], [15, 7]],
  ],
] satisfies [(number | null)[], number[][]][];

describe("testing binaryTreeLevelOrderTraversal", () => {
  test.each(testCases)("binaryTreeLevelOrderTraversal(%s)", (input, output) => {
    expect(
      binaryTreeLevelOrderTraversal(createTreeNode(input)).toString()
    ).toBe(output.toString());
  });
});
