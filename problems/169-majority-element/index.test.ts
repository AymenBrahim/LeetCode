import { majorityElement } from "./index";

// You can call majorityElement here with manual or parsed input.
const testCases = [
  [[3, 2, 3], 3],
  [[2, 2, 1, 1, 1, 2, 2], 2],
  [[1], 1],
] as const;

describe("testing majorityElement", () => {
  test.each(testCases)("majorityElement(%s)", (input, output) => {
    expect(majorityElement([...input])).toBe(output);
  });
});
