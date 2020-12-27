function fruitMarket(strawberryPrice, bananasQuantity, orangesQuantity, raspberriesQuantity, strawberryQuantity) {
    let raspberriesPrice = Number(strawberryPrice) / 2
    let orangesPrice = Number(raspberriesPrice) * 0.60
    let bananasPrice = Number(raspberriesPrice) * 0.20
    strawberryPrice = Number(strawberryPrice)

    let strawberryMoney = strawberryPrice * strawberryQuantity
    let bananaMoney = bananasPrice * bananasQuantity
    let orangeMoney = orangesPrice * orangesQuantity
    let raspberrieMoney = raspberriesPrice * raspberriesQuantity
    let allMoney = strawberryMoney + bananaMoney + raspberrieMoney + orangeMoney
    
    console.log(allMoney)
}

fruitMarket("48", "10", "3.3", "6.5", "1.7")