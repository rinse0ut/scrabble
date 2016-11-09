import React, { Component, PropTypes } from 'react'
import R from 'ramda'
import Letter from './Letter'

const letter = (l, k)  =>
    <Letter letter={l} key={k} />

class AnswerInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
        text: ''
    }
  }

  handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
        this.props.onSave(this.props.startingLetter + text)
        this.setState({ text: '' })
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    console.log('AnswerInput:STARTING_LETTER', this.props.startingLetter)
    return (
        <div>
            <span className="starting-letters">
                <Letter letter={this.props.startingLetter} />
            </span>
            <input type="text"
                className="form-control"
                placeholder="?"
                name="guess"
                id="guess"
                maxLength="1"
                value={this.state.text}
                onChange={this.handleChange.bind(this)}
                onKeyPress={this.handleSubmit.bind(this)} />
        </div>
    )
  }
}

AnswerInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  startingLetter: PropTypes.string.isRequired
}

export default AnswerInput
