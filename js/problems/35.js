const getNumberRotations = n => {
  const rotations = [];
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    let rotation = ''
    for (let j = 0; j < str.length; j++) {
      rotation += str[(i + j) % str.length];
    }
    rotations.push(+rotation);
  }
  return rotations;
};

const ex35 = (top) => {
  const primes = new Map();
  let counter = 0;
  for (let i = 2; i < top; i++) {
    let circular = true;
    const rotations = getNumberRotations(i);
    for (let r of rotations) {
      if (!primes.has(r)) {
        circular = isPrime(r);
        primes.set(r, circular);
      }
      else
        circular = primes.get(r);
      if (!circular) break;
    }
    if (circular) counter++;
  }
  return counter;
};

const isPrime = (n) => {
  for (let i = 2; i < n; i) {
    if (n % (i++) === 0) return false;
  }
  return true;
};

console.time('ex35');
const result = ex35(1_000_000);
console.timeEnd('ex35');
console.log(result);
