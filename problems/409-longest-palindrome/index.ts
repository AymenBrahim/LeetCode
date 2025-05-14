export function longestPalindrome(s: string): number {
  const letters = Array.from({ length: 52 }, () => 0);
  for (let i = 0; i < s.length; i++) {
    letters[getLetterIndex(s.charCodeAt(i))] += 1;
  }
  let totalCount = 0;
  let odd = 0;
  letters.map((letterCount) => {
    totalCount += letterCount & ~1;
    if (!odd && letterCount & 1) {
      odd++;
      totalCount++;
    }
  });

  return totalCount;
}

function getLetterIndex(n: number) {
  if (n < 91) {
    return n - 65;
  } else {
    return n - 71;
  }
}
