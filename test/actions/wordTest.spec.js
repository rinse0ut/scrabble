import expect from 'expect'
import * as actions from '../../actions'

describe('Word Test actions', () => {
  it('addResponse should create ADD_RESPONSE action', () => {
    expect(actions.addResponse('FOO')).toEqual({
      type: 'ADD_RESPONSE',
      response: 'FOO'
    })
  })
  it('addResponse should return an uppercase response', () => {
    expect(actions.addResponse('bar')).toEqual({
      type: 'ADD_RESPONSE',
      response: 'BAR'
    })
  })
})
