import React, { Component, PropTypes } from 'react'
import Word from './Word'

class Definition extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const item = this.props.item
    return (
        <div>
          <Word word={item.word} />
          <div className="definition">
            { item.def }
          </div>
        </div>
    )
  }
}

Definition.propTypes = {
  item: PropTypes.object.isRequired
}

export default Definition
