function divisibleByNine(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let sum = 0;
    let allNumbers = '';

    for (let i = num1; i < num2; i++) {
        if(i % 9 == 0){
            sum += i;
            allNumbers += i + '\n';
        }
    }

    console.log(`The sum: ${sum}`);
    console.log(allNumbers);
    
}

divisibleByNine("100", "200")