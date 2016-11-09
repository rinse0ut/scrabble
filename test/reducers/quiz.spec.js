import expect from 'expect'
import { quiz, isCorrectResponse, hasMatchingResponse, correctItems, percentage } from '../../reducers/quiz'
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

    it('should check if a response is correct', () => {
        var response = 'AA'
        var items = [
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
        var expected = true
        var actual = isCorrectResponse(response, items)

        expect(expected).toEqual(actual)
    })

    it('should check if an item has a matching response', () => {
        const responses = ['AA', 'QI', 'ZA']
        const item = {
            word: "AA",
            def: "Definition"
        }
        const expected = true
        const actual = hasMatchingResponse(responses, item)

        expect(expected).toEqual(actual)
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
        const actual = correctItems(responses, items)

        expect(expected).toEqual(actual)
    })

    it('should calculate percentage', () => {
        const a = ['x', 'y']
        const b = ['a', 'b', 'c', 'd']
        const expected = 50
        const actual = percentage(a, b)

        expect(expected).toEqual(actual)
    })
})
