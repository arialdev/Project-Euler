export function ex23() {
  const divisorsMap = {};
  for (let i = 2; i <= 28123; i++) {
    let value = 0;
    for (let j = 1; j < i; j++) {
      if (i % j === 0) {
        value += j;
      }
    }
    divisorsMap[i] = value;
  }
  const abundants = Object
    .entries(divisorsMap)
    .filter(n => n[1] > +n[0])
    .map(n => +n[0]);

  const abundantsSum = new Set();
  for (let i = 0; i < abundants.length; i++) {
    for (let j = i; j < abundants.length; j++) {
      abundantsSum.add(abundants[i] + abundants[j]);
    }
  }

  let result = 0;
  for (let i = 0; i <= 28123; i++) {
    if (!abundantsSum.has(i)) result += i;
  }
  return result;
}