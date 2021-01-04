function summerFit(degrees, dayPart){
    degrees = Number(degrees);
    let outfit = '';
    let shoes = '';

    if(dayPart == 'Morning'){
        if(10 <= degrees && degrees <= 18){
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        }else if(18 < degrees && degrees <= 24){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }else if(degrees >= 25){
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        }
    }else if(dayPart == 'Afternoon'){
        if(10 <= degrees && degrees <= 18){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }else if(18 < degrees && degrees <= 24){
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        }else if(degrees >= 25){
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
        }
    }else if(dayPart == 'Evening'){
        if(10 <= degrees && degrees <= 18){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }else if(18 < degrees && degrees <= 24){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }else if(degrees >= 25){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}

summerFit("28",
"Evening")


