const random = parseInt(Math.random() * 100 + 1);
const submit = document.getElementById("subt");
const userInput = document.getElementById("guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const loworHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) alert("Please enter a valid number");
  else if (guess < 1 || guess > 100) alert("Enter number withing the range");
  else {
    prevGuess.push(guess);
    if (numGuess == 11) {
      displayGuess(guess);
      displayMessage(`Game over. Last Guess was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
      numGuess++;
    }
  }
}

//for printing the validated guess
function checkGuess(guess) {
  if (guess === random) {
    displayMessage(`You guessed it right`);
    endGame()
  } else if (guess < random) displayMessage(`Your guess ${guess} is less than the number`);
  else{
    displayMessage(`Your guess ${guess} is more than the number`)
  }
}

//for displaying the message
function displayMessage(message) {
  loworHi.innerHTML(`<h2>${message}</h2>`)
}

//displaying the guess
function displayGuess(guess) {
  userInput.value=''
  guessSlot.innerHTML+=`${guess}`
  numGuess++
  remaining.innerHTML(`${11-numGuess}`)
}

function endGame() {}

function newGame() {}
