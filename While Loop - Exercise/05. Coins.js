function coins(number) {
    number = Math.round(Number(number) * 100);
    let allCoins = 0;

    while (number != 0) {
        if (number >= 200) {
            number -= 200;
            allCoins++;
        } else if (number >= 100) {
            number -= 100;
            allCoins++;
        } else if (number >= 50) {
            number -= 50;
            allCoins++;
        } else if (number >= 20) {
            number -= 20;
            allCoins++;
        } else if (number >= 10) {
            number -= 10;
            allCoins++;
        } else if (number >= 5) {
            number -= 5;
            allCoins++;
        } else if (number >= 2) {
            number -= 2;
            allCoins++;
        } else if (number == 1) {
            number -= 1;
            allCoins++;
        }
    }
    console.log(allCoins);
}

coins(["2.73"])