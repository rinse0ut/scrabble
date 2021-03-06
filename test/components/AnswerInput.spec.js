import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import AnswerInput from '../../components/AnswerInput'
import Letter from '../../components/Letter'

function setup() {
  const startingLetter = 'A'
  const actions = {
      onSave: expect.createSpy()
  }
  const component = shallow(
    <AnswerInput {...actions} startingLetter={startingLetter} />
  )

  return {
    component: component,
    actions: actions,
    startingLetter, startingLetter
  }
}

describe('<AnswerInput/>', () => {
  it('should display a text input box', () => {
    const { component } = setup()
    expect(component.find('input').length).toBe(1);
  })
  it('should have the correct css classes', () => {
    const { component } = setup()
    expect(component.find('.form-control').length).toBe(1);
  })
  it('should call onSave on return key press', () => {
    const { component, actions} = setup()
    component.find('input').simulate('keypress', { which: 13, target: { value: 'H'} })
    expect(actions.onSave).toHaveBeenCalledWith('AH')
  })
  it('should reset state on return key press', () => {
    const { component, actions} = setup()
    component.find('input').simulate('keypress', { which: 13, target: { value: 'H'} })
    expect(component.state('text')).toBe('')
  })
  // it('should display starting <Letter/> components', () => {
  //   const { component, startingLetters } = setup()
  //   expect(component.find(Letter).length).toBe(startingLetters.length)
  // });
})
