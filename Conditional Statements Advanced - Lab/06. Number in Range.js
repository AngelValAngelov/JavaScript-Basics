function range(number){
    number = Number(number);

    if(-100 <= number && number <= 100){
        if(number != 0){
            console.log('Yes');
        }else{
            console.log('No');
        }
    } else {
        console.log('No');
    }
}

range("0")