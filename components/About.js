import React, { Component, PropTypes } from 'react'

class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
      return (
          <div>
              <h1>About</h1>
              <p>{ this.props.route.foo }</p>
          </div>
      )
  }
}

About.propTypes = {
  foo: PropTypes.string.isRequired
}

export default About
