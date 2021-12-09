export function renderOption(name, score) {
    const currentOptionContainer = document.createElement('div');
    const currentOption = document.createElement('span');
    const result = document.createElement('span');

    currentOption.textContent = name;
    result.textContent = score;

    currentOptionContainer.append(currentOption, result);
    return currentOptionContainer;
}

export function renderPoll(poll) {
    const renderPollContainer = document.createElement('div');
    const currentPollQuestion = document.createElement('h2');

    currentPollQuestion.textContent = poll.questionData;

    const aQA = renderOption(poll.resultAData, poll.resultATotal);
    const bQA = renderOption(poll.resultBData, poll.resultBTotal);

    renderPollContainer.classList.add('current-result-container');

    renderPollContainer.append(currentPollQuestion, aQA, bQA);

    return renderPollContainer;
}