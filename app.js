const inputForm = document.getElementById('input-form');

// const currentPollQuestion = document.getElementById('current-poll-question');
// const currentOptionA = document.getElementById('current-optionA');
// const currentOptionB = document.getElementById('current-optionB');

const decrementA = document.getElementById('decrementA');
const incrementA = document.getElementById('incrementA');
const decrementB = document.getElementById('decrementB');
const incrementB = document.getElementById('incrementB');

const currentPollSection = document.getElementById('current-poll-section');
// const resultA = document.getElementById('resultA');
// const resultB = document.getElementById('resultB');

const closePollButton = document.getElementById('close-poll-button');

const closedPollContainer = document.getElementById('closed-poll-container');

// console.log(
// inputForm,
// currentPollQuestion,
// currentOptionA,
// currentOptionB,
// decrementA,
// incrementA,
// decrementB,
// incrementB,
// resultA,
// resultB,
// closePollButton,
// closedPollContainer
// );

// let state
let questionData = '';
let resultAData = '';
let resultBData = '';
let resultATotal = 0;
let resultBTotal = 0;
let pastResults = [];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(inputForm);
    // console.log(data);
    questionData = data.get('q');
    resultAData = data.get('a');
    resultBData = data.get('b');
    // console.log(resultAData, resultBData, questionData);

    inputForm.reset();

    displayCurrentPoll();
});

decrementA.addEventListener('click', () => {
    if (resultATotal > 0) {
        resultATotal--;
    }
    // console.log(resultATotal, resultBTotal);
    displayCurrentPoll();
});

incrementA.addEventListener('click', () => {
    if (resultATotal >= 0) {
        resultATotal++;
    }
    // console.log(resultATotal, resultBTotal);
    displayCurrentPoll();
});

decrementB.addEventListener('click', () => {
    if (resultBTotal > 0) {
        resultBTotal--;
    }
    // console.log(resultATotal, resultBTotal);
    displayCurrentPoll();
});

incrementB.addEventListener('click', () => {
    if (resultBTotal >= 0) {
        resultBTotal++;
    }
    // console.log(resultATotal, resultBTotal);
    displayCurrentPoll();
});

closePollButton.addEventListener('click', () => {
    const poll = makePoll();
    pastResults.push(poll);

    clearState();
    displayCurrentPoll();
});

function displayCurrentPoll() {
    // makePoll retrieves values in state, creates object
    makePoll();

    // clear current text content of currentPollSection
    currentPollSection.textContent = '';

    // create h2 element for currentPollQuestion
    const currentPollQuestion = document.createElement('h2');
    // create currentOptionAContainer div
    // create currentOptionA span
    // create resultA span
    const currentOptionAContainer = document.createElement('div');
    const currentOptionA = document.createElement('span');
    const resultA = document.createElement('span');
    // create currentOptionBContainer div
    // create currentOptionB span
    // create resultB span
    const currentOptionBContainer = document.createElement('div');
    const currentOptionB = document.createElement('span');
    const resultB = document.createElement('span');

    // currentPollQuestion h2 textContent is equal to poll.questionData
    currentPollQuestion.textContent = questionData;

    // currentOptionA span textContent is equal to poll.resultAData
    currentOptionA.textContent = resultAData;
    // currentOptionB span textContent is equal to poll.resultBData
    currentOptionB.textContent = resultBData;

    if (resultATotal > 0 || resultBTotal > 0) {
      // resultA span textContent is equal to poll.resultATotal
        resultA.textContent = resultATotal;
      // resultA span textContent is equal to poll.resultATotal
        resultB.textContent = resultBTotal;
    } 

    currentOptionA.classList.add('current-option');
    currentOptionB.classList.add('current-option');
    resultA.classList.add('current-result');
    resultB.classList.add('current-result');

    currentOptionAContainer.append(currentOptionA, resultA);
    currentOptionBContainer.append(currentOptionB, resultB);

    currentPollSection.append(currentPollQuestion, currentOptionAContainer, currentOptionBContainer);
}

function displayAllPolls() {
      
    displayCurrentPoll();
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
    // console.log(poll);
    return poll;
}