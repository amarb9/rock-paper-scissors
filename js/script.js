const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
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

const game = () => {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Rock, Paper, or Scissors?");
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);

        console.log(`Round ${i + 1}: ${result} comp: ${computerWins} playa: ${playerWins}`);

        if (result === "Player Wins!") {
            playerWins++;
        }
        else if (result === "Computer Wins!") {
            computerWins++;
        }
    }

    if (playerWins > computerWins) {
        console.log("Player wins the game!");
    }
    else if (computerWins > playerWins) {
        console.log("Computer wins the game!");
    }
    else {
        console.log("It's a tie game!");
    }
}

game();
