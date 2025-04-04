const prompt = require('prompt-sync')();

function playerMove(p1, p2){
    p1 = prompt('Enter Player 1 move: ')
    p2 = prompt("Enter p2 move: ")

    let playerOneCounter = 0
    let playerTwoCounter = 0
    let result = ''

    if(p1 == p2){
        console.log('Draw!')
    } else if ((p1 == 'rock' && p2 == 'scissors')
        ||(p1 == 'scissors' && p2 == 'paper')
        ||(p1 == 'paper' && p2 == 'rock')){
        console.log('player 1 wins!')
    } else {
        console.log('player 2 wins!')
    }
}

playerMove()

