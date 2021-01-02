function numbersWithThree(number) {
    number = Number(number);
    for (let i = 1; i <= number; i += 3) {
        console.log(i);
    }
}

numbersWithThree('10')