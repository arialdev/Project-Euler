export const ex97 = () => {
  const n = BigInt(28433) * (BigInt(2) ** BigInt(7830457)) + BigInt(1);
  return +n.toString().slice(-10);
};