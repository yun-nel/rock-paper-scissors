const roundResult = document.querySelector(".round-result");

// Prompts for player selection until a valid answer is received and returns it.
function getPlayerChoice() {
    let playerSelection;

    while (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") {
        playerSelection = prompt("Rock, Paper, or Scissors?");
        playerSelection = capitaliseFirstLetter(playerSelection.toLowerCase());
    }

    return playerSelection;

} 

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

    if (playerSelect === computerSelect) {
        roundResult.textContent = (`Tie! You both chose ${playerSelect}`);
    } 

    if (playerSelect === "Rock" && computerSelect === "Paper") {
        roundResult.textContent = (`You lose! ${computerSelect} beats ${playerSelect}`);
    } else if (playerSelect === "Rock" && computerSelect === "Scissors") {
        roundResult.textContent = (`You win! ${playerSelect} beats ${computerSelect}`);
    }
 
    if (playerSelect === "Paper" && computerSelect === "Rock") {
        roundResult.textContent = (`You win! ${playerSelect} beats ${computerSelect}`);
    } else if (playerSelect === "Paper" && computerSelect === "Scissors") {
        roundResult.textContent = (`You lose! ${computerSelect} beats ${playerSelect}`);
    }

    if (playerSelect === "Scissors" && computerSelect === "Rock") {
        roundResult.textContent = (`You lose! ${computerSelect} beats ${playerSelect}`);
    } else if (playerSelect === "Scissors" && computerSelect === "Paper") {
        roundResult.textContent = (`You win! ${playerSelect} beats ${computerSelect}`);
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

// Plays a first to five game of Rock Paper Scissors, keeps score and reports the winner/loser at the end.
function game() {
    let playerRounds = 0;
    let computerRounds = 0;
    const buttons = document.querySelectorAll("button");
    const scoreboard = document.querySelector(".scoreboard");
  
    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        playRound(button.textContent, getComputerChoice());
  
        if (roundResult.textContent.includes("You win!")) {
          playerRounds++;
        } else if (roundResult.textContent.includes("You lose!")) {
          computerRounds++;
        }
  
        scoreboard.textContent = ("You: " + playerRounds + " " + "CPU: " + computerRounds);
  
        if (playerRounds === 5 || computerRounds === 5) {
          roundResult.textContent = result(playerRounds, computerRounds);
          playerRounds = 0;
          computerRounds = 0;
        }
      });
    });
  }
  
function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

game();