function shop(productName, cityName, price){
    price = Number(price);

    if(cityName == 'Sofia'){
        if(productName == 'coffee'){
            money = 0.50 * price;
            console.log(money);
        }else if(productName == 'water'){
            money = 0.80 * price;
            console.log(money);
        }else if(productName == 'beer'){
            money = 1.20 * price;
            console.log(money);
        }else if(productName == 'sweets'){
            money = 1.45 * price;
            console.log(money);
        }else if(productName == 'peanuts'){
            money = 1.60 * price;
            console.log(money);
        }
    }else if(cityName == 'Plovdiv'){
        if(productName == 'coffee'){
            money = 0.40 * price;
            console.log(money);
        }else if(productName == 'water'){
            money = 0.70 * price;
            console.log(money);
        }else if(productName == 'beer'){
            money = 1.15 * price;
            console.log(money);
        }else if(productName == 'sweets'){
            money = 1.30 * price;
            console.log(money);
        }else if(productName == 'peanuts'){
            money = 1.50 * price;
            console.log(money);
        }
    }else{
        if(productName == 'coffee'){
            money = 0.45 * price;
            console.log(money);
        }else if(productName == 'water'){
            money = 0.70 * price;
            console.log(money);
        }else if(productName == 'beer'){
            money = 1.10 * price;
            console.log(money);
        }else if(productName == 'sweets'){
            money = 1.35 * price;
            console.log(money);
        }else if(productName == 'peanuts'){
            money = 1.55 * price;
            console.log(money);
        }
    }
}

shop("sweets",
"Sofia",
"2.23")



