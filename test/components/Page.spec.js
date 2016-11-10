import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'
import Page from '../../components/Page'

const props = {
    title: 'Foo Title',
    paragraphs: ['Para 1', 'Para 2']
}

function setup() {

  const component = mount(
    <Page {...props} />
  )

  return {
    component: component,
    props: props
  }
}

describe('<Page/>', () => {
    it('should display a title', () => {
      const { component } = setup()
      expect(component.find('h1').text()).toBe('Foo Title')
    })
    it('should contain paragraphs', () => {
      const { component, words } = setup()
      expect(component.find('p').length).toBe(2)
    })
})
