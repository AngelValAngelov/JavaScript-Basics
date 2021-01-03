function histogram(input){
    let n = input[0];
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let numbersCount = 0;

    for(let i = 1; i <= n; i++){
        numbersCount++;
        if(input[i] < 200){
            p1++; 
        }else if(input[i] >= 200 && input[i] < 400){
            p2++;
        }else if(input[i] >= 400 && input[i] < 600){
            p3++;
        }else if(input[i] >= 600 && input[i] < 800){
            p4++;
        }else{
            p5++;
        }
    }

    let p1Result = (p1 / numbersCount * 100).toFixed(2);
    let p2Result = (p2 / numbersCount * 100).toFixed(2);
    let p3Result = (p3 / numbersCount * 100).toFixed(2);
    let p4Result = (p4 / numbersCount * 100).toFixed(2);
    let p5Result = (p5 / numbersCount * 100).toFixed(2);

    console.log(`${p1Result}%`);
    console.log(`${p2Result}%`);
    console.log(`${p3Result}%`);
    console.log(`${p4Result}%`);
    console.log(`${p5Result}%`);
}

histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])

