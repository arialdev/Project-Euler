import { isPrime } from './7.js'

export const ex27 = () => {
  const primes = new Map();
  let greatest = { a: undefined, b: undefined, count: 0 };

  for (let a = -999; a < 1000; a++) {
    for (let b = -1000; b <= 1000; b++) {
      let n = 0;
      let keepLooping = true;
      while (keepLooping) {
        const result = fn(n, a, b);
        let primeResult;
        if (primes.has(result)) {
          primeResult = primes.get(result);
        } else {
          primeResult = result < 0 ? false : isPrime(result);
          primes.set(result, primeResult);
        }

        if (result < 0 || !primeResult) keepLooping = false;
        else n++;

      }
      if (n > greatest.count) {
        greatest = { a: a, b: b, count: n };
      }
    }
  }
  return greatest.a * greatest.b;
};

const fn = (n, a, b) => Math.pow(n, 2) + (n * a) + b;