let randNumber = Math.floor(Math.random() * 100) + 1;
let userGuess = document.getElementById('userGuess');
let userGuessDom = document.querySelector('.user-guess');
let showWonOrLose = document.querySelector('.won-lose h2');
let sumbitGuess = document.querySelector('.sumbit-guess');
let resetBtn = document.querySelector('.reset');
let totalGuess = document.querySelector('.total-guess');

let userGuessNumber;
let userGesses = [];

userGuess.addEventListener('change', (e) => {
  userGuessNumber = e.target.value;
  userGesses.push(userGuessNumber);
});

sumbitGuess.addEventListener('click', () => {
  checkTheGess(randNumber, userGuessNumber);
});

resetBtn.addEventListener('click', () => {
  window.location.reload();
});

function checkTheGess(randNumber, userGuessNumber) {
  if (userGuessNumber == randNumber) {
    showWonLose('Your Gess Is True!', true);
  } else if (userGuessNumber > randNumber) {
    showWonLose('Your Gess Is Higher!');
  } else {
    showWonLose('Your Gess Is Lower!');
  }
}

function showWonLose(message, wonLose = false) {
  if (wonLose) {
    showWonOrLose.classList.add('won');
  }
  showWonOrLose.innerText = message;
  userGuessDom.innerText = userGesses;
  totalGuess.innerText = userGesses.length;
}
