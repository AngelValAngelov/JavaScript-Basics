function newHouse(typeFlowers, flowersCount, budget){
    flowersCount = Number(flowersCount);
    budget = Number(budget);
    let cost  = 0;

    let rose = 5;
    let dahlia = 3.80;
    let tulip = 2.80;
    let narcissus = 3;
    let gladiolus = 2.50;

    if(typeFlowers == 'Roses' && flowersCount > 80){
        cost = (flowersCount * rose) * 0.90;
    }else if(typeFlowers == 'Roses' && flowersCount <= 80){
        cost = flowersCount * rose;
    }else if(typeFlowers == 'Dahlias' && flowersCount > 90){
        cost = (flowersCount * dahlia) * 0.85;
    }else if(typeFlowers == 'Dahlias' && flowersCount <= 90){
        cost = flowersCount * dahlia;
    }else if(typeFlowers == 'Tulips' && flowersCount > 80){
        cost = (flowersCount * tulip) * 0.85;
    }else if(typeFlowers == 'Tulips' && flowersCount <= 80){
        cost = flowersCount * tulip;
    }else if(typeFlowers == 'Narcissus' && flowersCount < 120){
        cost = (flowersCount * narcissus) * 1.15; 
    }else if(typeFlowers == 'Narcissus' && flowersCount >= 120){
        cost = flowersCount * narcissus;
    }else if(typeFlowers == 'Gladiolus' && flowersCount < 80){
        cost = (flowersCount * gladiolus) * 1.20;
    }else if(typeFlowers == 'Gladiolus' && flowersCount >= 80){
        cost = flowersCount * gladiolus;
    }

    if(budget >= cost){
        moneyLeft = budget - cost;
        console.log(`Hey, you have a great garden with ${flowersCount} ${typeFlowers} and ${moneyLeft.toFixed(2)} leva left.`)
    }else{
        moneyNeeded = cost - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
    }
}

newHouse("Tulips",
"88",
"260")

