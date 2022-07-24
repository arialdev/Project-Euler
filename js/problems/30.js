const weirdNumber = power => {
  const top = +'9'.repeat(power + 1);
  let result = 0;
  for (let i = 2; i <= top; i++) {
    const value = i
      .toString()
      .split('')
      .map(d => (+d) ** power)
      .reduce((acc, d) => acc + d);
    if (value === i)
      result += i;
  }
  return result;
}

console.log(weirdNumber(5))