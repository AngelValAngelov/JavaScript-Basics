function areaOfFigures(figure, num, num2) {
    num = Number(num);
    num2 = Number(num2)
    if(figure == 'square') {
        let area = num * num;
        console.log(area.toFixed(3))
    } else if(figure == 'rectangle'){
        let area = num * num2
        console.log(area.toFixed(3))
    } else if(figure == 'circle') {
        let area = Math.PI * num ** 2
        console.log(area.toFixed(3))
    } else {
        let area = 0.5 * num * num2
        console.log(area.toFixed(3))
    }
}

areaOfFigures("triangle","4.5","20")