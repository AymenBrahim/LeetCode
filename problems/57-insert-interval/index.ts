export function insertInterval(
  intervals: number[][],
  newInterval: number[]
): number[][] {
  if (!intervals.length) {
    return [newInterval];
  }
  let [start, end] = newInterval;

  const isFound = (index: number, intervalType: "start" | "end") => {
    const ref = intervalType === "start" ? start : end;
    const i = intervalType === "start" ? 0 : 1;

    const isAtTail = (index: number) => {
      return index === 0 && ref <= intervals[index][i];
    };

    const isAtBody = (index: number) => {
      return ref <= intervals[index][i] && ref >= intervals[index - 1][i];
    };

    const isAtHead = (index: number) => {
      return index === intervals.length - 1 && ref >= intervals[index][i];
    };

    return isAtTail(index) || isAtHead(index) || isAtBody(index);
  };

  const removeLeftSide = (index: number, intervalType: "start" | "end") => {
    const ref = intervalType === "start" ? start : end;
    const i = intervalType === "start" ? 0 : 1;
    return (
      ref > intervals[index][i] &&
      (index === 0 || ref >= intervals[index - 1][i])
    );
  };

  const removeRightSide = (index: number, intervalType: "start" | "end") => {
    const ref = intervalType === "start" ? start : end;
    const i = intervalType === "start" ? 0 : 1;
    return (
      ref < intervals[index][i] &&
      (index === 0 || ref <= intervals[index - 1][i])
    );
  };

  let startIndex = binarySearch(
    (index) => isFound(index, "start"),
    (index) => removeLeftSide(index, "start"),
    (index) => removeRightSide(index, "start"),
    intervals.length
  );

  let endIndex = binarySearch(
    (index) => isFound(index, "end"),
    (index) => removeLeftSide(index, "end"),
    (index) => removeRightSide(index, "end"),
    intervals.length
  );

  if (endIndex < intervals.length - 1 && intervals[endIndex + 1][0] <= end) {
    endIndex++;
  }
  if (startIndex > 0 && intervals[startIndex - 1][1] >= start) {
    startIndex--;
  }

  const intervalsToRemove = intervals.slice(startIndex, endIndex + 1);
  const firstInterval = intervalsToRemove[0];
  const lastInterval = intervalsToRemove[intervalsToRemove.length - 1];

  let results = [[start, end]];
  let removedItems = 0;

  if (firstInterval[1] >= start) {
    results[0][0] = Math.min(firstInterval[0], start);
  } else {
    results = [firstInterval, ...results];
    removedItems++;
  }

  if (lastInterval[0] <= end) {
    results[results.length - 1][1] = Math.max(end, lastInterval[1]);
  } else {
    results.push(lastInterval);
  }

  intervals.splice(startIndex, endIndex - startIndex + 1, ...results);

  return intervals;
}

function binarySearch(
  isMiddle: (index: number) => boolean,
  removeLeftSide: (index: number) => boolean,
  removeRightSide: (index: number) => boolean,
  length: number
) {
  let left = 0;
  let right = length - 1;
  let middle = Math.ceil((right + left) / 2);
  while (right >= left) {
    if (isMiddle(middle)) {
      return middle;
    }

    if (removeRightSide(middle)) {
      right = middle - 1;
      middle = Math.ceil((left + right) / 2);
    } else if (removeLeftSide(middle)) {
      left = middle + 1;
      middle = Math.ceil((left + right) / 2);
    }
  }

  return -1;
}
