function titles(years, gender) {
    years = Number(years);

    if (gender == 'm') {
        if (years >= 16) {
            console.log('Mr.');
        } else {
            console.log('Master');
        }
    } else {
        if (years >= 16) {
            console.log('Ms.')
        } else {
            console.log('Miss')
        }
    }
}

titles("13.5",
    "m")



