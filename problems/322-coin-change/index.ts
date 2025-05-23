export function coinChange(coins: number[], amount: number): number {
  const numberOfCoins = new Array(amount + 1).fill(Infinity);
  numberOfCoins[0] = 0;

  for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
    for (let coin of coins) {
      const numberOfCoinsBeforeAddingThisCoinIndex = currentAmount - coin;
      if (numberOfCoinsBeforeAddingThisCoinIndex >= 0) {
        numberOfCoins[currentAmount] = Math.min(
          numberOfCoins[currentAmount],
          numberOfCoins[numberOfCoinsBeforeAddingThisCoinIndex] + 1
        );
      }
    }
  }

  return numberOfCoins[amount] === Infinity ? -1 : numberOfCoins[amount];
}
