function bonusScore(num) {
    num = Number(num);
    let bonusPoints = Number(0)

    if(num <= 100){
        bonusPoints = 5;
    }
    
    if(num > 100){
        bonusPoints = num * 0.20;
    }
    
    if(num > 1000){
        bonusPoints = num * 0.10;
    }

    if(num % 2 == 0){
        bonusPoints += 1;
    }

    if(num % 10 == 5){
        bonusPoints += 2
    }
    console.log(bonusPoints)
    console.log(num + bonusPoints)
}

bonusScore("2703")