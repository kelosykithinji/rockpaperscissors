let playScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = [ "rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection){
    const computerSelection = getComputerChoice();
    let result;

    if(playerSelection === computerSelection){
        result = 'It is a tie!';
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")   
     ){
        result = "You Win!";
        playScore++;
     } else {
        result = "Computer Wins!";
        computerScore++;
     }
     UpdateResults(result);
     checkWinner();
}

function UpdateResults(roundResult){
    const divResultstElement = document.querySelector("#results");
    divResultstElement.textContent = `Round Result: ${roundResult}, player Score: ${playScore}, computer Score: ${computerScore}`;
}

function checkWinner(){
    const divResultstElement = document.querySelector("#results");
    if (playScore === 5){
        divResultstElement.textContent = "You win the game!";
        resetGame();
    } else if (computerScore === 5){
        divResultstElement.textContent = " Computer wins the game!";
        resetGame();
    }

    }

    function resetGame(){
        playerScore = 0;
        computerScore = 0;
    }


document.querySelector("#rock").addEventListener("click", () => playRound("rock"));
document.querySelector("#paper").addEventListener("click", () => playRound("paper"));
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors"));






