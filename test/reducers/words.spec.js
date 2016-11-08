import expect from 'expect'
import { words, filterWords, getWordsByLength, getLetterIndex, wordsStartingWith, getTwoLetterWordSections, getThreeLetterWordSections } from '../../reducers/words'
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

  it('should get words by length', () => {
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
          const expected = ['AA', 'DO']

      const actual = getWordsByLength(items, 2)

      expect(expected).toEqual(actual)
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
      const actual = getLetterIndex(items)

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

  it('should get two letter words by section', () => {
      const words = ['AA', 'AB', 'AD', 'AE', 'AG', 'AH', 'AI', 'BA', 'BE', 'BO', 'BY', 'DE', 'DO', 'ED', 'EF', 'EH', 'EL', 'EM', 'EN']
      const expected = {
          'A': ['AA', 'AB', 'AD', 'AE', 'AG', 'AH', 'AI'],
          'B - D': ['BA', 'BE', 'BO', 'BY', 'DE', 'DO'],
          'E': ['ED', 'EF', 'EH', 'EL', 'EM', 'EN']
      }
      const actual = getTwoLetterWordSections(words, 6)

      expect(expected).toEqual(actual)
  })

  it('should get three letter words by section', () => {
      const words = ['PYA', 'PYE', 'PYX', 'QAT', 'QIS', 'RAD', 'RAG', 'RAH', 'RAI', 'RAM', 'RAN', 'RAP', 'REB', 'REC']
      const expected = [
          ['PYA', 'PYE', 'PYX'],
          ['QAT', 'QIS'],
          ['RAD', 'RAG', 'RAH', 'RAI', 'RAM', 'RAN', 'RAP'],
          ['REB', 'REC']
      ]
      const actual = getThreeLetterWordSections(words, 2)

      expect(expected).toEqual(actual)
  })
})
