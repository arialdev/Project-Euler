export const ex39 = () => {
  let maxSolutions = -Infinity;
  let sol = undefined;
  for (let p = 1; p <= 1_000; p++) {
    const pMaxSolutions = getSolutionsNumber(p);
    if (pMaxSolutions > maxSolutions) {
      maxSolutions = pMaxSolutions;
      sol = p;
    }
  }
  return sol;
};

const getSolutionsNumber = (p) => {
  let solutions = 0;
  for (let c1 = 1; c1 < p - 2; c1++) {
    for (let c2 = c1 + 1; c2 < p - 1; c2++) {
      const h = Math.sqrt(c1 ** 2 + c2 ** 2);
      if ((h + c1 + c2) === p) {
        solutions++;
      }
    }
  }
  return solutions;
};

console.log(ex39());