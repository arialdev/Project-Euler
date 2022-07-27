export const ex56 = () => {
  let result = 0;
  for (let i = 1; i < 100; i++) {
    for (let j = 1; j < 100; j++) {
      result = Math.max(result, (BigInt(i) ** BigInt(j)).toString().split('').map(d => +d).reduce((acc, d) => acc + d));
    }
  }
  return result;
};