import expect from 'expect'
import React from 'react'
import { mount } from 'enzyme'
import DefinitionList from '../../components/DefinitionList'
import Definition from '../../components/Definition'

function setup(value = 0) {
  const items = [
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
  const component = mount(
    <DefinitionList items={items} />
  )

  return {
    items: items,
    component: component
  }
}

describe('<DefinitionList/>', () => {
  it('should display a list of <Definition/> components', () => {
    const { component, items } = setup()
    expect(component.find(Definition).length).toBe(items.length)
  });
})
