export function evaluateReversePolishNotation(tokens: string[]): number {
  const operandStack: number[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    switch (token) {
      case "+":
        {
          const op2 = Number(operandStack.pop());
          const op1 = Number(operandStack.pop());
          operandStack.push(op1 + op2);
        }
        break;
      case "-":
        {
          const op2 = Number(operandStack.pop());
          const op1 = Number(operandStack.pop());
          operandStack.push(op1 - op2);
        }
        break;
      case "*":
        {
          const op2 = Number(operandStack.pop());
          const op1 = Number(operandStack.pop());
          operandStack.push(op1 * op2);
        }
        break;
      case "/":
        {
          const op2 = Number(operandStack.pop());
          const op1 = Number(operandStack.pop());
          operandStack.push(Math.trunc(op1 / op2));
        }
        break;
      default:
        operandStack.push(Number(token));
        break;
    }
  }
  return operandStack.pop()!;
}
