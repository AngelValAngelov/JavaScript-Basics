function sumNumbers(input){
    let goal = input[0];
    let number = 1;
    let sum = 0;

    while(sum < goal){
        sum += Number(input[number]);
        number++;
    }
    console.log(sum);
}

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

