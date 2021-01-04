function onTime(examHour, examMinute, hourComing, minuteComing){
    examHour = Number(examHour);
    examMinute = Number(examMinute);
    hourComing = Number(hourComing);
    minuteComing = Number(minuteComing);

    let timeExam = examHour * 60 + examMinute;
    let timeComing = hourComing * 60 + minuteComing;

    if(timeExam < timeComing){
        console.log('Late');
    }else if(timeExam > timeComing + 30){
        console.log('Early');               
    }else{
        console.log('On time');  
    }
    
    if(timeComing - timeExam >= 60){
        let time = Math.abs(timeComing - timeExam);
        let hour = Math.floor(time / 60);
        let minute = time % 60;
        console.log(`${hour}:${String(minute).padStart(2, '0')} hours after the start`)
    }else if(timeComing - timeExam > -60 && timeComing - timeExam < 0){
        let time = Math.abs(timeExam - timeComing);
        let minute = time % 60;
        console.log(`${minute} minutes before the start`)
    }else if(timeExam - timeComing < 60 && timeExam - timeComing < 0){
        let time =  Math.abs(timeExam - timeComing);
        let minute = time % 60;
        console.log(`${minute} minutes after the start`)
    }else{
        let time = Math.abs(timeExam - timeComing);
        let hour = Math.floor(time / 60);
        let minute = time % 60;
        console.log(`${hour}:${String(minute).padStart(2, '0')} hours before the start`)
    }

}

onTime("16",
"00",
"15",
"00")














