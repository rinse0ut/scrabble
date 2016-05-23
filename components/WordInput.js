import React, { Component, PropTypes } from 'react'

class WordInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // const { letter, score, onIncrement } = this.props
    return (
        <div className="well col-md-3 gutter-left">
            <h2>Word Input</h2>
            <input type="text" name="guess" id="guess" />
        </div>
    )
  }
}

// Letter.propTypes = {
//   letter: PropTypes.string.isRequired,
//   score: PropTypes.number.isRequired
// }

export default WordInput
