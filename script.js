const computerRockImage = document.querySelector('#computer-rock-image');
const computerPaperImage = document.querySelector('#computer-paper-image');
const computerScissorsImage = document.querySelector('#computer-scissors-image');

let computerSelection = '';

function increaseComputerRockSize() {
    computerRockImage.style.transform = "scale(1.2)"; 
}

function resetComputerRockSize() {
    computerRockImage.style.transform = "scale(1)"; 
}

function increaseComputerPaperSize() {
    computerPaperImage.style.transform = "scale(1.2)"; 
}

function resetComputerPaperSize() {
    computerPaperImage.style.transform = "scale(1)"; 
}

function increaseComputerScissorsSize() {
    computerScissorsImage.style.transform = "scale(1.2)"; 
}

function resetComputerScissorsSize() {
    computerScissorsImage.style.transform = "scale(1)"; 
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerSelection = choices[randomIndex];
    if (computerSelection === 'rock') {
        increaseComputerRockSize();
        setTimeout(resetComputerRockSize, 1000);
    } else if (computerSelection === 'paper') {
        increaseComputerPaperSize();
        setTimeout(resetComputerPaperSize, 1000);
    } else if (computerSelection === 'scissors') {
        increaseComputerScissorsSize();
        setTimeout(resetComputerScissorsSize, 1000);
    }
    return choices[randomIndex];
}

const result = document.querySelector('#result')

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.getElementById('result').textContent = 'Empate!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        document.getElementById('result').textContent = 'Você ganhou!';
    } else {
        document.getElementById('result').textContent = 'Você perdeu!';
    }
}

let playerSelection = '';

function playGame() {
    const winner = playRound( playerSelection, getComputerChoice() );
}

const rock = document.querySelector('#user-rock');
const paper = document.querySelector('#user-paper');
const scissors = document.querySelector('#user-scissors');

const userRockImage = document.querySelector('#user-rock-image');
const userPaperImage = document.querySelector('#user-paper-image');
const userScissorsImage = document.querySelector('#user-scissors-image');

function increaseUserRockSize() {
    userRockImage.style.transform = "scale(1.2)"; 
}

function resetUserRockSize() {
    userRockImage.style.transform = "scale(1)"; 
}

function getRock() {
    increaseUserRockSize();
    setTimeout(resetUserRockSize, 1000);
    playerSelection = 'rock';
    playGame();
}

function increaseUserPaperSize() {
    userPaperImage.style.transform = "scale(1.2)"; 
}

function resetUserPaperSize() {
    userPaperImage.style.transform = "scale(1)"; 
}

function getPaper() {
    increaseUserPaperSize();
    setTimeout(resetUserPaperSize, 1000);
    playerSelection = 'paper';
    playGame();
}

function increaseUserScissorsSize() {
    userScissorsImage.style.transform = "scale(1.2)"; 
}

function resetUserScissorsSize() {
    userScissorsImage.style.transform = "scale(1)"; 
}

function getScissors() {
    increaseUserScissorsSize();
    setTimeout(resetUserScissorsSize, 1000);
    playerSelection = 'scissors';
    playGame();
}

rock.addEventListener('click', getRock);
paper.addEventListener('click', getPaper);
scissors.addEventListener('click', getScissors);










  
  