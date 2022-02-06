const WORD_LENGTH = 5;



startInteraction()



function startInteraction() {
    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', handleKeyPress)
}

function stopInteraction() {
    document.removeEventListener('click', handleClick)
    document.removeEventListener('keydown', handleKeyPress)
}

function handleKeyPress(e) {
    if (e.key === 'Enter') {
        submitGuess();
    }
    else if (e.key === 'Backspace' || e.key === 'Delete') {
        deleteLetter();
    }
    else {
        const char = e.key.toUpperCase();
        const regex = new RegExp('^[a-z]$', 'i');
        if (char.match(regex)) addLetter(char);
    }
}

function handleClick(e) {
    const key = e.target.dataset.key;
    if (key === undefined) return;
    else if (key === 'enter') {
        submitGuess();
    }
    else if (key === 'del') {
        deleteLetter();
    }
    else {
        const char = e.target.dataset.key;
        addLetter(char);
    }
}

function addLetter(letter) {
    const guessGrid = document.querySelector('.guess-grid');
    // grab all the tiles with an active class:
    const activeTiles = guessGrid.querySelectorAll('.active');
    // only add a letter if there are less than WORD_LENGTH letters added:
    if (activeTiles.length >= WORD_LENGTH) return;
    // grab the first tile that doesn't have a letter assigned to it:
    const tile = guessGrid.querySelector(':not([data-letter])');
    tile.innerText = letter;
    tile.dataset.letter = letter;
    tile.classList.add('active');
}

function deleteLetter() {
    const guessGrid = document.querySelector('.guess-grid');
    const activeTiles = guessGrid.querySelectorAll('.active');
    const lastActive = activeTiles[activeTiles.length-1];
    if (lastActive === undefined) return;
    lastActive.innerText = "";
    delete lastActive.dataset.letter;
    lastActive.classList.remove('active');
}