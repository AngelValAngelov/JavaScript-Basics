function scholarship(income, mark, minSalary) {
    income = Number(income);
    mark = Number(mark);
    minSalary = Number(minSalary);

    let socialScholaarship = 0
    let superMarkScholarship = 0

    if (minSalary > income) {
        if (mark > 4.5) {
            socialScholaarship = Math.floor(minSalary * 0.35);
        }
    }

    if (mark >= 5.5) {
        superMarkScholarship = Math.floor(mark * 25);
    }

    if (socialScholaarship == 0 && superMarkScholarship == 0) {
        console.log('You cannot get a scholarship!')
    }else if(socialScholaarship > superMarkScholarship) {
        console.log(`You get a Social scholarship ${socialScholaarship} BGN`)
    } else if (superMarkScholarship >= socialScholaarship) {
        console.log(`You get a scholarship for excellent results ${superMarkScholarship} BGN`)
    }

}
scholarship("480.00",
"4.60",
"450.00")


