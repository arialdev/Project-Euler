export const getDifferenceBetweenSumOfSquaresAndSquareOfTheSum = (n) => {
  let sumOfSquares = 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
    sumOfSquares += i ** 2;
  }
  return sum ** 2 - sumOfSquares;
}

export const ex6 = getDifferenceBetweenSumOfSquaresAndSquareOfTheSum.bind(this, 100);