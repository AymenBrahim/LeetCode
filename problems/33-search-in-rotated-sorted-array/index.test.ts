import { searchInRotatedSortedArray } from "./index";

// You can call searchInRotatedSortedArray here with manual or parsed input.
const testCases = [
  [[[4, 5, 6, 7, 0, 1, 2], 0], 4],
  [[[4, 5, 6, 7, 0, 1, 2], 3], -1],
  [[[1], 0], -1],
  [[[3, 5, 1], 3], 0],
  [[[7, 8, 1, 2, 3, 4, 5, 6], 2], 3],
  [[[2, 3, 4, 5, 6, 7, 8, 9, 1], 9], 7],
] satisfies [[number[], number], number][];

describe("testing searchInRotatedSortedArray", () => {
  test.each(testCases)("searchInRotatedSortedArray(%s)", (input, output) => {
    expect(searchInRotatedSortedArray(...input)).toBe(output);
  });
});
