"use strict";

/*console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";
document.querySelector(".number").textContent = 18;

document.querySelector(".guess").value = 18;*/

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    document.querySelector(".message").textContent = "No Number!!";
  } else if (guessNumber === randomNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guessNumber != randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guessNumber > randomNumber ? "Too High!!" : "Too Low!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!!";
      document.querySelector(".score").textContent = 0;
    }
  }
  /*(##Another Method)} else if (guessNumber < randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!!";
      document.querySelector(".score").textContent = 0;
    }
  }*/
});

document.querySelector(".again").addEventListener("click", function () {
  score = 5;
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";

  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
});
