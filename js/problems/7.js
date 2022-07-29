export const ex7 = () => {
    let counter = 0;
    let prime = undefined;
    let i = 2;
    while (counter < 10_001) {
        if (isPrime(i)) {
            counter++;
            prime = i;
        }
        i++;
    }
    return prime;
}

export function isPrime(n) {
    const root = Math.sqrt(n)
    for (let i = 2; i <= root; i++) {
        if (n % i === 0) return false;
    }
    return true;
}