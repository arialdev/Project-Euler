export const ex36 = () => {
  let acc = 0;
  for (let i = 0; i < 1_000_000; i++) {
    if (isPalindrome(i) && isPalindrome(i.toString(2))) acc += i;
  }
  return acc;
};

const isPalindrome = n => {
  const str = n.toString();
  let i = 0;
  let j = str.length - 1;
  let result = true;
  while (i < j) {
    if (str[i++] !== str[j--]) return false;
  }
  return result;
};