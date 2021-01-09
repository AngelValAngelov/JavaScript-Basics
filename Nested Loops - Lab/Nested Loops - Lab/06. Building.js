function building(input){
    let floor = Number(input[0]);
    let rooms = Number(input[1]);
    let type = '';
    let result = '';

    for(i = floor; i > 0; i--){
        for(j = 0; j < rooms; j++){
            if(i % 2 == 0){
                if(i == floor){
                    type = 'L'
                }else{
                    type = 'O';  
                }
                
            }else{
                if(i == floor){
                    type = 'L'
                }else{
                    type = 'A';
                }                
            }
            result += ' ' + type + i + j;
        }
        console.log(`${result}`);
        result = '';
    }
}

building(["6", "4"])