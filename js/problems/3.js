export const getPrimeFactors = (n) => {
  const primes = new Set();
  let p = 2;
  while (n > 1) {
    while (p < n && n % p !== 0) p++;
    primes.add(p);
    n /= p;
  }
  return [...primes];
}