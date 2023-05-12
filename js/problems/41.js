import { getPossibilities as getPossiblePandigitals } from './32.js';
import { isPrime } from './37.js';

export const ex41 = () => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  while (digits.length > 1) {
    const pandigitals = getPossiblePandigitals(digits).map(p => parseInt(p));
    const primePandigitals = pandigitals.filter(isPrime).sort((a, b) => b - a);
    if (primePandigitals.length > 0) {
      return primePandigitals[0]
    }
    digits.pop();
  }
  return digits[0];
}