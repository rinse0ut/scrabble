import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import WordTextInput from '../../components/WordTextInput'

function setup() {
  const actions = {
      onSave: expect.createSpy()
  }
  const component = shallow(
    <WordTextInput {...actions} />
  )

  return {
    component: component,
    actions: actions
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
    component.find('input').simulate('keypress', { which: 13, target: { value: 'foo'} })
    expect(actions.onSave).toHaveBeenCalledWith('foo')
  })
  it('should reset state on return key press', () => {
    const { component, actions} = setup()
    component.find('input').simulate('keypress', { which: 13, target: { value: 'foo'} })
    expect(component.state('text')).toBe('')
  })
})
