function sumSeconds(first, second, third){
    first = Number(first);
    second = Number(second);
    third = Number(third);

    let sum = first + second + third

    let minutes = parseInt(sum / 60)
    let seconds = sum % 60
    
    console.log(`${minutes}:${(seconds.toString().padStart(2, '0'))}`)
}

sumSeconds("22", "7", "34")