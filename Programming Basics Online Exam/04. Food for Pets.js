function foodForPets(input){
    let index = 0;
    let dayValue = Number(input[index++]);
    let foodQuantity = Number(input[index++]);
    let dogFood = 0;
    let catFood = 0;
    let eatenFood = 0;
    let biscuits = 0;
    let eatenDogFood = 0;
    let eatenCatFood = 0;

    for(day = 1; day <= dayValue; day++){
        dogFood = Number(input[index++]);
        catFood = Number(input[index++]);
        eatenDogFood += dogFood;
        eatenCatFood += catFood;
        eatenFood += dogFood + catFood;

        if(day % 3 == 0){
            biscuits += (dogFood + catFood) * 0.10;
        }
    }
    let percentOfEatenFood = eatenFood / foodQuantity * 100;
    let percentOfEatenDogFood = eatenDogFood / eatenFood * 100;
    let percentOfEatenCatFood = eatenCatFood / eatenFood * 100;
    console.log(`Total eaten biscuits: ${Math.round(biscuits}gr.`);
    console.log(`${percentOfEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentOfEatenDogFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentOfEatenCatFood.toFixed(2)}% eaten from the cat.`);
}

foodForPets([3,500,100,30,110,25,120,35]);