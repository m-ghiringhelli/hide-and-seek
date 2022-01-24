// import functions and grab DOM elements
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');
const shedButton = document.getElementById('shed-button');

const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');
const shedContainer = document.getElementById('shed-container');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

// initialize state
const hidingPlaces = ['tree', 'boulder', 'shed'];

let correctGuesses = 0;
let totalGuesses = 0;

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess('tree', answer);
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess('boulder', answer);
});

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess('shed', answer);
});    

function handleGuess(userGuess, correctSpot) {
    // reset the styles
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    shedContainer.classList.remove('face');
    // then increment the guesses
    totalGuesses++;
    // then grab the appropriate container element for the correct guess from the DOM
    // then add the face class to that element so that the face shows up
    if (correctSpot === 'tree') {
        treeContainer.classList.add('face');
    } else if (correctSpot === 'boulder') {
        boulderContainer.classList.add('face');
    } else {
        shedContainer.classList.add('face');
    }
    // then if the user guess is correct, increment the correct guesses
    if (userGuess === correctSpot) {
        correctGuesses++;
        winsEl.textContent = correctGuesses;
    }
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
}
