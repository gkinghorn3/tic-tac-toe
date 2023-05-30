const player1EditBtn = document.getElementById("edit-player-1-btn");
const player2EditBtn = document.getElementById("edit-player-2-btn");
const configPopup = document.getElementById("config-overlay");
const configPopupBackdrop = document.getElementById("backdrop");
const closeConfigOverlayBtn = document.getElementById("close-config-popup");

player1EditBtn.addEventListener("click", openPlayerConfig);
player2EditBtn.addEventListener("click", openPlayerConfig);
closeConfigOverlayBtn.addEventListener("click", closePlayerConfig);
