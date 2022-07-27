const findPaths = (n) => {
  return findPathsAux(n, 0, 0);
};

const findPathsAux = (n, r, c) => {
  if (r === n && c === n) return 1;
  if (r > n || c > n) return 0;
  return findPathsAux(n, r + 1, c) + findPathsAux(n, r, c + 1);
}

export const ex15 = findPaths.bind(this, 20);