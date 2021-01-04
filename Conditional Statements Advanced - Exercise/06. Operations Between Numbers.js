function numbersResult(num1, num2, sign){
    num1 = Number(num1);
    num2 = Number(num2);
    let result = 0;
    let evenOrOdd = 'odd';

    if(sign == '+'){
        result = num1 + num2;
    }else if(sign == '-'){
        result = num1 - num2;
    }else if(sign == '*'){
        result = num1 * num2;
    }else if(sign == '/'){
        result = num1 / num2;
    }else{
        result = num1 % num2;
    }

    if(result % 2 == 0){
        evenOrOdd = 'even';
    }

    if(num2 === 0){
        console.log(`Cannot divide ${num1} by zero`)
    }else if(sign == '+' || sign == '-' || sign == '*'){
        console.log(`${num1} ${sign} ${num2} = ${result} - ${evenOrOdd}`)
    }else if(sign == '/'){
        console.log(`${num1} / ${num2} = ${result.toFixed(2)}`)
    }else if(sign == '%'){
        console.log(`${num1} % ${num2} = ${result}`)
    }

}

numbersResult("7",
"3",
"*")


