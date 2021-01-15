function suppliesForSchool(pensQuantity, markersQuantity, cleaningFluid, discount){
    pensQuantity = Number(pensQuantity);
    markersQuantity = Number(markersQuantity);
    cleaningFluidPricePerLiter = Number(cleaningFluid);
    discount = Number(discount);

    let moneyPerPens = pensQuantity * 5.80;
    let moneyPerMarkers = markersQuantity * 7.20;
    let moneyPerCleaningFluid = cleaningFluid * 1.20;

    let price = moneyPerCleaningFluid + moneyPerMarkers + moneyPerPens;
    let priceWithDiscount = price * (100 - discount) * 0.01;

    console.log(priceWithDiscount.toFixed(3));
}

suppliesForSchool(2, 3, 2.5, 25)