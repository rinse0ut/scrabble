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

export function addResponse(response){
  return {
    type: 'ADD_RESPONSE',
    response: response.toUpperCase()
  }
}

export function setLetter(letter){
  return {
    type: 'SET_STARTING_LETTER',
    letter: letter
  }
}
