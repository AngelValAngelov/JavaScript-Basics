function vacantion(input){
    let moneyNeeded = Number(input[0]);
    let moneySaved = Number(input[1]);
    let index = 2;
    let spend = 0;
    let allDays = 0;
    
    while(index < input.length){
        allDays++;
        if(input[index++] == 'save'){
            moneySaved += Number(input[index++]);
            spend = 0;
        }else{
            moneySaved -= Number(input[index++]);
            spend++;
            if(moneySaved < 0){
                moneySaved = 0;
            }

            if(spend == 5){
                console.log(`You can't save the money.`);
                console.log(`${allDays}`)
            }
        }
    }

    if(moneySaved >= moneyNeeded){
        console.log(`You saved the money for ${allDays} days.`);
    }
}

vacantion(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])

