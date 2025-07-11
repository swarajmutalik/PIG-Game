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

let scores, currentScore, activePlayer, playing;

// Starting Conditions

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0element.textContent = 0;
  score1element.textContent = 0;
  current0element.textContent = 0;
  current1element.textContent = 0;

  player0element.classList.remove("player--winner");
  player1element.classList.remove("player--winner");
  player0element.classList.add("player--active");
  player1element.classList.remove("player--active");
  diceelement.classList.add("hidden");
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0element.classList.toggle("player--active");
  player1element.classList.toggle("player--active");
};

// Rolling Dice Functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
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
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // Add current score to the active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceelement.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
