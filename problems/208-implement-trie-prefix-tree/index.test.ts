import { implementTriePrefixTree, type Operation } from "./index";

// You can call implementTriePrefixTree here with manual or parsed input.
const testCases = [
  [
    [
      ["Trie", "insert", "search", "search", "startsWith", "insert", "search"],
      [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]],
    ],
    [null, null, true, false, true, null, true],
  ],
] satisfies [[Operation[], string[][]], (null | boolean)[]][];

describe("testing implementTriePrefixTree", () => {
  test.each(testCases)("implementTriePrefixTree(%s)", (input, output) => {
    expect(implementTriePrefixTree(...input)).toStrictEqual(output);
  });
});
