import { numberOfIslands } from "./index";

// You can call numberOfIslands here with manual or parsed input.
const testCases = [
  /* [
    [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ],
    1,
  ],
  [
    [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ],
    3,
  ], */
  [
    [
      ["0", "1", "0"],
      ["1", "0", "1"],
      ["0", "1", "0"],
    ],
    4,
  ],
] satisfies [string[][], number][];

describe("testing numberOfIslands", () => {
  test.each(testCases)("numberOfIslands(%s)", (input, output) => {
    expect(numberOfIslands(input)).toBe(output);
  });
});
