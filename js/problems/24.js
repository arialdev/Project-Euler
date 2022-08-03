export const ex24 = () => {
  let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = '';
  let searching = 1000000;

  while (digits.length > 1) {
    const permutations = factorial(digits.length - 1);
    const batch = Math.ceil(searching / permutations) - 1;
    const thisdigit = digits[batch];
    result += thisdigit;
    digits = digits.filter(d => d !== thisdigit);
    searching -= permutations * (batch);
  }
  result += digits[0];
  return +result;
};

const factorial = n => n === 1 ? 1 : n * factorial(n - 1);