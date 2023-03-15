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
        return `Tie! You both chose ${playerSelect}!`;
    } else if (playerSelect === "rock" && computerSelect === "paper") {
        return
    }

}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(playRound(playerSelection, "Rock"))