function oldBooks(input){
    let searchingBook = input[0];
    let index = 1;
    let findBook = false;

    while(input[index] != "No More Books"){
        if(input[index++] == searchingBook){
            findBook = true;
            break;
        }
    }

    if(findBook){
        console.log(`You checked ${index - 2} books and found it.`);
    }else{
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
    }

}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


