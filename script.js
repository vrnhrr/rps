function playGame(userChoice) {
  const resultText = document.getElementById("resultText");
  const computerChoiceText = document.getElementById("computerChoice");

  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  const randomIndex = Math.floor(Math.random() * 5);
  const computerChoice = choices[randomIndex];

  computerChoiceText.innerHTML = `Computer's choice: ${computerChoice}`;

  if (userChoice === computerChoice) {
    resultText.innerHTML = "It's a tie!";
    return;
  }

  const winRules = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
  };

  if (winRules[userChoice].includes(computerChoice)) {
    resultText.innerHTML = "You win!";
  } else {
    resultText.innerHTML = "Computer wins!";
  }
}
