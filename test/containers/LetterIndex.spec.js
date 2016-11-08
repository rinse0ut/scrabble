import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { LetterIndex } from '../../containers/LetterIndex'

const letters = ['A', 'B', 'D']

function setup() {
  const component = mount(
    <LetterIndex letters={letters} />
  )
  return {
    component: component,
    letters: letters
  }
}

describe('<LetterIndex/>', () => {
    it('should display a title', () => {
      const { component } = setup()
      expect(component.find('h1').text()).toBe('Letter Index')
    })
    // it('should contain the words in a <DefinitionList/> with <Definition/> components', () => {
    //   const { component, words } = setup()
    //   expect(component.find(DefinitionList).length).toBe(1)
    //   expect(component.find(Definition).length).toBe(words.length)
    // })
})
