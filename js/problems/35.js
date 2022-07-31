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

export const ex35 = (top = 1_000_000) => {
  const primes = new Map();
  let counter = 0;
  for (let i = 2; i < top; i++) {
    const str = i.toString();
    if (i !== 2 && i !== 3 && i !== 5 && (str.includes('0') || str.includes('2') || str.includes('4') || str.includes('5') || str.includes('6') || str.includes('8'))) continue;
    let circular = true;
    const rotations = getNumberRotations(i);
    for (let r of rotations) {
      if (!primes.has(r)) {
        circular = isPrime(r);
        primes.set(r, circular);
      }
      else circular = primes.get(r);
      if (!circular) break;
    }
    if (circular) counter++;
  }
  console.log(primes)
  return counter;
};

const isPrime = (n) => {
  const root = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= root; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

console.time(); console.log(ex35(100)); console.timeEnd()
