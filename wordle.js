const targetWords = [
    "bird",
];
const guessWords = [
    "bird",
    "dove",
    "burd",
    "duck",
    "crow",
];

const WORD_LENGTH = 4;
const MAX_GUESSES = 6;
const CURRENT_VERSION = 1;
const GAME_TITLE = 'Birdle';
const WEIRD_WORD = 'BIRD';
let targetWord;
let gameNumber;
let reloadPriorGuesses = false;
const secretAnimations = [
    {name: 'rotateTiles', func: rotateTiles},
    {name: 'colorBackground', func: colorBackground},
    {name: 'bounce', func: bounce},
    {name: 'blink', func: blink},
    {name: 'flipEachKey', func: flipEachKey},
    {name: 'multicolorKeyboard', func: multicolorKeyboard},
    {name: 'generateGif', func: generateGif},
];
const statHolder = {
    // store # of guesses for each game in the gamesPlayed
    gamesPlayed: [
        // {id: gameNumber,
        // datePlayed: new Date().toLocaleDateString(),
        // numGuesses: 3,
        // won: true,
        // word: targetWord,},
    ],
    lastPlayed: "",
    winStreak: 0,
    winStreakRecord: 0,
    nonWordGuesses: 0,
    dailySecretCount: 0,
    secretsFound: [],
};

const secretCodes = [
];

let version = JSON.parse(localStorage.getItem('version')) || 0;
if (+version !== CURRENT_VERSION) versionUpdate();

let priorGuesses = JSON.parse(localStorage.getItem('priorGuesses')) || [];
let dailySecretWords = [];
let dailySecretFound = JSON.parse(localStorage.getItem('dailySecretFound')) || false;
let gameOver = JSON.parse(localStorage.getItem('gameOver')) || false;

const stats = JSON.parse(localStorage.getItem('stats')) || statHolder;
if (!stats.dailySecretCount) stats.dailySecretCount = 0;
gameLoop();

function versionUpdate() {
    const modal = document.querySelector('#version-modal');
    const contentContainer = modal.querySelector('.modal-container');

    const title = document.createElement('div');
    title.classList.add('modal-announcement');
    title.innerText = GAME_TITLE.toUpperCase() + ' ALERT';

    const subtitle = document.createElement('div');
    subtitle.classList.add('modal-title');
    subtitle.innerText = 'Introducing: Daily Anomalies';

    const content1 = document.createElement('div');
    content1.classList.add('version-modal-content');
    content1.innerText = 'Certain words seem to be exhibiting unusual behaviour...';

    const grid = document.createElement('div');
    grid.classList.add('guess-grid');
    const word = WEIRD_WORD;
    for (let letter of word) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.innerText = letter;
        tile.style.animation = 'rotate 6000ms linear infinite'
        grid.appendChild(tile);
    }

    const content2 = document.createElement('div');
    content2.classList.add('version-modal-content');
    content2.innerText = 'See if you can identify these mischievous words each day. Be sure to report your findings back to headquarters.';

    contentContainer.appendChild(title);
    contentContainer.appendChild(subtitle);
    contentContainer.appendChild(content1);
    contentContainer.appendChild(grid);
    contentContainer.appendChild(content2);

    modal.classList.remove('hide');
    localStorage.setItem('version', JSON.stringify(CURRENT_VERSION));
}

function generateDailySecrets(num) {
    dailySecretWords = [];
    const offset = ((gameNumber - 2082) * num) % (targetWords.length-1);
    let index = offset;
    for (let i = 0; i < num; i++) {
        if (index >= targetWords.length - 1) index = 0;
        const wordToAdd = targetWords[index];
        const permanentSecretCodes = secretCodes.map(code => code.key);
        if (wordToAdd !== targetWord && !permanentSecretCodes.includes(wordToAdd)) {
            dailySecretWords.push(wordToAdd);
        }
        index++;
    }
    localStorage.setItem('dailySecretWords', JSON.stringify(dailySecretWords));
}

