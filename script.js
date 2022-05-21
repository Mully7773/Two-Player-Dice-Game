"use strict";

// Selecting elements
const scoreZeroEl = document.querySelector("#score--0");
const scoreOneEl = document.getElementById("score--1");
let currentScoreZeroEl = document.getElementById("current--0");
let currentScoreOneEl = document.getElementById("current--1");
const player = document.querySelector(".player");
const playerZero = document.querySelector(".player--0");
const playerOne = document.querySelector(".player--1");
const diceEl = document.querySelector(".dice");
const rollBtn = document.querySelector(".btn--roll");
const newBtn = document.querySelector(".btn--new");
const holdBtn = document.querySelector(".btn--hold");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const ruleBtn = document.querySelector(".btn--rules");

//Rule button
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

ruleBtn.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    //if the modal does not contain the class name 'hidden' then run closeModal
    {
      closeModal();
    }
  }
});
// Starting conditions

let scores, currentScore, activePlayer, playing;

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scoreZeroEl.textContent = 0;
  scoreOneEl.textContent = 0;
  currentScoreZeroEl.textContent = 0;
  currentScoreOneEl.textContent = 0;

  diceEl.classList.add("hidden");
  playerZero.classList.remove("player--winner");
  playerOne.classList.remove("player-winner");
  playerOne.classList.remove("player--active");
  playerZero.classList.add("player-active");
  document.querySelector(`.win--${activePlayer}`).classList.add("hidden");
};
init();

let togglePlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerOne.classList.toggle("player--active");
  playerZero.classList.toggle("player--active");
};

// Dice roll functionality
rollBtn.addEventListener("click", function () {
  if (playing) {
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
      //Switch to the next player
      togglePlayer();
    }
  }
});

holdBtn.addEventListener("click", function () {
  if (playing) {
    //add current score to active player's score
    scores[activePlayer] += currentScore;
    console.log(currentScore);

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.win--${activePlayer}`)
        .classList.remove("hidden");
      document.querySelector(".dice").classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      playing = false;
      //NOTE: another way to disable the buttons as opposed to the 'playing' state variable
      // holdBtn.disabled = true;
      // rollBtn.disabled = true;
    } else {
      togglePlayer();
    }
  }
});

newBtn.addEventListener("click", function () {
  scores = [0, 0];
  currentScore = 0;
  scoreZeroEl.textContent = 0;
  scoreOneEl.textContent = 0;
  currentScoreZeroEl.textContent = 0;
  currentScoreOneEl.textContent = 0;
  console.log(currentScore);
  // diceEl.classList.add("hidden");
  document.querySelector(`.win--${activePlayer}`).classList.add("hidden");
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");

  playerOne.classList.remove("player--active");
  // activePlayer = activePlayer === 1 ? 0 : 0;
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");

  playing = true;
});
