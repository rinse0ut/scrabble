import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'
import ProgressBar from '../../components/ProgressBar'

function setup() {
  const component = shallow(
    <ProgressBar progress={50} />
  )

  return {
    component: component
  }
}

describe('<ProgressBar/>', () => {
  it('should have the correct css classes', () => {
    const { component } = setup()
    expect(component.find('.progress').length).toBe(1)
    expect(component.find('.progress-bar').length).toBe(1)
  });

})
