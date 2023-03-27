export const ex38 = () => {
  let sol = -Infinity;
  for (let i = 1; i < 9999; i++) {
    const pandigital = getPandigitalMultiples(i);
    if (!isNaN(pandigital)) {
      sol = Math.max(pandigital, sol);
    }
  }
  return sol;
}

const getPandigitalMultiples = (n) => {
  let pandigitalStr = '';
  let m = 1;
  while (pandigitalStr.length < 9) {
    pandigitalStr += n * m++;
  }
  return isPandigital(pandigitalStr) ? parseInt(pandigitalStr) : NaN;
}

const isPandigital = (nStr) => {
  const sortedDigits = nStr
    .split('')
    .map((d) => +d)
    .sort();
  return sortedDigits.reduce((acc, e, i) => acc && (e === i + 1), true);
};