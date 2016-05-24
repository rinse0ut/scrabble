import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import WordInput from '../../components/WordInput'

function setup() {
  const actions = {
      onSave: expect.createSpy()
  }
  const component = shallow(
    <WordInput {...actions} />
  )

  return {
    component: component,
    actions: actions
  }
}

describe('<WordInput/>', () => {
  it('should display a title', () => {
    const { component } = setup()
    expect(component.contains(<h2>Word Input</h2>)).toBe(true)
  })
  it('should display a text input box', () => {
    const { component } = setup()
    expect(component.find('input').length).toBe(1);
  })
  it('should have the correct css classes', () => {
    const { component } = setup()
    expect(component.find('div.well').length).toBe(1);
    expect(component.find('div.col-md-3').length).toBe(1);
    expect(component.find('div.gutter-left').length).toBe(1);
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
