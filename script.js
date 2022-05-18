"use strict";

// Selecting elements
const scoreZeroEl = document.querySelector("#score--0");
const scoreOneEl = document.getElementById("score--1");
const currentScoreZeroEl = document.getElementById("current--0");
const currentScoreOneEl = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const rollBtn = document.querySelector(".btn--roll");
const newBtn = document.querySelector(".btn--new");
const holdBtn = document.querySelector(".btn--hold");

// Starting conditions
scoreZeroEl.textContent = 0;
scoreOneEl.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;

// Dice roll functionality
rollBtn.addEventListener("click", function () {
  // generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `./assets/Dice-${dice}.png`;
  //check for rolled 1, if true,
  if (dice !== 1) {
    currentScore += dice;
    currentScoreZeroEl.textContent = currentScore; //Change later
  } else {
    // switch to next player
  }
});
