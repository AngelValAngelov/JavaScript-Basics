function solve(number){
    number = Number(number);
    let num = 1;

    while(num <= number){
        console.log(num);
        num += num + 1;
    }
}

solve(["31"])