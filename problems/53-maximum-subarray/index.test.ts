import { maximumSubarray } from "./index";

// You can call maximumSubarray here with manual or parsed input.
const testCases = [
  [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6],
  [[1], 1],
  [[5, 4, -1, 7, 8], 23],
  [[1, 2], 3],
  [[-1, -2], -1],
  [[-1, 0, -2], 0],
] as const;

describe("testing maximumSubarray", () => {
  test.each(testCases)("maximumSubarray(%s)", (input, output) => {
    expect(maximumSubarray([...input])).toBe(output);
  });
});
