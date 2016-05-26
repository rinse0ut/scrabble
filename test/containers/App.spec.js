import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { App } from '../../containers/App'
import DefinitionList from '../../components/DefinitionList'
import Definition from '../../components/Definition'

const initialItems = [
   {
     "word": "AAH",
     "def": "to exclaim in surprise [v -ED, -ING, -S]"
   },
   {
     "word": "AAL",
     "def": "an East Indian shrub [n -S]"
   },
   {
     "word": "AAS",
     "def": "AA, a rough cindery lava [n]"
   }
]

function setup(correctItems = initialItems) {
  const actions = {
     onSave: expect.createSpy()
  }
  const component = mount(
    <App {...actions} correctItems={correctItems} />
  )

  return {
    component: component,
    correctItems: correctItems
  }
}

describe('<App/>', () => {
    it('should display a title', () => {
      const { correctItems, component } = setup()
      expect(component.find('h1').text()).toBe('Scrabble Words')
    })
    it('should contain the correct responses in a <DefinitionList/> with <Definition/> components', () => {
      const { correctItems, component } = setup()
      expect(component.find(DefinitionList).length).toBe(1)
      expect(component.find(Definition).length).toBe(correctItems.length)
    })
    it('should not display <DefinitionList/> when there are no correct responses', () => {
      const { component } = setup([])
      expect(component.find(DefinitionList).length).toBe(0)
    })
})
