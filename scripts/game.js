function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("pleaser enter a name for each player");
    return;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectedField = event.target;
  const selectedColumn = +selectedField.dataset.col - 1;
  const selectedRow = +selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  console.log(gameData);

  switchPlayer();
  checkForGameOver();
}

function checkForGameOver() {
    // checking row for equality
  for (i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
}
