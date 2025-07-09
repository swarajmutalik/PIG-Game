"use strict";

// Selecting elements
const score0element = document.querySelector("#score--0");
const score1element = document.getElementById("score--1");
const diceelement = document.querySelector(".dice");

// Starting Conditions
score0element.textContent = 0;
score1element.textContent = 0;
diceelement.classList.add("hidden");
