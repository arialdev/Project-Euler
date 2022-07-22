export const getDivisors = n => {
  const divisors = [];
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};

export const d = n => getDivisors(n).reduce((acc, e) => acc + e);

export function getSumOfAmicables(from, to) {
  const amicables = {};
  for (let i = from; i <= to; i++) {
    amicables[i] = d(i);
  }
  return Object
    .entries(amicables)
    .map(e => ({ k: +e[0], v: e[1] }))
    .filter(({ k, v }) => {
      return amicables[v] === k && k !== v;
    })
    .map(e => e.v)
    .reduce((acc, e) => acc + e, 0);

}

console.log(getSumOfAmicables(2, 9999));