const evenFibonacci = () => {
    const solutions = [0];
    const fibonacci = [1, 1];

    do {
        const num = fibonacci.at(-2) + fibonacci.at(-1);
        if (num % 2 === 0) solutions.push(num);
        fibonacci.push(num)
    } while (fibonacci.at(-2) + fibonacci.at(-1) <= 4_000_000)

    return [...new Set(solutions)];
}

export const ex2 = () => evenFibonacci().reduce((acc, curr) => acc + curr);