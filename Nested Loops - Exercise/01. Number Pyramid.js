function pyramid(number){
    number = Number(number);
    current = 1;
    printCurrent = '';

    for(let i = 1; i <= number; i++){
        for(let j = 1; j <= i; j++){
            if(current > number){
                break;
            }
            printCurrent += current + ' ';
            current++;
        }
        console.log(printCurrent);
        printCurrent = '';
        if(current > number){
            break;
        }
    }
}

pyramid(['12'])