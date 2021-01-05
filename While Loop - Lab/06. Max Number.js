function maxNumber(input){
    let maxNum = Number.MIN_SAFE_INTEGER;
    let index = 0;

    while(input[index] != 'Stop'){
        if(Number(input[index] > maxNum)){
            maxNum = Number(input[index]);
        }
        index++;
    }

    console.log(maxNum);
}

maxNumber(["-1",
"-2",
"Stop"])



