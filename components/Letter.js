import React, { Component, PropTypes } from 'react'
import R from 'ramda'
import letters from '../stores/letters.json'

class Letter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const letter     = this.props.letter.toUpperCase()
    const hasLetter  = R.propEq('letter', letter);
    const findLetter = R.find(hasLetter, letters)
    const score      = R.prop('score', findLetter)

    return (
        <span className="btn btn-default pull-left">
          { letter }
          <sub>
            { score }
          </sub>
        </span>
    )
  }
}

Letter.propTypes = {
  letter: PropTypes.string.isRequired
}

export default Letter
