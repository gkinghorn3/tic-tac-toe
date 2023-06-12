let editedPlayer = 0;

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

// config buttons
const player1EditBtn = document.getElementById("edit-player-1-btn");
const player2EditBtn = document.getElementById("edit-player-2-btn");
const closeConfigOverlayBtn = document.getElementById("close-config-popup");

// overlay and player config popup
const configPopup = document.getElementById("config-overlay");
const configPopupBackdrop = document.getElementById("backdrop");

const formElement = document.querySelector("form");
const errorOutputElement = document.getElementById("config-error");

player1EditBtn.addEventListener("click", openPlayerConfig);
player2EditBtn.addEventListener("click", openPlayerConfig);
closeConfigOverlayBtn.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);
