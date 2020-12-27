function fishTank(length, width, height, percent) {
    let capacity = length * width * height
    let allLitters = capacity * 0.001
    percent = percent * 0.01
    let littersNeeded = allLitters * (1 - percent)
    console.log(littersNeeded)
}

fishTank(85, 75, 47, 17)