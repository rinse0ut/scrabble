import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Letter from '../../components/Letter'

const letters = [
    { letter: ' ', score: 0 },
    { letter: 'B', score: 3 },
    { letter: 'E', score: 1 },
    { letter: 'G', score: 2 },
    { letter: 'F', score: 4 },
    { letter: 'J', score: 8 },
    { letter: 'Q', score: 10 },
    { letter: 'Y', score: 4 }
]

describe('<Letter/>', () => {
  it('should display a letter', () => {
    letters.forEach(x => {
        const component = shallow(<Letter letter={x.letter} />)
        expect(component.contains(x.letter)).toBe(true)
    })
  });
  it('should display a capital letter', () => {
    const component = shallow(<Letter letter="a" />)
    expect(component.contains('A')).toBe(true)
  });
  it('should display the correct score', () => {
    letters.forEach(x => {
        const component = shallow(<Letter letter={x.letter} />)
        const score = parseInt(component.find('sub').text())
        expect(score).toBe(x.score)
    })
  });
})
