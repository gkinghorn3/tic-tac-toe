function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('pleaser enter a name for each player')
        return;
    }

    gameAreaElement.style.display = 'block';
}