let randomNumber = parseInt(Math.random()*100 + 1);

const form = document.querySelector('form');
const userInput = document.querySelector('#userInput');
const submitbutton = document.querySelector('#submitbutton');
const result = document.querySelector('.result');
const guesses = document.querySelector('#guesses');
const chances = document.querySelector('#chances');
const lowOrHigh = document.querySelector('#lowOrHigh');

const p = document.createElement('p');

let playGame = true;
let count = 1;

if(playGame){
    form.addEventListener('submit', function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        displayMessage('Not a number');
    }
    else if(guess < 1 || guess > 100){
        displayMessage('Enter a number between 1 and 100');
    }
    else{
        if(count === 10){
            displayResult(guess);
            displayMessage(`Game Over! The number was ${randomNumber}`);
            endGame();
        }
        else{
            displayResult(guess);
            checkGuess(guess); 
        } 
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You won! You have guessed it correct');
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage('Number is too low!');
    }
    else if(guess > randomNumber){
        displayMessage('Number is too high!');
    }
}

function displayResult(guess){
    userInput.value = '';
    guesses.innerHTML += ` ${guess} `;
    count++;
    chances.innerHTML = `${10 - count + 1}`;
}

function displayMessage(message){
    userInput.value = '';
    lowOrHigh.innerHTML =`<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    submitbutton.setAttribute('disabled', '');
    p.innerHTML = `<button id="newGame">New Game</button>`;
    result.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const start = document.querySelector('#newGame');
    start.addEventListener('click', function (e){
        randomNumber = parseInt(Math.random()*100 + 1);
        userInput.removeAttribute('disabled');
        submitbutton.removeAttribute('disabled');
        count = 1;
        chances.innerHTML = `${10 - count + 1}`;
        guesses.innerHTML = '';
        lowOrHigh.innerHTML = '';
        playGame = true;
        start.remove();
    })
}