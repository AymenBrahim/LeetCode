import { longestSubstringWithoutRepeatingCharacters } from "./index";

// You can call longestSubstringWithoutRepeatingCharacters here with manual or parsed input.
const testCases = [
  ["abcabcbb", 3],
  ["bbbbb", 1],
  ["pwwkew", 3],
] satisfies [string, number][];

describe("testing longestSubstringWithoutRepeatingCharacters", () => {
  test.each(testCases)(
    "longestSubstringWithoutRepeatingCharacters(%s)",
    (input, output) => {
      expect(longestSubstringWithoutRepeatingCharacters(input)).toBe(output);
    }
  );
});
