let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");
let resultOutput = document.getElementById("result");
let score = document.getElementById("score");
let displayChoice = document.getElementById("display-choices");
let playerChoice;
let computerChoice;

playerWins = 0;
computerWins = 0;

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const chosen = Math.floor(Math.random() * choices.length); 
    return choices[chosen];
}

const playRound = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return "It's a Tie!";
    }
    else if (
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "rock" && computerChoice === "scissors")
    ) {
        return "Player Wins!";
    }
    else {
        return "Computer Wins!";
    }
}

rockBtn.addEventListener("click", function() {
    playerChoice = "rock";
    let computerChoice = getComputerChoice();
    result = playRound(playerChoice, computerChoice);
    scoreCounter(result);
});

paperBtn.addEventListener("click", function() {
    playerChoice = "paper";
    let computerChoice = getComputerChoice();
    result = playRound(playerChoice, computerChoice);
    scoreCounter(result);
});

scissorsBtn.addEventListener("click", function() {
    playerChoice = "scissors";
    let computerChoice = getComputerChoice();
    result = playRound(playerChoice, computerChoice);
    scoreCounter(result);
});

function scoreCounter(result) {
    if (result === "Player Wins!") {
        resultOutput.textContent = result
        playerWins++;
    }
    else if (result === "Computer Wins!") {
        resultOutput.textContent = result
        computerWins++;
    }
    displayScore(playerWins, computerWins)
}

function displayScore(playerWins, computerWins) {
    score.textContent = `Player: ${playerWins} - Computer: ${computerWins}`

    if (playerWins === 5) {
        score.textContent = "Player wins the game!";
    }
    else if (computerWins === 5) {
        score.textContent = "Computer wins the game!";
    }
}

function displayChoices(playerChoice, computerChoice) {
    displayChoice.textContent = `Player chose ${playerChoice} and Computer chose ${computerChoice}!`;
}