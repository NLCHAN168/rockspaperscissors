let p;
let c = getComputerChoice();
let playerCounter = 0;
let computerCounter = 0;
let ties = 0;

function getComputerChoice() {
  let num = Math.random() * 100 + 1;
  if (num < 33) {
    return "rock";
  }
  if (num > 33 && num < 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function tie() {}

function play(p) {
  c = getComputerChoice();
  if (p === c) {
    narrator.textContent =
      "Player selected " + p + ". Computer selected " + c + ". Result: Tie!";
    ties++;
    update();
    return "Tie!";
  } else if (
    (p == "rock" && c == "scissors") ||
    (p == "paper" && c == "rock") ||
    (p == "scissors" && c == "paper")
  ) {
    narrator.textContent =
      "Player selected " + p + ". Computer selected " + c + ". Result: Win!";
    playerCounter++;
    update();
    return "Win!";
  } else if (
    (p == "rock" && c == "paper") ||
    (p == "paper" && c == "scissors") ||
    (p == "scissors" && c == "rock")
  ) {
    narrator.textContent =
      "Player selected " + p + ". Computer selected " + c + ". Result: Lose!";
    computerCounter++;
    update();
    return "Lose!";
  } else {
    console.log("Invalid player choice.");
  }
}

function playerSelection(selection) {
  p = selection;
}

const main = document.createElement("div");
main.setAttribute("id", "main");
document.body.appendChild(main);
const rock = document.createElement("button");
rock.innerHTML = "Rock";
const paper = document.createElement("button");
paper.innerHTML = "Paper";
const scissors = document.createElement("button");
scissors.innerHTML = "Scissors";
const reset = document.createElement("button");
reset.innerHTML = "Reset score";
main.appendChild(rock);
main.appendChild(paper);
main.appendChild(scissors);
main.appendChild(reset);

rock.addEventListener("click", () => {
  playerSelection("rock");
  play(p, getComputerChoice());
});
paper.addEventListener("click", () => {
  playerSelection("paper");
  play(p, getComputerChoice());
});
scissors.addEventListener("click", () => {
  playerSelection("scissors");
  play(p, getComputerChoice());
});

reset.addEventListener("click", () => {
  playerCounter = 0;
  computerCounter = 0;
  ties = 0;
  update();
});

function update() {
  counterdiv.textContent =
    "Player score: " +
    playerCounter +
    " Computer score: " +
    computerCounter +
    " Ties: " +
    ties;
}

const counterdiv = document.createElement("div");
counterdiv.setAttribute("id", "counter");
counterdiv.textContent =
  "Player score: " +
  playerCounter +
  " Computer score: " +
  computerCounter +
  " Ties: " +
  ties;
document.body.appendChild(counterdiv);

const narration = document.createElement("div");
narration.setAttribute("id", "narration");
document.body.appendChild(narration);
var narrator = document.createElement("p");
narration.appendChild(narrator);
