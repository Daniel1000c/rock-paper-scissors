//Create score counters for player and computer
let playerCounter = 0;
let computerCounter = 0;

//Create game choice array
const gameChoices = ['rock', 'paper', 'scissors'];

//Get computer and player display elements
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const scoreDisplay = document.getElementById('scoreDisplay');
const playerScore = document.getElementById('playerScoreDisplay');
const computerScore = document.getElementById('computerScoreDisplay');
const gameResult = document.getElementById('result');

//Create playgame function
function playGame(playerChoice) {
    //Create empty result variable
    let result = '';

    //Create random computer choice
    let computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];

    //Create if statement
    if(playerChoice === computerChoice) {
        //Set result to tie message
        result = 'Its a Tie!!!';
    } else {
        //Create switch for player choice
        switch(playerChoice){
            case 'rock':
                result = (computerChoice === 'scissors' ? 'YOU WIN': 'YOU LOSE');
                break;
            case 'paper':
                result = (computerChoice === 'rock' ? 'YOU WIN': 'YOU LOSE');
                break;
            case 'scissors':
                result = (computerChoice === 'paper' ? 'YOU WIN': 'YOU LOSE');
                break;
        }
    }

    //Update text on game screen
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;

    //Set result text
    gameResult.textContent = result;

    //Create switch statement for score counter
    switch(result) {
        case 'YOU WIN':
            //Increase player score counter
            playerCounter++
            playerScore.textContent = playerCounter;
            break;
        case 'YOU LOSE':
            //Increase Computer Score counter
            computerCounter++;
            computerScore.textContent = computerCounter;
            break;
    }
}