function resultsText() {
    const tiles = [...document.querySelectorAll('.tile')];
    const dark = '⬛'
    const green = '🟩'
    const yellow = '🟨'

    const grid = tiles.map(tile => {
        if (tile.classList.contains('correct')) return green;
        else if (tile.classList.contains('present')) return yellow;
        else return dark;
    })
    
    let result = `${GAME_TITLE} ${gameNumber} ${tiles.filter(t => t.dataset.letter).length / 5}/6\n\n`
    for (let i = 0; i < MAX_GUESSES; i++) {
        result += grid.slice(i*WORD_LENGTH, i*WORD_LENGTH+WORD_LENGTH).join('') + "\n";
    }
    result.trim();
    if (dailySecretFound !== false) result += `\n⭐${dailySecretFound} Found!⭐`
    return result.trim();
}

function copyToClipboard() {

    // if navigator.share API is supported and user device IS a mobile device:
    // use navigator.share: this will open up the mobile share options 
    if (navigator.share && /Mobi|Android/i.test(navigator.userAgent)) {
        navigator.share({
            title: `${GAME_TITLE} ${gameNumber}`,
            text: resultsText()
        }).then(() => {
            console.log('Thanks for sharing!');
        })
        .catch(console.error);
    }
    // otherwise just copy to clipboard:
    else {
        const dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = resultsText();
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        makeAlert('Copied to Clipboard!')
    }
}

function populateStats() {
    const modal = document.querySelector('#stats-modal');
    const played = modal.querySelector('#played');
    const win_percent = modal.querySelector('#win_percent');
    const streak = modal.querySelector('#streak');
    const record = modal.querySelector('#record');
    const non_word_guesses = modal.querySelector('#non-word');
    const daily_secrets = modal.querySelector('#daily-secrets');
    const secrets_found = modal.querySelector('#secrets');
    const shareBtn = modal.querySelector('#share-btn');

    const bars = modal.querySelectorAll('.bar-bar');
    const lastGame = stats.gamesPlayed[stats.gamesPlayed.length - 1];
    let highestBar = 0.0001;
    bars.forEach(bar => {
        // set bar number to total num of games with that many guesses:
        const matchedGuessCount = stats.gamesPlayed.filter(g => {
            return g.numGuesses === +bar.dataset.count;
        }).length;
        bar.innerText = matchedGuessCount;
        bar.classList.remove('current');
        if (matchedGuessCount > highestBar) highestBar = matchedGuessCount;
        // turn the bar with the num guesses from the last game green:
        if (lastGame && lastGame.won && lastGame.numGuesses === +bar.dataset.count) {
            bar.classList.add('current')
        }
    })
    // set the length of the bar based on how many guesses:
    bars.forEach(bar => {
        const matchedGuessCount = stats.gamesPlayed.filter(g => {
            return g.numGuesses === +bar.dataset.count;
        }).length;
        
        if (matchedGuessCount > 0) {
            bar.style.width = `${matchedGuessCount / highestBar * 100}%`;
        }
    })

    played.innerText = stats.gamesPlayed.length;
    if (stats.gamesPlayed.length > 0) {
        win_percent.innerText = Math.round(stats.gamesPlayed.filter(g => g.won).length / stats.gamesPlayed.length * 100);
    }
    streak.innerText = stats.winStreak;
    record.innerText = stats.winStreakRecord;
    non_word_guesses.innerText = stats.nonWordGuesses;
    daily_secrets.innerText = stats.dailySecretCount;
    secrets_found.innerText = `${stats.secretsFound.length} / ${secretCodes.length}`;

    // only show bar highlight in green and share btn if the current game is over:
    if (!gameOver) {
        if (shareBtn) shareBtn.parentElement.style.display = 'none';
        bars.forEach(bar => bar.classList.remove('current'));
    }
    else shareBtn.parentElement.style.display = 'block';

    if (dailySecretFound !== false) {
        const foundSecretMsg = modal.querySelector('.found-secret-msg-container');
        foundSecretMsg.innerText = `⭐${dailySecretFound} Found⭐`;
        foundSecretMsg.style.display = 'block';
    }
}

function updateCountdown() {
    const countdown = document.querySelector('#countdown');
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0,0,0,0);

    const difference = tomorrow - now;
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

    countdown.innerText = `${hours<10 ? 0 : ""}${hours}:${minutes<10 ? 0 : ""}${minutes}:${seconds<10 ? 0 : ""}${seconds}`;
}

