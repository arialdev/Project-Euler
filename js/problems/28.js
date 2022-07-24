const generateMatrix = n => {
  let m = [];
  for (let i = 0; i < n; i++) {
    let r = [];
    for (let j = 0; j < n; j++) {
      r.push(undefined);
    }
    m.push(r);
  }
  let item = { r: Math.floor(n / 2), c: Math.floor(n / 2) };
  m[item.r][item.c] = 1;
  let value = 1;
  let steps = 1;
  while (item.r < n && item.c < n) {
    const direction = steps % 2 === 0 ? -1 : 1;
    for (let c = 0; c < steps; c++) {
      item.c += 1 * direction;
      if (item.c >= n) break;
      m[item.r][item.c] = ++value;
    }
    if (item.c >= n) break;
    for (let r = 0; r < steps; r++) {
      item.r += 1 * direction;
      m[item.r][item.c] = ++value;
    }
    steps++;
  }
  let result = 0;
  let i = 0;
  while (i < n) {
    result += m[i][i];
    result += m[n - 1 - i][i++];
  }
  return result - 1;
}

console.log(generateMatrix(1001))
