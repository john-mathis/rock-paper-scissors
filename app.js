"use strict";
// Global Selectors

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let playerDisplay = document.querySelector(".player__display");
const roundResult = document.querySelector(".two");
const modal = document.querySelector(".modal");
const playAgain = document.querySelector(".play__again");
const playerScore = document.querySelector(".player__score");
const computerScore = document.querySelector(".computer__score");
const gameWinner = document.querySelector(".game__winner");

// New game function where all the components of the game resets

// If the target of the click is rock, paper, or scissors, replace the user's choice with the corresponding choice.
document.addEventListener("click", (evt) => {
  let target = evt.target;
  if (target === rock || target === paper || target === scissors) {
    playerDisplay.textContent = evt.target.textContent;
    roundWinner(userSelection(), computerSelection());
  }
});

// User selection function that takes the user's choice of weapon and returns it.
function userSelection() {
  let result;
  if (playerDisplay.textContent === rock.textContent) {
    result = "rock";
  } else if (playerDisplay.textContent === paper.textContent) {
    result = "paper";
  } else if (playerDisplay.textContent === scissors.textContent) {
    result = "scissors";
  }

  return result;
}

// Randomized computer selection that takes the computer's choice and returns it.
function computerSelection() {
  let computerDisplay = document.querySelector(".computer__display");
  let choices = [rock, paper, scissors];

  let randomChoice = choices[Math.floor(Math.random() * choices.length)];

  computerDisplay.textContent = randomChoice.textContent;

  let computerPick = randomChoice;

  return computerPick.className;
}

// Takes both the user and computer's choice of weapon to determine a winner, while also updating the score. Also prints the results of the round to the user.

let p1Score = 0;
let compScore = 0;
function roundWinner(thePlayerSelection, theComputerSelection) {
  let player = thePlayerSelection;
  let computer = theComputerSelection;

  if (player === computer) {
    roundResult.textContent = `Tie! ${player} ties with ${computer}`;
  } else if (player === "rock") {
    if (computer === "paper") {
      roundResult.textContent = `You lose! ${player} loses to ${computer}`;
      compScore++;
      computerScore.textContent = compScore;
    } else {
      roundResult.textContent = `You win! ${player} beats ${computer}`;
      p1Score++;
      playerScore.textContent = p1Score;
    }
  } else if (player === "scissors") {
    if (computer === "rock") {
      roundResult.textContent = `You lose! ${player} loses to ${computer}`;
      compScore++;
      computerScore.textContent = compScore;
    } else {
      roundResult.textContent = `You win! ${player} beats ${computer}`;
      p1Score++;
      playerScore.textContent = p1Score;
    }
  } else if (player === "paper") {
    if (computer === "scissors") {
      roundResult.textContent = `You lose! ${player} loses to ${computer}`;
      compScore++;
      computerScore.textContent = compScore;
    } else {
      roundResult.textContent = `You win! ${player} beats ${computer}`;
      p1Score++;
      playerScore.textContent = p1Score;
    }
  }

  if (p1Score === 5) {
    modal.style.display = "flex";
    gameWinner.textContent = "You win!";
  } else if (compScore === 5) {
    modal.style.display = "flex";
    gameWinner.textContent = "You lose!";
  }
}

function restartGame() {
  modal.style.display = "none";
  p1Score = 0;
  compScore = 0;
  playerScore.textContent = p1Score;
  computerScore.textContent = compScore;
  roundResult.textContent = "First to score 5 points wins the game";
}

// Play again option
playAgain.addEventListener("click", restartGame);
