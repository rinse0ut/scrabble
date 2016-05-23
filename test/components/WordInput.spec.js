import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import WordInput from '../../components/WordInput'

function setup(value = 0) {
  const component = shallow(
    <WordInput />
  )

  return {
    component: component
  }
}

describe('<WordInput/>', () => {
  it('should display a title', () => {
    const { component } = setup()
    expect(component.contains(<h2>Word Input</h2>)).toBe(true)
  });
  it('should display a text input box', () => {
    const { component } = setup()
    expect(component.find('input').length).toBe(1);
  });
  it('should have the correct css classes', () => {
    const { component } = setup()
    expect(component.find('div.well').length).toBe(1);
    expect(component.find('div.col-md-3').length).toBe(1);
    expect(component.find('div.gutter-left').length).toBe(1);
  });
})

//
// import expect from 'expect'
// import React from 'react'
// import { shallow } from 'enzyme'
// import Counter from '../../components/Counter'
//
// function setup(value = 0) {
//   const actions = {
//     onIncrement: expect.createSpy(),
//     onDecrement: expect.createSpy()
//   }
//   const component = shallow(
//     <Counter value={value} {...actions} />
//   )
//
//   return {
//     component: component,
//     actions: actions,
//     buttons: component.find('button'),
//     p: component.find('p')
//   }
// }
//
// describe('Counter component', () => {
//   it('should display count', () => {
//     const { p } = setup()
//     expect(p.text()).toMatch(/^Clicked: 0 times/)
//   })
//
//   it('first button should call onIncrement', () => {
//     const { buttons, actions } = setup()
//     buttons.at(0).simulate('click')
//     expect(actions.onIncrement).toHaveBeenCalled()
//   })
//
//   it('second button should call onDecrement', () => {
//     const { buttons, actions } = setup()
//     buttons.at(1).simulate('click')
//     expect(actions.onDecrement).toHaveBeenCalled()
//   })
//
//   it('third button should not call onIncrement if the counter is even', () => {
//     const { buttons, actions } = setup(42)
//     buttons.at(2).simulate('click')
//     expect(actions.onIncrement).toNotHaveBeenCalled()
//   })
//
//   it('third button should call onIncrement if the counter is odd', () => {
//     const { buttons, actions } = setup(43)
//     buttons.at(2).simulate('click')
//     expect(actions.onIncrement).toHaveBeenCalled()
//   })
//
//   it('third button should call onIncrement if the counter is odd and negative', () => {
//     const { buttons, actions } = setup(-43)
//     buttons.at(2).simulate('click')
//     expect(actions.onIncrement).toHaveBeenCalled()
//   })
//
//   it('fourth button should call onIncrement in a second', (done) => {
//     const { buttons, actions } = setup()
//     buttons.at(3).simulate('click')
//     setTimeout(() => {
//       expect(actions.onIncrement).toHaveBeenCalled()
//       done()
//     }, 1000)
//   })
// })
