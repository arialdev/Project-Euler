const factorial = (n) => {
  let res = BigInt(1);
  for (let i = 1; i <= n; i++)
    res *= BigInt(i);
  return res;
};

const sumDigits = (n) => n.toString().split('').map(d => +d).reduce((acc, d) => acc + d);

export const sumFactorialDigits = (n) => sumDigits(factorial(n));

console.log(sumFactorialDigits(100));