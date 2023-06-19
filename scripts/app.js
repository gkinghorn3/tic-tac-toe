const gameData = [
    [0, 0, 0], 
    [0, 0, 0],
    [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];


const player1EditBtn = document.getElementById("edit-player-1-btn");
const player2EditBtn = document.getElementById("edit-player-2-btn");
const closeConfigOverlayBtn = document.getElementById("close-config-popup");
const startGameBtnElement = document.getElementById('start-new-game-btn'); 
const gameBoardElement = document.getElementById('game-board');
const gameFieldElements = document.querySelectorAll('#game-board li');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');
const winnersName = document.getElementById('winners-name');
const turnMessage = document.getElementById('turn-message');

const configPopup = document.getElementById("config-overlay");
const configPopupBackdrop = document.getElementById("backdrop");

const formElement = document.querySelector("form");
const errorOutputElement = document.getElementById("config-error");

const gameAreaElement = document.getElementById('active-game');

player1EditBtn.addEventListener("click", openPlayerConfig);
player2EditBtn.addEventListener("click", openPlayerConfig);

closeConfigOverlayBtn.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startGameBtnElement.addEventListener('click', startNewGame)

for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', selectGameField);
}
