function multiplicationTable(number){
    number = Number(number);

    for(let i = 1; i <= 10; i++){
        let sum = i * number;
        console.log(`${i} * ${number} = ${sum}`);
    }
}

multiplicationTable('5')