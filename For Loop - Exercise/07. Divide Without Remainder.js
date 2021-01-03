function divider(input){
    let n = input[0];
    let dividrByTwo = 0;
    let divideByThree = 0;
    let divideByFour = 0;

    for (let index = 1; index < input.length; index++) {
        let element = input[index];
        if(element % 2 === 0){
            dividrByTwo++;
        }

        if(element % 3 == 0){
            divideByThree++;
        }
        
        if(element % 4 == 0){
            divideByFour++;
        }
    }

    let resultByTwo = (dividrByTwo / n * 100).toFixed(2);
    let resultByThree = (divideByThree / n * 100).toFixed(2);
    let resultByFour = (divideByFour / n * 100).toFixed(2); 

    console.log(`${resultByTwo}%`);
    console.log(`${resultByThree}%`);
    console.log(`${resultByFour}%`);
}

divider(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])
