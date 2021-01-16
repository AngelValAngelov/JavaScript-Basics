function suitcasesLoad(input) {
    let freeSpace = input.shift();
    let newCase = input.shift();
    let caseKgCounter = 0;
    let flag = true;
    let caseCounter = 1;

    while (newCase != 'End') {

        if (caseCounter % 3 == 0) {
            newCase *= 1.10;
        }

        freeSpace -= newCase;

        if (freeSpace < 0) {
            flag = false;
            console.log(`No more space!`);
            break;
        }

        newCase = input.shift();
        caseCounter++;
    }

    if (flag) {
        console.log(`Congratulations! All suitcases are loaded!`);
    }

    console.log(`Statistic: ${caseCounter - 1} suitcases loaded.`);
}

suitcasesLoad([550, 100, 252, 72, 'End'])