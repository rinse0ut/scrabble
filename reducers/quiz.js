import R from 'ramda'

const initialState = {
  startingLetter: null,
  responses: []
}

export const quiz = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_STARTING_LETTER':
            return R.assoc('startingLetter', action.letter, state)

        case 'ADD_RESPONSE':
            return R.assoc('responses', R.append(action.response, state.responses), state)

        default:
            return state
    }
}

export default quiz

const word = R.prop('word')
const words = R.pluck('word')

export const isCorrectResponse = (word, items) => R.contains(word, words(items))

export const hasMatchingResponse = R.curry((responses, item) => R.contains(word(item), responses))

export const correctItems = (responses, items) => R.filter(hasMatchingResponse(responses), items)

export const percentage = (a, b) => (R.length(a) / R.length(b)) * 100
