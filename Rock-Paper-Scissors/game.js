const prompt = require('prompt-sync')();

function playerMove(p1, p2, rounds){
    
    do{
    rounds = prompt("How many round would you like to play?")
    rounds = parseInt(rounds)
    } while(Number.isInteger(rounds) == false || rounds == 0)

       
        
    let playerOneScore = 0
    let playerTwoScore = 0

    while(rounds > 0){
        p1 = prompt('Enter Player 1 move: ')
        p2 = prompt("Enter player 2 move: ")

        if(p1 == p2){
            console.log('Draw!')
        } else if ((p1 == 'rock' && p2 == 'scissors')
            ||(p1 == 'scissors' && p2 == 'paper')
            ||(p1 == 'paper' && p2 == 'rock')){
            console.log('player 1 wins!')
            playerOneScore++
        } else {
            console.log('player 2 wins!')
            playerTwoScore++
    }
        rounds--
    }

    console.log('-------FINAL SCORE!------------')
    console.log(`Player 1 Final Score: ${playerOneScore}`)
    console.log(`Player 2 Final Score: ${playerTwoScore}`)
    console.log('--------------------------------')
    
}

playerMove()

