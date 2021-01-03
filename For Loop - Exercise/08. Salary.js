function salary(input) {
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);

    for (let index = 2; index < input.length; index++) {
        const element = input[index];
        if (element == 'Facebook') {
            if (salary - 150 > 0) {
                salary -= 150;
            } else {
                salary = 0;
                console.log("You have lost your salary."); break;
            }
        } else if (element == 'Instagram') {
            if (salary - 100 > 0) {
                salary -= 100;
            } else {
                salary = 0;
                console.log("You have lost your salary."); break;
            }
        } else if (element == 'Reddit') {
            if (salary - 50 > 0) {
                salary -= 50;
            } else {
                salary = 0;
                console.log("You have lost your salary."); break;
            }
        }
    }
    if(salary != 0) {
        console.log(salary);
    }
}

salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])

