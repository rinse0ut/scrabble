import R from 'ramda'

export const words = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_WORDS':
            return action.words
        default:
            return state
    }
}

export function getWordsByLength(state) {
  return (len) => {
      let r = state.words.filter((item) => {
          return (item.word.length == len)
      })
      return r
  }
}

// export function getWordsByLength(state) {
//   return (len) => state.words.filter((item) => item.word.length == len)
// }

export default words

export const filterWords = (startingLetters, items) => {
    const beginsWith = R.join('', startingLetters)
    const hasMatch   = item => R.test(new RegExp('^' + beginsWith), R.prop('word', item))

    return R.filter(hasMatch, items)
}

export const getSections = (words, minSectionLen) => {
    let sections = []
    let section = []
    let i = 1;

    const nextWordHasDifferentStartingLetter = () => {
        if (words[i] === undefined) {
            return false
        }
        return words[i-1].charAt(0) !== words[i].charAt(0)
    }

    while (i <= words.length) {
        section.push(words[i-1])
        if (section.length >= minSectionLen && nextWordHasDifferentStartingLetter()
        || i === words.length) {
            sections.push(section)
            section = []
        }
        i++
    }

    return sections
}
