const ex26 = () => {
  let longest = 1;
  let result = 1;
  for (let d = 1; d < 1000; d++) {
    const recurringCycleLength = fractionToDecimal(1, d).length;
    if (recurringCycleLength > longest) {
      longest = recurringCycleLength;
      result = d;
    }
  }
  return result;
};


function fractionToDecimal(numr, denr) {
  let res = "";
  let mp = new Map();
  mp.clear();
  let rem = numr % denr;
  while ((rem != 0) && (!mp.has(rem))) {
    mp.set(rem, res.length);
    rem = rem * 10;
    let res_part = Math.floor(rem / denr);
    res += res_part.toString();
    rem = rem % denr;
  }
  if (rem == 0)
    return "";
  else if (mp.has(rem))
    return res.substring(mp.get(rem));

  return undefined;
}

console.log(ex26());