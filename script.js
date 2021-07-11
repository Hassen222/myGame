'use strict'

const btnNewGame = document.querySelector('.btnNewGame');
const btnRollDice = document.querySelector('.btnRollDice');
const btnhold = document.querySelector('.btnhold');
let images = document.querySelector('.images');
let activePlayer = document.querySelector('.currentplayer1');
let totalplayer1 = document.querySelector('.totalplayer1');
let totalplayer2 = document.querySelector('.totalplayer2');
let winner = document.querySelector('.winner');
let leftSide = document.querySelector('.left');
let rightSide = document.querySelector('.right');

const instruction = document.querySelector('.instruction');
const closeBtn = document.querySelector('.closeBtn');
const hintBtn = document.querySelector('.hintBtn');

hintBtn.addEventListener('click',() => {
    instruction.style.display = 'block';
    closeBtn.style.display = 'block';
    hintBtn.style.display = 'none';
})

closeBtn.addEventListener('click',() => {
    instruction.style.display = 'none';
    closeBtn.style.display = 'none';
    hintBtn.style.display = 'block';
})



btnRollDice.addEventListener('click', () => {
    let diceGuess = Number( Math.trunc(Math.random() * 6 ) + 1 ) ;
    console.log(diceGuess);
    images.src = `images/${diceGuess}.jpg`;
    images.classList.add('active');
    if (diceGuess > 1) {
        activePlayer.textContent = Number(activePlayer.textContent) + diceGuess;
    } else if (diceGuess = 1 ) {
        activePlayer.textContent = 0;
        switcherBg();      
        if (activePlayer === document.querySelector('.currentplayer1') ) {
            activePlayer = document.querySelector('.currentplayer2');
        } else if (activePlayer !== document.querySelector('.currentplayer1') ) {
            activePlayer = document.querySelector('.currentplayer1');
        }
    }   
}) 

btnhold.addEventListener('click', () => {
    if (activePlayer === document.querySelector('.currentplayer1') ) {
        totalplayer1.textContent = Number(totalplayer1.textContent) + Number(activePlayer.textContent);
        activePlayer.textContent = 0;
        activePlayer = document.querySelector('.currentplayer2');
    } else if (activePlayer !== document.querySelector('.currentplayer1') ) {
        totalplayer2.textContent = Number(totalplayer2.textContent) + Number(activePlayer.textContent);
        activePlayer.textContent = 0;
        activePlayer = document.querySelector('.currentplayer1');    
    }
    switcherBg();
    if (totalplayer1.textContent >= 50) {
        winner.textContent = 'PLAYER 1 IS THE WINNER 🏆!' ;  
    } else if (totalplayer2.textContent >= 50) {
        winner.textContent = 'PLAYER 2 IS THE WINNER 🏆!' ;
    }
    if (totalplayer1.textContent >= 50 || totalplayer2.textContent >= 50 ) {
        images.classList.remove('active');
        leftSide.style.opacity = '0';
        rightSide.style.opacity = '0';
        btnRollDice.style.opacity = '0';
        btnhold.style.opacity = '0';
        btnRollDice.style.display = 'none';
        btnhold.style.display = 'none';
        btnNewGame.classList.remove('btnNewGame');
        btnNewGame.classList.add('btnNewGame2');
        winner.style.opacity = '1';
    }
})

btnNewGame.addEventListener('click', () => {
    images.classList.remove('active');
    btnRollDice.style.opacity = '1';
    btnhold.style.opacity = '1';
    btnRollDice.style.display = 'block';
    btnhold.style.display = 'block';
    btnNewGame.classList.remove('btnNewGame2');
    btnNewGame.classList.add('btnNewGame');
    activePlayer = document.querySelector('.currentplayer1');
    winner.style.opacity = '0';
    totalplayer1.textContent = 0;
    totalplayer2.textContent = 0;
    activePlayer.textContent = 0;
    leftSide.style.opacity = '1';
    rightSide.style.opacity = '1';
    if (leftSide.style.background !== 'rgba(251, 251, 251, 0.219)' ) {
        leftSide.style.background = 'rgba(251, 251, 251, 0.219)';
        rightSide.style.background = 'rgba(251, 251, 251, 0)';
    }
})

function switcherBg() {
    if (leftSide.style.background !== 'rgba(251, 251, 251, 0)' ) {
        leftSide.style.background = 'rgba(251, 251, 251, 0)';
        rightSide.style.background = 'rgba(251, 251, 251, 0.219)';
    } else if ( leftSide.style.background === 'rgba(251, 251, 251, 0)' ) {
        leftSide.style.background = 'rgba(251, 251, 251, 0.219)';
        rightSide.style.background = 'rgba(251, 251, 251, 0)';
    }
}