// check if today is a different day than the lastDate stored in local storage
function newDay() {
    const today = new Date().toLocaleDateString();
    if (JSON.parse(localStorage.getItem('lastDate')) === today) return false;
    localStorage.setItem('lastDate', JSON.stringify(today));
    
    priorGuesses = [];
    localStorage.setItem('priorGuesses', JSON.stringify(priorGuesses));
    
    dailySecretFound = false;
    localStorage.setItem('dailySecretFound', JSON.stringify(dailySecretFound));
    
    gameOver = false;
    localStorage.setItem('gameOver', JSON.stringify(gameOver));

    return true;
}

function showStats() {
    const modal = document.querySelector('#stats-modal');
    modal.classList.toggle('hide');
}

// modal used to display secret content
function closeSecretModal() {
    const modal = document.querySelector('#crack-modal');
    modal.querySelectorAll('img').forEach(img => modal.removeChild(img));
    modal.querySelectorAll('div').forEach(div => {
        if (div.id !== 'secret-modal-close-btn') modal.removeChild(div);
    });
    // reset darkened background since for "crack" secret we dont want it dark
    modal.style.backgroundColor = 'transparent';
    modal.classList.remove('blur');
    modal.classList.toggle('hide');
}

// modal used to display new content due to updates/version changes:
function closeVersionModal() {
    const modal = document.querySelector('#version-modal');
    modal.querySelectorAll('div').forEach(div => div.remove());
    modal.classList.toggle('hide');
}

// reset body vertical height
// necessary for proper background sizing on mobile
function setBodyHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// main game loop
function gameLoop() {
    setupTitle()
    buildGrid()

    // arbitrary date by which to choose an index from the word array
    const startDate = new Date(1991, 0, 25);
    const now = Date.now();
    const daysPast = (now - startDate) / 1000 / 60 / 60 / 24;
    const index = Math.floor(daysPast % targetWords.length);
    gameNumber = index;
    targetWord = targetWords[index];

    // generate a list of daily words to use as "Anomaly" secrets:
    generateDailySecrets(50);
    localStorage.setItem('dailySecretWords', JSON.stringify(dailySecretWords));

    // resets body vertical height on resize
    setBodyHeight();
    window.addEventListener('resize', setBodyHeight);

    const timer = setInterval(updateCountdown, 1000);

    const statsCloseBtn = document.querySelector('#stats-close-btn');
    const secretModalCloseBtn = document.querySelector('#secret-modal-close-btn');
    const versionModalCloseBtn = document.querySelector('#version-close-btn');
    const statsBtn = document.querySelector('.stats-btn');
    const shareBtn = document.querySelector('#share-btn');

    // initalize modal btn event listeners
    statsCloseBtn.addEventListener('click', showStats);
    secretModalCloseBtn.addEventListener('click', closeSecretModal);
    versionModalCloseBtn.addEventListener('click', closeVersionModal);
    statsBtn.addEventListener('click', showStats);
    shareBtn.addEventListener('click', copyToClipboard);
    
    // if it't not a new day, load the prior guesses in local storage
    if (!newDay()) {
        console.log('Loading previous guesses');
        reloadPriorGuesses = true;
        loadGuesses();
    }
    else {
        console.log('A brand new day!')
        reloadPriorGuesses = false;
    }
    populateStats()
    startInteraction();
}

function buildGrid() {
    const guessGrids = document.querySelectorAll('.guess-grid');

    guessGrids.forEach(function(guessGrid) {
        guessGrid.style.gridTemplateColumns = "repeat("+WORD_LENGTH+", minmax(3.5rem, 3.5vw))"
    });

    const gameGrid = document.getElementById('game-grid');
    tileCount = WORD_LENGTH * MAX_GUESSES
    for (i = 0; i < tileCount; i++) {
        const tile = document.createElement('div');

        tile.className = "tile";

        gameGrid.appendChild(tile);
    }
}

function setupTitle() {
    document.title = GAME_TITLE;

    document.querySelector('.title').innerHTML = GAME_TITLE;
    document.querySelector('.footer-title').innerHTML = 'NEXT ' + GAME_TITLE.toUpperCase();
}

// allow user to add letters and submit guesses
function startInteraction() {
    document.addEventListener('click', handleClick);
    document.addEventListener('click', captureKey);
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('keydown', captureKey);
    console.log('Starting User Interaction');
}

