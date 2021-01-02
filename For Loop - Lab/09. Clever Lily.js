function cleverLili(age, washingMashinePrice, pricePerToy){
    age = Number(age);
    washingMashinePrice = Number(washingMashinePrice);
    pricePerToy - Number(pricePerToy);
    let sumMOney = 0;
    let sumPerBirthday = 0;
    let toyCount = 0;

    for(day = 1; day <= age; day++){
        if(day % 2 == 0){
            sumMOney += sumPerBirthday + 9;
            sumPerBirthday += 10;
        }else{
            toyCount++;
        }
    }
    let allMoney = sumMOney + (toyCount * pricePerToy);

    if(washingMashinePrice > allMoney){
        let moneyNeeded = washingMashinePrice - allMoney;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }else{
        let moneyLeft = allMoney - washingMashinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    }
}

cleverLili("21", "1570.98", "3")