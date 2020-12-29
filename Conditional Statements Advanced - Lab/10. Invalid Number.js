function invalidNumber(num){
    num = Number(num);

    if(num == 0 || (100 <= num && num <= 200)){
        console.log();
    }else{
        console.log('invalid');
    }
}

invalidNumber("101")