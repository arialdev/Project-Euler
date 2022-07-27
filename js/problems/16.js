export const sumOfDigits = (base, power) => BigInt(base ** power).toString().split('').map(d => +d).reduce((acc, d) => acc + d, 0);

export const ex16 = sumOfDigits.bind(this, 2, 1000);