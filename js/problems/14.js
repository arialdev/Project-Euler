export const ex14 = () => {
  let bestResult = { value: -1, number: undefined };
  const cache = {};

  for (let i = 0; i < 1_000_000; i++) {
    let v = i;
    let count = 0;
    while (v > 1) {
      if (cache[v] && i !== v) {
        count += cache[v];
        cache[i] = count;
        if (count > bestResult.value) {
          bestResult = { value: count, number: i }
        }
        break;
      }
      v = v % 2 ? 3 * v + 1 : v / 2;
      count++;
    }
    cache[i] = count;
  }
  return bestResult;
}