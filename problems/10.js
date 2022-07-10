export async function getPrimesSum(upperBound) {
  const THREADS_COUNT = 40;
  const BATCH_SIZE = Math.floor(upperBound / THREADS_COUNT);
  const promises = [];
  for (let i = 0; i < THREADS_COUNT; i++) {
    const lb = (i * BATCH_SIZE) || 2;
    const ub = lb + BATCH_SIZE;
    promises.push(
      new Promise(resolve => resolve(getPrimesSumAux(lb, ub)))
    );
  }
  const data = await Promise.allSettled(promises);
  return data.map(e => e.value).reduce((acc, e) => acc + e)
}

function getPrimesSumAux(lowerBound, upperBound) {
  let i = lowerBound;
  let sum = 0;

  while (i < upperBound) {
    if (isPrime(i)) sum += i;
    i++;
  }
  return sum;
}

export function isPrime(n) {
  let i = 2;
  while (i < n && n % i !== 0) i++;
  return i === n;
}

getPrimesSum(2_000_000).then(res => {
  console.log(res);
})