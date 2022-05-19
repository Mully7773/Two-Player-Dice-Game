"use strict";

// Selecting elements
const scoreZeroEl = document.querySelector("#score--0");
const scoreOneEl = document.getElementById("score--1");
const currentScoreZeroEl = document.getElementById("current--0");
const currentScoreOneEl = document.getElementById("current--1");
const player = document.querySelector(".player");
const playerZero = document.querySelector(".player--0");
const playerOne = document.querySelector(".player--1");
// const activePlayer = document.querySelector(".player--active");
const diceEl = document.querySelector(".dice");
const rollBtn = document.querySelector(".btn--roll");
const newBtn = document.querySelector(".btn--new");
const holdBtn = document.querySelector(".btn--hold");

// Starting conditions
scoreZeroEl.textContent = 0;
scoreOneEl.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Dice roll functionality
rollBtn.addEventListener("click", function () {
  // generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `./assets/Dice-${dice}.png`;
  //check for rolled 1, if true,

  //   for (let i = 0; i < players.length; i++) {
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerOne.classList.toggle("player--active");
    playerZero.classList.toggle("player--active");

    // document.quer(`current--${activePlayer}`).classList.remove("player--active");
    // currentScoreZeroEl.textContent = currentScore;
    // playerZero.classList.remove("player--active");
    // playerOne.classList.add("player--active");
    // let inactivePlayer = player.classList.remove("player--active");
    // let activePlayer = player.classList.add("player--active");
    // activePlayer = !activePlayer;
    // switch to next player
    //   activePlayer = !activePlayer;
  }
  //   }
});
