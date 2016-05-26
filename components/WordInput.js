import React, { Component, PropTypes } from 'react'

class WordInput extends Component {
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
        <div className="well col-md-3 gutter-left">
            <h2>Word Input</h2>
            <input type="text"
                className="form-control"
                name="guess"
                id="guess"
                value={this.state.text}
                onChange={this.handleChange.bind(this)}
                onKeyPress={this.handleSubmit.bind(this)} />
        </div>
    )
  }
}

WordInput.propTypes = {
  onSave: PropTypes.func.isRequired,
}

export default WordInput
