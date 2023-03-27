export const ex53 = () => {
  const MAX_N = 100;
  const MAX_POSSIBILITIES = 1_000_000;
  const cache = { 0: 1, 1: 1 };
  const factorial = n => {
    if (cache[n]) {
      return cache[n];
    }
    let result = n * cache[n - 1];
    cache[n] = result;
    return result;
  }

  const fun = (n, r) => {
    return (factorial(n) / (factorial(r) * factorial(n - r)));
  }

  let result = 0;
  for (let n = 2; n <= MAX_N; n++) {
    for (let r = 1; r <= n; r++) {
      if (fun(n, r) > MAX_POSSIBILITIES) {
        result++;
      }
    }
  }
  return result;
}