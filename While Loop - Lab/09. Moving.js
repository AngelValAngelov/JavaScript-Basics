function moving(input) {
    let weight = input[0];
    let length = input[1];
    let height = input[2];
    let index = 3;
    let complete = true;

    let flatSize = weight * length * height;

    while(input[index] != 'Done'){
        if(flatSize - Number(input[index]) >= 0) {
            flatSize -= Number(input[index]);
        }else{
            let spaceNeeded = Math.abs(flatSize - Number(input[index]))
            complete = false;
            console.log(`No more free space! You need ${spaceNeeded} Cubic meters more.`); break;
        }
        index++;
    }
    if(complete){
        console.log(`${flatSize} Cubic meters left.`);
    }
}

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])


