import { trappingRainWater } from "./index";

// You can call trappingRainWater here with manual or parsed input.
const testCases = [[[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6]] satisfies [
  number[],
  number
][];

describe("testing trappingRainWater", () => {
  test.each(testCases)("trappingRainWater(%s)", (input, output) => {
    expect(trappingRainWater(input)).toBe(output);
  });
});
