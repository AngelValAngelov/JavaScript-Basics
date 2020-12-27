function charity(days_count, bakers_count, cakes_count, waffles_count, pancakes_count) {
    let cakes = Number(45)
    let waffles = Number(5.80)
    let pancakes= Number(3.20)

    let cakesMoney = cakes * cakes_count
    let wafflesMoney = waffles * waffles_count
    let pancakesMoney = pancakes * pancakes_count
    let allMoney = (cakesMoney + wafflesMoney + pancakesMoney) * days_count * bakers_count
    let costs = allMoney / 8
    allMoney -= costs
    console.log(allMoney)
}

charity(23, 8, 14, 30, 16)