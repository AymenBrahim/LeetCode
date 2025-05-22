export type Operation = "Trie" | "insert" | "search" | "startsWith";
export type Results = (null | boolean)[];
export function implementTriePrefixTree(
  operations: Operation[],
  data: string[][]
) {
  let trie: Trie = new Trie();
  let results: (null | boolean)[] = [];
  for (let index in operations) {
    const operation = operations[index];
    const [word] = data[index];

    switch (operation) {
      case "Trie":
        trie = new Trie();
        results.push(null);
        break;

      case "insert":
        trie.insert(word);
        results.push(null);
        break;

      case "search":
        results.push(trie.search(word));
        break;

      case "startsWith":
        results.push(trie.startsWith(word));
        break;
    }
  }
  return results;
}

class Trie {
  children: (Trie | null)[];
  endOfWord: boolean;

  constructor() {
    this.children = Array.from({ length: 26 }, () => null);
    this.endOfWord = false;
  }

  insert(word: string): void {
    if (!word.length) {
      return;
    }

    if (!this.children[word.charCodeAt(0) - 97]) {
      this.children[word.charCodeAt(0) - 97] = new Trie();
    }

    let pointer = this.children[word.charCodeAt(0) - 97]!;

    for (let i = 1; i < word.length; i++) {
      if (!pointer.children[word.charCodeAt(i) - 97]) {
        pointer.children[word.charCodeAt(i) - 97] = new Trie();
      }
      pointer = pointer.children[word.charCodeAt(i) - 97]!;
    }
    pointer.endOfWord = true;
  }

  search(word: string): boolean {
    if (!word.length) {
      return false;
    }

    if (!this.children[word.charCodeAt(0) - 97]) {
      return false;
    }

    let pointer = this.children[word.charCodeAt(0) - 97]!;

    for (let i = 1; i < word.length; i++) {
      if (!pointer.children[word.charCodeAt(i) - 97]) {
        return false;
      }

      pointer = pointer.children[word.charCodeAt(i) - 97]!;
    }
    return pointer.endOfWord;
  }

  startsWith(prefix: string): boolean {
    if (!prefix.length) {
      return false;
    }

    if (!this.children[prefix.charCodeAt(0) - 97]) {
      return false;
    }

    let pointer = this.children[prefix.charCodeAt(0) - 97]!;

    for (let i = 1; i < prefix.length; i++) {
      if (!pointer.children[prefix.charCodeAt(i) - 97]) {
        return false;
      }

      pointer = pointer.children[prefix.charCodeAt(i) - 97]!;
    }
    return true;
  }
}
