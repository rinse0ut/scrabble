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

const getWord  = R.prop('word')
const getWords = R.pluck('word')

// export const getCorrectItems = () => [
//     {
//         word: "AA",
//         def: "Definition"
//     },
//     {
//         word: "AB",
//         def: "Definition"
//     }
// ]

// export const getCorrectItems = () => [
//     {
//         word: "AA",
//         def: "Definition"
//     },
//     {
//         word: "AB",
//         def: "Definition"
//     }
// ]

export const getCorrectItems = (responses, items) => {
    const correctResponsess = R.intersection(responses, getWords(items))
    const isCorrectItem     = item => R.indexOf(getWord(item), correctResponsess) !== -1
    return R.filter(isCorrectItem, items)
}

export const getProgress = (responses, items) => {
    const correctItems = getCorrectItems(responses, items)
    return (R.length(correctItems) / R.length(items)) * 100
}
