/* ------------------------------ TASK 5 -----------------------------------
Parašykite TS funkciją, kuri atlieka žirklės/popierius/akmuo žaidimo patikrinimą ir grąžina atsakymą.
Funkcija priima du tekstus ir grąžina tekstą.

Pvz.:
  "scissors", "paper" --> "Player 1 won!"
  "scissors", "rock" --> "Player 2 won!"
  "paper", "paper" --> "Draw!"
-------------------------------------------------------------------------- */

// Define the type for the valid choices
type Choice = 'rock' | 'paper' | 'scissors';

function game(text0: Choice, text1: Choice): string {
  if (text0 === text1){
    return "Draw!";
  }
  
  switch (text0) {
    case 'rock':
      return text1 === 'scissors' ?  "Player 1 won!" : "Player 2 won!";
    case 'paper':
      return text1 === 'rock' ?  "Player 1 won!" : "Player 2 won!";
    case 'scissors':
      return text1 === 'paper' ?  "Player 1 won!" : "Player 2 won!";
  }
}

console.log(game('rock', 'paper'))
console.log(game('paper', 'paper'))
console.log(game('rock', 'scissors'))