function workingHours(hour, day){
    hour = Number(hour);

    if(day == 'Sunday'){
        console.log('closed');
    }else{
        if(10 <= hour && hour <= 18){
            console.log('open')
        }else{
            console.log('closed')
        }
    }
}

workingHours("11",
"Sunday")


