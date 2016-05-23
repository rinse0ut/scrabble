import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'
import Word from '../../components/Word'
import Letter from '../../components/Letter'

function setup() {
  const component = mount(
    <Word word="Scrabble" />
  )

  return {
    component: component
  }
}

describe('<Word/>', () => {
  it('should contain <Letter/> components', () => {
    const { component } = setup()
    expect(component.find(Letter).length).toBe(8)
  });

})
