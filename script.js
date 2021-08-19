let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "Please guess a number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "You've guessed correctly!";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high!";
  }
});
