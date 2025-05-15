export function addBinary(a: string, b: string): string {
  return add(a, b, "0");
}

function add(a: string, b: string, carry: Bit): string {
  console.log(a, b, carry);
  if (!a.length && !b.length) {
    return carry === "1" ? "1" : "";
  }

  if (a.length === 0) {
    return add(b, carry, "0");
  }

  if (b.length === 0) {
    return add(a, carry, "0");
  }

  const bit1 = a[a.length - 1];
  const bit2 = b[b.length - 1];

  if (bit1 === bit2) {
    if (bit1 === "1") {
      return (
        add(a.substring(0, a.length - 1), b.substring(0, b.length - 1), "1") +
        carry
      );
    }

    return (
      add(a.substring(0, a.length - 1), b.substring(0, b.length - 1), "0") +
      carry
    );
  }

  return (
    add(a.substring(0, a.length - 1), b.substring(0, b.length - 1), carry) +
    NOT(carry)
  );
}

type Bit = "1" | "0";
function NOT(a: Bit) {
  if (a === "0") {
    return "1";
  }
  return "0";
}
