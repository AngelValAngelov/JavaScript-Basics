function fishingBoat(budget, season, fishersCount){
    budget = Number(budget);
    fishersCount = Number(fishersCount);
    let boatRent = 0

    if(season == 'Spring'){
        boatRent = 3000;
    }else if(season == 'Summer' || season == 'Autumn'){
        boatRent = 4200;
    }else{
        boatRent = 2600;
    }

    if(fishersCount <= 6){
        boatRent *= 0.90;
    }else if(fishersCount <= 11){
        boatRent *= 0.85;
    }else{
        boatRent *= 0.75;
    }

    if(fishersCount % 2 == 0 && season != 'Autumn'){
        boatRent *= 0.95;
    }

    if(budget >= boatRent){
        moneyLeft = budget - boatRent;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    }else{
        moneyNeeded = Math.abs(budget - boatRent);
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
    }
}

fishingBoat("3600",
"Autumn",
"6")




