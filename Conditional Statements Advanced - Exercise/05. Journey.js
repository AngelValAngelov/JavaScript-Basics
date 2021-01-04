function journey(budget, typeSeason){
    budget = Number(budget);
    let destination = '';
    let typeHousing = '';
    let price = 0;

    if(budget <= 100){
        destination = 'Bulgaria';
        if(typeSeason == 'summer'){
            typeHousing = 'Camp';
            price = budget * 0.30;
        }else{
            typeHousing = 'Hotel';
            price = budget * 0.70;
        }
    }else if(budget <= 1000){
        destination = 'Balkans';
        if(typeSeason == 'summer'){
            typeHousing = 'Camp';
            price = budget * 0.40;
        }else{
            typeHousing = 'Hotel';
            price = budget * 0.80;
        }
    }else{
        typeHousing = 'Hotel';
        destination = 'Europe';
        price = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeHousing} - ${price.toFixed(2)}`)
}

journey("1500", "summer")