function sum(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combination = 0;
    let find = false;

    for (i = start; i <= end; i++) {
        for (j = start; j <= end; j++) {
            combination++;
            if (i + j == magicNumber) {
                console.log(`Combination N:${combination} (${i} + ${j} = ${i + j})`);
                find = true;
                break;
            }
        }
        if (find) {
            break;
        }
    }
    if (!find) {
        console.log(`${combination} combinations - neither equals ${magicNumber}`);
    }
}

sum(["88", 
"888", 
"2000"])




