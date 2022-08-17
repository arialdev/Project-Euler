import Fraction from 'fraction.js';

export const ex33 = () => {
  let result = 1;
  for (let n = 10; n < 99; n++) {
    for (let d = n + 1; d < 100; d++) {
      if (isResult(n, d)) result *= n / d;
    }
  }
  return new Fraction(result).d;
};

const isResult = (num, dem) => {
  let nStr = num.toString();
  let dStr = dem.toString();
  if (nStr[nStr.length - 1] == 0 && dStr[dStr.length - 1] == 0)
    return false;

  let resNStr, resDStr;

  [...nStr].forEach(digit => {
    if (dStr.includes(digit)) {
      resNStr = [...nStr].filter(d => d !== digit).join('');
      resDStr = [...dStr].filter(d => d !== digit).join('');

      resNStr = resNStr.length ? resNStr : digit;
      resDStr = resDStr.length ? resDStr : digit;

      if (resNStr === resDStr) {
        resNStr = 1
        resDStr = 1
      }
    }
  });
  return resNStr / resDStr === num / dem;
};