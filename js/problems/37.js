export const ex37 = () => {
  let result = 0;
  let counter = 0;
  let i = 8;

  const primes = new Map();

  while (counter < 11) {
    let prime = true;
    let cloneI = i.toString();
    while (prime && cloneI.length) {
      const parsedClone = +cloneI;
      if (!primes.has(parsedClone)) {
        primes.set(parsedClone, isPrime(parsedClone));
      }
      prime = primes.get(parsedClone);
      cloneI = cloneI.slice(0, -1);
    }
    cloneI = i.toString();
    while (prime && cloneI.length) {
      const parsedClone = +cloneI;
      if (!primes.has(parsedClone)) {
        primes.set(parsedClone, isPrime(parsedClone));
      }
      prime = primes.get(parsedClone);
      cloneI = cloneI.slice(1);
    }
    if (prime) {
      result += i;
      counter++;
    }
    i++;
  }
  return result;
};

export function isPrime(n) {
  if (n < 2) return false;
  const root = Math.sqrt(n);
  for (let i = 2; i <= root; i++) {
    if (n % i === 0) return false;
  }
  return true;
}