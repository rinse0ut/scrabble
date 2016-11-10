import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { Quiz } from '../../containers/Quiz'
import DefinitionList from '../../components/DefinitionList'
import Definition from '../../components/Definition'
import AnswerInput from '../../components/AnswerInput'
import ProgressBar from '../../components/ProgressBar'
import FlashMessage from '../../components/FlashMessage'

const initialProps = {
    startingLetter: 'A',
    progress: 0,
    responses: ['AA', 'AB', 'AC'],
    correctItems: [
       {
         "word": "AA",
         "def": "Definition 1"
       },
       {
         "word": "AB",
         "def": "Definition 2"
       }
   ]
}

function setup(props = initialProps) {
  const actions = {
     onSave: expect.createSpy(),
     onInit: expect.createSpy()
  }

  const component = mount(
    <Quiz {...actions} {...props} />
  )

  return {
    component: component,
    actions: actions,
    props: props
  }
}

describe('<Quiz/>', () => {
    it('should display a title', () => {
      const { correctItems, component } = setup()
      expect(component.find('h1').text()).toBe('Scrabble Quiz')
    })
    it('should display <AnswerInput/> when progress less than 100', () => {
      const { component } = setup()
      expect(component.find(AnswerInput).length).toBe(1)
    })
    it('should display <ProgressBar/>', () => {
      var { component } = setup()
      expect(component.find(ProgressBar).length).toBe(1)
    })
    it('should not display <DefinitionList/> when there are no correct responses', () => {
      const { component } = setup({
          startingLetter: 'A',
          progress: 0,
          responses: [],
          correctItems: []
      })
      expect(component.find(DefinitionList).length).toBe(0)
    })
    it('should display <DefinitionList/> containing the correct responses in <Definition/> components', () => {
      const { component, props } = setup()
      expect(component.find(DefinitionList).length).toBe(1)
      expect(component.find(Definition).length).toBe(props.correctItems.length)
    })
    it('should display <FlashMessage/> following a response', () => {
      const { component, props } = setup()
      expect(component.find(FlashMessage).length).toBe(1)
    })
// )
    // it('should display a next set button when the word set is complete', () => {
    //   const { component, correctItems } = setup(initialItems, 100)
    //   expect(component.find('.next').length).toBe(1)
    // })
    // it('should call onComplete when next button is pressed', () => {
    //   const { component, actions } = setup(initialItems, 100)
    //   component.find('.next').simulate('click')
    //   expect(actions.onComplete).toHaveBeenCalled()
    // })
    // it('should iterate to the next valid letter filter when onComplete is called', () => {
    //   const { component, actions, wordFilter } = setup(initialItems, 100, ['A', 'A'])
    //   component.find('.next').simulate('click')
    //   expect(actions.onComplete).toHaveBeenCalled()
    //   expect(component.find(AnswerInput).length).toBe(1)
    //   console.log(component.debug())
    // })
})
