const prompt = require('prompt-sync')();

function guessRandomNumber(numberOne, numberTwo, guess){
    do{
        numberOne = prompt("Enter the smaller number: ")
        numberOne = parseInt(numberOne)
    } while(Number.isInteger(numberOne) == false || numberOne == 0)

    do{
        numberTwo = prompt("Enter the bigger number: ")
        numberTwo = parseInt(numberTwo)
    } while(Number.isInteger(numberTwo) == false || numberTwo == 0)

    let randInt = Math.floor(Math.random() * (numberTwo - numberOne) + numberOne);

    do{
        guess = prompt("Guess A Number: ")
        guess = parseInt(guess)
    } while(Number.isInteger(guess) == false || guess == 0)

    if(guess == randInt){
        console.log('WOW!!! You Guessed Right!')
    } else{
        console.log('you Guessed Wrong!')
        console.log(`The Number Was: ${randInt}`)
    }
}

guessRandomNumber()