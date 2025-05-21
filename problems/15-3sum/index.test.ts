import { sum } from "./index";

// You can call sum here with manual or parsed input.
const testCases = [
  [
    [-1, 0, 1, 2, -1, -4],
    [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  ],
  [[0, 1, 1], []],
  [[0, 0, 0], [[0, 0, 0]]],
] satisfies [number[], [number, number, number][]][];

describe("testing sum", () => {
  test.each(testCases)("sum(%s)", (input, output) => {
    expect(sum(input)).toBe(output);
  });
});
