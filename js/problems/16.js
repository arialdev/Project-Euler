export const sumOfDigits = (base, power) => BigInt(base ** power).toString().split('').map(d => +d).reduce((acc, d) => acc + d, 0);

console.log(sumOfDigits(2, 1000));