# Poll Tracker

## Project Objectives

```zsh
git checkout -b workOnANewBranch
```

### Essential Goals

* Project should contain 3 major sections:
  
1. Input form section -

    *Users enter text to the input elements in this form to submit data for the following:*

    * Question Input

    * Option A Input

    * Option B Input

    *User submit event for form data:*

    * Submit button

1. Current poll Section -

    **Elements in this section should not display text content until form data submit event.**

    *On form data submit event, display form data for the following:*

    * Question Input form data

    * Option A Input form data

    * Option B Input form data

    *User click event for the following button elements:*

    * Option A increment

    * Option A decrement

    * Option B increment

    * Option B decrement

    *User click event should update state for the following text elements:*

    * Option A results text element

    * Option B results text element

        *User click event should clear section data and update state for Past Results Section data*

    * Close Poll submit

1. Past Results Section -

    * Past Results text element

    * Flexible container for *Closed Poll* elements

    **Elements in this section should not display until Close Poll Submit click  event.**

    *note*: closed poll item elements will be created in JSON.

    * Container element for closed poll items

    * Past Result Question text element

    * Past Result Option A text element

    * Past Result Option B text Element

    * Past Result Option A Result text element

    * Past Result Option B Result text element

### Stretch Goals

* **tbd**

## HTML SETUP

* Input form section -

  1. form element to contain:

      * 3 text input element for user to submit 'question', 'answer a', answer b'

      * button element for user to submit form data to be applied to current poll section

```html
<section class="input-section">
  <form id="input-form">
    <label for="q">Question
      <input type="text" class="" id="question-input" name="q">
    </label>
    <label for="a">Answer A
      <input type="text" class="" id="answerA-input" name="a">
    </label>
    <label for="b">Answer B
      <input type="text" class="" id="answerB-input" name="b">
    </label>
    <button type="submit" form="input-form" id="input-submit">Submit</button>
  </form>
</section>
```

* Current poll section -

    1. h2 element to contain text content of user input 'question-input'

    1. button element for each:

        *to update current state of resultA or resultB*

        * increment 'current option a'

        * decrement 'current option a'

        * increment 'current option b'

        * decrement 'current option b'

        *to clear current text content of Current Poll Section, update state for Past Results Section

    1. span element for each:

        * current option a to contain text content of user input 'answerA-input'

        * current option B to contain text content of user input 'answerB-input'

        * resultA to contain text content of current state of resultA

        * resultB to reflect current state of resultB

```html
<section class="current-poll-section">
  <h2 id="current-poll-question">###</h2>
  <div class="current-container">
    <button type="button" class="" id="decrementA">-</button>
    <span class="" id="current-optionA">###</span>
    <button type="button" class="" id="incrementA">+</button>
  </div>
  <div class="current-container">
    <button type="button" class="" id="decrementB">-</button>
    <span class="" id="current-optionB">###</span>
    <button type="button" class="" id="incrementB">+</button>
  </div>
  <div class="current-container">
    <span class="current-result" id="resultA">###</span>
    <button type="button" class="" id="close-poll-button">
    <span class="current-result" id="resultB">###</span>
  </div>
</section>
```

* Past Results Section -

```html
<section class="past-results-section">
  <h2>Past Results</h2>
  <div id="closed-poll-container">
    <!-- Closed Poll item elements will be created in JSON -->
  </div>
</section>
```

## JS SETUP

1. Grab essential DOM elements:

    *

2. addEventListener for:

    *

3. Write functions for:

    * displayCurrentPoll();
        * mutates DOM to display current state of current poll

    * displayAllPolls();
        * clears out DOM and appends to poll div using current state of past polls

    * makePoll();
        * poll object derived from state

    * renderPoll(poll);
        * returns DOM node

    * renderOption(name, score);
        * return DOM node

*note*: TDD for each pure function
