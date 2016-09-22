import expect from 'expect'
import { wordFilter, filterWords} from '../../reducers/wordFilter'
import deepFreeze from 'deep-freeze'
import R from 'ramda'

describe('R.test', () => {
  it('should find a word', () => {
    const word = 'AAH'
    expect(R.test(/^AA/, word)).toEqual(true)
  })
  it('should use regex', () => {
    const word = 'AAH'
    const letters = 'AA'
    const regex = new RegExp('^' + letters)
    expect(R.test(regex, word)).toEqual(true)
  })
})

describe('Word Filter reducer', () => {
  it('should handle inital state', () => {
    const stateBefore = undefined
    const action = {}
    const stateAfter = {
      letters: ['A', 'A']
    }
    expect(wordFilter(stateBefore, action)).toEqual(stateAfter)
  })

  it('filterWords should filter a word list by word filter', () => {
    const wordFilter = {
        letters: ['A', 'A']
    }
    const words = [
        {
          "word": "AAH",
          "def": "to exclaim in surprise [v -ED, -ING, -S]"
        },
        {
          "word": "AAL",
          "def": "an East Indian shrub [n -S]"
        },
        {
          "word": "AAS",
          "def": "AA, a rough cindery lava [n]"
        },
        {
            "word": "ABA",
            "def": "a Syrian cloth, also ABAYA [n -S]"
        },
        {
        "word": "BAA",
        "def": "to cry like a sheep [v -ED, -ING, -S]"
        }
    ]
    const actual   = filterWords(wordFilter, words)
    const expected = [
        {
          "word": "AAH",
          "def": "to exclaim in surprise [v -ED, -ING, -S]"
        },
        {
          "word": "AAL",
          "def": "an East Indian shrub [n -S]"
        },
        {
          "word": "AAS",
          "def": "AA, a rough cindery lava [n]"
        }
    ]

    expect(filterWords(wordFilter, words)).toEqual(expected)
  })

  it('should handle INCREMENT_LETTER_FILTER letter filter', () => {
    var stateBefore = {
      letters: ['A', 'A']
    }
    var action = {
        type: 'INCREMENT_LETTER',
        key: 1
    }
    var stateAfter = {
      letters: ['A', 'B']
    }
    // deepfreeze(stateBefore)
    // deepfreeze(action)
    expect(wordFilter(stateBefore, action)).toEqual(stateAfter)

    // var stateBefore = {
    //   letters: ['A', 'Z']
    // }
    // var action = {
    //     type: 'INCREMENT_LETTER_FILTER',
    //     key: 1
    // }
    // var stateAfter = {
    //   letters: ['A', 'a']
    // }
    // // deepfreeze(stateBefore)
    // // deepfreeze(action)
    // expect(wordFilter(stateBefore, action)).toEqual(stateAfter)
  })

})
