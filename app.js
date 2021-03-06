import { renderPoll } from './utils.js';

const inputForm = document.getElementById('input-form');

const decrementA = document.getElementById('decrementA');
const incrementA = document.getElementById('incrementA');
const decrementB = document.getElementById('decrementB');
const incrementB = document.getElementById('incrementB');

const currentPollSection = document.getElementById('current-poll-section');

const closePollButton = document.getElementById('close-poll-button');

const closedPollContainer = document.getElementById('closed-poll-container');

let questionData = '';
let resultAData = '';
let resultBData = '';
let resultATotal = 0;
let resultBTotal = 0;
let pastResults = [];

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(inputForm);
    questionData = data.get('q');
    resultAData = data.get('a');
    resultBData = data.get('b');

    inputForm.reset();

    displayCurrentPoll();
});

decrementA.addEventListener('click', () => {
    if (questionData !== '') {
        if (resultATotal > 0) {
            resultATotal--;
        }
        displayCurrentPoll();
    }
});

incrementA.addEventListener('click', () => {
    if (questionData !== '') {
        if (resultATotal >= 0) {
            resultATotal++;
        }

        displayCurrentPoll();
    }
});

decrementB.addEventListener('click', () => {
    if (questionData !== '') {
        if (resultBTotal > 0) {
            resultBTotal--;
        }
        displayCurrentPoll();
    }
});

incrementB.addEventListener('click', () => {
    if (questionData !== '') {
        if (resultBTotal >= 0) {
            resultBTotal++;
        }
        displayCurrentPoll();
    }
});

closePollButton.addEventListener('click', () => {
    if (questionData !== '') {
        const poll = makePoll();
        pastResults.push(poll);
    }
    
    clearState();
    currentPollSection.textContent = '';
    displayAllPolls();
});


function displayCurrentPoll() {
    const thisPoll = makePoll();

    currentPollSection.textContent = '';
    
    let myPoll = renderPoll(thisPoll);
    currentPollSection.append(myPoll);
}

function displayAllPolls() {
    closedPollContainer.textContent = '';
    for (let past of pastResults) {
        let pastPolls = renderPoll(past);
        closedPollContainer.append(pastPolls);
    }
    
}

function clearState() {
    questionData = '';
    resultAData = '';
    resultBData = '';
    resultATotal = 0;
    resultBTotal = 0; 
}

function makePoll() {
    const poll = {
        questionData,
        resultAData,
        resultBData,
        resultATotal,
        resultBTotal,
    };
    return poll;
}