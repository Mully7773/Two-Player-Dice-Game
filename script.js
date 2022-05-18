"use strict";

// Selecting elements
const scoreZeroEl = document.querySelector("#score--0");
const scoreOneEl = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");

scoreZeroEl.textContent = 0;
scoreOneEl.textContent = 0;
diceEl.classList.add("hidden");
