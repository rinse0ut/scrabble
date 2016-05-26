import expect from 'expect'
import wordTest from '../../reducers/wordTest'
import deepFreeze from 'deep-freeze'

describe('Word Test reducer', () => {
  it('should handle inital state', () => {
      var stateBefore = undefined
      var action = {}
      var stateAfter = {
          responses: []
      }
      expect(wordTest(stateBefore, action)).toEqual(stateAfter)
  })

  it('should handle ADD_RESPONSE', () => {
    var stateBefore = {
        responses: []
    }
    var action = {
        type: 'ADD_RESPONSE',
        response: 'foo'
    }
    var stateAfter = {
        responses: ['foo']
    }

    deepFreeze(stateBefore)
    deepFreeze(action)
    expect(wordTest(stateBefore, action)).toEqual(stateAfter)

    var stateBefore = {
        responses: ['foo']
    }
    var action = {
        type: 'ADD_RESPONSE',
        response: 'bar'
    }
    var stateAfter = {
        responses: ['foo', 'bar']
    }

    deepFreeze(stateBefore)
    deepFreeze(action)
    expect(wordTest(stateBefore, action)).toEqual(stateAfter)
   })

   it('getCorrectItems should return items that match the responses', () => {
    expect(true).toBe(false)
   })

   it('getProgress should return the percentage of correct responses to correct answers', () => {
    expect(true).toBe(false)
   })
})
