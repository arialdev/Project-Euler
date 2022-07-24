const ex26 = () => {
  let longest = 1;
  let result = 1;
  for (let d = 1; d < 1000; d++) {
    const recurringCycleLength = getDecimalCycle(1, d).length;
    if (recurringCycleLength > longest) {
      longest = recurringCycleLength;
      result = d;
    }
  }
  return result;
};


function getDecimalCycle(numerator, denominator) {
  let result = "";
  let map = new Map();
  let remainder = numerator % denominator;
  while ((remainder != 0) && (!map.has(remainder))) {
    map.set(remainder, result.length);
    remainder = remainder * 10;
    let res_part = Math.floor(remainder / denominator);
    result += res_part.toString();
    remainder = remainder % denominator;
  }
  if (remainder == 0)
    return "";
  else if (map.has(remainder))
    return result.substring(map.get(remainder));

  return undefined;
}

console.log(ex26());