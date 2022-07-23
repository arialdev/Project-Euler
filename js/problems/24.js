const stringPermutations = str => {
  if (str.length <= 2)
    return str.length === 2 ? [str, str[1] + str[0]] : [str];

  if (str.length === 1) {
    return [str];
  }
  if (str.length === 2) {
    return [str, str[1] + str[0]]
  }
  return str
    .split('')
    .reduce(
      (acc, digit, i) => [...acc, ...stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => digit + val)],
      []
    );
};

console.time('ex24');
const res = stringPermutations('0123456789').map(n => +n).sort(Math.min)[999_999];
console.timeEnd('ex24')
console.log(res);