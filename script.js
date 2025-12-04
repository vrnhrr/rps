const rules = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function decideWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It is a tie!';
  }

  if (rules[userChoice].includes(computerChoice)) {
    return 'You win!';
  }

  return 'Computer wins!';
}

function updateScoreboard(result) {
  if (result === 'You win!') {
    playerScore++;
  } else if (result === 'Computer wins!') {
    computerScore++;
  }

  document.getElementById('playerScore').innerHTML = playerScore;
  document.getElementById('computerScore').innerHTML = computerScore;
}

function playGame(userChoice) {
  const resultText = document.getElementById('resultText');
  const computerChoiceText = document.getElementById('computerChoice');

  const computerChoice = getComputerChoice();
  const result = decideWinner(userChoice, computerChoice);

  resultText.innerHTML = result;
  computerChoiceText.innerHTML = `Computer choice: ${computerChoice}`;

  updateScoreboard(result);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  document.getElementById('playerScore').innerHTML = 0;
  document.getElementById('computerScore').innerHTML = 0;
  document.getElementById('resultText').innerHTML = 'Make your choice to start the game!';
  document.getElementById('computerChoice').innerHTML = "Computer's choice:";
}

// Attach reset button event
document.getElementById('resetGame').addEventListener('click', resetGame);
