import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'
import WordTestResults from '../../components/WordTestResults'
import DefinitionList from '../../components/DefinitionList'
import Definition from '../../components/Definition'
import FlashMessage from '../../components/FlashMessage'

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

function setup(responses) {
  const component = mount(
    <WordTestResults items={items} responses={responses} />
  )

  return {
    component: component,
    items: items,
    response: responses
  }
}

describe('<WordTestResults/>', () => {
  it('should contain the correct results in a <DefinitionList/> and <Definition/> components', () => {
    const responses = ['AAH', 'AAL']
    const { component } = setup(responses)
    expect(component.find(DefinitionList).length).toBe(1)
    expect(component.find(Definition).length).toBe(responses.length)
  });
  it('should handle no responses', () => {
    const responses = []
    const { component } = setup(responses)
    expect(component.find(DefinitionList).length).toBe(1)
    expect(component.find(Definition).length).toBe(0)
  });
  // it('should display a danger <FlashMessage/> on a incorrect response', () => {
  //   const responses = ['FOO']
  //   const { component } = setup(responses)
  //   expect(component.find(FlashMessage).length).toBe(1)
  //   expect(component.find('div.alert-danger').length).toBe(1)
  //   expect(component.find('div.alert-danger').text()).toBe('FOO is incorrect!')
  // })
  // it('should display a success <FlashMessage/> on a correct response', () => {
  //   const responses = ['AAS']
  //   const { component } = setup(responses)
  //   expect(component.find(FlashMessage).length).toBe(1)
  //   expect(component.find('div.alert-success').length).toBe(1)
  //   expect(component.find('div.alert-success').text()).toBe('AAS is correct!')
  // })
})
