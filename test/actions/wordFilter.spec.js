import expect from 'expect'
import * as actions from '../../actions'

describe('Word Filter actions', () => {
  it('addResponse should create SET_LETTER action', () => {
    expect(actions.setLetter(1, 'A')).toEqual({
      type: 'SET_LETTER',
      key: 1,
      value: 'A'
    })
  })
})
