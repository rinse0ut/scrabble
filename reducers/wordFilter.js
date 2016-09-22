import R from 'ramda'

const initialState = {
    letters: ['A', 'A']
}

export const wordFilter = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_LETTER':
            const letter = state.letters[action.key]
            const nextLetter = String.fromCharCode(letter.charCodeAt(0) + 1)
            return {
                letters: R.update(action.key, nextLetter, state.letters)
            }
        default:
            return state
    }
}

export default wordFilter

export const filterWords = (wordFilter, items) => {
    const letters           = R.join('', wordFilter.letters)
    const startsWithLetters = new RegExp('^' + letters)
    const getWord           = R.prop('word')
    const hasMatch          = item => R.test(startsWithLetters, getWord(item))

    return R.filter(hasMatch, items)
}

// const getNextValidLetter = letter => {
//     while (R.empty) {
//
//     }
// }
