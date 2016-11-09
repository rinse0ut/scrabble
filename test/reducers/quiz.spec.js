import expect from 'expect'
import { quiz, getCorrectItems, getProgress, getSections } from '../../reducers/quiz'
import deepFreeze from 'deep-freeze'

describe('Quiz reducer', () => {

    const initialState = {
      startingLetter: null,
      responses: []
    }

    it('should handle the initial state', () => {
      expect(quiz(undefined, {})).toEqual(initialState)
    })

    it('should handle SET_STARTING_LETTER action', () => {
        var stateBefore = {
            startingLetter: [],
            responses: []
        }
        var action = {
            type: 'SET_STARTING_LETTER',
            letter: 'A'
        }
        var stateAfter = {
            startingLetter: 'A',
            responses: []
        }
        deepFreeze(stateBefore)
        deepFreeze(action)
        expect(quiz(stateBefore, action)).toEqual(stateAfter)

        var stateBefore = {
            startingLetter: 'A',
            responses: []
        }
        var action = {
            type: 'SET_STARTING_LETTER',
            key: 0,
            letter: 'B'
        }
        var stateAfter = {
            startingLetter: 'B',
            responses: []
        }
        deepFreeze(stateBefore)
        deepFreeze(action)
        expect(quiz(stateBefore, action)).toEqual(stateAfter)
    })

    it('should handle ADD_RESPONSE action', () => {
        var stateBefore = {
            startingLetter: 'A',
            responses: []
        }
        var action = {
            type: 'ADD_RESPONSE',
            response: 'AA'
        }
        var stateAfter = {
            startingLetter: 'A',
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
