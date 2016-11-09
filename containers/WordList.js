import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import DefinitionList from '../components/DefinitionList'
import { wordsStartingWith } from '../reducers/words'

export class WordList extends Component {

    render() {
        const { wordsStartingWith } = this.props

        return (
            <div>
                <h1>Word List</h1>
                <DefinitionList items={wordsStartingWith(this.props.params.letter)} />
            </div>
        )
    }
}

WordList.propTypes = {
  words: PropTypes.func.isRequired
}

export default WordList

const mapStateToProps = (state) => {
  return {
    wordsStartingWith: wordsStartingWith(state.words)
  }
}

export default connect(
  mapStateToProps
)(WordList)
