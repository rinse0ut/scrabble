import expect from 'expect'
import { words } from '../../reducers/words'
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
})
