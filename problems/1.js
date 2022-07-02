const findMultiplesOfThreeOrFive = (n) => {
    const multiples = [];
    for (let i = 1; i < n; i++)
        if (i % 3 === 0 || i % 5 === 0) multiples.push(i);
    return multiples;
}

const getSumFromMultiplesOfThreeOrFive = (n) => findMultiplesOfThreeOrFive.call(this, n).reduce((acc, curr) => acc + curr);

console.log(getSumFromMultiplesOfThreeOrFive(1000))