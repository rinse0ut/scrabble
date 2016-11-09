import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { LetterIndex } from '../../containers/LetterIndex'
import { List } from '../../containers/LetterIndex'

const letters = ['A', 'B', 'D']
const route = { path: '/test/letter' }

function setup() {
  const component = mount(
    <LetterIndex letters={letters} route={route} />
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
    it('should contain the letter links in a <List/> component', () => {
      const { component, words } = setup()
      expect(component.find('li').length).toBe(3)
      expect(component.find('a').length).toBe(3)
    })
})
