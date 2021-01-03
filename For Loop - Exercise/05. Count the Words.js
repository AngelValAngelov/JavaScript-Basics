function countTheWords(text){
    let wordsCount = 1;

    for(let i = 0; i < text.length; i++){
        if(text[i] == ' '){
            wordsCount++;
        }
    }

    if(wordsCount > 10){
        console.log(`The message is too long to be send! Has ${wordsCount} words.`);
    }else{
        console.log(`The message was send successfully!`);
    }
}

countTheWords('This message has ten words and you can send it!')