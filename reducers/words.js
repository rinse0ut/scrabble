export const words = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_WORDS':
            return action.words
        default:
            return state
    }
}

// export function getWordsByLength(state) {
//   return (len) => state.words.filter((item) => item.word.length == len)
// }

export function getWordsByLength(state) {
  return (len) => {
      let r = state.words.filter((item) => {
          return (item.word.length == len)
      })
      return r
  }
}

export default words
