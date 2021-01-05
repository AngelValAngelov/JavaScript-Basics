function accountBalance(input){
    let total = 0;
    let index = 0;

    while(index < input.length){
        if(input[index] != "NoMoreMoney"){
            if(Number(input[index]) < 0){
                console.log('Invalid operation!'); break;
            }else{
                total += Number(input[index]);
                console.log(`Increase: ${Number(input[index]).toFixed(2)}`);
            }
            index++;
        }else{
            break;
        }
        
    }
    console.log(`Total: ${total.toFixed(2)}`);
}

accountBalance(["120",
"45.55",
"-150"])

