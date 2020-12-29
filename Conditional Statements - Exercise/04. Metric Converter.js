function converter(number, sizeFrom, sizeTo){
    number = Number(number);
    
    if(sizeFrom === 'mm'){
        if(sizeTo === 'cm'){
            number *= 0.1 
        }else if(sizeTo ==='m'){
            number *= 0.001 
        }
    }else if(sizeFrom === 'cm'){
        if(sizeTo === 'mm'){
            number *= 10
        }else if(sizeTo === 'm'){
            number *= 0.01
        }
    }else if(sizeFrom === 'm'){
        if(sizeTo === 'mm'){
            number *= 1000
        }else if(sizeTo === 'cm'){
            number *= 100
        }
    }
    console.log(number.toFixed(3))
}

converter('5000','cm','m')