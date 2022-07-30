export const ex15 = (n = 20, m = 20) => {
  const cache = {};

  const findPathsAux = (r, c, n, m) => {
    if (r === n && c === m) {
      cache[`${r}_${c}`] = 1;
      return 1;
    }
    if (r > n || c > m) {
      cache[`${r}_${c}`] = 0;
      return 0;
    }
    const left = cache[`${r + 1}_${c}`] ??= findPathsAux(r + 1, c, n, m);
    const right = cache[`${r}_${c + 1}`] ??= findPathsAux(r, c + 1, n, m);
    return right + left;
  }
  return findPathsAux(0, 0, n, m)
}