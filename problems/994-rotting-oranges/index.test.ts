import { rottingOranges } from "./index";

// You can call rottingOranges here with manual or parsed input.
const testCases = [
  [
    [
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1],
    ],
    4,
  ],
  [
    [
      [2, 1, 1],
      [0, 1, 1],
      [1, 0, 1],
    ],
    -1,
  ],
  [
    [
      [2, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    58,
  ],
] satisfies [number[][], number][];

describe("testing rottingOranges", () => {
  test.each(testCases)("rottingOranges(%s)", (input, output) => {
    expect(rottingOranges(input)).toBe(output);
  });
});
