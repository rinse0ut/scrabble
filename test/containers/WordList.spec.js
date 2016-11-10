import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { WordList } from '../../containers/WordList'
import DefinitionList from '../../components/DefinitionList'
import Definition from '../../components/Definition'

const initialItems = [
   {
     "word": "Word Oone",
     "def": "Definition One"
   },
   {
     "word": "Word Two",
     "def": "Definition Two"
   }
]

function setup() {

  const component = mount(
    <WordList words={initialItems} />
  )

  return {
    component: component,
    words: initialItems
  }
}

describe('<WordList/>', () => {
    // it('should display a title', () => {
    //   const { component } = setup()
    //   expect(component.find('h1').text()).toBe('Word List')
    // })
    // it('should contain the words in a <DefinitionList/> with <Definition/> components', () => {
    //   const { component, words } = setup()
    //   expect(component.find(DefinitionList).length).toBe(1)
    //   expect(component.find(Definition).length).toBe(words.length)
    // })
})
