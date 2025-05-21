export function longestSubstringWithoutRepeatingCharacters(s: string): number {
  let longestString = "";
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    const index = longestString.indexOf(s[i]);
    if (index === -1) {
      longestString += s[i];
    } else {
      maxLength = Math.max(maxLength, longestString.length);
      longestString = longestString.slice(index + 1) + s[i];
    }
  }
  return Math.max(maxLength, longestString.length);
}
