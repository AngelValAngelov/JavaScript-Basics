function energyBooster(fruit, size, value){
    let allPrice = 0;

    if(fruit == 'Watermelon'){
        if(size == 'small'){
            allPrice = 56 * value * 2; 
        }else{
            allPrice = 28.70 * value * 5;
        }
    }else if(fruit == 'Mango'){
        if(size == 'small'){
            allPrice = 36.66 * value * 2;
        }else{
            allPrice = 19.60 * value * 5;
        }
    }else if(fruit == 'Pineapple'){
        if(size == 'small'){
            allPrice = 42.10 * value * 2;
        }else{
            allPrice = 24.80 * value * 5;
        }
    }else{
        if(size == 'small'){
            allPrice = 20 * value * 2;
        }else{
            allPrice = 16.20 * value * 5;
        }
    }

    if(allPrice >= 400 && allPrice <= 1000){
        allPrice *= 0.85;
    }else if(allPrice > 1000){
        allPrice *= 0.50;
    }

    console.log(`${allPrice.toFixed(2)} lv.`);
}

energyBooster('Watermelon', 'big', 4)