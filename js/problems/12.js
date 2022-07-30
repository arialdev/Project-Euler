export const ex12 = (upperBound = 500) => {
  let a = 1;
  let t = 1;
  let divisors = 0
  while (divisors <= upperBound) {
    divisors = 0;
    a++;
    t += a;
    const ttx = Math.sqrt(t);
    for (let i = 1; i <= ttx; i++) {
      if (t % i === 0) divisors += 2;
    }
    if (t === ttx * ttx) divisors--;
  }
  return t;
};