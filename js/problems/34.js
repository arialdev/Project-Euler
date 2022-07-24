const generateFactorialsMap = () => {
  let map = { 0: 1 };
  let acc = 1;
  for (let i = 1; i < 10; i++) {
    acc *= i;
    map[i] = acc;
  }
  return map;
};

const ex34 = () => {
  const digitMap = generateFactorialsMap();
  let result = 0;
  for (let i = 10; i < 999999; i++) {
    const sumValue = i
      .toString()
      .split('')
      .map(d => digitMap[d])
      .reduce((acc, d) => acc + d);
    if (sumValue === i) result += i;
  }
  return result;
}

console.time('ex34');
console.log(ex34());
console.timeEnd('ex34');