import { createTreeNode } from "$/utils";
import { validateBinarySearchTree } from "./index";

// You can call validateBinarySearchTree here with manual or parsed input.
const testCases = [
  [[2, 1, 3], true],
  [[5, 1, 4, null, null, 3, 6], false],
  [[2, 2, 2], false],
  [[5, 4, 6, null, null, 3, 7], false],
  [[3, 1, 5, 0, 2, 4, 6], true],
  [[32, 26, 47, 19, null, null, 56, null, 27], false],
  [[45, 42, null, null, 44, 43, null, 41], false],
] satisfies [(number | null)[], boolean][];

describe("testing validateBinarySearchTree", () => {
  test.each(testCases)("validateBinarySearchTree(%s)", (input, output) => {
    expect(validateBinarySearchTree(createTreeNode(input))).toBe(output);
  });
});
