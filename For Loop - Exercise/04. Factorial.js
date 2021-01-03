function factorial(number){
    number = Number(number);
    let sum = 1;

    for(let i = 2; i <= number; i++){
        sum *= i;
    }
    console.log(sum);
}

factorial('8')