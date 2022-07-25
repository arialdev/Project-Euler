const ex40 = () => {
  const stops = [1, 10, 100, 1_000, 10_000, 100_000, 1_000_000];
  let str = '';
  for (let i = 1; i <= 1_000_000; i++) {
    str += i.toString();
  }
  return stops.map(p => str[p - 1]).reduce((acc, e) => acc * e, 1);
}
console.time('ex40');
console.log(ex40())
console.timeEnd('ex40');