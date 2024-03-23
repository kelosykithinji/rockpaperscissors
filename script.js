//FUNCTION THAT WILL RANDOMLY RETURN ROCK PAPER SCISSORS
function getComputerChoice(){
    //generate random numbers between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
    
    //put the random numbers to rock paper  scissors
    switch (randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
//check logic
console.log(getComputerChoice());

  //function that plays single round of rock paper scissors
  function playRound(playerSelection, computerSelection){

    //make player choice case in-sensitive
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if(playerChoice === computerChoice){
        return 'It is a tie!';
    }else if ((playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
    ) {
            return 'You Win!';
        } else {
          return 'Computer Wins!'  
        }    
  }

function generateComputerChoice (){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//function to play five round game keeps scores and reports loser or winner
function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice:").toLowerCase();
        const computerSelection = generateComputerChoice();

        const roundResult = playRound(playerSelection, computerSelection);

        if (roundResult === 'You win!') {
            playerScore++;
        } else if (roundResult === 'Computer wins!') {
            computerScore++;
        }

        console.log(`Round ${i + 1}: ${roundResult}`);
    }

    if (playerScore > computerScore) {
        console.log('You win the game!');
    } else if (playerScore < computerScore) {
        console.log('Computer wins the game!');
    } else {
        console.log('It\'s a tie');
    }
}

playGame();



    























