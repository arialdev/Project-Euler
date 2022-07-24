const ex29 = (lb, ub) => {
  let results = new Set();
  for (let a = lb; a <= ub; a++) {
    let acc = BigInt(a) ** BigInt(lb);
    results.add(acc);
    for (let b = lb + 1; b <= ub; b++) {
      acc *= BigInt(a);
      results.add(acc);
    }
  }
  return results.size;
}

console.log(ex29(2, 100))