import { cpus } from 'node:os'

export async function getPrimesSum(upperBound) {
  const THREADS_COUNT = cpus().length;
  const BATCH_SIZE = Math.floor(upperBound / THREADS_COUNT);
  const promises = [];
  for (let i = 0; i < THREADS_COUNT; i++) {
    const lb = (i * BATCH_SIZE) || 2;
    const ub = i === THREADS_COUNT - 1 ? upperBound : i * (BATCH_SIZE) + BATCH_SIZE;
    promises.push(
      new Promise(resolve => resolve(getPrimesSumAux(lb, ub)))
    );
  }
  const data = await Promise.allSettled(promises);
  return data.map(e => e.value).reduce((acc, e) => acc + e)
}

function getPrimesSumAux(lowerBound, upperBound) {
  let sum = 0;
  for (let i = lowerBound; i < upperBound; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

export function isPrime(n) {
  const root = Math.sqrt(n)
  for (let i = 2; i <= root; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

export const ex10 = getPrimesSumAux.bind(this, 2, 2000000);