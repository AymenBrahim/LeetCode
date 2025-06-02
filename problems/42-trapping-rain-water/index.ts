export function trappingRainWater(height: number[]): number {
  if (height.length < 2) {
    return 0;
  }

  let firstPillar = 0;
  let trappedRainWater = 0;
  while (firstPillar < height.length - 1) {
    const secondPillar = getNextPillar(firstPillar, height);
    trappedRainWater += calculateWaterVolume(firstPillar, secondPillar, height);
    firstPillar = secondPillar;
  }

  return trappedRainWater;
}
function getNextPillar(startIndex: number, height: number[]) {
  let endIndex = startIndex + 1;
  let highestPillarIndex = endIndex;
  while (endIndex < height.length && height[endIndex] < height[startIndex]) {
    if (height[endIndex] > height[highestPillarIndex]) {
      highestPillarIndex = endIndex;
    }
    endIndex++;
  }
  if (height[endIndex] >= height[startIndex]) {
    return endIndex;
  }
  return highestPillarIndex;
}

function calculateWaterVolume(
  startIndex: number,
  endIndex: number,
  height: number[]
) {
  const maximumWaterHeight = Math.min(height[startIndex], height[endIndex]);
  let waterVolume = 0;
  let index = startIndex + 1;

  while (index < endIndex) {
    waterVolume += maximumWaterHeight - height[index];
    index++;
  }
  return waterVolume;
}
