import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'
import WordTestResults from '../../components/WordTestResults'
import DefinitionList from '../../components/DefinitionList'
import Definition from '../../components/Definition'

function setup() {
   const words = [
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
  const responses = ['AAH', 'AAL']
  const component = mount(
    <WordTestResults words={words} responses={responses} />
  )

  return {
    component: component,
    words: words,
    response: responses
  }
}

describe('<WordTestResults/>', () => {
  it('should contain the correct results in a <DefinitionList/> component', () => {
    const { component } = setup()
    expect(component.find(DefinitionList).length).toBe(1)
    expect(component.find(Definition).length).toBe(2)
  });

})
