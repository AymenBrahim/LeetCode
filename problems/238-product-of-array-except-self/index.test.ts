import { productOfArrayExceptSelf } from "./index";

// You can call productOfArrayExceptSelf here with manual or parsed input.
const testCases = [
  [
    [1, 2, 3, 4],
    [24, 12, 8, 6],
  ],
  [
    [-1, 1, 0, -3, 3],
    [0, 0, 9, 0, 0],
  ],
] as [number[], number[]][];

describe("testing productOfArrayExceptSelf", () => {
  test.each(testCases)("productOfArrayExceptSelf(%s)", (input, output) => {
    expect(productOfArrayExceptSelf(input)).toStrictEqual(output);
  });
});
