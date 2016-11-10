import dictionary from '../api/dictionary'

function receiveWords(words) {
  return {
    type: 'RECEIVE_WORDS',
    words: words
  }
}

export function getWords() {
  return dispatch => {
    dictionary.getWords(words => {
      dispatch(receiveWords(words))
    })
  }
}

export function addAnswer(answer) {
  return {
    type: 'ADD_ANSWER',
    answer: answer.toUpperCase()
  }
}

export function resetAnswers() {
  return {
    type: 'RESET_ANSWERS'
  }
}

export function setStartingLetter(letter) {
  return {
    type: 'SET_STARTING_LETTER',
    letter: letter
  }
}
