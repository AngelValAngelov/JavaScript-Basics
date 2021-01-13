function specialNumbers(number) {
    number = Number(number);
    let flag = true;
    let specNumbers = '';

    for (let index = 1111; index < 10000; index++) {
        const element = String(index);
        for (let char = 0; char < element.length; char++) {
            const digit = Number(element[char]);

            if (number % digit != 0) {
                flag = false;
                break;
            }


        }

        if (flag) {
            specNumbers += element + ' ';
        }
        flag = true;

    }

    console.log(specNumbers);
}

specialNumbers(["16"])