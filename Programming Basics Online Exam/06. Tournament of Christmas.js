function tournament(input) {
    let dayValue = input.shift();
    let dayWin = 0;
    let dayLose = 0;
    let gameWin = 0;
    let gameLose = 0;
    let sum = 0;
    let sumPerDay = 0;

    for (let day = 0; day < dayValue; day++) {
        let game = input.shift();
        while (game != 'Finish') {
            let result = input.shift();

            if (result == 'win') {
                gameWin += 1;
                sumPerDay += 20;
            } else {
                gameLose += 1;
            }
            game = input.shift();
        }

        if (gameWin > gameLose) {
            sumPerDay *= 1.10;
            dayWin++;
        } else {
            dayLose++;
        }
        sum += sumPerDay;
        gameLose = 0;
        gameWin = 0;
        sumPerDay = 0;

    }

    if (dayWin > dayLose) {
        sum *= 1.20;
        console.log(`You won the tournament! Total raised money: ${sum.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${sum.toFixed(2)}`);
    }
}

tournament([2, 'volleyball', 'win', 'football', 'lose', 'basketball', 'win', 'Finish', 'golf',
    'win', 'tennis', 'win', 'badminton', 'win', 'Finish'])