import { coinChange } from "./index";

// You can call coinChange here with manual or parsed input.
const testCases = [
  [[[1, 2, 5], 11], 3],
  [[[2], 3], -1],
  [[[1], 0], 0],
  [[[186, 419, 83, 408], 6249], 20],
] satisfies [[number[], number], number][];

describe("testing coinChange", () => {
  test.each(testCases)("coinChange(%s)", (input, output) => {
    expect(coinChange(...input)).toBe(output);
  });
});
