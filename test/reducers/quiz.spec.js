import expect from 'expect'
import { quiz, getCorrectItems, getProgress, getSections } from '../../reducers/quiz'
import deepFreeze from 'deep-freeze'

describe('Quiz reducer', () => {

    const initialState = {
      wordLen: null,
      startingLetters: ['A'],
      responses: []
    }

    it('should handle the initial state', () => {
      expect(quiz(undefined, {})).toEqual(initialState)
    })

    it('should handle SET_WORD_LENGTH action', () => {
        var stateBefore = {
            wordLen: null,
            startingLetters: [],
            responses: []
        }
        var action = {
            type: 'SET_WORD_LENGTH',
            length: 2
        }
        var stateAfter = {
            wordLen: 2,
            startingLetters: [],
            responses: []
        }
        deepFreeze(stateBefore)
        deepFreeze(action)
        expect(quiz(stateBefore, action)).toEqual(stateAfter)
    })

    it('should handle SET_STARTING_LETTER action', () => {
        var stateBefore = {
            wordLen: null,
            startingLetters: [],
            responses: []
        }
        var action = {
            type: 'SET_STARTING_LETTER',
            key: 0,
            letter: 'A'
        }
        var stateAfter = {
            wordLen: null,
            startingLetters: ['A'],
            responses: []
        }
        deepFreeze(stateBefore)
        deepFreeze(action)
        expect(quiz(stateBefore, action)).toEqual(stateAfter)

        var stateBefore = {
            wordLen: null,
            startingLetters: ['A'],
            responses: []
        }
        var action = {
            type: 'SET_STARTING_LETTER',
            key: 0,
            letter: 'B'
        }
        var stateAfter = {
            wordLen: null,
            startingLetters: ['B'],
            responses: []
        }
        deepFreeze(stateBefore)
        deepFreeze(action)
        expect(quiz(stateBefore, action)).toEqual(stateAfter)
    })

    it('should handle ADD_RESPONSE action', () => {
        var stateBefore = {
            wordLen: 2,
            startingLetters: ['A'],
            responses: []
        }
        var action = {
            type: 'ADD_RESPONSE',
            response: 'AA'
        }
        var stateAfter = {
            wordLen: 2,
            startingLetters: ['A'],
            responses: ['AA']
        }
        deepFreeze(stateBefore)
        deepFreeze(action)
        expect(quiz(stateBefore, action)).toEqual(stateAfter)
    })
    it('should get correct items by quiz responses', () => {
        const responses = ['AA', 'AB']
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
                word: "AD",
                def: "Definition"
            },
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
        const actual = getCorrectItems(responses, items)

        expect(expected).toEqual(actual)
    })

    it('should get progress by quiz responses', () => {
        const responses = ['AA', 'AB']
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
                word: "AD",
                def: "Definition"
            },
            {
                word: "AF",
                def: "Definition"
            },
        ]
        const expected = 50
        const actual = getProgress(responses, items)

        expect(expected).toEqual(actual)
    })
})
