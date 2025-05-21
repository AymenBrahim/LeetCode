import { evaluateReversePolishNotation } from "./index";

// You can call evaluateReversePolishNotation here with manual or parsed input.
const testCases = [[["2", "1", "+", "3", "*"], 9]] satisfies [
  string[],
  number
][];

describe("testing evaluateReversePolishNotation", () => {
  test.each(testCases)("evaluateReversePolishNotation(%s)", (input, output) => {
    expect(evaluateReversePolishNotation(input)).toBe(output);
  });
});
