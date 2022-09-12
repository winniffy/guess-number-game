'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// display message function
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}


// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // when there is no input:
    if (!guess) {
        displayMessage(`⛔ no number`)
    }
    
    //when guess is wrong
    else if (guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ? `⬆️ too high` : `⬇️ too low`);
            score--;
            displayScore(score);
        } else {
            displayMessage(`😞 hold your L`);
            displayScore(0);
            document.querySelector('body').style.backgroundColor = '#ff0000';
        }
    }

    // when player wins:
    else if (guess === secretNumber) {
        displayMessage(`🏆 big W, genius`);
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '7em';

        if (score > highscore) {
            document.querySelector('.highscore').textContent = score;
        }
    }
})

// reset button
document.querySelector('.reset').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '4em';
    displayScore(score);
    displayMessage(`🤔 start guessing...`)
})