let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

// Make the check button clickable
document.querySelector(".check").addEventListener("click", function () {
  // Fetch the value of the input
  const guess = Number(document.querySelector(".guess").value);
  // Check if the input box is empty
  if (!guess) {
    displayMessage("Please guess a number!");
    // When the guess is right
  } else if (guess === secretNumber) {
    displayMessage("You've guessed correctly!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60B347";
    document.querySelector(".number").style.width = "30rem";
    // Set the highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // If the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } // Show failed message when guessed wrong 20 times and set the score to 0;
    else {
      displayMessage("You've lost. Try again!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
// Reset
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
