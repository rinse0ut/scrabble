import expect from 'expect'
import { words, letterIndex, wordsStartingWith } from '../../reducers/words'
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

  it('should get letter index by word starting letters', () => {
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
              word: "ZAP",
              def: "Definition"
          }
      ]
      const expected = ['A', 'D', 'Z']
      const actual = letterIndex(items)

      expect(expected).toEqual(actual)
  })

  it('should get items by starting word letter', () => {
      const items = [
          {
              word: "AA",
              def: "Definition"
          },
          {
              word: "AB",
              def: "Definition"
          },
          {
              word: "ZA",
              def: "Definition"
          }
      ]
      const expected = [
          {
              word: "AA",
              def: "Definition"
          },
          {
              word: "AB",
              def: "Definition"
          }
      ]
      const actual = wordsStartingWith(items, 'A')

      expect(expected).toEqual(actual)
  })

})
