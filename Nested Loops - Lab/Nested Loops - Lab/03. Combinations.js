function combinations(number){
    number = Number(number);
    let index = 0;

    for(i = 0; i <= number; i++){
        for(j = 0; j <= number; j++){
            for(x = 0; x <= number; x++){
                if(i + j + x == number){
                    index++
                }
            }
            ;
        }
    }
    console.log(index);
}

combinations(['25'])