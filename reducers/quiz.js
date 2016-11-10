import R from 'ramda'

const initialState = {
  startingLetter: null,
  answers: []
}

export const quiz = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_STARTING_LETTER':
            return R.assoc('startingLetter', action.letter, state)

        case 'ADD_ANSWER':
            return R.assoc('answers', R.append(action.answer, state.answers), state)

        case 'RESET_ANSWERS':
            return R.assoc('answers', [], state)

        default:
            return state
    }
}

export default quiz

const word = R.prop('word')
const words = R.pluck('word')

export const isCorrectAnswer = (word, items) => R.contains(word, words(items))

export const hasMatchingAnswer = R.curry((answers, item) => R.contains(word(item), answers))

export const correctItems = (answers, items) => R.filter(hasMatchingAnswer(answers), items)

export const percentage = (a, b) => (R.length(a) / R.length(b)) * 100
