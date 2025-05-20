import { insertInterval } from "./index";

// You can call insertInterval here with manual or parsed input.
const testCases: [[number[][], [number, number]], number[][]][] = [
  [
    [
      [
        [1, 3],
        [6, 9],
      ],
      [2, 5],
    ],
    [
      [1, 5],
      [6, 9],
    ],
  ],
  [
    [
      [
        [3, 4],
        [6, 9],
      ],
      [0, 11],
    ],
    [[0, 11]],
  ],
  [
    [
      [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
      [4, 8],
    ],
    [
      [1, 2],
      [3, 10],
      [12, 16],
    ],
  ],
  [[[[1, 5]], [2, 7]], [[1, 7]]],
  [
    [[[1, 5]], [6, 8]],
    [
      [1, 5],
      [6, 8],
    ],
  ],
  [
    [
      [
        [1, 5],
        [6, 8],
      ],
      [5, 6],
    ],
    [[1, 8]],
  ],
];

describe("testing insertInterval", () => {
  test.each(testCases)("insertInterval(%s)", (input, output) => {
    expect(insertInterval(...input).toString()).toBe(output.toString());
  });
});
