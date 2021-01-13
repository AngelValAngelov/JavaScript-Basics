function sum(input){
    startNumber = Number(input[0]);
    finalNumber = Number(input[1]);
    correctNumber = '';
    let sumEven = 0;
    let sumOdd = 0;

    for(let i = startNumber; i <= finalNumber; i++){
        let num = String(i);
        for(let j = 0; j < num.length; j++){
            
            if(j % 2 == 0){
                sumEven += Number(num[j]);
            }else{
                sumOdd += Number(num[j]);
            }
        }

        if(sumEven == sumOdd){
            correctNumber += ' ' + i;
        }

        sumEven = 0;
        sumOdd = 0;
    }

    console.log(correctNumber);
}

sum(["100000",
"100050"])
