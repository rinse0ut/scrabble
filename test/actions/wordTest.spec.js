import expect from 'expect'
import * as actions from '../../actions'

describe('Word Test actions', () => {
  it('addResponse should create ADD_RESPONSE action', () => {
    expect(actions.addResponse('foo')).toEqual({
      type: 'ADD_RESPONSE',
      response: 'foo'
    })
  })
})
