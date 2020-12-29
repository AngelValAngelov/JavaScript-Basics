function worldRecord(recordTime, distance, timeSecondsPerMeter) {
    recordTime = Number(recordTime);
    distance = Number(distance);
    timeSecondsPerMeter = Number(timeSecondsPerMeter);

    swimmingTime = distance * timeSecondsPerMeter;
    timeTimeLoosing = Math.floor(distance / 15) * 12.5;
    allTime = swimmingTime + timeTimeLoosing;
    if (recordTime <= allTime) {
        secondsNeeded = allTime - recordTime;
        console.log(`No, he failed! He was ${secondsNeeded.toFixed(2)} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${allTime.toFixed(2)} seconds.`)
    }
}

worldRecord("55555.67",
"3017",
"5.03")

