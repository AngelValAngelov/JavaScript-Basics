function fitnessCard(sum, gender, age, sport){
    let flag = false;
    let mountlyTax = 0

    if(sport == 'Gym' && gender == 'm'){
        if(age < 20){
            mountlyTax = 42 * 0.80;
        }else{
            mountlyTax = 42;
        }
        if(sum >= mountlyTax){
            flag = true;
        }
    } else if(sport == 'Gym' && gender == 'f'){
        if(age < 20){
            mountlyTax = 35 * 0.80;
        }else{
            mountlyTax = 35;
        }
        if(sum >= mountlyTax){
            flag = true;
        }
    }else if(sport == 'Boxing' && gender == 'm'){
        if(age < 20){
            mountlyTax = 41 * 0.80;
        }else{
            mountlyTax = 41;
        }
        if(sum >= mountlyTax){
            flag = true;
        }
    }else if(sport == 'Boxing' && gender == 'f'){
        if(age < 20){
            mountlyTax = 37 * 0.80;
        }else{
            mountlyTax = 37;
        }
        if(sum >= mountlyTax){
            flag = true;
        } 
    }else if(sport == 'Yoga' && gender == 'm'){
        if(age < 20){
            mountlyTax = 45 * 0.80;
        }else{
            mountlyTax = 45;
        }
        if(sum >= mountlyTax){
            flag = true;
        }
    }else if(sport == 'Yoga' && gender == 'f'){
        if(age < 20){
            mountlyTax = 42 * 0.80;
        }else{
            mountlyTax = 42;
        }
        if(sum >= mountlyTax){
            flag = true;
        }
    }else if(sport == 'Zumba' && gender == 'm'){
        if(age < 20){
            mountlyTax = 34 * 0.80;
        }else{
            mountlyTax = 34;
        }
        if(sum >= mountlyTax){
            flag = true;
        }
    }else if(sport == 'Zumba' && gender == 'f'){
        if(age < 20){
            mountlyTax = 31 * 0.80;
        }else{
            mountlyTax = 31;
        }
        if(sum >= mountlyTax){
            flag = true;
        }
    }else if(sport == 'Dances' && gender == 'm'){
        if(age < 20){
            mountlyTax = 51 * 0.80;
        }else{
            mountlyTax = 51;
        }
        if(sum >= mountlyTax){
            flag = true;
        }
    }else if(sport == 'Dances' && gender == 'f'){
        if(age < 20){
            mountlyTax = 53 * 0.80;
        }else{
            mountlyTax = 53;
        }
        if(sum >= mountlyTax){
            flag = true;
        }
    }else if(sport == 'Pilates' && gender == 'm'){
        if(age < 20){
            mountlyTax = 39 * 0.80;
        }else{
            mountlyTax = 39;
        }
        if(sum >= mountlyTax){
            flag = true;
        }
    }else if(sport == 'Pilates' && gender == 'f'){
        if(age < 20){
            mountlyTax = 37 * 0.80;
        }else{
            mountlyTax = 37;
        }
        if(sum >= mountlyTax){
            flag = true;
        }
    }
    if(flag){
        console.log(`You purchased a 1 month pass for ${sport}.`);
    }else{
        let moneyNeeded = mountlyTax - sum;
        console.log(`You don't have enough money! You need $${moneyNeeded.toFixed(2)} more.`);
    }
}

fitnessCard(20, 'f', 15, 'Yoga')