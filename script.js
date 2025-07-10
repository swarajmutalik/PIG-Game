"use strict";

// Selecting Elements
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

let currentScore = 0;

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
    current0element.textContent = currentScore;
  } else {
    // Switch to next player
  }
});
