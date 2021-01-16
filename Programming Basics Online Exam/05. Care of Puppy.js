function puppy(input){
    let food = input.shift() * 1000;
    let foodEatenPerDay = input.shift();
    let flag = true;

    while (foodEatenPerDay != 'Adopted') {
        if(food - foodEatenPerDay >= 0){
            food -= foodEatenPerDay;
        }else{
            food -= foodEatenPerDay; 
            flag = false;
        }
        foodEatenPerDay = input.shift();
    }

    if(flag){
        console.log(`Food is enough! Leftovers: ${food} grams.`);
    }else{
        console.log(`Food is not enough. You need ${Math.abs(food)} grams more.`);
    }
        
}

puppy([2,999,456,999,999,123,456,'Adopted'])