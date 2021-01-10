function cinemaTickets(input) {
    let movie = input.shift();
    let freeSeats = Number(input.shift());
    let standard = 0;
    let kid = 0;
    let student = 0;
    let capacity = 0;

    while (movie != 'Finish') {
        let ticket = input.shift();
        while (ticket != 'End') {
            if (ticket == 'Finish') {
                break;
            }
            capacity++;
            if (ticket == 'standard') {
                standard++;

            } else if (ticket == 'kid') {
                kid++;

            } else {
                student++;

            }
            if(capacity == freeSeats){
                break;
            }
            ticket = input.shift();
        }
        let percent = (capacity / freeSeats) * 100;
        console.log(`${movie} - ${percent.toFixed(2)}% full.`);
        if (ticket == 'Finish') {
            break;
        }
        movie = input.shift();
        freeSeats = input.shift();
        capacity = 0;
    }
    let allTicketsCount = student + kid + standard;
    console.log(`Total tickets: ${allTicketsCount}`);
    let percentStudentTickets = student / allTicketsCount * 100;
    console.log(`${percentStudentTickets.toFixed(2)}% student tickets.`);
    let percentStandardTickets = standard / allTicketsCount * 100;
    console.log(`${percentStandardTickets.toFixed(2)}% standard tickets.`);
    let percentKidTickets = kid / allTicketsCount * 100;
    console.log(`${percentKidTickets.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])

