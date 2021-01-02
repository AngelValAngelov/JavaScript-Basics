function vowelsSum(word){
    let a = 1;
    let e = 2;
    let i = 3;
    let o = 4;
    let u = 5;
    let sum = 0;

    for(let z = 1; z < word.length; z++){
        if(word[z] == 'a'){
            sum += a;
        }else if(word[z] == 'e'){
            sum += e;
        }else if(word[z] == 'i'){
            sum += i;
        }else if(word[z] == 'o'){
            sum += o;
        }else if(word[z] == 'u'){
            sum += u;
        }
    }

    console.log(sum);
}

vowelsSum("hi")