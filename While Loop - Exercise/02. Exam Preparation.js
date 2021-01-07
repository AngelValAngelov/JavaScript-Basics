function examPreparation(input){
    let badExams = Number(input[0]);
    let index = 1;
    let sumGoodExams = 0;
    let badExamStop = false;
    let countBadMarks = 0;
    let countGoodMarks = 0;
    let lastExamName = '';

    while(input[index] != 'Enough'){
        lastExamName = input[index++];
        if(Number(input[index]) > 4){
            sumGoodExams += Number(input[index++]);
            countGoodMarks++;
        }else{
            sumGoodExams += Number(input[index++]);
            countBadMarks++;
            badExams--;
            if(badExams == 0){                
                badExamStop = true;
                break;
            }
        }
    }

    if(badExamStop){
        console.log(`You need a break, ${countBadMarks} poor grades.`);
    }else{
        let averageMark = sumGoodExams / (countBadMarks + countGoodMarks);
        let allMarks = countGoodMarks + countBadMarks;
        console.log(`Average score: ${averageMark.toFixed(2)}`);
        console.log(`Number of problems: ${allMarks}`);
        console.log(`Last problem: ${lastExamName}`);
    }
}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


