export function courseSchedule(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  if (prerequisites.length === 0) {
    return true;
  }

  const nodesAdjacency = createNodesAdjacency(prerequisites, numCourses);

  const visited = Array.from({ length: numCourses }, () => false);
  const visiting = Array.from({ length: numCourses }, () => false);
  for (let i = 0; i < numCourses; i++) {
    if (isCyclic(i, nodesAdjacency, visited, visiting)) {
      return false;
    }
  }

  return true;
}

function isCyclic(
  nodeIndex: number,
  nodesAdjacency: number[][],
  visited: boolean[],
  visiting: boolean[]
) {
  if (visiting[nodeIndex]) {
    return true;
  }

  if (visited[nodeIndex]) {
    return false;
  }

  visited[nodeIndex] = true;
  visiting[nodeIndex] = true;
  for (let neighborNodeIndex of nodesAdjacency[nodeIndex]) {
    if (isCyclic(neighborNodeIndex, nodesAdjacency, visited, visiting)) {
      return true;
    }
  }

  visiting[nodeIndex] = false;
  return false;
}

function createNodesAdjacency(prerequisites: number[][], n: number) {
  const result: number[][] = Array.from({ length: n }, () => []);
  for (let [course, prerequisite] of prerequisites) {
    result[course].push(prerequisite);
  }

  return result;
}
