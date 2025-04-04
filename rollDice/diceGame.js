const prompt = require('prompt-sync')();

function rollDice(){

    do{
        answer = prompt("Would you like to roll the dice? y/n ")
    } while(answer !== 'y' && answer !== 'n')

    const rndInt = Math.floor(Math.random() * 6) + 1

    if(answer == 'y'){
        console.log(`You rolled: ${rndInt}`);
    } else {
        console.log('Bye!');
    }
}
rollDice()