function petShop(dogCount, petCount) {
    let dogFoodPrice  = dogCount * 2.50;
    let petFoodPrice = petCount * 4;
    let allPrice = dogFoodPrice + petFoodPrice;
    console.log(`${allPrice} lv.`)
}

petShop(5, 4)