const choices = ["rock", "paper", "scissors", "lizard", "spock"];

const rules = {
  rock: {
    beats: ["scissors", "lizard"],
    reasons: {
      scissors: "Rock crushes Scissors",
      lizard: "Rock crushes Lizard"
    }
  },
  paper: {
    beats: ["rock", "spock"],
    reasons: {
      rock: "Paper covers Rock",
      spock: "Paper disproves Spock"
    }
  },
  scissors: {
    beats: ["paper", "lizard"],
    reasons: {
      paper: "Scissors cuts Paper",
      lizard: "Scissors decapitates Lizard"
    }
  },
  lizard: {
    beats: ["spock", "paper"],
    reasons: {
      spock: "Lizard poisons Spock",
      paper: "Lizard eats Paper"
    }
  },
  spock: {
    beats: ["scissors", "rock"],
    reasons: {
      scissors: "Spock smashes Scissors",
      rock: "Spock vaporizes Rock"
    }
  }
};

const resultText = document.getElementById("resultText");
const reasonText = document.getElementById("reasonText");
const computerChoiceText = document.getElementById("computerChoice");

const buttons = document.querySelectorAll(".btn");
const resetBtn = document.getElementById("resetGame");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(btn => {
  btn.addEventListener("click", () => playGame(btn.dataset.choice));
});

function playGame(playerChoice) {
  clearButtonHighlights();

  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];

  highlightComputerChoice(computerChoice);

  computerChoiceText.textContent = `Computer chose: ${computerChoice}`;

  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie!";
    reasonText.textContent = "";
    return;
  }

  if (rules[playerChoice].beats.includes(computerChoice)) {
    resultText.textContent = "You win!";
    reasonText.textContent = rules[playerChoice].reasons[computerChoice];
    playerScore++;
  } else {
    resultText.textContent = "Computer wins!";
    reasonText.textContent = rules[computerChoice].reasons[playerChoice];
    computerScore++;
  }

  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}

function highlightComputerChoice(choice) {
  const btn = document.querySelector(`button[data-choice="${choice}"]`);
  if (btn) btn.classList.add("computer");
}

function clearButtonHighlights() {
  buttons.forEach(btn => btn.classList.remove("computer"));
}

resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("playerScore").textContent = 0;
  document.getElementById("computerScore").textContent = 0;

  resultText.textContent = "Make your choice.";
  reasonText.textContent = "";
  computerChoiceText.textContent = "";

  clearButtonHighlights();
});
