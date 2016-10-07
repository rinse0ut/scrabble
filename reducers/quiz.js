import R from 'ramda'

const initialState = {
  wordLen: null,
  startingLetters: ['A'],
  responses: []
}

export const quiz = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WORD_LENGTH':
            return Object.assign({}, state, {
                wordLen: action.length
            })
        case 'SET_STARTING_LETTER':
            return Object.assign({}, state, {
                startingLetters: [action.letter]
            })
        case 'ADD_RESPONSE':
            return Object.assign({}, state, {
                responses: R.append(action.response, state.responses)
            })
        default:
            return state
    }
}

export default quiz

const getWord  = R.prop('word')
const getWords = R.pluck('word')

export const getCorrectItems = (responses, items) => {
    const correctResponsess = R.intersection(responses, getWords(items))
    const isCorrectItem     = item => R.indexOf(getWord(item), correctResponsess) !== -1
    return R.filter(isCorrectItem, items)
}

export const getProgress = (responses, items) => {
    const correctItems = getCorrectItems(responses, items)
    return (R.length(correctItems) / R.length(items)) * 100
}
