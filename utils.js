export function renderOption(name, score) {

}

export function renderPoll(poll) {
    const renderPollContainer = document.createElement('div');
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
    currentPollQuestion.textContent = poll.questionData;

    // currentOptionA span textContent is equal to poll.resultAData
    currentOptionA.textContent = poll.resultAData;
    // currentOptionB span textContent is equal to poll.resultBData
    currentOptionB.textContent = poll.resultBData;

    if (poll.resultATotal > 0 || poll.resultBTotal > 0) {
      // resultA span textContent is equal to poll.resultATotal
        resultA.textContent = poll.resultATotal;
      // resultA span textContent is equal to poll.resultATotal
        resultB.textContent = poll.resultBTotal;
    } 

    currentOptionA.classList.add('current-option');
    currentOptionB.classList.add('current-option');
    resultA.classList.add('current-result');
    resultB.classList.add('current-result');

    currentOptionAContainer.append(currentOptionA, resultA);
    currentOptionBContainer.append(currentOptionB, resultB);

    renderPollContainer.append(currentPollQuestion, currentOptionAContainer, currentOptionBContainer);

    return renderPollContainer;
}