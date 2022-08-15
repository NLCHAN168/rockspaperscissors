let p = playerSelection();
let c = getComputerChoice();

function getComputerChoice() {
  let playerSelection = Math.random() * 100 + 1;
  if (playerSelection < 33) {
    return "rock";
  }
  if (playerSelection > 33 && playerSelection < 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function play(playerSelection, getComputerChoice) {
  p = playerSelection();
  c = getComputerChoice();
  if (p === c) {
    console.log("Player selected " + p);
    console.log("Computer selected " + c);
    console.log("Tie!");
    return "Tie!";
  } else if (
    (p == "rock" && c == "scissors") ||
    (p == "paper" && c == "rock") ||
    (p == "scissors" && c == "paper")
  ) {
    console.log("Player selected " + p);
    console.log("Computer selected " + c);
    console.log("Win!");
    return "Win!";
  } else if (
    (p == "rock" && c == "paper") ||
    (p == "paper" && c == "scissors") ||
    (p == "scissors" && c == "rock")
  ) {
    console.log("Player selected " + p);
    console.log("Computer selected " + c);
    console.log("Lose!");
    return "Lose!";
  } else {
    console.log("Invalid player choice.");
  }
}

function playerSelection() {
  let z = prompt("Please choose Rock, Paper, or Scissors");
  return z.toLowerCase();
}

function game() {
  let playerCounter = 0;
  let computerCounter = 0;
  let tie = 0;
  for (let i = 0; i < 5; i++) {
    let result = play(playerSelection, getComputerChoice);
    if (result == "Win!") {
      playerCounter++;
    }
    if (result == "Lose!") {
      computerCounter++;
    } else {
      tie++;
    }
  }
  console.log("Player wins: " + playerCounter);
  console.log("Computer wins: " + computerCounter);
  console.log("Ties: " + tie);
}

game();
