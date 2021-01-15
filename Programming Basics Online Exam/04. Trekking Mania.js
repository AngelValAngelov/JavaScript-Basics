function weatherAgain(input) {
    let celsius = Number(input[0]);
 
    if (celsius < 5.00){
        console.log ("unknown");
    }else if (celsius <= 11.9){
        console.log("Cold");
    }else if (celsius <= 14.9){
        console.log("Cool");
    }else if (celsius <= 20.00){
        console.log("Mild");
    }else if (celsius <= 25.9){
        console.log("Warm");
    }else if (celsius <= 35.00){
        console.log("Hot");
    }else{
        console.log ("unknown");
    }
}

weatherAgain([16.5])