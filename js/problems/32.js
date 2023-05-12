export const ex32 = () => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const pandigitals = getPossibilities(digits);
  const products = pandigitals.flatMap(getProducts);
  const filteredProducts = [...new Set(products)];
  return filteredProducts.reduce((acc, p) => acc + p);
}

export const getPossibilities = (digits) => {
  const backtracking = (tmp, candidates, used) => {
    if (tmp.length === digits.length) {
      return void res.push(tmp.join(''));
    }
    for (let i = 0; i < candidates.length; i++) {
      if (used.has(candidates[i])) continue;
      tmp.push(candidates[i]);
      used.add(candidates[i]);
      backtracking(tmp, candidates, used);
      tmp.pop();
      used.delete(candidates[i]);
    }
  };

  let res = [];
  let used = new Set();
  digits.sort();
  backtracking([], digits, used);
  return res;
};

const getProducts = (nStr) => {
  let productsCounter = [];
  for (let i = 1; i < nStr.length - 1; i++) {
    const multiplicand = +nStr.slice(0, i);
    for (let j = i + 1; j < nStr.length; j++) {
      const multiplier = +nStr.slice(i, j);
      const product = +nStr.slice(j, nStr.length);
      if (multiplicand * multiplier === product) {
        productsCounter.push(product);
      }
    }
  }
  return productsCounter;
};