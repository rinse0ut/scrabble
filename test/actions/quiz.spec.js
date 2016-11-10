import expect from 'expect'
import * as actions from '../../actions'

describe('Quiz actions', () => {
  it('setStartingLetter should create SET_STARTING_LETTER action', () => {
    expect(actions.setStartingLetter('A')).toEqual({
      type: 'SET_STARTING_LETTER',
      letter: 'A'
    })
  })
})
