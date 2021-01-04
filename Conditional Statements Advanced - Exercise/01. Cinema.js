function cinema(type, rowsCount, colsCount){
    rowsCount = Number(rowsCount);
    colsCount = Number(colsCount);

    let income = 0;
    let fullHall = rowsCount * colsCount;

    if(type == 'Premiere'){
        income = fullHall * 12;
    }else if(type == 'Normal'){
        income = fullHall * 7.5;
    }else{
        income = fullHall * 5;
    }

    console.log(`${income.toFixed(2)} leva`)
}

cinema("Discount",
"12",
"30")


