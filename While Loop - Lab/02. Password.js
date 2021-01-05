function password(input){
    let user = input[0];
    let pass = input[1];
    let i = 2;

    while(pass != input[i]){
        i++;
        continue;
    }

    console.log(`Welcome ${user}!`);
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
