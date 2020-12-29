function commissions(townName, salles){
    salles = Number(salles);
    result = 0

    if(townName == 'Sofia'){
        if(0 <= salles && salles <= 500){
            result = salles * 0.05;
        }else if(500 < salles && salles <= 1000){
            result = salles * 0.07;
        }else if(1000 < salles && salles <= 10000){
            result = salles * 0.08;
        }else if(salles > 10000){
            result = salles * 0.12;
        }
    }else if(townName == 'Varna'){
        if(0 <= salles && salles <= 500){
            result = salles * 0.045;
        }else if(500 < salles && salles <= 1000){
            result = salles * 0.075;
        }else if(1000 < salles && salles <= 10000){
            result = salles * 0.10;
        }else if(salles > 10000){
            result = salles * 0.13;
        }
    }else if(townName == 'Plovdiv'){
        if(0 <= salles && salles <= 500){
            result = salles * 0.055;
        }else if(500 < salles && salles <= 1000){
            result = salles * 0.08;
        }else if(1000 < salles && salles <= 10000){
            result = salles * 0.12;
        }else if(salles > 10000){
            result = salles * 0.145;
        }
    }

    if(result == 0){
        console.log('error')
    }else{
        console.log(`${result.toFixed(2)}`)
    }
}

commissions("Kaspichan",
"-50")



