import { addBinary } from "./index";

// You can call addBinary here with manual or parsed input.
const testCases = [
  [["11", "1"], "100"],
  [["1010", "1011"], "10101"],
  [["110010", "10111"], "1001001"],
] as const;

describe("testing addBinary", () => {
  test.each(testCases)("addBinary(%s)", (input, output) => {
    expect(addBinary(...([...input] as [string, string]))).toBe(output);
  });
});
