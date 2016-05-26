import React, { Component, PropTypes } from 'react'

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
        this.props.onSave(text)
        this.setState({ text: '' })
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
        <input type="text"
            className="form-control"
            placeholder="Guess..."
            name="guess"
            id="guess"
            value={this.state.text}
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleSubmit.bind(this)} />
    )
  }
}

WordTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
}

export default WordTextInput
