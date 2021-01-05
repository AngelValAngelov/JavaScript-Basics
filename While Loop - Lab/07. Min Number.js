function minNumber(input){
    let minNum = Number.MAX_SAFE_INTEGER;
    let index = 0;

    while(input[index] != 'Stop'){
        if(Number(input[index] < minNum)){
            minNum = Number(input[index]);
        }
        index++;
    }

    console.log(minNum);
}

minNumber(["-1",
"-2",
"Stop"])




