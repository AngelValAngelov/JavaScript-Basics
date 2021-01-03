function minNumber(input){
    let numbersCount = input[0];
    let numberMin = Number.MAX_SAFE_INTEGER;

    for (let index = 1; index <= numbersCount; index++) {
        const element = Number(input[index]);
        if(element < numberMin){
            numberMin = element;
        }
    }
    console.log(numberMin);
}

minNumber(["2",
"-1",
"-2"])




