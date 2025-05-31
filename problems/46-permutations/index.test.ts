import { permutations } from "./index";

// You can call permutations here with manual or parsed input.
const testCases = [
  [
    [1, 2, 3],
    [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ],
  ],
] satisfies [number[], number[][]][];

describe("testing permutations", () => {
  test.each(testCases)("permutations(%s)", (input, output) => {
    expect(permutations(input)).toStrictEqual(output);
  });
});
