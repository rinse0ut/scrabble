import React, { Component, PropTypes } from 'react'
import R from 'ramda'
import Letter from './Letter'

const letter = (l, k)  =>
    <Letter letter={l} key={k} />

class WordTextInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
        text: ''
    }
  }

  handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
        this.props.onSave(this.props.startingLetters.join('') + text)
        this.setState({ text: '' })
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    const letters = R.mapObjIndexed(letter, this.props.startingLetters)
    return (
        <div>
            <span className="starting-letters"></span>
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

WordTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
}

export default WordTextInput
