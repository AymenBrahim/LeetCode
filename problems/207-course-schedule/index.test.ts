import { courseSchedule } from "./index";

// You can call courseSchedule here with manual or parsed input.
const testCases = [
  [[2, [[1, 0]]], true],
  [[2, [[0, 1]]], true],

  [
    [
      2,
      [
        [1, 0],
        [0, 1],
      ],
    ],
    false,
  ],
] satisfies [[number, number[][]], boolean][];

describe("testing courseSchedule", () => {
  test.each(testCases)("courseSchedule(%s)", (input, output) => {
    expect(courseSchedule(...input)).toBe(output);
  });
});
