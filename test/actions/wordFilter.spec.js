import expect from 'expect'
import * as actions from '../../actions'

describe('Word Filter actions', () => {
  it('addResponse should create INCREMENT_LETTER action', () => {
    expect(actions.incrementLetter(1)).toEqual({
      type: 'INCREMENT_LETTER',
      key: 1
    })
  })
})
