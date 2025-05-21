import { Matrix } from "./index";

// You can call Matrix here with manual or parsed input.
const testCases: [number[][], number[][]][] = [
  [
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
  ],
  [
    [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ],
    [
      [0, 0, 0],
      [0, 1, 0],
      [1, 2, 1],
    ],
  ],
  [
    [[0], [1]],
    [[0], [1]],
  ],
];

describe("testing Matrix", () => {
  test.each(testCases)("Matrix(%s)", (input, output) => {
    expect(Matrix(input).toString()).toBe(output.toString());
  });
});
