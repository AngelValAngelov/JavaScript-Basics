function mountainRun(worldRecord, distanseMeters, secondsPerMeters){
    let newTime = distanseMeters * secondsPerMeters;
    let slowing = Math.floor(distanseMeters / 50) * 30;
    newTime += slowing;

    if(newTime < worldRecord){
        console.log(`Yes! The new record is ${newTime.toFixed(2)} seconds.`);
    }else{
        let overTime = newTime - worldRecord;
        console.log(`No! He was ${overTime.toFixed(2)} seconds slower.`);
    }
}

mountainRun(5554.36, 1340, 3.23);