// stop user from adding letters or submitting guesses
function stopInteraction() {
    document.removeEventListener('click', handleClick);
    document.removeEventListener('keydown', handleKeyPress);
    document.removeEventListener('keydown', captureKey);
    console.log('Stopping User Interaction');
}

// Fisher-Yates shuffle:
// not in use, just used to initially shuffle the words array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// load previous letters from local storage:
function loadGuesses() { 
    let tiles = [...document.querySelectorAll('.tile')]
    let count = 0;
    console.log(priorGuesses)
    priorGuesses.forEach(guess => {
        for (let i = 0; i < guess.length; i++) {
            tiles[count].innerText = guess[i];
            tiles[count].dataset.letter = guess[i];
            count++;
        }
        checkGuess(tiles.slice(count-WORD_LENGTH, count), guess);
    })
}

// used to capture key sequences for the secret codes:
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
    else if (key === 'Enter') {
        submitGuess();
    }
    else if (key === 'Delete') {
        deleteLetter();
    }
    else {
        addLetter(key);
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
    animateNewTile(tile);
}

function animateNewTile(tile) {
    tile.classList.add('new');
    tile.addEventListener('animationend', () => {
        tile.classList.remove('new');
    })
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

// for guesses that are not a word or wrong number of letters
function shakeTiles(tiles) {
    tiles.forEach(tile => {
        tile.classList.add('shake');
        tile.addEventListener('animationend', () => {
            tile.classList.remove('shake');
        });
    })   
}

// bouncing animation for win:
function victoryDance(tiles) {
    tiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add('dance');
            tile.addEventListener('animationend', () => {
                tile.classList.remove('dance');
            });
        }, index * 500/5);
    })   
}

function submitGuess() {
    const guessGrid = document.querySelector('.guess-grid');
    const activeTiles = guessGrid.querySelectorAll('.active');
    let guess = "";
    activeTiles.forEach(tile => guess += tile.innerText.toLowerCase());

    if (guess.length !== WORD_LENGTH) {
        makeAlert('Not enough letters');
        console.log("Dude that's not even enough letters.")
        const blanks = [...guessGrid.querySelectorAll(':not([data-letter])')];
        const tilesToShake = [...activeTiles, ...blanks.slice(0, WORD_LENGTH - activeTiles.length)]
        shakeTiles(tilesToShake);
    }
    else if (!guessWords.includes(guess) && !targetWords.includes(guess)){
        makeAlert('Not in word list');
        console.log("You can't just make shit up...")
        shakeTiles(activeTiles);
        stats.nonWordGuesses++;
        localStorage.setItem('stats', JSON.stringify(stats));
        populateStats();
    }
    else {
        priorGuesses.push(guess);
        localStorage.setItem('priorGuesses', JSON.stringify(priorGuesses));    
        checkGuess(activeTiles, guess);
    }
}

function flipTile(tile, index, duration) {
    setTimeout(() => {
        tile.classList.add('flip');
    }, index * duration);
}

function checkGuess(activeTiles, guess) {
    stopInteraction();
    
    // get the frequency of each letter in the targetWord
    const letterCount = {};
    for (let i = 0; i < targetWord.length; i++) {
        if (letterCount[targetWord[i]] === undefined) {
            letterCount[targetWord[i]] = {count: 1, indexesToSkip: []};
        }
        else {
            letterCount[targetWord[i]].count++;
        }
    }
    // check each letter of the guess for CORRECT letters first
    // if correct, set them to class 'correct' and add their index to the "indexToSkip"
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === targetWord[i]) {
            flipTile(activeTiles[i], i, 250);
            letterCount[guess[i]].count--;
            letterCount[guess[i]].indexesToSkip.push(i);

            activeTiles[i].addEventListener('transitionend', () => {
                activeTiles[i].classList.remove('flip');
                activeTiles[i].classList.add('correct');
                activeTiles[i].classList.remove('active');

                if (i === activeTiles.length - 1) {
                    activeTiles[i].addEventListener('transitionend', doneFlip, false);
                    activeTiles[i].guess = guess;
                    activeTiles[i].activeTiles = [...activeTiles];
                }
            });
        }
    }

    // do the same thing again, but checking for 'present' letters
    // if the index is in the 'indexToSkip' for that letter, than pass by it
    // we have to do this, so we show the correct amount of letters coloured for words with duplicate letters
    for (let i = 0; i < guess.length; i++) {
        flipTile(activeTiles[i], i, 250);

        let color = null;
        
        if (letterCount[guess[i]] === undefined) color = 'absent';
        else if (!letterCount[guess[i]].indexesToSkip.includes(i) && letterCount[guess[i]].count > 0) {
            color = 'present';
            letterCount[guess[i]].count--;
            letterCount[guess[i]].indexesToSkip.push(i);
        }
        else color = 'absent';

        activeTiles[i].addEventListener('transitionend', () => {
            activeTiles[i].classList.remove('flip');
            activeTiles[i].classList.add(color);
            activeTiles[i].classList.remove('active');

            if (i === activeTiles.length - 1) {
                activeTiles[i].addEventListener('transitionend', doneFlip, false);
                activeTiles[i].guess = guess;
                activeTiles[i].activeTiles = [...activeTiles];
            }
        });
    }
}

