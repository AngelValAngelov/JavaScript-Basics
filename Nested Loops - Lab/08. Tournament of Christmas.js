function tournament(input){
    let dayOfTournament = input.shift();

    let win = 0;
    let lose = 0;
    let profit = 0;
    let dailyProfit = 0;
    let winner = 0;
    let loser = 0;

    for(i = 0; i < dayOfTournament; i++){
        let game = input.shift();
        
        while(game != 'Finish'){
            
            let winOrLose = input.shift();
            if(winOrLose == 'win'){
                win++;
            }else{
                lose++;
            }
            game = input.shift();
        }
        if(win > lose){
            winner++;
            dailyProfit = (win * 20) * 1.10;
            profit += dailyProfit; 
        }else{
            loser++;
            dailyProfit = win * 20;
            profit += dailyProfit;
        }
        lose = 0;
        win = 0;

    }
    if(winner > loser){
        profit *= 1.20;
        console.log(`You won the tournament! Total raised money: ${profit.toFixed(2)}`);
    }else{
        console.log(`You lost the tournament! Total raised money: ${profit.toFixed(2)}`);
    }
    
}

tournament([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])

