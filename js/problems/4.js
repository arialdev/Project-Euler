export const findPalindromeFromProduct = (digits = 3) => {
  let top = +'9'.repeat(digits);
  let largestPalindrome = 0;
  for (let i = top; i >= 100; i--) {
    for (let j = i; j >= 100; j--) {
      const n = i * j;
      if (n <= largestPalindrome) break;
      if (isPalindrome(n))
        largestPalindrome = n;
    }
  }
  return largestPalindrome;
}

const isPalindrome = (n) => {
  const characters = ('' + n).split('');
  let i = 0;
  let j = characters.length - 1;
  while (i < j) {
    if (characters[i++] !== characters[j--]) {
      return false;
    }
  }
  return true;
}

export const ex4 = findPalindromeFromProduct.bind(this, 3);