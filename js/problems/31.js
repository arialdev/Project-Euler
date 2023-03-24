export const ex31 = (value = 200) => {
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];
  let result = 0;
  for (let i = coins.length; i > 0; i--) {
    result += recursiveAux(0, coins.slice(0, i), value)
  }
  return result;
};

const recursiveAux = (acc, coins, value) => {
  acc += coins.at(-1);
  if (acc === value) return 1;
  if (acc > value) return 0;
  let counter = 0;
  for (let coinIndex = coins.length; coinIndex > 0; coinIndex--) {
    counter += recursiveAux(acc, coins.slice(0, coinIndex), value)
  }
  return counter;
}