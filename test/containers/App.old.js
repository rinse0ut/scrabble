import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { App } from '../../containers/App'
import DefinitionList from '../../components/DefinitionList'
import Definition from '../../components/Definition'
import WordTextInput from '../../components/WordTextInput'

const initialWordFilter = {
    letters: ['A', 'A']
}

const intialProgress = 0

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

function setup(correctItems = initialItems, progress = intialProgress, wordFilter = initialWordFilter) {
  const actions = {
     onSave: expect.createSpy(),
     onComplete: expect.createSpy()
  }
  const component = mount(
    <App {...actions} wordFilter={wordFilter} correctItems={correctItems} progress={progress} />
  )

  return {
    component: component,
    correctItems: correctItems,
    wordFilter: wordFilter,
    actions: actions
  }
}

describe('<App/>', () => {
    it('should display a title', () => {
      const { correctItems, component } = setup()
      expect(component.find('h1').text()).toBe('Scrabble Don')
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
    it('should display <WordTextInput/> when progress less than 100', () => {
      const { component } = setup()
      expect(component.find(WordTextInput).length).toBe(1)
    })
    it('should display a next set button when the word set is complete', () => {
      const { component, correctItems } = setup(initialItems, 100)
      expect(component.find('.next').length).toBe(1)
    })
    it('should call onComplete when next button is pressed', () => {
      const { component, actions } = setup(initialItems, 100)
      component.find('.next').simulate('click')
      expect(actions.onComplete).toHaveBeenCalled()
    })
    // it('should iterate to the next valid letter filter when onComplete is called', () => {
    //   const { component, actions, wordFilter } = setup(initialItems, 100, ['A', 'A'])
    //   component.find('.next').simulate('click')
    //   expect(actions.onComplete).toHaveBeenCalled()
    //   expect(component.find(WordTextInput).length).toBe(1)
    //   console.log(component.debug())
    // })
})