function checkBirdle(guess) {
    if (guess == "burd") {
        burd();
    }

    if (guess == "dove" || guess == "crow") {
        birdName();
    }

    if (guess == "bird") {
        getGifByID('SQpdTYWLrfzzy', 'bird')
    }
}

function doneFlip(e) {
    const guess = e.currentTarget.guess;
    const activeTiles = e.currentTarget.activeTiles;
    checkBirdle(guess)

    updateKeyboard(guess);
    startInteraction();
    const win = checkWin(guess,activeTiles);
    if (win === true) {
        victoryDance(activeTiles);
    }
}

function checkWin(guess) {
    const guessGrid = document.querySelector('.guess-grid');
    const totalLetters = guessGrid.querySelectorAll('[data-letter]').length;
    if (guess === targetWord) {
        stopInteraction();
        if (totalLetters <= 5) makeAlert("One guess?? Are ye the Devil?", 3000);
        else if (totalLetters <= 10) makeAlert("2 guesses?? Highly suspicious but congrats.", 3000);
        else if (totalLetters <= 15) makeAlert("Incredible!", 3000);
        else if (totalLetters <= 20) makeAlert("Great!", 3000);
        else makeAlert("Not bad!", 3000);

        // update localStorage:
        if (!stats.gamesPlayed.find(game => game.id === gameNumber)) {
            stats.gamesPlayed.push({
                id: gameNumber,
                datePlayed: new Date().toLocaleDateString(),
                numGuesses: Math.floor(totalLetters / WORD_LENGTH),
                won: true,
                word: targetWord,
            })
            stats.lastPlayed = new Date().toLocaleDateString();
            stats.winStreak++;
            stats.winStreakRecord = stats.winStreak > stats.winStreakRecord ? stats.winStreak : stats.winStreakRecord;
            localStorage.setItem('stats', JSON.stringify(stats));
        }
        gameOver = true;
        localStorage.setItem('gameOver', JSON.stringify(gameOver));    
        populateStats();
        setTimeout(showStats, 1000);
        return true;
    }
    else if (guess !== targetWord && totalLetters >= WORD_LENGTH * MAX_GUESSES) {
        stopInteraction();

        // update localStorage:
        if (!stats.gamesPlayed.find(game => game.id === gameNumber)) {
            stats.gamesPlayed.push({
                id: gameNumber,
                datePlayed: new Date().toLocaleDateString(),
                numGuesses: Math.floor(totalLetters / WORD_LENGTH),
                won: false,
                word: targetWord,
            })
            stats.lastPlayed = new Date().toLocaleDateString();
            stats.winStreak = 0;
            localStorage.setItem('stats', JSON.stringify(stats));
        }

        if (guess === priorGuesses[priorGuesses.length - 1]) {
            makeAlert(`Today's word was: ${targetWord.toUpperCase()}`)
            console.log("No dice.  Maybe you should give this a quick read: \n https://www.amazon.ca/Oxford-Dictionary-English-Dictionaries/dp/0199571120");
            setTimeout(showStats, 1000);
        }

        gameOver = true;
        localStorage.setItem('gameOver', JSON.stringify(gameOver)); 
        populateStats();
    }
    return false;
}

function updateKeyboard(guess) {
    const keys = [...document.querySelectorAll('.key')];
    for (let i = 0; i < guess.length; i++) {
        const key = keys.find(key => key.dataset.key === guess[i].toUpperCase());
        if (guess[i] === targetWord[i]) {
            key.classList.add('correct');
            key.dataset.index = i;
        }
        else if (targetWord.includes(guess[i])) {
            key.classList.add('present');
        }
        else {
            key.classList.add('absent');
        }
    }
}

