export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  candidates = candidates.sort((a, b) => a - b);
  const combinations = new Array<number[][]>(target + 1).fill([]);
  const keys = new Array<string[]>(target + 1).fill([]);

  const visited = new Set<string>();
  const visitedBaseString = candidates
    .reduce((acc, curr) => acc + "0_", "")
    .substring(0, candidates.length * 2 - 1);

  for (let i = 0; i < candidates.length; i++) {
    const key = increaseCandidateCount(i, visitedBaseString);
    visited.add(key);
    keys[candidates[i]] = [key];
    combinations[candidates[i]] = [[candidates[i]]];
  }

  for (let i = 0; i <= target; i++) {
    if (combinations[i].length === 0) {
      continue;
    }

    for (
      let candidateIndex = 0;
      candidateIndex < candidates.length;
      candidateIndex++
    ) {
      const candidate = candidates[candidateIndex];
      if (i + candidate > target) {
        continue;
      }

      const newCombinations: number[][] = [];
      const newKeys = [];
      for (let j = 0; j < keys[i].length; j++) {
        const key = keys[i][j];
        const newKey = increaseCandidateCount(candidateIndex, key);
        if (visited.has(newKey)) {
          continue;
        }
        newKeys.push(newKey);
        newCombinations.push([...combinations[i][j]!, candidate]);
        visited.add(newKey);
      }

      combinations[i + candidate] =
        combinations[i + candidate].concat(newCombinations);
      keys[i + candidate] = keys[i + candidate].concat(newKeys);
    }
  }
  return combinations[target];
}

function increaseCandidateCount(index: number, key: string) {
  let pos = 0;
  while (index > 0) {
    if (key[pos] === "_") {
      index--;
    }
    pos++;
  }
  const endIndex = key.indexOf("_", pos);
  const count = Number(
    key.substring(pos, endIndex === -1 ? key.length : endIndex)
  );
  return (
    key.substring(0, pos) +
    (count + 1) +
    key.substring(endIndex === -1 ? key.length : endIndex)
  );
}
