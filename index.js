const x = playerSelection;
const y = getComputerChoice;

function getComputerChoice() {
    let x = Math.random()*100 + 1;
    if (x < 33) {
        console.log(x);
        console.log("Computer chose Rock");
        return "rock";
    }
    if (x > 33 && x < 66) {
        console.log(x);
        console.log("Computer chose Paper");
        return "paper";
    }
    else {
        console.log(x);
        console.log("Computer chose Scissors");
        return "scissors";
    }
}

function play(playerSelection, computerSelection) {
    if (x === y) {
        console.log("Player selected " + x);
        console.log("Computer selected " + y);
        console.log("Tie!");
    }
    else if (x == "rock" && y == "scissors") {
        console.log("Player selected " + x);
        console.log("Computer selected " + y);
        console.log("Win!");
    }
    else if (x == "rock" && y == "paper") {
        console.log("Player selected " + x);
        console.log("Computer selected " + y);
        console.log("Lose!");
    }
}

function playerSelection() {
    let z = prompt("Please choose Rock, Paper, or Scissors");
    z.toLowerCase();
    return z;
}

play(x, y);