import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import DefinitionList from '../components/DefinitionList'
import { wordsStartingWith } from '../reducers/words'

export class WordList extends Component {

    render() {
        const { words } = this.props

        return (
            <div>
                <h1>Word List</h1>
                <DefinitionList items={words} />
            </div>
        )
    }
}

WordList.propTypes = {
  words: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    words: wordsStartingWith(state.words, state.quiz.letter)
  }
}

export default connect(
  mapStateToProps
)(WordList)
