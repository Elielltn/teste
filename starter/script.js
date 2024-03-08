'use strict';

const rolldice = function () {
  dice = Math.trunc(Math.random() * 6 + 1);
  diceImg.src = `dice-${dice}.png`;
  if (dice == 1 && activePlayerNum === 0) {
    switchSides();
    activePlayerNum = 1;
    currentScores[0].textContent = 0;
    return activePlayerNum, dice;
  } else if (dice == 1 && activePlayerNum === 1) {
    switchSides();
    activePlayerNum = 0;
    currentScores[1].textContent = 0;
    return activePlayerNum, dice;
  } else {
    addScore(activePlayerNum);
  }
  
};

const addScore = function(a){
    currentScores[a].textContent = parseInt(currentScores[a].textContent) + dice;
}

const initializer = function () {
  for (let i = 0; i < scores.length; i++) {
    scores[i].textContent = 0;
    currentScores[i].textContent = 0;
  }
  let activePlayerNum = 0;
  return activePlayerNum;
};

const switchSides = function () {
    for (let i = 0; i < players.length; i++){
        if (!players[i].classList.contains("player--active")){
            players[i].classList.add("player--active")
        } else {
            players[i].classList.remove("player--active")
        }
    }
}

const holdScore = function (){
    if (activePlayerNum === 0) {
        scores[0].textContent = parseInt(scores[0].textContent) + parseInt(currentScores[0].textContent)
    } else {
        scores[1].textContent = parseInt(scores[1].textContent) + parseInt(currentScores[1].textContent)
    }

    
}

const players = document.querySelectorAll('.player')
const scores = document.querySelectorAll('.score');
const currentScores = document.querySelectorAll('.current-score');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');

let activePlayerNum = 0;

btnNewGame.addEventListener('click', initializer);
btnRollDice.addEventListener('click', rolldice);
btnHold.addEventListener('click', holdScore(activePlayerNum))