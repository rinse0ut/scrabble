import expect from 'expect'
import * as actions from '../../actions'

describe('Word actions', () => {
  it('addAnswer should create ADD_ANSWER action', () => {
    expect(actions.addAnswer('FOO')).toEqual({
      type: 'ADD_ANSWER',
      answer: 'FOO'
    })
  })
  it('addAnswer should return an uppercase answer', () => {
    expect(actions.addAnswer('bar')).toEqual({
      type: 'ADD_ANSWER',
      answer: 'BAR'
    })
  })
  it('resetAnswers should create RESET_ANSWERS action', () => {
    expect(actions.resetAnswers()).toEqual({
      type: 'RESET_ANSWERS'
    })
  })
})
