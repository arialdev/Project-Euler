export const ex14 = () => {
  let result = { n: undefined, length: -1 };
  for (let i = 0; i < 1_000_000; i++) {
    const seq = collatzSequence(i).length;
    if (seq > result.length) {
      result = { n: i, length: collatzSequence(i).length };
    }
  }
  return result;
}

const collatzSequence = (n) => {
  const collatzRecursive = (n, sequence) => {
    if (n <= 1) return sequence;
    if (n % 2 === 0) return collatzRecursive(n / 2, [...sequence, n]);
    else return collatzRecursive(3 * n + 1, [...sequence, n]);
  };
  return collatzRecursive(n, []);
};