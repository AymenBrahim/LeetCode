import { Action, minStack, Output } from "./index";

// You can call minStack here with manual or parsed input.
const testCases = [
  [
    [
      ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"],
      [[], [-2], [0], [-3], [], [], [], []],
    ],
    [null, null, null, null, -3, null, 0, -2],
  ],
] satisfies [[Action[], number[][]], Output[]][];

describe("testing minStack", () => {
  test.each(testCases)("minStack(%s)", (input, output) => {
    expect(minStack(...input)).toStrictEqual(output);
  });
});
