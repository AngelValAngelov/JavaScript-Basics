function yardGreening(sqm) {
    
    let price = (sqm * 7.61) - (sqm * 7.61) * 0.18
    let discount = (sqm * 7.61) * 0.18
    console.log(`The final price is: ${price} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening(550)