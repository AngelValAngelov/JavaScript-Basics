function calculator(depositSum, time, percentPerYear) {
    let money = Number(depositSum) + Number(time) * (Number(depositSum) * Number(percentPerYear) / 100) / 12;
    console.log(money);
}
calculator(200, 3, 5.7)