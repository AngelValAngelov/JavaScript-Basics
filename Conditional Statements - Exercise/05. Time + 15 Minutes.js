function timePlus(hours, minutes){
    hours = Number(hours);
    minutes = Number(minutes);
    
    let allSeconds = hours * 60 + minutes;
    let allSecondsPlus = allSeconds + 15;

    hours = parseInt(allSecondsPlus / 60);

    if(hours > 23){
        hours -= 24;
    }
    minutes = allSecondsPlus % 60;

    console.log(`${hours}:${minutes.toString().padStart(2, '0')}`)
}

timePlus("23", "59")