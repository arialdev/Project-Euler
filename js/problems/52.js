export const ex52 = () => {
  let i = 1;
  while (true) {
    let m = 2;
    while (m <= 6) {
      if (!containsSameDigits(i, m * i)) break;
      if (m === 6) return i;
      m += 2;
    }
    i++;
  }
};

const containsSameDigits = (a, b) => {
  const stringify = n => [...n.toString()].sort().join('');
  return stringify(a) === stringify(b);
};
