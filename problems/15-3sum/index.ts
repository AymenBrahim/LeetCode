export function sum(nums: number[]): number[][] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], [...map.get(nums[i]), i]);
    } else {
      map.set(nums[i], [i]);
    }
  }
  const triplets = [];
  const record = new Set<string>();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const mirrotSum = (nums[i] + nums[j]) * -1;
      if (!map.has(mirrotSum)) {
        continue;
      }
      const indexes = map.get(mirrotSum);

      if (indexes[indexes.length - 1] <= j) {
        continue;
      }

      if (mirrotSum === 0 && nums[i] === 0 && indexes.length < 3) {
        continue;
      }

      if (
        (nums[i] === mirrotSum || nums[j] === mirrotSum) &&
        indexes.length < 2
      ) {
        continue;
      }

      if (isTripletAlreadyFound(record, [nums[i], nums[j], mirrotSum])) {
        continue;
      }

      record.add(`${nums[i]}_${nums[j]}_${mirrotSum}`);
      triplets.push([nums[i], nums[j], mirrotSum]);
    }
  }

  return triplets;
}

function isTripletAlreadyFound(
  record: Set<string>,
  indexes: [number, number, number]
) {
  const [i, j, k] = indexes;

  return (
    record.has(`${i}_${j}_${k}`) ||
    record.has(`${i}_${k}_${j}`) ||
    record.has(`${j}_${i}_${k}`) ||
    record.has(`${j}_${k}_${i}`) ||
    record.has(`${k}_${j}_${i}`) ||
    record.has(`${k}_${i}_${j}`)
  );
}
