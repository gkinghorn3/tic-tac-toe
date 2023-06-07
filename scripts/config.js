function openPlayerConfig(event) {
  // data attributes are stored as strings so + converts to int

  editedPlayer = event.target.dataset.playerid;
  console.log(editedPlayer);
  configPopup.style.display = "block";
  configPopupBackdrop.style.display = "block";
}

function closePlayerConfig() {
  configPopup.style.display = "none";
  configPopupBackdrop.style.display = "none";
  errorOutputElement.textContent = "";
  formElement.firstElementChild.classList.remove("input-error");
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  // method of formData object to get the value of a given input
  const enteredPlayerName = formData.get("playername").trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("input-error");
    errorOutputElement.textContent = "Please enter a valid name";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
}