function makeAlert(content, duration = 1000) {
    const alertContainer = document.querySelector('.alert-container');
    const newAlert = document.createElement('div');
    newAlert.classList.add('alert');
    newAlert.innerText = content;
    alertContainer.append(newAlert);
    newAlert.addEventListener('transitionend', () => {
        newAlert.remove();
    })
    setTimeout(() => {
        newAlert.classList.add('hide')
    }, duration)
}

function captureKey(e) {
    let key;
    if (e.type === 'click') {
        key = e.target.dataset.key;
        if (e.target.dataset.key === undefined) return
    }
    else key = e.key;
    if (key !== 'Enter') {
        checkSecretCodes(secretCodes, key);
    }
}

function checkSecretCodes(secretCodesArray, char) {
    for (let secretCode of secretCodesArray) {
        const regex = new RegExp('^[a-z]$', 'i');
        if (char.match(regex)) secretCode.sequence.push(char.toLowerCase());
        if (char === 'Backspace' || char === 'Delete') secretCode.sequence.pop();

        if (secretCode.sequence.length > secretCode.key.length) secretCode.sequence.splice(0,1);
        
        if (secretCode.sequence.join('') === secretCode.key) {
            makeAlert('Secret Found!', 2000);
            clearImages();
            secretCode.func();
            if (!stats.secretsFound.includes(secretCode.key)) {
                stats.secretsFound.push(secretCode.key);
                localStorage.setItem('stats', JSON.stringify(stats));
            }
            dailySecretFound = 'Secret';
            localStorage.setItem('dailySecretFound', JSON.stringify(dailySecretFound));
            populateStats();
            return;
        }
        // for testing purposes
        if (secretCode.sequence.join('') === 'xxxxx') {
            generateGif('covid');
            return;
        }
        for (let word of dailySecretWords) {
            if (secretCode.sequence.join('') === word) {
                makeAlert('Daily Anomaly Found!', 2000);
        
                // choose a random animation:
                let randomIndex = Math.floor(Math.random() * secretAnimations.length);
                if (secretAnimations[randomIndex].name === 'generateGif') {
                    generateGif(word);
                }
                else if (secretAnimations[randomIndex].name === 'blink') {
                    let count = 0;
                    const interval = setInterval(() => {
                        blink();
                        if (++count >= 2) window.clearInterval(interval);

                    }, 500);
                }
                else secretAnimations[randomIndex].func();

                dailySecretFound = 'Anomaly';
                localStorage.setItem('dailySecretFound', JSON.stringify(dailySecretFound));
                stats.dailySecretCount ? stats.dailySecretCount++ : stats.dailySecretCount = 1;
                localStorage.setItem('stats', JSON.stringify(stats));
                populateStats();
                return;
            }
        }
    }
}

function clearImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => img.remove());
}

function corns() {
    console.log('YOU HORNY?!?');

    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            cornify_add();
            if (i === 34) {
                setTimeout(() => {
                    document.querySelectorAll('.__cornify_unicorn').forEach(el => el.remove());
                    document.querySelector('#__cornify_count').remove()
                },1500);
            }
        }, i*150);
    }
    // cornify_add(); // adds a unicorn from inbedded cornify site (see script tag above)
}

function ineedhelp() {
    const keyboard = document.querySelector('.keyboard');
    const keys = [...keyboard.querySelectorAll('.key')];
    const correctKeys = keys.filter(key => key.classList.contains('correct'));
    const presentKeys = keys.filter(key => key.classList.contains('present'));
    const absentKeys = keys.filter(key => key.classList.contains('absent'));
    const possibleWords = targetWords.filter(word => {
        for (let key of correctKeys) {
            if (word[key.dataset.index] !== key.innerText.toLowerCase()) return false;
        }
        for (let key of presentKeys) {
            const letter = key.innerText.toLowerCase();
            if (!word.includes(letter)) return false;
        }
        for (let key of absentKeys) {
            const letter = key.innerText.toLowerCase();
            if (word.includes(letter)) return false;
        }
        return true;
    });
    const possibleWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    makeAlert(`Try: ${possibleWord}`);
    for (let i = 0; i < 5; i++) deleteLetter();
    for (let letter of possibleWord) {
        addLetter(letter);
    }
}

