import { getPrimeFactors } from './3.js';
export const getNthPrime = (n) => {
    let counter = 0;
    let i = 1;
    while (counter < n) {
        if (isPrime(++i)) counter++;
    }
    return i;
}

const isPrime = (n) => {
    const factors = getPrimeFactors(n);
    return factors.length === 1 && factors[0] === n;
}

console.log('sol', getNthPrime(10_001))