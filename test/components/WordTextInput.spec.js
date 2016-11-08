import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import WordTextInput from '../../components/WordTextInput'
import Letter from '../../components/Letter'

function setup() {
  const startingLetters = ['A', 'A']
  const actions = {
      onSave: expect.createSpy()
  }
  const component = shallow(
    <WordTextInput {...actions} startingLetters={startingLetters} />
  )

  return {
    component: component,
    actions: actions,
    startingLetters, startingLetters
  }
}

describe('<WordTextInput/>', () => {
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
    expect(actions.onSave).toHaveBeenCalledWith('AAH')
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
