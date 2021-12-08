const inputForm = document.getElementById('input-form');

const currentPollQuestion = document.getElementById('current-poll-question');
const currentOptionA = document.getElementById('current-optionA');
const currentOptionB = document.getElementById('current-optionB');

const decrementA = document.getElementById('decrementA');
const incrementA = document.getElementById('incrementA');
const decrementB = document.getElementById('decrementB');
const incrementB = document.getElementById('incrementB');

const resultA = document.getElementById('resultA');
const resultB = document.getElementById('resultB');

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
    const poll = {
        questionData,
        resultAData,
        resultBData,
        resultATotal,
        resultBTotal,
    };
    pastResults.push(poll);
    clearState();
    displayAllPolls();
});

function displayCurrentPoll() {
    const poll = {
        questionData,
        resultAData,
        resultBData,
        resultATotal,
        resultBTotal,
    };

    // currentPollQuestion.textContent = questionData;
    // currentOptionA.textContent = resultAData;
    // currentOptionB.textContent = resultBData;
    // resultA.textContent = `${resultATotal}`;
    // resultB.textContent = `${resultBTotal}`; 
}

function displayAllPolls() {
      
    displayCurrentPoll();
}

function clearState () {
    questionData = '';
    resultAData = '';
    resultBData = '';
    resultATotal = 0;
    resultBTotal = 0; 
}