import { _Node } from "$/utils";

let map: Map<number, _Node | null>;
export function cloneGraph(node: _Node | null): _Node | null {
  map = new Map<number, _Node | null>();
  return deepCopyGraph(node);
}

function deepCopyGraph(node: _Node | null): _Node | null {
  if (node === null) {
    return node;
  }

  const { val, neighbors } = node;

  if (map.has(val)) {
    return map.get(val)!;
  }

  const newNode = new _Node(val);
  map.set(val, newNode);
  newNode.neighbors = node.neighbors.map(
    (neighbor) => deepCopyGraph(neighbor)!
  );
  return newNode;
}
