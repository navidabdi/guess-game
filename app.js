// Generate A Random Number
// Give The Usres the ability to guess
// If they guess and they are wrong, asks them again (Hint)
// If they win - say that they won

// function guessGame(){

//     let randNumber = Math.floor(Math.random() * 6)+1;
//     let userGuess = document.getElementById('userGuess').value;

//     let userGuessDom = document.querySelector('.user-guess');
//     let gameNumDom = document.querySelector('.game-nubmer');

//     let showWonOrLose = document.querySelector('.won-lose h2');

//     let totalWonDom = document.querySelector('.totalWonDom');
//     let totalLoseDom = document.querySelector('.totalLoseDom');

//     let totalWon = 0;
//     let totalLose= 0;
//     let totalGames =0;

//     if(userGuess < 1 || userGuess > 6){
//         showWonOrLose.classList.remove('won');
//         showWonOrLose.innerHTML = 'Choose Between 1 - 6';
//     }else {

//         if(randNumber == userGuess){
//             totalWon++;
//             totalWonDom.innerHTML = totalWon;

//             showWonOrLose.classList.add('won');
//             showWonOrLose.innerHTML = 'You Are Won!';
//         }else{
//             totalLose++;

//             totalLoseDom.innerHTML = totalLose;
//             showWonOrLose.classList.remove('won');
//             showWonOrLose.innerHTML = 'You Are Loose!';
//         }

//         userGuessDom.innerHTML = userGuess;
//         gameNumDom.innerHTML = randNumber;

//     }

// }

// let btn = document.querySelector('.sumbit-guess');
// btn.addEventListener('click',()=>{
//     guessGame();
// })

let randNumber = Math.floor(Math.random() * 100) + 1;
let userGuess = document.getElementById('userGuess');
let userGuessDom = document.querySelector('.user-guess');
let gameNumDom = document.querySelector('.game-nubmer');
let showWonOrLose = document.querySelector('.won-lose h2');
let sumbitGuess = document.querySelector('.sumbit-guess');
let userGuessNumber;
console.log(randNumber);
userGuess.addEventListener('change', (e) => {
  //   console.log(e);
  userGuessNumber = e.target.value;
});
sumbitGuess.addEventListener('click', (event) => {
  checkTheGess(randNumber, userGuessNumber);

  //   console.log(randNumber);
});

function checkTheGess(randNumber, userGuessNumber) {
  if (userGuessNumber == randNumber) {
    showWonLose('Your Gess Is True!');
    // return true;
  } else if (userGuessNumber > randNumber) {
    showWonLose('Your Gess Is Higher!');
    // return false;
  } else {
    showWonLose('Your Gess Is Lower!');
    // return false;
  }
}
function showWonLose(message) {
  showWonOrLose.innerText = message;
}
// showWonOrLose = 'message';
