function walking(input) {
    let goal = 10000;
    let index = 0;
    let steps = 0;

    while (index < input.length) {
        if (input[index] == 'Going home') {
            index++;
            continue;
        }else{
            steps += Number(input[index++]);
        }

        if (steps >= goal) {
            break;
        }
    }

    if (steps < goal) {
        let difference = goal - steps;
        console.log(`${difference} more steps to reach goal.`);
    } else {
        let difference = steps - goal;
        console.log(`Goal reached! Good job!`);
        console.log(`${difference} steps over the goal!`);
    }
}

walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])



