import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { WordSectionList } from '../../containers/WordSectionList'

const initialProps = {
    sections: [
        ['AA', 'AB', 'AD', 'AW'],
        ['BA', 'BE', 'BY', 'DA', 'DE'],
        ['KI', 'KO', 'PO']
    ]
}

function setup(props = initialProps) {

  const component = mount(
    <WordSectionList {...props} />
  )

  return {
    component: component,
    props: props,
    ul: component.find('ul'),
    li: component.find('li')
  }
}

describe('<WordSectionList/>', () => {
    it('should display a list of word sections', () => {
      const { component, ul, li } = setup()
      expect(li.length).toBe(3)

      const sectionLabels = [
          'A',
          'B - D',
          'K - P'
      ]

      ul.children().forEach((node, key) => {
          expect(parseInt(node.key())).toBe(key)
          expect(node.text()).toBe(sectionLabels[key])
      })
    })



//     it('should display <WordTextInput/> when progress less than 100', () => {
//       const { component } = setup()
//       expect(component.find(WordTextInput).length).toBe(1)
//     })
//     it('should display <ProgressBar/>', () => {
//       var { component } = setup()
//       expect(component.find(ProgressBar).length).toBe(1)
//     })
//     it('should not display <DefinitionList/> when there are no correct responses', () => {
//       const { component } = setup({
//           startingLetters: ['A'],
//           progress: 0,
//           correctItems: []
//       })
//       expect(component.find(DefinitionList).length).toBe(0)
//     })
//     it('should display <DefinitionList/> containing the correct responses in <Definition/> components', () => {
//       const { component, props } = setup()
//       expect(component.find(DefinitionList).length).toBe(1)
//       expect(component.find(Definition).length).toBe(props.correctItems.length)
//     })
//     it('should display <FlashMessage/> following a response', () => {
//       const { component, props } = setup()
//       expect(component.find(FlashMessage).length).toBe(1)
//     })
// // )
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
    //   expect(component.find(WordTextInput).length).toBe(1)
    //   console.log(component.debug())
    // })
})
