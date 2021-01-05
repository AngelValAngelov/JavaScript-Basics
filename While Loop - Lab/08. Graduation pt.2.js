function graduation(input) {
    let name = input[0];
    let index = 1;
    let sum = 0;

    while (index < input.length) {
        if (Number(input[index]) >= 4) {
            sum += Number(input[index]);
        } else {
            console.log(`${name} has been excluded at ${index} grade`); break;
        }

        index++;
    }

    if (index == 13) {
        let mark = sum / 12;
        console.log(`${name} graduated. Average grade: ${mark.toFixed(2)}`);
    }
}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"2"])


