function fruitShop(fruit, dayOfWeek, quantity){
    quantity = Number(quantity);
    result = 0

    if(dayOfWeek == 'Saturday' || dayOfWeek == 'Sunday'){
        if(fruit == 'banana'){
            result = 2.70 * quantity;
        }else if(fruit == 'apple'){
            result = 1.25 * quantity;
        }else if(fruit == 'orange'){
            result = 0.90 * quantity;
        }else if(fruit == 'grapefruit'){
            result = 1.60 * quantity;
        }else if(fruit == 'kiwi'){
            result = 3.00 * quantity;
        }else if(fruit == 'pineapple'){
            result = 5.60 * quantity;
        }else if(fruit == 'grapes'){
            result = 4.20 * quantity;
        }
    }else if(dayOfWeek == 'Monday' || dayOfWeek == 'Tuesday' ||
     dayOfWeek == 'Wednesday' || dayOfWeek == 'Friday'){
        if(fruit == 'banana'){
            result = 2.50 * quantity;
        }else if(fruit == 'apple'){
            result = 1.20 * quantity;
        }else if(fruit == 'orange'){
            result = 0.85 * quantity;
        }else if(fruit == 'grapefruit'){
            result = 1.45 * quantity;
        }else if(fruit == 'kiwi'){
            result = 2.70 * quantity;
        }else if(fruit == 'pineapple'){
            result = 5.50 * quantity;
        }else if(fruit == 'grapes'){
            result = 3.85* quantity;
        }
    }
    if(result != 0){
        console.log(`${result.toFixed(2)}`);
    }else{
        console.log('error')
    }
    
}

fruitShop('pineapple',
'Wednesday',
1.600)