function waves() {
    const keyboard = document.querySelector('.keyboard');
    const keys = keyboard.querySelectorAll('.key');
    keys.forEach(key => {
        key.style.backgroundColor = 'transparent';
        key.style.backgroundImage = 'url(./images/water.png)';
        key.style.backgroundSize = 'cover';
        // if (key.classList.contains("absent")) key.style.color = 'hsl(240,2%,23%)';
        // if (key.classList.contains("present")) key.style.color = 'hsl(49,51%,47%)';
        // if (key.classList.contains("correct")) key.style.color = 'hsl(115,29%,43%)';
        key.style.fontWeight = 'bold'
    });
    victoryDance(keys);
}

function crack() {
    const modal = document.querySelector('#crack-modal');
    
    const crack1 = document.createElement('img');
    crack1.setAttribute('src', './images/crack.png');
    crack1.id = 'crack1'
    
    const crack2 = document.createElement('img');
    crack2.setAttribute('src', './images/crack2.png');
    crack2.id = 'crack2';

    modal.appendChild(crack1);
    modal.appendChild(crack2);

    modal.classList.toggle('hide');
}

function space() {
    const body = document.querySelector('body');
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    body.style.backgroundImage = 'url("./images/space-desktop.jpg")';

    const astronaut = document.createElement('img');
    astronaut.classList.add('astro');
    astronaut.setAttribute('src', './images/astronaut.png');
    document.body.appendChild(astronaut);
    astronaut.addEventListener('animationend', () => {
        document.body.removeChild(astronaut);
    });

    const secretDiv = document.querySelector('.secret-div');
    secretDiv.innerHTML = 'You may find <a href="http://project-red-rover.herokuapp.com">PROJECT RED ROVER</a> interesting...'
}

function davis() {
    const modal = document.querySelector('#crack-modal');
    modal.classList.toggle('hide');

    const wanted = document.createElement('img');
    wanted.classList.add('wanted');
    wanted.setAttribute('src', './images/davis.png');
    wanted.addEventListener('click', closeSecretModal);
    modal.appendChild(wanted);
}

function snowy() {
    const body = document.querySelector('body');
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (/Mobi|Android/i.test(navigator.userAgent)) {
        body.style.backgroundImage = 'url("./images/snowy-mobile.jpg")';
    }
    else body.style.backgroundImage = 'url("./images/snowy.jpg")';

    setInterval(() => {
        const flake = document.createElement('img');
        flake.classList.add('snowflake');
        flake.setAttribute('src', './images/snowflake.png');
        flake.style.left = `${Math.random() * vw}px`;
        flake.style.animation = `fall ${Math.random() * (40-20+1) + 20}s linear`
        body.appendChild(flake);
        flake.addEventListener('animationend', () => {
            body.removeChild(flake);
        });
    }, 1000)
}

function arash() {
    const modal = document.querySelector('#crack-modal');
    modal.classList.toggle('hide');

    const arash = document.createElement('img');
    arash.classList.add('wanted');
    arash.setAttribute('src', './images/arash.jpg');
    arash.addEventListener('click', closeSecretModal);
    modal.appendChild(arash);

    const text = document.createElement('div');
    text.classList.add('text-overlay');
    text.innerText = 'HAPPY BIRTHDAY!';
    text.style.animation = 'dance 500ms ease-in-out';
    modal.appendChild(text);
}

function generateGif(word) {
    const query = `/search?q=${word}`;
    getGif(query, word) 
}

function getGifByID(id) {
    getGif('?ids=' + id, 'burd') 
}

function getGif(endpoint, word) {
    const modal = document.querySelector('#crack-modal');

    const api = 'https://api.giphy.com/v1/gifs';

    // must be HTTPS for some browsers
    const key = '&api_key=dFRvVTlP2eISiJSn087SVBpGpDNbWNPg';
    const url = api + endpoint + key;
    
    fetch(url)
        .then(response => response.json())
        .then(giphy => {
            const rand = Math.floor(Math.random() * (giphy.data.length));  // giphy API returns an array of results, choose a random one
            if (giphy.data[rand].images.original.url !== '') {
                makeAlert(`Generating Random Gif for ${word.toUpperCase()}...`, 3000);
                
                const gif = document.createElement('img');
                gif.setAttribute('src', giphy.data[rand].images.original.url);
                gif.classList.add('gif');
                gif.addEventListener('click', closeSecretModal);

                modal.appendChild(gif);
                modal.classList.toggle('hide');
                modal.style.backgroundColor= 'rgba(0,0,0,0.4)';
                return;
            }
            else {
                generateGif(word);
            }
        })

}

