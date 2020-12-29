function godzilla(budget, statists, dressPricePerStatist) {
    budget = Number(budget);
    statists = Number(statists);
    dressPricePerStatist = Number(dressPricePerStatist);

    let decor = budget * 0.10;
    let dressPrice = statists * dressPricePerStatist;

    if (statists > 150) {
        dressPrice *= 0.90;
    }

    let allPrice = dressPrice + decor;

    if (allPrice <= budget) {
        moneyLeft = budget - allPrice;
        console.log('Action!')
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        moneyNeeded = allPrice - budget;
        console.log('Not enough money!')
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    }
}

godzilla("15437.62",
"186",
"57.99")

