import R from 'ramda'

export const words = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_WORDS':
            return action.words
        default:
            return state
    }
}

export default words

export const letterIndex = R.compose(R.uniq, R.map(R.head), R.pluck('word'))

const wordStartsWith = R.curry((letter, item) => R.equals(R.head(item.word), letter))

export const wordsStartingWith = R.curry((items, letter) => R.filter(wordStartsWith(letter), items))
