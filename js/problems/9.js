const getWeirdPythagoreanTriplet = () => {
  for (let c = 0; c < 998; c++) {
    for (let b = 0; b < c; b++) {
      for (let a = 0; a < b; a++) {
        if (a + b + c === 1000 && a ** 2 + b ** 2 === c ** 2) {
          console.log(a, b, c)
          return a * b * c;
        }
      }
    }
  }
  return undefined;
}

console.log(getWeirdPythagoreanTriplet());