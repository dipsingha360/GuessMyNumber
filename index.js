"use strict";

// Element
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const correctAns = document.querySelector(".correct-ans");
const midText = document.querySelector(".mid-text");
const inputNum = document.querySelector(".input-num");
const checkButton = document.querySelector(".check-button");
const reset = document.querySelector(".reset");
const playAgain = document.querySelector(".play-again");

// Variables
let HIDDEN_NUMBER = Math.trunc(Math.random() * 20 + 1);
let SCORE = 20;
let HIGH0_SCORE = 0;

// Functionalities

function placeHolder(text) {
  midText.textContent = text;
}

checkButton.addEventListener("click", function () {
  const input = Number(inputNum.value);

  //   submitting no inputs or error checking
  if (!input || SCORE <= 0 || input > 20 || input <= 0) {
    placeHolder("Please input a valid number");
    if (SCORE == 0) {
      placeHolder("Game Over");
    }
  }
  //   when player win
  else if (input == HIDDEN_NUMBER) {
    correctAns.textContent = input;
    placeHolder("Correct Answer...");
    if (SCORE > HIGH0_SCORE) {
      highScore.textContent = SCORE;
    }
  }
  //   wrong guess!
  else if (input !== HIDDEN_NUMBER) {
    if (SCORE > 1) {
      placeHolder(input > HIDDEN_NUMBER ? "Number is High" : "Number is Low");
    }
    SCORE--;
    score.textContent = SCORE;
  } else if (SCORE == 0) {
    score.textContent = 0;
  }
});

// Reset button
reset.addEventListener("click", function () {
  HIDDEN_NUMBER = Math.trunc(Math.random() * 20 + 1);
  SCORE = 20;
  score.textContent = 0;
  highScore.textContent = 0;
  correctAns.textContent = "🎃";
  midText.textContent = "Guessing The Number...";
  inputNum.value = "";
});

// Play Again
playAgain.addEventListener("click", function () {
  HIDDEN_NUMBER = Math.trunc(Math.random() * 20 + 1);
  SCORE = 20;
  score.textContent = 0;
  correctAns.textContent = "🎃";
  midText.textContent = "Guessing The Number...";
  inputNum.value = "";
});
