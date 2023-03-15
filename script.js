const playerSelection = "rock";

// Will randomly return the computer's choice as one of "Rock", "Paper" or "Scissors".
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else if (choice === 3) {
        return "Scissors";
    }

}

// Plays a single round of Rock Paper Scissors.
function playRound(playerSelect, computerSelect) {
    playerSelect = capitaliseFirstLetter(playerSelect.toLowerCase());
    computerSelect = capitaliseFirstLetter(computerSelect.toLowerCase());

    if (playerSelect === computerSelect) {
        return `Tie! You both chose ${playerSelect}`;
    } 

    if (playerSelect === "Rock" && computerSelect === "Paper") {
        return `You lose! ${computerSelect} beats ${playerSelect}`;
    } else if (playerSelect === "Rock" && computerSelect === "Scissors") {
        return `You win! ${playerSelect} beats ${computerSelect}`;
    }
 
    if (playerSelect === "Paper" && computerSelect === "Rock") {
        return `You win! ${playerSelect} beats ${computerSelect}`;
    } else if (playerSelect === "Paper" && computerSelect === "Scissors") {
        return `You lose! ${computerSelect} beats ${playerSelect}`;
    }

    if (playerSelect === "Scissors" && computerSelect === "Rock") {
        return `You lose! ${computerSelect} beats ${playerSelect}`;
    } else if (playerSelect === "Scissors" && computerSelect === "Paper") {
        return `You win! ${playerSelect} beats ${computerSelect}`;
    }

}


// Returns the result of a game.
function result(playerRounds, computerRounds) {
    if (playerRounds > computerRounds) {
        return "YOU WIN!";
    } else {
        return "YOU LOSE.";
    }
}

// Plays a first to five game of Rock Paper Scissors, keeps score and calls result() to report the winner/loser at the end.
function game() {
    let round;
    let playerRounds = 0;
    let computerRounds = 0;

    while (playerRounds < 5 && computerRounds < 5) {
        round = playRound(playerSelection, getComputerChoice());
        console.log(round);

        if (round.includes("You win!")) {
            playerRounds++;
        } else if (round.includes("You lose!")) {
            computerRounds ++;
        } else {}
    
    }
    
    console.log(playerRounds + " " + computerRounds);
    console.log(result(playerRounds, computerRounds));
}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(game())