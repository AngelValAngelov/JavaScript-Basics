function sumPrimeNonPrime(input){
    let number = input.shift();
    let sumPrime = 0;
    let sumNonPrime = 0;
    let flag = true;

    while(number != 'stop'){
        number = Number(number);
        if(number < 0){
            console.log('Number is negative.');
            number = input.shift();
            continue;
        }
        for(i = 2; i < number; i++){
            if(number % i == 0){
                sumNonPrime += number;
                flag = false;
                break;
            }
        }
        if(flag){
           sumPrime += number; 
        }       
        number = input.shift();
        flag = true;
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

sumPrimeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
