function hotelRoom(month, nightCount){
    nightCount = Number(nightCount);
    let studio = 0;
    let apartment = 0;

    if(month == 'May' || month == 'October'){
        studio = 50 * nightCount;
        apartment = 65 * nightCount;
    }else if(month == 'June' || month == 'September'){
        studio = 75.20 * nightCount;
        apartment = 68.70 * nightCount;
    }else{
        studio = 76 * nightCount;
        apartment = 77 * nightCount;
    }

    if((nightCount > 7 && nightCount <= 14) && (month == 'May' || month == 'October')){
        studio = 50 * nightCount * 0.95;
    }else if(nightCount > 14 && (month == 'May' || month == 'October')){
        studio = 50 * nightCount * 0.70;
    }else if(nightCount > 14 && (month == 'June' || month == 'September')){
        studio = 75.20 * nightCount * 0.80;
    }
    if(nightCount > 14){
        if(month == 'May' || month == 'October'){
            apartment = 65 * nightCount * 0.90;
        }else if(month == 'June' || month == 'September'){
            apartment = 68.70 * nightCount * 0.90;
        }else{
            apartment = 77 * nightCount * 0.90;
        }
    }

    console.log(`Apartment: ${apartment.toFixed(2)} lv.`)
    console.log(`Studio: ${studio.toFixed(2)} lv.`)
}

hotelRoom("August",
"20")


