import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import List from '../../components/List'

function setup(value = 0) {

  const items = ['Foo', 'Bar', 'Baz']

  const component = shallow(
    <List items={items} />
  )

  return {
    items: items,
    component: component,
    ul: component.find('ul'),
    li: component.find('li')
  }
}

describe('<List/>', () => {
  it('should display a list of items', () => {
    const { component, ul, li, items } = setup()

    expect(ul.length).toBe(1)
    expect(li.length).toBe(3)

    ul.children().forEach((node, key) => {
        expect(parseInt(node.key())).toBe(key)
        expect(node.text()).toBe(items[key])
    })
  });
})
