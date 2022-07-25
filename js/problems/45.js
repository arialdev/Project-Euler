const ex45 = () => {
  const getTriangle = n => n * (n + 1) / 2;
  const getPentagon = n => n * (3 * n - 1) / 2;
  const getHexagon = n => n * (2 * n - 1);

  const triangles = new Map();
  const pentagonals = new Set();
  const hexagonals = new Set();

  let i = 1;
  while (true) {
    const t = getTriangle(i);
    if (t > 40755 && pentagonals.has(t) && hexagonals.has(t)) return t;
    triangles.set(t, i);

    const p = getPentagon(i);
    if (p > 40755 && triangles.has(p) && hexagonals.has(p)) return triangles.get(p);
    pentagonals.add(p);

    const h = getHexagon(i);
    if (h > 40755 && triangles.has(h) && pentagonals.has(h)) return triangles.get(h);
    hexagonals.add(h);
    i++
  }
}

console.time('ex45');
console.log(ex45());
console.timeEnd('ex45');