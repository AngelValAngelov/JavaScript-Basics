function catWalking(miutesWalking, walkingsCount, catCalories){
    let allBurnCalories = miutesWalking * walkingsCount * 5;

    if(allBurnCalories * 2 >= catCalories / 2){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${allBurnCalories}.`);
    } else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${allBurnCalories}.`);
    }
}

catWalking(30, 3, 600);