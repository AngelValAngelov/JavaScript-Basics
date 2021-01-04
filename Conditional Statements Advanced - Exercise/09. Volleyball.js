function volleyball(typeYear, holidays, weekends) {
    holidays = Number(holidays);
    weekends = Number(weekends);


    let days = 0


    if(typeYear == 'normal'){
        days = ((48 - weekends) * 3/4) + weekends + (holidays * 2/3);
    } else {
        days = ((48 - weekends) * 0.75 + weekends + (holidays * 2 / 3)) * 1.15;
    }

    console.log(Math.floor(days));
}

volleyball("normal",
"3",
"2")


