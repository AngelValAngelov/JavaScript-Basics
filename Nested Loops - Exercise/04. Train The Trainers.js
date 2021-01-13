function marks(input){
    let markNumbers = input.shift();
    let examName = input.shift();
    let allMarks = 0;
    let sumAllMarks = 0;
    let examCount = 0;

    while(examName != 'Finish') {       
        for (let index = 0; index < markNumbers; index++) {
            mark = input.shift(); 
            sumAllMarks += Number(mark);

        }
        let finalMark = sumAllMarks / markNumbers;
        console.log(`${examName} - ${finalMark.toFixed(2)}.`);
        sumAllMarks = 0;
        allMarks += Number(finalMark);
        examCount++;
        examName = input.shift();
        
    }
    totalMark = allMarks / examCount;
    console.log(`Student's final assessment is ${totalMark.toFixed(2)}.`);
}

marks(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


