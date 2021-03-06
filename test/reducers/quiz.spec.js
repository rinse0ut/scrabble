import expect from 'expect'
import { quiz, isCorrectAnswer, hasMatchingAnswer, correctItems, percentage } from '../../reducers/quiz'
import deepFreeze from 'deep-freeze'

describe('Quiz reducer', () => {

    const initialState = {
      startingLetter: null,
      answers: []
    }

    it('should handle the initial state', () => {
      expect(quiz(undefined, {})).toEqual(initialState)
    })

    it('should handle SET_STARTING_LETTER action', () => {
        var stateBefore = {
            startingLetter: [],
            answers: []
        }
        var action = {
            type: 'SET_STARTING_LETTER',
            letter: 'A'
        }
        var stateAfter = {
            startingLetter: 'A',
            answers: []
        }
        deepFreeze(stateBefore)
        deepFreeze(action)
        expect(quiz(stateBefore, action)).toEqual(stateAfter)

        var stateBefore = {
            startingLetter: 'A',
            answers: []
        }
        var action = {
            type: 'SET_STARTING_LETTER',
            key: 0,
            letter: 'B'
        }
        var stateAfter = {
            startingLetter: 'B',
            answers: []
        }
        deepFreeze(stateBefore)
        deepFreeze(action)
        expect(quiz(stateBefore, action)).toEqual(stateAfter)
    })

    it('should handle ADD_ANSWER action', () => {
        var stateBefore = {
            startingLetter: 'A',
            answers: []
        }
        var action = {
            type: 'ADD_ANSWER',
            answer: 'AA'
        }
        var stateAfter = {
            startingLetter: 'A',
            answers: ['AA']
        }
        deepFreeze(stateBefore)
        deepFreeze(action)
        expect(quiz(stateBefore, action)).toEqual(stateAfter)
    })

    it('should handle RESET_ANSWERS action', () => {
        var stateBefore = {
            startingLetter: 'A',
            answers: ['DO', 'DE', 'GO']
        }
        var action = {
            type: 'RESET_ANSWERS'
        }
        var stateAfter = {
            startingLetter: 'A',
            answers: []
        }
        deepFreeze(stateBefore)
        deepFreeze(action)
        expect(quiz(stateBefore, action)).toEqual(stateAfter)
    })

    it('should check if a answer is correct', () => {
        var answer = 'AA'
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
        var actual = isCorrectAnswer(answer, items)

        expect(expected).toEqual(actual)
    })

    it('should check if an item has a matching answer', () => {
        const answers = ['AA', 'QI', 'ZA']
        const item = {
            word: "AA",
            def: "Definition"
        }
        const expected = true
        const actual = hasMatchingAnswer(answers, item)

        expect(expected).toEqual(actual)
    })

    it('should get correct items by quiz answers', () => {
        const answers = ['AA', 'AB']
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
        const actual = correctItems(answers, items)

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
