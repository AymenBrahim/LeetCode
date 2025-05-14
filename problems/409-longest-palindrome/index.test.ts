import { longestPalindrome } from "../409-longest-palindrome/index";

// You can call longestPalindrome here with manual or parsed input.
const testCases = [
  ["abccccdd", 7],
  ["a", 1],
] as const;

describe("testing longestPalindrome", () => {
  test.each(testCases)("longestPalindrome(%s)", (input, output) => {
    expect(longestPalindrome(input)).toBe(output);
  });
});
