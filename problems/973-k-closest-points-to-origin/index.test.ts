import { kClosestPointsToOrigin } from "./index";

// You can call kClosestPointsToOrigin here with manual or parsed input.
const testCases = [
  [
    [
      [
        [1, 3],
        [-2, 2],
      ],
      1,
    ],
    [[-2, 2]],
  ],
  [
    [
      [
        [3, 3],
        [5, -1],
        [-2, 4],
      ],
      2,
    ],
    [
      [3, 3],
      [-2, 4],
    ],
  ],
] satisfies [[[number, number][], number], [number, number][]][];

describe("testing kClosestPointsToOrigin", () => {
  test.each(testCases)("kClosestPointsToOrigin(%s)", (input, output) => {
    expect(kClosestPointsToOrigin(...input).toString()).toBe(output.toString());
  });
});
