import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'
import Definition from '../../components/Definition'
import Word from '../../components/Word'
import Letter from '../../components/Letter'

function setup() {
  const item = {
      word: 'scrabble',
      def: 'A game in which players build up words on a board from small lettered squares or tiles.'
  }
  const component = mount(
    <Definition item={item} />
  )

  return {
    item: item,
    component: component,
    definition: component.find('.definition')
  }
}

describe('<Definition/>', () => {
  it('should contain a <Word/> component', () => {
    const { component } = setup()
    expect(component.find(Word).length).toBe(1)
  });
  it('should contain a definition', () => {
    const { item, definition } = setup()
    expect(definition.text()).toBe(item.def)
  });
})
