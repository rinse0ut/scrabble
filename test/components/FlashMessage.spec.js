import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import FlashMessage from '../../components/FlashMessage'

function setup(status, message) {
  const component = shallow(
    <FlashMessage status={status} message={message} />
  )

  return {
    component: component
  }
}

describe('<FlashMessage/>', () => {
  it('should have the correct css classes', () => {
    const { component } = setup('success', 'complete message')
    expect(component.find('.alert').length).toBe(1);
    expect(component.find('.alert-success').length).toBe(1);
  })
  it('should display a message', () => {
    const { component } = setup('danger', 'danger message')
    expect(component.find('.alert').text()).toBe('danger message');
  })
})
