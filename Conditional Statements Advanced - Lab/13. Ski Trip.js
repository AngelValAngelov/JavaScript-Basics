function skiTrip(daysCount, typeHouse, mark){
    daysCount = Number(daysCount - 1);

    onePersonRoom = 18;
    apartment = 25;
    presidentApartment = 35;
    let result = 0

    if(typeHouse == 'room for one person'){
        if(daysCount < 10){
            result = daysCount * onePersonRoom;
        }else if(10 <= daysCount && daysCount <= 15){
            result = daysCount * onePersonRoom;
        }else if(daysCount > 15){
            result = daysCount * onePersonRoom;
        }
    }else if(typeHouse == 'apartment'){
        if(daysCount < 10){
            result = (daysCount * apartment) * 0.60;
        }else if(10 <= daysCount && daysCount <= 15){
            result = (daysCount * apartment) * 0.65;
        }else if(daysCount > 15){
            result = (daysCount * apartment) * 0.50;
        }
    }else if(typeHouse == 'president apartment'){
        if(daysCount < 10){
            result = (daysCount * presidentApartment) * 0.90;
        }else if(10 <= daysCount && daysCount <= 15){
            result = (daysCount * presidentApartment) * 0.85;
        }else if(daysCount > 15){
            result = (daysCount * presidentApartment) * 0.80;
        }
    }

    if(mark == 'positive'){
        result *= 1.25;
    }else{
        result *= 0.90;
    }

    console.log(`${result.toFixed(2)}`);
}

skiTrip(12,
'room for one person',
'positive')

