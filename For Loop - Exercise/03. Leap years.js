function leapYears(yearStart, yearLast){
    yearStart = Number(yearStart);
    yearLast = Number(yearLast);

    for(let i = yearStart; i <= yearLast; i+=4){
        console.log(i);
    }
}

leapYears("2020",
"2032")



