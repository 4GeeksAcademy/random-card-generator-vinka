/* eslint-disable */
import "bootstrap";
import "./style.css";

let timeForNewCard = 10;
let timer;

window.onload = function() {
  generateCard();
  cardWithTimer();
  document.querySelector(".button-new-card").onclick = generateCard;
};

function cardWithTimer() {
  timer10Seconds();
  timer = setInterval(updateTime, 1000);
}

function timer10Seconds() {
  let waitTime = setInterval(generateCard, 10000);
}

function updateTime() {
  timeForNewCard--;
  document.getElementById(
    "timer-display"
  ).innerHTML = `Seconds for a new card: ${timeForNewCard}`;
  if (timeForNewCard == 0) {
    timeForNewCard = 10;
  }
}

function generateCard() {
  let cardNumberOptions = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let cardFigureOptions = ["♦", "♥", "♠", "♣"];

  let selectedFigure = cardFigureOptions[Math.floor(Math.random() * 4)];
  let selectedNumber = cardNumberOptions[Math.floor(Math.random() * 13)];

  let figureColor =
    selectedFigure === "♦" || selectedFigure === "♥" ? "red" : "black";

  let outputNumber = document.getElementById("card-number");
  outputNumber.innerHTML = selectedNumber;
  let outputFigure = document.querySelectorAll(".card-container-figure");
  for (let i = 0; i < outputFigure.length; i++) {
    outputFigure[i].innerHTML = selectedFigure;
    outputFigure[i].style.color = figureColor;
  }
}
