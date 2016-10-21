import R from 'ramda'

export const words = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_WORDS':
            return action.words
        default:
            return state
    }
}
//
// export function getWordsByLength(state) {
//   return (len) => {
//       let r = state.words.filter((item) => {
//           return (item.word.length == len)
//       })
//       return r
//   }
// }

export function getWordsByLength(items, len) {
  return R.pluck('word', items.filter((item) => item.word.length == len))
}

export default words

export const filterWords = (startingLetters, items) => {
    const beginsWith = R.join('', startingLetters)
    const hasMatch   = item => R.test(new RegExp('^' + beginsWith), R.prop('word', item))

    return R.filter(hasMatch, items)
}

const createSectionLabel = section => {
    let label = null;
    const firstWord = section[0]
    const lastWord = R.last(section)
    if (firstWord.charAt(0) === lastWord.charAt(0)) {
        label = firstWord.charAt(0)
    } else {
        label = firstWord.charAt(0) + ' - ' + lastWord.charAt(0)
    }
    return label
}

export const getTwoLetterWordSections = (words, minSectionLen) => {
    let sections = {}
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
        if (section.length >= minSectionLen && nextWordHasDifferentStartingLetter() || i === words.length) {
            sections[createSectionLabel(section)] = section
            section = []
        }
        i++
    }

    return sections
}

export const getThreeLetterWordSections = (words, minSectionLen) => {
    let sections = []
    let section = []
    let i = 1;

    const nextWordHasDifferentCharAt = (pos) => {
        if (words[i] === undefined) {
            return false
        }
        return words[i-1].charAt(pos) !== words[i].charAt(pos)
    }

    while (i <= words.length) {
        section.push(words[i-1])
        // console.log(section.length, minSectionLen, section.length >= minSectionLen, nextWordHasDifferentCharAt(0), nextWordHasDifferentCharAt(1), section)
        if (section.length >= minSectionLen && (nextWordHasDifferentCharAt(0) || nextWordHasDifferentCharAt(1))
        || i === words.length) {
            sections.push(section)
            section = []
        }
        i++
    }

    // console.log('SECTIONS', sections)
    return sections
}
