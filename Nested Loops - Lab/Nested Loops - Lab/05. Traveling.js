function traveling(input) {
    let destination = input[0];
    let moneyNeeded = Number(input[1]);
    let currentMoney = 0;
    let index = 2;

    while (destination != 'End') {
        while (currentMoney < moneyNeeded) {
            currentMoney += Number(input[index++]);
        }
        console.log(`Going to ${destination}!`);
        if (input[index] == 'End') {
            break;
        }
        destination = input[index++];
        moneyNeeded = input[index++];
        currentMoney = 0;
    }
}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