function burd() {
    getGifByID('THDqmdIueRFEwAjPba')
}

function birdName() {
    makeAlert("Stop being so specific")
}

function covid() {
    const randNum = Math.random();
    if (randNum < 0.33) generateGif('covid');
    else if (randNum < 0.66) generateGif('coronavirus');
    else if (randNum < 1) generateGif('covid19');
}

function echos() {
    let count = 0;
    const interval = setInterval(() => {
        let msg = 'ECHO!';
        for (let i = 0; i < count; i++) {
            msg = '(' + msg + ')'
        }
        makeAlert(msg, 3000);
        if (++count >= 5) window.clearInterval(interval);
    }, 500)
}

function flips() {
    document.body.style.transform = 'rotateY(180deg)';
}

function chaos() {
    const keys = document.querySelectorAll('.key');
    const spacers = document.querySelectorAll('.spacer');
    const title = document.querySelector('.title');
    title.style.animation = 'multicolor 5000ms infinite alternate';
    spacers.forEach(spacer => spacer.remove());
    keys.forEach(key => {
        rand = Math.floor(Math.random() * keys.length-1);
        key.style.order = rand;
        rand = Math.floor(Math.random() * (6000 - 3000) + 3000);
        key.style.animation = `multicolor-bg ${rand}ms infinite alternate`;
    });
}

function blurs() {
    modal = document.querySelector('#crack-modal')
    modal.classList.remove('hide');
    modal.classList.add('blur');
}

function multicolorKeyboard() {
    const keys = document.querySelectorAll('.key');
    const tiles = document.querySelectorAll('.tile');
    keys.forEach(key => {
        const hue = Math.floor(Math.random() * (360-150) + 150);
        const sat = Math.floor(Math.random() * (100 - 60) + 60);
        const brightness = Math.floor(Math.random() * (50 - 10) + 10);
        key.style.backgroundColor = `hsl(
            var(--hue, ${hue}), 
            var(--saturation, ${sat}%), 
            calc(var(--lightness-offset, 0%) + var(--lightness, ${brightness}%))
        `
    });
    tiles.forEach(tile => {
        const hue = Math.floor(Math.random() * (360-150) + 150);
        const sat = Math.floor(Math.random() * (100 - 60) + 60);
        const brightness = Math.floor(Math.random() * (50 - 10) + 10);
        tile.style.backgroundColor = `hsl(
            var(--hue, ${hue}), 
            var(--saturation, ${sat}%), 
            calc(var(--lightness-offset, 0%) + var(--lightness, ${brightness}%))
        `
    });
}

function flipEachKey() {
    // debugger
    const keys = document.querySelectorAll('.key');
    stopInteraction();

    for (let i = 0; i < keys.length; i++) {
        flipTile(keys[i], i, 100);
        keys[i].addEventListener('transitionend', () => {
            keys[i].classList.remove('flip');
            if (i === keys.length - 1) {
                keys[i].addEventListener('transitionend', () => {
                    startInteraction();
                });
            }
        });
    }
}

function blink() {
    const keys = document.querySelectorAll('.key');
    
    for (let i = 0; i < keys.length; i++) {
        keys[i].classList.add('flip');
        keys[i].addEventListener('transitionend', () => {
            keys[i].classList.remove('flip');
        });
    }
}

function bounce() {
    const keys = document.querySelectorAll('.key');
    const tiles = document.querySelectorAll('.tile');
    victoryDance(keys);
    victoryDance(tiles);
}

function colorBackground() {
    document.body.style.animation = `multicolor-bg 50000ms infinite alternate`;
    setTimeout(() => {
        document.body.style.animation = "";
    },15000);
}

function rotateTiles() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.style.animation = 'rotate 1000ms linear';
        setTimeout(() => {
            tile.style.animation = "";
        },2000)
    });

    
}


