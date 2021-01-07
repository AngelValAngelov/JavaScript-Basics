function cake(input){
    let width = input[0];
    let length = input[1];
    let index = 2;
    let size = width * length;

    while(index < input.length){
        if(input[index] == 'STOP'){
            break;
        }
        size -= Number(input[index++]);

        if(size < 0){
            break;
        }
    }

    if(size >= 0){
        console.log(`${size} pieces are left.`);
    }else{
        console.log(`No more cake left! You need ${Math.abs(size)} pieces more.`);
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

