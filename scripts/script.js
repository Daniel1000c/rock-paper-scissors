
/*
    This function will use Math.random in order
    to return a random string from 'Rock', 'Paper',
    'Scissors'
*/
function getComputerChoice() {

    //Create computer choice variable
    let computerMove;

    //Create randomNumber
    let randomNum = Math.floor(Math.random() * 3) + 1;
    
    if(randomNum === 1) {
        //Set computer choice to rock
        computerMove = 'rock';
    } else if(randomNum === 2) {
        //Set computer choice to paper
        computerMove = 'paper';
    } else {
        //Set computer choice to scissors
        computerMove = 'scissors';
    }

    //Return computer choice
   return computerMove;
}



/*
    Create getHumanChoice function that 
    prompts user for game input and returns said choice to 
    console
*/
function getHumanChoice() {
    //Propmt user for gamechoice
    let gameChoice = prompt('Pick a choice: Rock, Paper, or Scissors');

    //make choice lowercase
    let normalizedInput = gameChoice.toLowerCase();

    //Return game choice
    return normalizedInput;
}




//Create play game function
function playGame() {
    //Create global score counters for both computer and human player
    let playerScore = 0;
    let computerScore = 0;
    
    //Create playRound Function
    function playRound(humanChoice, computerChoice) {

        //Create if statement
        if(humanChoice == computerChoice) {
            console.log('Its a Tie');
        } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
            console.log(`${humanChoice} beats ${computerChoice}`);
            //Increment playerscore by 1
            playerScore++;
        } else if (humanChoice == 'paper' && computerChoice == 'rock') {
            console.log(`${humanChoice} beats ${computerChoice}`);
            playerScore++;
        } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            console.log(`${humanChoice} beats ${computerChoice}`);
            playerScore++;
        } else {
            console.log(`${computerChoice} beats ${humanChoice}`)
            computerScore++;
        }
    }
    
    //Create for loop
    for(let i = 1; i <= 5; i++) {
        //Create human variable
        let human = getHumanChoice();
        let computer = getComputerChoice();

        //Call playround function
        playRound(human, computer);

        //Console log choices
        console.log(human);
        console.log(computer);

        // player scores
        console.log(playerScore);
        console.log(computerScore);
        console.log('------------------*-----------------')
    }
}

playGame();

