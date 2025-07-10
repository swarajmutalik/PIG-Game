"use strict";

// Selecting Elements
const player0element = document.querySelector(".player--0");
const player1element = document.querySelector(".player--1");
const score0element = document.querySelector("#score--0");
const score1element = document.getElementById("score--1");
const current0element = document.getElementById("current--0");
const current1element = document.getElementById("current--1");

const diceelement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting Conditions
score0element.textContent = 0;
score1element.textContent = 0;
diceelement.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling Dice Functionality
btnRoll.addEventListener("click", function () {
  // Generating a random dice role
  const dice = Math.trunc(Math.random() * 6) + 1;
  // Display Dice
  diceelement.classList.remove("hidden");
  diceelement.src = `dice-${dice}.png`;

  // Check for Rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0element.classList.toggle("player--active");
    player1element.classList.toggle("player--active");
  }
});
