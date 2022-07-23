export const badAssFibonacci = () => {
  let n = BigInt(1);
  let i = 2;
  let previousNumber = BigInt(1);
  while (n.toString().length < 1_000) {
    i++;
    const auxValue = n;
    n += previousNumber;
    previousNumber = auxValue;
  }
  return i;
};

console.time('ex25');
console.log(badAssFibonacci());
console.timeEnd('ex25');