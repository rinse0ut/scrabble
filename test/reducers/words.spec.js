import expect from 'expect'
import { words, filterWords, getSections } from '../../reducers/words'
import deepFreeze from 'deep-freeze'
import R from 'ramda'

describe('Words reducer', () => {
  it('should handle RECEIVE_WORDS action', () => {
      const items  = [
          {
            "word": "Word 1",
            "def": "Definition 1"
          },
          {
            "word": "Word 2",
            "def": "Definition 2"
          }
      ]
      const action = {
        type: 'RECEIVE_WORDS',
        words: items
      }
      expect(words({}, action)).toEqual(items)
  })
  it('should filter words by starting letters', () => {
      const startingLetters = ['A']
      const items = [
          {
              word: "AA",
              def: "Definition"
          },
          {
              word: "DO",
              def: "Definition"
          },
          {
              word: "QI",
              def: "Definition"
          },
      ]
      const expected = [
          {
              word: "AA",
              def: "Definition"
          }
      ]
      const actual = filterWords(startingLetters, items)

      expect(expected).toEqual(actual)
  })

  it('should get words by section', () => {
      const words = ['AA', 'AB', 'AD', 'AE', 'AG', 'AH', 'AI', 'BA', 'BE', 'BO', 'BY', 'DE', 'DO', 'ED', 'EF', 'EH', 'EL', 'EM', 'EN']
      const expected = [
          ['AA', 'AB', 'AD', 'AE', 'AG', 'AH', 'AI'],
          ['BA', 'BE', 'BO', 'BY', 'DE', 'DO'],
          ['ED', 'EF', 'EH', 'EL', 'EM', 'EN']
      ]
      const actual = getSections(words, 6)

      expect(expected).toEqual(actual)
  })
})
