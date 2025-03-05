"use strict";
function game(text0, text1) {
    if (text0 === text1) {
        return "Draw!";
    }
    switch (text0) {
        case 'rock':
            return text1 === 'scissors' ? "Player 1 won!" : "Player 2 won!";
        case 'paper':
            return text1 === 'rock' ? "Player 1 won!" : "Player 2 won!";
        case 'scissors':
            return text1 === 'paper' ? "Player 1 won!" : "Player 2 won!";
    }
}
console.log(game('rock', 'paper'));
console.log(game('paper', 'paper'));
console.log(game('rock', 'scissors'));
