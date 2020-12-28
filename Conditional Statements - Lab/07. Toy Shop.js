function toyShop(tripPrice, puzzlesCount, speakingToysCount, toyBearsCount, minionsCount, toyTrucksCount) {
    tripPrice = Number(tripPrice);
    puzzlesCount = Number(puzzlesCount);
    speakingToysCount = Number(speakingToysCount);
    toyBearsCount = Number(toyBearsCount);
    minionsCount = Number(minionsCount);
    toyTrucksCount = Number(toyTrucksCount);

    let puzzlePrice = 2.60;
    let speakingToyPrice = 3.00;
    let bearToyPrice = 4.10;
    let minionPrice = 8.20;
    let toyTruckPrice = 2.00

    let allToysCount = puzzlesCount + speakingToysCount + toyBearsCount + minionsCount + toyTrucksCount

    let sum = puzzlePrice * puzzlesCount + speakingToyPrice * speakingToysCount +
             bearToyPrice * toyBearsCount + minionsCount * minionPrice +
              toyTruckPrice * toyTrucksCount;

    let discount = false

    if(allToysCount >= 50){
        discount = true
    }

    if(discount){
        sum = (sum * 0.75) * 0.90
    } else {
        sum = sum * 0.90
    }

    if(tripPrice <= sum){
        let moneyLeft = tripPrice - sum;
        console.log(`Yes! ${Math.abs(moneyLeft).toFixed(2)} lv left.`)
    } else {
        let moneyNeeded = sum - tripPrice;
        console.log(`Not enough money! ${Math.abs(moneyNeeded).toFixed(2)} lv needed.`)
    }
}

toyShop("40.8", "20", "25", "30", "50", "10")