export type Action = "MinStack" | "push" | "getMin" | "pop" | "top";
export type Output = null | number;
export function minStack(actions: Action[], data: number[][]): Output[] {
  let minStack: MinStack = new MinStack();
  let result: Output[] = [];
  for (let i = 0; i < actions.length; i++) {
    const [entry] = data[i];
    switch (actions[i]) {
      case "MinStack":
        minStack = new MinStack();
        result.push(null);
        break;
      case "pop":
        minStack.pop();
        result.push(null);
        break;
      case "top":
        result.push(minStack.top());
        break;
      case "push":
        minStack.push(entry);
        result.push(null);
        break;
      case "getMin":
        result.push(minStack.getMin());
        break;
    }
  }
  return result;
}

class MinStack {
  private stack: number[];
  private mins: number[];
  constructor() {
    this.stack = [];
    this.mins = [];
  }

  push(val: number): void {
    this.stack.push(val);
    if (this.mins.length) {
      this.mins.push(Math.min(this.mins[this.mins.length - 1], val));
    } else {
      this.mins.push(val);
    }
  }

  pop(): void {
    this.stack.pop();
    this.mins.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.mins[this.mins.length - 1];
  }
}
