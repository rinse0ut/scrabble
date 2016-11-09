import expect from 'expect'
import * as actions from '../../actions'

describe('Word Filter actions', () => {
  it('addResponse should create SET_LETTER action', () => {
    expect(actions.setLetter('A')).toEqual({
      type: 'SET_STARTING_LETTER',
      letter: 'A'
    })
  })
})
