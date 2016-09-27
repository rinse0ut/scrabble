import R from 'ramda'
import threeLetterWords from '../stores/words-three-letter.json';

const initialState = {
    letters: ['A', 'A']
}

export const wordFilter = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LETTER':
            return {
                letters: R.update(action.key, action.value, state.letters)
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
