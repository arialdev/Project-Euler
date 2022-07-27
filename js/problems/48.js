export const ex48 = () => {
  let a = BigInt(0);
  for (let i = 1; i <= 1000; i++) {
    a += BigInt(i) ** BigInt(i);
  }
  return a.toString().slice(-10)
};